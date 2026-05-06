@echo off
echo ======================================================
echo          PORTFOLIO AUTO-FIX & RUN SCRIPT
echo ======================================================
echo.
echo [1/4] Closing any active Node processes...
taskkill /f /im node.exe >nul 2>&1

echo [2/4] Cleaning old modules...
if exist node_modules (
    echo Deleting node_modules folder (this may take a minute)...
    rmdir /s /q node_modules
)
if exist package-lock.json (
    del /f /q package-lock.json
)

echo [3/4] Installing dependencies (Please wait 3-5 minutes)...
call npm install --no-audit

echo [4/4] Starting the project...
echo If this fails, trying 'npx next dev'...
call npm run dev || npx next dev

pause
