<h2 align="center">superglue desktop 🍯</h2>
<p align="center">自愈集成代理桌面版</p>

<p align="center">
  <a href="#功能特性">功能特性</a> •
  <a href="#快速开始">快速开始</a> •
  <a href="#开发指南">开发指南</a> 
</p>

---

> **本项目基于 [superglue](https://github.com/superglue-ai/superglue) 开发，扩展为桌面版（desktop）应用。您可以像使用原版 superglue 一样体验自愈集成代理，同时获得桌面端的便捷操作和本地集成能力。**

superglue desktop 是一个强大的自愈集成代理桌面应用。它可以作为您与任何复杂/遗留 API 之间的智能代理，确保您总能以期望的格式获得所需数据，同时提供桌面端的便捷操作体验。



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


### 构建与打包


#### 构建桌面应用
```bash
npm run build:electron
```

#### 打包桌面应用
```bash
npm run pack
```

### 开发命令

基于 **Turbo** 的高效构建系统：

- `npm run dev` - 启动 Web 开发模式（使用 Turbo 并行构建）
- `npm run dev:electron` - 启动桌面应用开发模式
- `npm run build` - 构建所有模块（增量构建）
- `npm run test` - 运行所有测试（并行执行）
- `npm run test:coverage` - 运行测试并生成覆盖率报告
- `npm run lint` - 代码风格检查
- `npm run clean` - 清理构建文件和 Turbo 缓存




## 许可证

本项目基于 MIT 许可证开源。详情请查看 [LICENSE](./LICENSE) 文件。

## 致谢

- 感谢 [superglue](https://github.com/superglue-ai/superglue) 项目提供的基础架构
- 感谢所有贡献者的努力和支持

---

<p align="center">
  如果这个项目对您有帮助，请考虑给我们一个 ⭐️
</p>

