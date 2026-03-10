# Копирует AETimeTracker в папку CEP для тестирования
# Запуск: .\sync_to_cep.ps1

$src = $PSScriptRoot
$dst = "$env:APPDATA\Adobe\CEP\extensions\AETimeTracker"
if (-not (Test-Path (Split-Path $dst))) { New-Item -ItemType Directory -Force -Path (Split-Path $dst) | Out-Null }
Remove-Item -Path $dst -Recurse -Force -ErrorAction SilentlyContinue
Copy-Item -Path $src -Destination $dst -Recurse -Force
Write-Host "Synced to $dst"
