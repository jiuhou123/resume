# 在线简历生成器

一个现代化的在线简历生成器，支持实时编辑、在线预览和导出功能。

## 访问地址

- 线上地址：[https://pcawbfiyohfa.sealoshzh.site](https://pcawbfiyohfa.sealoshzh.site)
- 本地开发：http://localhost:4400

## 环境要求

- Node.js >= 14.0.0
- npm >= 6.14.0

### 支持的操作系统

- Windows
- macOS
- Linux

### 支持的浏览器

- Chrome (推荐)
- Firefox
- Safari
- Edge

## 开发设置

1. 克隆项目

```bash
git clone <repository-url>
cd <project-directory>
```

2. 安装依赖

```bash
npm install
```

3. 启动开发服务器

```bash
npm run dev
```

## 技术栈

- **前端框架**: Next.js 14
- **样式方案**: Tailwind CSS
- **状态管理**: React Hooks + localStorage
- **类型检查**: TypeScript
- **代码格式化**: ESLint + Prettier
- **Markdown 支持**: react-markdown + remark-gfm
- **样式增强**: @tailwindcss/typography

## 项目结构

```
src/
├── app/                    # 应用主目录
│   ├── page.tsx           # 首页（简历预览）
│   ├── admin/             # 管理路由
│   │   ├── page.tsx       # 管理入口
│   │   ├── login/        # 登录页面
│   │   └── edit/         # 简历编辑页面
│   └── layout.tsx         # 应用布局
├── components/            # 可复用组件
│   ├── Header.tsx        # 简历头部
│   ├── About.tsx         # 个人简介
│   ├── Experience.tsx    # 工作经验
│   ├── Education.tsx     # 教育经历
│   ├── Skills.tsx        # 技能特长
│   └── Projects.tsx      # 项目经验
└── middleware.ts         # 路由中间件
```

## 主要功能

1. **简历预览**

   - 访问根路径 `/` 可直接查看简历内容
   - 响应式设计，支持各种设备访问
   - 优雅的排版和布局

2. **简历编辑**

   - 访问 `/admin` 进入管理界面
   - 默认账号：user / 123456
   - 支持头像上传和管理
   - 所有修改实时保存
   - 编辑内容包括：
     - 基本信息（姓名、邮箱、电话、地址）
     - 个人简介
     - 工作经验
     - 教育经历
     - 技能特长
     - 项目经验

3. **导出功能**

   - 支持导出 PDF 格式
   - 支持导出 Word 格式

4. **安全特性**
   - 路由保护
   - 登录状态管理
   - Cookie 认证

## 自定义配置

1. **样式定制**

   - 通过修改 `tailwind.config.js` 自定义主题
   - 支持自定义字体、颜色、间距等

2. **内容定制**
   - 在 `src/app/page.tsx` 中修改默认简历内容
   - 可自定义简历各部分的显示顺序

## 注意事项

1. 所有数据存储在浏览器的 localStorage 中，清除浏览器数据会导致内容丢失
2. 建议定期导出备份简历内容
3. 图片上传支持主流图片格式（JPG、PNG、GIF 等）
4. 建议使用最新版本的 Chrome 浏览器以获得最佳体验

## 贡献指南

1. Fork 项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交改动 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 提交 Pull Request

## 许可证

MIT License - 详见 LICENSE 文件
