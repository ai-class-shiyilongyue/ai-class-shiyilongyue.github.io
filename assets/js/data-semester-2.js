// assets/js/data-semester-2.js
//
// 第二学期的日常更新入口：
// 1. 修改下方 lessons 中对应课程的 title / summary / teacherId。
// 2. 课后把照片路径填入 gallery，把课件或网盘链接填入 materials。
// 3. 第二学期素材请使用独立目录，避免覆盖第一学期：
//    - 课件：assets/pdf/2026-fall/class_01.pdf
//    - 照片：teachers/class/2026-fall/01-Bu/pic-1.webp
//
// 第一学期数据继续完整保存在 assets/js/data.js，本文件只负责新增第二学期
// 并根据网址中的 ?term=... 或浏览器记忆选择当前展示的数据。

(function () {
  const firstSemesterSource = window.COURSE_DATA;
  if (!firstSemesterSource) return;

  const firstSemester = {
    ...firstSemesterSource,
    course: {
      ...firstSemesterSource.course,
      termId: "2026-spring",
      termLabel: "第一学期",
      calendarStart: "2026-03-01",
      calendarEnd: "2026-06-30",
      dateRangeLabel: "2026年3月—6月",
      timeLabel: "每周三下午",
      weekday: 3,
      teacherOrder: Object.keys(firstSemesterSource.teachers),
    },
  };

  const secondSemester = {
    site: { ...firstSemesterSource.site },

    course: {
      ...firstSemesterSource.course,
      termId: "2026-fall",
      termLabel: "第二学期",
      term: "第二学期 · 2026 秋季",
      subtitle: "从计算思维出发，在动手实践中理解并创造人工智能。",
      intro: "新学期继续沿着“理解原理—动手实现—完成作品”的路径前进：从计算与智能体出发，学习 Python、机器学习、神经网络、图像生成与数字人技术，在真实任务中建立计算思维与人工智能素养。",
      highlights: [
        "从计算史与 AI 智能体出发，理解智能技术如何一步步发展。",
        "用 Python、PyTorch 和 Agent 工具完成可运行的小项目。",
        "兼顾模型原理、动手实践、技术安全与人工智能伦理。",
      ],
      calendarStart: "2026-08-31",
      calendarEnd: "2027-01-17",
      dateRangeLabel: "2026年9月—2027年1月",
      timeLabel: "每周三下午",
      weekday: 3,
      // 授课教师展示顺序按姓名拼音排列，课程中的负责人不受此顺序影响。
      teacherOrder: ["An", "Bu", "Dai", "Gao", "Huang", "Sun", "Xing"],
    },

    // 教师资料沿用第一学期，后续无需重复维护个人简介。
    teachers: firstSemesterSource.teachers,

    // 停课日期：2026-09-30、2026-11-04、2026-11-11、2026-11-18。
    // 课程课次保持不变，并按原顺序顺延到其后的可用周三。
    lessons: [
      {
        week: 1,
        lessonId: "s2-01",
        date: "2026-09-02",
        teacherId: "Bu",
        title: "从算盘到AlphaGo：计算如何变得“聪明”",
        summary: "什么是计算？人工智能的起源是什么？",
        gallery: [],
        materials: [],
      },
      {
        week: 2,
        lessonId: "s2-02",
        date: "2026-09-09",
        teacherId: "Sun",
        title: "AI智能体初探：走进会思考的智能助手",
        summary: "认识 AI agent，解锁智能小助手的秘密",
        gallery: [],
        materials: [],
      },
      {
        week: 3,
        lessonId: "s2-03",
        date: "2026-09-16",
        teacherId: "Sun",
        title: "AI智能体实践：动手搭建AI小助手",
        summary: "从零实现专属智能Agent",
        gallery: [],
        materials: [],
      },
      {
        week: 4,
        lessonId: "s2-04",
        date: "2026-09-23",
        teacherId: "Huang",
        title: "Python编程：人机指令交互",
        summary: "Python 基础语法；编程逻辑与代码实现；简单交互程序开发",
        gallery: [],
        materials: [],
      },
      {
        week: 5,
        lessonId: "s2-05",
        date: "2026-10-07",
        teacherId: "Huang",
        title: "Agent编程：从命令到协作",
        summary: "什么是计算？如何用机械实现计算？如何用与非门、二极管实现计算？",
        gallery: [],
        materials: [],
      },
      {
        week: 6,
        lessonId: "s2-06",
        date: "2026-10-14",
        teacherId: "Dai",
        title: "机器学习初探之分类：小小矿石鉴定家",
        summary: "机器学习是什么；数据与特征；如何衡量机器学习的效果；最简单的模型：线性模型",
        gallery: [],
        materials: [],
      },
      {
        week: 7,
        lessonId: "s2-07",
        date: "2026-10-21",
        teacherId: "Dai",
        title: "机器学习初探之回归：十一特别侦探队",
        summary: "决策树算法原理与编程实现；其他机器学习算法简介",
        gallery: [],
        materials: [],
      },
      {
        week: 8,
        lessonId: "s2-08",
        date: "2026-10-28",
        teacherId: "An",
        title: "现代人工智能的基石：感知机与多层感知机",
        summary: "感知机与多层感知机的概念，使用面包板搭建感知机和多层感知机模拟逻辑门",
        gallery: [],
        materials: [],
      },
      {
        week: 9,
        lessonId: "s2-09",
        date: "2026-11-25",
        teacherId: "An",
        title: "让机器像人一样学习：人工神经网络",
        summary: "神经网络概念及其训练方法，使用pytorch实现基于全连接神经网络的手写数字识别",
        gallery: [],
        materials: [],
      },
      {
        week: 10,
        lessonId: "s2-10",
        date: "2026-12-02",
        teacherId: "Xing",
        title: "计算机如何认识图像：深度学习与图像识别",
        summary: "卷积神经网络（CNN）原理与结构；使用pytorch实现基于CNN的手写数字识别；模型对比分析",
        gallery: [],
        materials: [],
      },
      {
        week: 11,
        lessonId: "s2-11",
        date: "2026-12-09",
        teacherId: "Xing",
        title: "计算机如何创造图像：图像生成与安全伦理",
        summary: "从VAE到GAN；使用pytorch实现手写数字生成；AI 技术安全风险，人工智能伦理规范与安全教育",
        gallery: [],
        materials: [],
      },
      {
        week: 12,
        lessonId: "s2-12",
        date: "2026-12-16",
        teacherId: "Gao",
        title: "数字人技术初探：虚拟世界里的“新朋友”",
        summary: "数字人核心技术入门",
        gallery: [],
        materials: [],
      },
      {
        week: 13,
        lessonId: "s2-13",
        date: "2026-12-23",
        teacherId: "Gao",
        title: "数字人实践探索：让数字人动起来",
        summary: "数字人制作工具实操；完成个人数字人搭建任务",
        gallery: [],
        materials: [],
      },
      {
        week: 14,
        lessonId: "s2-14",
        date: "2026-12-30",
        teacherId: null,
        title: "待定",
        summary: "待定",
        gallery: [],
        materials: [],
      },
      {
        week: 15,
        lessonId: "s2-15",
        date: "2027-01-06",
        teacherId: null,
        title: "待定",
        summary: "待定",
        gallery: [],
        materials: [],
      },
      {
        week: 16,
        lessonId: "s2-16",
        date: "2027-01-13",
        teacherId: null,
        title: "待定",
        summary: "待定",
        gallery: [],
        materials: [],
      },
      {
        type: "memory",
        week: null,
        lessonId: "s2-memory",
        date: "",
        teacherId: null,
        title: "第二学期结课纪念",
        summary: "本学期纪念内容将在结课后更新，敬请期待。",
        badge: "结课纪念 · 待更新",
        calendarLabel: "纪念",
        gallery: [],
      },
    ],
  };

  const terms = [
    {
      id: "2026-spring",
      label: "第一学期 · 2026 春",
      shortLabel: "第一学期",
      data: firstSemester,
    },
    {
      id: "2026-fall",
      label: "第二学期 · 2026 秋",
      shortLabel: "第二学期",
      data: secondSemester,
    },
  ];

  const storageKey = "course_active_term_v2";
  const queryTerm = new URL(window.location.href).searchParams.get("term");
  let storedTerm = "";
  try {
    storedTerm = window.localStorage.getItem(storageKey) || "";
  } catch (_) {
    storedTerm = "";
  }

  const requestedTerm = terms.some((item) => item.id === queryTerm)
    ? queryTerm
    : (terms.some((item) => item.id === storedTerm) ? storedTerm : "2026-fall");
  const activeTerm = terms.find((item) => item.id === requestedTerm) || terms[1];

  window.COURSE_TERMS = terms;
  window.COURSE_TERM_ID = activeTerm.id;
  window.COURSE_TERM_STORAGE_KEY = storageKey;
  window.COURSE_DATA = activeTerm.data;

  try {
    window.localStorage.setItem(storageKey, activeTerm.id);
  } catch (_) {
    // localStorage 不可用时，网址中的 term 参数仍可正常切换学期。
  }
})();
