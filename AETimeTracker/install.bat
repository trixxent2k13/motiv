@echo off
:: Run as Administrator (Right-click -> Run as administrator)
cd /d "%~dp0"
powershell -ExecutionPolicy Bypass -File "%~dp0install.ps1"
pause
