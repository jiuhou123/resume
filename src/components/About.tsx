'use client';

import React from 'react';

export default function About() {
  return (
    <section>
      <h2 className="text-lg font-bold text-gray-800 mb-2 pb-1 border-b border-gray-200">个人优势</h2>
      <div className="text-sm text-gray-800 leading-relaxed space-y-1">
        <div><span className="font-bold">核心能力：</span>熟练掌握Java基础（集合、多线程、JVM内存模型），精通Spring全家桶（Spring/Spring MVC/SpringBoot）、Mybatis等主流框架。</div>
        <div><span className="font-bold">数据库：</span>熟练使用MySQL、PostgreSQL，具备SQL优化经验；熟悉Redis缓存架构及应用。</div>
        <div><span className="font-bold">运维部署：</span>熟悉Linux系统及常用命令，能独立完成日志排查、shell脚本编写、自动化部署（Docker/Nginx）。</div>
        <div><span className="font-bold">分布式技术：</span>了解Dubbo、Spring Cloud微服务架构、Kafka。</div>
      </div>
    </section>
  );
} 