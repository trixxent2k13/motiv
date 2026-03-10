# AE Time Tracker - installer
# Run as Administrator: Right-click install.bat -> Run as administrator
# Or: powershell -ExecutionPolicy Bypass -File install.ps1 (run PowerShell as admin)

$ErrorActionPreference = "Stop"
Write-Host "=== AE Time Tracker - installation ===" -ForegroundColor Cyan

# 1. Registry - PlayerDebugMode for CEP
$csxsVersions = @("9", "10", "11", "12")
foreach ($v in $csxsVersions) {
    $key = "HKCU:\Software\Adobe\CSXS.$v"
    if (-not (Test-Path $key)) {
        New-Item -Path $key -Force | Out-Null
    }
    Set-ItemProperty -Path $key -Name "PlayerDebugMode" -Value "1" -Type String -Force -ErrorAction SilentlyContinue
}
Write-Host "[OK] CEP debug mode enabled (CSXS.9-12)" -ForegroundColor Green

# 2. Copy extension
$src = $PSScriptRoot
$dstDir = "$env:APPDATA\Adobe\CEP\extensions"
$dst = "$dstDir\AETimeTracker"

if (-not (Test-Path $dstDir)) {
    New-Item -ItemType Directory -Path $dstDir -Force | Out-Null
}
if (Test-Path $dst) {
    Remove-Item -Path $dst -Recurse -Force
}
Copy-Item -Path $src -Destination $dst -Recurse -Force
Write-Host "[OK] Extension copied to $dst" -ForegroundColor Green

Write-Host ""
Write-Host "Done. Restart After Effects and open: Window -> Extensions -> AE Time Tracker" -ForegroundColor Yellow
