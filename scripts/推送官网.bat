@echo off
chcp 65001 >nul
title TENET 官网 · 一键更新推送
set "GIT=D:\360Downloads\git\Git\cmd\git.exe"
set "REPO=C:\Users\86151\Desktop\xintiao-newapi-main\官网"
set "PROXY=http://127.0.0.1:7897"
cd /d "%REPO%" || (echo [错误] 找不到官网文件夹 & pause & exit /b 1)
"%GIT%" config http.proxy %PROXY% >nul 2>&1
echo ============================================
echo   TENET 官网  一键更新并推送
echo   %REPO%
echo ============================================
echo.
echo [1/4] 检查是否有改动...
"%GIT%" add .
set /a changed=0
"%GIT%" diff --cached --name-only | findstr /r "." >nul && set /a changed=1
if "%changed%"=="0" (
    echo [提示] 没有任何改动，无需提交。
) else (
    echo [2/4] 提交改动...
    for /f "delims=" %%i in ('powershell -NoProfile -Command "Get-Date -Format 'yyyy-MM-dd HH:mm'"') do set "TS=%%i"
    "%GIT%" commit -m "chore: 自动更新 %TS%" || (echo [错误] 提交失败 & pause & exit /b 1)
)
echo [3/4] 通过代理推送到 GitHub...
"%GIT%" push || (echo [错误] 推送失败，请确认代理已开启 & pause & exit /b 1)
echo [4/4] 完成！
echo.
"%GIT%" status -sb
echo.
echo ============================================
echo   推送成功，按任意键关闭窗口。
pause >nul
