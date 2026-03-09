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
      return `teachers/${encodeURIComponent(tid)}.html`;
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
          <div class="avatar"><img src="${escapeHtml(BASE + t.photo)}" alt="${escapeHtml(t.name)}" /></div>
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
  
      const outline = (lesson.outline || []).slice(0, 3)
        .map(x => `<li>${escapeHtml(x)}</li>`).join("");
  
      const teacherLink = `${teacherPageUrl(lesson.teacherId)}?week=${encodeURIComponent(lesson.week)}`;
      const dlLink = `${BASE}downloads.html?lesson=${encodeURIComponent(lesson.lessonId)}&week=${encodeURIComponent(lesson.week)}`;
  
      return `
        <article class="lesson-card${highlight}"${id}>
          <div class="lesson-left">
            <div class="badge">课 ${lesson.week} · ${escapeHtml(lesson.date)}</div>
            <h3 class="lesson-title">${escapeHtml(lesson.title)}</h3>
            <div class="muted small">授课老师：<b>${escapeHtml(t?.name || lesson.teacherId)}</b></div>
            <ul class="mini-bullets">${outline}</ul>
          </div>
          <div class="lesson-right">
            <a class="btn btn-ghost" href="${teacherLink}">老师介绍</a>
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
      const months = [2, 3, 4, 5]; // Mar..Jul
      const weekDayNames = ["一", "二", "三", "四", "五", "六", "日"];
      const byDate = new Map(DATA.lessons.map(l => [l.date, l]));
  
      wrap.innerHTML = months.map(m0 => {
        const grid = buildMonthGrid(year, m0);
  
        const cellsHtml = grid.map((day) => {
          if (!day) return `<div class="cal-cell is-empty"></div>`;
          const iso = `${year}-${pad2(m0 + 1)}-${pad2(day)}`;
          const jsDate = new Date(year, m0, day);
          const isWed = jsDate.getDay() === 3;
          const lesson = byDate.get(iso);
          const isCourse = Boolean(lesson);
  
          let cls = "cal-cell";
          if (isWed) cls += " is-wed";
          if (isCourse) cls += " is-course";
  
          let inner = `<div class="cal-day">${day}</div>`;
          if (isCourse) inner += `<div class="cal-tag">课${lesson.week}</div>`;
          else if (isWed) inner += `<div class="cal-tag cal-tag-muted">周三</div>`;
  
          if (isCourse) {
            const link = `${teacherPageUrl(lesson.teacherId)}?week=${encodeURIComponent(lesson.week)}`;
            inner = `<a class="cal-link" href="${link}" title="点击进入老师页：课 ${lesson.week}">${inner}</a>`;
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
              ${gallery.slice(0, 36).map(src => `
                <a class="gallery-item" href="${escapeHtml(src)}" target="_blank" rel="noopener">
                  <img src="${escapeHtml(src)}" alt="课堂图片" />
                </a>
              `).join("")}
             </div>`
          : `<div class="gallery-empty">
              <img src="${escapeHtml(BASE + "assets/img/gallery-placeholder.webp")}" alt="placeholder" />
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
  
    
    const UNLOCK_KEY = "course_unlocked_v1";
    const PASSWORD = "longyue";
  
    function isUnlocked() { return localStorage.getItem(UNLOCK_KEY) === "1"; }
    function setUnlocked(val) { localStorage.setItem(UNLOCK_KEY, val ? "1" : "0"); }
  
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
  
    function renderDownloadsPage() {
      const locked = $("#downloadsLocked");
      const list = $("#downloadsList");
      const msg = $("#pwdMsg");
      const input = $("#pwdInput");
      const btn = $("#pwdBtn");
      const reset = $("#pwdReset");
      if (!locked || !list || !msg || !input || !btn || !reset) return;
  
      function refresh() {
        const ok = isUnlocked();
        locked.style.display = ok ? "none" : "";
        list.classList.toggle("is-hidden", !ok);
        msg.textContent = ok ? "已解锁：资料列表已显示（已记住本机浏览器）。" : "未解锁：请输入密码显示资料。";
      }
  
      btn.addEventListener("click", () => {
        const val = (input.value || "").trim();
        if (val === PASSWORD) {
          setUnlocked(true);
          input.value = "";
          refresh();
          autoOpenTarget();
        } else {
          setUnlocked(false);
          msg.textContent = "密码错误，请重试。";
        }
      });
  
      reset.addEventListener("click", () => {
        setUnlocked(false);
        refresh();
      });
  
      list.innerHTML = DATA.lessons.map(downloadsItem).join("");
  
      const search = $("#searchDownload");
      if (search) {
        search.addEventListener("input", () => {
          const q = search.value.trim().toLowerCase();
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
          const l = DATA.lessons.find(x => String(x.week) === String(week));
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
      if (isUnlocked()) autoOpenTarget();
    }
  
    function boot() {
      setBrand();
      const page = document.body.getAttribute("data-page");
      if (page === "home") renderHome();
      if (page === "schedule") { renderCalendar(); renderLessonList(); }
      if (page === "teacher") renderTeacherPage();
      if (page === "downloads") renderDownloadsPage();
    }
  
    boot();
  })();