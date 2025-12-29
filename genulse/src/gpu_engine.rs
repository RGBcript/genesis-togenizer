use wgpu::util::DeviceExt;
use std::borrow::Cow;

pub struct GpuVisualCortex {
    device: wgpu::Device,
    queue: wgpu::Queue,
    pipeline: wgpu::ComputePipeline,
    bind_group_layout: wgpu::BindGroupLayout,
}

impl GpuVisualCortex {
    pub async fn new() -> Option<Self> {
        // 1. Instancia WGPU
        let instance = wgpu::Instance::default();

        // 2. Adaptador (Tarjeta Gráfica)
        let adapter = instance
            .request_adapter(&wgpu::RequestAdapterOptions::default())
            .await?;

        // 3. Dispositivo y Cola
        let (device, queue) = adapter
            .request_device(
                &wgpu::DeviceDescriptor {
                    label: Some("Genulse GPU Device"),
                    required_features: wgpu::Features::empty(),
                    required_limits: wgpu::Limits::downlevel_defaults(),
                },
                None,
            )
            .await
            .ok()?;

        // 4. Cargar Shader
        let shader = device.create_shader_module(wgpu::ShaderModuleDescriptor {
            label: Some("Visual Cortex Shader"),
            source: wgpu::ShaderSource::Wgsl(Cow::Borrowed(include_str!("shaders/visual_cortex.wgsl"))),
        });

        // 5. Pipeline Layout
        let bind_group_layout = device.create_bind_group_layout(&wgpu::BindGroupLayoutDescriptor {
            label: Some("Visual Cortex Bind Group Layout"),
            entries: &[
                // Input Buffer
                wgpu::BindGroupLayoutEntry {
                    binding: 0,
                    visibility: wgpu::ShaderStages::COMPUTE,
                    ty: wgpu::BindingType::Buffer {
                        ty: wgpu::BufferBindingType::Storage { read_only: true },
                        has_dynamic_offset: false,
                        min_binding_size: None,
                    },
                    count: None,
                },
                // Output Buffer
                wgpu::BindGroupLayoutEntry {
                    binding: 1,
                    visibility: wgpu::ShaderStages::COMPUTE,
                    ty: wgpu::BindingType::Buffer {
                        ty: wgpu::BufferBindingType::Storage { read_only: false },
                        has_dynamic_offset: false,
                        min_binding_size: None,
                    },
                    count: None,
                },
                // Weights Buffer
                wgpu::BindGroupLayoutEntry {
                    binding: 2,
                    visibility: wgpu::ShaderStages::COMPUTE,
                    ty: wgpu::BindingType::Buffer {
                        ty: wgpu::BufferBindingType::Storage { read_only: true },
                        has_dynamic_offset: false,
                        min_binding_size: None,
                    },
                    count: None,
                },
                // Uniforms
                wgpu::BindGroupLayoutEntry {
                    binding: 3,
                    visibility: wgpu::ShaderStages::COMPUTE,
                    ty: wgpu::BindingType::Buffer {
                        ty: wgpu::BufferBindingType::Uniform,
                        has_dynamic_offset: false,
                        min_binding_size: None,
                    },
                    count: None,
                },
            ],
        });

        let pipeline_layout = device.create_pipeline_layout(&wgpu::PipelineLayoutDescriptor {
            label: Some("Visual Cortex Pipeline Layout"),
            bind_group_layouts: &[&bind_group_layout],
            push_constant_ranges: &[],
        });

        let pipeline = device.create_compute_pipeline(&wgpu::ComputePipelineDescriptor {
            label: Some("Visual Cortex Compute Pipeline"),
            layout: Some(&pipeline_layout),
            module: &shader,
            entry_point: "main",
        });

        Some(Self {
            device,
            queue,
            pipeline,
            bind_group_layout,
        })
    }

    pub fn process(&self, input: &[f32], weights: &[f32], dt: f32) -> Vec<f32> {
        pollster::block_on(self.process_async(input, weights, dt))
    }

    async fn process_async(&self, input: &[f32], weights: &[f32], dt: f32) -> Vec<f32> {
        let size = std::mem::size_of_val(input) as u64;
        
        // 1. Crear Buffers
        let input_buffer = self.device.create_buffer_init(&wgpu::util::BufferInitDescriptor {
            label: Some("Input Buffer"),
            contents: bytemuck::cast_slice(input),
            usage: wgpu::BufferUsages::STORAGE,
        });

        let output_buffer = self.device.create_buffer(&wgpu::BufferDescriptor {
            label: Some("Output Buffer"),
            size,
            usage: wgpu::BufferUsages::STORAGE | wgpu::BufferUsages::COPY_SRC,
            mapped_at_creation: false,
        });

        let weights_buffer = self.device.create_buffer_init(&wgpu::util::BufferInitDescriptor {
            label: Some("Weights Buffer"),
            contents: bytemuck::cast_slice(weights),
            usage: wgpu::BufferUsages::STORAGE,
        });

        // Uniforms
        let params = [input.len() as u32, 1, dt.to_bits()]; // width, height, dt
        let uniform_buffer = self.device.create_buffer_init(&wgpu::util::BufferInitDescriptor {
            label: Some("Uniform Buffer"),
            contents: bytemuck::cast_slice(&params),
            usage: wgpu::BufferUsages::UNIFORM,
        });

        // 2. Bind Group
        let bind_group = self.device.create_bind_group(&wgpu::BindGroupDescriptor {
            label: Some("Compute Bind Group"),
            layout: &self.bind_group_layout,
            entries: &[
                wgpu::BindGroupEntry { binding: 0, resource: input_buffer.as_entire_binding() },
                wgpu::BindGroupEntry { binding: 1, resource: output_buffer.as_entire_binding() },
                wgpu::BindGroupEntry { binding: 2, resource: weights_buffer.as_entire_binding() },
                wgpu::BindGroupEntry { binding: 3, resource: uniform_buffer.as_entire_binding() },
            ],
        });

        // 3. Encoder & Dispatch
        let mut encoder = self.device.create_command_encoder(&wgpu::CommandEncoderDescriptor {
            label: Some("Compute Encoder"),
        });

        {
            let mut cpass = encoder.begin_compute_pass(&wgpu::ComputePassDescriptor {
                label: Some("Compute Pass"),
                timestamp_writes: None,
            });
            cpass.set_pipeline(&self.pipeline);
            cpass.set_bind_group(0, &bind_group, &[]);
            cpass.dispatch_workgroups((input.len() as u32 + 63) / 64, 1, 1);
        }

        // 4. Staging Buffer para leer resultados
        let staging_buffer = self.device.create_buffer(&wgpu::BufferDescriptor {
            label: Some("Staging Buffer"),
            size,
            usage: wgpu::BufferUsages::MAP_READ | wgpu::BufferUsages::COPY_DST,
            mapped_at_creation: false,
        });

        encoder.copy_buffer_to_buffer(&output_buffer, 0, &staging_buffer, 0, size);

        self.queue.submit(Some(encoder.finish()));

        // 5. Leer resultados
        let buffer_slice = staging_buffer.slice(..);
        let (sender, receiver) = futures::channel::oneshot::channel();
        buffer_slice.map_async(wgpu::MapMode::Read, move |v| sender.send(v).unwrap());

        self.device.poll(wgpu::Maintain::Wait);

        if let Ok(Ok(())) = receiver.await {
            let data = buffer_slice.get_mapped_range();
            let result: Vec<f32> = bytemuck::cast_slice(&data).to_vec();
            drop(data);
            staging_buffer.unmap();
            result
        } else {
            panic!("Error leyendo GPU");
        }
    }
}
