# GreenLife AI

可持续性规划工具，帮助用户计算个人碳足迹并提供个性化的环保行动计划。

## 项目设置

1.  **克隆仓库**

    ```bash
    git clone <repository-url>
    cd greenlife-ai
    ```

2.  **安装依赖**

    使用 npm:
    ```bash
    npm install
    ```
    或者使用 yarn:
    ```bash
    yarn install
    ```

3.  **设置 Firebase (必需)**

    - 前往 [Firebase 控制台](https://console.firebase.google.com/) 创建一个新项目。
    - 在项目设置中，为您的 Web 应用创建一个新的 Firebase 应用。
    - 复制 Firebase 配置对象（包含 apiKey, authDomain 等）。
    - 在项目根目录下创建一个 `.env.local` 文件。
    - 将 Firebase 配置添加到 `.env.local` 文件中，变量名前缀必须是 `REACT_APP_`：
      ```
      REACT_APP_FIREBASE_API_KEY=your_api_key
      REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
      REACT_APP_FIREBASE_PROJECT_ID=your_project_id
      REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
      REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
      REACT_APP_FIREBASE_APP_ID=your_app_id
      ```
    - **重要**: `.env.local` 文件已在 `.gitignore` 中，不会被提交到版本控制。

4.  **运行开发服务器**

    ```bash
    npm start
    ```
    或者
    ```bash
    yarn start
    ```
    应用将在 `http://localhost:3000` 上运行。

## 技术栈

- React
- Tailwind CSS
- Redux Toolkit
- Chart.js
- Framer Motion
- Firebase (认证, Firestore 数据库)
- React Router

## 项目结构 (建议)

```
src/
├── App.js                # 主应用组件和路由
├── index.js              # 应用入口
├── index.css             # Tailwind CSS 和基础样式
├── firebase.js           # Firebase 初始化和配置
├── assets/               # 图片、字体等静态资源
│   └── images/
├── components/           # 可复用的 UI 组件
│   ├── common/           # 通用原子组件 (Button, Card, Input...)
│   ├── layout/           # 布局组件 (Header, Footer, PageWrapper...)
│   └── specific/         # 特定页面的复杂组件
├── features/             # 按功能划分的模块 (Redux slices, API hooks, etc.)
│   ├── calculator/       # 碳足迹计算相关
│   ├── recommendations/  # 建议相关
│   └── report/           # 报告生成与分享
│   └── auth/             # 用户认证
├── hooks/                # 自定义 React Hooks
├── pages/                # 页面级组件
│   ├── HomePage.js
│   ├── InputPage.js
│   ├── ResultsPage.js
│   └── ReportPage.js
├── store/                # Redux store 配置
│   └── index.js
├── styles/               # 全局样式或特定样式文件 (如果需要)
├── utils/                # 工具函数
```

## 贡献

请参考贡献指南 (如果未来添加)。 