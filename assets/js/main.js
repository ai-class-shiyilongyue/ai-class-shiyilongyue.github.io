// assets/js/main.js
(function () {
    const DATA = window.COURSE_DATA;
    if (!DATA) return;
  
    const $ = (sel) => document.querySelector(sel);
    const $$ = (sel) => Array.from(document.querySelectorAll(sel));
  
    const BASE = document.body.getAttribute("data-base") || ""; // root页=""，teachers页="../"
  
    function escapeHtml(str) {
      return String(str).replace(/[&<>"']/g, (m) => (
        { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]
      ));
    }
    function pad2(n) { return String(n).padStart(2, "0"); }
  
    function getQuery() {
      const u = new URL(window.location.href);
      return Object.fromEntries(u.searchParams.entries());
    }
  
    function setBrand() {
      const el = $("#brandTitle");
      if (el) el.textContent = DATA.site.brandTitle || "课程主页";
    }
  
    function teacherById(tid) { return DATA.teachers[tid]; }
  
    function teacherPageUrl(tid) {
      return `${BASE}teachers/${encodeURIComponent(tid)}.html`;
    }

    function isMemoryLesson(lesson) {
      return lesson && lesson.type === "memory";
    }

    function courseLessons() {
      return DATA.lessons.filter(l => !isMemoryLesson(l));
    }

    function lessonBadgeText(lesson) {
      if (isMemoryLesson(lesson)) return lesson.badge || "结课纪念";
      return `课 ${lesson.week}`;
    }

    function lessonBadgeLine(lesson) {
      const date = String(lesson.date || "").trim();
      return date ? `${lessonBadgeText(lesson)} · ${date}` : lessonBadgeText(lesson);
    }

    function calendarTagText(lesson) {
      if (isMemoryLesson(lesson)) return lesson.calendarLabel || "纪念";
      return `课${lesson.week}`;
    }

    function lessonDetailUrl(lesson) {
      if (isMemoryLesson(lesson)) {
        return `${BASE}memory.html?lesson=${encodeURIComponent(lesson.lessonId)}`;
      }
      return `${teacherPageUrl(lesson.teacherId)}?week=${encodeURIComponent(lesson.week)}`;
    }

    function rootAssetSrc(src) {
      const value = String(src || "");
      if (/^(https?:)?\/\//.test(value) || value.startsWith("/") || value.startsWith("data:")) return value;
      if (value.startsWith("class/")) return `${BASE}teachers/${value}`;
      return `${BASE}${value}`;
    }
  
    function lessonAnchorId(lesson) { return `lesson-${lesson.lessonId}`; }
  
    function renderHome() {
      $("#courseTitle").textContent = DATA.course.title;
      $("#courseSubtitle").textContent = DATA.course.subtitle;
      $("#courseIntro").textContent = DATA.course.intro;
      $("#orgIntro").textContent = DATA.course.org.intro;
      $("#partnerIntro").textContent = DATA.course.partner.intro;
      $("#yearNow").textContent = String(new Date().getFullYear());
  
      const chips = [
        { label: "学期", value: DATA.course.term },
        { label: "地点", value: DATA.course.location },
        { label: "机构", value: DATA.course.org.name },
      ];
      $("#courseMetaChips").innerHTML = chips.map(c => `
        <span class="chip">
          <span class="chip-k">${escapeHtml(c.label)}</span>
          <span class="chip-v">${escapeHtml(c.value)}</span>
        </span>
      `).join("");
  
      $("#courseHighlights").innerHTML = (DATA.course.highlights || [])
        .map(x => `<li>${escapeHtml(x)}</li>`).join("");
  
      const teacherGrid = $("#teacherGrid");
      teacherGrid.innerHTML = Object.values(DATA.teachers).map(t => `
        <a class="teacher-card" href="${teacherPageUrl(t.id)}">
          <div class="avatar"><img src="${escapeHtml(BASE + t.photo)}" alt="${escapeHtml(t.name)}" loading="lazy" decoding="async" /></div>
          <div class="teacher-meta">
            <div class="teacher-name">${escapeHtml(t.name)}</div>
            <div class="muted small">${escapeHtml(t.title || "")}</div>
          </div>
        </a>
      `).join("");
    }
  
    function lessonCard(lesson, opts = {}) {
      const t = teacherById(lesson.teacherId);
      const id = opts.withId ? ` id="${lessonAnchorId(lesson)}"` : "";
      const highlight = opts.highlight ? " is-highlight" : "";
      const isMemory = isMemoryLesson(lesson);
  
      const outline = (lesson.outline || []).slice(0, 3)
        .map(x => `<li>${escapeHtml(x)}</li>`).join("");
  
      const detailLink = lessonDetailUrl(lesson);
      const dlLink = `${BASE}downloads.html?lesson=${encodeURIComponent(lesson.lessonId)}&week=${encodeURIComponent(lesson.week)}`;

      if (isMemory) {
        return `
          <article class="lesson-card lesson-card-memory${highlight}"${id}>
            <div class="lesson-left">
              <div class="badge">${escapeHtml(lessonBadgeLine(lesson))}</div>
              <h3 class="lesson-title">${escapeHtml(lesson.title)}</h3>
              <p class="muted small">${escapeHtml(lesson.summary || "")}</p>
            </div>
            <div class="lesson-right">
              <a class="btn" href="${detailLink}">查看纪念页</a>
            </div>
          </article>
        `;
      }
  
      return `
        <article class="lesson-card${highlight}"${id}>
          <div class="lesson-left">
            <div class="badge">${escapeHtml(lessonBadgeLine(lesson))}</div>
            <h3 class="lesson-title">${escapeHtml(lesson.title)}</h3>
            <div class="muted small">授课老师：<b>${escapeHtml(t?.name || lesson.teacherId)}</b></div>
            <ul class="mini-bullets">${outline}</ul>
          </div>
          <div class="lesson-right">
            <a class="btn btn-ghost" href="${detailLink}">老师介绍</a>
            <a class="btn" href="${dlLink}">资料下载</a>
          </div>
        </article>
      `;
    }
  
    function buildMonthGrid(year, monthIndex0) {
      const first = new Date(year, monthIndex0, 1);
      const daysInMonth = new Date(year, monthIndex0 + 1, 0).getDate();
      const firstDow = (first.getDay() + 6) % 7; // Monday-first
      const cells = [];
      for (let i = 0; i < firstDow; i++) cells.push(null);
      for (let d = 1; d <= daysInMonth; d++) cells.push(d);
      while (cells.length % 7 !== 0) cells.push(null);
      return cells;
    }
  
    function renderCalendar() {
      const wrap = $("#calendar");
      if (!wrap) return;
  
      const year = 2026;
      const months = [2, 3, 4, 5]; // Mar..Jun
      const weekDayNames = ["一", "二", "三", "四", "五", "六", "日"];
      const byDate = new Map(courseLessons().map(l => [l.date, l]));
  
      wrap.innerHTML = months.map(m0 => {
        const grid = buildMonthGrid(year, m0);
  
        const cellsHtml = grid.map((day) => {
          if (!day) return `<div class="cal-cell is-empty"></div>`;
          const iso = `${year}-${pad2(m0 + 1)}-${pad2(day)}`;
          const jsDate = new Date(year, m0, day);
          const isWed = jsDate.getDay() === 3;
          const lesson = byDate.get(iso);
          const hasEvent = Boolean(lesson);
          const isMemory = isMemoryLesson(lesson);
  
          let cls = "cal-cell";
          if (isWed) cls += " is-wed";
          if (hasEvent) cls += isMemory ? " is-memory" : " is-course";
  
          let inner = `<div class="cal-day">${day}</div>`;
          if (hasEvent) inner += `<div class="cal-tag${isMemory ? " cal-tag-memory" : ""}">${escapeHtml(calendarTagText(lesson))}</div>`;
          else if (isWed) inner += `<div class="cal-tag cal-tag-muted">周三</div>`;
  
          if (hasEvent) {
            const link = lessonDetailUrl(lesson);
            const title = isMemory ? "点击进入结课纪念页" : `点击进入老师页：课 ${lesson.week}`;
            inner = `<a class="cal-link" href="${link}" title="${escapeHtml(title)}">${inner}</a>`;
          } else {
            inner = `<div class="cal-link is-disabled">${inner}</div>`;
          }
  
          return `<div class="${cls}">${inner}</div>`;
        }).join("");
  
        return `
          <section class="cal-month-wrap">
            <div class="cal-head">
              <div class="cal-month">${year}年${m0 + 1}月</div>
              <div class="cal-weekdays">
                ${weekDayNames.map(x => `<div class="cal-wd">${x}</div>`).join("")}
              </div>
            </div>
            <div class="cal-grid">${cellsHtml}</div>
          </section>
        `;
      }).join("");
    }
  
    function renderLessonList() {
      const list = $("#lessonList");
      if (!list) return;
  
      list.innerHTML = DATA.lessons.map(l => lessonCard(l, { withId: true })).join("");
  
      const input = $("#searchLesson");
      if (input) {
        input.addEventListener("input", () => {
          const q = input.value.trim().toLowerCase();
          $$(".lesson-card").forEach((card) => {
            card.style.display = card.textContent.toLowerCase().includes(q) ? "" : "none";
          });
        });
      }
  
      const hash = (window.location.hash || "").replace("#", "");
      if (hash && $("#" + hash)) {
        const target = $("#" + hash);
        target.classList.add("is-highlight");
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  
    function renderTeacherPage() {
      const tid = document.body.getAttribute("data-teacher-id");
      const t = teacherById(tid);
      const q = getQuery();
      const highlightWeek = q.week ? String(q.week) : null;
  
      const header = $("#teacherHeader");
      const researchEl = document.querySelector("#teacherResearch");
      if (researchEl) {
        const blocks = (t.research || []);
        if (!blocks.length) {
          researchEl.innerHTML = `<div class="muted small">（该老师科研/荣誉信息待补充）</div>`;
        } else {
          researchEl.innerHTML = blocks.map(b => `
            <div class="research-block">
              <div class="research-title">${escapeHtml(b.heading || "")}</div>
              <ul class="research-list">
                ${(b.items || []).map(it => `<li>${escapeHtml(it)}</li>`).join("")}
              </ul>
            </div>
          `).join("");
        }
      }
      const wrap = $("#teacherLessons");
      if (!header || !wrap) return;
  
      if (!t) {
        header.innerHTML = `<div class="muted">未找到老师：${escapeHtml(tid)}</div>`;
        return;
      }
  
      header.innerHTML = `
        <div class="teacher-profile">
          <div class="teacher-photo">
            <img src="${escapeHtml(BASE + t.photo)}" alt="${escapeHtml(t.name)}" />
          </div>
          <div class="teacher-info">
            <div class="badge">Teacher ${escapeHtml(t.id)}</div>
            <h1 class="teacher-h1">${escapeHtml(t.name)}</h1>
            <div class="muted">${escapeHtml(t.title || "")}</div>
            <p class="teacher-bio">${escapeHtml(t.bio || "")}</p>
            <div class="row row-gap">
              <a class="btn btn-ghost" href="${BASE}schedule.html">返回课程安排</a>
              <a class="btn" href="${BASE}downloads.html">去资料库下载</a>
            </div>
          </div>
        </div>
      `;
  
      const teacherLessons = DATA.lessons.filter(l => l.teacherId === tid);
  
      wrap.innerHTML = teacherLessons.map((l) => {
        const isHl = highlightWeek && String(l.week) === highlightWeek;
        const gallery = (l.gallery && l.gallery.length)
          ? l.gallery
          : []; // 空则显示占位
  
        const galleryHtml = gallery.length
          ? `<div class="gallery">
              ${gallery.slice(0, 33).map(src => `
                <a class="gallery-item" href="${escapeHtml(src)}" target="_blank" rel="noopener">
                  <img src="${escapeHtml(src)}" alt="课堂图片" loading="lazy" decoding="async" />
                </a>
              `).join("")}
             </div>`
          : `<div class="gallery-empty">
              <img src="${escapeHtml(BASE + "assets/img/gallery-placeholder.webp")}" alt="placeholder" loading="lazy" />
              <div class="muted small">课后上传课堂图片。</div>
             </div>`;
  
        return `
          <article class="teacher-lesson-block${isHl ? " is-highlight" : ""}" id="week-${escapeHtml(l.week)}">
            <div class="teacher-lesson-head">
              <div>
                <div class="badge">课 ${l.week} · ${escapeHtml(l.date)}</div>
                <h3 class="lesson-title">${escapeHtml(l.title)}</h3>
                <p class="muted">${escapeHtml(l.summary || "（可在 data.js 填写本节课授课简介）")}</p>
              </div>
              <div class="teacher-lesson-actions">
                <a class="btn btn-ghost" href="${BASE}schedule.html#lesson-${escapeHtml(l.lessonId)}">课程列表</a>
                <a class="btn" href="${BASE}downloads.html?lesson=${encodeURIComponent(l.lessonId)}&week=${encodeURIComponent(l.week)}">资料下载</a>
              </div>
            </div>
  
            <div class="hr"></div>
  
            <div class="muted small">课堂照片：</div>
            ${galleryHtml}
          </article>
        `;
      }).join("");
      // <div class="muted small">要点：</div>
      // <ul class="mini-bullets">${(l.outline || []).map(x => `<li>${escapeHtml(x)}</li>`).join("")}</ul>

      // <div class="hr"></div>
  
      if (highlightWeek) {
        const el = $("#week-" + highlightWeek);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
  
      document.title = `${t.name}｜老师介绍`;
    }

    function renderMemoryPage() {
      const mount = $("#memoryMount");
      if (!mount) return;

      const q = getQuery();
      const lesson = DATA.lessons.find(l => isMemoryLesson(l) && (!q.lesson || l.lessonId === q.lesson))
        || DATA.lessons.find(isMemoryLesson);

      if (!lesson) {
        mount.innerHTML = `
          <section class="card">
            <h1>结课纪念</h1>
            <p class="muted">暂未配置纪念内容。</p>
            <div class="row row-gap">
              <a class="btn btn-ghost" href="${BASE}schedule.html">返回课程安排</a>
            </div>
          </section>
        `;
        return;
      }

      const gallery = lesson.gallery || [];
      const photos = gallery.map((src, index) => {
        const safeSrc = escapeHtml(rootAssetSrc(src));
        const alt = `结课纪念照片 ${index + 1}`;
        return `
          <a class="memory-photo" href="${safeSrc}" target="_blank" rel="noopener">
            <img src="${safeSrc}" alt="${escapeHtml(alt)}" loading="${index < 4 ? "eager" : "lazy"}" decoding="async" />
          </a>
        `;
      }).join("");

      const firstImage = gallery[0] ? rootAssetSrc(gallery[0]) : `${BASE}assets/img/gallery-placeholder.webp`;
      const stats = [
        { label: "课程", value: `${courseLessons().length} 次` },
        { label: "照片", value: `${gallery.length} 张` },
        { label: "学期", value: DATA.course.term },
      ];

      mount.innerHTML = `
        <section class="memory-hero card">
          <div class="memory-hero-copy">
            <div class="badge">${escapeHtml(lessonBadgeLine(lesson))}</div>
            <h1>${escapeHtml(lesson.title)}</h1>
            <p class="muted">${escapeHtml(lesson.summary || "")}</p>
            <div class="memory-stats">
              ${stats.map(item => `
                <span class="memory-stat">
                  <span class="memory-stat-k">${escapeHtml(item.label)}</span>
                  <span class="memory-stat-v">${escapeHtml(item.value)}</span>
                </span>
              `).join("")}
            </div>
            <div class="row row-gap">
              <a class="btn btn-ghost" href="${BASE}schedule.html#${lessonAnchorId(lesson)}">回到课程安排</a>
              <a class="btn" href="${escapeHtml(rootAssetSrc(gallery[0] || ""))}" target="_blank" rel="noopener">打开第一张照片</a>
            </div>
          </div>
          <a class="memory-feature" href="${escapeHtml(rootAssetSrc(gallery[0] || ""))}" target="_blank" rel="noopener">
            <img src="${escapeHtml(firstImage)}" alt="结课纪念照片" loading="eager" decoding="async" />
          </a>
        </section>

        <section class="card">
          <div class="section-head">
            <div>
              <h2>回忆相册</h2>
              <p class="muted">${escapeHtml(DATA.course.title)} · ${escapeHtml(DATA.course.location)}</p>
            </div>
          </div>
          <div class="memory-gallery">${photos}</div>
        </section>
      `;

      document.title = `${lesson.title}｜${DATA.course.title}`;
    }
  
    
    const UNLOCK_KEY = "course_unlocked_v1";
    const ICT_KEY    = "course_ict_v1";
    const _cfg = window.LOCAL_CONFIG || {};

    function isUnlocked() { return localStorage.getItem(UNLOCK_KEY) === "1"; }
    function setUnlocked(v) { localStorage.setItem(UNLOCK_KEY, v ? "1" : "0"); }
    function isIct()      { return localStorage.getItem(ICT_KEY) === "1"; }
    function setIct(v)    { localStorage.setItem(ICT_KEY, v ? "1" : "0"); }

    // Decrypt encrypted payload using WebCrypto (PBKDF2 + AES-256-GCM)
    async function decryptPayload(enc, password) {
      if (!enc) return null;
      try {
        const raw  = Uint8Array.from(atob(enc), c => c.charCodeAt(0));
        const salt = raw.slice(0, 16);
        const iv   = raw.slice(16, 28);
        const ct   = raw.slice(28);
        const km = await crypto.subtle.importKey(
          "raw", new TextEncoder().encode(password),
          { name: "PBKDF2" }, false, ["deriveKey"]
        );
        const key = await crypto.subtle.deriveKey(
          { name: "PBKDF2", salt, iterations: 100000, hash: "SHA-256" },
          km, { name: "AES-GCM", length: 256 }, false, ["decrypt"]
        );
        const dec = await crypto.subtle.decrypt({ name: "AES-GCM", iv }, key, ct);
        return JSON.parse(new TextDecoder().decode(dec));
      } catch { return null; }
    }

    async function decryptDownloadGate(password) {
      const gate = await decryptPayload(window.DOWNLOAD_GATE_ENC, password);
      if (!gate || gate.scope !== "downloads" || gate.ok !== true) return null;
      return gate;
    }

    function hasDownloadGate() {
      return typeof window.DOWNLOAD_GATE_ENC === "string" && window.DOWNLOAD_GATE_ENC.length > 0;
    }

    // Decrypt meeting minutes using WebCrypto (PBKDF2 + AES-256-GCM)
    async function decryptIctMeetings(password) {
      return decryptPayload(window.ICT_MEETINGS_ENC, password);
    }

    async function decryptIctLessonPlans(password) {
      return decryptPayload(window.ICT_LESSON_PLANS_ENC, password);
    }

    // Get decrypted meetings from sessionStorage, fallback to local config
    function getIctMeetings() {
      const s = sessionStorage.getItem("ict_meetings_v1");
      if (s) try { return JSON.parse(s); } catch {}
      return (_cfg.meetingMinutes || []);
    }

    function getIctLessonPlans() {
      const s = sessionStorage.getItem("ict_lesson_plans_v1");
      if (s) try { return JSON.parse(s); } catch {}
      return (_cfg.lessonPlans || {});
    }
  
    function downloadsItem(lesson) {
      const t = teacherById(lesson.teacherId);
      const backToSchedule = `${BASE}schedule.html#lesson-${lesson.lessonId}`;
      const teacherLink = `${teacherPageUrl(lesson.teacherId)}?week=${encodeURIComponent(lesson.week)}`;
  
      const mats = (lesson.materials || []).map((m) => `
        <li class="dl-item">
          <a class="dl-link" href="${escapeHtml(m.url)}" target="_blank" rel="noopener">
            ${escapeHtml(m.label)}
          </a>
          ${m.note ? `<span class="muted small">· ${escapeHtml(m.note)}</span>` : ""}
        </li>
      `).join("");
  
      return `
        <details class="dl-block" id="dl-${escapeHtml(lesson.lessonId)}">
          <summary class="dl-summary">
            <div class="dl-title">
              <span class="badge">课 ${lesson.week}</span>
              <span class="dl-main">
                <a class="dl-back" href="${backToSchedule}" title="跳回课程安排对应课程栏">
                  ${escapeHtml(lesson.title)}
                </a>
              </span>
            </div>
            <div class="dl-meta muted small">
              ${escapeHtml(lesson.date)} · ${escapeHtml(t?.name || lesson.teacherId)}
            </div>
          </summary>
  
          <div class="dl-body">
            <div class="row row-gap">
              <a class="btn btn-ghost" href="${teacherLink}">老师页</a>
              <a class="btn btn-ghost" href="${backToSchedule}">课程安排定位</a>
            </div>
            <div class="hr"></div>
            <ul class="dl-list">${mats}</ul>
          </div>
        </details>
      `;
    }
  
    function renderIctView() {
      const minutes = getIctMeetings();
      const plans   = getIctLessonPlans();

      // 会议纪要时间轴
      const minutesHtml = minutes.length
        ? minutes.map(m => `
            <div class="ict-timeline-item">
              <div class="ict-timeline-dot"></div>
              <div class="ict-timeline-content">
                <div class="ict-timeline-date">${escapeHtml(m.date)}</div>
                <div class="ict-timeline-title">${escapeHtml(m.title)}</div>
                ${m.content ? `<div class="ict-timeline-body">${escapeHtml(m.content)}</div>` : ""}
                ${m.pdfUrl ? `<a class="ict-pdf-link" href="${escapeHtml(m.pdfUrl)}" target="_blank" rel="noopener">查看会议纪要PDF</a>` : ""}
              </div>
            </div>
          `).join("")
        : `<div class="muted small">暂无会议记录。</div>`;

      // 教案上传情况
      const rowsHtml = courseLessons().map(lesson => {
        const t = teacherById(lesson.teacherId);
        const plan = plans[lesson.lessonId] || {};
        const planFileUrl = String(plan.fileUrl || "").trim();
        const hasFile = planFileUrl !== "";
        let planLinkAttrs = "";
        if (hasFile) {
          const safeHref = escapeHtml(planFileUrl);
          try {
            const planUrl = new URL(planFileUrl, window.location.href);
            planLinkAttrs = planUrl.origin === window.location.origin
              ? `href="${safeHref}" download`
              : `href="${safeHref}" target="_blank" rel="noopener"`;
          } catch {
            planLinkAttrs = `href="${safeHref}" target="_blank" rel="noopener"`;
          }
        }
        const statusCell = hasFile
          ? `<a class="ict-plan-link" ${planLinkAttrs}>下载教案</a>`
          : `<span class="ict-plan-missing">未上传</span>`;
        return `
          <tr class="ict-plan-row">
            <td class="ict-plan-week">课 ${lesson.week}</td>
            <td class="ict-plan-date">${escapeHtml(lesson.date)}</td>
            <td class="ict-plan-title">${escapeHtml(lesson.title)}</td>
            <td class="ict-plan-teacher">${escapeHtml(t ? t.name : lesson.teacherId)}</td>
            <td class="ict-plan-status">${statusCell}</td>
          </tr>
        `;
      }).join("");

      return `
        <div class="ict-view">
          <div class="ict-section-head">
            <span class="badge">ICT 管理员视图</span>
          </div>

          <section class="ict-block">
            <h2 class="ict-heading">会议纪要 <span class="muted small">（最新在上）</span></h2>
            <div class="ict-timeline">
              ${minutesHtml}
            </div>
          </section>

          <section class="ict-block">
            <h2 class="ict-heading">课案上传情况</h2>
            <div class="ict-table-wrap">
              <table class="ict-table">
                <thead>
                  <tr>
                    <th>周次</th>
                    <th>日期</th>
                    <th>课程标题</th>
                    <th>授课老师</th>
                    <th>课案状态</th>
                  </tr>
                </thead>
                <tbody>${rowsHtml}</tbody>
              </table>
            </div>
          </section>
        </div>
      `;
    }

    function renderDownloadsPage() {
      const locked = $("#downloadsLocked");
      const list   = $("#downloadsList");
      const msg    = $("#pwdMsg");
      const input  = $("#pwdInput");
      const btn    = $("#pwdBtn");
      const reset  = $("#pwdReset");
      if (!locked || !list || !msg || !input || !btn || !reset) return;

      function refresh() {
        const searchEl = $("#searchDownload");
        if (isIct()) {
          locked.style.display = "none";
          list.classList.remove("is-hidden");
          list.innerHTML = renderIctView();
          if (searchEl) searchEl.style.display = "none";
          msg.textContent = "ICT 管理员视图已解锁。";
          return;
        }
        const ok = isUnlocked();
        if (searchEl) searchEl.style.display = "";
        locked.style.display = ok ? "none" : "";
        list.classList.toggle("is-hidden", !ok);
        msg.textContent = ok
          ? "已解锁：资料列表已显示（已记住本机浏览器）。"
          : "未解锁：请输入密码显示资料。";
        if (ok) {
          list.innerHTML = courseLessons().map(downloadsItem).join("");
          bindSearch();
        }
      }

      input.addEventListener("keydown", e => { if (e.key === "Enter") btn.click(); });

      btn.addEventListener("click", async () => {
        const val = (input.value || "").trim();
        if (!val) return;

        msg.textContent = "验证中…";
        btn.disabled = true;

        // Fast path: student password
        if (await decryptDownloadGate(val)) {
          btn.disabled = false;
          setIct(false);
          sessionStorage.removeItem("ict_meetings_v1");
          sessionStorage.removeItem("ict_lesson_plans_v1");
          setUnlocked(true);
          input.value = "";
          refresh();
          autoOpenTarget();
          return;
        }

        // ICT path: try AES-256-GCM decryption
        const [meetings, lessonPlans] = await Promise.all([
          decryptIctMeetings(val),
          decryptIctLessonPlans(val),
        ]);
        btn.disabled = false;
        if (meetings !== null || lessonPlans !== null) {
          if (meetings !== null) {
            sessionStorage.setItem("ict_meetings_v1", JSON.stringify(meetings));
          } else {
            sessionStorage.removeItem("ict_meetings_v1");
          }
          if (lessonPlans !== null) {
            sessionStorage.setItem("ict_lesson_plans_v1", JSON.stringify(lessonPlans));
          } else {
            sessionStorage.removeItem("ict_lesson_plans_v1");
          }
          setIct(true);
          setUnlocked(false);
          input.value = "";
          refresh();
        } else {
          msg.textContent = hasDownloadGate() ? "密码错误，请重试。" : "学生下载区密文未配置。";
        }
      });

      reset.addEventListener("click", () => {
        setUnlocked(false);
        setIct(false);
        sessionStorage.removeItem("ict_meetings_v1");
        sessionStorage.removeItem("ict_lesson_plans_v1");
        refresh();
      });

      list.innerHTML = courseLessons().map(downloadsItem).join("");
      bindSearch();

      function bindSearch() {
        const el = $("#searchDownload");
        if (!el) return;
        const fresh = el.cloneNode(true);
        el.parentNode.replaceChild(fresh, el);
        fresh.addEventListener("input", () => {
          const q = fresh.value.trim().toLowerCase();
          $$(".dl-block").forEach((block) => {
            block.style.display = block.textContent.toLowerCase().includes(q) ? "" : "none";
          });
        });
      }

      function autoOpenTarget() {
        const q = getQuery();
        const lessonId = q.lesson;
        const week = q.week;
        let target = null;

        if (lessonId) target = $("#dl-" + lessonId);
        if (!target && week) {
          const l = courseLessons().find(x => String(x.week) === String(week));
          if (l) target = $("#dl-" + l.lessonId);
        }
        if (target) {
          target.open = true;
          target.scrollIntoView({ behavior: "smooth", block: "start" });
          target.classList.add("is-highlight");
          setTimeout(() => target.classList.remove("is-highlight"), 1600);
        }
      }

      refresh();
      if (isUnlocked() && !isIct()) autoOpenTarget();
    }
  
    function boot() {
      setBrand();
      const page = document.body.getAttribute("data-page");
      if (page === "home") renderHome();
      if (page === "schedule") { renderCalendar(); renderLessonList(); }
      if (page === "teacher") renderTeacherPage();
      if (page === "memory") renderMemoryPage();
      if (page === "downloads") renderDownloadsPage();
    }
  
    boot();
  })();
