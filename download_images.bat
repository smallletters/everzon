@echo off
chcp 65001
REM 图片下载批处理脚本
REM @author <smallletters@sina.com>
REM @date 2026-03-27

echo 正在创建图片目录...
if not exist everzon_images mkdir everzon_images

echo.
echo 方案1: 使用 wget 下载 (如果已安装)
echo wget -r -l1 -H -nd -A.jpg -A.jpeg -A.png -P everzon_images https://www.everzon.com/
echo.

echo 方案2: 使用 PowerShell 下载
echo 请先运行 Python 脚本: python download_images.py
echo.

echo 按任意键退出...
pause > nul
