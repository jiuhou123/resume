'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

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
    salary: '15-20K',
    avatar: '',
    },
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
- 负责系统核心功能模块的设计与实现，包括路网数据处理、POI信息检索和路径规划功能
- 设计并实现基于 PostGIS 的空间查询功能，优化查询性能
- 实现了灵活的POI类型过滤机制和距离容错处理
- 开发了完整的 RESTful API 接口，支持多样化的查询需求

技术要点：
- 使用 Spring Boot + MyBatis 构建后端服务，实现了清晰的三层架构
- 采用 PostGIS 进行空间数据存储和地理信息查询
- 实现了基于 K 最短路径算法的路径规划功能
- 使用 Common Table Expression (CTE) 优化复杂查询性能
- 集成 Swagger 进行 API 文档管理
- 应用 Lombok 简化代码，提高开发效率

项目难点及解决方案：
- 空间数据查询性能优化：使用 PostGIS 空间索引、采用 CTE 优化复杂查询、实现查询条件动态组合
- POI信息检索精确度：实现可配置的距离容错机制、支持多维度POI类型过滤、使用空间函数确保准确的距离计算`,
      technologies: 'Spring Boot, MyBatis, PostGIS, Swagger, Lombok, K最短路径算法, CTE',
      startDate: '2024-10',
      endDate: '至今',
    },
  ],
};

export default function EditPage() {
  const [resumeData, setResumeData] = useState<ResumeData>(defaultResumeData);
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = Cookies.get('isLoggedIn');
    if (!isLoggedIn) {
      router.push('/admin/login');
    }

    // 尝试从localStorage加载保存的数据
    const savedData = localStorage.getItem('resumeData');
    if (savedData) {
      setResumeData(JSON.parse(savedData));
    }
  }, [router]);

  const handleSave = () => {
    localStorage.setItem('resumeData', JSON.stringify(resumeData));
    alert('保存成功！');
  };

  const handlePreview = () => {
    localStorage.setItem('resumeData', JSON.stringify(resumeData));
    router.push('/');
  };

  const handleLogout = () => {
    Cookies.remove('isLoggedIn');
    router.push('/admin/login');
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setResumeData({
          ...resumeData,
          header: { ...resumeData.header, avatar: reader.result as string },
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteAvatar = () => {
    setResumeData({
      ...resumeData,
      header: { ...resumeData.header, avatar: '' },
    });
  };

  const resetToDefault = () => {
    localStorage.setItem('resumeData', JSON.stringify(defaultResumeData));
    window.location.href = '/';
    };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">编辑简历</h1>
          <div className="space-x-4">
            <button
              onClick={handleSave}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              保存
            </button>
            <button
              onClick={handlePreview}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              预览
            </button>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              退出
            </button>
            <button
                onClick={resetToDefault}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 font-bold"
                >
                重置为默认
            </button>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 space-y-6">
          {/* 基本信息 */}
          <section>
            <div className="flex justify-between items-start mb-6">
              <div className="flex-1">
                <h2 className="text-xl font-semibold mb-4">基本信息</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">姓名</label>
                    <input
                      type="text"
                      value={resumeData.header.name}
                      onChange={(e) =>
                        setResumeData({
                          ...resumeData,
                          header: { ...resumeData.header, name: e.target.value },
                        })
                      }
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">性别</label>
                    <input
                      type="text"
                      value={resumeData.header.gender}
                      onChange={(e) =>
                        setResumeData({
                          ...resumeData,
                          header: { ...resumeData.header, gender: e.target.value },
                        })
                      }
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">年龄</label>
                    <input
                      type="text"
                      value={resumeData.header.age}
                      onChange={(e) =>
                        setResumeData({
                          ...resumeData,
                          header: { ...resumeData.header, age: e.target.value },
                        })
                      }
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">籍贯</label>
                    <input
                      type="text"
                      value={resumeData.header.nativePlace}
                      onChange={(e) =>
                        setResumeData({
                          ...resumeData,
                          header: { ...resumeData.header, nativePlace: e.target.value },
                        })
                      }
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">工作经验</label>
                    <input
                      type="text"
                      value={resumeData.header.experience}
                      onChange={(e) =>
                        setResumeData({
                          ...resumeData,
                          header: { ...resumeData.header, experience: e.target.value },
                        })
                      }
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">求职意向</label>
                    <input
                      type="text"
                      value={resumeData.header.jobIntention}
                      onChange={(e) =>
                        setResumeData({
                          ...resumeData,
                          header: { ...resumeData.header, jobIntention: e.target.value },
                        })
                      }
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">期望薪资</label>
                    <input
                      type="text"
                      value={resumeData.header.salary}
                      onChange={(e) =>
                        setResumeData({
                          ...resumeData,
                          header: { ...resumeData.header, salary: e.target.value },
                        })
                      }
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">邮箱</label>
                    <input
                      type="email"
                      value={resumeData.header.email}
                      onChange={(e) =>
                        setResumeData({
                          ...resumeData,
                          header: { ...resumeData.header, email: e.target.value },
                        })
                      }
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">电话</label>
                    <input
                      type="text"
                      value={resumeData.header.phone}
                      onChange={(e) =>
                        setResumeData({
                          ...resumeData,
                          header: { ...resumeData.header, phone: e.target.value },
                        })
                      }
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">地址</label>
                    <input
                      type="text"
                      value={resumeData.header.location}
                      onChange={(e) =>
                        setResumeData({
                          ...resumeData,
                          header: { ...resumeData.header, location: e.target.value },
                        })
                      }
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                </div>
              </div>

              {/* 头像上传 */}
              <div className="ml-8">
                <div className="relative w-32 h-40">
                  {resumeData.header.avatar ? (
                    <div className="group relative w-full h-full overflow-hidden border-4 border-white shadow-lg">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={resumeData.header.avatar}
                        alt="头像"
                        className="w-full h-full object-cover"
                      />
                      {/* 删除按钮 */}
                      <div 
                        className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer"
                        onClick={handleDeleteAvatar}
                      >
                        <svg
                          className="w-8 h-8 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </div>
                    </div>
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center border-4 border-white shadow-lg">
                      <svg
                        className="w-16 h-16 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                  )}
                  <label
                    htmlFor="avatar-upload"
                    className="absolute bottom-0 right-0 bg-blue-500 text-white p-2 rounded-full cursor-pointer shadow-lg hover:bg-blue-600 transition-colors duration-200"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </label>
                  <input
                    id="avatar-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleAvatarChange}
                    className="hidden"
                  />
                </div>
                <p className="text-sm text-gray-500 text-center mt-2">
                  {resumeData.header.avatar ? '鼠标悬停可删除头像' : '点击图标上传头像'}
                </p>
              </div>
            </div>
          </section>

          {/* 个人优势 */}
          <section>
            <h2 className="text-xl font-semibold mb-4">个人优势</h2>
            {resumeData.advantages.map((adv, idx) => (
              <div key={idx} className="flex items-center mb-2">
                <input
                  type="text"
                  value={adv}
                  onChange={e => {
                    const newAdvs = [...resumeData.advantages];
                    newAdvs[idx] = e.target.value;
                    setResumeData({ ...resumeData, advantages: newAdvs });
                  }}
                  className="w-full px-3 py-2 border rounded-md"
                />
                <button
                  type="button"
                  onClick={() => {
                    const newAdvs = resumeData.advantages.filter((_, i) => i !== idx);
                    setResumeData({ ...resumeData, advantages: newAdvs });
                  }}
                  className="ml-2 text-red-500 hover:text-red-600"
                >删除</button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => setResumeData({ ...resumeData, advantages: [...resumeData.advantages, ''] })}
              className="text-blue-500 hover:text-blue-600 mt-2"
            >添加优势</button>
          </section>

          {/* 工作经验 */}
          <section>
            <h2 className="text-xl font-semibold mb-4">工作经验</h2>
            {resumeData.experience.map((exp, index) => (
              <div key={index} className="border p-4 rounded-md mb-4">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">公司</label>
                    <input
                      type="text"
                      value={exp.company}
                      onChange={(e) => {
                        const newExp = [...resumeData.experience];
                        newExp[index].company = e.target.value;
                        setResumeData({ ...resumeData, experience: newExp });
                      }}
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">职位</label>
                    <input
                      type="text"
                      value={exp.position}
                      onChange={(e) => {
                        const newExp = [...resumeData.experience];
                        newExp[index].position = e.target.value;
                        setResumeData({ ...resumeData, experience: newExp });
                      }}
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">开始时间</label>
                    <input
                      type="text"
                      value={exp.startDate}
                      onChange={(e) => {
                        const newExp = [...resumeData.experience];
                        newExp[index].startDate = e.target.value;
                        setResumeData({ ...resumeData, experience: newExp });
                      }}
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">结束时间</label>
                    <input
                      type="text"
                      value={exp.endDate}
                      onChange={(e) => {
                        const newExp = [...resumeData.experience];
                        newExp[index].endDate = e.target.value;
                        setResumeData({ ...resumeData, experience: newExp });
                      }}
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">工作描述</label>
                  <textarea
                    value={exp.description}
                    onChange={(e) => {
                      const newExp = [...resumeData.experience];
                      newExp[index].description = e.target.value;
                      setResumeData({ ...resumeData, experience: newExp });
                    }}
                    className="w-full px-3 py-2 border rounded-md h-24"
                  />
                </div>
                <button
                  onClick={() => {
                    const newExp = resumeData.experience.filter((_, i) => i !== index);
                    setResumeData({ ...resumeData, experience: newExp });
                  }}
                  className="mt-2 text-red-500 hover:text-red-600"
                >
                  删除
                </button>
              </div>
            ))}
            <button
              onClick={() =>
                setResumeData({
                  ...resumeData,
                  experience: [
                    ...resumeData.experience,
                    {
                      company: '',
                      position: '',
                      startDate: '',
                      endDate: '',
                      description: '',
                    },
                  ],
                })
              }
              className="text-blue-500 hover:text-blue-600"
            >
              添加工作经验
            </button>
          </section>

          {/* 教育经历 */}
          <section>
            <h2 className="text-xl font-semibold mb-4">教育经历</h2>
            {resumeData.education.map((edu, index) => (
              <div key={index} className="border p-4 rounded-md mb-4">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">学校</label>
                    <input
                      type="text"
                      value={edu.school}
                      onChange={(e) => {
                        const newEdu = [...resumeData.education];
                        newEdu[index].school = e.target.value;
                        setResumeData({ ...resumeData, education: newEdu });
                      }}
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">学位</label>
                    <input
                      type="text"
                      value={edu.degree}
                      onChange={(e) => {
                        const newEdu = [...resumeData.education];
                        newEdu[index].degree = e.target.value;
                        setResumeData({ ...resumeData, education: newEdu });
                      }}
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">专业</label>
                  <input
                    type="text"
                    value={edu.field}
                    onChange={(e) => {
                      const newEdu = [...resumeData.education];
                      newEdu[index].field = e.target.value;
                      setResumeData({ ...resumeData, education: newEdu });
                    }}
                    className="w-full px-3 py-2 border rounded-md"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">开始时间</label>
                    <input
                      type="text"
                      value={edu.startDate}
                      onChange={(e) => {
                        const newEdu = [...resumeData.education];
                        newEdu[index].startDate = e.target.value;
                        setResumeData({ ...resumeData, education: newEdu });
                      }}
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">结束时间</label>
                    <input
                      type="text"
                      value={edu.endDate}
                      onChange={(e) => {
                        const newEdu = [...resumeData.education];
                        newEdu[index].endDate = e.target.value;
                        setResumeData({ ...resumeData, education: newEdu });
                      }}
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                </div>
                <button
                  onClick={() => {
                    const newEdu = resumeData.education.filter((_, i) => i !== index);
                    setResumeData({ ...resumeData, education: newEdu });
                  }}
                  className="mt-2 text-red-500 hover:text-red-600"
                >
                  删除
                </button>
              </div>
            ))}
            <button
              onClick={() =>
                setResumeData({
                  ...resumeData,
                  education: [
                    ...resumeData.education,
                    {
                      school: '',
                      degree: '',
                      field: '',
                      startDate: '',
                      endDate: '',
                    },
                  ],
                })
              }
              className="text-blue-500 hover:text-blue-600"
            >
              添加教育经历
            </button>
          </section>

          {/* 项目经验 */}
          <section>
            <h2 className="text-xl font-semibold mb-4">项目经验</h2>
            {resumeData.projects.map((project, index) => (
              <div key={index} className="border p-4 rounded-md mb-4">
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">项目名称</label>
                  <input
                    type="text"
                    value={project.name}
                    onChange={(e) => {
                      const newProjects = [...resumeData.projects];
                      newProjects[index].name = e.target.value;
                      setResumeData({ ...resumeData, projects: newProjects });
                    }}
                    className="w-full px-3 py-2 border rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">项目描述</label>
                  <textarea
                    value={project.description}
                    onChange={(e) => {
                      const newProjects = [...resumeData.projects];
                      newProjects[index].description = e.target.value;
                      setResumeData({ ...resumeData, projects: newProjects });
                    }}
                    className="w-full px-3 py-2 border rounded-md h-24"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">使用技术</label>
                  <input
                    type="text"
                    value={project.technologies}
                    onChange={(e) => {
                      const newProjects = [...resumeData.projects];
                      newProjects[index].technologies = e.target.value;
                      setResumeData({ ...resumeData, projects: newProjects });
                    }}
                    className="w-full px-3 py-2 border rounded-md"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">开始时间</label>
                    <input
                      type="text"
                      value={project.startDate}
                      onChange={(e) => {
                        const newProjects = [...resumeData.projects];
                        newProjects[index].startDate = e.target.value;
                        setResumeData({ ...resumeData, projects: newProjects });
                      }}
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">结束时间</label>
                    <input
                      type="text"
                      value={project.endDate}
                      onChange={(e) => {
                        const newProjects = [...resumeData.projects];
                        newProjects[index].endDate = e.target.value;
                        setResumeData({ ...resumeData, projects: newProjects });
                      }}
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                </div>
                <button
                  onClick={() => {
                    const newProjects = resumeData.projects.filter((_, i) => i !== index);
                    setResumeData({ ...resumeData, projects: newProjects });
                  }}
                  className="mt-2 text-red-500 hover:text-red-600"
                >
                  删除
                </button>
              </div>
            ))}
            <button
              onClick={() =>
                setResumeData({
                  ...resumeData,
                  projects: [
                    ...resumeData.projects,
                    {
                      name: '',
                      description: '',
                      technologies: '',
                      startDate: '',
                      endDate: '',
                    },
                  ],
                })
              }
              className="text-blue-500 hover:text-blue-600"
            >
              添加项目经验
            </button>
          </section>
        </div>
      </div>
    </div>
  );
} 