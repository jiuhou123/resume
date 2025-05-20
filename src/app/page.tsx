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
  header: {
  name: string;
  gender: string;
  age: string;
  nativePlace: string;
  phone: string;
  email: string;
  location: string;
  experience: string;
  jobIntention: string;
  salary: string;
  avatar?: string;
};
  about: string;
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

const defaultResumeData: ResumeData = {
  header: {
    name: '李鑫华',
    gender: '男',
    age: '26岁',
    nativePlace: '盐城',
    phone: '17312308221',
    email: '1750209521@qq.com',
    location: '盐城',
    experience: '4年工作经验',
    jobIntention: 'Java',
    salary: '11-14K',
    avatar: '',
    },
  about: '',
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
      setResumeData(JSON.parse(savedData));
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
          <Header
            name={resumeData.header.name}
            gender={resumeData.header.gender}
            age={resumeData.header.age}
            nativePlace={resumeData.header.nativePlace}
            phone={resumeData.header.phone}
            email={resumeData.header.email}
            location={resumeData.header.location}
            experience={resumeData.header.experience}
            jobIntention={resumeData.header.jobIntention}
            salary={resumeData.header.salary}
            avatar={resumeData.header.avatar}
            />
          <div className="space-y-6">
            <About />
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