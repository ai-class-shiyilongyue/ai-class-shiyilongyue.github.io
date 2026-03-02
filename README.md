# GitHub 主页

若本模板对您有用还请您 star，感谢！此模板由中科院计算所 Zhang Wei 设计。

## 使用方式

1. 将本项目文件放到一个 GitHub 仓库根目录。
2. 在 `assets/js/data.js` 中替换：
   - 课程名称、简介、机构/学校介绍
   - 老师信息（照片、简介）
   - 每周课程标题、内容要点、资料链接

## 启用 GitHub Pages

- GitHub 仓库 -> Settings -> Pages
- Source 选择 `Deploy from a branch`
- Branch 选择 `main`（或 `master`）和 `/root`
- 保存后即可访问：`https://你的用户名.github.io/仓库名/`

## 路由说明

- 首页：`index.html`
- 课程安排：`schedule.html`
- 老师页面：`teacher.html?tid=...`
- 资料下载：`downloads.html`（密码：自行设定），注意此加密仅用于隐藏，不进行真实加密。