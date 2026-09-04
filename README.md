# GitHub 主页

若本模板对您有用还请您 star，感谢！此模板由中科院计算所 Zhang Wei 设计。

## 使用方式

1. 将本项目文件放到一个 GitHub 仓库根目录。
2. 第一学期资料继续在 `assets/js/data.js` 中维护：
   - 课程名称、简介、机构/学校介绍
   - 老师信息（照片、简介）
   - 每周课程标题、内容要点、资料链接

## 学期切换与第二学期更新

- 网站默认展示“第二学期 · 2026 秋”，顶部“上学期 / 本学期”按钮与首页学期卡片都可直接切换版本。
- 第一学期的原数据、课件、课堂照片和结课纪念均保留不动。
- 第二学期只需编辑 `assets/js/data-semester-2.js` 中的 `lessons`，字段与之前的 `data.js` 保持一致：
  - `title`：教学主题
  - `summary`：核心内容与任务
  - `teacherId`：授课老师英文 ID；负责人待定时保持 `null`
  - `gallery`：课堂照片列表
  - `materials`：课件、视频或网盘资料列表
- 第二学期资料请使用独立目录，避免覆盖第一学期：
  - 第 1 课课件：`assets/pdf/class_1_A.pdf`
  - 第 1 课照片：`teachers/class_A/pic-01.webp`
- 网址会使用 `?term=2026-spring` 或 `?term=2026-fall` 记录当前学期，浏览器也会记住上次选择。
- 项目中尚未记录精确的上课起止钟点，因此当前显示“每周三下午”。确认具体时间后，只需修改 `data-semester-2.js` 中的 `timeLabel`。
- 页面视觉统一在 `assets/css/premium.css` 中调整；基础组件与功能样式继续保留在 `assets/css/styles.css`，便于后续只改配色、留白和版式而不影响课程功能。

## 启用 GitHub Pages

- GitHub 仓库 -> Settings -> Pages
- Source 选择 `Deploy from a branch`
- Branch 选择 `main`（或 `master`）和 `/root`
- 保存后即可访问：`https://你的用户名.github.io/仓库名/`

## 路由说明

- 首页：`index.html`
- 课程安排：`schedule.html`
- 老师页面：`teachers/An.html`、`teachers/Bu.html` 等（由教师卡片和课表自动跳转）
- 资料下载：`downloads.html`（密码与加密内容通过本地配置及生成脚本维护）
