@echo off
echo ======================================================
echo          GITHUB UPLOAD SCRIPT - SIDDHARTHA
echo ======================================================
echo.
echo [1/5] Initializing Git...
git init

echo [2/5] Adding files...
git add .

echo [3/5] Committing changes...
git commit -m "Initial commit - Siddhartha Portfolio"

echo [4/5] Connecting to GitHub...
git remote add origin https://github.com/siddharthagupta3/portfolio.git || git remote set-url origin https://github.com/siddharthagupta3/portfolio.git
git branch -M main

echo [5/5] Pushing code to GitHub...
git push -u origin main

echo.
echo ======================================================
echo DONE! Check your GitHub: https://github.com/siddharthagupta3/portfolio
echo ======================================================
pause
