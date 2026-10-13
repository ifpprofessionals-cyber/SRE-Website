@echo off
setlocal enabledelayedexpansion
title SRE Fitness Academy - Push Updates to GitHub & Vercel
color 0B

echo ====================================================================
echo        SRE FITNESS ACADEMY - QUICK WEBSITE DEPLOYMENT TOOL
echo ====================================================================
echo.

:: 1. Check if Git is installed
where git >nul 2>nul
if %errorlevel% neq 0 (
    color 0C
    echo [ERROR] Git is not installed or not in your Windows PATH.
    echo Please install Git from https://git-scm.com/downloads
    echo.
    pause
    exit /b
)

:: 2. Check if git repository is initialized
if not exist ".git" (
    color 0E
    echo [NOTICE] This project folder does not have Git initialized yet.
    echo When you are ready with your GitHub repository link:
    echo 1. Tell your assistant or run:
    echo      git init
    echo      git remote add origin YOUR_GITHUB_REPO_URL
    echo      git branch -M main
    echo.
    echo After initializing once, this script will automatically push every time!
    echo.
    pause
    exit /b
)

:: 3. Ask for commit message or use default
echo Current Status:
git status -s
echo.
set /p commit_msg="Enter description of changes (Press ENTER for default 'Website update'): "

if "%commit_msg%"=="" (
    for /f "tokens=2 delims==" %%I in ('wmic os get localdatetime /value') do set datetime=%%I
    set commit_msg=Website update: %datetime:~0,4%-%datetime:~4,2%-%datetime:~6,2% %datetime:~8,2%:%datetime:~10,2%
)

echo.
echo [1/3] Staging changes...
git add .

echo [2/3] Committing changes: "%commit_msg%"...
git commit -m "%commit_msg%"
if %errorlevel% neq 0 (
    echo.
    echo [INFO] Nothing new to commit (working tree clean).
)

echo.
echo [3/3] Pushing to remote repository...
git push origin main
if %errorlevel% neq 0 (
    echo.
    echo Trying fallback branch 'master'...
    git push origin master
)

if %errorlevel% equ 0 (
    color 0A
    echo.
    echo ====================================================================
    echo   [SUCCESS] Changes pushed to GitHub successfully!
    echo   Vercel will now automatically build and publish your updates.
    echo ====================================================================
) else (
    color 0C
    echo.
    echo [WARNING] Push failed. Please verify:
    echo 1. Your internet connection.
    echo 2. You have write permission to the GitHub repository.
    echo 3. The remote repository URL is configured correctly.
)

echo.
pause
