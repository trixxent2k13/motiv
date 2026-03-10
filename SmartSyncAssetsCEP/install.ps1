# Smart Sync Assets (CEP) - installer
# Run as Administrator

$ErrorActionPreference = "Stop"
Write-Host "=== Smart Sync Assets CEP - installation ===" -ForegroundColor Cyan

$csxsVersions = @("9", "10", "11", "12")
foreach ($v in $csxsVersions) {
    $key = "HKCU:\Software\Adobe\CSXS.$v"
    if (-not (Test-Path $key)) { New-Item -Path $key -Force | Out-Null }
    Set-ItemProperty -Path $key -Name "PlayerDebugMode" -Value "1" -Type String -Force -ErrorAction SilentlyContinue
}
Write-Host "[OK] CEP debug mode enabled" -ForegroundColor Green

$src = $PSScriptRoot
$dst = "$env:APPDATA\Adobe\CEP\extensions\SmartSyncAssetsCEP"
$dstDir = Split-Path $dst
if (-not (Test-Path $dstDir)) { New-Item -ItemType Directory -Path $dstDir -Force | Out-Null }
if (Test-Path $dst) { Remove-Item -Path $dst -Recurse -Force }
Copy-Item -Path $src -Destination $dst -Recurse -Force
Write-Host "[OK] Extension copied to $dst" -ForegroundColor Green

Write-Host ""
Write-Host "Done. Restart AE and open: Window -> Extensions -> Smart Sync Assets" -ForegroundColor Yellow
