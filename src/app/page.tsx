'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';
import ExportButtons from '@/components/ExportButtons';

interface ResumeData {
  header: Array<{ label: string; value: string }>;
  about: string;
  advantages: string[];
  experience: Array<{
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    description: string;
  }>;
  education: Array<{
    school: string;
    degree: string;
    field: string;
    startDate: string;
    endDate: string;
  }>;
  skills: Array<{
    category: string;
    items: string[];
  }>;
  projects: Array<{
    name: string;
    description: string;
    technologies: string;
    startDate: string;
    endDate: string;
  }>;
}

const infoIcons: Record<string, JSX.Element> = {
  '性别': <svg className="w-5 h-5 text-blue-400 mr-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>,
  '年龄': <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" /></svg>,
  '籍贯': <svg className="w-5 h-5 text-yellow-400 mr-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" /></svg>,
  '电话': <svg className="w-5 h-5 text-purple-400 mr-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>,
  '邮箱': <svg className="w-5 h-5 text-pink-400 mr-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
  '地址': <svg className="w-5 h-5 text-orange-400 mr-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" /></svg>,
  '工作经验': <svg className="w-5 h-5 text-indigo-400 mr-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><rect width="20" height="12" x="2" y="7" rx="2" /><path strokeLinecap="round" strokeLinejoin="round" d="M16 3v4M8 3v4" /></svg>,
  '求职意向': <svg className="w-5 h-5 text-teal-400 mr-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>,
  '期望薪资': <svg className="w-5 h-5 text-red-400 mr-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 0V4m0 8v8" /></svg>,
};
const defaultIcon = <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" /></svg>;

const defaultResumeData: ResumeData = {
  header: [
    { label: '姓名', value: '李鑫华' },
    { label: '性别', value: '男' },
    { label: '年龄', value: '26岁' },
    { label: '籍贯', value: '盐城' },
    { label: '电话', value: '17312308221' },
    { label: '邮箱', value: '1750209521@qq.com' },
    { label: '地址', value: '盐城' },
    { label: '工作经验', value: '4年工作经验' },
    { label: '求职意向', value: 'Java' },
    { label: '期望薪资', value: '15-20K' },
  ],
  about: '',
  advantages: [
    '熟练掌握Java基础（集合、多线程、JVM内存模型），精通Spring全家桶（Spring/Spring MVC/SpringBoot）、Mybatis等主流框架。',
    '熟练使用MySQL、PostgreSQL，具备SQL优化经验；熟悉Redis缓存架构及应用。',
    '熟悉Linux系统及常用命令，能独立完成日志排查、shell脚本编写、自动化部署（Docker/Nginx）。',
    '了解Dubbo、Spring Cloud微服务架构、Kafka。'
  ],
  experience: [
    {
      company: '南京烽火星空通信发展有限公司',
      position: '',
      startDate: '2021.07',
      endDate: '2024.05',
      description: `主要需求评审与模块设计，遵循编码规范完成核心功能开发，实现Web及DBN包部署脚本优化，提升部署效率30%。\n负责系统全生命周期管理，从开发自测到版本提测、问题闭环，保障全国100+局点生产环境稳定性，线上问题响应实效<15分钟。\n编写自动化运维脚本，支持多地市环境快速部署，降低人工干预成本约40%。`,
    },
  ],
  education: [
    {
      school: '南京工程学院',
      degree: '本科',
      field: '数字媒体技术',
      startDate: '2017',
      endDate: '2021',
    },
  ],
  skills: [
    {
      category: '编程语言',
      items: ['JavaScript', 'TypeScript', 'Python'],
    },
  ],
  projects: [
    {
      name: '万花简',
      description: `项目简介：
面向海量级数据治理的Web应用，整合分散数据源，提供统一检索入口，集成智能分析（线索分析、多媒体人脸识别、以图搜图等）及后台运维管理功能，已在全国100+局点上线。

主要职责：
- 主导线索查询模块开发，支持海量数据定向检索，提升查询效率50%。
- 设计多数据源适配方案，实现异构数据源无缝接入，系统扩展性提升60%。
- 开发图片打标分类及统计模块。
- 集成多媒体业务功能（人脸检索、以图搜视频），优化用户交互体验，获客户满意度95%+。
- 编写一键化打包脚本，节省人力投入。

技术要点：
- Spring、SpringMVC、MyBatis、PostgreSQL、Mysql、Redis、Nginx`,
      technologies: 'Spring、SpringMVC、MyBatis、PostgreSQL、Mysql、Redis、Nginx',
      startDate: '2022.09',
      endDate: '2024.05',
    },
    {
      name: '智能警务助理',
      description: `项目简介：
面向警务人员的人机交互平台，支持要素检索、语意分析、轨迹追踪等智能化功能，采用Docker容器化部署，实现插件化扩展。

主要职责：
- 基于Kafka+多线程监听机制，设计插件结果实时处理框架，任务响应时效<1秒。
- 开发DBN模块及自动化脚本，支持业务库一键安装/升级，部署效率提升70%。

技术要点：
- Spring、SpringMVC、MyBatis、PostgreSQL、Kafka、Redis、Docker、Nginx、Vue`,
      technologies: 'Spring、SpringMVC、MyBatis、PostgreSQL、Kafka、Redis、Docker、Nginx、Vue',
      startDate: '2021.07',
      endDate: '2024.05',
    },
    {
      name: '路网数据管理与POI信息检索系统',
      description: `该项目是一个基于 Spring Boot 的路网数据管理系统，主要用于处理和查询道路网络数据及其相关的兴趣点(POI)信息。系统支持复杂的空间数据处理、路径规划和POI检索功能。

主要职责：
• 负责系统核心功能模块的设计与实现，包括路网数据处理、POI信息检索和路径规划功能
• 设计并实现基于 PostGIS 的空间查询功能，优化查询性能
• 实现了灵活的POI类型过滤机制和距离容错处理
• 开发了完整的 RESTful API 接口，支持多样化的查询需求

技术要点：
• 使用 Spring Boot + MyBatis 构建后端服务，实现了清晰的三层架构
• 采用 PostGIS 进行空间数据存储和地理信息查询
• 实现了基于 K 最短路径算法的路径规划功能
• 使用 Common Table Expression (CTE) 优化复杂查询性能
• 集成 Swagger 进行 API 文档管理
• 应用 Lombok 简化代码，提高开发效率

项目难点及解决方案：
• 空间数据查询性能优化：使用 PostGIS 空间索引、采用 CTE 优化复杂查询、实现查询条件动态组合
• POI信息检索精确度：实现可配置的距离容错机制、支持多维度POI类型过滤、使用空间函数确保准确的距离计算`,
      technologies: 'Spring Boot, MyBatis, PostGIS, Swagger, Lombok, K最短路径算法, CTE',
      startDate: '2024-10',
      endDate: '至今',
    },
  ],
};

