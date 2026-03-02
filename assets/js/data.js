// assets/js/data.js

window.COURSE_DATA = {
    site: { brandTitle: "课程主页" },
  
    course: {
      title: "计算思维与人工智能",
      subtitle: "本网站用于存放每节课程相关资料。",
      term: "2026 春季（3–7月）",
      location: "北京十一学校·龙樾实验中学",
      org: {
        name: "中国科学院计算技术研究所",
        intro: "中国科学院计算技术研究所创建于1956年，是中国第一个专门从事计算机科学技术综合性研究的学术机构。",
        logo: "assets/img/org-logo.webp",
      },
      partner: {
        name: "十一龙樾",
        intro: "北京十一学校·龙樾实验中学成立于2016年，源自于1952年周恩来总理亲笔批示建立的北京十一学校，其中“十一学校”是国庆节的蕴意。",
        logo: "assets/img/partner-logo.webp",
      },
      intro: "本课程用好玩、易上手的方式带你从“计算是怎么工作的”开始，学会用数据和代码解决问题。你会亲手做出数字识别、生成图片、智能小助手/Agent 甚至个人数字人，在实践中理解人工智能的核心原理。",
      highlights: [
        "用 Python 快速建立编程与计算思维。",
        "完成一些有趣的小项目。",
        "用面包板体验“怎么算”，同时了解 AI。",
      ],
      teacherPageSlug: {
        A: "An",
        B: "Bu",
        C: "Dai",
        D: "Gao",
        E: "Huang",
        F: "Li",
        G: "Sun",
        H: "Xing",
      },
    },
  
    teachers: {
      An: { id:"An", name:"安竹林", title:"副研究员", bio:"研究方向：深度神经网络轻量化与加速；终身学习。", photo:"assets/img/azl.webp" },
      Bu: { id:"Bu", name:"卜东波", title:"研究员", bio:"研究方向：生物信息学；计算机算法设计与分析。", photo:"assets/img/bdb.webp" },
      Dai: { id:"Dai", name:"代锋", title:"研究员", bio:"研究方向：计算机视觉；图像处理与分析。", photo:"assets/img/df.webp" },
      Gao: { id:"Gao", name:"高林", title:"研究员", bio:"研究方向：智能计算机图形学；三维计算机视觉；模式识别。", photo:"assets/img/gl.webp" },
      Huang: { id:"Huang", name:"黄礼泊", title:"助理研究员", bio:"研究方向：机器学习；神经科学。", photo:"assets/img/hlb.webp" },
      Li: { id:"Li", name:"李雪琦", title:"副研究员", bio:"研究方向：领域专用加速器（DSA）; 近存计算架构（PIM）; 算法-架构-工艺跨层协同优化。", photo:"assets/img/lxq.webp" },
      Sun: { id:"Sun", name:"孙世伟", title:"副研究员", bio:"研究方向：计算糖组学；生物信息学。", photo:"assets/img/ssw.webp" },
      Xing: { id:"Xing", name:"邢云冰", title:"高级工程师", bio:"研究方向：普适计算、人机交互、视频编码与压缩、远程交互技术。", photo:"assets/img/xyb.webp" },
    },
  
    lessons: [
      {
        week: 1, lessonId: "01", date: "2026-03-04", teacherId: "Bu",
        title: "人工智能发展与数据驱动基础",
        summary: "什么是计算？如何用机械实现计算？如何用与非门、二极管实现计算？",
        gallery: [
        ],
        materials: [
             { label: "资料课后上传", note: "等待课程结束上传后更新" },
           ],
        // outline: ["导入与课程框架", "关键概念讲解", "示例与答疑"],
        // gallery: [
        //  "assets/img/class/A-01-1.jpg" 或外链
        //  "assets/img/gallery-placeholder.svg"
        // ],
        // materials: [
        //   { label: "视频（网盘）", url: "https://example.com/video-01", note: "替换为网盘链接" },
        //   { label: "课件（PDF）", url: "https://example.com/slides-01", note: "替换为课件链接" },
        // ],
      },
  
      { week: 2, lessonId: "02", date: "2026-03-11", teacherId: "Li",
        title: "数据与算力基础",
        summary: "数据的分类、采集与预处理；AI 所需算力基础认知；算力与算法的匹配逻辑。",
        gallery: [
        ],
        materials: [
             { label: "资料课后上传", note: "等待课程结束上传后更新" },
           ],
      },
      { week: 3, lessonId: "03", date: "2026-03-18", teacherId: "Li",
        title: "数据与算力基础",
        summary: "数据的分类、采集与预处理；AI 所需算力基础认知；算力与算法的匹配逻辑。",
        gallery: [
        ],
        materials: [
             { label: "资料课后上传", note: "等待课程结束上传后更新" },
           ],
      },
  
      { week: 4, lessonId: "04", date: "2026-03-25", teacherId: "Huang",
        title: "python编程与agent编程",
        summary: "Python 基础语法；编程逻辑与代码实现；简单交互程序开发。",
        gallery: [
        ],
        materials: [
             { label: "资料课后上传", note: "等待课程结束上传后更新" },
           ],
      },
      { week: 5, lessonId: "05", date: "2026-04-01", teacherId: "Huang",
        title: "python编程与agent编程",
        summary: "Agent 编程基础；分支结构编程；完成数码数字识别任务搭建。",
        gallery: [
        ],
        materials: [
             { label: "资料课后上传", note: "等待课程结束上传后更新" },
           ],
      },
  
      { week: 6, lessonId: "06", date: "2026-04-08", teacherId: "Dai",
        title: "机器学习启蒙：什么是机器学习",
        summary: "机器学习是什么；数据与特征；如何衡量机器学习的效果；最简单的模型：线性模型。",
        gallery: [
        ],
        materials: [
             { label: "资料课后上传", note: "等待课程结束上传后更新" },
           ],
      },
      { week: 7, lessonId: "07", date: "2026-04-15", teacherId: "Dai",
        title: "机器学习初探：传统机器学习算法",
        summary: "决策树算法原理与编程实现；其他机器学习算法简介。",
        gallery: [
        ],
        materials: [
             { label: "资料课后上传", note: "等待课程结束上传后更新" },
           ],
      },
  
      { week: 8, lessonId: "08", date: "2026-04-22", teacherId: "An",
        title: "现代人工智能的基石：感知机与多层感知机",
        summary: "感知机与多层感知机的概念，使用面包板搭建感知机和多层感知机模拟逻辑门。",
        gallery: [
        ],
        materials: [
             { label: "资料课后上传", note: "等待课程结束上传后更新" },
           ],
      },
      { week: 9, lessonId: "09", date: "2026-05-20", teacherId: "An",
        title: "让机器像人一样学习：人工神经网络",
        summary: "神经网络概念及其训练方法，使用pytorch实现基于全连接神经网络的手写数字识别。",
        gallery: [
        ],
        materials: [
             { label: "资料课后上传", note: "等待课程结束上传后更新" },
           ],
      },
  
      { week: 10, lessonId: "10", date: "2026-05-27", teacherId: "Xing",
        title: "计算机如何认识图像：深度学习与图像识别",
        summary: "卷积神经网络（CNN）原理与结构；使用pytorch实现基于CNN的手写数字识别；模型对比分析。",
        gallery: [
        ],
        materials: [
             { label: "资料课后上传", note: "等待课程结束上传后更新" },
           ],
      },
      { week: 11, lessonId: "11", date: "2026-06-03", teacherId: "Xing",
        title: "计算机如何创造图像：图像生成与安全伦理",
        summary: "从VAE到GAN；使用pytorch实现手写数字生成；AI 技术安全风险，人工智能伦理规范与安全教育。",
        gallery: [
        ],
        materials: [
             { label: "资料课后上传", note: "等待课程结束上传后更新" },
           ],
      },
  
      { week: 12, lessonId: "12", date: "2026-06-10", teacherId: "Sun",
        title: "走进AI智能体",
        summary: "认识Coze，解锁智能小助手的秘密。",
        gallery: [
        ],
        materials: [
             { label: "资料课后上传", note: "等待课程结束上传后更新" },
           ],
      },
      { week: 13, lessonId: "13", date: "2026-06-17", teacherId: "Sun",
        title: "动手搭建AI小助手",
        summary: "从零实现专属智能Agent。",
        gallery: [
        ],
        materials: [
             { label: "资料课后上传", note: "等待课程结束上传后更新" },
           ],
      },
  
      { week: 14, lessonId: "14", date: "2026-06-24", teacherId: "Gao",
        title: "数字人技术解析",
        summary: "数字人核心技术入门。",
        gallery: [
        ],
        materials: [
             { label: "资料课后上传", note: "等待课程结束上传后更新" },
           ],
      },
      { week: 15, lessonId: "15", date: "2026-07-01", teacherId: "Gao",
        title: "数字人实践体验",
        summary: "数字人制作工具实操；完成个人数字人搭建任务。",
        gallery: [
        ],
        materials: [
             { label: "资料课后上传", note: "等待课程结束上传后更新" },
           ],
      },
    ],
  };