<h2 align="center">superglue desktop 🍯</h2>
<p align="center">自愈集成代理桌面版</p>

<p align="center">
  <a href="#功能特性">功能特性</a> •
  <a href="#快速开始">快速开始</a> •
  <a href="#开发指南">开发指南</a> •
  <a href="#部署方式">部署方式</a> •
  <a href="#贡献指南">贡献指南</a>
</p>

---

> **本项目基于 [superglue](https://github.com/superglue-ai/superglue) 开发，扩展为桌面版（desktop）应用。您可以像使用原版 superglue 一样体验自愈集成代理，同时获得桌面端的便捷操作和本地集成能力。**

superglue desktop 是一个强大的自愈集成代理桌面应用。它可以作为您与任何复杂/遗留 API 之间的智能代理，确保您总能以期望的格式获得所需数据，同时提供桌面端的便捷操作体验。

## 功能特性

🔧 **智能集成** - 自动处理复杂 API 集成，无需手动适配  
🖥️ **桌面优先** - 原生桌面体验，支持 Windows、macOS、Linux  
🌐 **Web 兼容** - 同时提供 Web 版本，灵活部署  
🤖 **AI 驱动** - 集成 OpenAI 和 Google Gemini，智能处理数据转换  
📊 **可视化配置** - 直观的工作流配置界面  
🔐 **安全认证** - 支持多种认证方式，保障数据安全  
🎯 **多数据源** - 支持 PostgreSQL、Redis、文件存储等多种数据源  
⚡ **高性能** - 基于 Turborepo 的高效构建系统和现代前端技术栈  
🏗️ **Monorepo 架构** - 使用 Turbo 实现增量构建和智能缓存

## 快速开始

### 系统要求

- Node.js 22+ 
- npm 9+
- Git

### 安装运行

1. **克隆项目**
   ```bash
   git clone https://github.com/JianWang6/superglue-desktop.git
   cd superglue-desktop
   ```

2. **安装依赖**
   ```bash
   npm install
   npm install -g typescript next turbo
   ```

3. **配置环境**
   ```bash
   cp .env.example .env
   # 编辑 .env 文件配置必要的环境变量
   ```

4. **启动应用**
   
   **桌面版：**
   ```bash
   npm run dev:electron
   ```
   
   **Web 版：**
   ```bash
   npm run dev
   ```
   然后访问 http://localhost:3001

## 开发指南

### 环境准备

1. **克隆仓库**
   ```bash
   git clone 
   ```

2. **安装依赖**
   ```bash
   npm install
   ```

3. **环境配置**
   创建 `.env` 文件并配置必要的环境变量：
   ```bash
   cp .env.example .env
   # 编辑 .env 文件，配置 API 密钥等信息
   ```

### 启动方式

#### Web 模式开发
```bash
npm run dev
```
这将启动 Web 版本，默认运行在 `http://localhost:3001`

#### 桌面应用开发
```bash
npm run dev:electron
```
这将启动 Electron 桌面应用程序

#### 生产环境启动
```bash
npm run start
```

### 构建与打包


#### 构建桌面应用
```bash
npm run build:electron
```

#### 打包桌面应用
```bash
npm run pack
```

#### 发布桌面应用
```bash
npm run dist
```

### 项目架构

本项目采用 **Turbo Monorepo** 架构，通过 Turborepo 实现高效的构建缓存和并行任务执行：

```
packages/
├── core/          # 核心功能模块
│   ├── auth/      # 认证管理 (API Key, Supabase 等)
│   ├── datastore/ # 数据存储 (Memory, File, PostgreSQL, Redis)
│   ├── llm/       # LLM 集成 (OpenAI, Google Gemini)
│   ├── graphql/   # GraphQL 接口和解析器
│   ├── utils/     # 工具函数库 (API, 文档, 转换等)
│   ├── external/  # 外部服务集成
│   └── workflow/  # 工作流引擎
├── web/           # Next.js Web 应用
├── electron/      # Electron 桌面应用
└── shared/        # 共享类型定义和工具
```

#### Turbo 配置优势

- **增量构建** - 仅重新构建变更的包
- **远程缓存** - 团队共享构建缓存
- **并行执行** - 自动检测依赖关系并行执行任务
- **智能调度** - 优化任务执行顺序

### 核心功能

- **自愈集成代理**：智能处理复杂/遗留 API 集成
- **多模态支持**：支持 Web 和桌面端使用
- **GraphQL API**：统一的 API 接口
- **工作流引擎**：可视化配置集成流程
- **认证管理**：支持多种认证方式
- **数据存储**：支持内存、文件、PostgreSQL、Redis 等存储方式

### 开发命令

基于 **Turbo** 的高效构建系统：

- `npm run dev` - 启动 Web 开发模式（使用 Turbo 并行构建）
- `npm run dev:electron` - 启动桌面应用开发模式
- `npm run build` - 构建所有模块（增量构建）
- `npm run test` - 运行所有测试（并行执行）
- `npm run test:coverage` - 运行测试并生成覆盖率报告
- `npm run lint` - 代码风格检查
- `npm run clean` - 清理构建文件和 Turbo 缓存

#### Turbo 任务管道

项目使用 Turbo 的任务管道来优化构建流程：

```json
{
  "build": {
    "dependsOn": ["^build"],
    "outputs": ["dist/**", ".next/**"]
  },
  "build:electron": {
    "dependsOn": ["@superglue/core#build"]
  },
  "dev": {
    "dependsOn": ["build"],
    "persistent": true
  }
}
```

## 部署方式

### Docker 部署

使用 Docker Compose 一键部署：

```bash
# 启动所有服务
docker-compose up -d

# 查看服务状态
docker-compose ps

# 查看日志
docker-compose logs -f superglue
```

服务地址：
- Web 应用：http://localhost:3001
- API 服务：http://localhost:3000

### 生产环境部署

1. **构建应用**
   ```bash
   npm run build
   ```

2. **启动服务**
   ```bash
   npm run start
   ```

3. **桌面应用分发**
   ```bash
   # 打包应用
   npm run pack
   
   # 生成安装包
   npm run dist
   ```

## API 文档

本项目提供完整的 GraphQL API，支持：

- **查询（Queries）** - 数据检索和查询
- **变更（Mutations）** - 数据创建、更新、删除
- **订阅（Subscriptions）** - 实时数据更新
- **类型系统** - 完整的类型定义和验证

详细 API 文档请参考 [docs/api-reference](./docs/api-reference/) 目录。

## 技术栈

- **构建系统**：Turborepo - 高性能 Monorepo 构建工具
- **前端**：Next.js 15, React, Tailwind CSS, Radix UI
- **桌面应用**：Electron
- **后端**：Node.js, GraphQL, Apollo Server
- **数据库**：PostgreSQL, Redis
- **AI/LLM**：OpenAI, Google Gemini
- **开发工具**：TypeScript, Biome（代码格式化和检查）

## 配置指南

### 环境变量

| 变量名 | 描述 | 默认值 | 必需 |
|--------|------|--------|------|
| `DATABASE_URL` | PostgreSQL 数据库连接字符串 | - | 否 |
| `REDIS_URL` | Redis 连接字符串 | - | 否 |
| `OPENAI_API_KEY` | OpenAI API 密钥 | - | 否 |
| `GOOGLE_API_KEY` | Google Gemini API 密钥 | - | 否 |
| `PORT` | Web 服务端口 | 3001 | 否 |
| `API_PORT` | API 服务端口 | 3000 | 否 |

### 数据存储配置

支持多种数据存储方式：

- **内存存储** - 适用于开发和测试
- **文件存储** - 本地文件系统存储
- **PostgreSQL** - 生产环境推荐
- **Redis** - 缓存和会话存储

## 故障排除

### 常见问题

**Q: Electron 应用启动失败**
```bash
# 清理缓存并重新构建
npm run clean
npm install
npm run build:electron
```

**Q: Web 应用端口冲突**
```bash
# 修改端口配置
export PORT=3002
npm run dev
```

**Q: 数据库连接失败**
- 检查数据库服务是否运行
- 验证环境变量配置
- 确认网络连接和防火墙设置

## 贡献指南

我们欢迎社区贡献！请遵循以下步骤：

1. **Fork 项目** 并创建分支
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **提交更改**
   ```bash
   git commit -m "Add: your feature description"
   ```

3. **运行测试**
   ```bash
   npm run test
   npm run lint
   ```

4. **推送分支** 并创建 Pull Request
   ```bash
   git push origin feature/your-feature-name
   ```

### 开发规范

- 使用 TypeScript 进行类型安全开发
- 遵循 Biome 代码风格规范
- 为新功能添加单元测试
- 更新相关文档

## 许可证

本项目基于 MIT 许可证开源。详情请查看 [LICENSE](./LICENSE) 文件。

## 致谢

- 感谢 [superglue](https://github.com/superglue-ai/superglue) 项目提供的基础架构
- 感谢所有贡献者的努力和支持

---

<p align="center">
  如果这个项目对您有帮助，请考虑给我们一个 ⭐️
</p>