export default function Home() {
  const [resumeData, setResumeData] = useState<ResumeData>(defaultResumeData);

  useEffect(() => {
    const savedData = localStorage.getItem('resumeData');
    if (savedData) {
      const parsed = JSON.parse(savedData);
      if (!Array.isArray(parsed.header)) {
        parsed.header = [
          { label: '姓名', value: parsed.header.name || '' },
          { label: '性别', value: parsed.header.gender || '' },
          { label: '年龄', value: parsed.header.age || '' },
          { label: '籍贯', value: parsed.header.nativePlace || '' },
          { label: '电话', value: parsed.header.phone || '' },
          { label: '邮箱', value: parsed.header.email || '' },
          { label: '地址', value: parsed.header.location || '' },
          { label: '工作经验', value: parsed.header.experience || '' },
          { label: '求职意向', value: parsed.header.jobIntention || '' },
          { label: '期望薪资', value: parsed.header.salary || '' },
        ];
      }
      setResumeData(parsed);
    }
  }, []);

  const handleReset = () => {
    localStorage.removeItem('resumeData');
    setResumeData(defaultResumeData);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-[210mm] mx-auto px-4 py-8">
        <div id="resume-content" className="bg-white rounded shadow-sm p-[15mm] mb-8 min-h-[297mm] page-section">
          <Header header={resumeData.header} />
          {/* 基本信息 Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">基本信息</h2>
            <div className="flex flex-col gap-2 text-gray-700 text-base max-w-xl">
              {resumeData.header.filter(item => item.label !== '姓名' && item.label.toLowerCase() !== 'name' && item.label !== '头像' && item.label.toLowerCase() !== 'avatar').map((item, idx) => (
                <div key={idx} className="flex items-center">
                  {infoIcons[item.label] || defaultIcon}
                  <span className="w-28 inline-block">{item.label}：</span>
                  <span>{item.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <About advantages={resumeData.advantages} />
            <Experience items={resumeData.experience} />
            <Education items={resumeData.education} />
            <Projects items={resumeData.projects} />
          </div>
        </div>
        
        <div className="flex justify-between items-center mt-8">
          <Footer />
          <div className="flex space-x-4">
            <ExportButtons />
          </div>
        </div>
      </div>

      {/* 编辑按钮 */}
      <Link
        href="/admin"
        className="fixed top-6 right-6 bg-blue-600 text-white px-6 py-2.5 rounded-full hover:bg-blue-700 flex items-center space-x-2 shadow-lg transition-all duration-200 hover:scale-105 active:scale-95"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
        </svg>
        <span className="font-medium">编辑简历</span>
      </Link>
    </main>
  );
} 