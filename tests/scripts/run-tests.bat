
@echo off
setlocal enabledelayedexpansion

echo ============================================
echo   Running Tests with Newman (Windows)
echo ============================================

REM --- Paths ---
set COLLECTION=postman/v1/collection.json
set ENVIRONMENT=postman/v1/environment.json
set REPORT_DIR=tests/reports
set REPORT_FILE=%REPORT_DIR%/newman-report.html

REM --- Ensure report directory exists ---
if not exist "%REPORT_DIR%" (
    echo Creating reports directory...
    mkdir "%REPORT_DIR%"
)

REM --- Check if Newman is installed ---
where newman >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Newman is not installed.
    echo Install it with:  npm install -g newman newman-reporter-htmlextra
    exit /b 1
)

echo Running Newman...
echo Collection: %COLLECTION%
echo Environment: %ENVIRONMENT%
echo ---------------------------------------------

newman run %COLLECTION% ^
  -e %ENVIRONMENT% ^
  --reporters cli,htmlextra ^
  --reporter-htmlextra-export %REPORT_FILE%

if %errorlevel% equ 0 (
    echo ---------------------------------------------
    echo Tests PASSED successfully
    echo Report generated at: %REPORT_FILE%
    echo ---------------------------------------------
) else (
    echo ---------------------------------------------
    echo Tests FAILED
    echo Check the report at: %REPORT_FILE%
    echo ---------------------------------------------
)

endlocal

