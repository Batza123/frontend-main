@echo off
REM Start the Vite development server in a new window
start "" npm run dev

REM Wait 5 seconds to allow the server to initialize (adjust if necessary)
timeout /t 5 /nobreak >nul

REM Open the default browser to the Vite dev server URL
start "" "http://localhost:5173"
