'use client';

import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-16 text-center text-gray-500 text-sm border-t pt-8">
      <p>最后更新时间：{new Date().toLocaleDateString('zh-CN')}</p>
    </footer>
  );
};

export default Footer; 