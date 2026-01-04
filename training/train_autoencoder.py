import torch
import torch.nn as nn
import torch.optim as optim
import cv2
import numpy as np
import os
import glob
from torch.utils.data import DataLoader, Dataset

# --- CONFIGURACIÓN ---
LATENT_DIM = 256       # Aumentado para HD (antes 48)
IMG_SIZE = 128         # Resolución aumentada (antes 64)
BATCH_SIZE = 32
EPOCHS = 30            # Ajustado para la nueva complejidad
LEARNING_RATE = 1e-3
VIDEOS_PATH = "training/raw_videos/*.mp4"
MODEL_PATH_ENC = "assets/models/materia_encoder.onnx"
MODEL_PATH_DEC = "assets/models/materia_decoder.onnx"

# --- ARQUITECTURA DEL OJO (Córtex Visual HD) ---
class Autoencoder(nn.Module):
    def __init__(self):
        super(Autoencoder, self).__init__()
        
        # Encoder (La Retina -> Nervio Óptico)
        self.encoder = nn.Sequential(
            # Entrada: 3 x 128 x 128
            nn.Conv2d(3, 32, kernel_size=4, stride=2, padding=1), # -> 32 x 64 x 64
            nn.ReLU(),
            nn.Conv2d(32, 64, kernel_size=4, stride=2, padding=1), # -> 64 x 32 x 32
            nn.ReLU(),
            nn.Conv2d(64, 128, kernel_size=4, stride=2, padding=1), # -> 128 x 16 x 16
            nn.ReLU(),
            nn.Conv2d(128, 256, kernel_size=4, stride=2, padding=1), # -> 256 x 8 x 8
            nn.ReLU(),
            nn.Conv2d(256, 512, kernel_size=4, stride=2, padding=1), # -> 512 x 4 x 4
            nn.ReLU(),
            nn.Flatten(),
            nn.Linear(512 * 4 * 4, LATENT_DIM),
            nn.Tanh()
        )
        
        # Decoder (Imaginación)
        self.decoder = nn.Sequential(
            nn.Linear(LATENT_DIM, 512 * 4 * 4),
            nn.ReLU(),
            nn.Unflatten(1, (512, 4, 4)),
            nn.ConvTranspose2d(512, 256, kernel_size=4, stride=2, padding=1), # -> 8 x 8
            nn.ReLU(),
            nn.ConvTranspose2d(256, 128, kernel_size=4, stride=2, padding=1), # -> 16 x 16
            nn.ReLU(),
            nn.ConvTranspose2d(128, 64, kernel_size=4, stride=2, padding=1), # -> 32 x 32
            nn.ReLU(),
            nn.ConvTranspose2d(64, 32, kernel_size=4, stride=2, padding=1), # -> 64 x 64
            nn.ReLU(),
            nn.ConvTranspose2d(32, 3, kernel_size=4, stride=2, padding=1),  # -> 128 x 128
            nn.Sigmoid()
        )

    def forward(self, x):
        latent = self.encoder(x)
        reconstructed = self.decoder(latent)
        return reconstructed, latent

# --- CARGADOR DE DATOS (VIDEOS) ---
class VideoDataset(Dataset):
    def __init__(self, video_paths):
        self.frames = []
        print(f"👁️  Cargando memoria visual de: {video_paths}")
        files = glob.glob(video_paths)
        if not files:
            print("⚠️  ADVERTENCIA: No se encontraron videos en training/raw_videos/")
        
        for f in files:
            print(f"   -> Procesando: {os.path.basename(f)}")
            cap = cv2.VideoCapture(f)
            count = 0
            while True:
                ret, frame = cap.read()
                if not ret: break
                
                # Tomamos 1 de cada 5 frames para tener variedad sin llenar la RAM
                if count % 5 == 0:
                    # Redimensionar y normalizar
                    frame = cv2.resize(frame, (IMG_SIZE, IMG_SIZE))
                    frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
                    frame = frame.astype(np.float32) / 255.0
                    frame = np.transpose(frame, (2, 0, 1)) # HWC -> CHW
                    self.frames.append(frame)
                
                count += 1
                if len(self.frames) > 10000: break # Límite de seguridad
            cap.release()
        print(f"✅ Total frames cargados para entrenamiento: {len(self.frames)}")

    def __len__(self):
        return len(self.frames)

    def __getitem__(self, idx):
        return torch.tensor(self.frames[idx])

# --- BUCLE DE ENTRENAMIENTO ---
def train():
    device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
    print(f"🚀 Entrenando Ojo en: {device}")
    
    model = Autoencoder().to(device)
    criterion = nn.MSELoss()
    optimizer = optim.Adam(model.parameters(), lr=LEARNING_RATE)
    
    dataset = VideoDataset(VIDEOS_PATH)
    if len(dataset) == 0:
        return
        
    # Aceleración: num_workers=4 para carga paralela
    dataloader = DataLoader(dataset, batch_size=BATCH_SIZE, shuffle=True, num_workers=4, persistent_workers=True)

    print("\n🧠 Iniciando formación del Córtex Visual...")
    for epoch in range(EPOCHS):
        total_loss = 0
        for img in dataloader:
            img = img.to(device)
            
            # Forward
            recon, _ = model(img)
            loss = criterion(recon, img)
            
            # Backward
            optimizer.zero_grad()
            loss.backward()
            optimizer.step()
            
            total_loss += loss.item()
            
        avg_loss = total_loss / len(dataloader)
        print(f"Epoch {epoch+1}/{EPOCHS} | Error de Reconstrucción: {avg_loss:.6f}")

    # --- EXPORTAR A ONNX (Para que Rust lo use) ---
    print("\n💾 Guardando la estructura neuronal (ONNX)...")
    dummy_input = torch.randn(1, 3, IMG_SIZE, IMG_SIZE).to(device)
    dummy_latent = torch.randn(1, LATENT_DIM).to(device)
    
    # Crear carpeta si no existe
    os.makedirs("assets/models", exist_ok=True)

    # Exportar Encoder
    torch.onnx.export(model.encoder, dummy_input, MODEL_PATH_ENC, 
                      input_names=['input'], output_names=['output'],
                      dynamic_axes={'input': {0: 'batch'}, 'output': {0: 'batch'}})
    
    # Exportar Decoder
    torch.onnx.export(model.decoder, dummy_latent, MODEL_PATH_DEC, 
                      input_names=['input'], output_names=['output'],
                      dynamic_axes={'input': {0: 'batch'}, 'output': {0: 'batch'}})
    print("✅ Ojo entrenado y exportado. Curo ahora puede VER.")

if __name__ == "__main__":
    train()
