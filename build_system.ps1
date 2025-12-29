# Build System for G.Genulse-Arcodular

# Asegurar que el script se ejecute desde su directorio
if ($PSScriptRoot) { Set-Location $PSScriptRoot }

Write-Host ">>> Iniciando Build del Sistema..." -ForegroundColor Cyan

# 1. Build Rust Core & Brain
Write-Host ">>> Compilando Genulse y Arcodular..." -ForegroundColor Yellow
cargo build
if ($LASTEXITCODE -ne 0) { exit 1 }

# 2. Build WASM for Togen
Write-Host ">>> Compilando Togen (WASM)..." -ForegroundColor Yellow
Set-Location togen
wasm-pack build --target web --out-name togen --out-dir pkg
if ($LASTEXITCODE -ne 0) { exit 1 }
Set-Location ..

# 3. Setup Frontend
Write-Host ">>> Configurando Frontend..." -ForegroundColor Yellow
Set-Location togen/www
if (!(Test-Path "node_modules")) {
    npm install
}
# npm run build # Opcional

Write-Host ">>> Build Completado Exitosamente!" -ForegroundColor Green
