#!/usr/bin/env python3
"""
图片下载脚本
@author <smallletters@sina.com>
@date 2026-03-27
@description 从 everzon.com 下载产品图片
"""

import requests
import os
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse
import time

def download_images(url, output_folder="images"):
    """
    从指定 URL 下载图片
    
    Args:
        url: 目标网页 URL
        output_folder: 图片保存文件夹
    """
    # 创建输出文件夹
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)
    
    # 设置请求头（模拟浏览器）
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    }
    
    try:
        # 获取网页内容
        print(f"正在访问: {url}")
        response = requests.get(url, headers=headers, timeout=10)
        response.raise_for_status()
        
        # 解析 HTML
        soup = BeautifulSoup(response.text, 'html.parser')
        
        # 查找所有图片
        images = soup.find_all('img')
        print(f"找到 {len(images)} 个图片标签")
        
        downloaded = 0
        for i, img in enumerate(images):
            # 获取图片 URL
            img_url = img.get('src') or img.get('data-src')
            if not img_url:
                continue
            
            # 转换为绝对 URL
            img_url = urljoin(url, img_url)
            
            # 检查是否是有效图片 URL
            if not img_url.startswith(('http://', 'https://')):
                continue
            
            try:
                # 下载图片
                img_response = requests.get(img_url, headers=headers, timeout=10)
                img_response.raise_for_status()
                
                # 获取文件扩展名
                parsed = urlparse(img_url)
                ext = os.path.splitext(parsed.path)[1] or '.jpg'
                
                # 保存图片
                filename = f"product_{downloaded+1:03d}{ext}"
                filepath = os.path.join(output_folder, filename)
                
                with open(filepath, 'wb') as f:
                    f.write(img_response.content)
                
                print(f"已下载: {filename} ({len(img_response.content)} bytes)")
                downloaded += 1
                
                # 延迟，避免请求过快
                time.sleep(0.5)
                
            except Exception as e:
                print(f"下载失败 {img_url}: {e}")
                continue
        
        print(f"\n完成！共下载 {downloaded} 张图片到 {output_folder}/")
        
    except Exception as e:
        print(f"错误: {e}")

if __name__ == "__main__":
    # 下载 everzon.com 图片
    download_images("https://www.everzon.com/", "everzon_images")
