// assets/js/main.js
(function () {
    const DATA = window.COURSE_DATA;
    if (!DATA) return;
    const TERMS = window.COURSE_TERMS || [];
    const ACTIVE_TERM_ID = window.COURSE_TERM_ID || DATA.course?.termId || "";
  
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

    function withTerm(href) {
      const value = String(href || "");
      if (!value || value.startsWith("#") || /^(mailto:|tel:|javascript:)/i.test(value)) return value;
      try {
        const url = new URL(value, window.location.href);
        if (url.origin !== window.location.origin || !ACTIVE_TERM_ID) return value;
        url.searchParams.set("term", ACTIVE_TERM_ID);
        return url.href;
      } catch (_) {
        return value;
      }
    }

    function termSwitchUrl(termId, pageHref = window.location.href) {
      const url = new URL(pageHref, window.location.href);
      url.searchParams.set("term", termId);
      url.searchParams.delete("lesson");
      url.searchParams.delete("week");
      url.hash = "";
      return url.href;
    }

    function scrollBehavior() {
      return window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
    }

    function formatDateZh(iso) {
      const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(iso || ""));
      if (!match) return String(iso || "");
      return `${match[1]}年${Number(match[2])}月${Number(match[3])}日`;
    }

    function teacherNameForLesson(lesson) {
      return teacherById(lesson.teacherId)?.name || lesson.teacherName || "待定";
    }

    function isTbdLesson(lesson) {
      return Boolean(lesson) && (!lesson.teacherId || String(lesson.title || "").trim() === "待定");
    }
  
    function setBrand() {
      const el = $("#brandTitle");
      if (el) el.textContent = DATA.site.brandTitle || "课程主页";
    }
  
    function teacherById(tid) { return DATA.teachers[tid]; }
  
    function teacherPageUrl(tid) {
      if (!tid) return withTerm(`${BASE}schedule.html`);
      return withTerm(`${BASE}teachers/${encodeURIComponent(tid)}.html`);
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
        return withTerm(`${BASE}memory.html?lesson=${encodeURIComponent(lesson.lessonId)}`);
      }
      if (!lesson.teacherId) {
        return withTerm(`${BASE}schedule.html#${lessonAnchorId(lesson)}`);
      }
      const url = new URL(teacherPageUrl(lesson.teacherId), window.location.href);
      url.searchParams.set("week", String(lesson.week));
      return url.href;
    }

    function rootAssetSrc(src) {
      const value = String(src || "");
      if (/^(https?:)?\/\//.test(value) || value.startsWith("/") || value.startsWith("data:")) return value;
      if (value.startsWith("class/")) return `${BASE}teachers/${value}`;
      return `${BASE}${value}`;
    }
  
    function lessonAnchorId(lesson) { return `lesson-${lesson.lessonId}`; }

    function renderTermSwitcher() {
      const topbar = $(".topbar");
      const nav = $(".nav");
      if (!topbar || !nav || TERMS.length < 2 || $("#termSwitcher")) return;

      nav.setAttribute("aria-label", "主导航");
      let activeNav = nav.querySelector(".nav-link.is-active");
      if (!activeNav && document.body.getAttribute("data-page") === "teacher") {
        activeNav = Array.from(nav.querySelectorAll(".nav-link")).find((link) => {
          try {
            return /\/schedule\.html$/.test(new URL(link.href, window.location.href).pathname);
          } catch (_) {
            return false;
          }
        }) || null;
        if (activeNav) activeNav.classList.add("is-active");
      }
      if (activeNav) activeNav.setAttribute("aria-current", "page");

      const wrap = document.createElement("nav");
      wrap.className = "term-switcher";
      wrap.id = "termSwitcher";
      wrap.setAttribute("aria-label", "学期切换");
      wrap.innerHTML = `
        <span class="term-switcher-label">学期</span>
        <span class="term-options">
          ${TERMS.map((term) => `
            <a class="term-option${term.id === ACTIVE_TERM_ID ? " is-active" : ""}"
               href="${escapeHtml(termSwitchUrl(term.id))}"
               data-term-switch="${escapeHtml(term.id)}"
               ${term.id === ACTIVE_TERM_ID ? 'aria-current="page"' : ""}>
              <span class="term-option-main">${term.id === "2026-fall" ? "本学期" : "上学期"}</span>
              <span class="term-option-sub">${escapeHtml(term.label.replace(/^.*?·\s*/, ""))}</span>
            </a>
          `).join("")}
        </span>
      `;
      topbar.insertBefore(wrap, nav);
    }

    function enhancePageShell() {
      const main = $("main");
      const brandDot = $(".brand-dot");
      if (brandDot) brandDot.setAttribute("aria-hidden", "true");
      if (main && !main.id) main.id = "mainContent";
      if (main && !$(".skip-link")) {
        const skip = document.createElement("a");
        skip.className = "skip-link";
        skip.href = `#${main.id}`;
        skip.textContent = "跳到主要内容";
        document.body.insertBefore(skip, document.body.firstChild);
      }

      $$("a[href]").forEach((link) => {
        if (link.hasAttribute("data-term-switch")) return;
        const raw = link.getAttribute("href") || "";
        if (!raw || raw.startsWith("#")) return;
        try {
          const url = new URL(raw, window.location.href);
          if (url.origin === window.location.origin && /\.html$/i.test(url.pathname)) {
            link.href = withTerm(url.href);
          }
        } catch (_) {}
      });
    }

    function validateCourseData() {
      const ids = new Set();
      courseLessons().forEach((lesson) => {
        if (!lesson.lessonId || ids.has(lesson.lessonId)) {
          console.warn("课程数据：lessonId 缺失或重复", lesson);
        }
        ids.add(lesson.lessonId);
        if (!/^\d{4}-\d{2}-\d{2}$/.test(String(lesson.date || ""))) {
          console.warn("课程数据：日期应使用 YYYY-MM-DD", lesson);
        }
        if (lesson.teacherId && !teacherById(lesson.teacherId)) {
          console.warn("课程数据：teacherId 未找到对应教师", lesson);
        }
      });
    }
  
    function renderHome() {
      $("#courseTitle").textContent = DATA.course.title;
      $("#courseSubtitle").textContent = DATA.course.subtitle;
      $("#courseIntro").textContent = DATA.course.intro;
      $("#orgIntro").textContent = DATA.course.org.intro;
      $("#partnerIntro").textContent = DATA.course.partner.intro;
      $("#yearNow").textContent = String(new Date().getFullYear());
      const heroTerm = $("#heroTerm");
      if (heroTerm) heroTerm.textContent = `${DATA.course.termLabel || "当前学期"} · ${DATA.course.dateRangeLabel || DATA.course.term}`;
  
      const chips = [
        { label: "学期", value: DATA.course.term },
        { label: "日期", value: DATA.course.dateRangeLabel || "以课程安排为准" },
        { label: "时间", value: DATA.course.timeLabel || "每周三" },
        { label: "地点", value: DATA.course.location },
      ];
      $("#courseMetaChips").innerHTML = chips.map(c => `
        <span class="chip">
          <span class="chip-k">${escapeHtml(c.label)}</span>
          <span class="chip-v">${escapeHtml(c.value)}</span>
        </span>
      `).join("");
  
      $("#courseHighlights").innerHTML = (DATA.course.highlights || [])
        .map(x => `<li>${escapeHtml(x)}</li>`).join("");

      const homeTermCards = $("#homeTermCards");
      if (homeTermCards) {
        homeTermCards.innerHTML = TERMS.map((term, index) => {
          const isActive = term.id === ACTIVE_TERM_ID;
          const termData = term.data || {};
          const lessonCount = (termData.lessons || []).filter((lesson) => !isMemoryLesson(lesson)).length;
          const roleLabel = term.id === "2026-fall" ? "本学期" : "上学期";
          const dateRange = termData.course?.dateRangeLabel || "日期以课程安排为准";
          return `
            <a class="term-overview-card${isActive ? " is-active" : ""}"
               href="${escapeHtml(termSwitchUrl(term.id, `${BASE}index.html`))}"
               data-term-switch="${escapeHtml(term.id)}"
               ${isActive ? 'aria-current="page"' : ""}
              aria-label="${escapeHtml(`${roleLabel}：${term.label}，${dateRange}，${lessonCount} 节课程，${isActive ? "正在浏览" : "查看学期"}`)}">
              <span class="term-overview-card-top">
                <span class="term-overview-number" aria-hidden="true">${pad2(index + 1)}</span>
                <span class="term-overview-status">${isActive ? "正在浏览" : "查看学期"}</span>
              </span>
              <span class="term-overview-role">${escapeHtml(roleLabel)}</span>
              <strong>${escapeHtml(term.label)}</strong>
              <span class="term-overview-date">${escapeHtml(dateRange)}</span>
              <span class="term-overview-count">${lessonCount} 节课程</span>
              <span class="term-overview-arrow" aria-hidden="true">→</span>
            </a>
          `;
        }).join("");
      }
  
      const teacherGrid = $("#teacherGrid");
      const teacherOrder = DATA.course.teacherOrder || Object.keys(DATA.teachers);
      const termTeachers = teacherOrder.map((id) => teacherById(id)).filter(Boolean);
      teacherGrid.innerHTML = termTeachers.map(t => `
        <a class="teacher-card" href="${teacherPageUrl(t.id)}">
          <div class="avatar"><img src="${escapeHtml(BASE + t.photo)}" alt="" loading="lazy" decoding="async" /></div>
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
      const isTbd = isTbdLesson(lesson) && !isMemory;
  
      const detailLink = lessonDetailUrl(lesson);
      const dlLink = withTerm(`${BASE}downloads.html?lesson=${encodeURIComponent(lesson.lessonId)}&week=${encodeURIComponent(lesson.week)}`);

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
        <article class="lesson-card${isTbd ? " is-tbd" : ""}${highlight}"${id}>
          <div class="lesson-left">
            <div class="badge${isTbd ? " badge-tbd" : ""}">${escapeHtml(lessonBadgeLine(lesson))}</div>
            <h3 class="lesson-title">${escapeHtml(lesson.title)}</h3>
            <div class="lesson-teacher muted small">授课老师：<b>${escapeHtml(t?.name || lesson.teacherName || "待定")}</b></div>
            <p class="lesson-summary muted">${escapeHtml(lesson.summary || "课程内容待更新。")}</p>
          </div>
          <div class="lesson-right">
            ${lesson.teacherId
              ? `<a class="btn btn-ghost" href="${detailLink}">老师介绍</a>`
              : `<span class="lesson-status" aria-label="授课负责人待定">负责人待定</span>`}
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

    function isoParts(iso) {
      const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(iso || ""));
      if (!match) return null;
      return { year: Number(match[1]), month: Number(match[2]), day: Number(match[3]) };
    }

    function monthsBetween(startIso, endIso) {
      const start = isoParts(startIso);
      const end = isoParts(endIso);
      if (!start || !end) return [];
      const months = [];
      let year = start.year;
      let month = start.month - 1;
      const endKey = end.year * 12 + (end.month - 1);
      while (year * 12 + month <= endKey) {
        months.push({ year, monthIndex0: month });
        month += 1;
        if (month > 11) {
          month = 0;
          year += 1;
        }
      }
      return months;
    }
  
    function renderCalendar() {
      const wrap = $("#calendar");
      if (!wrap) return;

      const datedLessons = DATA.lessons.filter((lesson) => isoParts(lesson.date));
      const sortedDates = datedLessons.map((lesson) => lesson.date).sort();
      const startIso = DATA.course.calendarStart || sortedDates[0];
      const endIso = DATA.course.calendarEnd || sortedDates[sortedDates.length - 1];
      const months = monthsBetween(startIso, endIso);
      const weekday = Number.isInteger(DATA.course.weekday) ? DATA.course.weekday : 3;
      const weekDayNames = ["一", "二", "三", "四", "五", "六", "日"];
      const byDate = new Map(datedLessons.map(l => [l.date, l]));

      if (!months.length) {
        wrap.innerHTML = `<div class="empty-state">暂未配置日历范围。</div>`;
        return;
      }
  
      wrap.innerHTML = months.map(({ year, monthIndex0: m0 }) => {
        const grid = buildMonthGrid(year, m0);
        const monthId = `calendar-${year}-${pad2(m0 + 1)}`;
  
        const cellsHtml = grid.map((day) => {
          if (!day) return `<div class="cal-cell is-empty" aria-hidden="true"></div>`;
          const iso = `${year}-${pad2(m0 + 1)}-${pad2(day)}`;
          const jsDate = new Date(year, m0, day);
          const isInTerm = iso >= startIso && iso <= endIso;
          const isWed = isInTerm && jsDate.getDay() === weekday;
          const lesson = byDate.get(iso);
          const hasEvent = Boolean(lesson);
          const isMemory = isMemoryLesson(lesson);
          const isTbd = isTbdLesson(lesson) && !isMemory;
  
          let cls = "cal-cell";
          if (!isInTerm) cls += " is-outside-term";
          if (isWed) cls += " is-wed";
          if (hasEvent) cls += isMemory ? " is-memory" : " is-course";
          if (isTbd) cls += " is-tbd";
  
          let inner = `<time class="cal-day" datetime="${iso}">${day}</time>`;
          if (hasEvent) inner += `<div class="cal-tag${isMemory ? " cal-tag-memory" : ""}${isTbd ? " cal-tag-tbd" : ""}">${escapeHtml(calendarTagText(lesson))}</div>`;
          else if (isWed) inner += `<div class="cal-tag cal-tag-muted">周三</div>`;
  
          if (hasEvent) {
            const link = lessonDetailUrl(lesson);
            const label = isMemory
              ? `${formatDateZh(iso)}，${lesson.title}`
              : `${formatDateZh(iso)}，第${lesson.week}课，${lesson.title}，授课老师${teacherNameForLesson(lesson)}`;
            inner = `<a class="cal-link" href="${link}" aria-label="${escapeHtml(label)}">${inner}</a>`;
          } else {
            inner = `<div class="cal-link is-disabled">${inner}</div>`;
          }
  
          return `<div class="${cls}">${inner}</div>`;
        }).join("");
  
        return `
          <section class="cal-month-wrap" aria-labelledby="${monthId}">
            <div class="cal-head">
              <h2 class="cal-month" id="${monthId}">${year}年${m0 + 1}月</h2>
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
      const status = $("#lessonSearchStatus");
      if (input) {
        const filterLessons = () => {
          const q = input.value.trim().toLowerCase();
          let visible = 0;
          $$(".lesson-card").forEach((card) => {
            const matches = card.textContent.toLowerCase().includes(q);
            card.style.display = matches ? "" : "none";
            if (matches) visible += 1;
          });
          if (status) status.textContent = q ? `找到 ${visible} 项课程` : `共 ${visible} 项课程`;
        };
        input.addEventListener("input", filterLessons);
        filterLessons();
      }
  
      const hash = (window.location.hash || "").replace("#", "");
      if (hash && $("#" + hash)) {
        const target = $("#" + hash);
        target.classList.add("is-highlight");
        target.scrollIntoView({ behavior: scrollBehavior(), block: "start" });
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
            <div class="section-kicker">Faculty profile</div>
            <div class="badge">Teacher ${escapeHtml(t.id)}</div>
            <h1 class="teacher-h1">${escapeHtml(t.name)}</h1>
            <div class="muted">${escapeHtml(t.title || "")}</div>
            <p class="teacher-bio">${escapeHtml(t.bio || "")}</p>
            <div class="row row-gap">
              <a class="btn btn-ghost" href="${withTerm(`${BASE}schedule.html`)}">返回课程安排</a>
              <a class="btn" href="${withTerm(`${BASE}downloads.html`)}">去资料库下载</a>
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
                <a class="gallery-item" href="${escapeHtml(rootAssetSrc(src))}" target="_blank" rel="noopener">
                  <img src="${escapeHtml(rootAssetSrc(src))}" alt="${escapeHtml(`${l.title}课堂照片`)}" loading="lazy" decoding="async" />
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
                <div class="badge">课 ${l.week} · ${escapeHtml(formatDateZh(l.date))}</div>
                <h3 class="lesson-title">${escapeHtml(l.title)}</h3>
                <p class="muted">${escapeHtml(l.summary || "（可在当前学期数据文件中填写本节课授课简介）")}</p>
              </div>
              <div class="teacher-lesson-actions">
                <a class="btn btn-ghost" href="${withTerm(`${BASE}schedule.html#lesson-${encodeURIComponent(l.lessonId)}`)}">课程列表</a>
                <a class="btn" href="${withTerm(`${BASE}downloads.html?lesson=${encodeURIComponent(l.lessonId)}&week=${encodeURIComponent(l.week)}`)}">资料下载</a>
              </div>
            </div>
  
            <div class="hr"></div>
  
            <div class="muted small">课堂照片：</div>
            ${galleryHtml}
          </article>
        `;
      }).join("") || `
        <div class="empty-state">
          <strong>${escapeHtml(t.name)}</strong>在${escapeHtml(DATA.course.termLabel || "当前学期")}暂无排课。
          <a class="text-link" href="${withTerm(`${BASE}schedule.html`)}">查看完整课程安排</a>
        </div>
      `;
      // <div class="muted small">要点：</div>
      // <ul class="mini-bullets">${(l.outline || []).map(x => `<li>${escapeHtml(x)}</li>`).join("")}</ul>

      // <div class="hr"></div>
  
      if (highlightWeek) {
        const el = $("#week-" + highlightWeek);
        if (el) el.scrollIntoView({ behavior: scrollBehavior(), block: "start" });
      }
  
      document.title = `${t.name}｜${DATA.course.termLabel || DATA.course.term}｜${DATA.course.title}`;
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
              <a class="btn btn-ghost" href="${withTerm(`${BASE}schedule.html`)}">返回课程安排</a>
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
      const firstPhotoUrl = gallery[0] ? rootAssetSrc(gallery[0]) : "";
      const stats = [
        { label: "课程", value: `${courseLessons().length} 次` },
        { label: "照片", value: `${gallery.length} 张` },
        { label: "学期", value: DATA.course.term },
      ];

      mount.innerHTML = `
        <section class="memory-hero card">
          <div class="memory-hero-copy">
            <div class="section-kicker">Course memories</div>
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
              <a class="btn btn-ghost" href="${withTerm(`${BASE}schedule.html#${lessonAnchorId(lesson)}`)}">回到课程安排</a>
              ${firstPhotoUrl
                ? `<a class="btn" href="${escapeHtml(firstPhotoUrl)}" target="_blank" rel="noopener">打开第一张照片</a>`
                : `<span class="lesson-status">相册待更新</span>`}
            </div>
          </div>
          ${firstPhotoUrl
            ? `<a class="memory-feature" href="${escapeHtml(firstPhotoUrl)}" target="_blank" rel="noopener">
                <img src="${escapeHtml(firstImage)}" alt="结课纪念照片" loading="eager" decoding="async" />
              </a>`
            : `<div class="memory-feature memory-feature-empty">
                <img src="${escapeHtml(firstImage)}" alt="" loading="eager" decoding="async" />
                <span>照片将在结课后更新</span>
              </div>`}
        </section>

        <section class="card">
          <div class="section-head">
            <div>
              <h2>回忆相册</h2>
              <p class="muted">${escapeHtml(DATA.course.title)} · ${escapeHtml(DATA.course.location)}</p>
            </div>
          </div>
          <div class="memory-gallery">${photos || `<div class="empty-state">本学期相册尚未更新。</div>`}</div>
        </section>
      `;

      document.title = `${lesson.title}｜${DATA.course.termLabel || DATA.course.term}｜${DATA.course.title}`;
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
      const backToSchedule = withTerm(`${BASE}schedule.html#lesson-${lesson.lessonId}`);
      const teacherLink = lesson.teacherId
        ? (() => {
            const url = new URL(teacherPageUrl(lesson.teacherId), window.location.href);
            url.searchParams.set("week", String(lesson.week));
            return url.href;
          })()
        : "";

      const materials = lesson.materials || [];
      const mats = materials.length
        ? materials.map((m) => `
            <li class="dl-item">
              ${m.url
                ? `<a class="dl-link" href="${escapeHtml(m.url)}" target="_blank" rel="noopener">${escapeHtml(m.label || "打开资料")}</a>`
                : `<span class="dl-pending">${escapeHtml(m.label || "资料待上传")}</span>`}
              ${m.note ? `<span class="muted small">· ${escapeHtml(m.note)}</span>` : ""}
            </li>
          `).join("")
        : `<li class="dl-item dl-item-empty"><span class="dl-pending">资料将在课程结束后上传</span></li>`;
  
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
              ${escapeHtml(formatDateZh(lesson.date))} · ${escapeHtml(t?.name || lesson.teacherName || "待定")}
            </div>
          </summary>
  
          <div class="dl-body">
            <div class="row row-gap">
              ${teacherLink ? `<a class="btn btn-ghost" href="${teacherLink}">老师页</a>` : ""}
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
        const termPlans = plans[ACTIVE_TERM_ID] || {};
        const plan = termPlans[lesson.lessonId] || plans[lesson.lessonId] || {};
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
            <td class="ict-plan-date">${escapeHtml(formatDateZh(lesson.date))}</td>
            <td class="ict-plan-title">${escapeHtml(lesson.title)}</td>
            <td class="ict-plan-teacher">${escapeHtml(t ? t.name : (lesson.teacherName || "待定"))}</td>
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
        const searchStatus = $("#downloadSearchStatus");
        if (isIct()) {
          locked.style.display = "none";
          list.classList.remove("is-hidden");
          list.innerHTML = renderIctView();
          if (searchEl) searchEl.style.display = "none";
          if (searchStatus) searchStatus.textContent = "";
          msg.textContent = "ICT 管理员视图已解锁。";
          return;
        }
        const ok = isUnlocked();
        if (searchEl) searchEl.style.display = "";
        if (searchStatus && !ok) searchStatus.textContent = "";
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
        btn.setAttribute("aria-busy", "true");

        // Fast path: student password
        if (await decryptDownloadGate(val)) {
          btn.disabled = false;
          btn.removeAttribute("aria-busy");
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
        btn.removeAttribute("aria-busy");
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
        const status = $("#downloadSearchStatus");
        if (!el) return;
        const fresh = el.cloneNode(true);
        el.parentNode.replaceChild(fresh, el);
        const filterDownloads = () => {
          const q = fresh.value.trim().toLowerCase();
          let visible = 0;
          $$(".dl-block").forEach((block) => {
            const matches = block.textContent.toLowerCase().includes(q);
            block.style.display = matches ? "" : "none";
            if (matches) visible += 1;
          });
          if (status) status.textContent = q ? `找到 ${visible} 项资料` : `共 ${visible} 项课程资料`;
        };
        fresh.addEventListener("input", filterDownloads);
        filterDownloads();
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
          target.scrollIntoView({ behavior: scrollBehavior(), block: "start" });
          target.classList.add("is-highlight");
          setTimeout(() => target.classList.remove("is-highlight"), 1600);
        }
      }

      refresh();
      if (isUnlocked() && !isIct()) autoOpenTarget();
    }

    function renderScheduleMeta() {
      const range = $("#scheduleRangeText");
      if (range) {
        range.textContent = `日历展示 ${DATA.course.dateRangeLabel || DATA.course.term}。${DATA.course.timeLabel || "每周三"}，有课日期可点击查看详情。`;
      }
      const listText = $("#scheduleListText");
      if (listText) {
        listText.textContent = `${DATA.course.termLabel || "本期"}共安排 ${courseLessons().length} 次课程；“待定”内容可直接在当前学期数据文件中更新。`;
      }
    }

    function setDocumentTitle(page) {
      const term = DATA.course.termLabel || DATA.course.term;
      const titles = {
        home: `${DATA.course.title}｜${term}`,
        schedule: `课程安排｜${term}｜${DATA.course.title}`,
        downloads: `资料下载｜${term}｜${DATA.course.title}`,
      };
      if (titles[page]) document.title = titles[page];
    }
  
    function boot() {
      validateCourseData();
      setBrand();
      renderTermSwitcher();
      document.body.setAttribute("data-term", ACTIVE_TERM_ID);
      const page = document.body.getAttribute("data-page");
      if (page === "home") renderHome();
      if (page === "schedule") { renderScheduleMeta(); renderCalendar(); renderLessonList(); }
      if (page === "teacher") renderTeacherPage();
      if (page === "memory") renderMemoryPage();
      if (page === "downloads") renderDownloadsPage();
      enhancePageShell();
      setDocumentTitle(page);
    }
  
    boot();
  })();
