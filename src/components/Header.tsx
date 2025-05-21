'use client';

import React from 'react';
import Image from 'next/image';

interface HeaderProps {
  header: Array<{ label: string; value: string }>;
}

export default function Header({ header }: HeaderProps) {
  // 查找头像
  const avatarItem = header.find(item => item.label === '头像' || item.label.toLowerCase() === 'avatar');
  const avatar = avatarItem?.value;
  return (
    <header className="mb-8">
      <div className="relative flex flex-col items-center">
        {/* 头像 */}
        {avatar && (
          <div className="absolute right-0 top-0 w-[88px] h-[120px]">
            <img src={avatar} alt="头像" className="w-full h-full object-contain rounded shadow" />
          </div>
        )}
        {/* 姓名（优先找 label 为"姓名"或 name）*/}
        <h1 className="text-3xl font-bold text-center mb-2">
          {header.find(item => item.label === '姓名' || item.label.toLowerCase() === 'name')?.value || ''}
        </h1>
      </div>
    </header>
  );
} 