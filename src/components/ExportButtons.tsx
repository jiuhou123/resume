'use client';

import React from 'react';
import { saveAs } from 'file-saver';

const SYSTEM_URL = 'https://pcawbfiyohfa.sealoshzh.site';

const ExportButtons = () => {
  // 生成文件名的函数
  const getFileName = (extension: string) => {
    const today = new Date();
    const date = today.toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }).replace(/\//g, '');
    return `李鑫华-Java开发-${date}${extension}`;
  };

  const exportToPDF = async () => {
    const element = document.getElementById('resume-content');
    if (!element) {
      console.error('Resume content element not found');
      return;
    }

    try {
      // 创建一个临时容器
      const container = document.createElement('div');
      container.style.width = '210mm';
      container.style.minHeight = '297mm';
      container.style.padding = '20mm';
      container.style.margin = '0';
      container.style.backgroundColor = 'white';
      container.style.boxSizing = 'border-box';
      container.style.position = 'relative';
      
      // 克隆原始内容
      const contentClone = element.cloneNode(true) as HTMLElement;
      
      // 应用基本样式
      const styleSheet = document.createElement('style');
      styleSheet.textContent = `
        @page {
          size: A4;
          margin: 0;
        }
        * {
          font-family: "Microsoft YaHei", sans-serif;
          line-height: 1.5;
          color: #000;
          box-sizing: border-box;
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
        }
        body {
          margin: 0;
          padding: 0;
          width: 210mm;
          min-height: 297mm;
        }
        h1 { 
          font-size: 20px; 
          font-weight: bold; 
          margin-bottom: 10px;
          text-align: left;
        }
        h2 { 
          font-size: 15px; 
          font-weight: bold; 
          margin: 16px 0 8px; 
          border-bottom: 1px solid #eee; 
          padding-bottom: 4px; 
          clear: both;
        }
        p { 
          font-size: 13px; 
          margin: 4px 0; 
          white-space: pre-line; 
          text-align: justify;
        }
        .header-content { 
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 20px;
          gap: 24px;
        }
        .header-info {
          flex: 1;
        }
        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 6px;
          color: #4B5563;
          margin-top: 0;
        }
        .contact-item {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 13px;
        }
        .contact-item svg {
          width: 14px;
          height: 14px;
          flex-shrink: 0;
          color: #4B5563;
        }
        .section-content { 
          margin-bottom: 10px; 
          clear: both;
          width: 100%;
        }
        .tech-tags-container {
          display: flex;
          flex-wrap: wrap;
          gap: 4px;
          margin: 4px 0;
          width: 100%;
          padding: 2px 0;
        }
        .tech-tag {
          display: inline-flex;
          align-items: center;
          background: #f3f4f6;
          padding: 2px 6px;
          border-radius: 2px;
          font-size: 12px;
          white-space: nowrap;
          color: #4B5563;
          margin: 0;
        }
        .skills-section h2 {
          margin-bottom: 6px;
        }
        .skills-category {
          margin-bottom: 8px;
        }
        .skills-category-title {
          font-weight: 500;
          margin-bottom: 2px;
          color: #374151;
          font-size: 13px;
        }
        img.avatar {
          width: 88px;
          height: 120px;
          object-fit: contain;
          border: none;
          box-shadow: none;
        }
        .page-section {
          page-break-inside: avoid !important;
          break-inside: avoid !important;
        }
      `;
      container.appendChild(styleSheet);
      container.appendChild(contentClone);
      
      // 添加系统链接
      const linkContainer = document.createElement('div');
      linkContainer.style.position = 'absolute';
      linkContainer.style.bottom = '20mm';
      linkContainer.style.left = '20mm';
      linkContainer.style.right = '20mm';
      linkContainer.style.borderTop = '2px solid #e5e7eb';
      linkContainer.style.paddingTop = '16px';
      linkContainer.style.fontSize = '14px';
      linkContainer.style.color = '#2563eb';
      linkContainer.style.textAlign = 'center';
      linkContainer.innerHTML = `本人在线简历：<a href="${SYSTEM_URL}" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline; font-weight: 500;">${SYSTEM_URL}</a>`;
      container.appendChild(linkContainer);

      // 动态导入 html2pdf
      const html2pdf = (await import('html2pdf.js')).default;

      const opt = {
        margin: 0,
        filename: getFileName('.pdf'),
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { 
          scale: 2,
          useCORS: true,
          letterRendering: true,
          windowWidth: 1200,
          imageTimeout: 0,
          removeContainer: true,
          logging: false,
          backgroundColor: '#ffffff',
          imageRendering: 'pixelated'
        },
        jsPDF: { 
          unit: 'mm', 
          format: 'a4', 
          orientation: 'portrait',
          compress: true,
          precision: 16,
          putOnlyUsedFonts: true
        },
        pagebreak: { mode: 'legacy' }
      };

      document.body.appendChild(container);
      const worker = html2pdf().set(opt).from(container);
      // @ts-ignore
      const doc = await worker.toPdf().get('pdf');
      // 在A4底部添加可点击链接（x=60, y=280, width=90, height=8，单位mm，可根据实际微调）
      doc.link(60, 280, 90, 8, { url: SYSTEM_URL });
      await worker.save();
      document.body.removeChild(container);
    } catch (error) {
      console.error('Failed to export PDF:', error);
    }
  };

  return (
    <div className="flex gap-4">
      <button
        onClick={exportToPDF}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded shadow transition-colors"
      >
        导出 PDF
      </button>
    </div>
  );
};

export default ExportButtons; 