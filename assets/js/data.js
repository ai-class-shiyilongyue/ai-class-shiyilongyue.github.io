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
        // F: "Li",
        G: "Sun",
        H: "Xing",
        I: "Bao"
      },
    },
  
    teachers: {
      An: { id:"An", name:"安竹林", title:"博导, 副研究员", bio:"研究方向：深度神经网络轻量化与加速；终身学习。", photo:"assets/img/azl.webp", research: [
        {
          heading: "个人简历",
          items: [
            "2023年9月 — 今：中国科学院计算技术研究所，副研究员",
            "2014年9月 — 2023年9月：中国科学院计算技术研究所，高级工程师",
            "2013年1月 — 2014年9月：中国科学院计算技术研究所，助理研究员",
            "2010年9月 — 2013年1月：中国科学院计算技术研究所，博士后",
            "2006年9月 — 2010年8月：中国科学院计算技术研究所，计算机系统结构，博士生",
            "2003年9月 — 2006年7月：合肥工业大学，计算机与信息学院，硕士生",
            "1999年9月 — 2003年7月：合肥工业大学，计算机与信息学院，本科生"
          ]
        },
        {
          "heading": "主要论著",
          "items": [
            "Yanming Chen, Zixin Ma, Chuanguang Yang*, Zhulin An*, Yiwen Zhang. Accelerating Diffusion Models via Parallel Denoising. ACM Multimedia 2025 (ACM MM), 2025. (CCF-A)",
            "Yuqi Li, Chuanguang Yang, Hansheng Zeng, Zeyu Dong, Zhulin An, Yongjun Xu, Yingli Tian, Hao Wu. Frequency-Aligned Knowledge Distillation for Lightweight Spatiotemporal Forecasting. International Conference on Computer Vision (ICCV), 2025. (CCF-A)",
            "Chengqing Yu, Fei Wang*, Chuanguang Yang, Zezhi Shao, Tao Sun, Tangwen Qian, Wei Wei, Zhulin An, Yongjun Xu*. Merlin: Multi-View Representation Learning for Robust Multivariate Time Series Forecasting with Unfixed Missing Rates. 31st SIGKDD Conference on Knowledge Discovery and Data Mining (KDD), 2025. (CCF-A, Research Track)",
            "Xiangqi Li, Libo Huang*, Zhulin An*, Weilun Feng, Chuanguang Yang, Boyu Diao, Fei Wang, Yongjun Xu. GeoZixin Ma, Chuanguang Yang*, Zhulin An*, Yiwen Zhang. metric Feature Embedding for Effective 3D Few-Shot Class Incremental Learning. Forty-second International Conference on Machine Learning (ICML), 2025. (CCF-A)",
            "Weilun Feng, Chuanguang Yang*, Haotong Qin, Xiangqi Li, Yu Wang, Zhulin An*, Libo Huang, Boyu Diao, Zixiang Zhao, Yongjun Xu, Michele Magno. Q-VDiT: Towards Accurate Quantization of Video-Generation Diffusion Transformers. Forty-second International Conference on Machine Learning (ICML), 2025. (CCF-A)",
            "Han Yang, Chuanguang Yang*, Qiuli Wang, Zhulin An*, Weilun Feng, Libo Huang, Yongjun Xu. Multi-party Collaborative Attention Control for Image Customization. The Thirty-Fifth IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR), 2025. (CCF-A)",
            "Chuanguang Yang, Xinqiang Yu, Han Yang, Zhulin An*, Chengqing Yu, Libo Huang, Yongjun Xu. Multi-Teacher Knowledge Distillation with Reinforcement Learning for Visual Recognition. The 39th AAAI Conference on Artificial Intelligence (AAAI), 2025. (CCF-A)",
            "Weilun Feng, Haotong Qin, Chuanguang Yang*, Zhulin An*, Libo Huang, Boyu Diao, Fei Wang, Renshuai Tao, Yongjun Xu, Michele Magno. MPQ-DM: Mixed Precision Quantization for Extremely Low Bit Diffusion Models. The 39th AAAI Conference on Artificial Intelligence (AAAI), 2025. (CCF-A)",
            "Han Yang, Chuanguang Yang*, Zhulin An*, Libo Huang, Yongjun Xu. HSRDiff: A Hierarchical Self-Regulation Diffusion Model for Stochastic Semantic Segmentation. The 39th AAAI Conference on Artificial Intelligence (AAAI), 2025. (CCF-A)",
            "Haonan Mai, Libo Huang*, Zhulin An*, Jiarui Zhao, Chuanguang Yang, Erhu Zhao, Yongjun Xu. OLN++: Improved Object Localization Network for Open-world Object Detection. 2025 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP), 2025. (CCF-B)",
            "RuiQi Liu, Boyu Diao*, Libo Huang, Zijia An, Zhulin An, Yongjun Xu. Continual Learning in the Frequency Domain. The Thirty-Eighth Annual Conference on Neural Information Processing Systems (NeurIPS), 2024. (CCF-A)",
            "Weilun Feng, Chuanguang Yang*, Zhulin An*, Libo Huang, Boyu Diao, Fei Wang, Yongjun Xu. Relational Diffusion Distillation For Efficient Image Generation. ACM Multimedia 2024 (ACM MM), 2024.(CCF-A)",
            "Yuting Zhang, Zhao Zhang, Yiqing Wu, Ying Sun, Fuzhen Zhuang*, Wenhui Yu, Lantao Hu, Han Li, Kun Gai, Zhulin An*, Yongjun Xu. Tag Tree-Guided Multi-grained Alignment for Multi-Domain Short Video Recommendation. ACM Multimedia 2024 (ACM MM), 2024.(CCF-A)",
            "Yuting Zhang, Yiqing Wu, ruidong han, Ying Sun, Yongchun Zhu, Xiang Li, Wei Lin, Fuzhen Zhuang*, Zhulin An*, Yongjun Xu. Unified Dual-Intent Translation for Joint Modeling of Search and Recommendation. 30th ACM SIGKDD Conference on Knowledge Discovery and Data Mining (KDD), 2024. (CCF-A, ADS Track)",
            "Chuanguang Yang, Zhulin An*, Libo Huang, Junyu Bi, XinQiang Yu, Han Yang, Boyu Diao, Yongjun Xu*. CLIP-KD: A Comprehensive Study of Distilling CLIP Models. The Thirty-Fourth IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR), 2024. (CCF-A)",
            "Libo Huang, Yan Zeng, Chuanguang Yang, Zhulin An*, Boyu Diao, Yongjun Xu. eTag: Class-Incremental Learning via Embedding Distillation and Task-Oriented Generation. 36th AAAI Conference on Artificial Intelligence (AAAI), 2024. (CCF-A)",
            "Libo Huang, Zhulin An*, Yan Zeng, Xiang Zhi, Yongjun Xu. KFC: Knowledge Reconstruction and Feedback Consolidation Enable Efficient and Effective Continual Generative Learning. The Twelfth International Conference on Learning Representations (ICLR), 2024. (Tiny paper, Invite to present (notable))",
            "Yuting Zhang, Yiqing Wu, Ran Le, Yongchun Zhu, Fuzhen Zhuang*, Ruidong Han, Xiang Li, Wei Lin, Zhulin An*, Yongjun Xu. Modeling Dual Period-Varying Preferences for Takeaway Recommendation. 29th ACM SIGKDD Conference on Knowledge Discovery and Data Mining (KDD), 2023. (CCF-A, ADS Track)",
            "Zhao Zhang, Zhanpeng Guan, Fuwei Zhang, Fuzhen Zhuang*, Zhulin An*, Fei Wang, Yongjun Xu. Weighted Knowledge Graph Embedding. 46th International ACM SIGIR Conference on Research and Development in Information Retrieval (SIGIR), 2023. (CCF-A)",
            "Chuanguang Yang, Zhulin An*, Helong Zhou, Linhang Cai, Xiang Zhi, Jiwen Wu, Yongjun Xu, Qian Zhang. MixSKD: Self-Knowledge Distillation from Mixup for Image Recognition. European Conference on Computer Vision (ECCV), 2022. (CCF-B)",
            "Chuanguang Yang, Helong Zhou, Zhulin An*, Xue Jiang, Yongjun Xu, Qian Zhang. Cross-Image Relational Knowledge Distillation for Semantic Segmentation. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR), 2022. (CCF-A)",
            "Chuanguang Yang, Zhulin An*, Yongjun Xu. Localizing Semantic Patches for Accelerating Image Classification. IEEE International Conference on Multimedia and Expo (ICME), 2022. (CCF-B)",
            "Yanming Chen, Mingrui Shuai, Shubin Lou, Zhulin An*, Yiwen Zhang. FPAR: Filter Pruning via Attention and Rank Enhancement. IEEE International Conference on Multimedia and Expo (ICME), 2022. (CCF-B)",
            "Chuanguang Yang, Zhulin An*, Linhang Cai, Yongjun Xu. Mutual Contrastive Learning for Visual Representation Learning. 36th AAAI Conference on Artificial Intelligence (AAAI), 2022. (CCF-A)",
            "Linhang Cai, Zhulin An*, Chuanguang Yang, Yangchun Yan, Yongjun Xu. Prior Gradient Mask Guided Pruning-aware Fine-tuning. 36th AAAI Conference on Artificial Intelligence (AAAI), 2022. (CCF-A)",
            "Chuanguang Yang, Zhulin An*, Linhang Cai, Yongjun Xu. Hierarchical Self-supervised Augmented Knowledge Distillation. 30th International Joint Conference on Artificial Intelligence (IJCAI), 2021. (CCF-A)",
            "Chuanguang Yang, Zhulin An*, Yongjun Xu. Multi-view Contrastive Learning for Online Knowledge Distillation. 46th IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP), 2021. (CCF-B)",
            "Linhang Cai, Zhulin An*, Yongjun Xu. GHFP: Gradually Hard Filter Pruning. International Joint Conference on Neural Networks (IJCNN), 2021. (CCF-C)",
            "Chuanguang Yang, Zhulin An*, Hui Zhu, Xiaolong Hu, Kun Zhang, Kaiqiang Xu, Chao Li, Yongjun Xu. Gated Convolutional Networks with Hybrid Connectivity for Image Classification. 34th AAAI Conference on Artificial Intelligence (AAAI), 2020. (CCF-A)",
            "Xiaolong Hu, Zhulin An*, Chuanguang Yang, Hui Zhu, Kaiqiang Xu and Yongjun Xu. DRNet: Dissect and Reconstruct the Convolutional Neural Network via Interpretable Manners. 24th European Conference on Artificial Intelligence (ECAI), 2020. (CCF-B)",
            "Yanling Zhang, Wanhui Sun, Chuanguang Yang*, Libo Huang*, Zhulin An*, Weilun Feng, Wenjing Tang, Yongjun Xu. TCMP-300: A Comprehensive Traditional Chinese Medicinal Plant Dataset for Plant Recognition. Scientific Data. 12(1):1166, 2025. (SCI Q1 IF:6.9)",
            "Ruiqi Liu, Boyu Diao*, Libo Huang, Zijia An, Hangda Liu, Zhulin An, Yongjun Xu. Low-redundancy distillation for continual learning. Pattern Recognition. 167: 111712, 2025.",
            "Zhanpeng Guan, Fuwei Zhang, Zhao Zhang*, Fuzhen Zhuang, Fei Wang, Zhulin An, Yongjun Xu. AdaE: Knowledge Graph Embedding With Adaptive Embedding Sizes. IEEE Transactions on Knowledge and Data Engineering (TKDE). 37(8):4432-4445, 2025. (SCI Q1 IF:10.4)",
            "Chengqing Yu, Fei Wang*, Zezhi Shao, Tangwen Qian, Zhao Zhang, Wei Wei, Zhulin An, Qi Wang, Yongjun Xu. GinAR+: A Robust End-to-End Framework for Multivariate Time Series Forecasting With Missing Values. IEEE Transactions on Knowledge and Data Engineering (TKDE). 37(8):4635-4648, 2025. (SCI Q1 IF:10.4)",
            "Jincai Huang, Yongjun Xu, Qi Wang, et al. Foundation models and intelligent decision-making: Progress, challenges, and perspectives. The innovation. 6(6):100948, 2025. (SCI Q1 IF:25.7)",
            "Longji Zhu, Yunan Yang, Fei Xu, Xinyu Lu, Mingrui Shuai, Zhulin An, et al. Open-set deep learning–enabled single-cell Raman spectroscopy for rapid identification of airborne pathogens in real-world environments. Science Advances. 11(2), 2025. (SCI Q1 IF:11.7)",
            "Wenyu Mi, Jianji Wang, Fuzhen Zhuang, Zhulin An, Wei Guo. Open-category referring expression comprehension via multi-modal knowledge transfer. Neurocomputing. 598, 2024. (SCI Q1 IF:5.5)",
            "LiRong Dai, Luqi Gong, Zhulin An, Yongjun Xu, Boyu Diao. Sketch-fusion: A gradient compression method with multi-layer fusion for communication-efficient distributed training. Journal of Parallel and Distributed Computing. 185, 2024. (SCI Q1 IF:3.4)",
            "Huishi Luo, Fuzhen Zhuang*, Ruobing Xie, Hengshu Zhu, Deqing Wang, Zhulin An, Yongjun Xu. A survey on causal inference for recommendation. The Innovation. 5(2), 2024. (SCI Q1 IF:32.1)",
            "Chuanguang Yang, Zhulin An*, Linhang Cai, and Yongjun Xu. Knowledge Distillation Using Hierarchical Self-Supervision Augmented Distribution. IEEE Transactions on Neural Networks and Learning Systems (TNNLS), 35(2), 2024. (CCF-B, SCI Q1 IF:10.4)",
            "Yanming Chen, Jiahao Xu, Zhulin An*, Fuzhen Zhuang. Multi-scale Conditional Reconstruction Generative Adversarial Network, Image and Vision Computing. 141, 2024. (CCF-C, SCI Q3 IF:4.7)",
            "Yanming Chen, Gang Wu, Mingrui Shuai, Shubin Lou, Yiwen Zhang, Zhulin An*. FPAR: Flter Pruning via Atention and Rank Enhancement for Deep Convolutional Neural Networks Acceleration, International Journal of Machine Learning and Cybernetics, 15, 2024. (SCI Q3 IF:5.6)",
            "Han Yang, Qiuli Wang, Yue Zhang, Zhulin An, Liu Chen, Xiaohong Zhang, and S. Kevin Zhou*. Lung Nodule Segmentation and Uncertain Region Prediction with an Uncertainty-Aware Attention Mechanism. IEEE Transactions on Medical Imaging (TMI), 43(4), 2024. (SCI Q1 IF:6.812)",
            "Chuanguang Yang, Zhulin An*, Helong Zhou, Fuzhen Zhuang, Yongjun Xu, Qian Zhang. Online Knowledge Distillation via Mutual Contrastive Learning for Visual Recognition. IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI), 45(8), 2023. (CCF-A, SCI Q1 IF:24.314)",
            "Yuting Zhang, Ying Sun, Fuzhen Zhuang*, Yongchun Zhu, Zhulin An*, Yongjun Xu. Triple Dual Learning for Opinion-Based Explainable Recommendation. ACM Transactions on Information Systems (TOIS), 42(3), 2023. (CCF-A, SCI Q1 IF:5.6)",
            "Y Xu, X Liu, X Cao, et al. Artificial intelligence: A powerful paradigm for scientific research. The Innovation. 2(4), 2021.",
            "Chuanguang Yang, Xinqiang Yu, Zhulin An, Yongjun Xu. Categories of Response-Based, Feature-Based, and Relation-Based Knowledge Distillation. Chapter in Springer Book《Advancements in Knowledge Distillation: Towards New Horizons of Intelligent Systems》, 2023."
          ]
        },
        {
          heading: "科研项目",
          items: [
            "国家自然科学基金面上项目：基于知识蒸馏的扩散模型训练和推理优化方法研究，项目负责人。"
          ]
        },
      ] },
      Bao: {id:"Bao", name:"包云岗", title:"副所长, 博导, 研究员", bio:"研究方向：数据中心体系结构；处理器芯片敏捷设计；开源芯片生态等。", photo:"assets/img/byg.webp", research: [{
        heading: "个人简历",
        items: [
            "经历：2003年本科毕业于南京大学，2008年获中科院计算所博士学位，2010-2012年普林斯顿大学博士后，现为中科院计算所研究员，先进计算机系统研究中心主任，中国科学院大学岗位教授，博士生导师，中国开放指令生态（RISC-V）联盟秘书长。",
            "学术：研究方向是计算机系统结构，包括数据中心体系结构、处理器芯片敏捷设计、开源芯片生态等。担任国家重点研发计划、自然基金委、中科院战略性先导科技专项、计算所-华为战略合作项目等重大项目及课题负责人，主持研制多款达到国际先进水平的系统，包括访存监控系统HMTT、标签化体系结构Labeled RISC-V原型芯片、面向芯片敏捷设计的RISC-V系统级原型验证服务SERVE平台等，相关技术已在华为、阿里、Intel等国内外企业应用。在国际会议期刊发表了50余篇论文，活跃于国际计算机体系结构学术前沿，长期受邀担任ASPLOS、ISCA、MICRO、SC等CCF-A类国际顶级会议程序委员会委委员，担任IEEE MICRO专刊特邀客座编辑、国际顶级论坛Dagstuhl Seminar共同主席。",
            "荣誉：入选华为2015年全球合作五个代表成果写入其年报、获阿里巴巴最佳合作项目奖。曾两次获计算所优秀论文一等奖，获“CCF-Intel青年学者”奖，入选2016年中国计算机大会特邀大会报告、ARM2018全球研究峰会三个特邀大会报告之一、中科院青年创新促进会优秀会员，获“CCF-IEEE CS”青年科学家奖、共青团中央“全国向上向善好青年”荣誉称号。",
            "任职：先后担任青年计算机科技论坛（YOCSEF）2018年度副主席，ACM China副主席，中国科学院青年创新促进会第三届与第四届理事，未来论坛青年理事与青年科学家创新联盟2019年度轮值主席，《中国计算机学会通讯》专栏主编等。",
            "2018.04 – 至今 先进计算机系统研究中心主任，中科院计算所",
            "2017.01 – 2018.04 先进计算机系统研究中心常务副主任，中科院计算所",
            "2015.05 – 2017.01 先进计算机系统研究中心副主任，中科院计算所",
            "2015.09 – 至今 研究员，中科院计算所",
            "2011.09 – 2015.08 副研究员，中科院计算所",
            "2010.10 – 2012.09 博士后，普林斯顿大学计算机系",
            "2008.09 – 2011.09 助理研究员，中科院计算所",
            "2003.09 – 2008.09  工学博士，中科院计算所",
            "1999.09 – 2003.07 理学学士，南京大学计算机科学与技术系"
            ]
          },
          {
            "heading": "主要论著",
            "items": [
              "Xin Jin, Yaoyang Zhou, Bowen Huang, Zihao Yu, Xusheng Zhan, Huizhe Wang, Sa Wang, Ningmei Yu, Ninghui Sun, Yungang Bao, QoSMT: Supporting Precise Performance Control for Simultaneous multithreading Architecture . in ACM International Conference on Supercomputing (ICS), 2019. (CCF B类)",
              "Jing Guo, Zihao Chang, Sa Wang, Haiyang Ding, Yihui Feng, Liang Mao, Yungang Bao, Who Limits the Resource Efficiency of My Datacenter: An Analysis of Alibaba Datacenter Traces . in IEEE/ACM International Symposium on Quality of Service (IWQoS), 2019. （CCF B类）",
              "Wenlong Ma, Yuqing Zhu, Cheng Li, Mengying Guo, Yungang Bao, BiloKey: A Scalable Bi-Index Locality-Aware In-Memory Key-Value Store . in IEEE Transactions on Parallel and Distributed Systems (TPDS), 2019. （CCF A类）",
              "Ke Zhang, Yisong Chang, Mingyu Chen, Yungang Bao, Zhiwei Xu, Computer Organization and Design Course with FPGA Cloud . in the SIGCSE Technical Symposium (SIGCSE), 2019. （国内第四篇长文）",
              "余子濠,刘志刚,李一苇,黄博文,王卅,孙凝晖,包云岗. 芯片敏捷开发实践：标签化RISC-V[J]. 计算机研究与发展, 2019, 56(1): 35-48.",
              "Yiwen Shao, Sa Wang, Yungang Bao, CryptZip: Squeezing out the Redundancy in Homomorphically Encrypted Backup Data. 9th ACM SIGOPS Asia-Pacific Workshop on Systems (APSys), 2018.",
              "Qun Huang, Patric P. C. Lee, Yungang Bao SketchLearn: Relieving User Burdens in Approximate Measurement with Automated Statistical Inference. Annual Conference of the ACM Special Interest Group on Data Communication (SIGCOMM), 2018. （CCF A类）",
              "Zihao Yu, Bowen Huang, Jiuyue Ma, Ninghui Sun, Yungang Bao, Labeled RISC-V: A New Perspective on Software-Defined Architecture. First Workshop on Computer Architecture Research with RISC-V (CARRV 2017) Co-located with MICRO, 2017.",
              "Yuqing Zhu, Jianxun Liu, Mengying Guo, Yungang Bao, Wenlong Ma, Zhuoyue Liu, Kunpeng Song, Yingchun Yang, BestConfig: tapping the performance potential of systems via automatic configuration tuning. Symposium on Cloud Computing (SoCC), 2017. （CCF B类）",
              "Tianwei Zhang, Yuan Xu, Yungang Bao, Ruby B. Lee, CloudShelter: Protecting Virtual Machines' Memory Resource Availability in Clouds, IEEE International Conference on Computer Design (ICCD), 2017. （CCF B类）",
              "Shiqi Lian, Yinhe Han, Ying Wang, Yungang Bao, Hang Xiao, Xiaowei Li, Ninghui Sun, Dadu: Accelerating Inverse Kinematics for High-DOF Robots, Proceedings of the 54th Annual Design Automation Conference (DAC) 2017. （CCF B类）",
              "Yungang Bao, Sa Wang, Labeled von Neumann Architecture for Software-Defined Cloud. J. Comput. Sci. Technol. 32(2): 219-223 (2017) Xusheng Zhan, Yungang Bao, Christian Bienia, Kai Li, PARSEC3.0: A Multicore Benchmark Suite with Network Stacks and SPLASH-2X. SIGARCH Computer Architecture News 44(5): 1-16 (2016)",
              "Jiuyue Ma, Xiufeng Sui, Ninghui Sun, Yupeng Li, Zhihao Yu, Bowen Huang, Tiani Xu, Zhicheng Yao, Yun Chen, Haibin Wang, Lixing Zhang, Yungang Bao, Supporting Differentiated Services in Computers via Programmable Architecture for Resourcing-on-Demand (PARD) , in the 20th International Conference on Architectural Support for Programming Languages and Operating Systems (ASPLOS), 2015. （CCF A类）",
              "Zehan Cui, Sally A. McKee, Zhongbin Zha, Yungang Bao, Mingyu Chen, DTail: A Flexible Approach to DRAM Refresh Management , to appear in ACM International Conference on Supercomputing (ICS), 2014. （CCF B类）",
              "Rui Ren, Jiuyue Ma, Xiufeng Sui, and Yungang Bao, D^2P: A Distributed Deadline Propagation Approach to Tolerate Long-Tail Latency in Datacenters , appear in 5th ACM Asia-Pacific Workshop on Systems (APSys), 2014.",
              "Tianshi Chen, Qi Guo, Olivier Temam, Yue Wu, Yungang Bao, Zhiwei Xu, and Yunji Chen, Statistical Performance Comparisons of Computers, to appear in IEEE Transactions on Computers (IEEE TC), 2014. （CCF A类）",
              "Licheng Chen, Zhipeng Wei, Zehan Cui, Mingyu Chen, Haiyang Pan, Yungang Bao, CMD: Classification-based Memory Deduplication through Page Access Characteristics , in the 10th ACM SIGOPS/SIGPLAN International Conference on Virtual Execution Environments (VEE), 2014. （CCF B类）",
              "Lei Liu, Zehan Cui, Yong Li, Yungang Bao, Mingyu Chen, Chengyong Wu, BPM/BPM+: Software-based Memory Partitioning Mechanisms for Eliminating DRAM Bank-/Channel-level Interferences in Multicore Systems, to appear in the ACM Transactions on Architecture and Code Optimization (TACO), 2014.",
              "Yongbing Huang, Licheng Chen, Zehan Cui, Yuan Ruan, Yungang Bao, Mingyu Chen, Ninghui Sun, HMTT: A Hybrid Hardware/Software Tracing System for Bridging the DRAM Access Trace's Semantic Gap , to appear in the ACM Transactions on Architecture and Code Optimization (TACO), 2014. （CCF B类）",
              "Licheng Chen, Yanan Wang, Zehan Cui, Yongbing Huang, Yungang Bao, Mingyu Chen, Scattered Superpage: A Case for Bridging the Gap between Superpage and Page Coloring, Proceedings of the 31st IEEE International Conference on Computer Design (ICCD), Asheville, NC, 2013.（CCF B类）",
              "Lei Liu, Zehan Cui, Mingjie Xing, Yungang Bao, Mingyu Chen, Chengyong Wu, A Software Memory Partition Approach for Eliminating Bank-level Interference in Multicore Systems, International Conference on Parallel Architectures and Compilation Techniques (PACT), 2012. （CCF B类）",
              "Yongbing Huang, Zehan Cui, Licheng Chen, Wenli Zhang, Yungang Bao, Mingyu Chen, HaLock: Hardware-Assisted Lock Contention Detection in Multithreaded Applications, International Conference on Parallel Architectures and Compilation Techniques (PACT), 2012. （CCF B类）",
              "Pengfei Zhu, Mingyu Chen, Yungang Bao, Licheng Chen, and Yongbing Huang, Trace-driven Simulation of the Memory System Scheduling in Multithread application, ACM SIGPLAN Workshop on Memory Systems Performance and Correctness (MSPC) co-located with PLDI, 2012.",
              "Licheng Chen, Zehan Cui, Yongbing Huang, Yungang Bao, Guangming Tan, Mingyu Chen, A Lightweight Hybrid Hardware/Software Approach for Object-Relative Memory Profiling, IEEE International Symposium on Performance Analysis of Systems and Software (ISPASS), New Brunswick, NJ, April 1-3, 2012.",
              "Erlin Yao, Yungang Bao, Mingyu Chen, What Hill-Marty model learn from and break through Amdahl's law?, Information Processing Letters (IPL), 2011.",
              "Guangming Tan, Linchuan Li, Sean Triechle, Everett Phillips, Yungang Bao, Ninghui Sun, Fast Implementation of DGEMM on Fermi GPU, ACM/IEEE Supercomputing (SC), 2011. （CCF A类）",
              "Zehan Cui, Yan Zhu, Yungang Bao and Mingyu Chen, A Fine-grained component-level power measurement method, The First International Workshop on Power Measurement and Profiling (PMP) in conjunction with IEEE IGCC, 2011.",
              "Dan Tang, Yungang Bao, Weiwu Hu, Mingyu Chen, DMA Cache: Using On-Chip Storage to Architecturally Separate I/O Data from CPU Data for Improving I/O Performance, the 16th IEEE International Symposium on High-Performance Computer Architecture (HPCA), 2010. （计算所优秀论文一等奖，CCF A类）",
              "Erlin Yao, Yungang Bao, Guangming Tan, Mingyu Chen, Extending Amdahl's Law in the Multicore Era, ACM SIGMETRICS Performance Evaluation Review (PER), Volume 37 , Issue 2, September 2009.",
              "Dan Tang, Yungang Bao, Yunji Chen, Weiwu Hu, Mingyu Chen, Exploiting the Produce-Consume Relationship in DMA to Improve I/O Performanc, Workshop on The Influence of I/O on Microprocessor Architecture (IOM) in conjunction with the 15th International Symposium on High-Performance Computer Architecture (HPCA), Raleigh, North Carolina, February 15, 2009.",
              "Zehan Cui, Licheng Chen, Yungang Bao, Mingyu Chen, A Swap-based Cache Set Index Scheme to Leverage both Superpage and Page Coloring Optimizations , to appear in the Design Automation Conference (DAC), 2014. （CCF A类）",
              "Lei Liu, Yong Li, Zehan Cui, Yungang Bao, Mingyu Chen, Chengyong Wu, Going Vertical in Memory Management: Handling Multiplicity by Multi-policy , to appear in the 41st International Symposium on Computer Architecture (ISCA), 2014. （CCF A类）",
              "Yungang Bao, Mingyu Chen, Yuan Ruan, Li Liu, Jianping Fan, Qingbo Yuan, Bo Song, Jianwei Xu, HMTT: A Platform Independent Full-System Memory Trace Monitoring System, International Conference on Measurement and Modeling of Computer Systems (SIGMETRICS),Annapolis, Maryland, USA, June 2-6,2008. （计算所优秀论文一等奖，CCF B类）"
            ]
          },
          {
            heading: "科研项目",
            items: [
                "国家自然科学基金国际重点合作项目，61420106013，“高效通用数据中心体系结构研究”，中科院计算所与普林斯顿大学联合执行，2015/01-2019/12, 280万，总协调人",
                "国家自然科学基金青年基金，基于软硬件混合监测机制的多核环境下内存系统性能分析与优化技术研究，2010/01-2011/12，项目负责人"
                ]
              },
        ]
      },
      Bu: { id:"Bu", name:"卜东波", title:"博导, 研究员", bio:"研究方向：生物信息学；计算机算法设计与分析。", photo:"assets/img/bdb.webp", research: [{
            heading: "个人简历",
            items: [
              "2010/07-至今，中国科学院计算技术研究所，前瞻研究实验室，学术主任，研究员",
              "2006/05-2008/08，加拿大滑铁卢大学，计算机系，访问学者",
              "2003/07-2010/06，中国科学院计算技术研究所，前瞻研究实验室，副研究员",
              "2001/01-2003/06，中国科学院计算技术研究所，前瞻研究实验室，助理研究员",
              "1997/09 – 2001/01，中科院计算所，博士，导师：李国杰研究员",
              "1994/09 – 1997/06，中科院计算所，硕士，导师：白硕研究员",
              "1990/09 – 1994/06，山东大学，计算机系，学士"
            ]
          },
          {
            "heading": "主要论著",
            "items": [
              "Chao Wang, Yi Wei, Lupeng Kong, Shiwei Sun, Wei-Mou Zheng, Dongbo Bu*，Constructing effective energy functions for protein structure prediction through broadening attraction-basin and reverse Monte Carlo sampling， BMC Bioinformatics, 2019 通讯作者",
              "Jianwei Zhu, Sheng Wang, Dongbo Bu*, Jinbo Xu*，Protein threading using residue co-variation and deep learning， Bioinformatics, 2018, 34(13): i263~273 通讯作者",
              "Jianwei Zhu, Haicang Zhang, Shuai Cheng Li, Chao Wang, Lupeng Kong, Shiwei Sun, Wei-Mou Zheng, Dongbo Bu*，Improving protein fold recognition by extracting fold-specific features from predicted residue–residue contacts， Bioinformatics, 2017 Dec, 33(53): 3749~3753 通讯作者",
              "Hong Liu#, Maozhen Han#, Shuai Cheng Li, Guangming Tan, Shiwei Sun, Zhiqiang Hu, Pengshuo Yang Rui Wang, Yawen Liu, Feng Chen, Jianjun Peng, Hong Peng Hongxing Song, Yang Xia, Liqun Chu, Quan Zhou, Feng Guan, Jing Wu, Dongbo Bu*, Kang Ning*. Resilience of human gut microbial communities for the long stay with multiple dietary shifts, Gut 2018, DOI: 10.1136/gutjnl-2018-317298. 通讯作者",
              "Shiwei Sun#, Chuncui Huang#, Yaojun Wang#, Yaming Liu, Jingwei Zhang, Jinyu Zhou, Feng Gao, Fei Yang, Runsheng, Chen, Barbara, Mulloy, Wengang Chai*, Yan Li*, Dongbo Bu*. Toward automated identification of glycan branching patterns using multistage mass spectrometry with intelligent precursor selection [J]. Analytical Chemistry, 2018, 90, 14412-14422. 通讯作者",
              "孙世伟，王耀君，卜东波，李岩，黄纯翠，刘亚名，杨飞，武红梅，陈润生，多级质谱生物大分子结构鉴定方法，201510290301.7, 已授权"
            ]
          },
          {
            "heading": "科研项目",
            "items": [
              "国家自然科学基金面上，31770775，蛋白质残基间相互作用预测算法研究及其在三级结构预测中的应用,60万，在研，主持",
              "国家自然科学基金面上，61272318，蛋白质结构模体识别及结构预测算法研究，2012/01-2016/12，80万，已结题，主持",
              "国家自然科学基金青年基金，30800168，基于随机图的蛋白质三级结构预测研究，2008/01-2012/12，20万，已结题，主持",
              "国家自然科学基金重大项目子课题，非规范知识处理的关键技术研究， 60496320，2005/01-2009/12, 120万，已结题，子课题负责人",
            ]
          },
        ]
      },
      Dai: { id:"Dai", name:"代锋", title:"博导, 研究员", bio:"研究方向：计算机视觉；图像处理与分析。", photo:"assets/img/df.webp", research: [
          {
            heading: "个人简历",
            items: [
              "长期从事计算机视觉，视频图像分析与处理方向的研究工作，目前的研究兴趣为计算机视觉在智能农业中的应用。作为负责人承担了国家重点研发计划课题，国家自然科学基金面上项目，国家信息安全242计划项目等多个国家级项目。在NeurIPS/CVPR/ECCV/AAAI/IJCAI/IEEE T-MM/IEEE T-CSVT等国内外学术期刊和会议上发表论文近百篇，拥有授权发明专利10余项，长期担任IEEE T-CSVT, IEEE T-MM等国际期刊审稿人，NeurIPS/CVPR/ECCV/IJCAI/AAAI等顶级国际会议PC Member。获得2011年多媒体旗舰会议ICME最佳论文候选，2018年中国多媒体大会最佳论文奖与杰出展示奖。2014年获北京市科学技术一等奖。2022年获得世界物联网博览会金奖。研究成果批量应用于国家网络安全主管部门。",
              "2024年10月 — 今：中国科学院计算技术研究所，研究员、博士生导师",
              "2021年12月 — 2024年10月：中国科学院计算技术研究所，副研究员、博士生导师",
              "2011年9月 — 2021年12月：中国科学院计算技术研究所，副研究员、硕士生导师",
              "2008年7月 — 2011年9月：中国科学院计算技术研究所，助理研究员",
              "2002年9月 — 2008年7月：中国科学院计算技术研究所，计算机应用技术，博士",
              "1998年9月 — 2002年7月：清华大学，计算机科学与技术，本科"
            ]
          },
          {
            "heading": "主要论著",
            "items": [
              "Hao Zhu; Yan Zhu; Jiayu Xiao; Tianxiang Xiao; Yike Ma; Yucheng Zhang; Feng Dai*; Exact: Exploring Space-Time Perceptive Clues for Weakly Supervised Satellite Image Time Series Semantic Segmentation , Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR 2025), Nashville TN, USA. （CCF A类会议）",
              "Tianlong Tan; Bin Chen ; Hongliang Cao; Chenggang Yan; Yike Ma; Feng Dai*; DASC-SPT: Towards Self-Supervised Panoramic Semantic Segmentation, IEEE/CVF Winter Conference on Applications of Computer Vision (WACV 2025), Tucson, Arizona, USA. （CCF B类会议）",
              "Yanping Fu; Wenbin Liao; Xinyuan Liu; Hang Xu; Yike Ma; Feng Dai*; Yucheng Zhang; TopoLogic: An Interpretable Pipeline for Lane Topology Reasoning on Driving Scenes, the Thirty-Eighth Annual Conference on Neural Information Processing Systems (NeurIPS 2024), Vancouver, Canada. （CCF A类会议）",
              "Hao Zhu; Yan Zhu; Jiayu Xiao; Yike Ma; Yucheng Zhang; Jintao Li; Feng Dai*; MISA: MIning Saliency-Aware Semantic Prior for Box Supervised Instance Segmentation, The 33th International Joint Conference on Artificial Intelligence (IJCAI 2024), Jeju, South Korea. （CCF A类会议）",
              "Hang Xu; Xinyuan Liu; Haonan Xu; Yike Ma; Zunjie Zhu; Chenggang Yanl; Feng Dai*; Rethinking Boundary Discontinuity Problem for Oriented Obiect Detection, Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR 2024), Seattle WA, USA. （CCF B类会议）",
              "Xinyuan Liu; Hang Xu; Bin Chen; Qiang Zhao; Yike Ma; Chenggang Yan; Feng Dai*; Sph2Pob: Boosting Object Detection on Spherical Images with Planar Oriented Boxes Methods, the 32nd International Joint Conference on Artificial intelligence (IJCAI 2023), Macao, China. （CCF A类会议）",
              "Hang Xu; Xinyuan Liu; Qiang Zhao; Yike Ma; Chenggang Yan; Feng Dai*; Gaussian Label Distribution Learning for Spherical Object Detection, Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR 2023), Vancouver, Canada. （CCF A类会议）",
              "Jiaqi Zhu; Feng Dai; Lingyun Yu; Hongtao Xie; Lidong Wang; Bo Wu; Yongdong Zhang; Attention-guided transformation-invariant attack for black-box adversarial examples, International Journal of Intelligent Systems, 2022, 37(5), 3142-3165.（中科院2区，WOS1区）",
              "Hao Liu; Bin Chen; Bo Wang; Chunpeng Wu; Feng Dai; Peng Wu; Cycle Self-Training for Semi-Supervised Object Detection with Distribution Consistency Reweighting, the 30th ACM International Conference on Multimedia (ACM MM 2022), Lisbon, Portugal. （CCF A类会议）",
              "Hang Xu; Qiang Zhao; Yike Ma; Xiaodong Li; Peng Yuan; Bailan Feng ;Chenggang Yan; Feng Dai*; PANDORA: A Panoramic Detection Dataset for Object with Orientation, The 17th European Conference on Computer Vision (ECCV 2022), Tel-Aviv, Israel. （CCF A类会议）",
              "Feng Dai; Bin Chen; Hang Xu; Yike Ma; Xiaodong Li; Bailan Feng; Peng Yuan; Chenggang Yan; Qiang Zhao*; Unbiased IoU for Spherical Image Object Detection, 36th AAAI Conference on Artificial Intelligence (AAAI 2022), Vancouver, BC, Canada. （CCF A类会议）",
              "Feng Dai; Hao Liu; Yike Ma; Xi Zhang; Qiang Zhao∗; Dense Scale Network for Crowd Counting, ACM International Conference on Multimedia Retrieval (ICMR 2021), Taibei, Taiwan. （CCF B类会议）",
              "Hao Liu; Qiang Zhao; Yike Ma; Feng Dai*; Bipartite Matching for Crowd Counting with Point Supervision, The 30th International Joint Conference on Artificial Intelligence (IJCAI 2021), Montreal, Canada. （CCF A类会议）",
              "Feng Dai; Youqiang Zhang; Yike Ma; Hongliang Li; Qiang Zhao*; Dilated Convolutional Neural Networks for Panoramic Image Saliency Prediction, The 45th International Conference on Acoustics, Speech, and Signal Processing (ICASSP 2020), Barcelona, Spain. （CCF B类会议）",
              "Qiang Zhao; Feng Dai; Jing Lv; Yike Ma; Yongdong Zhang; Panoramic Light Field From Hand-Held Video and Its Sampling for Real-Time Rendering, IEEE Transactions on Circuits and Systems for Video Technology, 2020, 30(4), 1011-1021. （中科院1区，WOS1区）",
              "Feng Dai, Chen Zhu, Yike Ma, Juan Cao, Qiang Zhao*, Yongdong Zhang “Freely Explore the Scene with 360 Field of View”, The 26th IEEE Conference on Virtual Reality and 3D User Interfaces (IEEE VR), 2019. （CCF A类会议）",
              "Xuehui Wang; Feng Dai*; Yike Ma; Junbo Guo; Qiang Zhao; Yongdong Zhang; Near-Infrared Image Guided Neural Networks For Color Image Denoising, The 44th International Conference on Acoustics, Speech, and Signal Processing (ICASSP 2019), UK, Brighton. （CCF B类会议）",
              "Guoqing Jin; Shiwei Shen; Dongming Zhang*; Feng Dai; Yongdong Zhang; APE-GAN: Adversarial Perturbation Elimination with Gan, The 44th International Conference on Acoustics, Speech, and Signal Processing (ICASSP 2019), UK, Brighton. （CCF B类会议）",
              "Qiang Zhao; Zhu Chen; Feng Dai*; Yike Ma; Guoqing Jin; Yongdong Zhang; Distortion-aware CNNs for Spherical Images, The 27th International Joint Conference on Artificial Intelligence (IJCAI 2018), Stockholm, Sweden. （CCF A类会议）",
              "Jing Lyu; Feng Dai*; Qiang Zhao; Hongliang Li; Yike Ma; Yongdong Zhang; Panoramic Light Field Video Acquisition, 2018 IEEE International Conference on Multimedia and Expo (ICME 2018), San Diego, USA. （CCF B类会议）",
              "Rihui Wu; Adrian Jarabo; Jinli Suo; Feng Dai; Yongdong Zhang; Qionghai Dai; Diego Gutierrez; Adaptive Polarization-Difference Transient Imaging for Depth Estimation in Scattering Media, Optics Letters, 2018, 43(6), 1299-1302. （中科院2区，WOS1区）",
              "Qiang Zhao; Feng Dai; Yike Ma; Liang Wan; Jiawan Zhang; Yongdong Zhang; Spherical Superpixel Segmentation, IEEE Transactions on Multimedia , 2018, 20(6), 1406-1417.（中科院1区，WOS1区）",
              "Rihui Wu; Jinli Suo; Feng Dai; Yongdong Zhang; Qionghai Dai; Scattering robust 3D reconstruction via polarized transient imaging, Optics Letters, 2016, 41(17), 3948-3951.（光学顶级期刊，中科院2区）",
              "Chenggang Yan; Yongdong Zhang; Jizheng Xu; Feng Dai; Jun Zhang; Qionghai Dai; Feng Wu; Efficient Parallel Framework for HEVC Motion Estimation on Many-Core Processors, IEEE Transactions on Circuits and Systems for Video Technology, 2014, 24(12), 2077-2089. （中科院1区，WOS1区）",
              "Chenggang Yan; Yongdong Zhang; Feng Dai; Liang Li; Highly Parallel Framework for HEVC Motion Estimation on Many-core Platform, 2013 Data Compression Conference (DCC 2013), Snowbird, UT, USA. （CCF B类会议）",
              "Chenggang Yan; Yongdong Zhang; Feng Dai; Liang Li; Efficient Parallel Framework for HEVC Deblocking Filter on Many-core Platform, 2013 Data Compression Conference (DCC 2013), Snowbird, UT, USA. （CCF B类会议）",
              "Yongdong Zhang; Chenggang Yan; Feng Dai; Yike Ma; Efficient Parallel Framework for H.264/AVC Deblocking Filter on Many-core Platform, IEEE Transactions on Multimedia, 2012, 14(3), 510-524.（中科院1区，WOS1区）",
              "Chenggang Yan; Feng Dai; Yongdong Zhang; Yike Ma; Licheng Chen; LingjunFan; Yasong Zheng; Parallel Deblocking Filter For H.264/AVC Implemented On Tile64 Platform, 2011 IEEE International Conference on Multimedia and Expo (ICME 2011), Barcelona, Spain. （CCF B类会议, 最佳论文候选）",
              "Like Yu; Feng Dai; Yongdong Zhang; Shouxun Lin; Efficient Video Coding Optimization using a Novel Perceptual Distortion Model, 2011 Data Compression Conference (DCC 2011), Snowbird, UT, USA. （CCF B类会议）",
              "Lingling Tong; Feng Dai; Yongdong Zhang; Jintao Li; Visual Security Evaluation for Video Encryption, the 18th International Conference on Multimedia (ACM MM 2010), Firenze, Italy. （CCF A类会议）",
              "基于双目光场相机的深度获取方法和系统（授权号：CN201810097816.9）",
              "一种基于深度残差网络的压缩感知重建方法和系统（授权号：CN201710911893.9）",
              "基于自动编码器网络的压缩感知测量矩阵优化方法和系统（授权号：CN201710911885.4）",
              "基于哈达玛矩阵的渐进式压缩感知重建方法和系统（授权号：CN201710954199.5）",
              "局部特征点筛选方法及系统 （授权号：CN201610701965.2）",
              "一种恢复深度信息的图像处理的方法（授权号：201510490628.9）",
              "一种基于观测矩阵的压缩感知成像及图像重建方法（授权号：201510551103.1）",
              "一种基于动态光散射技术的悬浮颗粒粒径测量装置及方法（授权号: 201510483564.X）",
              "一种光场图像前后景自动分割方法(申请号:201510670734.5)",
              "面向排序测度特征的图像匹配方法及系统（授权号：201410646014.0）",
              "基于排序测度特征的图像检索方法及系统 （授权号：201410645743.4）",
              "一种视频编解码中去块滤波方法 (授权号：201110007133.8)",
              "支持音视频解码自适应的系统及其方法（授权号：200910084861.1）",
              "保证特定区域显示质量的视频编码的方法和装置（授权号：200910083722.7）",
              "隐私区域置乱的视频中误差漂移的抑制方法与系统（授权号：200910093974.8）",
              "一种柱面全景视频编码的块尺寸计算方法和传输方法（授权号：200710175443.4）"
            ]
          },
          {
            "heading": "科研项目",
            "items": [
                "新能源园艺作业机械智能感知与自主行驶（2023YFD2000303）国家重点研发计划 课题负责人 310万2023年12月-2027年11月",
                "全景图像目标检测关键技术研究（62372433） 国家自然科学基金 50万 课题负责人 2024年1月-2027年12月",
                "无人化农机作业环境识别与场景构建技术研究（2022YFD2001601） 国家重点研发计划 子课题负责人 100万2022年11月-2026年10月",
                "智能农机关键技术研发创制 中国科学院A类先导专项子课题 1300万 子课题负责人 2021年1月-2026年12月",
                "山地特色智能农机研发制造 中国科学院科技帮扶项目课题 45 万 课题负责人 2022 年1 月-2024年12月",
                "全景视频智能分析技术研究 中科院计算所创新课题 100万 课题负责人2020年5月-2022年4月",
                "鱼眼视觉关键技术研究 横向（华为技术有限公司） 145万 课题负责人2020年4月-2021年4月",
                "视听媒体内容审计技术研究（2018YFB0804203）国家重点研发计划 424万 课题负责人 2018年12月-2022年12月",
                "基于深度学习的压缩感知成像技术研究 （61771458） 国家自然科学基金 62万 课题负责人 2018年1月-2021年12月",
                "动态可配置的压缩感知成像装置研制(YZ201321) 中国科学院科研装备研制项目 420万 课题技术负责人 2014年1月-2015年12月",
                "动态可配置的压缩感知成像系统 （61327013）国家自然科学基金科学仪器基础研究专项 300万 课题技术负责人 2014年1月-2017年12月",
                "基于GPU平台的HEVC并行编码算法研究（61379084） 国家自然科学基金 76万 课题负责人 2014年1月-2017年12月",
                "基于隐私区域的视频加密技术研究（61102101） 国家自然科学基金 24万 课题负责人 2012年1月-2014年12月",
                "移动互联网与宽带网融合总体架构和关键评估方法及移动互联网与电信宽带网融合技术方案及应用示范 （2012BAH06B01） 国家科技支撑计划 935万 子课题负责人（93.5万） 2012年1月-2014年12月"
            ]
          },
          {
            "heading": "获奖及荣誉",
            "items": [
                "2022年世界物联网博览会金奖",
                "2018年中国多媒体大会最佳论文奖",
                "2018年中国多媒体大会杰出展示奖",
                "2014年北京市科学技术奖一等奖 （排名第8）",
                "2011年ICME最佳论文候选",
            ]
          },
        ]
      },
      Gao: { id:"Gao", name:"高林", title:"博导, 研究员", bio:"研究方向：智能计算机图形学；三维计算机视觉；模式识别。", photo:"assets/img/gl.webp", research: [
          {
            heading: "个人简历",
            items: [
              "2024年7月— 至今：中国科学院计算技术研究所，泛在计算系统研究中心副主任，研究员",
              "2023年9月 — 2024年7月：中国科学院计算技术研究所，研究员",
              "2019年12月 — 至今：中国科学院计算技术研究所，博士生导师",
              "2016年9月 — 2023年9月：中国科学院计算技术研究所，副研究员",
              "2016年2月 — 2017年2月：德国亚琛工业大学， 公派访问学者",
              "2014年7月 — 2016年9月：前瞻研究实验室，助理研究员",
              "2009年7月 — 2014年7月：清华大学，计算机科学与技术系，工学博士",
              "2005年9月 — 2009年6月：四川大学，数学学院，理学学士"
            ]
          },
          {
            heading: "主要论著",
            items: [
                "Lin Gao,Tong Wu,Yu-Jie Yuan,Ming-Xian Lin,Yu-Kun Lai,Hao (Richard) Zhang,TM-NET: Deep Generative Networks for Textured Meshes,ACM SIGGRAPH/TOG,2021,40(6),1-15.",
                "Shu-Yu Chen#,Feng-Lin Liu#,Yu-Kun Lai,Paul Rosin,Chun-Peng Li,Hongbo Fu,Lin Gao*，DeepFaceEditing: Deep Face Generation and Editing with Disentangled Geometry and Appearance Control,ACM SIGGRAPH/TOG,2021,40(4),90:1-90:15.",
                "Qingyang Tan#,Ling-Xiao Zhang#,Jie Yang,Yu-Kun Lai,Lin Gao*,Variational Autoencoders for Localized Mesh Deformation Component Analysis,IEEE Transactions on Pattern Analysis and Machine Intelligence (IEEE TPAMI),2021.",
                "Lin Gao*,Ling-Xiao Zhang,Hsien-Yu Meng,Yi-Hui Ren,Yu-Kun Lai,Leif Kobbelt, PRS-Net: Planar Reflective Symmetry Detection Net for 3D Models,IEEE Transactions on Visualization and Computer Graphics (IEEE TVCG),2021,27(6),3007-3018.",
                "Lin Gao,Yu-Kun Lai,Jie Yang,Ling-Xiao Zhang,Shihong Xia,Leif Kobbelt,Sparse Data Driven Mesh Deformation,IEEE Transactions on Visualization and Computer Graphics (IEEE TVCG),2021,27(3),2085-2100.",
                "Mingxian Lin,Jie Yang,He Wang,Yu-Kun Lai,Rongfei Jia,Binqiang Zhao, Lin Gao*,Single Image 3D Shape Retrieval via Cross-Modal Instance and Category Contrastive Learning,IEEE International Conference on Computer Vision (IEEE ICCV),2021.",
                "Huan Fu,Bowen Cai, Lin Gao,Ling-Xiao Zhang,Jiaming Wang,Cao Li,Qixun Zeng,Chengyue Sun,Rongfei Jia,Binqiang Zhao,Hao (Richard) Zhang,3D-FRONT: 3D Furnished Rooms with layOuts and semaNTics,IEEE International Conference on Computer Vision (IEEE ICCV),2021.",
                "Yu-Hui Wen#,Zhipeng Yang#,Hongbo Fu, Lin Gao*,Yanan Sun,Yong-Jin Liu*,Autoregressive Stylized Motion Synthesis with Generative Flow,IEEE Conference on Computer Vision and Pattern Recognition (IEEE CVPR),2021,13612-13621.",
                "Yu-Jie Yuan,Yu-Kun Lai,Tong Wu,Lin Gao*,Ligang Liu,A Revisit of Shape Editing Techniques: from the Geometric to the Neural Viewpoint,Journal of Computer Science and Technology (JCST),2021,36,520-554.",
                "Shu-Yu Chen#,Wanchao Su#,Lin Gao*,Shihong Xia,Hongbo Fu,DeepFaceDrawing: Deep Generation of Face Images from Sketches,ACM SIGGRAPH/TOG,2020,39(4),72:1-72:16.",
                "Shu-Yu Chen,Jia-Qi Zhang,Lin Gao*,Yue He,Shihong Xia,Min Shi,Fang-Lue Zhang Active Colorization for Cartoon Line Drawings,IEEE Transactions on Visualization and Computer Graphics (IEEE TVCG),2020.",
                "Yi-Ling Qiao,Yu-Kun Lai,Hongbo Fu,Lin Gao*,Synthesizing Mesh Deformation Sequences with Bidirectional LSTM,IEEE Transactions on Visualization and Computer Graphics (IEEE TVCG),2020.",
                "Yi-Ling Qiao,Lin Gao*,Jie Yang,Paul L. Rosin,Yu-Kun Lai,Xilin Chen,Learning on 3D Meshes with Laplacian Encoding and Pooling,IEEE Transactions on Visualization and Computer Graphics (IEEE TVCG),2020.",
                "Yun-Peng Xiao,Yu-Kun Lai,Fang-Lue Zhang,Chunpeng Li,Lin Gao*,A Survey on Deep Geometry Learning: From a Representation Perspective,Computational Visual Media,2020,6,113-133.",
                "Qingyang Tan,Zherong Pan, Lin Gao,Dinesh Manocha,Realtime Simulation of Thin-Shell Deformable Materials using CNN-Based Mesh Embedding,IEEE Robotics and Automation Letters,2020,5(2),2325-2332.",
                "Yu-Jie Yuan,Yu-Kun Lai,Jie Yang,Qi Duan,Hongbo Fu, Lin Gao*,Mesh Variational Autoencoders with Edge Contraction Pooling,IEEE CVPR 2020 Workshop.",
                "Jianda Zhang,Chunpeng Li,Qiang Song, Lin Gao, Yu-Kun Lai,Automatic 3D Tooth Segmentation using Convolutional Neural Networks in Harmonic Parameter Space,Graphical Models,2020,109.",
                "Shaojun Bian,Anzong Zheng, Lin Gao, Greg Maguire,Willem Kokke,Jon Macey,Lihua You,Jian-Jun Zhang,Fully Automatic Facial Deformation Transfer,Symmetry,2020,12(1),27.",
                "Lin Gao*,Jie Yang,Tong Wu,Yu-Jie Yuan,Hongbo Fu,Yu-Kun Lai,Hao (Richard) Zhang,SDM-NET: Deep Generative Network for Structured Deformable Mesh,ACM SIGGRAPH/TOG,2019,38(6),243:1-243:15.",
                "Ming-Ze Yuan, Lin Gao*,Hongbo Fu,Shihong Xia,Temporal Upsampling of Depth Maps Using a Hybrid Camera,IEEE Transactions on Visualization and Computer Graphics (IEEE TVCG),2019,25(3),1591-1602.",
                "Hsien-Yu Meng, Lin Gao*,Yu-Kun Lai,Dinesh Manocha,VV-Net: Voxel VAE Net with Group Convolutions for Point Cloud Segmentation,IEEE International Conference in Computer Vision (IEEE ICCV),2019,8499-8507.",
                "Yu-Hui Wen, Lin Gao*,Hongbo Fu,Fang-Lue Zhang,Shihong Xia,Graph CNNs with Motif and Variable Temporal Block for Skeleton-based Action Recognition,The Thirty-Third AAAI Conference on Artificial Intelligence (AAAI),2019,8989-8996.",
                "Yu-Jie Yuan,Yu-Kun Lai,Tong Wu,Shihong Xia, Lin Gao*,Data-Driven Weight Optimization for Real-Time Mesh Deformation,Graphical Models,2019,104.",
                "Lin Gao,Jie Yang,Yi-Ling Qiao,Yu-Kun Lai,Paul Rosin,Weiwei Xu,Shihong Xia, Automatic Unpaired Shape Deformation Transfer, ACM SIGGRAPH/TOG,2018,37(6),237:1-237:15.",
                "Jie Yang,Lin Gao*,Yu-Kun Lai,Paul L. Rosin,Shihong Xia,Biharmonic Deformation Transfer with Automatic Key Point Selection,Graphical Models,2018,98,1-13.",
                "Qingyang Tan,Lin Gao*,Yu-Kun Lai,Shihong Xia,Variation Autoencoders for Deforming 3D Mesh Models,IEEE Conference on Computer Vision and Pattern Recognition (IEEE CVPR),2018,5841-5850.",
                "Qingyang Tan,Lin Gao*,Yu-Kun Lai,Jie Yang,Shihong Xia,Mesh-based Autoencoders for Localized Deformation Component Analysis,AAAI Conference on Artificial Intelligence (AAAI),2018,2452-2459.",
                "Shu-Yu Chen,Lin Gao*,Yu-Kun Lai,Paul L. Rosin,Shihong Xia,Realtime 3D Face Reconstruction and Gaze Tracking for Virtual Reality,The 25th IEEE Conference on Virtual Reality and 3D User Interfaces (IEEE VR),2018,525-526.",
                "Yi-Ling Qiao,Lin Gao*,Yu-Kun Lai,Fang-Lue Zhang,Ming-Ze Yuan,Shihong Xia,SF-Net: Learning Scene Flow from RGB-D Images with CNNs,British Machine Vision Conference (BMVC),2018,281.",
                "Shu-Yu Chen,Lin Gao*,Yu-Kun Lai,Shihong Xia,Rigidity Controllable As-Rigid-As-Possible Shape Deformation,Graphical Models,2017,91,13-21.",
                "Lin Gao*,Shu-Yu Chen,Yu-Kun Lai,Shihong Xia,Data-Driven Shape Interpolation and Morphing Editing,Computer Graphics Forum (Eurographics 2017),2017,36(8),19-31.",
                "Shihong Xia, Lin Gao*,Yu-Kun Lai,Ming-Ze Yuan,Jinxiang Chai,A Survey on Human Performance Capture and Animation,Journal of Computer Science and Technology (JCST),2017,32(3),536-554.",
                "Lin Gao*,Yu-Kun Lai,Dun Liang,Shu-Yu Chen,Shihong Xia,Efficientand Flexible Deformation Representation for Data-Driven Surface Modeling,ACM SIGGRAPH/TOG,2016,35(5),158:1-158:17.",
                "Lin Gao*,Yan-Pei Cao,Yu-Kun Lai,Hao-Zhi Huang,Leif Kobbelt,Shi-Min Hu,Active Exploration of Large 3D Model Repositories,IEEE Transactions on Visualization and Computer Graphics (IEEE TVCG),2015,12(21),1390-1402.",
                "Lin Gao,Yu-Kun Lai,Qixing Huang,Shi-Min Hu,A Data-Driven Approach to Realistic Shape Morphing,Computer Graphics Forum (Eurographics 2013),2013,32(2),449-457.",
                "Qi-Xing Huang,Guo-Xin Zhang,Lin Gao,Shi-Min Hu,Adrian Butscher,Leonidas Guibas,An optimization approach for extracting and encoding consistent maps in a shape collection,ACM SIGGRAPH/TOG,2012,31(6),167:1-167:11.",
                "Lin Gao*,Guo-Xin Zhang,Yu-Kun Lai,Lp Shape Deformation,Science China Information Sciences,2012,55(5),983-993."
            ]
          },
          {
            heading: "科研项目",
            items: [
              "国家自然科学基金优秀青年科学基金项目，计算机图形学，2024/01 - 2026/12，200万元，在研，主持",
              "国家自然科学基金国际合作研究项目，基于深度几何表示的三维模型分析与建模方法研究，2021/01 - 2023/12，300万元，在研，主持",
              "北京市杰出青年科学基金项目，智能数字媒体分析和合成方法研究，2021/11-2024/12,100万元，在研，主持",
              "国家自然科学基金面上项目，数据驱动的三维模型合成技术研究，2019/01-2022/12，结题，主持",
              "英国皇家学会牛顿高级学者基金，Deep Representations for Analysis and Reconstruction of 3D Shapes with Complex Structure and Rich Details，2019/12-2021/11，结题，主持",
            ]
          },
          {
            heading: "获奖及荣誉",
            items: [
              "吴文俊人工智能优秀青年奖,2022",
              "中科院计算所卓越之星,2022",
              "共青团中央全国向上向善好青年,2021",
              "中国计算机学会CAD&CG专委会图形开源奖,2021",
              "亚洲图形青年学者奖,2020",
              "英国皇家学会牛顿高级学者,2019",
              "CCF科学技术奖技术发明一等奖,2018",
            ]
          }
        ]
      },
      Huang: { id:"Huang", name:"黄礼泊", title:"助理研究员", bio:"研究方向：机器学习；神经科学。", photo:"assets/img/hlb.webp", research: [
          {
            heading: "个人简历",
            items: [
              "黄礼泊是中国科学院计算技术研究所的助理研究员。在此之前，他作为博士后研究员（2021.10 - 2024.8）和实习研究员（2021.7 - 2021.10）在中国科学院计算技术研究所与徐勇军研究员（主任）和安竹林副研究员合作从事深度学习方面的研究。",
              "他由广东工业大学（2018-2021）Wing-Kuen Ling教授（IET Fellow，国家海外高层次人才）和英国布鲁内尔大学（2019-2020）Lu Gan教授的共同指导下获得了机器学习博士学位。 此前，他在广东工业大学（2016-2018）攻读计算机科学硕士学位，导师为郝志峰教授（汕头大学校长）和蔡瑞初教授（国家优青）。",
              "2021年12月 — 2024年10月：中国科学院计算技术研究所，副研究员、博士生导师",
              "2011年9月 — 2021年12月：中国科学院计算技术研究所，副研究员、硕士生导师",
              "2008年7月 — 2011年9月：中国科学院计算技术研究所，助理研究员",
              "2002年9月 — 2008年7月：中国科学院计算技术研究所，计算机应用技术，博士",
              "1998年9月 — 2002年7月：清华大学，计算机科学与技术，本科"
            ]
          },
          {
            heading: "主要论著",
            items: [
              "Zhang, Yanling; Sun, Wanhui; Yang, Chuanguang; Huang, Libo; An, Zhulin; Feng, Weilun; Tang, Wenjing; Xu, Yongjun. TCMP-300: A Comprehensive Traditional Chinese Medicinal Plant Dataset for Plant Recognition. Scientific Data, 12(1):1166, 2025.",
              "Yang, Nan; Huang, Libo; An, Zhulin; Xu, Yongjun; Hong, Xia; Ling, Wing-Kuen. Classification-Based False Alarm Suppression for SAR Target Detection. 2025 IEEE International Symposium on Circuits and Systems (ISCAS), pp. 1–5, 2025.",
              "Huang, Jincai; Xu, Yongjun; et al. Foundation models and intelligent decision-making: Progress, challenges, and perspectives. The Innovation, 100948, 2025.",
              "Liu, Ruiqi; Diao, Boyu; Huang, Libo; An, Zijia; Liu, Hangda; An, Zhulin; Xu, Yongjun. Low-redundancy Distillation for continual learning. Pattern Recognition, 111712, 2025.",
              "Yang, Han; Yang, Chuanguang; Wang, Qiuli; An, Zhulin; Feng, Weilun; Huang, Libo; Xu, Yongjun. Multi-party Collaborative Attention Control for Image Customization. Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR), 2025.",
              "Yang, Han; Yang, Chuanguang; An, Zhulin; Huang, Libo; Xu, Yongjun. HSRDiff: A Hierarchical Self-Regulation Diffusion Model for Stochastic Semantic Segmentation. Proceedings of the AAAI Conference on Artificial Intelligence (AAAI), 39(2):1701–1709, 2025.",
              "Yang, Chuanguang; Yu, Xinqiang; Yang, Han; An, Zhulin; Yu, Chengqing; Huang, Libo; Xu, Yongjun. Multi-Teacher Knowledge Distillation with Reinforcement Learning for Visual Recognition. Proceedings of the AAAI Conference on Artificial Intelligence (AAAI), 39(9):9148–9156, 2025.",
              "Feng, Weilun; Qin, Haotong; Yang, Chuanguang; An, Zhulin; Huang, Libo; Diao, Boyu; Wang, Fei; Tao, Renshuai; Xu, Yongjun; Magno, Michele. MPQ-DM: Mixed Precision Quantization for Extremely Low Bit Diffusion Models. Proceedings of the AAAI Conference on Artificial Intelligence (AAAI), 39(16):16595–16603, 2025.",
              "Mai, Haonan; Huang, Libo; An, Zhulin; Zhao, Jiarui; Yang, Chuanguang; Zhao, Erhu; Xu, Yongjun. OLN++: Improved Object Localization Network for Open-world Object Detection. ICASSP 2025—2025 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP), pp. 1–5, 2025.",
              "An, Zijia; Diao, Boyu; Huang, Libo; Liu, Ruiqi; An, Zhulin; Xu, Yongjun. IOR: Inversed Objects Replay for Incremental Object Detection. ICASSP 2025—2025 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP), pp. 1–5, 2025.",
              "Zeng, Yan; Cai, Ruichu; Sun, Fuchun; Huang, Libo; Hao, Zhifeng. A Survey on Causal Reinforcement Learning. IEEE Transactions on Neural Networks and Learning Systems (IEEE TNNLS), 36(4):5942–5962, 2024.",
              "Liu, RuiQi; Diao, Boyu; Huang, Libo; An, Zijia; An, Zhulin; Xu, Yongjun. Continual Learning in the Frequency Domain. Annual Conference on Neural Information Processing Systems (NeurIPS), 37:85389–85411, 2024.",
              "Yang, Chuanguang; An, Zhulin; Huang, Libo; Bi, Junyu; Yu, Xinqiang; Yang, Han; Diao, Boyu; Xu, Yongjun. CLIP-KD: An Empirical Study of CLIP Model Distillation. Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR), pp. 15952–15962, 2024.",
              "Yu, Xinqiang; Yang, Chuanguang; Yu, Chengqing; Huang, Libo; An, Zhulin; Xu, Yongjun. Online Policy Distillation with Decision-Attention. International Joint Conference on Neural Networks (IJCNN), pp. 1–8, 2024.",
              "Feng, Weilun; Yang, Chuanguang; An, Zhulin; Huang, Libo; Diao, Boyu; Wang, Fei; Xu, Yongjun. Relational Diffusion Distillation For Efficient Image Generation. Proceedings of the 32nd ACM International Conference on Multimedia (ACM MM), pp. 205–213, 2024.",
              "Huang, Libo; An, Zhulin; Zeng, Yan; Xu, Yongjun; et al. KFC: Knowledge Reconstruction and Feedback Consolidation Enable Efficient and Effective Continual Generative Learning. International Conference on Learning Representations (ICLR) Tiny Papers Track, 2024.",
              "Huang, Libo; Zeng, Yan; Yang, Chuanguang; An, Zhulin; Diao, Boyu; Xu, Yongjun. eTag: Class-Incremental Learning via Embedding Distillation and Task-Oriented Generation. Proceedings of the AAAI Conference on Artificial Intelligence (AAAI), 38(11):12591–12599, 2024.",
              "Huang, Libo; Gan, Lu; Zeng, Yan; Ling, Bingo Wing-Kuen. Automatical Spike Sorting with Low-Rank and Sparse Representation. IEEE Transactions on Biomedical Engineering (IEEE TBE), 71(5):1677–1686, 2023.",
              "Huang, Libo; Gan, Lu; Ling, Bingo Wing-Kuen. A Unified Optimization Model of Feature Extraction and Clustering for Spike Sorting. IEEE Transactions on Neural Systems and Rehabilitation Engineering (IEEE TNSRE), 29:750–759, 2021.",
              "Zeng, Yan; Hao, Zhifeng; Cai, Ruichu; Xie, Feng; Huang, Libo; Shimizu, Shohei. Nonlinear Causal Discovery with Multiple High-Dimensional Observations. IEEE Transactions on Neural Networks and Learning Systems (IEEE TNNLS), 34(5):2234–2245, 2021.",
              "蔡瑞初, 赵坤垚, 黄礼泊, 何炯, 陈瑶. 基于CUDA的多信道锋电位实时分类方法. 计算机工程与设计, 41(2):391–396, 2020.",
              "Huang, Libo; Ling, Bingo Wing-Kuen; Zeng, Yan; Gan, Lu. Spike Sorting Based On Low-Rank And Sparse Representation. IEEE International Conference on Multimedia and Expo (ICME), pp. 1–6, 2020.",
              "Huang, Libo; Ling, Bingo Wing-Kuen; Cai, Ruichu; Zeng, Yan; He, Jiong; Chen, Yao. WMsorting: Wavelet Packets' Decomposition and Mutual Information-based Spike Sorting Method. IEEE Transactions on NanoBioscience (IEEE TNB), 18(3):283–295, 2019.",
              "Chen, Yao; Huang, Libo; He, Jiong; Zhao, Kunyao; Cai, Ruichu; Hao, Zhifeng. HASS: High Accuracy Spike Sorting with Wavelet Package Decomposition and Mutual Information. IEEE International Conference on Bioinformatics and Biomedicine (BIBM), pp. 831–838, 2018."
            ]
          },
        ]
      },
      Sun: { id:"Sun", name:"孙世伟", title:"博导, 副研究员", bio:"研究方向：计算糖组学；生物信息学。", photo:"assets/img/ssw.webp", research: [
          {
            heading: "个人简历",
            items: [
              "2011/9 – 至今，中国科学院计算技术研究所，前瞻研究实验室，副研究员",
              "2007/9 – 2011/9，中国科学院计算技术研究所，前瞻研究实验室，助理研究员",
              "2002/9 – 2007/7，中国科学院计算技术研究所，计算机技术， 博士",
              "1998/9 – 2001/7，南开大学，物理化学，硕士",
              "1994/9 – 1998/7，南开大学，物理化学，学士"
            ]
          },
          {
            "heading": "主要论著",
            "items": [
              "Chuncui Huang, Hui Wang, Dongbo Bu, Jinyu Zhou, Junchuan Dong, Jingwei Zhang, Huanyu Gao, Yaojun Wang, Wengang Chai*, Shiwei Sun*, Yan Li*, N-Glycan Analysis and N-Glycan Profiling using Multistage Mass Spectrometry with Improved Intelligent Precursor Selection. Carbohydrate Polymers, Jun 2020 1;237:116122.（通讯作者）",
              "ChuncuiHuang, ShiweiSun, JingyuYan, HuiWang, JinyuZhou, HuanyuGao, WenchunXie, YanLi, WengangChai, Identi?cation of carbohydrate peripheral epitopes important for recognition by positive-ion MALDI multistage mass spectrometry. Carbohydrate Polymers, 2020, 229, 115528",
              "Hui Wang, Jingwei Zhang, Junchuan Dong, Meijie Hou, Weiyi Pan, Dongbo Bu, Jinyu Zhou, Yaojun Wang, Keli Zhao, Yan Li, Chuncui Huang*, Shiwei Sun*. Identification of Glycan Branching Patterns Using Multistage Mass Spectrometry with Spectra Tree Analysis. January 2020, Journal of Proteomics（通讯作者）",
              "Yaojun Wang, Dongbo Bu, Chuncui Huang, Hui Wang, Jinyu Zhou, Junchuan Dong, Weiyi Pan, Jingwei Zhang, Qi Zhang, Yan Li* and Shiwei Sun*. Best-first search guided multistage mass spectrometry-based glycan identification. Bioinformatics, Jan 24, 2019. （通讯作者）",
              "Fusong Ju, Jingwei Zhang, Dongbo Bu, Yan Li, Jinyu Zhou, Hui Wang, Yaojun Wang, Chuncui Huang* and Shiwei Sun*. De Novo glycan structural identification from mass spectra using tree merging strategy. Computational Biology and Chemistry. 2019（通讯作者）",
              "Shiwei Sun#, Chuncui Huang#, Yaojun Wang#, Yaming Liu, Jingwei Zhang, Jinyu Zhou, Feng Gao, Fei Yang, Runsheng Chen, Barbara Mulloy, Wengang Chai*, Yan Li* and Dongbo Bu*. Toward Automated Identification of Glycan Branching Patterns Using Multistage Mass Spectrometry with Intelligent Precursor Selection. Analytical Chemistry. vol. 90, no. 24, pp. 14412-14422, Dec 18, 2018.",
              "Hong Liu#, Maozhen Han#, Shuai Cheng Li, Guangming Tan, Shiwei Sun, Zhiqiang Hu, Pengshuo Yang Rui Wang, Yawen Liu, Feng Chen, Jianjun Peng, Hong Peng Hongxing Song, Yang Xia, Liqun Chu, Quan Zhou, Feng Guan, Jing Wu, Dongbo Bu, Kang Ning. Resilience of human gut microbial communities for the long stay with multiple dietary shifts, Gut 2018, DOI: 10.1136/gutjnl-2018-317298.",
              "Yaojun Wang, Jingwei Zhang, Dongbo Bu, Shiwei Sun*. TagDict: Prediction of Theoretical Spectra of Peptides Based on A Tag Dictionary. Current Bioinformatics, Volume 13 , Issue 5 , 2018.",
              "Chunlin Huang#, Xingwu Liu#, Shiwei Sun, Shuai Cheng Li, Minghua Deng, Guangxue He, Haicang Zhang, Chao Wang, Yang Zhou, Yanlin Zhao*, Dongbo Bu*. Insights into the transmission of respiratory infectious diseases through empirical human contact networks. Scientific Reports. 2016 Aug 16;6:31484.",
              "Shiwei Sun#，Xuetao Wang#，Xin Gao，Lihui Ren，Xiaoquan Su，Dongbo Bu*，Kang Ning*，Condensing Raman spectrum for single-cell phenotype analysis，BMC Bioinformatics，2015, 16",
              "Yaojun Wang，Fei Yang，Peng Wu，Hong Zhang，Dongbo Bu，Shiwei Sun*， OpenMS-Simulator: an open-source software for theoretical tandem mass spectrum prediction，BMC Bioinformatics，2015，16(110).",
              "Shenghui Zhang#，Yaojun Wang，Dongbo Bu，Hong Zhang，Shiwei Sun*，Pro bPS: A new model for peak selection based on quantifying the dependence of the existence of derivative peaks on primary ion intensity，BMC Bioinformatics，2011，12(346):0-0.",
              "Yantao Qiao，Hong Zhang，Dongbo Bu，Shiwei Sun*，PI: An open-source software package for validation of the SEQUEST result and visualization of mass spectrum，BMC Bioinformatics，2011，12(234):0-0.",
              "Sun Shiwei , Yang Fuquan，Yang Qing，Zhang Hong，Wang Yaojun，Bu Dongbo*，Ma Bin*，MS-Simulator: Predicting Y-Ion Intensities for Peptides with Two Charges Based on the Intensity Ratio of Neighboring Ions，Journal of Proteome Research，2012，11(9):4509-4516.",
              "Shiwei Sun#, Chungong Yu#, Yishan Jia, Yu Lin, Gongjin Dong, Changning Liu, Jinfen Zhang, Zhuo Zhang, Jinjin Cai, Hong Zhang, Dongbo Bu. Deriving the probabilities of water loss and ammonia loss for amino acids from tandem mass spectra. Journal of Proteome Research，2008，7:202-208。"
            ]
          },
          {
            "heading": "科研项目",
            "items": [
              "国家自然基金面上项目，31671369，基于质谱技术高通量的完整信息糖蛋白/糖肽的鉴定新方法研究，2017.01-2020.12，主持",
              "国家自然基金面上项目，31270834，基于质谱词典思想的谱库设计及理论谱预测研究，2013/01-2016/12, 主持",
              "北京市自然科学基金面上项目，5102029，基于高性能计算及重核技术的蛋白质质谱比对服务器建设，2010/01-2012/12，主持",
              "国家自然基金青年科学基金项目，30800189，磷酸化肽质谱鉴定中的算法问题研究，2008/01-2010/12，主持",
            ]
          },
          {
            "heading": "获奖及荣誉",
            "items": [
              "中国科学院计算技术研究所百星计划"
            ]
          }
        ]
      },
      Xing: { id:"Xing", name:"邢云冰", title:"高级工程师", bio:"研究方向：数字人手语、人机交互与数字内容合成。", photo:"assets/img/xyb.webp", research: [
          {
            "heading": "个人简历",
            "items": [
              "主要从事手语、人机交互与数字内容合成方向的研发，拥有发明专利30余项，其中已授权17项，已转让5项。成果落地为应用系统，广泛用于残疾人信息无障碍等领域，包括面向气象节目的手语字幕系统，冬奥手语播报数字人系统，爱心小屋远程亲情互动系统，残疾人远程手语翻译服务平台、科教卫同屏互动服务平台等多个平台。",
              "2008/4 – 至今，中国科学院计算技术研究所，助理工程师/工程师/高级工程师",
              "2001/9 – 2008/4，西北工业大学，通信与信息系统，本硕连读"
            ]
          },
          {
            "heading": "获奖及荣誉",
            "items": [
              "残疾人辅助器具创新成果推介活动设计组优秀作品奖",
              "中国济南新动能国际高层次人才创新创业大赛三等奖",
              "CCF科学技术发明一等奖",
              "北京市科学技术奖二等奖 2次",
              "中国产学研合作创新成果奖"
            ]
          }
        ]
      },
    },
  
    lessons: [
      {
        week: 1, lessonId: "01", date: "2026-03-04", teacherId: "Bu",
        title: "什么是计算？---从机械式加法器到巴贝奇差分机",
        summary: "什么是计算？如何用机械实现计算？如何用与非门、二极管实现计算？",
        gallery: [
        ],
        materials: [
             {label: "PDF", url: "assets/pdf/class_1.pdf", note: "演示文档"},
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
  
      { week: 2, lessonId: "02", date: "2026-03-11", teacherId: "Bao",
        title: "处理器芯片-昨天今天明天",
        summary: "回顾处理器芯片发展历程，以开源 RISC‑V 与人才培养推动自主可控创新。",
        gallery: [
        ],
        materials: [
             { label: "资料课后上传", note: "等待课程结束上传后更新" },
           ],
      },

      { week: 3, lessonId: "03", date: "2026-03-18", teacherId: "Sun",
        title: "走进AI智能体",
        summary: "认识Coze，解锁智能小助手的秘密。",
        gallery: [
        ],
        materials: [
             { label: "资料课后上传", note: "等待课程结束上传后更新" },
           ],
      },
  
      { week: 4, lessonId: "04", date: "2026-03-25", teacherId: "Sun",
        title: "动手搭建AI小助手",
        summary: "从零实现专属智能Agent。",
        gallery: [
        ],
        materials: [
             { label: "资料课后上传", note: "等待课程结束上传后更新" },
           ],
      },
      { week: 5, lessonId: "05", date: "2026-04-01", teacherId: "Huang",
        title: "python编程与agent编程",
        summary: "Python 基础语法；编程逻辑与代码实现；简单交互程序开发。",
        gallery: [
        ],
        materials: [
             { label: "资料课后上传", note: "等待课程结束上传后更新" },
           ],
      },
  
      { week: 6, lessonId: "06", date: "2026-04-08", teacherId: "Huang",
        title: "python编程与agent编程",
        summary: "Agent 编程基础；分支结构编程；完成数码数字识别任务搭建。",
        gallery: [
        ],
        materials: [
             { label: "资料课后上传", note: "等待课程结束上传后更新" },
           ],
      },
      
      { week: 7, lessonId: "07", date: "2026-04-15", teacherId: "Dai",
        title: "机器学习启蒙：什么是机器学习",
        summary: "机器学习是什么；数据与特征；如何衡量机器学习的效果；最简单的模型：线性模型。",
        gallery: [
        ],
        materials: [
             { label: "资料课后上传", note: "等待课程结束上传后更新" },
           ],
      },
  
      { week: 8, lessonId: "08", date: "2026-04-22", teacherId: "Dai",
        title: "机器学习初探：传统机器学习算法",
        summary: "决策树算法原理与编程实现；其他机器学习算法简介。",
        gallery: [
        ],
        materials: [
             { label: "资料课后上传", note: "等待课程结束上传后更新" },
           ],
      },
      { week: 9, lessonId: "09", date: "2026-05-20", teacherId: "An",
        title: "现代人工智能的基石：感知机与多层感知机",
        summary: "感知机与多层感知机的概念，使用面包板搭建感知机和多层感知机模拟逻辑门。",
        gallery: [
        ],
        materials: [
             { label: "资料课后上传", note: "等待课程结束上传后更新" },
           ],
      },
  
      { week: 10, lessonId: "10", date: "2026-05-27", teacherId: "An",
        title: "让机器像人一样学习：人工神经网络",
        summary: "神经网络概念及其训练方法，使用pytorch实现基于全连接神经网络的手写数字识别。",
        gallery: [
        ],
        materials: [
             { label: "资料课后上传", note: "等待课程结束上传后更新" },
           ],
      },
      { week: 11, lessonId: "11", date: "2026-06-03", teacherId: "Xing",
        title: "计算机如何认识图像：深度学习与图像识别",
        summary: "卷积神经网络（CNN）原理与结构；使用pytorch实现基于CNN的手写数字识别；模型对比分析。",
        gallery: [
        ],
        materials: [
             { label: "资料课后上传", note: "等待课程结束上传后更新" },
           ],
      },
  
      { week: 12, lessonId: "12", date: "2026-06-10", teacherId: "Xing",
        title: "计算机如何创造图像：图像生成与安全伦理",
        summary: "从VAE到GAN；使用pytorch实现手写数字生成；AI 技术安全风险，人工智能伦理规范与安全教育。",
        gallery: [
        ],
        materials: [
             { label: "资料课后上传", note: "等待课程结束上传后更新" },
           ],
      },
      { week: 13, lessonId: "13", date: "2026-06-17", teacherId: "Gao",
        title: "数字人技术解析",
        summary: "数字人核心技术入门。",
        gallery: [
        ],
        materials: [
             { label: "资料课后上传", note: "等待课程结束上传后更新" },
           ],
      },
  
      { week: 14, lessonId: "14", date: "2026-06-24", teacherId: "Gao",
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