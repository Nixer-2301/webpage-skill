#  WebPage Creator (Agent Skill)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Agent Skill](https://img.shields.io/badge/Agent%20Skill-✓-blue)](https://www.anthropic.com)

一个让 AI 智能体自动生成高质量、版本化网页文件的 Agent Skill。

它能让 AI 智能地创建 `web` 目录、自动管理项目版本（如 `v1.0`, `v1.1`），甚至能根据用户技术水平调整代码注释详细度，打造一致的、富有“高级感”的网页。

## ✨ 特性

-   **智能项目脚手架**：AI 能自动在工作区创建 `web` 目录，并按项目、版本生成文件夹。
-   **版本化迭代**：每一次修改都会自动生成新版本（如 `v1.0` -> `v1.1`），绝不丢失你的任何尝试。
-   **自适应注释**：能分析用户输入，判断其是“资深大牛”还是“入门小白”，并生成相应详细程度的代码注释。
-   **壮观首屏设计**：内置多种“高级感”首页模板（动态光晕、粒子背景、3D场景等），让 AI 生成的第一版网页就能让你“Wow~”。
-   **静态文件支持**：完美支持并引用本地的 `css`, `js`, `fonts` 等资源文件。

## 📦 安装

1.  **下载 Skill**
    ```bash
    git clone https://github.com/Nixer-2301/webpage-skill.git
    ```

    或直接下载ZIP解压
    
3.  **安装到 Claude**
    *   **Claude.ai**: 进入 `设置 (Settings)` > `功能 (Capabilities)` > `Skills`，点击“上传 Skill (Upload Skill)”，选择 `webpage-skill` 文件夹（如果上传需要，请将其压缩为 ZIP 文件）。
    *   **Claude Code**: 将 `webpage-skill` 文件夹复制到项目根目录的 `.claude/skills/` 目录下。

4.  **验证安装**
    在 Claude 中输入以下提示词来测试：
    > “帮我做一个个人介绍页面，要有姓名、照片和兴趣爱好。”
    或者使用命令测试:
    > /create-wp
    > /create-webpage
    > /webcreate

    如果一切正常，Claude 将自动加载该 Skill 并为你生成 `web/` 目录及相应的项目文件。

## 🎯 使用示例

这里有两个使用场景的例子，方便你快速上手。

*   **场景 1：为小白用户创建一个简单的个人页面**
    只需告诉 Claude：
    > “帮我生成一个咖啡店的菜单介绍页面，要有壮观的首页大图和几种咖啡的卡片介绍。”

    Claude 将按步骤生成 `web/coffee-menu/v1.0/` 文件夹，其中包含完整的 `index.html`、`style.css` 和 `script.js`。

*   **场景 2：为资深大牛迭代一个复杂的仪表盘**
    1.  **第一轮**: “生成一个 vue3 + tailwindcss 的技术分享博客页面布局”
    2.  **第二轮**: “把博客正文背景色改成深色模式，并把评论功能改为‘使用 Github 账号登录’”

    Claude 会分析出你是“资深大牛”，因此生成的代码注释会简洁明了。第二轮修改后，它会把新版本保存到 `v1.1` 文件夹中。

## 🤝 参与贡献

欢迎任何形式的贡献！无论是报告 Bug、提出新功能建议，还是直接提交 Pull Request。

1.  Fork 本仓库 (Fork this repo)
2.  创建你的特性分支 (`git checkout -b feature/amazing-feature`)
3.  提交你的更改 (`git commit -m 'Add some amazing feature'`)
4.  推送到分支 (`git push origin feature/amazing-feature`)
5.  打开一个 Pull Request

## 📄 许可证

本项目基于 **MIT License** 开源。有关详细信息，请参阅 [LICENSE](LICENSE) 文件。

## 🙏 致谢

-   感谢 Anthropic 提出的 [Agent Skills](https://www.anthropic.com) 开放标准。
