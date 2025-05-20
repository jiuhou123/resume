'use client';

import React from 'react';
import Image from 'next/image';

interface HeaderProps {
  name: string;
  gender?: string;
  age?: string;
  nativePlace?: string;
  phone: string;
  email: string;
  location: string;
  experience?: string;
  jobIntention?: string;
  salary?: string;
  avatar?: string;
}

export default function Header({ name, gender, age, nativePlace, phone, email, location, experience, jobIntention, salary, avatar }: HeaderProps) {
  return (
    <header className="mb-8">
      <div className="relative flex flex-col items-center">
        {/* 头像 */}
        {avatar && (
          <div className="absolute right-0 top-0 w-[88px] h-[120px]">
            <img src={avatar} alt="头像" className="w-full h-full object-contain rounded shadow" />
          </div>
        )}
        {/* 姓名 */}
        <h1 className="text-3xl font-bold text-center mb-2">{name}</h1>
        {/* 第一行：基本信息 */}
        <div className="flex flex-wrap justify-center items-center gap-2 text-gray-700 text-base mb-1">
          {gender && <span>{gender}</span>}
          {age && <span>| 年龄: {age}</span>}
          {nativePlace && <span>| 籍贯: {nativePlace}</span>}
          <span>| <svg className="inline w-4 h-4 mr-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>{phone}</span>
          <span>| <svg className="inline w-4 h-4 mr-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>{email}</span>
        </div>
        {/* 第二行：工作经验、意向、薪资 */}
        <div className="flex flex-wrap justify-center items-center gap-2 text-gray-700 text-base">
          {experience && <span>{experience}</span>}
          {jobIntention && <span>| 求职意向: {jobIntention}</span>}
          {salary && <span>| 期望薪资: {salary}</span>}
        </div>
      </div>
    </header>
  );
} 