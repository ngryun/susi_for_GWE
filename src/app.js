    const RESULT_ORDER = ["합격", "충원합격", "불합격"];
    const COLOR_MAP = {
      "합격": { border: "#059669", fill: "rgba(5, 150, 105, 0.25)" },
      "충원합격": { border: "#d97706", fill: "rgba(217, 119, 6, 0.22)" },
      "불합격": { border: "#dc2626", fill: "rgba(220, 38, 38, 0.20)" },
    };
    const SYMBOL_MAP = { "합격": "circle", "충원합격": "triangle-up", "불합격": "x" };
    const Y_POS = { "합격": 0.01, "충원합격": 0.0, "불합격": -0.03 };
    const BINS = { start: 1, end: 9, size: 0.5 };
    const GRADE_BANDS = [
      { label: "1등급대", from: 1, to: 2 },
      { label: "2등급대", from: 2, to: 3 },
      { label: "3등급대", from: 3, to: 4 },
      { label: "4등급대", from: 4, to: 5 },
      { label: "5등급대", from: 5, to: 6 },
      { label: "6등급대", from: 6, to: 7 },
      { label: "7등급대", from: 7, to: 8 },
      { label: "8등급대", from: 8, to: 9 },
      { label: "9등급대", from: 9, to: 10 },
    ];
    const GRADE_BAND_LOW_SAMPLE_THRESHOLD = 5;
    const APPTYPE_BAND_TOP_LIMIT = 2;
    const DEFAULT_GRADE_BAND_MODE = "separate";
    const DEFAULT_UNIV_TOP_MODE = "ratio";
    const DEFAULT_UNIV_TOP_SORT = "total";
    const DEFAULT_UNIV_DIRECTORY_SORT = "total";
    const DEFAULT_DEPT_FINDER_GROUPING_MODE = "dept";
    const DEPT_SEARCH_RESULT_LIMIT = 30;
    const STUDENT_TREND_MAX_APPS = 6;
    const STUDENT_YEAR_KEY_PATTERN = /^Y\d{4}::/;
    const ESTIMATED_FIVE_GRADE_STANDARDS = [
      { key: "busan", label: "부산" },
      { key: "gyeonggi", label: "경기" },
    ];
    const GRADE_ESTIMATE_STANDARD_MAP = {
      busan: {
        label: "부산",
        topRange: {
          grade5: 1.0,
          minGrade9: 1.15,
          maxGrade9: 1.45,
        },
        grade5To9Table: [
          { grade5: 1.08, grade9: 1.59 },
          { grade5: 1.16, grade9: 1.78 },
          { grade5: 1.24, grade9: 1.98 },
          { grade5: 1.33, grade9: 2.14 },
          { grade5: 1.42, grade9: 2.32 },
          { grade5: 1.50, grade9: 2.45 },
          { grade5: 1.66, grade9: 2.72 },
          { grade5: 1.83, grade9: 3.03 },
          { grade5: 2.00, grade9: 3.35 },
          { grade5: 2.16, grade9: 3.60 },
          { grade5: 2.33, grade9: 3.91 },
          { grade5: 2.50, grade9: 4.20 },
          { grade5: 2.66, grade9: 4.46 },
          { grade5: 2.83, grade9: 4.73 },
          { grade5: 3.00, grade9: 5.03 },
          { grade5: 3.16, grade9: 5.28 },
          { grade5: 3.33, grade9: 5.58 },
          { grade5: 3.50, grade9: 5.86 },
          { grade5: 3.66, grade9: 6.08 },
          { grade5: 3.83, grade9: 6.37 },
          { grade5: 4.00, grade9: 6.67 },
          { grade5: 4.16, grade9: 6.93 },
          { grade5: 4.33, grade9: 7.20 },
          { grade5: 4.50, grade9: 7.48 },
          { grade5: 4.66, grade9: 7.71 },
          { grade5: 4.83, grade9: 8.00 },
          { grade5: 5.00, grade9: 9.00 },
        ],
      },
      gyeonggi: {
        label: "경기",
        topRange: null,
        grade5To9Table: [
          { grade5: 1.000, grade9: 1.39 },
          { grade5: 1.083, grade9: 1.53 },
          { grade5: 1.167, grade9: 1.73 },
          { grade5: 1.250, grade9: 1.87 },
          { grade5: 1.333, grade9: 2.03 },
          { grade5: 1.417, grade9: 2.18 },
          { grade5: 1.500, grade9: 2.31 },
          { grade5: 1.583, grade9: 2.45 },
          { grade5: 1.667, grade9: 2.61 },
          { grade5: 1.750, grade9: 2.73 },
          { grade5: 1.833, grade9: 2.88 },
          { grade5: 1.917, grade9: 3.00 },
          { grade5: 2.000, grade9: 3.16 },
          { grade5: 2.083, grade9: 3.28 },
          { grade5: 2.167, grade9: 3.41 },
          { grade5: 2.250, grade9: 3.54 },
          { grade5: 2.333, grade9: 3.68 },
          { grade5: 2.417, grade9: 3.80 },
          { grade5: 2.500, grade9: 3.95 },
          { grade5: 2.583, grade9: 4.08 },
          { grade5: 2.667, grade9: 4.21 },
          { grade5: 2.750, grade9: 4.34 },
          { grade5: 2.833, grade9: 4.48 },
          { grade5: 2.917, grade9: 4.61 },
          { grade5: 3.000, grade9: 4.75 },
          { grade5: 3.083, grade9: 4.87 },
          { grade5: 3.167, grade9: 5.00 },
          { grade5: 3.250, grade9: 5.12 },
          { grade5: 3.333, grade9: 5.24 },
          { grade5: 3.417, grade9: 5.33 },
          { grade5: 3.500, grade9: 5.47 },
          { grade5: 3.583, grade9: 5.59 },
          { grade5: 3.667, grade9: 5.71 },
          { grade5: 3.750, grade9: 5.83 },
          { grade5: 3.833, grade9: 5.98 },
          { grade5: 3.917, grade9: 6.09 },
          { grade5: 4.000, grade9: 6.25 },
          { grade5: 4.083, grade9: 6.36 },
          { grade5: 4.167, grade9: 6.50 },
          { grade5: 4.250, grade9: 6.61 },
          { grade5: 4.333, grade9: 6.72 },
          { grade5: 4.417, grade9: 6.81 },
          { grade5: 4.500, grade9: 6.94 },
          { grade5: 4.583, grade9: 7.05 },
          { grade5: 4.667, grade9: 7.18 },
          { grade5: 4.750, grade9: 7.30 },
          { grade5: 4.833, grade9: 7.45 },
          { grade5: 4.917, grade9: 7.62 },
          { grade5: 5.000, grade9: 8.97 },
        ],
      },
    };
    const GRADE_BAND_COLORS = {
      separate: {
        pass: { strong: "rgba(5, 150, 105, 0.82)", weak: "rgba(5, 150, 105, 0.36)" },
        wait: { strong: "rgba(217, 119, 6, 0.72)", weak: "rgba(217, 119, 6, 0.34)" },
        fail: { strong: "rgba(220, 38, 38, 0.58)", weak: "rgba(220, 38, 38, 0.28)" },
      },
      merged: {
        pass: { strong: "rgba(5, 150, 105, 0.82)", weak: "rgba(5, 150, 105, 0.36)" },
        fail: { strong: "rgba(220, 38, 38, 0.58)", weak: "rgba(220, 38, 38, 0.28)" },
      },
    };
    const UNIV_PASS_BAND_LABEL = "합격자 중앙 50%";
    const UNIV_PASS_BAND_DESCRIPTION = "합격·충원합격 학생의 전교과등급 가운데 50% 범위";
    const UNIV_PASS_BAND_SMALL_SAMPLE_TEXT = "표본 적음";
    const UNIV_PASS_BAND_SMALL_SAMPLE_THRESHOLD = 4;
    const DETAIL_MODAL_PAGE_SIZE = 200;
    const STUDENT_TREND_PAGE_SIZE = 100;
    const EXCEL_PARSE_CHUNK_SIZE = 1200;
    const EXCEL_MAX_FILE_BYTES = 50 * 1024 * 1024; // 50MB
    const EXCEL_REQUIRED_COLUMN_LABELS = ["대학명", "모집단위", "전형유형", "세부유형", "결과"];
    const LEGACY_EXCEL_DATA_START_ROW_INDEX = 3;
    const SCHOOL_EXCEL_DATA_START_ROW_INDEX = 2;
    const SCHOOL_SUBJECT_GRADE_COLUMN_COUNT = 28;
    const SCHOOL_CSAT_COLUMN_COUNT = 20;
    const SHARED_EXPORT_RECORD_FIELDS = [
      "student_key",
      "academic_year",
      "school_location",
      "is_rural",
      "region",
      "univ",
      "apptype",
      "subtype",
      "dept",
      "enrollment_count",
      "selection_type",
      "result",
      "registered_yn",
      "all_subj_grade",
      "conv_grade",
      "conv_grade_ext",
    ];
    const SUBJECT_GRADE_COL_START = 29; // AD
    const SUBJECT_GRADE_COL_END = 33;   // AH
    const CSAT_COLUMN_START = 57; // BF
    const CSAT_COLUMN_END = 76;   // BY

    const fileInput = document.getElementById("file-input");
    const statusEl = document.getElementById("status");
    const reportEl = document.getElementById("report");
    const generateBtn = document.getElementById("generate-btn");
    const generateProgressOverlayEl = document.getElementById("generate-progress-overlay");
    const generateProgressTitleEl = document.getElementById("generate-progress-title");
    const generateProgressMessageEl = document.getElementById("generate-progress-message");
    const generateProgressFillEl = document.getElementById("generate-progress-fill");
    const generateProgressPercentEl = document.getElementById("generate-progress-percent");
    const generateProgressDetailEl = document.getElementById("generate-progress-detail");
    const landingHeroEl = document.getElementById("landing-hero");
    const heroBuildInfoEl = document.getElementById("hero-build-info");
    const uploadPanelEl = document.getElementById("upload-panel");
    const detailModalEl = document.getElementById("detail-modal");
    const detailModalTitleEl = document.getElementById("detail-modal-title");
    const detailModalSubtitleEl = document.getElementById("detail-modal-subtitle");
    const detailModalBodyEl = document.getElementById("detail-modal-body");
    const detailModalBackBtn = document.getElementById("detail-modal-back");
    const detailModalExportBtn = document.getElementById("detail-modal-export");
    const detailModalCloseBtn = document.getElementById("detail-modal-close");

    const appState = {
      render: {
        plotRegistryData: {},
        initializedPlots: {},
        chartTableRegistry: {},
        plotIntersectionObserver: null,
        auxIntersectionObserver: null,
        auxRendererMap: {},
      },
      filters: {
        gradeBandModesByPlot: {},
        univTopDisplayMode: DEFAULT_UNIV_TOP_MODE,
        univTopSortKey: DEFAULT_UNIV_TOP_SORT,
        univDirectorySortKey: DEFAULT_UNIV_DIRECTORY_SORT,
        selectedUnivKeys: [],
        deptFinderGroupingMode: DEFAULT_DEPT_FINDER_GROUPING_MODE,
        selectedDeptKeys: [],
        selectedSubtypeKeys: [],
        yearFilter: "all",
        locationFilter: "all",
      },
      data: {
        reportRecords: [],
        loadedRecords: [],
        detailViewRowsCache: new Map(),
        studentCsatByKey: new Map(),
        studentSubjectGradeByKey: new Map(),
      },
      modal: {
        viewStack: [],
        sourceRecords: [],
      },
      trend: {
        rows: [],
        page: 1,
        pageSize: STUDENT_TREND_PAGE_SIZE,
        records: [],
      },
    };
    const renderState = appState.render;
    const filterState = appState.filters;
    const dataState = appState.data;
    const modalState = appState.modal;
    const trendState = appState.trend;

    const SusiApp = (window.SusiApp = window.SusiApp || { preloaded: {} });
    SusiApp.preloaded = SusiApp.preloaded || {};
    const comboState = { kind: null, open: false, searchText: "", pending: null };
    const univTopRecordsByScope = new Map();
    const finderEntryCacheByRecords = new WeakMap();
    const yearTableExportRegistry = {};
    // 공유용 HTML에서 엑셀 저장 기능을 차단할 때 사용 (내보내기 옵션으로 설정됨)
    let excelExportDisabled = false;
    const COMBO_KINDS = {
      dept: { label: "모집단위", placeholder: "모집단위 검색...", filterKey: "deptFilter", rowKey: "dept" },
      univ: { label: "대학명", placeholder: "대학명 검색...", filterKey: "univFilter", rowKey: "univ" },
      subtype: { label: "세부유형", placeholder: "세부유형 검색...", filterKey: "subtypeFilter", rowKey: "subtype" },
    };
    const analyticsViewState = {
      conditionTab: { active: false, criteria: null },
      univTab: { active: false, entries: [], univ: "" },
      deptTab: { active: false, entries: [] },
      subtypeTab: { active: false, entries: [] },
    };

    generateBtn.addEventListener("click", handleGenerate);
    detailModalBackBtn.addEventListener("click", handleDetailModalBack);
    detailModalExportBtn.addEventListener("click", handleDetailModalExport);
    detailModalCloseBtn.addEventListener("click", closeDetailModal);
    detailModalEl.addEventListener("click", (event) => {
      if (event.target instanceof HTMLElement && event.target.dataset.modalClose === "true") {
        closeDetailModal();
      }
    });
    detailModalBodyEl.addEventListener("click", (event) => {
      const el = event.target instanceof Element ? event.target : null;
      if (!el) return;
      /* ── pagination ── */
      const pageActionTrigger = el.closest("[data-detail-page-action]");
      if (pageActionTrigger) {
        handleDetailModalPageAction(pageActionTrigger.getAttribute("data-detail-page-action") || "");
        return;
      }
      /* ── result filter toggle ── */
      const resultBtn = el.closest("[data-result-filter]");
      if (resultBtn) {
        event.stopPropagation();
        handleDetailResultFilterChange(resultBtn.dataset.resultFilter || "all");
        return;
      }
      /* ── combo: tag remove ── */
      const removeBtn = el.closest("[data-combo-remove]");
      if (removeBtn) {
        event.stopPropagation();
        const value = removeBtn.dataset.comboRemove;
        const kind = removeBtn.closest("[data-combo-kind]")?.dataset.comboKind;
        if (!kind) return;
        if (comboState.open && comboState.kind === kind && comboState.pending) {
          const idx = comboState.pending.indexOf(value);
          if (idx >= 0) comboState.pending.splice(idx, 1);
          syncComboDOM();
        } else {
          const cv = modalState.viewStack[modalState.viewStack.length - 1];
          if (cv) {
            const fk = COMBO_KINDS[kind].filterKey;
            const arr = Array.isArray(cv[fk]) ? cv[fk].filter(v => v !== value) : [];
            handleDetailComboFilterChange(kind, arr);
          }
        }
        return;
      }
      /* ── combo: clear all ── */
      const clearBtn = el.closest("[data-combo-clear-all]");
      if (clearBtn) {
        event.stopPropagation();
        const kind = clearBtn.closest("[data-combo-kind]")?.dataset.comboKind;
        if (!kind) return;
        if (comboState.open && comboState.kind === kind) {
          comboState.pending = [];
          syncComboDOM();
        } else {
          handleDetailComboFilterChange(kind, []);
        }
        return;
      }
      /* ── combo: option toggle ── */
      const optionEl = el.closest("[data-combo-option]");
      if (optionEl) {
        event.stopPropagation();
        const value = optionEl.dataset.comboOption;
        const kind = optionEl.closest("[data-combo-kind]")?.dataset.comboKind;
        if (!kind) return;
        if (!comboState.open || comboState.kind !== kind) openCombo(kind);
        if (!comboState.pending) comboState.pending = [];
        const idx = comboState.pending.indexOf(value);
        if (idx >= 0) comboState.pending.splice(idx, 1);
        else comboState.pending.push(value);
        syncComboDOM();
        return;
      }
      /* ── combo: open on input-area click ── */
      const areaEl = el.closest("[data-combo-area]");
      if (areaEl) {
        const kind = areaEl.closest("[data-combo-kind]")?.dataset.comboKind;
        if (kind) openCombo(kind);
        return;
      }
      const subjectGradeToggle = el.closest("[data-subject-grade-toggle]");
      if (subjectGradeToggle) {
        event.stopPropagation();
        const card = subjectGradeToggle.closest("[data-subject-grade-card]");
        const extraGroups = card ? card.querySelector("[data-subject-grade-extra]") : null;
        if (!extraGroups) return;
        const willExpand = extraGroups.hidden;
        extraGroups.hidden = !willExpand;
        subjectGradeToggle.setAttribute("aria-expanded", willExpand ? "true" : "false");
        subjectGradeToggle.textContent = willExpand ? "상세내용접기" : "상세내용표시";
        return;
      }
      /* ── student drilldown ── */
      const target = el.closest('[data-student-drilldown="true"]');
      if (!target) return;
      openStudentDetailModal({
        student_key: target.dataset.studentKey || "",
      });
    });
    detailModalBodyEl.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      const target = event.target instanceof Element
        ? event.target.closest('[data-student-drilldown="true"]')
        : null;
      if (!target || target !== event.target) return;
      event.preventDefault();
      openStudentDetailModal({
        student_key: target.dataset.studentKey || "",
      });
    });
    detailModalBodyEl.addEventListener("input", (event) => {
      const input = event.target instanceof HTMLInputElement && event.target.dataset.comboInput === "true"
        ? event.target : null;
      if (!input) return;
      const kind = input.closest("[data-combo-kind]")?.dataset.comboKind;
      if (!kind || comboState.kind !== kind) return;
      comboState.searchText = input.value;
      filterComboDropdown(input.value);
    });
    document.addEventListener("click", (event) => {
      if (!comboState.open || !comboState.kind) return;
      const combo = document.getElementById(`combo-${comboState.kind}`);
      if (combo && !combo.contains(event.target)) {
        closeCombo();
      }
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        if (comboState.open) { closeCombo(); event.stopPropagation(); return; }
        if (!detailModalEl.hidden) { closeDetailModal(); }
      }
    });
    window.addEventListener("resize", updateStickyTabOffset);
    // 창 크기가 바뀌면 모달 툴바가 줄바꿈되어 높이가 달라질 수 있으므로 헤더 오프셋도 다시 측정한다.
    window.addEventListener("resize", updateDetailToolbarOffset);

    function setStatus(msg, isError = false) {
      statusEl.textContent = msg;
      statusEl.style.color = isError ? "#dc2626" : "#6b7280";
    }
    function nextUiPaint() {
      return new Promise((resolve) => {
        requestAnimationFrame(() => {
          setTimeout(resolve, 0);
        });
      });
    }
    function setGenerateUiBusy(isBusy) {
      if (generateBtn) {
        generateBtn.disabled = isBusy;
        generateBtn.textContent = isBusy ? "생성 중..." : "보고서 생성";
        generateBtn.setAttribute("aria-busy", isBusy ? "true" : "false");
      }
      if (fileInput) fileInput.disabled = isBusy;
    }
    function showGenerateProgress() {
      if (generateProgressOverlayEl) generateProgressOverlayEl.hidden = false;
      setGenerateUiBusy(true);
    }
    function hideGenerateProgress() {
      if (generateProgressOverlayEl) generateProgressOverlayEl.hidden = true;
      setGenerateUiBusy(false);
    }
    function updateGenerateProgress(title, message, percent = 0, detail = "") {
      const safePercent = Math.max(0, Math.min(100, Math.round(percent)));
      showGenerateProgress();
      if (generateProgressTitleEl) generateProgressTitleEl.textContent = title || "보고서 생성 중";
      if (generateProgressMessageEl) generateProgressMessageEl.textContent = message || "";
      if (generateProgressFillEl) generateProgressFillEl.style.width = `${safePercent}%`;
      if (generateProgressPercentEl) generateProgressPercentEl.textContent = `${safePercent}%`;
      if (generateProgressDetailEl) generateProgressDetailEl.textContent = detail || "";
      const statusMessage = [title, message, detail].filter(Boolean).join(" · ");
      if (statusMessage) setStatus(statusMessage);
    }

    function getBuildTimestampSource() {
      const ns = window.SusiApp && window.SusiApp.preloaded;
      if (ns && typeof ns.buildUtc === "string" && ns.buildUtc.trim()) {
        return ns.buildUtc;
      }
      if (typeof document.lastModified === "string" && document.lastModified.trim()) {
        return document.lastModified;
      }
      return "";
    }

    function formatBuildTimestamp(value) {
      if (!value) return "";
      const parsed = new Date(value);
      if (!Number.isFinite(parsed.getTime())) return "";
      return new Intl.DateTimeFormat("ko-KR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).format(parsed);
    }

    function updateBuildInfoText() {
      const formatted = formatBuildTimestamp(getBuildTimestampSource());
      const message = formatted ? `프로그램 마지막 업데이트: ${formatted}` : "";
      if (heroBuildInfoEl) {
        heroBuildInfoEl.textContent = message;
        heroBuildInfoEl.hidden = !message;
      }
      const headerBuildInfoEl = document.getElementById("header-build-info");
      if (headerBuildInfoEl) {
        headerBuildInfoEl.textContent = message;
        headerBuildInfoEl.hidden = !message;
      }
    }

    function setLandingVisibility(isVisible) {
      if (landingHeroEl) landingHeroEl.hidden = !isVisible;
      if (uploadPanelEl) uploadPanelEl.hidden = !isVisible;
    }

    function validateRuntimeLibraries() {
      const missing = [];
      if (typeof XLSX === "undefined" || !XLSX || typeof XLSX.read !== "function" || !XLSX.utils) {
        missing.push("엑셀 처리 라이브러리");
      }
      if (typeof Plotly === "undefined" || !Plotly || typeof Plotly.newPlot !== "function") {
        missing.push("차트 라이브러리");
      }
      if (missing.length) {
        throw new Error(`${missing.join(", ")}를 불러오지 못했습니다. 프로그램 파일이 손상되었거나 브라우저가 스크립트 실행을 차단했습니다. 최신 index.html을 다시 내려받아 Chrome 또는 Edge에서 열어주세요.`);
      }
    }

    async function handleGenerate() {
      const files = Array.from(fileInput.files);
      if (!files.length) {
        setStatus("엑셀 파일을 1개 이상 선택해주세요.", true);
        return;
      }
      const oversized = files.filter((f) => f.size > EXCEL_MAX_FILE_BYTES);
      if (oversized.length) {
        const limitMb = Math.round(EXCEL_MAX_FILE_BYTES / (1024 * 1024));
        const names = oversized.map((f) => `${f.name}(${(f.size / 1024 / 1024).toFixed(1)}MB)`).join(", ");
        setStatus(`파일 크기 제한(${limitMb}MB)을 초과한 파일이 있습니다: ${names}`, true);
        return;
      }
      try {
        validateRuntimeLibraries();
        updateGenerateProgress(
          "업로드 확인 중",
          `엑셀 ${files.length}개 파일을 순서대로 불러오고 있습니다.`,
          3,
          "서버 전송 없이 내 컴퓨터에서만 처리됩니다."
        );
        await nextUiPaint();

        const allParsed = [];
        const studentCsatByKey = new Map();
        const studentSubjectGradeByKey = new Map();
        let loadedRecordCount = 0;
        let totalSkippedCount = 0;
        const parsingProgressShare = 76;
        for (let fileIndex = 0; fileIndex < files.length; fileIndex++) {
          const file = files[fileIndex];
          updateGenerateProgress(
            `엑셀 ${fileIndex + 1}/${files.length} 준비 중`,
            `${file.name} 파일을 읽고 있습니다.`,
            4 + Math.round((fileIndex / files.length) * parsingProgressShare),
            `${fileIndex + 1}/${files.length} 파일`
          );
          await nextUiPaint();
          const parsed = await parseExcel(file, (progress = {}) => {
            const basePercent = 4 + (fileIndex / files.length) * parsingProgressShare;
            const fileShare = parsingProgressShare / files.length;
            const progressRatio = typeof progress.ratio === "number" ? progress.ratio : 0;
            const percent = basePercent + fileShare * progressRatio;
            const rowText = progress.totalRows
              ? `${(progress.processedRows || 0).toLocaleString()} / ${progress.totalRows.toLocaleString()}행`
              : "시트 분석 중";
            const validText = typeof progress.validCount === "number"
              ? `유효 ${progress.validCount.toLocaleString()}건`
              : "";
            updateGenerateProgress(
              `엑셀 ${fileIndex + 1}/${files.length} 처리 중`,
              `${file.name} 데이터를 정리하고 있습니다.`,
              percent,
              [ `${fileIndex + 1}/${files.length} 파일`, rowText, validText ].filter(Boolean).join(" · ")
            );
          });
          allParsed.push(parsed.records);
          mergeStudentCsatMaps(studentCsatByKey, parsed.studentCsatByKey);
          mergeSubjectGradeMaps(studentSubjectGradeByKey, parsed.studentSubjectGradeByKey);
          loadedRecordCount += parsed.records.length;
          totalSkippedCount += (parsed.skippedCount || 0);
          updateGenerateProgress(
            `엑셀 ${fileIndex + 1}/${files.length} 완료`,
            `${file.name} 처리가 끝났습니다.`,
            4 + Math.round(((fileIndex + 1) / files.length) * parsingProgressShare),
            `누적 ${loadedRecordCount.toLocaleString()}건`
          );
          await nextUiPaint();
        }

        const records = allParsed.flat();
        if (!records.length) {
          hideGenerateProgress();
          setStatus(`유효한 데이터가 없습니다. 필수 컬럼(${EXCEL_REQUIRED_COLUMN_LABELS.join(", ")})과 등급 값이 기재되어 있는지 확인하세요.`, true);
          return;
        }
        updateGenerateProgress(
          "데이터 정리 완료",
          "학년도와 기본 통계를 정리하고 있습니다.",
          84,
          `총 ${records.length.toLocaleString()}건`
        );
        await nextUiPaint();
        dataState.loadedRecords = records;
        dataState.studentCsatByKey = studentCsatByKey;
        dataState.studentSubjectGradeByKey = studentSubjectGradeByKey;
        const years = getAvailableYears(records);
        filterState.yearFilter = "all";
        filterState.locationFilter = "all";
        updateGenerateProgress(
          "보고서 화면 구성 중",
          "표와 차트 영역을 준비하고 있습니다.",
          92,
          `학년도 ${years.length.toLocaleString()}개`
        );
        await nextUiPaint();
        renderFullReport(records, "", "summary", {}, { years, allRecords: records });
        const fileText = files.length > 1 ? `${files.length}개 파일에서 ` : "";
        const skippedText = totalSkippedCount > 0 ? ` (${totalSkippedCount.toLocaleString()}건 필수항목 누락으로 제외)` : "";
        setLandingVisibility(false);
        updateGenerateProgress(
          "생성 완료",
          "보고서가 준비되었습니다.",
          100,
          `${fileText}총 ${records.length.toLocaleString()}건${skippedText}`
        );
        setStatus(`${fileText}총 ${records.length}건 로드 완료.${skippedText} 보고서가 생성되었습니다.`);
        await waitForRender(180);
        hideGenerateProgress();
      } catch (e) {
        console.error(e);
        hideGenerateProgress();
        setStatus("처리 중 오류: " + e.message, true);
      }
    }

    function parseExcel(file, onProgress = null) {
      const fileLabel = (file && file.name) ? file.name : "파일";
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = async (e) => {
          try {
            const data = new Uint8Array(e.target.result);
            let workbook;
            try {
              workbook = XLSX.read(data, { type: "array" });
            } catch (err) {
              throw new Error(`${fileLabel}: 엑셀 파일을 읽을 수 없습니다. (${err && err.message ? err.message : "형식이 올바르지 않습니다"})`);
            }
            if (!workbook || !Array.isArray(workbook.SheetNames) || !workbook.SheetNames.length) {
              throw new Error(`${fileLabel}: 시트가 없는 엑셀 파일입니다.`);
            }
            const sheet = workbook.Sheets[workbook.SheetNames[0]];
            if (!sheet) {
              throw new Error(`${fileLabel}: 첫 번째 시트를 찾을 수 없습니다.`);
            }
            const allRows = XLSX.utils.sheet_to_json(sheet, { header: 1, defval: "", blankrows: true });
            const layout = detectExcelLayout(sheet, allRows);
            if (allRows.length <= layout.dataStartIndex) {
              throw new Error(`${fileLabel}: 데이터 행이 없습니다. (헤더 이후 비어 있음)`);
            }
            validateRequiredColumnsInHeaderRows(allRows, fileLabel, layout);
            const rows = allRows.slice(layout.dataStartIndex);
            const csatColumnDescriptors = buildStudentCsatColumnDescriptors(sheet, allRows, layout.csatRange);
            const subjectGradeDescriptors = buildSubjectGradeDescriptors(sheet, allRows, layout.subjectGradeRange);
            const COL = layout.columns;
            const fallbackAcademicYear = resolveAcademicYearFallbackFromFilename(fileLabel, layout);

            const records = [];
            const studentCsatByKey = new Map();
            const studentSubjectGradeByKey = new Map();
            const totalRows = rows.length;
            rows.forEach((row) => {
              if (Array.isArray(row) && Number.isInteger(COL.school_name) && row.length > COL.school_name) {
                row[COL.school_name] = "";
              }
            });
            if (typeof onProgress === "function") {
              onProgress({ ratio: totalRows ? 0.02 : 1, processedRows: 0, totalRows, validCount: 0 });
            }
            for (let start = 0; start < totalRows; start += EXCEL_PARSE_CHUNK_SIZE) {
              const end = Math.min(start + EXCEL_PARSE_CHUNK_SIZE, totalRows);
              for (let rowIndex = start; rowIndex < end; rowIndex++) {
                const row = rows[rowIndex];
                const studentKeyRaw = buildStudentKeyFromRow(row, COL) || `S${String(records.length + 1).padStart(5, "0")}`;
                const rec = normalizeLoadedRecord({
                  student_key: studentKeyRaw,
                  academic_year: readAcademicYearFromRow(row, COL, fallbackAcademicYear),
                  school_location: safe(readRowValue(row, COL.school_location)),
                  is_rural: parseIsRural(readRowValue(row, COL.is_rural)),
                  region: safe(readRowValue(row, COL.region)),
                  univ: safe(readRowValue(row, COL.univ)),
                  apptype: safe(readRowValue(row, COL.apptype)),
                  subtype: safe(readRowValue(row, COL.subtype)),
                  dept: safe(readRowValue(row, COL.dept)),
                  enrollment_count: parseEnrollmentCount(readRowValue(row, COL.enrollment_count)),
                  selection_type: safe(readRowValue(row, COL.selection_type)),
                  result: safe(readRowValue(row, COL.result)),
                  registered_yn: parseRegistration(readRowValue(row, COL.registered_yn)),
                  all_subj_grade: parseGrade(readRowValue(row, COL.all_subj)),
                  conv_grade: parseGrade(readRowValue(row, COL.conv)),
                  conv_grade_ext: parseGrade(readRowValue(row, COL.conv_ext)),
                }, records.length);
                if (!rec.result || !rec.univ || !rec.dept || !rec.subtype || !rec.apptype) continue;
                if (rec.all_subj_grade === null && rec.conv_grade === null) continue;
                records.push(rec);
                if (csatColumnDescriptors.length) {
                  const csatProfile = createStudentCsatProfileFromRow(row, csatColumnDescriptors);
                  if (csatProfile.length) {
                    studentCsatByKey.set(
                      rec.student_key,
                      mergeStudentCsatProfiles(studentCsatByKey.get(rec.student_key), csatProfile)
                    );
                  }
                }
                if (subjectGradeDescriptors.length && !studentSubjectGradeByKey.has(rec.student_key)) {
                  const sg = createSubjectGradeFromRow(row, subjectGradeDescriptors);
                  if (sg.length) studentSubjectGradeByKey.set(rec.student_key, sg);
                }
              }
              if (typeof onProgress === "function") {
                onProgress({
                  ratio: totalRows ? (end / totalRows) : 1,
                  processedRows: end,
                  totalRows,
                  validCount: records.length,
                });
              }
              await nextUiPaint();
            }
            const skippedCount = totalRows - records.length;
            if (!records.length) {
              throw new Error(`${fileLabel}: 유효한 데이터 행이 없습니다. 필수 컬럼(${EXCEL_REQUIRED_COLUMN_LABELS.join(", ")}) 및 등급 값 누락 여부를 확인하세요.`);
            }
            resolve({ records, studentCsatByKey, studentSubjectGradeByKey, skippedCount });
          } catch (err) {
            reject(err);
          }
        };
        reader.onerror = () => reject(new Error(`${fileLabel}: 파일을 읽는 중 오류가 발생했습니다.`));
        reader.readAsArrayBuffer(file);
      });
    }

    function createLegacyExcelLayout() {
      return {
        type: "legacy",
        dataStartIndex: LEGACY_EXCEL_DATA_START_ROW_INDEX,
        columns: {
          school_name: 0,       // A: 고등학교명 (업로드 직후 폐기)
          student_key: 1,       // B: 학생 고유코드
          academic_year: 2,     // C: 학년도
          school_location: 3,   // D: 소재지
          is_rural: 5,          // F: 농어촌여부
          region: 8,            // I: 대학 지역
          univ: 9,              // J: 대학명
          apptype: 11,          // L: 전형유형
          subtype: 13,          // N: 세부유형
          dept: 15,             // P: 모집단위
          enrollment_count: 16, // Q: 모집인원
          selection_type: 17,   // R: 선발유형
          conv: 21,             // V: 환산등급(일반교과)
          conv_ext: 22,         // W: 환산등급(일반+진로)
          result: 24,           // Y: 결과
          registered_yn: 27,    // AB: 등록여부
          all_subj: 34,         // AI: 전교과등급
        },
        subjectGradeRange: { start: SUBJECT_GRADE_COL_START, end: SUBJECT_GRADE_COL_END },
        csatRange: { start: CSAT_COLUMN_START, end: CSAT_COLUMN_END },
      };
    }

    function detectExcelLayout(sheet, allRows = []) {
      if (!isSchoolExcelLayout(sheet, allRows)) {
        // 학교 양식 앵커(학년/반/번호) 중 일부만 있으면, 학교 양식을 의도했으나
        // 일부 열이 빠진 파일로 보고 어떤 열이 누락/잘못 배치됐는지 명확히 알려준다.
        const anchors = findSchoolAnchorColumns(sheet, allRows);
        const presentKeys = SCHOOL_ANCHOR_LABELS.filter(({ key }) => anchors[key] !== undefined);
        if (presentKeys.length) {
          const missingLabels = SCHOOL_ANCHOR_LABELS
            .filter(({ key }) => anchors[key] === undefined)
            .map(({ label }) => label);
          if (missingLabels.length) {
            throw new Error(
              `학교 업로드 양식으로 보이지만 1행(머리글)에서 필수 열을 찾을 수 없습니다 → ${missingLabels.join(", ")}. `
              + "1행 맨 앞에 학년, 반, 번호 열이 순서대로 있는지 확인하세요."
            );
          }
          const orderText = SCHOOL_ANCHOR_LABELS
            .map(({ key, label }) => `${label}(현재 ${anchors[key] + 1}번째 열)`)
            .join(", ");
          throw new Error(
            `학교 업로드 양식의 1행은 맨 앞부터 학년, 반, 번호 순서여야 합니다. 현재 열 위치: ${orderText}. 열 순서를 확인하세요.`
          );
        }
        return createLegacyExcelLayout();
      }

      const subjectGradeRange = findSchoolSubjectGradeRange(sheet, allRows);
      const csatRange = subjectGradeRange
        ? {
          start: subjectGradeRange.end + 1,
          end: subjectGradeRange.end + SCHOOL_CSAT_COLUMN_COUNT,
          carryTop: true,
        }
        : { start: 1, end: 0 };
      const convCol = firstValidColumn(
        findTopHeaderColumn(sheet, allRows, ["내등급(환산)"]),
        findHeaderPairColumn(sheet, allRows, ["환산등급"], ["일반교과"], { allowCarriedTop: true })
      );
      const columns = {
        school_name: null,
        student_key: null,
        grade: 0,
        class_no: 1,
        student_no: 2,
        academic_year: findTopHeaderColumn(sheet, allRows, ["학년도"]),
        school_location: findTopHeaderColumn(sheet, allRows, ["소재지"]),
        is_rural: firstValidColumn(
          findTopHeaderColumn(sheet, allRows, ["농어촌여부"]),
          findTopHeaderColumn(sheet, allRows, ["농어촌"])
        ),
        region: findTopHeaderColumn(sheet, allRows, ["지역"]),
        univ: findTopHeaderColumn(sheet, allRows, ["대학명"]),
        apptype: findTopHeaderColumn(sheet, allRows, ["전형유형"]),
        subtype: findTopHeaderColumn(sheet, allRows, ["세부유형"]),
        dept: findTopHeaderColumn(sheet, allRows, ["모집단위"]),
        enrollment_count: findTopHeaderColumn(sheet, allRows, ["모집인원"]),
        selection_type: findTopHeaderColumn(sheet, allRows, ["선발유형"]),
        conv: convCol,
        conv_ext: findHeaderPairColumn(sheet, allRows, ["환산등급"], ["환산(일반+진로)"], { allowCarriedTop: true }),
        result: firstValidColumn(
          findHeaderPairColumn(sheet, allRows, ["합격결과"], ["최종단계"], { allowCarriedTop: true }),
          findHeaderColumnInRows(sheet, allRows, [0], ["최종단계"]),
          findTopHeaderColumn(sheet, allRows, ["결과"])
        ),
        registered_yn: findTopHeaderColumn(sheet, allRows, ["등록여부"]),
        all_subj: findHeaderPairColumn(sheet, allRows, ["전교과"], ["100"], { allowCarriedTop: true }),
      };
      const missingRequiredLabels = [
        ["학년", columns.grade],
        ["반", columns.class_no],
        ["번호", columns.student_no],
        ["대학명", columns.univ],
        ["모집단위", columns.dept],
        ["전형유형", columns.apptype],
        ["세부유형", columns.subtype],
        ["결과", columns.result],
      ]
        .filter(([, colIndex]) => !isValidColumnIndex(colIndex))
        .map(([label]) => label);
      if (!isValidColumnIndex(columns.all_subj) && !isValidColumnIndex(columns.conv)) {
        missingRequiredLabels.push("전교과/100 또는 내등급(환산)");
      }

      return {
        type: "school",
        dataStartIndex: SCHOOL_EXCEL_DATA_START_ROW_INDEX,
        columns,
        subjectGradeRange: subjectGradeRange || { start: 1, end: 0 },
        csatRange,
        missingRequiredLabels,
      };
    }

    const SCHOOL_ANCHOR_LABELS = [
      { key: "grade", label: "학년", expectedCol: 0 },
      { key: "class_no", label: "반", expectedCol: 1 },
      { key: "student_no", label: "번호", expectedCol: 2 },
    ];

    // 1행(머리글)에서 학교 양식의 앵커 열(학년/반/번호)이 어느 열에 있는지 찾는다.
    // 열이 통째로 삭제되어 순서가 밀린 경우도 잡기 위해 앞쪽 여러 열을 훑는다.
    function findSchoolAnchorColumns(sheet, allRows = []) {
      const found = {};
      const scanColumnCount = 8;
      for (let colIndex = 0; colIndex < scanColumnCount; colIndex += 1) {
        const value = getMergedHeaderValue(sheet, allRows, 0, colIndex);
        SCHOOL_ANCHOR_LABELS.forEach(({ key, label }) => {
          if (found[key] === undefined && headerMatches(value, label)) {
            found[key] = colIndex;
          }
        });
      }
      return found;
    }

    function isSchoolExcelLayout(sheet, allRows = []) {
      const anchors = findSchoolAnchorColumns(sheet, allRows);
      return SCHOOL_ANCHOR_LABELS.every(({ key, expectedCol }) => anchors[key] === expectedCol);
    }

    function validateRequiredColumnsInHeaderRows(allRows, fileLabel, layout = null) {
      if (layout && layout.type === "school") {
        const missing = Array.isArray(layout.missingRequiredLabels) ? layout.missingRequiredLabels : [];
        if (missing.length) {
          throw new Error(`${fileLabel}: 필수 컬럼이 누락되었습니다 → ${missing.join(", ")}`);
        }
        return;
      }
      const headerText = allRows
        .slice(0, 3)
        .flatMap((row) => (Array.isArray(row) ? row : []))
        .map((cell) => String(cell ?? "").trim())
        .filter(Boolean)
        .join(" ");
      const missing = EXCEL_REQUIRED_COLUMN_LABELS.filter((label) => !headerText.includes(label));
      if (missing.length) {
        throw new Error(`${fileLabel}: 필수 컬럼이 누락되었습니다 → ${missing.join(", ")}`);
      }
    }

    function getSheetCellText(sheet, rowIndex, colIndex) {
      if (!sheet) return "";
      const cell = sheet[XLSX.utils.encode_cell({ r: rowIndex, c: colIndex })];
      if (!cell) return "";
      return safe(cell.w !== undefined ? cell.w : cell.v);
    }

    function getMergedHeaderValue(sheet, headerRows, rowIndex, colIndex) {
      const row = Array.isArray(headerRows[rowIndex]) ? headerRows[rowIndex] : [];
      const directValue = safe(row[colIndex]);
      if (directValue) return directValue;
      const merges = Array.isArray(sheet && sheet["!merges"]) ? sheet["!merges"] : [];
      for (let index = 0; index < merges.length; index += 1) {
        const merge = merges[index];
        if (
          rowIndex >= merge.s.r && rowIndex <= merge.e.r &&
          colIndex >= merge.s.c && colIndex <= merge.e.c
        ) {
          return safe((headerRows[merge.s.r] || [])[merge.s.c]) || getSheetCellText(sheet, merge.s.r, merge.s.c);
        }
      }
      return getSheetCellText(sheet, rowIndex, colIndex);
    }

    function getCarriedHeaderValue(sheet, headerRows, rowIndex, colIndex, minColIndex = 0) {
      const directValue = getMergedHeaderValue(sheet, headerRows, rowIndex, colIndex);
      if (directValue) return directValue;
      for (let currentCol = colIndex - 1; currentCol >= minColIndex; currentCol -= 1) {
        const carriedValue = getMergedHeaderValue(sheet, headerRows, rowIndex, currentCol)
          || getSheetCellText(sheet, rowIndex, currentCol);
        if (carriedValue) return carriedValue;
      }
      return "";
    }

    function normalizeHeaderText(value) {
      return safe(value)
        .replace(/[（]/g, "(")
        .replace(/[）]/g, ")")
        .replace(/\s+/g, "")
        .toLowerCase();
    }

    function headerMatches(value, expected) {
      return normalizeHeaderText(value) === normalizeHeaderText(expected);
    }

    function headerMatchesAny(value, expectedValues = []) {
      return expectedValues.some((expected) => headerMatches(value, expected));
    }

    function isValidColumnIndex(colIndex) {
      return Number.isInteger(colIndex) && colIndex >= 0;
    }

    function firstValidColumn(...colIndexes) {
      const found = colIndexes.find((colIndex) => isValidColumnIndex(colIndex));
      return isValidColumnIndex(found) ? found : null;
    }

    function getMaxColumnIndex(sheet, allRows = []) {
      let maxColumnIndex = 0;
      allRows.forEach((row) => {
        if (Array.isArray(row) && row.length) {
          maxColumnIndex = Math.max(maxColumnIndex, row.length - 1);
        }
      });
      if (sheet && sheet["!ref"]) {
        try {
          const range = XLSX.utils.decode_range(sheet["!ref"]);
          maxColumnIndex = Math.max(maxColumnIndex, range.e.c);
        } catch (err) {
          // Ignore malformed ranges; row lengths still provide a safe bound.
        }
      }
      return maxColumnIndex;
    }

    function findTopHeaderColumn(sheet, headerRows = [], labels = []) {
      const maxColumnIndex = getMaxColumnIndex(sheet, headerRows);
      for (let colIndex = 0; colIndex <= maxColumnIndex; colIndex += 1) {
        if (headerMatchesAny(getMergedHeaderValue(sheet, headerRows, 0, colIndex), labels)) {
          return colIndex;
        }
      }
      return null;
    }

    function findHeaderColumnInRows(sheet, headerRows = [], rowIndexes = [], labels = []) {
      const maxColumnIndex = getMaxColumnIndex(sheet, headerRows);
      for (let colIndex = 0; colIndex <= maxColumnIndex; colIndex += 1) {
        for (let i = 0; i < rowIndexes.length; i += 1) {
          const rowIndex = rowIndexes[i];
          if (headerMatchesAny(getMergedHeaderValue(sheet, headerRows, rowIndex, colIndex), labels)) {
            return colIndex;
          }
        }
      }
      return null;
    }

    function findHeaderPairColumn(sheet, headerRows = [], topLabels = [], detailLabels = [], options = {}) {
      const maxColumnIndex = getMaxColumnIndex(sheet, headerRows);
      const detailRows = Array.isArray(options.detailRows) && options.detailRows.length ? options.detailRows : [1, 2];
      for (let colIndex = 0; colIndex <= maxColumnIndex; colIndex += 1) {
        const topValue = options.allowCarriedTop
          ? getCarriedHeaderValue(sheet, headerRows, 0, colIndex)
          : getMergedHeaderValue(sheet, headerRows, 0, colIndex);
        if (!headerMatchesAny(topValue, topLabels)) continue;
        for (let i = 0; i < detailRows.length; i += 1) {
          const rowIndex = detailRows[i];
          const detailValue = options.allowCarriedDetail
            ? getCarriedHeaderValue(sheet, headerRows, rowIndex, colIndex)
            : getMergedHeaderValue(sheet, headerRows, rowIndex, colIndex);
          if (headerMatchesAny(detailValue, detailLabels)) {
            return colIndex;
          }
        }
      }
      return null;
    }

    function findSchoolSubjectGradeRange(sheet, headerRows = []) {
      const start = findTopHeaderColumn(sheet, headerRows, ["국어"]);
      if (!isValidColumnIndex(start)) return null;
      return {
        start,
        end: start + SCHOOL_SUBJECT_GRADE_COLUMN_COUNT - 1,
        carryTop: true,
      };
    }

    function buildStudentCsatColumnDescriptors(sheet, headerRows = [], range = null) {
      const descriptors = [];
      const subjectOrderMap = new Map();
      let lastSubject = "";
      const start = range && isValidColumnIndex(range.start) ? range.start : CSAT_COLUMN_START;
      const end = range && isValidColumnIndex(range.end) ? range.end : CSAT_COLUMN_END;
      for (let colIndex = start; colIndex <= end; colIndex += 1) {
        const subjectHeader = range && range.carryTop
          ? getCarriedHeaderValue(sheet, headerRows, 0, colIndex, start)
          : getMergedHeaderValue(sheet, headerRows, 0, colIndex);
        if (subjectHeader) lastSubject = subjectHeader;
        const subject = lastSubject || getMergedHeaderValue(sheet, headerRows, 1, colIndex) || "기타";
        const detailLabel = getMergedHeaderValue(sheet, headerRows, 1, colIndex)
          || getMergedHeaderValue(sheet, headerRows, 2, colIndex)
          || "값";
        if (!subject && !detailLabel) continue;
        if (!subjectOrderMap.has(subject)) {
          subjectOrderMap.set(subject, subjectOrderMap.size);
        }
        descriptors.push({
          colIndex,
          subject,
          label: detailLabel,
          subjectOrder: subjectOrderMap.get(subject),
          entryOrder: descriptors.length,
        });
      }
      return descriptors;
    }

    function normalizeStudentCsatProfile(profile = []) {
      if (!Array.isArray(profile)) return [];
      return profile
        .map((group, groupIndex) => {
          const subject = safe(group && group.subject) || `과목 ${groupIndex + 1}`;
          const order = Number.isFinite(group && group.order) ? group.order : groupIndex;
          const entries = Array.isArray(group && group.entries)
            ? group.entries
              .map((entry, entryIndex) => ({
                label: safe(entry && entry.label) || "값",
                value: safe(entry && entry.value),
                order: Number.isFinite(entry && entry.order) ? entry.order : entryIndex,
              }))
              .filter((entry) => entry.value)
              .sort((a, b) => a.order - b.order)
            : [];
          if (!entries.length) return null;
          return { subject, order, entries };
        })
        .filter(Boolean)
        .sort((a, b) => a.order - b.order);
    }

    function createStudentCsatProfileFromRow(row = [], descriptors = []) {
      const grouped = new Map();
      descriptors.forEach((descriptor) => {
        const value = safe(row[descriptor.colIndex]);
        if (!value) return;
        if (!grouped.has(descriptor.subject)) {
          grouped.set(descriptor.subject, {
            subject: descriptor.subject,
            order: descriptor.subjectOrder,
            entries: [],
          });
        }
        grouped.get(descriptor.subject).entries.push({
          label: descriptor.label || "값",
          value,
          order: descriptor.entryOrder,
        });
      });
      return normalizeStudentCsatProfile(Array.from(grouped.values()));
    }

    function mergeStudentCsatProfiles(baseProfile = [], incomingProfile = []) {
      const mergedGroups = new Map();
      const upsertProfile = (profile) => {
        normalizeStudentCsatProfile(profile).forEach((group) => {
          if (!mergedGroups.has(group.subject)) {
            mergedGroups.set(group.subject, {
              subject: group.subject,
              order: group.order,
              entries: [],
            });
          }
          const targetGroup = mergedGroups.get(group.subject);
          targetGroup.order = Math.min(targetGroup.order, group.order);
          group.entries.forEach((entry) => {
            const existingEntry = targetGroup.entries.find((item) => item.label === entry.label);
            if (!existingEntry) {
              targetGroup.entries.push({ ...entry });
              return;
            }
            existingEntry.order = Math.min(existingEntry.order, entry.order);
            if (!existingEntry.value && entry.value) {
              existingEntry.value = entry.value;
            }
          });
        });
      };
      upsertProfile(baseProfile);
      upsertProfile(incomingProfile);
      return normalizeStudentCsatProfile(Array.from(mergedGroups.values()));
    }

    function mergeStudentCsatMaps(targetMap, sourceMap) {
      if (!(targetMap instanceof Map) || !(sourceMap instanceof Map)) return targetMap;
      sourceMap.forEach((profile, studentKey) => {
        const mergedProfile = mergeStudentCsatProfiles(targetMap.get(studentKey), profile);
        if (mergedProfile.length) {
          targetMap.set(studentKey, mergedProfile);
        }
      });
      return targetMap;
    }

    function serializeStudentCsatMap(studentCsatByKey = new Map()) {
      const serialized = {};
      if (!(studentCsatByKey instanceof Map)) return serialized;
      studentCsatByKey.forEach((profile, studentKey) => {
        const normalizedProfile = normalizeStudentCsatProfile(profile);
        if (normalizedProfile.length) {
          serialized[studentKey] = normalizedProfile;
        }
      });
      return serialized;
    }

    function packStudentCsatMapForShared(serialized = {}) {
      if (!serialized || typeof serialized !== "object") return { v: 1, fields: [], rows: [] };
      const fields = [];
      const fieldIndex = new Map();
      const rows = [];
      Object.entries(serialized).forEach(([studentKey, profile]) => {
        const values = [];
        normalizeStudentCsatProfile(profile).forEach((group) => {
          group.entries.forEach((entry) => {
            const fieldKey = `${group.subject}\u001f${entry.label}`;
            let index = fieldIndex.get(fieldKey);
            if (index === undefined) {
              index = fields.length;
              fieldIndex.set(fieldKey, index);
              fields.push([group.subject, entry.label]);
            }
            values[index] = entry.value;
          });
        });
        if (values.some((value) => safe(value))) {
          rows.push([studentKey, values]);
        }
      });
      return { v: 1, fields, rows };
    }

    function restoreStudentCsatMap(rawValue) {
      const restored = new Map();
      if (!rawValue || typeof rawValue !== "object") return restored;
      if (rawValue.v === 1 && Array.isArray(rawValue.fields) && Array.isArray(rawValue.rows)) {
        rawValue.rows.forEach((row) => {
          const studentKey = safe(Array.isArray(row) ? row[0] : "");
          const values = Array.isArray(row) && Array.isArray(row[1]) ? row[1] : [];
          if (!studentKey || !values.length) return;
          const grouped = new Map();
          rawValue.fields.forEach((field, fieldIndex) => {
            const value = values[fieldIndex];
            if (!safe(value)) return;
            const subject = safe(Array.isArray(field) ? field[0] : "") || "기타";
            const label = safe(Array.isArray(field) ? field[1] : "") || "값";
            if (!grouped.has(subject)) {
              grouped.set(subject, { subject, order: grouped.size, entries: [] });
            }
            grouped.get(subject).entries.push({ label, value, order: fieldIndex });
          });
          const normalizedProfile = normalizeStudentCsatProfile(Array.from(grouped.values()));
          if (normalizedProfile.length) restored.set(studentKey, normalizedProfile);
        });
        return restored;
      }
      Object.entries(rawValue).forEach(([studentKey, profile]) => {
        const normalizedProfile = normalizeStudentCsatProfile(profile);
        if (normalizedProfile.length) {
          restored.set(studentKey, normalizedProfile);
        }
      });
      return restored;
    }

    /* ── 교과(군)별 내신성적 ── */
    function buildSubjectGradeDescriptors(sheet, headerRows = [], range = null) {
      const descriptors = [];
      const start = range && isValidColumnIndex(range.start) ? range.start : SUBJECT_GRADE_COL_START;
      const end = range && isValidColumnIndex(range.end) ? range.end : SUBJECT_GRADE_COL_END;
      for (let colIndex = start; colIndex <= end; colIndex++) {
        const topLabel = range && range.carryTop
          ? getCarriedHeaderValue(sheet, headerRows, 0, colIndex, start)
          : getMergedHeaderValue(sheet, headerRows, 0, colIndex);
        const detailLabel = getMergedHeaderValue(sheet, headerRows, 1, colIndex)
          || getMergedHeaderValue(sheet, headerRows, 2, colIndex);
        const label = [topLabel, detailLabel]
          .map((part) => safe(part))
          .filter(Boolean)
          .filter((part, index, parts) => parts.indexOf(part) === index)
          .join(" ");
        if (!label) continue;
        descriptors.push({
          colIndex,
          group: topLabel || "기타",
          label: detailLabel || topLabel || "값",
          order: descriptors.length,
        });
      }
      return descriptors;
    }
    function createSubjectGradeFromRow(row = [], descriptors = []) {
      return descriptors
        .map(d => {
          const raw = safe(row[d.colIndex]);
          if (!raw) return null;
          const num = parseFloat(raw);
          return {
            group: safe(d.group) || "기타",
            label: safe(d.label) || "값",
            value: Number.isFinite(num) ? num : raw,
            order: Number.isFinite(d.order) ? d.order : 0,
          };
        })
        .filter(Boolean);
    }
    function mergeSubjectGradeMaps(target, source) {
      if (!(target instanceof Map) || !(source instanceof Map)) return target;
      source.forEach((grades, key) => {
        if (!target.has(key) && grades.length) target.set(key, grades);
      });
      return target;
    }
    function serializeSubjectGradeMap(map = new Map()) {
      const out = {};
      if (!(map instanceof Map)) return out;
      map.forEach((grades, key) => { if (grades.length) out[key] = grades; });
      return out;
    }
    function packSubjectGradeMapForShared(serialized = {}) {
      if (!serialized || typeof serialized !== "object") return { v: 1, fields: [], rows: [] };
      const fields = [];
      const fieldIndex = new Map();
      const rows = [];
      Object.entries(serialized).forEach(([studentKey, grades]) => {
        if (!Array.isArray(grades) || !grades.length) return;
        const values = [];
        grades.forEach((grade, gradeIndex) => {
          const normalized = normalizeSubjectGradeEntry(grade, gradeIndex);
          const fieldKey = `${normalized.group}\u001f${normalized.label}`;
          let index = fieldIndex.get(fieldKey);
          if (index === undefined) {
            index = fields.length;
            fieldIndex.set(fieldKey, index);
            fields.push([normalized.group, normalized.label]);
          }
          values[index] = normalized.value;
        });
        if (values.some((value) => safe(value))) {
          rows.push([studentKey, values]);
        }
      });
      return { v: 1, fields, rows };
    }
    function restoreSubjectGradeMap(raw) {
      const m = new Map();
      if (!raw || typeof raw !== "object") return m;
      if (raw.v === 1 && Array.isArray(raw.fields) && Array.isArray(raw.rows)) {
        raw.rows.forEach((row) => {
          const studentKey = safe(Array.isArray(row) ? row[0] : "");
          const values = Array.isArray(row) && Array.isArray(row[1]) ? row[1] : [];
          if (!studentKey || !values.length) return;
          const grades = [];
          raw.fields.forEach((field, fieldIndex) => {
            const value = values[fieldIndex];
            if (!safe(value)) return;
            grades.push({
              group: safe(Array.isArray(field) ? field[0] : "") || "기타",
              label: safe(Array.isArray(field) ? field[1] : "") || "값",
              value,
              order: fieldIndex,
            });
          });
          if (grades.length) m.set(studentKey, grades);
        });
        return m;
      }
      Object.entries(raw).forEach(([k, v]) => { if (Array.isArray(v) && v.length) m.set(k, v); });
      return m;
    }

    function readRowValue(row = [], colIndex = null) {
      if (!Array.isArray(row) || !isValidColumnIndex(colIndex)) return "";
      return row[colIndex];
    }

    function normalizeStudentIdentityPart(value) {
      const raw = safe(value);
      if (!raw) return "";
      const numeric = Number(raw);
      if (Number.isFinite(numeric) && Number.isInteger(numeric)) {
        return String(numeric);
      }
      return raw;
    }

    function buildStudentKeyFromRow(row = [], columns = {}) {
      const legacyKey = safe(readRowValue(row, columns.student_key));
      if (legacyKey) return legacyKey;
      const grade = normalizeStudentIdentityPart(readRowValue(row, columns.grade));
      const classNo = normalizeStudentIdentityPart(readRowValue(row, columns.class_no));
      const studentNo = normalizeStudentIdentityPart(readRowValue(row, columns.student_no));
      if (!grade || !classNo || !studentNo) return "";
      return `G${grade}-C${classNo}-N${studentNo}`;
    }

    function readAcademicYearFromRow(row = [], columns = {}, fallbackYear = null) {
      const parsed = parseAcademicYear(readRowValue(row, columns.academic_year));
      return parsed !== null ? parsed : fallbackYear;
    }

    function extractAcademicYearCandidatesFromFilename(fileLabel = "") {
      const matches = safe(fileLabel).match(/(?:^|[^0-9])(20[0-9]{2})(?![0-9])/g) || [];
      const candidates = matches
        .map((match) => {
          const yearMatch = match.match(/20[0-9]{2}/);
          return yearMatch ? parseAcademicYear(yearMatch[0]) : null;
        })
        .filter((year) => year !== null);
      return Array.from(new Set(candidates));
    }

    function parseAcademicYearInput(value = "") {
      const candidates = extractAcademicYearCandidatesFromFilename(value);
      return candidates.length === 1 ? candidates[0] : null;
    }

    function resolveAcademicYearFallbackFromFilename(fileLabel = "", layout = null) {
      if (!layout || layout.type !== "school") return null;
      if (layout.columns && isValidColumnIndex(layout.columns.academic_year)) return null;
      const candidates = extractAcademicYearCandidatesFromFilename(fileLabel);
      const defaultValue = candidates.length ? String(candidates[0]) : "";
      const candidateText = candidates.length
        ? `파일명에서 학년도 후보를 찾았습니다: ${candidates.join(", ")}`
        : "파일명에서 20NN 형식의 학년도를 찾지 못했습니다.";
      const entered = window.prompt(
        `${fileLabel}: '학년도' 열을 찾지 못했습니다.\n${candidateText}\n사용할 학년도를 직접 입력하거나 기본값을 확인해주세요. 비워두면 학년도 없이 처리합니다.`,
        defaultValue
      );
      if (entered === null || !safe(entered)) return null;
      const selected = parseAcademicYearInput(entered);
      if (selected === null) {
        window.alert(`${fileLabel}: 학년도는 2024처럼 20NN 형식으로 입력해주세요. 학년도 없이 처리합니다.`);
        return null;
      }
      return selected;
    }

    function safe(v) { return v === undefined || v === null ? "" : String(v).trim(); }
    function parseGrade(v) { const n = parseFloat(v); return Number.isFinite(n) ? n : null; }
    function parseRegistration(v) {
      const raw = safe(v).toUpperCase();
      return raw === "Y" || raw === "N" ? raw : "";
    }
    function parseAcademicYear(v) {
      const n = parseInt(v, 10);
      return Number.isFinite(n) ? n : null;
    }
    function scopeStudentKeyByAcademicYear(studentKey, academicYear) {
      const raw = safe(studentKey);
      if (!raw || STUDENT_YEAR_KEY_PATTERN.test(raw)) return raw;
      const year = parseAcademicYear(academicYear);
      return year ? `Y${year}::${raw}` : raw;
    }
    function getUnscopedStudentKey(studentKey) {
      return safe(studentKey).replace(STUDENT_YEAR_KEY_PATTERN, "");
    }
    function parseIsRural(v) {
      const raw = safe(v).trim();
      // Handle Unicode circle symbols (○ U+25CB, ◯ U+25EF, ● U+25CF) as well as ASCII O/o
      if (raw === "○" || raw === "◯" || raw === "●" || raw.toUpperCase() === "O") return "O";
      if (raw === "×" || raw === "✕" || raw === "✗" || raw.toUpperCase() === "X") return "X";
      return "";
    }
    function parseEnrollmentCount(v) {
      const n = parseInt(v, 10);
      return Number.isFinite(n) && n >= 0 ? n : null;
    }
    function createStudentKeyResolver() {
      const keyMap = new Map();
      let nextSeq = 1;
      return (recordLike, fallbackIndex = 0) => {
        if (safe(recordLike.student_key)) return recordLike.student_key;
        const identityParts = [
          safe(recordLike.grade),
          safe(recordLike.class_no),
          safe(recordLike.student_no),
          safe(recordLike.student_name),
        ];
        const hasIdentity = identityParts.some(Boolean);
        if (!hasIdentity) {
          return `S${String(fallbackIndex + 1).padStart(5, "0")}`;
        }
        const identityKey = identityParts.join("|||");
        if (!keyMap.has(identityKey)) {
          keyMap.set(identityKey, `S${String(nextSeq).padStart(5, "0")}`);
          nextSeq += 1;
        }
        return keyMap.get(identityKey);
      };
    }
    function normalizeLoadedRecord(rawRecord, fallbackIndex = 0, resolveStudentKey = null) {
      const normalized = {
        student_key: safe(rawRecord.student_key) || `S${String(fallbackIndex + 1).padStart(5, "0")}`,
        academic_year: parseAcademicYear(rawRecord.academic_year),
        school_location: safe(rawRecord.school_location),
        is_rural: parseIsRural(rawRecord.is_rural),
        region: safe(rawRecord.region),
        univ: safe(rawRecord.univ),
        apptype: safe(rawRecord.apptype),
        subtype: safe(rawRecord.subtype),
        dept: safe(rawRecord.dept),
        enrollment_count: parseEnrollmentCount(rawRecord.enrollment_count),
        selection_type: safe(rawRecord.selection_type),
        result: safe(rawRecord.result),
        registered_yn: parseRegistration(rawRecord.registered_yn),
        all_subj_grade: parseGrade(rawRecord.all_subj_grade),
        conv_grade: parseGrade(rawRecord.conv_grade),
        conv_grade_ext: parseGrade(rawRecord.conv_grade_ext),
      };
      if (!normalized.student_key || normalized.student_key.startsWith("S0")) {
        normalized.student_key = safe(rawRecord.student_key) || (typeof resolveStudentKey === "function"
          ? resolveStudentKey(rawRecord, fallbackIndex)
          : `S${String(fallbackIndex + 1).padStart(5, "0")}`);
      }
      normalized.student_key = scopeStudentKeyByAcademicYear(normalized.student_key, normalized.academic_year);
      return normalized;
    }
    function normalizeLoadedRecords(rawRecords = []) {
      const resolveStudentKey = createStudentKeyResolver();
      return rawRecords.map((rawRecord, index) => normalizeLoadedRecord(rawRecord, index, resolveStudentKey));
    }
    function getAvailableYears(records) {
      const years = new Set();
      records.forEach(r => { if (r.academic_year) years.add(r.academic_year); });
      return Array.from(years).sort((a, b) => a - b);
    }
    function filterRecordsByYear(records, yearFilter) {
      if (yearFilter === "all") return records;
      const year = parseInt(yearFilter, 10);
      return records.filter(r => r.academic_year === year);
    }
    function deriveLocationType(schoolLocation) {
      const loc = safe(schoolLocation);
      if (!loc) return "";
      const lastChar = loc.charAt(loc.length - 1);
      if (lastChar === "시") return "시";
      if (lastChar === "군") return "군";
      return "";
    }
    function filterRecordsByLocation(records, locationFilter) {
      if (locationFilter === "all") return records;
      if (locationFilter === "농어촌") return records.filter(r => r.is_rural === "O");
      return records.filter(r => deriveLocationType(r.school_location) === locationFilter);
    }
    function applyGlobalFilters(allRecords) {
      let filtered = filterRecordsByYear(allRecords, filterState.yearFilter);
      filtered = filterRecordsByLocation(filtered, filterState.locationFilter);
      return filtered;
    }
    function hasMultipleLocationTypes(records) {
      let hasSi = false, hasGun = false, hasRural = false;
      for (const r of records) {
        const t = deriveLocationType(r.school_location);
        if (t === "시") hasSi = true;
        if (t === "군") hasGun = true;
        if (r.is_rural === "O") hasRural = true;
        if (hasSi && hasGun) return true;
        if (hasRural && (hasSi || hasGun)) return true;
      }
      return hasRural && (hasSi || hasGun);
    }
    function hasRuralRecords(records) {
      return records.some(r => r.is_rural === "O");
    }
    function formatAcademicYearScope(records = []) {
      const years = getAvailableYears(records);
      if (!years.length) return "";
      if (years.length === 1) return `${years[0]}학년도`;
      if (years.length <= 3) return `${years.join("·")}학년도`;
      return `${years[0]}~${years[years.length - 1]}학년도`;
    }
    function buildAcademicYearTitleSuffix(records = []) {
      const scope = formatAcademicYearScope(records);
      return scope ? ` (${scope})` : "";
    }
    function buildChartExportTitle(baseTitle, records = [], contextLabel = "") {
      const meta = [];
      if (contextLabel) meta.push(String(contextLabel));
      const scope = formatAcademicYearScope(records);
      if (scope) meta.push(scope);
      return meta.length ? `${baseTitle} - ${meta.join(" · ")}` : baseTitle;
    }
    function buildChartExportFilenameBase(baseLabel, records = [], contextLabel = "") {
      const parts = [baseLabel];
      if (contextLabel) parts.push(String(contextLabel));
      const scope = formatAcademicYearScope(records);
      if (scope) parts.push(scope);
      return parts.join("_");
    }
    function escapeHtml(v) {
      return String(v ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/\"/g, "&quot;")
        .replace(/'/g, "&#39;");
    }
    function sanitizeFilenamePart(v) {
      return String(v ?? "")
        .trim()
        .replace(/[\\/:*?"<>|]+/g, "_")
        .replace(/\s+/g, " ")
        .slice(0, 80) || "상세데이터";
    }
    function serializeForInlineScript(value) {
      return JSON.stringify(value)
        .replace(/</g, "\\u003c")
        .replace(/>/g, "\\u003e")
        .replace(/&/g, "\\u0026")
        .replace(/\u2028/g, "\\u2028")
        .replace(/\u2029/g, "\\u2029");
    }
    function escapeInlineScriptContent(text) {
      return String(text || "").replace(/<\/script/gi, "<\\/script");
    }
    function getCurrentReportUiState() {
      const activeTabBtn = document.querySelector("#report-tabs .tab-btn.active");
      return {
        activeTab: normalizeReportTabName(activeTabBtn ? activeTabBtn.dataset.tab : "summary"),
        gradeBandModes: { ...filterState.gradeBandModesByPlot },
        univTopMode: filterState.univTopDisplayMode,
        univTopSort: filterState.univTopSortKey,
        univDirectorySort: filterState.univDirectorySortKey,
        univFinderQuery: safe(document.getElementById("univ-directory-search")?.value),
        univFinderSelection: Array.isArray(filterState.selectedUnivKeys) ? [...filterState.selectedUnivKeys] : [],
        deptFinderGroupingMode: filterState.deptFinderGroupingMode || DEFAULT_DEPT_FINDER_GROUPING_MODE,
        deptFinderQuery: safe(document.getElementById("dept-finder-search")?.value),
        deptFinderSelection: Array.isArray(filterState.selectedDeptKeys) ? [...filterState.selectedDeptKeys] : [],
        subtypeFinderQuery: safe(document.getElementById("subtype-finder-search")?.value),
        subtypeFinderSelection: Array.isArray(filterState.selectedSubtypeKeys) ? [...filterState.selectedSubtypeKeys] : [],
        conditionAnalytics: {
          active: analyticsViewState.conditionTab.active,
          criteria: analyticsViewState.conditionTab.criteria ? JSON.parse(JSON.stringify(analyticsViewState.conditionTab.criteria)) : null,
        },
        univAnalytics: {
          active: analyticsViewState.univTab.active,
          univ: analyticsViewState.univTab.entries[0] ? analyticsViewState.univTab.entries[0].univ : (analyticsViewState.univTab.univ || ""),
          entries: analyticsViewState.univTab.entries.map((entry) => ({ key: entry.key, univ: entry.univ })),
        },
        deptAnalytics: { active: analyticsViewState.deptTab.active, entries: analyticsViewState.deptTab.entries.map(e => ({ ...e })) },
        subtypeAnalytics: { active: analyticsViewState.subtypeTab.active, entries: analyticsViewState.subtypeTab.entries.map(e => ({ ...e })) },
      };
    }
    function buildPlotExportMenu(targetId, filenameBase, exportTitle = "") {
      return `<div class="chart-export-menu" data-chart-export-menu="true">
        <button type="button" class="chart-action-btn is-icon-only" data-chart-export-toggle="true" aria-expanded="false" aria-haspopup="menu" aria-label="차트 내보내기" title="차트를 이미지로 저장합니다.">
          <span class="chart-action-btn-content">
            <svg class="chart-action-icon" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
              <path d="M8 1.5a.75.75 0 0 1 .75.75v6.19l1.97-1.97a.75.75 0 1 1 1.06 1.06L8.53 10.81a.75.75 0 0 1-1.06 0L4.22 7.56a.75.75 0 1 1 1.06-1.06l1.97 1.97V2.25A.75.75 0 0 1 8 1.5Z" fill="currentColor"></path>
              <path d="M3 11.5a1 1 0 0 0-1 1V13a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 14 13v-.5a1 1 0 1 0-2 0v.5a.5.5 0 0 1-.5.5h-7A.5.5 0 0 1 4 13v-.5a1 1 0 0 0-1-1Z" fill="currentColor"></path>
            </svg>
          </span>
        </button>
        <div class="chart-export-popover" data-chart-export-popover="true" role="menu" hidden>
          <button type="button" class="chart-export-option" role="menuitem" data-plot-export-target="${escapeHtml(targetId)}" data-plot-export-format="png" data-plot-export-name="${escapeHtml(filenameBase)}" data-plot-export-title="${escapeHtml(exportTitle)}" title="메신저 공유나 빠른 첨부용은 PNG가 편합니다.">PNG 저장</button>
          <button type="button" class="chart-export-option" role="menuitem" data-plot-export-target="${escapeHtml(targetId)}" data-plot-export-format="svg" data-plot-export-name="${escapeHtml(filenameBase)}" data-plot-export-title="${escapeHtml(exportTitle)}" title="문서 삽입과 확대용은 SVG를 권장합니다.">SVG 저장</button>
        </div>
      </div>`;
    }
    function buildPlotTableButton(targetId) {
      return `<button type="button" class="chart-action-btn is-icon-only" data-plot-table-target="${escapeHtml(targetId)}" aria-label="차트 데이터를 표로 보기" title="차트 데이터를 표로 봅니다.">
        <span class="chart-action-btn-content">
          <svg class="chart-action-icon" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
            <path d="M2.25 2.5A1.25 1.25 0 0 1 3.5 1.25h9A1.25 1.25 0 0 1 13.75 2.5v11A1.25 1.25 0 0 1 12.5 14.75h-9A1.25 1.25 0 0 1 2.25 13.5v-11Zm1.5.25v2h8.5v-2h-8.5Zm8.5 3.5h-2.5v2h2.5v-2Zm0 3.5h-2.5v2h2.5v-2Zm-4 0h-4.5v2h4.5v-2Zm-4.5-3.5v2h4.5v-2h-4.5Z" fill="currentColor"></path>
          </svg>
        </span>
      </button>`;
    }
    function buildPlotExportButtons(targetId, filenameBase, exportTitle = "") {
      return `<div class="chart-action-group">${buildPlotExportMenu(targetId, filenameBase, exportTitle)}</div>`;
    }
    function buildPlotChartActionButtons(targetId, filenameBase, exportTitle = "", includeTable = false) {
      return `<div class="chart-action-group">
        ${includeTable ? buildPlotTableButton(targetId) : ""}
        ${buildPlotExportMenu(targetId, filenameBase, exportTitle)}
      </div>`;
    }
    function registerChartTableConfig(targetId, config) {
      if (!targetId || !config) return;
      renderState.chartTableRegistry[targetId] = config;
    }
    function sanitizeRecordsForShared(records) {
      return records.map((record, index) => {
        const normalized = normalizeLoadedRecord(record, index);
        return {
          student_key: normalized.student_key || `S${String(index + 1).padStart(5, "0")}`,
          academic_year: normalized.academic_year,
          school_location: normalized.school_location,
          is_rural: normalized.is_rural,
          region: normalized.region,
          univ: normalized.univ,
          apptype: normalized.apptype,
          subtype: normalized.subtype,
          dept: normalized.dept,
          enrollment_count: normalized.enrollment_count,
          selection_type: normalized.selection_type,
          result: normalized.result,
          registered_yn: normalized.registered_yn,
          all_subj_grade: normalized.all_subj_grade,
          conv_grade: normalized.conv_grade,
          conv_grade_ext: normalized.conv_grade_ext,
        };
      });
    }
    function packRecordsForShared(records = []) {
      return {
        v: 1,
        fields: SHARED_EXPORT_RECORD_FIELDS,
        rows: sanitizeRecordsForShared(records).map((record) => (
          SHARED_EXPORT_RECORD_FIELDS.map((field) => {
            const value = record[field];
            return value === undefined ? null : value;
          })
        )),
      };
    }
    function unpackSharedRecords(rawValue) {
      if (Array.isArray(rawValue)) return rawValue;
      if (!rawValue || typeof rawValue !== "object") return [];
      if (rawValue.v !== 1 || !Array.isArray(rawValue.fields) || !Array.isArray(rawValue.rows)) return [];
      return rawValue.rows.map((row, index) => {
        const record = {};
        rawValue.fields.forEach((field, fieldIndex) => {
          record[field] = Array.isArray(row) ? row[fieldIndex] : null;
        });
        if (!safe(record.student_key)) {
          record.student_key = `S${String(index + 1).padStart(5, "0")}`;
        }
        return record;
      });
    }
    function arrayBufferToBase64(buffer) {
      const bytes = buffer instanceof Uint8Array ? buffer : new Uint8Array(buffer);
      let binary = "";
      const chunkSize = 0x8000;
      for (let index = 0; index < bytes.length; index += chunkSize) {
        binary += String.fromCharCode(...bytes.subarray(index, index + chunkSize));
      }
      return btoa(binary);
    }
    async function derivePasswordKey(password, salt, keyUsages) {
      if (!window.crypto || !window.crypto.subtle) {
        throw new Error("현재 브라우저는 암호 보호 HTML 저장을 지원하지 않습니다.");
      }
      const encoder = new TextEncoder();
      const baseKey = await crypto.subtle.importKey(
        "raw",
        encoder.encode(password),
        "PBKDF2",
        false,
        ["deriveKey"]
      );
      return crypto.subtle.deriveKey(
        {
          name: "PBKDF2",
          salt,
          iterations: 250000,
          hash: "SHA-256",
        },
        baseKey,
        {
          name: "AES-GCM",
          length: 256,
        },
        false,
        keyUsages
      );
    }
    async function encryptExportPayload(password, payload) {
      const encoder = new TextEncoder();
      const salt = crypto.getRandomValues(new Uint8Array(16));
      const iv = crypto.getRandomValues(new Uint8Array(12));
      const key = await derivePasswordKey(password, salt, ["encrypt"]);
      const ciphertext = await crypto.subtle.encrypt(
        {
          name: "AES-GCM",
          iv,
        },
        key,
        encoder.encode(JSON.stringify(payload))
      );
      return {
        salt: arrayBufferToBase64(salt),
        iv: arrayBufferToBase64(iv),
        ciphertext: arrayBufferToBase64(ciphertext),
        iterations: 250000,
      };
    }
    function buildProtectedHtmlBootstrap(encryptedPayload) {
      return `
(() => {
  const encryptedPayload = ${JSON.stringify(encryptedPayload)};
  const ns = (window.SusiApp = window.SusiApp || { preloaded: {} });
  ns.preloaded = ns.preloaded || {};
  ns.preloaded.buildUtc = new Date().toISOString();
  ns.preloaded.shared = true;

  const style = document.createElement("style");
  style.textContent = \`
body.protected-export-locked {
  overflow: hidden;
}
#protectedSharedOverlay {
  position: fixed;
  inset: 0;
  z-index: 20000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: rgba(15, 23, 42, 0.56);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}
#protectedSharedOverlay .overlay-card {
  width: min(100%, 420px);
  background: #ffffff;
  border-radius: 20px;
  padding: 28px;
  box-shadow: 0 24px 60px rgba(15, 23, 42, 0.22);
  border: 1px solid rgba(15, 23, 42, 0.08);
}
#protectedSharedOverlay h2 {
  margin: 0 0 10px 0;
  font-size: 1.25rem;
  color: #0f172a;
}
#protectedSharedOverlay p {
  margin: 0 0 16px 0;
  color: #475569;
  line-height: 1.55;
  font-size: 0.93rem;
}
#protectedSharedOverlay input {
  width: 100%;
  padding: 12px 14px;
  border-radius: 10px;
  border: 1px solid #cbd5e1;
  font-size: 1rem;
  margin-bottom: 12px;
  box-sizing: border-box;
}
#protectedSharedOverlay button {
  width: 100%;
  border: none;
  border-radius: 10px;
  padding: 12px 14px;
  background: #111827;
  color: #ffffff;
  font-size: 0.98rem;
  font-weight: 600;
  cursor: pointer;
}
#protectedSharedOverlay button:disabled {
  opacity: 0.6;
  cursor: wait;
}
#protectedSharedStatus {
  min-height: 1.2em;
  margin-top: 12px;
  color: #b91c1c;
  font-size: 0.88rem;
}
\`;
  document.head.appendChild(style);

  const showOverlay = () => {
    document.body.classList.add("protected-export-locked");
    const overlay = document.createElement("div");
    overlay.id = "protectedSharedOverlay";
    overlay.innerHTML = \`
      <div class="overlay-card">
        <h2>암호 보호된 공유 보고서</h2>
        <p>이 파일은 열기 암호가 맞아야 분석 결과를 복호화해서 보여줍니다.</p>
        <input id="protectedSharedPassword" type="password" placeholder="열기 암호 입력" autocomplete="current-password">
        <button id="protectedSharedUnlock">열기</button>
        <div id="protectedSharedStatus"></div>
      </div>
    \`;
    document.body.appendChild(overlay);

    const passwordInput = document.getElementById("protectedSharedPassword");
    const unlockButton = document.getElementById("protectedSharedUnlock");
    const statusEl = document.getElementById("protectedSharedStatus");

    const base64ToBytes = (base64) => {
      const binary = atob(base64);
      const bytes = new Uint8Array(binary.length);
      for (let i = 0; i < binary.length; i++) {
        bytes[i] = binary.charCodeAt(i);
      }
      return bytes;
    };

    const unlock = async () => {
      const password = passwordInput ? passwordInput.value : "";
      if (!password) {
        if (statusEl) statusEl.textContent = "암호를 입력하세요.";
        if (passwordInput) passwordInput.focus();
        return;
      }

      unlockButton.disabled = true;
      if (statusEl) statusEl.textContent = "암호 확인 중...";

      try {
        const salt = base64ToBytes(encryptedPayload.salt);
        const iv = base64ToBytes(encryptedPayload.iv);
        const ciphertext = base64ToBytes(encryptedPayload.ciphertext);
        const encoder = new TextEncoder();
        const baseKey = await crypto.subtle.importKey(
          "raw",
          encoder.encode(password),
          "PBKDF2",
          false,
          ["deriveKey"]
        );
        const key = await crypto.subtle.deriveKey(
          {
            name: "PBKDF2",
            salt,
            iterations: encryptedPayload.iterations,
            hash: "SHA-256",
          },
          baseKey,
          {
            name: "AES-GCM",
            length: 256,
          },
          false,
          ["decrypt"]
        );
        const decrypted = await crypto.subtle.decrypt({ name: "AES-GCM", iv }, key, ciphertext);
        const payload = JSON.parse(new TextDecoder().decode(decrypted));
        ns.preloaded.data = payload.analysisData;
        ns.preloaded.studentCsat = payload.studentCsatData || {};
        ns.preloaded.subjectGrade = payload.subjectGradeData || {};
        ns.preloaded.uiState = payload.uiState;
        document.body.classList.remove("protected-export-locked");
        overlay.remove();

        const initializeDecryptedView = async () => {
          if (ns && typeof ns.bootstrap === "function") {
            await ns.bootstrap();
          }
        };

        if (document.readyState === "loading") {
          document.addEventListener("DOMContentLoaded", () => {
            initializeDecryptedView();
          }, { once: true });
        } else {
          await initializeDecryptedView();
        }
      } catch (error) {
        if (statusEl) statusEl.textContent = "암호가 올바르지 않거나 파일이 손상되었습니다.";
        if (passwordInput) {
          passwordInput.focus();
          passwordInput.select();
        }
      } finally {
        unlockButton.disabled = false;
      }
    };

    unlockButton.addEventListener("click", unlock);
    if (passwordInput) {
      passwordInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          event.preventDefault();
          unlock();
        }
      });
      setTimeout(() => passwordInput.focus(), 0);
    }
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", showOverlay, { once: true });
  } else {
    showOverlay();
  }
})();
`;
    }
    function buildReportTabLabel(tabName = "") {
      if (tabName === "summary") return "전체데이터요약";
      if (tabName === "condition") return "조건별조회";
      if (tabName === "univ") return "대학별조회";
      if (tabName === "dept") return "학과별조회";
      if (tabName === "subtype") return "전형세부유형별조회";
      if (tabName === "trend") return "지원경향조회";
      return "현재페이지";
    }
    function normalizeReportTabName(tabName = "summary") {
      if (tabName === "univ" || tabName === "dept" || tabName === "subtype") return "condition";
      if (tabName === "summary" || tabName === "condition" || tabName === "trend") return tabName;
      return "summary";
    }
    function buildActivePageFilenameSuggestion() {
      const uiState = getCurrentReportUiState();
      const activeTab = normalizeReportTabName(uiState.activeTab || "summary");
      const records = Array.isArray(dataState.reportRecords) ? dataState.reportRecords : [];

      if (activeTab === "condition") {
        const criteria = uiState.conditionAnalytics && uiState.conditionAnalytics.active
          ? normalizeConditionCriteria(uiState.conditionAnalytics.criteria, records)
          : getSelectedConditionCriteria(records);
        if (hasConditionCriteria(criteria)) return formatConditionCriteriaSummary(criteria);
        const queryParts = [
          uiState.univFinderQuery,
          uiState.deptFinderQuery,
          uiState.subtypeFinderQuery,
        ].filter(Boolean);
        if (queryParts.length) return queryParts.join("_");
        return buildReportTabLabel(activeTab);
      }

      if (activeTab === "univ") {
        if (uiState.univAnalytics && uiState.univAnalytics.active) {
          const selection = Array.isArray(uiState.univAnalytics.entries) && uiState.univAnalytics.entries.length
            ? uiState.univAnalytics.entries
            : (uiState.univAnalytics.univ || "");
          const entries = normalizeUnivAnalyticsEntries(selection, records);
          if (entries.length) return formatUnivSelectionSummary(entries);
        }
        const selectedEntries = getSelectedUnivEntries(getCachedUnivFinderEntries(records));
        if (selectedEntries.length) return formatUnivSelectionSummary(selectedEntries);
        if (uiState.univFinderQuery) return uiState.univFinderQuery;
        return buildReportTabLabel(activeTab);
      }

      if (activeTab === "dept") {
        if (uiState.deptAnalytics && uiState.deptAnalytics.active && Array.isArray(uiState.deptAnalytics.entries) && uiState.deptAnalytics.entries.length) {
          return formatDeptSelectionSummary(uiState.deptAnalytics.entries);
        }
        const selectedEntries = getSelectedDeptEntries(getCachedDeptFinderEntries(records, getDeptFinderGroupingMode()));
        if (selectedEntries.length) return formatDeptSelectionSummary(selectedEntries);
        if (uiState.deptFinderQuery) return uiState.deptFinderQuery;
        return buildReportTabLabel(activeTab);
      }

      if (activeTab === "subtype") {
        if (uiState.subtypeAnalytics && uiState.subtypeAnalytics.active) {
          const entries = normalizeSubtypeAnalyticsEntries(uiState.subtypeAnalytics.entries || [], records);
          if (entries.length) return formatSubtypeSelectionSummary(entries);
        }
        const selectedEntries = getSelectedSubtypeEntries(getCachedSubtypeFinderEntries(records));
        if (selectedEntries.length) return formatSubtypeSelectionSummary(selectedEntries);
        if (uiState.subtypeFinderQuery) return uiState.subtypeFinderQuery;
        return buildReportTabLabel(activeTab);
      }

      return buildReportTabLabel(activeTab);
    }
    function collectStudentKeysFromRecords(records = []) {
      const keySet = new Set();
      records.forEach((record) => {
        const studentKey = getStudentRecordKey(record);
        if (studentKey) keySet.add(studentKey);
      });
      return keySet;
    }
    function selectStudentMapEntries(sourceMap, keySet, anonMap = null) {
      const nextMap = new Map();
      if (!(sourceMap instanceof Map) || !(keySet instanceof Set) || !keySet.size) return nextMap;
      // anonMap이 주어지면 출력 맵의 키를 익명 코드로 바꿔, records.student_key와
      // 보조맵(수능/과목등급)의 키가 동일한 익명 키로 일치하도록 한다.
      const outKey = (realKey) => (anonMap && anonMap.has(realKey) ? anonMap.get(realKey) : realKey);
      keySet.forEach((key) => {
        if (sourceMap.has(key)) {
          nextMap.set(outKey(key), sourceMap.get(key));
          return;
        }
        const legacyKey = getUnscopedStudentKey(key);
        if (legacyKey && legacyKey !== key && sourceMap.has(legacyKey)) {
          nextMap.set(outKey(key), sourceMap.get(legacyKey));
        }
      });
      return nextMap;
    }
    // 공유 내보내기용 익명 키 매핑: 실제 student_key(학생고유코드 또는 학년-반-번호 기반)를
    // 순번 코드(A00001 …)로 변환한다. normalizeLoadedRecord가 academic_year로 키를 재스코프하므로
    // 익명 키도 같은 규칙으로 스코프해 두어, 패킹 후 records와 보조맵의 키가 어긋나지 않게 한다.
    function buildSharedKeyAnonymizer(records = []) {
      const map = new Map();
      let seq = 0;
      records.forEach((record) => {
        const realKey = getStudentRecordKey(record);
        if (!realKey || map.has(realKey)) return;
        seq += 1;
        const code = `A${String(seq).padStart(5, "0")}`;
        map.set(realKey, scopeStudentKeyByAcademicYear(code, record.academic_year));
      });
      return map;
    }
    function anonymizeRecordsForShared(records = [], anonMap = null) {
      if (!anonMap || !anonMap.size) return records;
      return records.map((record) => {
        const realKey = getStudentRecordKey(record);
        const anonKey = anonMap.get(realKey);
        return anonKey ? { ...record, student_key: anonKey } : record;
      });
    }
    function serializeStudentCsatMapForRecords(records = [], anonMap = null) {
      const keySet = collectStudentKeysFromRecords(records);
      return packStudentCsatMapForShared(serializeStudentCsatMap(selectStudentMapEntries(dataState.studentCsatByKey, keySet, anonMap)));
    }
    function serializeSubjectGradeMapForRecords(records = [], anonMap = null) {
      const keySet = collectStudentKeysFromRecords(records);
      return packSubjectGradeMapForShared(serializeSubjectGradeMap(selectStudentMapEntries(dataState.studentSubjectGradeByKey, keySet, anonMap)));
    }
    function buildFullSharedExportContext() {
      const uiState = JSON.parse(JSON.stringify(getCurrentReportUiState()));
      const records = Array.isArray(dataState.reportRecords) ? dataState.reportRecords : [];
      const anonMap = buildSharedKeyAnonymizer(records);
      return {
        records: anonymizeRecordsForShared(records, anonMap),
        uiState,
        studentCsatData: serializeStudentCsatMapForRecords(records, anonMap),
        subjectGradeData: serializeSubjectGradeMapForRecords(records, anonMap),
        filenameBase: "수시입시결과_공유용",
      };
    }
    function buildActivePageSharedExportContext() {
      const uiState = JSON.parse(JSON.stringify(getCurrentReportUiState()));
      const activeTab = normalizeReportTabName(uiState.activeTab || "summary");
      uiState.activeTab = activeTab;
      let records = Array.isArray(dataState.reportRecords) ? dataState.reportRecords : [];

      if (activeTab !== "condition") uiState.conditionAnalytics = { active: false, criteria: null };
      if (activeTab !== "univ") uiState.univAnalytics = { active: false, entries: [], univ: "" };
      if (activeTab !== "dept") uiState.deptAnalytics = { active: false, entries: [] };
      if (activeTab !== "subtype") uiState.subtypeAnalytics = { active: false, entries: [] };
      uiState.singleTabExport = { activeTab };

      if (activeTab === "condition" && uiState.conditionAnalytics && uiState.conditionAnalytics.active) {
        const criteria = normalizeConditionCriteria(uiState.conditionAnalytics.criteria, records);
        if (hasConditionCriteria(criteria)) {
          records = filterRecordsByConditionCriteria(records, criteria);
          uiState.conditionAnalytics = { active: true, criteria: serializeConditionCriteria(criteria) };
          uiState.univFinderSelection = criteria.univEntries.map((entry) => entry.key);
          uiState.deptFinderGroupingMode = criteria.deptGroupingMode || getDeptFinderGroupingMode();
          uiState.deptFinderSelection = criteria.deptEntries.map((entry) => entry.key);
          uiState.subtypeFinderSelection = criteria.subtypeEntries.map((entry) => entry.key);
        } else {
          uiState.conditionAnalytics = { active: false, criteria: null };
        }
      }

      if (activeTab === "univ" && uiState.univAnalytics && uiState.univAnalytics.active) {
        const univSelection = Array.isArray(uiState.univAnalytics.entries) && uiState.univAnalytics.entries.length
          ? uiState.univAnalytics.entries
          : (uiState.univAnalytics.univ || "");
        const entries = normalizeUnivAnalyticsEntries(univSelection, records);
        if (entries.length) {
          const selectedUnivs = new Set(entries.map((entry) => entry.univ));
          records = records.filter((record) => selectedUnivs.has(record.univ || "미상"));
          uiState.univFinderSelection = entries.map((entry) => entry.key);
        } else {
          uiState.univAnalytics = { active: false, entries: [], univ: "" };
        }
      }

      if (activeTab === "dept" && uiState.deptAnalytics && uiState.deptAnalytics.active) {
        const entries = Array.isArray(uiState.deptAnalytics.entries) ? uiState.deptAnalytics.entries : [];
        if (entries.length) {
          const keySet = new Set(entries.flatMap((entry) => getDeptFinderEntryMatchKeys(entry)));
          records = records.filter((record) => keySet.has(buildDeptFinderKey(record.univ, record.dept)));
        } else {
          uiState.deptAnalytics = { active: false, entries: [] };
        }
      }

      if (activeTab === "subtype" && uiState.subtypeAnalytics && uiState.subtypeAnalytics.active) {
        const entries = normalizeSubtypeAnalyticsEntries(uiState.subtypeAnalytics.entries || [], records);
        if (entries.length) {
          const keySet = new Set(entries.flatMap((entry) => getSubtypeFinderEntryMatchKeys(entry)));
          records = records.filter((record) => keySet.has(buildSubtypeFinderRecordKey(record.apptype, record.subtype)));
          uiState.subtypeAnalytics = { active: true, entries: entries.map((entry) => ({ key: entry.key, subtype: entry.subtype })) };
          uiState.subtypeFinderSelection = entries.map((entry) => entry.key);
        } else {
          uiState.subtypeAnalytics = { active: false, entries: [] };
        }
      }

      const anonMap = buildSharedKeyAnonymizer(records);
      return {
        records: anonymizeRecordsForShared(records, anonMap),
        uiState,
        studentCsatData: serializeStudentCsatMapForRecords(records, anonMap),
        subjectGradeData: serializeSubjectGradeMapForRecords(records, anonMap),
        filenameBase: `수시입시결과_${buildReportTabLabel(activeTab)}_현재페이지`,
      };
    }
    async function buildSharedHtmlDocument(records, uiState = {}, options = {}) {
      const password = typeof options.password === "string" ? options.password : "";
      const studentCsatData = options.studentCsatData && typeof options.studentCsatData === "object"
        ? options.studentCsatData
        : serializeStudentCsatMapForRecords(records);
      const subjectGradeData = options.subjectGradeData && typeof options.subjectGradeData === "object"
        ? options.subjectGradeData
        : serializeSubjectGradeMapForRecords(records);
      const parser = new DOMParser();
      const sourceHtml = "<!DOCTYPE html>\n" + document.documentElement.outerHTML;
      const doc = parser.parseFromString(sourceHtml, "text/html");
      const heroEl = doc.getElementById("landing-hero");
      const uploadEl = doc.getElementById("upload-panel");
      const reportNode = doc.getElementById("report");
      const statusNode = doc.getElementById("status");
      const modalNode = doc.getElementById("detail-modal");
      const sharedExportModalNode = doc.getElementById("shared-export-modal");
      if (heroEl) heroEl.hidden = true;
      if (uploadEl) uploadEl.hidden = true;
      if (reportNode) {
        reportNode.hidden = false;
        reportNode.innerHTML = "";
      }
      if (statusNode) statusNode.textContent = "";
      if (modalNode) {
        modalNode.hidden = true;
        modalNode.removeAttribute("style");
        const modalBody = modalNode.querySelector("#detail-modal-body");
        if (modalBody) modalBody.innerHTML = "";
      }
      if (sharedExportModalNode) {
        sharedExportModalNode.remove();
      }
      if (doc.body) {
        doc.body.style.overflow = "";
      }
      const existingPreloadScript = doc.getElementById("preloaded-shared-data");
      if (existingPreloadScript) existingPreloadScript.remove();
      const preloadScript = doc.createElement("script");
      preloadScript.id = "preloaded-shared-data";
      if (password) {
        const encryptedPayload = await encryptExportPayload(password, {
          analysisData: packRecordsForShared(records),
          studentCsatData,
          subjectGradeData,
          uiState,
        });
        preloadScript.textContent = escapeInlineScriptContent(buildProtectedHtmlBootstrap(encryptedPayload));
      } else {
        preloadScript.textContent = [
          "(() => {",
          "  const ns = (window.SusiApp = window.SusiApp || { preloaded: {} });",
          "  ns.preloaded = ns.preloaded || {};",
          `  ns.preloaded.buildUtc = ${serializeForInlineScript(new Date().toISOString())};`,
          "  ns.preloaded.shared = true;",
          `  ns.preloaded.data = ${serializeForInlineScript(packRecordsForShared(records))};`,
          `  ns.preloaded.studentCsat = ${serializeForInlineScript(studentCsatData)};`,
          `  ns.preloaded.subjectGrade = ${serializeForInlineScript(subjectGradeData)};`,
          `  ns.preloaded.uiState = ${serializeForInlineScript(uiState)};`,
          "})();",
        ].join("\n");
      }
      const mainScript = Array.from(doc.querySelectorAll("script"))
        .find((script) => !script.src && script.textContent.includes("const RESULT_ORDER"));
      if (mainScript && mainScript.parentNode) {
        mainScript.parentNode.insertBefore(preloadScript, mainScript);
      } else if (doc.body) {
        doc.body.appendChild(preloadScript);
      }
      return "<!DOCTYPE html>\n" + doc.documentElement.outerHTML;
    }
    async function downloadSharedHtml(options = {}) {
      if (!dataState.reportRecords.length) {
        throw new Error("먼저 보고서를 생성해주세요.");
      }
      const password = typeof options.password === "string" ? options.password : "";
      const exportContext = options.scope === "activePage"
        ? buildActivePageSharedExportContext()
        : buildFullSharedExportContext();
      if (options.disableExcelExport === true || excelExportDisabled) {
        exportContext.uiState.disableExcelExport = true;
      }
      const htmlContent = await buildSharedHtmlDocument(exportContext.records, exportContext.uiState, {
        password,
        studentCsatData: exportContext.studentCsatData,
        subjectGradeData: exportContext.subjectGradeData,
      });
      const filenameBase = safe(options.filenameBase) || exportContext.filenameBase || "수시입시결과_공유용";
      const blob = new Blob(["\uFEFF", htmlContent], { type: "text/html;charset=utf-8;" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${sanitizeFilenamePart(filenameBase)}_${buildExportTimestamp()}.html`;
      document.body.appendChild(link);
      link.click();
      setTimeout(() => {
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      }, 0);
    }
    function showSharedExportOptionsModal(options = {}) {
      const title = options.title || "공유용 HTML 저장";
      const description = options.description || "열기 암호를 설정하면 저장 파일을 열 때 먼저 암호를 입력해야 합니다. 비워두면 기존처럼 암호 없이 저장됩니다.";
      const confirmLabel = options.confirmLabel || "HTML 다운로드";
      const scope = options.scope === "activePage" ? "activePage" : "full";
      const defaultFilename = safe(options.defaultFilename) || (scope === "activePage" ? buildActivePageFilenameSuggestion() : "수시입시결과_공유용");
      const modal = document.createElement("div");
      modal.id = "shared-export-modal";
      modal.innerHTML = `
        <div style="position:fixed; inset:0; z-index:21000; display:flex; align-items:center; justify-content:center; padding:24px; background:rgba(15,23,42,0.42); backdrop-filter:blur(6px); -webkit-backdrop-filter:blur(6px);">
          <div style="width:min(100%, 440px); background:#fff; border:1px solid rgba(15,23,42,0.08); border-radius:18px; box-shadow:0 24px 60px rgba(15,23,42,0.18); padding:24px;">
            <div style="font-size:18px; font-weight:700; color:#111827; margin-bottom:8px;">${escapeHtml(title)}</div>
            <div style="font-size:13px; line-height:1.6; color:#6b7280; margin-bottom:16px;">${escapeHtml(description)}</div>
            <label style="display:block; font-size:13px; font-weight:600; color:#374151; margin-bottom:6px;" for="sharedExportFilename">파일명</label>
            <input id="sharedExportFilename" type="text" value="${escapeHtml(defaultFilename)}" placeholder="파일명을 입력하세요" autocomplete="off" style="width:100%; border:1px solid #d1d5db; border-radius:10px; padding:11px 12px; font:inherit; margin-bottom:12px;">
            <label style="display:block; font-size:13px; font-weight:600; color:#374151; margin-bottom:6px;" for="sharedExportPassword">열기 암호</label>
            <input id="sharedExportPassword" type="password" placeholder="선택 입력" autocomplete="new-password" style="width:100%; border:1px solid #d1d5db; border-radius:10px; padding:11px 12px; font:inherit; margin-bottom:12px;">
            <label style="display:block; font-size:13px; font-weight:600; color:#374151; margin-bottom:6px;" for="sharedExportPasswordConfirm">암호 확인</label>
            <input id="sharedExportPasswordConfirm" type="password" placeholder="암호를 다시 입력" autocomplete="new-password" style="width:100%; border:1px solid #d1d5db; border-radius:10px; padding:11px 12px; font:inherit;">
            <div style="font-size:12px; line-height:1.55; color:#64748b; margin-top:8px;">암호 없이도 저장할 수 있습니다. 다만 개인정보가 포함된 보고서를 공유할 때는 10자 이상, 영문/숫자/기호를 섞거나 긴 문장형 암호를 권장합니다.</div>
            <label style="display:flex; align-items:flex-start; gap:8px; margin-top:14px; cursor:pointer;" for="sharedExportDisableExcel">
              <input id="sharedExportDisableExcel" type="checkbox" ${excelExportDisabled ? "checked" : ""} style="margin-top:2px;">
              <span style="font-size:13px; line-height:1.55; color:#374151;"><strong>엑셀 저장 버튼 숨기기</strong><br><span style="font-size:12px; color:#64748b;">저장된 HTML에서 표·상세 화면의 엑셀 저장 버튼을 모두 숨깁니다. 민감한 자료를 공유할 때 권장합니다.</span></span>
            </label>
            <div id="sharedExportOptionsError" style="min-height:18px; font-size:12px; color:#b91c1c; margin-top:10px;"></div>
            <div style="display:flex; gap:8px; justify-content:flex-end; margin-top:14px;">
              <button type="button" id="cancelSharedExport" style="border:1px solid #d1d5db; background:#fff; color:#374151; padding:9px 14px; border-radius:10px; font:inherit; font-weight:600;">취소</button>
              <button type="button" id="confirmSharedExport" style="border:1px solid #111827; background:#111827; color:#fff; padding:9px 14px; border-radius:10px; font:inherit; font-weight:600;">${escapeHtml(confirmLabel)}</button>
            </div>
          </div>
        </div>
      `;
      document.body.appendChild(modal);

      const filenameInput = document.getElementById("sharedExportFilename");
      const passwordInput = document.getElementById("sharedExportPassword");
      const confirmInput = document.getElementById("sharedExportPasswordConfirm");
      const disableExcelInput = document.getElementById("sharedExportDisableExcel");
      const errorDiv = document.getElementById("sharedExportOptionsError");
      const closeModal = () => modal.remove();

      document.getElementById("cancelSharedExport").addEventListener("click", closeModal);
      document.getElementById("confirmSharedExport").addEventListener("click", async () => {
        const filenameBase = filenameInput ? filenameInput.value : "";
        const password = passwordInput ? passwordInput.value : "";
        const passwordConfirm = confirmInput ? confirmInput.value : "";
        if (!safe(filenameBase)) {
          if (errorDiv) errorDiv.textContent = "파일명을 입력해주세요.";
          if (filenameInput) filenameInput.focus();
          return;
        }
        if ((password || passwordConfirm) && password !== passwordConfirm) {
          if (errorDiv) errorDiv.textContent = "암호와 확인 입력이 일치하지 않습니다.";
          if (confirmInput) confirmInput.focus();
          return;
        }
        const disableExcelExport = !!(disableExcelInput && disableExcelInput.checked);
        try {
          await downloadSharedHtml({ password, scope, filenameBase, disableExcelExport });
          closeModal();
        } catch (error) {
          console.error(error);
          if (errorDiv) errorDiv.textContent = error && error.message ? error.message : "공유용 HTML 생성 중 오류가 발생했습니다.";
        }
      });
      modal.addEventListener("click", (event) => {
        if (event.target === modal.firstElementChild) closeModal();
      });
      if (filenameInput) {
        setTimeout(() => {
          filenameInput.focus();
          filenameInput.select();
        }, 0);
      }
    }
    function bindSharedExportButton() {
      const exportBtn = document.getElementById("export-shared-html-btn");
      const activePageBtn = document.getElementById("export-active-page-html-btn");
      if (exportBtn) {
        exportBtn.onclick = () => showSharedExportOptionsModal({
          title: "공유용 HTML 저장",
          description: "현재 필터 결과 전체와 현재 UI 상태를 저장합니다. 열기 암호를 설정하면 저장 파일을 열 때 먼저 암호를 입력해야 합니다.",
          confirmLabel: "전체 HTML 다운로드",
          scope: "full",
        });
      }
      if (activePageBtn) {
        activePageBtn.onclick = () => showSharedExportOptionsModal({
          title: "현재 페이지 HTML 저장",
          description: "현재 활성 탭만 저장합니다. 조건별조회 상세 화면이면 AND 조건 적용 결과만 포함하고, 리스트 화면이면 현재 필터와 검색 상태를 그대로 담습니다.",
          confirmLabel: "현재 페이지 다운로드",
          defaultFilename: buildActivePageFilenameSuggestion(),
          scope: "activePage",
        });
      }
    }

    function sortedSet(setObj) {
      return Array.from(setObj).filter(Boolean).sort();
    }

    function updateStickyTabOffset() {
      const fixedHeader = reportEl.querySelector(".fixed-header");
      const nextOffset = fixedHeader ? Math.ceil(fixedHeader.getBoundingClientRect().height) : 84;
      document.documentElement.style.setProperty("--report-tabs-top", `${nextOffset}px`);
    }

    // 상세 모달의 sticky 헤더가 sticky 툴바(필터·페이지네이션) 바로 아래에 붙도록
    // 툴바 높이를 측정해 CSS 변수(--detail-toolbar-h)로 노출한다. 툴바는 필터 줄바꿈에
    // 따라 높이가 달라지므로 매 렌더 후 다시 측정한다.
    function updateDetailToolbarOffset() {
      if (!detailModalBodyEl) return;
      const toolbar = detailModalBodyEl.querySelector(".detail-toolbar");
      if (!toolbar) {
        detailModalBodyEl.style.removeProperty("--detail-toolbar-h");
        return;
      }
      const height = Math.ceil(toolbar.getBoundingClientRect().height);
      // 1px 겹치게 해 서브픽셀 경계에서 줄이 비치는 것을 막는다.
      detailModalBodyEl.style.setProperty("--detail-toolbar-h", `${Math.max(0, height - 1)}px`);
    }

    function resetLazyObservers() {
      if (renderState.plotIntersectionObserver) {
        renderState.plotIntersectionObserver.disconnect();
        renderState.plotIntersectionObserver = null;
      }
      if (renderState.auxIntersectionObserver) {
        renderState.auxIntersectionObserver.disconnect();
        renderState.auxIntersectionObserver = null;
      }
      renderState.auxRendererMap = {};
      if (typeof Plotly !== "undefined" && reportEl) {
        reportEl.querySelectorAll(".plot-container").forEach((el) => {
          try { Plotly.purge(el); } catch (_) {}
        });
      }
    }

    function resetReportRuntimeState(records, options = {}) {
      renderState.plotRegistryData = {};
      renderState.initializedPlots = {};
      renderState.chartTableRegistry = {};
      dataState.detailViewRowsCache = new Map();
      analyticsViewState.conditionTab = { active: false, criteria: null };
      analyticsViewState.univTab = { active: false, entries: [], univ: "" };
      analyticsViewState.deptTab = { active: false, entries: [] };
      analyticsViewState.subtypeTab = { active: false, entries: [] };
      filterState.gradeBandModesByPlot = options.gradeBandModes && typeof options.gradeBandModes === "object"
        ? { ...options.gradeBandModes }
        : {};
      filterState.univTopDisplayMode = options.univTopMode || DEFAULT_UNIV_TOP_MODE;
      filterState.univTopSortKey = options.univTopSort || DEFAULT_UNIV_TOP_SORT;
      filterState.univDirectorySortKey = options.univDirectorySort || DEFAULT_UNIV_DIRECTORY_SORT;
      const savedUnivSelection = Array.isArray(options.univFinderSelection) ? [...options.univFinderSelection] : [];
      filterState.selectedUnivKeys = savedUnivSelection.map((key) => {
        if (typeof key !== "string") return key;
        return key.startsWith("univ::") ? key : buildUnivFinderKey(key);
      });
      const savedDeptSelection = Array.isArray(options.deptFinderSelection) ? [...options.deptFinderSelection] : [];
      const hasLegacyDeptSelection = savedDeptSelection.some((key) => typeof key === "string" && !key.startsWith("dept::") && !key.startsWith("univ::"));
      filterState.deptFinderGroupingMode = options.deptFinderGroupingMode || (hasLegacyDeptSelection ? "univ" : DEFAULT_DEPT_FINDER_GROUPING_MODE);
      filterState.selectedDeptKeys = savedDeptSelection.map((key) => {
        if (typeof key !== "string") return key;
        if (key.startsWith("dept::") || key.startsWith("univ::")) return key;
        return `univ::${key}`;
      });
      const savedSubtypeSelection = Array.isArray(options.subtypeFinderSelection) ? [...options.subtypeFinderSelection] : [];
      filterState.selectedSubtypeKeys = savedSubtypeSelection.map((key) => {
        if (typeof key !== "string") return key;
        return key.startsWith("subtype::") ? key : `subtype::${key}`;
      });
      dataState.reportRecords = records;
    }

    function buildRecordIndex(records) {
      const univSet = new Set();
      const deptSet = new Set();
      const apptypeSet = new Set();
      const subtypeSet = new Set();
      const yearSet = new Set();

      records.forEach((rec) => {
        univSet.add(rec.univ);
        deptSet.add(rec.dept);
        apptypeSet.add(rec.apptype);
        subtypeSet.add(rec.subtype);
        if (rec.academic_year) yearSet.add(rec.academic_year);
      });

      return {
        univs: sortedSet(univSet),
        depts: sortedSet(deptSet),
        apptypes: sortedSet(apptypeSet),
        subtypes: sortedSet(subtypeSet),
        years: Array.from(yearSet).sort((a, b) => a - b),
      };
    }

    function renderFullReport(records, selectedUniv = "", activeTab = "summary", options = {}, meta = {}) {
      activeTab = normalizeReportTabName(activeTab);
      resetLazyObservers();
      resetReportRuntimeState(records, options);

      const index = buildRecordIndex(records);
      const { univs, depts, apptypes, subtypes, years } = index;
      const metaYears = meta.years || years;
      const metaAllRecords = meta.allRecords || records;
      // onclick 핸들러에서 접근할 수 있도록 dataState에 저장
      dataState.metaYears = metaYears;
      dataState.metaAllRecords = metaAllRecords;

      const header = `
        <div class="fixed-header">
          <div class="header-content">
            <div class="header-top">
              <div class="site-title">2026 강원진학센터 입시분석팀</div>
              <div class="header-actions">
                <button type="button" class="header-action-btn" id="export-shared-html-btn">공유용 HTML 저장</button>
                <button type="button" class="header-action-btn" id="export-active-page-html-btn">현재 페이지 HTML 저장</button>
              </div>
            </div>
          <h2 class="university-title">수시 입시 결과 분석 프로그램</h2>
          <div id="header-build-info" class="header-build-info"></div>
          ${(metaYears.length > 1 || hasMultipleLocationTypes(metaAllRecords)) ? `<div class="global-filter-row">
            ${metaYears.length > 1 ? `<div class="year-filter-bar" id="year-filter-bar">
              <span class="year-filter-label">학년도</span>
              <div class="segmented-control" id="year-filter-group">
                <button type="button" class="segmented-btn ${filterState.yearFilter === "all" ? "active" : ""}" data-year="all">전체</button>
                ${metaYears.map(y => `<button type="button" class="segmented-btn ${String(filterState.yearFilter) === String(y) ? "active" : ""}" data-year="${y}">${y}</button>`).join("")}
              </div>
            </div>` : ""}
            ${hasMultipleLocationTypes(metaAllRecords) ? `<div class="year-filter-bar" id="location-filter-bar">
              <span class="year-filter-label">소재지</span>
              <div class="segmented-control" id="location-filter-group">
                <button type="button" class="segmented-btn ${filterState.locationFilter === "all" ? "active" : ""}" data-location="all">전체</button>
                <button type="button" class="segmented-btn ${filterState.locationFilter === "시" ? "active" : ""}" data-location="시">시</button>
                <button type="button" class="segmented-btn ${filterState.locationFilter === "군" ? "active" : ""}" data-location="군">군</button>
                ${hasRuralRecords(metaAllRecords) ? `<button type="button" class="segmented-btn ${filterState.locationFilter === "농어촌" ? "active" : ""}" data-location="농어촌">농어촌</button>` : ""}
              </div>
            </div>` : ""}
          </div>` : ""}
          </div>
        </div>`;

      const layout = `
        <div class="layout">
          <main class="main-content">
            <div class="tab-bar-sticky">
              <div class="tab-bar" id="report-tabs">
                <button type="button" class="tab-btn ${activeTab === "summary" ? "active" : ""}" data-tab="summary">전체데이터요약</button>
                <button type="button" class="tab-btn ${activeTab === "condition" ? "active" : ""}" data-tab="condition">조건별조회</button>
                <button type="button" class="tab-btn ${activeTab === "trend" ? "active" : ""}" data-tab="trend">지원경향조회</button>
              </div>
            </div>
            <section id="tab-summary" class="tab-panel ${activeTab === "summary" ? "active" : ""}"></section>
            <section id="tab-condition" class="tab-panel ${activeTab === "condition" ? "active" : ""}"></section>
            <section id="tab-trend" class="tab-panel ${activeTab === "trend" ? "active" : ""}"></section>
          </main>
        </div>`;

      reportEl.hidden = false;
      reportEl.innerHTML = header + layout;

      const summaryEl = document.getElementById("tab-summary");
      const conditionEl = document.getElementById("tab-condition");
      const trendEl = document.getElementById("tab-trend");
      const univSearchQuery = typeof options.univFinderQuery === "string" ? options.univFinderQuery : "";
      const deptSearchQuery = typeof options.deptFinderQuery === "string" ? options.deptFinderQuery : "";
      const subtypeSearchQuery = typeof options.subtypeFinderQuery === "string" ? options.subtypeFinderQuery : "";
      let plotCounter = 1;

      const yearInfo = years.length > 0 ? `학년도 ${years.length} · ` : "";
      const filterSummary = `
        <div class="filter-info">
          총 ${records.length}건 · ${yearInfo}대학 ${univs.length} · 모집단위 ${depts.length} · 전형유형 ${apptypes.length} · 전형 ${subtypes.length}
        </div>`;
      summaryEl.insertAdjacentHTML("beforeend", filterSummary);

      const overallBlock = buildPlotBlock(records, plotCounter, "전체 데이터", true, false, true, true, false, true, false, true, true);
      renderState.plotRegistryData[plotCounter] = overallBlock.data;
      summaryEl.insertAdjacentHTML("beforeend", `<div class="dept-container section-overall" id="overall-summary">
          <div class="dept-header">전체 데이터 요약</div>
          <div class="section-hint"><strong>전형별 현황</strong>, <strong>지역별 현황</strong> 카드와 <strong>등급대 차트</strong>를 클릭하면 해당 조건의 상세 데이터를 조회할 수 있습니다.</div>
          ${overallBlock.html}
        </div>`);
      plotCounter++;

      summaryEl.insertAdjacentHTML("beforeend", buildUnivTopSectionHtml("global"));

      if (filterState.yearFilter === "all" && metaYears.length > 1) {
        const locationFilteredAll = filterRecordsByLocation(metaAllRecords, filterState.locationFilter);
        summaryEl.insertAdjacentHTML("beforeend", buildYearComparisonSection(locationFilteredAll, metaYears));
      }

      conditionEl.innerHTML = `<div id="condition-list-view">
          <div class="dept-container">
            <div class="dept-header">조건별 조회</div>
            <div class="section-hint">대학, 학과, 전형 세부유형을 각각 선택한 뒤 <strong>조건 적용 상세보기</strong>를 누르면 선택한 항목이 카테고리끼리 AND 조건으로 적용됩니다. 같은 카테고리 안에서 여러 개를 고르면 OR 조건입니다.</div>
            <div class="card condition-query-card">
              <div class="card-head">
                <div class="card-head-copy">
                  <h3>선택 조건</h3>
                  <div class="card-note">예: 특정 대학과 특정 세부유형을 함께 선택하면 해당 대학 안의 해당 세부유형 지원 데이터만 분석합니다.</div>
                </div>
                <div class="dept-finder-actions">
                  <button type="button" class="primary" id="condition-finder-open-btn" disabled>조건 적용 상세보기</button>
                  <button type="button" id="condition-finder-clear-btn" disabled>전체 조건 비우기</button>
                </div>
              </div>
              <div id="condition-query-summary" class="condition-query-summary"></div>
            </div>
            <div class="condition-finder-grid">
              <div class="card condition-finder-card">
                <div class="card-head">
                  <div class="card-head-copy">
                    <h3>대학 검색</h3>
                    <div class="card-note">${buildUnivDirectoryNoteHtml()}</div>
                  </div>
                  <div class="control-group">
                    <div class="control-group-label">정렬 기준</div>
                    <div class="segmented-control" data-univ-directory-sort-group="condition" aria-label="대학별 목록 정렬 기준">
                      <button type="button" class="segmented-btn active" data-univ-directory-sort="total" aria-pressed="true">지원건수순</button>
                      <button type="button" class="segmented-btn" data-univ-directory-sort="allPassRate" aria-pressed="false">합격률순</button>
                    </div>
                  </div>
                </div>
                <div class="directory-toolbar">
                  <div class="directory-search">
                    <label for="univ-directory-search">대학명 검색</label>
                    <input type="search" id="univ-directory-search" placeholder="대학명을 입력하세요" />
                  </div>
                </div>
                <div class="dept-finder-selection-panel">
                  <div class="dept-finder-selection-head">
                    <div class="dept-finder-selection-copy">
                      <div class="dept-finder-selection-label">선택한 대학</div>
                      <div class="dept-finder-selection-meta" id="univ-finder-selection-meta">아직 선택한 대학이 없습니다.</div>
                    </div>
                    <div class="dept-finder-actions">
                      <button type="button" id="univ-finder-clear-btn" disabled>선택 비우기</button>
                    </div>
                  </div>
                  <div id="univ-finder-selected"></div>
                </div>
                <div id="univ-directory-table"></div>
                <div class="dept-finder-hint" id="univ-directory-hint">대학명을 입력하면 해당 키워드가 들어간 대학이 표시됩니다. 이미 선택한 대학은 위 칩에서 관리할 수 있습니다.</div>
              </div>
              <div class="card condition-finder-card">
                <div class="card-head">
                  <div class="card-head-copy">
                    <h3>학과 검색</h3>
                    <div class="card-note">기본은 같은 학과를 대학 통합으로 보여주며, 필요하면 <span class="card-note-emphasis">대학별 구분</span>으로 바꿔 조건을 좁힐 수 있습니다.</div>
                  </div>
                </div>
                <div class="directory-search">
                  <label for="dept-finder-search">학과명 검색</label>
                  <input type="search" id="dept-finder-search" placeholder="예: 컴퓨터, 간호, 경영" />
                </div>
                <div class="dept-finder-toolbar">
                  <div class="control-group">
                    <div class="control-group-label">표시 기준</div>
                    <div class="segmented-control" id="dept-finder-mode-group" aria-label="학과 검색 표시 기준">
                      <button type="button" class="segmented-btn ${filterState.deptFinderGroupingMode === "dept" ? "active" : ""}" data-dept-finder-mode="dept">학과 통합</button>
                      <button type="button" class="segmented-btn ${filterState.deptFinderGroupingMode === "univ" ? "active" : ""}" data-dept-finder-mode="univ">대학별 구분</button>
                    </div>
                  </div>
                </div>
                <div class="dept-finder-selection-panel">
                  <div class="dept-finder-selection-head">
                    <div class="dept-finder-selection-copy">
                      <div class="dept-finder-selection-label">선택한 학과</div>
                      <div class="dept-finder-selection-meta" id="dept-finder-selection-meta">아직 선택한 학과가 없습니다.</div>
                    </div>
                    <div class="dept-finder-actions">
                      <button type="button" id="dept-finder-clear-btn" disabled>선택 비우기</button>
                    </div>
                  </div>
                  <div id="dept-finder-selected"></div>
                </div>
                <div id="dept-finder-results"></div>
                <div class="dept-finder-hint" id="dept-finder-hint">학과명을 입력하면 해당 키워드가 들어간 학과가 표시됩니다. 이미 선택한 학과는 위 칩에서 관리할 수 있습니다.</div>
              </div>
              <div class="card condition-finder-card">
                <div class="card-head">
                  <div class="card-head-copy">
                    <h3>세부유형 검색</h3>
                    <div class="card-note">같은 <span class="card-note-emphasis">세부유형명</span>은 전형유형을 통합해 보여주며, 선택 시 다른 조건과 함께 AND로 적용됩니다.</div>
                  </div>
                </div>
                <div class="directory-search">
                  <label for="subtype-finder-search">세부유형명 검색</label>
                  <input type="search" id="subtype-finder-search" placeholder="예: 일반전형, 지역인재, 학교추천" />
                </div>
                <div class="dept-finder-selection-panel">
                  <div class="dept-finder-selection-head">
                    <div class="dept-finder-selection-copy">
                      <div class="dept-finder-selection-label">선택한 세부유형</div>
                      <div class="dept-finder-selection-meta" id="subtype-finder-selection-meta">아직 선택한 세부유형이 없습니다.</div>
                    </div>
                    <div class="dept-finder-actions">
                      <button type="button" id="subtype-finder-clear-btn" disabled>선택 비우기</button>
                    </div>
                  </div>
                  <div id="subtype-finder-selected"></div>
                </div>
                <div id="subtype-finder-results"></div>
                <div class="dept-finder-hint" id="subtype-finder-hint">세부유형명을 입력하면 같은 이름은 전형유형을 통합해 보여줍니다. 이미 선택한 세부유형은 위 칩에서 관리할 수 있습니다.</div>
              </div>
            </div>
          </div>
        </div>
        <div id="condition-analytics-view" hidden>
          <div class="analytics-back-bar">
            <button type="button" class="analytics-back-btn" id="condition-analytics-back">\u2190 조건 선택</button>
            <div><div class="analytics-view-title" id="condition-analytics-title"></div><div class="analytics-view-subtitle" id="condition-analytics-subtitle"></div></div>
          </div>
          <div id="condition-analytics-content"></div>
        </div>`;
      const univSearchInput = document.getElementById("univ-directory-search");
      if (univSearchInput && univSearchQuery) univSearchInput.value = univSearchQuery;
      const deptSearchInput = document.getElementById("dept-finder-search");
      if (deptSearchInput && deptSearchQuery) deptSearchInput.value = deptSearchQuery;
      const subtypeSearchInput = document.getElementById("subtype-finder-search");
      if (subtypeSearchInput && subtypeSearchQuery) subtypeSearchInput.value = subtypeSearchQuery;

	      trendEl.innerHTML = `<div class="trend-wide-shell">
	          <div class="dept-container">
	            <div class="dept-header">지원경향조회</div>
	            <div class="card">
	              <div class="card-head">
	                <div class="card-head-copy">
	                  <h3>학생별 지원 패턴</h3>
	                  <div class="card-note">학생 1명당 1행으로 표시합니다. <span class="card-note-emphasis">전교과등급 · 지원건수 · 지원대학1~6</span> 순서로 지원 경향을 확인할 수 있습니다. 행을 클릭하면 해당 학생의 전체 지원 내역이 세로 표로 열립니다.</div>
	                </div>
	              </div>
	              <div id="student-trend-table"></div>
	            </div>
	          </div>
        </div>`;

      document.querySelectorAll("#report-tabs .tab-btn").forEach((btn) => {
        btn.addEventListener("click", () => setActiveTab(btn.dataset.tab));
      });

      updateBuildInfoText();
      updateStickyTabOffset();
      bindSharedExportButton();
      bindGradeBandModeToggles(records);
      bindApptypeBandModeToggles(records);
      bindUnivTopModeToggle(records);
      bindUnivTopSortToggle(records);
      bindUnivDirectoryControls(records);
      renderUnivDirectory(records);
      bindDeptFinderControls(records);
      renderDeptFinder(records);
      bindSubtypeFinderControls(records);
      renderSubtypeFinder(records);
      bindConditionQueryControls(records);
      renderConditionQuerySummary(records);
      renderStudentTrend(records);
      bindPlotExportButtons(reportEl);
      bindPlotTableButtons(reportEl);
      bindYearFilter(metaYears, metaAllRecords);
      bindLocationFilter(metaYears, metaAllRecords);
      initLazyRendering(records, metaAllRecords, metaYears);

      // 분석 뷰 뒤로가기 바인딩
      document.getElementById("condition-analytics-back")?.addEventListener("click", hideConditionAnalytics);

      // 글로벌 필터 재렌더 시 분석 뷰 상태 복원
      if (options.conditionAnalytics && options.conditionAnalytics.active) {
        showConditionAnalytics(options.conditionAnalytics.criteria, records, metaAllRecords, metaYears);
      } else if (options.univAnalytics && options.univAnalytics.active) {
        const univSelection = Array.isArray(options.univAnalytics.entries) && options.univAnalytics.entries.length
          ? options.univAnalytics.entries
          : (options.univAnalytics.univ || "");
        const criteria = normalizeConditionCriteria({ univKeys: normalizeUnivAnalyticsEntries(univSelection, records).map((entry) => entry.key) }, records);
        showConditionAnalytics(criteria, records, metaAllRecords, metaYears);
      } else if (options.deptAnalytics && options.deptAnalytics.active) {
        const criteria = normalizeConditionCriteria({
          deptKeys: (Array.isArray(options.deptAnalytics.entries) ? options.deptAnalytics.entries : []).map((entry) => entry.key).filter(Boolean),
          deptGroupingMode: options.deptFinderGroupingMode || getDeptFinderGroupingMode(),
        }, records);
        showConditionAnalytics(criteria, records, metaAllRecords, metaYears);
      } else if (options.subtypeAnalytics && options.subtypeAnalytics.active) {
        const criteria = normalizeConditionCriteria({
          subtypeKeys: normalizeSubtypeAnalyticsEntries(options.subtypeAnalytics.entries || [], records).map((entry) => entry.key),
        }, records);
        showConditionAnalytics(criteria, records, metaAllRecords, metaYears);
      }
    }

	    function buildYearComparisonSection(allRecords, years) {
	      return `<div class="dept-container section-year-comparison" id="year-comparison-section">
	        <div class="dept-header">연도별 비교</div>
	        <div class="card"><div class="card-head"><div class="card-head-copy"><h3>전형별 현황</h3><div class="card-note">전형을 행으로 두고, 각 연도 칸에서 <strong>지원건수</strong>, <strong>지원 비율</strong>, <strong>합격건수(충원포함)</strong>, <strong>합격률</strong>을 함께 비교합니다.</div></div></div>
	          <div id="year-apptype-trend-table" class="aux-container"></div>
	        </div>
	        <div class="card"><div class="card-head"><div class="card-head-copy"><h3>연도별 주요 대학 지원 추이</h3></div></div>
	          <div id="year-univ-trend-table" class="aux-container"></div>
	        </div>
	      </div>`;
	    }

    function downloadYearTableXlsx(exportId) {
      if (excelExportDisabled) return;
      const config = yearTableExportRegistry[exportId];
      const rows = config && typeof config.getRows === "function" ? config.getRows(config) : (config && config.rows);
      if (!config || !Array.isArray(rows) || !rows.length) return;
      const worksheet = XLSX.utils.json_to_sheet(rows);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, config.sheetName || "데이터");
      const filename = `${sanitizeFilenamePart(config.filenameBase || "데이터")}_${buildExportTimestamp()}.xlsx`;
      XLSX.writeFile(workbook, filename);
    }

    function buildYearTableActionsHtml(exportId, options = {}) {
      const uniquePassButton = options.includeUniquePassToggle
        ? `<button type="button" class="year-table-unique-pass-btn" data-year-unique-pass-toggle="${escapeHtml(exportId)}" aria-pressed="false" title="같은 학생의 여러 합격을 1명으로 계산한 단수합격건수를 표에 표시합니다.">단수합격건수 조회</button>`
        : "";
      const exportButton = excelExportDisabled
        ? ""
        : `<button type="button" class="year-table-export-btn" data-year-table-export="${escapeHtml(exportId)}" title="현재 표를 엑셀 파일로 저장합니다.">엑셀 저장</button>`;
      if (!exportButton && !uniquePassButton) return "";
      return `<div class="year-table-actions">
        ${exportButton}
        ${uniquePassButton}
      </div>`;
    }

	    function renderYearUnivTrendTable(allRecords, years, containerId) {
	      const el = document.getElementById(containerId);
	      if (!el) return;
      const UNIV_COL_WIDTH = 172;
      const SUPPORT_COL_WIDTH = 38;
      const RATE_COL_WIDTH = 54;
      const univMap = new Map();
      allRecords.forEach(r => {
        if (!univMap.has(r.univ)) univMap.set(r.univ, { total: 0, byYear: {} });
        const entry = univMap.get(r.univ);
        entry.total++;
        if (!entry.byYear[r.academic_year]) entry.byYear[r.academic_year] = { total: 0, pass: 0, passGrades: [] };
        entry.byYear[r.academic_year].total++;
        if (r.result === "합격" || r.result === "충원합격") {
          entry.byYear[r.academic_year].pass++;
          if (r.all_subj_grade !== null) entry.byYear[r.academic_year].passGrades.push(r.all_subj_grade);
        }
      });
      const top = Array.from(univMap.entries())
        .sort((a, b) => b[1].total - a[1].total)
        .slice(0, 20);
      if (!top.length) { el.innerHTML = '<div class="empty">데이터 없음</div>'; return; }
      const yearHeaders = years.map(y =>
        `<th colspan="2" style="text-align:center;border-bottom:1px solid var(--border);">${y}</th>`
      ).join("");
      const subHeaders = years.map(() =>
        `<th style="min-width:${SUPPORT_COL_WIDTH}px;text-align:center;">지원</th><th style="min-width:${RATE_COL_WIDTH}px;text-align:center;">합격률</th>`
      ).join("");
      const colgroup = `<col style="width:${UNIV_COL_WIDTH}px;">${years.map(() => `<col style="width:${SUPPORT_COL_WIDTH}px;"><col style="width:${RATE_COL_WIDTH}px;">`).join("")}`;
      const exportRows = [];
      const bodyRows = top.map(([univ, data]) => {
        const exportRow = { "대학명": univ };
        const cells = years.map(y => {
          const d = data.byYear[y] || { total: 0, pass: 0, passGrades: [] };
          const rateText = d.total ? (d.pass / d.total * 100).toFixed(1) + "%" : "-";
          const passBandMeta = buildUnivPassBandMeta(d.passGrades || []);
          const rateCell = d.total
            ? renderDetailTooltipCell(rateText, [
                `${UNIV_PASS_BAND_LABEL}: ${passBandMeta.label}`,
                formatUnivPassBandSampleText(passBandMeta.sampleCount),
              ])
            : renderDetailTextCell(rateText);
          exportRow[`${y} 지원건수`] = d.total;
          exportRow[`${y} 합격건수`] = d.pass;
          exportRow[`${y} 합격률`] = rateText;
          return `<td data-univ-click="${escapeHtml(univ)}" data-year="${y}" style="text-align:center;">${d.total}</td><td data-univ-click="${escapeHtml(univ)}" data-year="${y}" style="text-align:center;">${rateCell}</td>`;
        }).join("");
        exportRows.push(exportRow);
        return `<tr><td data-univ-click="${escapeHtml(univ)}" style="width:${UNIV_COL_WIDTH}px;min-width:${UNIV_COL_WIDTH}px;max-width:${UNIV_COL_WIDTH}px;font-weight:500;"><span class="detail-cell-ellipsis" title="${escapeHtml(univ)}">${escapeHtml(univ)}</span></td>${cells}</tr>`;
      }).join("");
      const exportId = `year-univ-${containerId}`;
      yearTableExportRegistry[exportId] = {
        rows: exportRows,
        sheetName: "연도별주요대학지원추이",
        filenameBase: "연도별_주요대학_지원추이",
      };
	      el.innerHTML = `${buildYearTableActionsHtml(exportId)}<div class="summary-table-wrap"><div style="overflow-x:auto;">
	        <table class="summary-table year-univ-trend-table">
	          <colgroup>${colgroup}</colgroup>
	          <thead><tr><th rowspan="2" style="width:${UNIV_COL_WIDTH}px;min-width:${UNIV_COL_WIDTH}px;max-width:${UNIV_COL_WIDTH}px;">대학명</th>${yearHeaders}</tr><tr>${subHeaders}</tr></thead>
	          <tbody>${bodyRows}</tbody>
	        </table>
	      </div></div>`;
	      el.onclick = (event) => {
	        const exportBtn = event.target instanceof Element ? event.target.closest("[data-year-table-export]") : null;
	        if (exportBtn) {
	          event.stopPropagation();
	          downloadYearTableXlsx(exportBtn.getAttribute("data-year-table-export") || "");
	          return;
	        }
	        const trigger = event.target instanceof Element ? event.target.closest("[data-univ-click]") : null;
	        if (!trigger) return;
	        const univ = trigger.getAttribute("data-univ-click") || "";
	        if (!univ) return;
	        const year = trigger.getAttribute("data-year") || "";
	        const filtered = year ? allRecords.filter(r => String(r.academic_year) === year) : allRecords;
	        dataState.detailViewRowsCache = new Map();
	        openUnivDetailModal(univ, filtered);
	      };
	    }

    function renderYearApptypeTrendTable(allRecords, years, containerId) {
      const el = document.getElementById(containerId);
      if (!el) return;
      const APPTYPE_COL_WIDTH = 176;
      const YEAR_COL_WIDTH = 126;
      const apptypeMap = new Map();
      const yearTotals = {};
      const yearPassTotals = {};
      const yearUniquePassStudentSets = {};
      allRecords.forEach((record) => {
        const apptype = record.apptype || "미상";
        if (!apptypeMap.has(apptype)) apptypeMap.set(apptype, { total: 0, byYear: {} });
        const entry = apptypeMap.get(apptype);
        entry.total += 1;
        yearTotals[record.academic_year] = (yearTotals[record.academic_year] || 0) + 1;
        if (isPassResult(record.result)) {
          yearPassTotals[record.academic_year] = (yearPassTotals[record.academic_year] || 0) + 1;
          const studentKey = getStudentRecordKey(record);
          if (studentKey) {
            if (!yearUniquePassStudentSets[record.academic_year]) yearUniquePassStudentSets[record.academic_year] = new Set();
            yearUniquePassStudentSets[record.academic_year].add(studentKey);
          }
        }
        if (!entry.byYear[record.academic_year]) {
          entry.byYear[record.academic_year] = { total: 0, pass: 0, uniquePassStudentKeys: new Set() };
        }
        const yearEntry = entry.byYear[record.academic_year];
        yearEntry.total += 1;
        if (isPassResult(record.result)) {
          yearEntry.pass += 1;
          const studentKey = getStudentRecordKey(record);
          if (studentKey) yearEntry.uniquePassStudentKeys.add(studentKey);
        }
      });
      const exportRows = [];
      const uniquePassExportRows = [];
      const rows = Array.from(apptypeMap.entries())
        .sort((a, b) => (b[1].total - a[1].total) || a[0].localeCompare(b[0], "ko"))
        .map(([apptype, data]) => {
          const exportRow = { "전형": apptype };
          const uniquePassExportRow = { "전형": apptype };
          const yearCells = years.map((year) => {
            const yearEntry = data.byYear[year] || { total: 0, pass: 0, uniquePassStudentKeys: new Set() };
            const uniquePassCount = yearEntry.uniquePassStudentKeys.size;
            const rate = yearEntry.total ? ((yearEntry.pass / yearEntry.total) * 100).toFixed(1) + "%" : "-";
            const share = yearTotals[year] ? ((yearEntry.total / yearTotals[year]) * 100).toFixed(1) + "%" : "-";
            exportRow[`${year} 지원건수`] = yearEntry.total;
            exportRow[`${year} 지원비율`] = share;
            exportRow[`${year} 합격건수`] = yearEntry.pass;
            exportRow[`${year} 합격률`] = rate;
            uniquePassExportRow[`${year} 지원건수`] = yearEntry.total;
            uniquePassExportRow[`${year} 지원비율`] = share;
            uniquePassExportRow[`${year} 합격건수`] = yearEntry.pass;
            uniquePassExportRow[`${year} 단수합격건수`] = uniquePassCount;
            uniquePassExportRow[`${year} 합격률`] = rate;
            return `<td data-apptype-click="${escapeHtml(apptype)}" data-year="${year}" style="width:${YEAR_COL_WIDTH}px;min-width:${YEAR_COL_WIDTH}px;max-width:${YEAR_COL_WIDTH}px;text-align:center;">
              <div class="year-trend-cell">
                <div class="year-trend-count">지원 ${yearEntry.total.toLocaleString()}건</div>
                <div class="year-trend-share">지원 비율 ${escapeHtml(share)}</div>
                <div class="year-trend-pass">합격 ${yearEntry.pass.toLocaleString()}건</div>
                <div class="year-trend-unique-pass">단수합격 ${uniquePassCount.toLocaleString()}명</div>
                <div class="year-trend-rate">합격률 ${escapeHtml(rate)}</div>
              </div>
            </td>`;
          }).join("");
          exportRows.push(exportRow);
          uniquePassExportRows.push(uniquePassExportRow);
          return `<tr>
            <td data-apptype-click="${escapeHtml(apptype)}" style="width:${APPTYPE_COL_WIDTH}px;min-width:${APPTYPE_COL_WIDTH}px;max-width:${APPTYPE_COL_WIDTH}px;"><span class="detail-cell-ellipsis year-trend-label" title="${escapeHtml(apptype)}">${escapeHtml(apptype)}</span></td>
            ${yearCells}
          </tr>`;
        }).join("");
      const totalRow = { "전형": "총 합격건수(충원포함)" };
      const uniquePassTotalRow = { "전형": "총 합격건수(충원포함)" };
      years.forEach((year) => {
        totalRow[`${year} 지원건수`] = yearTotals[year] || 0;
        totalRow[`${year} 지원비율`] = "";
        totalRow[`${year} 합격건수`] = yearPassTotals[year] || 0;
        totalRow[`${year} 합격률`] = yearTotals[year] ? (((yearPassTotals[year] || 0) / yearTotals[year]) * 100).toFixed(1) + "%" : "-";
        uniquePassTotalRow[`${year} 지원건수`] = yearTotals[year] || 0;
        uniquePassTotalRow[`${year} 지원비율`] = "";
        uniquePassTotalRow[`${year} 합격건수`] = yearPassTotals[year] || 0;
        uniquePassTotalRow[`${year} 단수합격건수`] = yearUniquePassStudentSets[year] ? yearUniquePassStudentSets[year].size : 0;
        uniquePassTotalRow[`${year} 합격률`] = yearTotals[year] ? (((yearPassTotals[year] || 0) / yearTotals[year]) * 100).toFixed(1) + "%" : "-";
      });
      exportRows.push(totalRow);
      uniquePassExportRows.push(uniquePassTotalRow);
      const exportId = `year-apptype-${containerId}`;
      yearTableExportRegistry[exportId] = {
        rows: exportRows,
        uniquePassRows: uniquePassExportRows,
        showUniquePass: false,
        getRows: (config) => config.showUniquePass ? config.uniquePassRows : config.rows,
        sheetName: "연도별전형별현황",
        filenameBase: "연도별_전형별_현황",
      };
      if (!rows) {
        el.innerHTML = '<div class="empty">데이터 없음</div>';
        return;
      }
      const colgroup = `<col style="width:${APPTYPE_COL_WIDTH}px;">${years.map(() => `<col style="width:${YEAR_COL_WIDTH}px;">`).join("")}`;
      const yearHeaders = years.map((year) => `<th style="width:${YEAR_COL_WIDTH}px;min-width:${YEAR_COL_WIDTH}px;max-width:${YEAR_COL_WIDTH}px;text-align:center;">${year}</th>`).join("");
      const totalCells = years.map((year) => {
        const totalPass = yearPassTotals[year] || 0;
        const totalUniquePass = yearUniquePassStudentSets[year] ? yearUniquePassStudentSets[year].size : 0;
        return `<td style="width:${YEAR_COL_WIDTH}px;min-width:${YEAR_COL_WIDTH}px;max-width:${YEAR_COL_WIDTH}px;text-align:center;">
          <div class="year-trend-total-cell">
            <div class="year-trend-pass">합격 ${totalPass.toLocaleString()}건</div>
            <div class="year-trend-unique-pass">단수합격 ${totalUniquePass.toLocaleString()}명</div>
          </div>
        </td>`;
      }).join("");
      el.innerHTML = `${buildYearTableActionsHtml(exportId, { includeUniquePassToggle: true })}<div class="summary-table-wrap" style="overflow-x:auto;">
        <table class="summary-table year-trend-table">
          <colgroup>${colgroup}</colgroup>
          <thead>
            <tr>
              <th style="width:${APPTYPE_COL_WIDTH}px;min-width:${APPTYPE_COL_WIDTH}px;max-width:${APPTYPE_COL_WIDTH}px;">전형</th>
              ${yearHeaders}
            </tr>
          </thead>
          <tbody>${rows}</tbody>
          <tfoot>
            <tr class="year-trend-total-row">
              <td style="width:${APPTYPE_COL_WIDTH}px;min-width:${APPTYPE_COL_WIDTH}px;max-width:${APPTYPE_COL_WIDTH}px;">
                <span class="year-trend-label">총 합격건수<span class="year-trend-total-note">충원포함</span></span>
              </td>
              ${totalCells}
            </tr>
          </tfoot>
        </table>
      </div>`;
      el.onclick = (event) => {
        const uniquePassToggle = event.target instanceof Element ? event.target.closest("[data-year-unique-pass-toggle]") : null;
        if (uniquePassToggle) {
          event.stopPropagation();
          const targetExportId = uniquePassToggle.getAttribute("data-year-unique-pass-toggle") || "";
          const table = el.querySelector(".year-trend-table");
          const nextVisible = table ? !table.classList.contains("show-unique-pass") : false;
          if (table) table.classList.toggle("show-unique-pass", nextVisible);
          uniquePassToggle.setAttribute("aria-pressed", String(nextVisible));
          uniquePassToggle.textContent = nextVisible ? "단수합격건수 숨기기" : "단수합격건수 조회";
          uniquePassToggle.setAttribute(
            "title",
            nextVisible
              ? "표에서 단수합격건수를 숨깁니다."
              : "같은 학생의 여러 합격을 1명으로 계산한 단수합격건수를 표에 표시합니다."
          );
          if (yearTableExportRegistry[targetExportId]) {
            yearTableExportRegistry[targetExportId].showUniquePass = nextVisible;
          }
          return;
        }
        const exportBtn = event.target instanceof Element ? event.target.closest("[data-year-table-export]") : null;
        if (exportBtn) {
          event.stopPropagation();
          downloadYearTableXlsx(exportBtn.getAttribute("data-year-table-export") || "");
          return;
        }
        const trigger = event.target instanceof Element ? event.target.closest("[data-apptype-click]") : null;
        if (!trigger) return;
        const apptype = trigger.getAttribute("data-apptype-click") || "";
        if (!apptype) return;
        const year = trigger.getAttribute("data-year") || "";
        const filtered = year ? allRecords.filter(r => String(r.academic_year) === year) : allRecords;
        dataState.detailViewRowsCache = new Map();
        openCategoryDetailModal("apptype", apptype, apptype, filtered);
      };
    }

    function reapplyGlobalFilters(allRecords, years) {
      const filtered = applyGlobalFilters(allRecords);
      const uiState = getCurrentReportUiState();
      renderFullReport(filtered, "", uiState.activeTab, uiState, { years, allRecords });
    }

    function bindYearFilter(years, allRecords) {
      const group = document.getElementById("year-filter-group");
      if (!group) return;
      group.querySelectorAll("[data-year]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const nextYear = btn.dataset.year;
          if (nextYear === filterState.yearFilter) return;
          filterState.yearFilter = nextYear;
          reapplyGlobalFilters(allRecords, years);
        });
      });
    }

    function bindLocationFilter(years, allRecords) {
      const group = document.getElementById("location-filter-group");
      if (!group) return;
      group.querySelectorAll("[data-location]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const nextLoc = btn.dataset.location;
          if (nextLoc === filterState.locationFilter) return;
          filterState.locationFilter = nextLoc;
          reapplyGlobalFilters(allRecords, years);
        });
      });
    }

    function setActiveTab(tabName) {
      tabName = normalizeReportTabName(tabName);
      document.querySelectorAll("#report-tabs .tab-btn").forEach((btn) => {
        btn.classList.toggle("active", btn.dataset.tab === tabName);
      });
      document.querySelectorAll(".tab-panel").forEach((panel) => {
        panel.classList.toggle("active", panel.id === `tab-${tabName}`);
      });
      updateStickyTabOffset();
      requestAnimationFrame(() => {
        updateVisiblePlots();
      });
    }

    function restrictReportToSingleTab(tabName) {
      tabName = normalizeReportTabName(tabName);
      if (!tabName) return;
      const tabBar = document.getElementById("report-tabs");
      if (tabBar) {
        tabBar.querySelectorAll(".tab-btn").forEach((btn) => {
          if (btn.dataset.tab !== tabName) btn.remove();
        });
      }
      document.querySelectorAll(".tab-panel").forEach((panel) => {
        if (panel.id !== `tab-${tabName}`) {
          panel.remove();
          return;
        }
        panel.classList.add("active");
      });
      updateStickyTabOffset();
      requestAnimationFrame(() => {
        updateVisiblePlots();
      });
    }

    function buildPlotBlock(dataArr, plotId, title, showStats = true, includeHist = false, includeBands = false, includeApptype = false, includeScatter = true, prioritizeApptype = false, showAllDetail = true, includeRegion = false, includeApptypeBandCompare = false) {
      const groupedByResult = groupByResult(dataArr);
      const allStats = computeStatsFromGrouped(groupedByResult, "all_subj_grade");
      const allDetail = computeAdditionalStatsFromGrouped(groupedByResult, "all_subj_grade");
      const plotData = includeScatter ? createPlotDataFromGrouped(groupedByResult) : null;
      const statsHtmlAll = showStats ? createStatsHtml(allStats, plotId, false) : "";
      const detailAll = showStats && showAllDetail ? createDetailTable(allDetail, "전교과등급") : "";
      const academicYearTitleSuffix = buildAcademicYearTitleSuffix(dataArr);

      let apptypeHtml = "";
      let histHtml = "";
      let bandHtml = "";
      let apptypeBandHtml = "";
      let regionHtml = "";
      let extraHtml = "";
      let topHtml = "";
      let bottomHtml = "";

      if (includeApptype) {
        apptypeHtml += `<div class="section-spacer">
            <div class="card">
              <h3>전형별 현황</h3>
              <div id="apptype-table-${plotId}"></div>
            </div>
          </div>`;
      }
      if (includeRegion) {
        regionHtml += `<div class="section-spacer">
            <div class="card">
              <h3>지역별 현황</h3>
              <div id="region-table-${plotId}"></div>
            </div>
          </div>`;
      }
      if (includeHist) {
        histHtml += `<div class="grid-2 section-spacer">
            <div class="card">
              <h3>전교과등급 히스토그램</h3>
              <div id="hist-all-${plotId}" class="plot-container h-260"></div>
            </div>
            <div class="card">
              <h3>환산등급 히스토그램</h3>
              <div id="hist-conv-${plotId}" class="plot-container h-260"></div>
            </div>
          </div>`;
      }
      if (includeBands) {
        const currentBandMode = filterState.gradeBandModesByPlot[plotId] || DEFAULT_GRADE_BAND_MODE;
        filterState.gradeBandModesByPlot[plotId] = currentBandMode;
        const bandTargetId = `band-bar-${plotId}`;
        registerChartTableConfig(bandTargetId, createGradeBandSummaryTableConfig(dataArr, {
          key: "all_subj_grade",
          title: "전교과 등급대별 지원 건수 및 합격률 표",
          subtitle: [title, `총 ${dataArr.length.toLocaleString()}건`, formatAcademicYearScope(dataArr)].filter(Boolean).join(" · "),
          filenameBase: buildChartExportFilenameBase("전교과등급대별_지원건수_합격률_표", dataArr, title),
          sheetName: "등급대집계표",
        }));
        bandHtml += `<div class="section-spacer">
            <div class="card">
              <div class="card-head">
                <div class="card-head-copy">
                  <h3>전교과 등급대별 지원 건수 및 합격률${academicYearTitleSuffix}</h3>
                  <div class="card-note" id="band-note-${plotId}">등급 미기재 제외 0건</div>
                </div>
                <div class="card-head-actions">
                  ${buildPlotChartActionButtons(
                    bandTargetId,
                    buildChartExportFilenameBase("전교과등급대별_지원건수_합격률", dataArr),
                    buildChartExportTitle("전교과 등급대별 지원 건수 및 합격률", dataArr),
                    true
                  )}
                  <div class="segmented-control" data-band-mode-group="${plotId}" aria-label="충원합격 표시 방식">
                    <button type="button" class="segmented-btn${currentBandMode === "separate" ? " active" : ""}" data-band-mode="separate" aria-pressed="${currentBandMode === "separate"}">충원 분리</button>
                    <button type="button" class="segmented-btn${currentBandMode === "merged" ? " active" : ""}" data-band-mode="merged" aria-pressed="${currentBandMode === "merged"}">충원 합산</button>
                  </div>
                </div>
              </div>
              <div id="${bandTargetId}" class="plot-container h-320"></div>
            </div>
          </div>`;
      }
      if (includeApptypeBandCompare) {
        const apptypeBandModeKey = `apptype-band-${plotId}`;
        const currentApptypeBandMode = filterState.gradeBandModesByPlot[apptypeBandModeKey] || DEFAULT_GRADE_BAND_MODE;
        filterState.gradeBandModesByPlot[apptypeBandModeKey] = currentApptypeBandMode;
        apptypeBandHtml += `<div class="section-spacer">
            <div class="card">
              <div class="card-head">
                <div class="card-head-copy">
                  <h3>전형에 따른 등급대별 지원 건수 및 합격률${academicYearTitleSuffix}</h3>
                  <div class="card-note">전형별 현황에서 지원 건수가 많은 상위 2개 전형을 비교합니다. 각 전형 카드에서 SVG 또는 PNG로 저장할 수 있습니다.</div>
                </div>
                <div class="card-head-actions">
                  <div class="segmented-control" data-apptype-band-mode-group="${plotId}" aria-label="전형별 등급대 차트 충원합격 표시 방식">
                    <button type="button" class="segmented-btn${currentApptypeBandMode === "separate" ? " active" : ""}" data-band-mode="separate" aria-pressed="${currentApptypeBandMode === "separate"}">충원 분리</button>
                    <button type="button" class="segmented-btn${currentApptypeBandMode === "merged" ? " active" : ""}" data-band-mode="merged" aria-pressed="${currentApptypeBandMode === "merged"}">충원 합산</button>
                  </div>
                </div>
              </div>
              <div id="apptype-band-section-${plotId}"></div>
            </div>
          </div>`;
      }

      if (prioritizeApptype) {
        topHtml = apptypeHtml;
        bottomHtml = histHtml + bandHtml + apptypeBandHtml + regionHtml;
      } else {
        extraHtml = histHtml + bandHtml + apptypeBandHtml + apptypeHtml + regionHtml;
      }

      const html = `
        <div class="visualization-container">
          ${topHtml}
          <div class="plot-stats-wrapper">
            <div id="all-stats-${plotId}" class="stats-container">${statsHtmlAll}</div>
            ${includeScatter ? `<div class="plot-container" id="plot-${plotId}"></div>` : ""}
            ${showAllDetail ? `<div class="additional-stats-container" id="all-detail-${plotId}">${detailAll}</div>` : ""}
          </div>
          ${extraHtml}
          ${bottomHtml}
        </div>`;

      return { html, data: plotData };
    }

    function groupByResult(dataArr) {
      const grouped = {};
      grouped._total = dataArr.length;
      RESULT_ORDER.forEach((res) => { grouped[res] = []; });
      dataArr.forEach((row) => {
        if (grouped[row.result]) grouped[row.result].push(row);
      });
      return grouped;
    }

    function createPlotDataFromGrouped(groupedByResult) {
      const studentLabel = (r) => {
        const y = r.academic_year || "";
        return y ? `${y}학년도 지원 데이터` : "학생 지원 데이터";
      };

      const allTraces = RESULT_ORDER.map((res) => {
        const rows = groupedByResult[res] || [];
        const x = [];
        const customdata = [];
        rows.forEach((r) => {
          if (r.all_subj_grade === null) return;
          x.push(r.all_subj_grade);
          customdata.push([r.dept, r.subtype, r.univ, studentLabel(r)]);
        });
        return {
          x,
          y: new Array(x.length).fill(Y_POS[res] ?? 0),
          type: "scatter",
          mode: "markers",
          name: res,
          marker: {
            color: COLOR_MAP[res].fill,
            line: { color: COLOR_MAP[res].border, width: 1 },
            symbol: SYMBOL_MAP[res] || "circle",
            size: 10,
            opacity: 0.85,
          },
          customdata,
          hovertemplate: "전교과등급: %{x}<br>대학: %{customdata[2]}<br>모집단위: %{customdata[0]}<br>세부유형: %{customdata[1]}<br>%{customdata[3]}<extra></extra>",
          showlegend: false,
        };
      });

      return { allTraces: allTraces };
    }

    function createStatsHtml(stats, plotId, isConv) {
      const items = [];
      items.push(`<div class="stats-item stats-total">총 ${stats.total_count}건</div>`);
      if (stats.all_pass_count !== undefined) {
        items.push(`<div class="stats-item stats-pass">합격(전체): ${stats.all_pass_count}건 (${stats.all_pass_rate || "0%"})</div>`);
      }
      if (stats.pass_count !== undefined) {
        items.push(`<div class="stats-item stats-pass">합격(일반): ${stats.pass_count}건 (${stats.pass_rate})</div>`);
      }
      if (stats.waitlist_count !== undefined) {
        items.push(`<div class="stats-item stats-wait">충원합격: ${stats.waitlist_count}건 (${stats.waitlist_rate})</div>`);
      }
      if (stats.fail_count !== undefined) {
        const failRate = stats.total_count ? ((stats.fail_count / stats.total_count) * 100).toFixed(1) + "%" : "0.0%";
        items.push(`<div class="stats-item stats-fail">불합격: ${stats.fail_count}건 (${failRate})</div>`);
      }
      return items.join("");
    }

    function createDetailTable(detail, title) {
      const rows = RESULT_ORDER.map((res) => {
        const d = detail[res] || {};
        if (!d.count) return `<tr><td>${res}</td><td colspan="6">데이터 없음</td></tr>`;
        return `<tr class="${res === "합격" ? "pass-row" : res === "불합격" ? "fail-row" : "waitlist-row"}">
          <td>${res}</td>
          <td>${d.count}건</td>
          <td>${fmt(d.mean)}</td>
          <td>${fmt(d.std)}</td>
          <td>${fmt(d.min)} ~ ${fmt(d.max)}</td>
          <td>${fmt(d.median)}</td>
          <td>${fmtRange(d.q1, d.q3)}</td>
        </tr>`;
      }).join("");
      return `
        <div class="card">
          <h3>${title} 상세 통계</h3>
          <table class="stats-table">
            <thead><tr><th>결과</th><th>건수</th><th>평균</th><th>표준편차</th><th>범위</th><th>중앙값</th><th>1Q-3Q</th></tr></thead>
            <tbody>${rows}</tbody>
          </table>
        </div>`;
    }

    function computeStatsFromGrouped(groupedByResult, gradeKey) {
      const passRows = groupedByResult["합격"] || [];
      const waitRows = groupedByResult["충원합격"] || [];
      const failRows = groupedByResult["불합격"] || [];

      const passData = [];
      passRows.forEach((d) => { if (d[gradeKey] !== null) passData.push(d[gradeKey]); });
      waitRows.forEach((d) => { if (d[gradeKey] !== null) passData.push(d[gradeKey]); });

      const passCount = passRows.length;
      const waitCount = waitRows.length;
      const failCount = failRows.length;
      const total = groupedByResult._total ?? (passCount + waitCount + failCount);
      const stats = {
        total_count: total,
        pass_count: passCount,
        waitlist_count: waitCount,
        fail_count: failCount,
      };
      stats.all_pass_count = stats.pass_count + stats.waitlist_count;
      stats.pass_rate = total ? ((stats.pass_count / total) * 100).toFixed(1) + "%" : "0.0%";
      stats.waitlist_rate = total ? ((stats.waitlist_count / total) * 100).toFixed(1) + "%" : "0.0%";
      stats.all_pass_rate = total ? ((stats.all_pass_count / total) * 100).toFixed(1) + "%" : "0.0%";
      if (passData.length) {
        stats.all_pass_min = Math.min(...passData);
        stats.all_pass_max = Math.max(...passData);
        stats.all_pass_mean = mean(passData);
      }
      return stats;
    }

    function computeAdditionalStatsFromGrouped(groupedByResult, key) {
      const out = {};
      RESULT_ORDER.forEach((res) => {
        const rows = groupedByResult[res] || [];
        const arr = [];
        rows.forEach((d) => {
          if (d[key] !== null) arr.push(d[key]);
        });
        if (!arr.length) { out[res] = { count: 0 }; return; }
        out[res] = {
          count: arr.length,
          mean: mean(arr),
          std: stddev(arr),
          min: Math.min(...arr),
          max: Math.max(...arr),
          median: percentile(arr, 50),
          q1: percentile(arr, 25),
          q3: percentile(arr, 75),
        };
      });
      return out;
    }

    function mean(arr) { return arr.reduce((a, b) => a + b, 0) / arr.length; }
    function stddev(arr) { if (arr.length < 2) return 0; const m = mean(arr); return Math.sqrt(arr.reduce((s, v) => s + Math.pow(v - m, 2), 0) / (arr.length - 1)); }
    function percentile(arr, p) { if (!arr.length) return 0; const s = [...arr].sort((a, b) => a - b); const rank = (p / 100) * (s.length - 1); const l = Math.floor(rank); const h = Math.ceil(rank); if (l === h) return s[l]; const w = rank - l; return s[l] * (1 - w) + s[h] * w; }
    function fmt(v) { return v === undefined || v === null || Number.isNaN(v) ? "-" : Number(v).toFixed(2); }
    function fmtRange(a, b) { if ([a, b].some((x) => x === undefined || x === null || Number.isNaN(x))) return "-"; return `${Number(a).toFixed(2)} ~ ${Number(b).toFixed(2)}`; }
    function isUnivPassBandSmallSample(sampleCount) { return sampleCount > 0 && sampleCount < UNIV_PASS_BAND_SMALL_SAMPLE_THRESHOLD; }
    function formatUnivPassBandLabel(q1, q3, sampleCount) {
      const rangeLabel = fmtRange(q1, q3);
      if (rangeLabel === "-") return "-";
      return isUnivPassBandSmallSample(sampleCount) ? `${rangeLabel} (${UNIV_PASS_BAND_SMALL_SAMPLE_TEXT})` : rangeLabel;
    }
    function buildUnivPassBandMeta(passGrades = []) {
      const sampleCount = passGrades.length;
      const q1 = sampleCount ? percentile(passGrades, 25) : null;
      const q3 = sampleCount ? percentile(passGrades, 75) : null;
      return {
        q1,
        q3,
        sampleCount,
        label: formatUnivPassBandLabel(q1, q3, sampleCount),
      };
    }
    function buildUnivPassBandMetaFromRecords(records = []) {
      const passGrades = [];
      records.forEach((record) => {
        if ((record.result === "합격" || record.result === "충원합격") && record.all_subj_grade !== null) {
          passGrades.push(record.all_subj_grade);
        }
      });
      return buildUnivPassBandMeta(passGrades);
    }
    function formatUnivPassBandSampleText(sampleCount) {
      return sampleCount ? `합격·충원 표본 ${sampleCount}건` : "합격·충원 표본 없음";
    }
    function formatUnivPassBandTableCellHtml(label) {
      const smallSampleSuffix = ` (${UNIV_PASS_BAND_SMALL_SAMPLE_TEXT})`;
      const safeLabel = String(label || "-");
      if (!safeLabel.endsWith(smallSampleSuffix)) return escapeHtml(safeLabel);
      const rangeLabel = safeLabel.slice(0, -smallSampleSuffix.length);
      return `${escapeHtml(rangeLabel)}<br><span class="summary-cell-subnote">(${UNIV_PASS_BAND_SMALL_SAMPLE_TEXT})</span>`;
    }
    function buildUnivPassBandDetailSubtitle(passBandMeta) {
      return `${UNIV_PASS_BAND_LABEL} ${passBandMeta.label} · ${formatUnivPassBandSampleText(passBandMeta.sampleCount)} · ${UNIV_PASS_BAND_DESCRIPTION}`;
    }
    function buildUnivTopNoteHtml(modeText) {
      return `상위 20개 대학은 지원 건수 기준으로 선정했습니다. 막대는 ${modeText}, 우측 숫자 열은 총건수와 ${UNIV_PASS_BAND_LABEL}입니다. ${UNIV_PASS_BAND_LABEL}는 ${UNIV_PASS_BAND_DESCRIPTION}이며, 합격·충원 표본 ${UNIV_PASS_BAND_SMALL_SAMPLE_THRESHOLD}건 미만 정보는 hover와 상세 화면에서 안내합니다.<span class="card-note-emphasis">막대그래프나 대학명을 클릭하면 해당 대학의 지원 데이터를 조회할 수 있습니다.</span>`;
    }
    function buildUnivTopSectionHtml(scope = "global") {
      return `<div class="dept-container section-top20" id="univ-top-${scope}">
          <div class="dept-header">지원 상위 대학 TOP 20</div>
          <div class="card">
            <div class="card-head">
              <div class="card-head-copy">
                <h3>합격/충원/불합격 결과 비교</h3>
                <div class="card-note" data-univ-top-note="${scope}">${buildUnivTopNoteHtml("결과 비율")}</div>
              </div>
              <div class="control-stack">
                <div class="control-group">
                  <div class="control-group-label">표시 방식</div>
                  <div class="segmented-control" data-univ-top-mode-group="${scope}" aria-label="대학 TOP 20 차트 표시 방식">
                    <button type="button" class="segmented-btn active" data-univ-top-mode="ratio" aria-pressed="true">비율 보기</button>
                    <button type="button" class="segmented-btn" data-univ-top-mode="count" aria-pressed="false">건수 보기</button>
                  </div>
                </div>
                <div class="control-group">
                  <div class="control-group-label">정렬 기준</div>
                  <div class="segmented-control" data-univ-top-sort-group="${scope}" aria-label="대학 TOP 20 정렬 기준">
                    <button type="button" class="segmented-btn active" data-univ-top-sort="total" aria-pressed="true">지원건수순</button>
                    <button type="button" class="segmented-btn" data-univ-top-sort="allPassRate" aria-pressed="false">합격률순</button>
                  </div>
                </div>
              </div>
            </div>
            <div id="univ-top-chart-${scope}" class="plot-container"></div>
          </div>
        </div>`;
    }
    function buildUnivDirectoryNoteHtml() {
      return `대학명을 검색해 원하는 대학을 여러 개 추가한 뒤 <span class="card-note-emphasis">상세보기</span>로 함께 확인할 수 있습니다. 합격건과 합격률은 충원합격을 포함하며, 검색 결과 정렬 기준은 오른쪽에서 바꿀 수 있습니다.`;
    }

    function createLayout() {
      return {
        height: 200,
        autosize: true,
        margin: { t: 8, b: 44, l: 24, r: 16 },
        xaxis: {
          range: [0.5, 9.5], tickmode: "array",
          tickvals: [1,2,3,4,5,6,7,8,9],
          ticktext: ["1","2","3","4","5","6","7","8","9"],
          title: { text: "등급", font: { size: 11, color: "#9ca3af" } },
          gridcolor: "#f5f5f5", gridwidth: 1,
          linecolor: "#e5e7eb", linewidth: 1,
          tickfont: { size: 11, color: "#6b7280" },
        },
        yaxis: {
          range: [-0.05, 0.05], tickmode: "array",
          tickvals: [0.01, 0.0, -0.03], ticktext: ["합격", "충원", "불합격"],
          showgrid: false, zeroline: false,
          tickfont: { size: 10, color: "#9ca3af" },
        },
        showlegend: false,
        plot_bgcolor: "#fafafa",
        paper_bgcolor: "#fff",
        font: { family: "Inter, -apple-system, sans-serif", color: "#6b7280", size: 12 },
        hoverlabel: { bgcolor: "#fff", bordercolor: "#e5e7eb", font: { family: "Inter, sans-serif", size: 12, color: "#111827" } },
      };
    }

    function registerAuxRenderers(records, allRecords, metaYears) {
      renderState.auxRendererMap = {};
      Object.keys(renderState.plotRegistryData).forEach((pid) => {
        if (document.getElementById(`hist-all-${pid}`)) {
          renderState.auxRendererMap[`hist-all-${pid}`] = () => renderHist(records, "all_subj_grade", `hist-all-${pid}`, "전교과등급");
        }
        if (document.getElementById(`hist-conv-${pid}`)) {
          renderState.auxRendererMap[`hist-conv-${pid}`] = () => renderHist(records, "conv_grade", `hist-conv-${pid}`, "환산등급(일반교과)");
        }
        if (document.getElementById(`band-bar-${pid}`)) {
          renderState.auxRendererMap[`band-bar-${pid}`] = () => renderGradeBands(records, "all_subj_grade", pid);
        }
        if (document.getElementById(`apptype-band-section-${pid}`)) {
          renderState.auxRendererMap[`apptype-band-section-${pid}`] = () => renderApptypeGradeBandComparisons(records, pid);
        }
        if (document.getElementById(`apptype-table-${pid}`)) {
          renderState.auxRendererMap[`apptype-table-${pid}`] = () => renderApptypeStats(records, pid);
        }
        if (document.getElementById(`region-table-${pid}`)) {
          renderState.auxRendererMap[`region-table-${pid}`] = () => renderRegionStats(records, pid);
        }
      });
      if (document.getElementById("univ-top-chart-global")) {
        renderState.auxRendererMap["univ-top-chart-global"] = () => renderUnivTop(records, "global");
	      }
	      const yrs = metaYears || [];
	      const all = allRecords || records;
	      const locFilteredAll = filterRecordsByLocation(all, filterState.locationFilter);
	      if (document.getElementById("year-apptype-trend-table")) {
	        renderState.auxRendererMap["year-apptype-trend-table"] = () => renderYearApptypeTrendTable(locFilteredAll, yrs, "year-apptype-trend-table");
	      }
	      if (document.getElementById("year-univ-trend-table")) {
	        renderState.auxRendererMap["year-univ-trend-table"] = () => renderYearUnivTrendTable(locFilteredAll, yrs, "year-univ-trend-table");
	      }
	    }

    function renderAuxById(targetId) {
      const renderer = renderState.auxRendererMap[targetId];
      if (!renderer) return;
      renderer();
      delete renderState.auxRendererMap[targetId];
    }

    function renderPlotIfNeeded(plotId) {
      if (renderState.initializedPlots[plotId]) return;
      const div = document.getElementById(`plot-${plotId}`);
      const data = renderState.plotRegistryData[plotId];
      if (!div || !data) return;
      Plotly.newPlot(div, data.allTraces, createLayout(), { displayModeBar: false, responsive: true });
      renderState.initializedPlots[plotId] = true;
    }

    function getVisiblePlotIds(buffer = 240) {
      const visibleIds = [];
      document.querySelectorAll(".plot-container[id^='plot-']").forEach((div) => {
        const rect = div.getBoundingClientRect();
        if (rect.bottom >= -buffer && rect.top <= window.innerHeight + buffer) {
          visibleIds.push(div.id.split("-")[1]);
        }
      });
      return visibleIds;
    }

    function updateVisiblePlots() {
      const visibleIds = getVisiblePlotIds();
      visibleIds.forEach((id) => {
        const data = renderState.plotRegistryData[id];
        const div = document.getElementById(`plot-${id}`);
        if (!data || !div) return;
        if (!renderState.initializedPlots[id]) {
          renderPlotIfNeeded(id);
          return;
        }
        Plotly.react(div, data.allTraces, createLayout(), { displayModeBar: false, responsive: true });
      });
    }

    function initLazyRendering(records, allRecords, metaYears) {
      registerAuxRenderers(records, allRecords, metaYears);

      const plotDivs = document.querySelectorAll(".plot-container[id^='plot-']");
      if ("IntersectionObserver" in window) {
        renderState.plotIntersectionObserver = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const plotId = entry.target.id.split("-")[1];
              renderPlotIfNeeded(plotId);
            }
          });
        }, { root: null, rootMargin: "240px 0px", threshold: 0.01 });
        plotDivs.forEach((div) => renderState.plotIntersectionObserver.observe(div));
      } else {
        plotDivs.forEach((div) => renderPlotIfNeeded(div.id.split("-")[1]));
      }

      const auxIds = Object.keys(renderState.auxRendererMap);
      if ("IntersectionObserver" in window) {
        renderState.auxIntersectionObserver = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            renderAuxById(entry.target.id);
            renderState.auxIntersectionObserver.unobserve(entry.target);
          });
        }, { root: null, rootMargin: "240px 0px", threshold: 0.01 });
        auxIds.forEach((id) => {
          const el = document.getElementById(id);
          if (el) renderState.auxIntersectionObserver.observe(el);
        });
      } else {
        auxIds.forEach((id) => renderAuxById(id));
      }

      requestAnimationFrame(() => {
        updateVisiblePlots();
      });
    }

    function makeHistogramSeries(records, key) {
      const passArr = records.filter((r) => r.result === "합격" || r.result === "충원합격").map((r) => r[key]).filter((v) => v !== null);
      const failArr = records.filter((r) => r.result === "불합격").map((r) => r[key]).filter((v) => v !== null);
      const edges = [];
      for (let v = BINS.start; v < BINS.end; v += BINS.size) edges.push(Number(v.toFixed(4)));
      edges.push(BINS.end);
      const bins = edges.length - 1;
      const passCounts = new Array(bins).fill(0);
      const failCounts = new Array(bins).fill(0);
      const center = [];
      for (let i = 0; i < bins; i++) {
        center.push((edges[i] + edges[i + 1]) / 2);
      }
      const fillCounts = (arr, target) => {
        arr.forEach((v) => {
          if (v < BINS.start || v > BINS.end) return;
          const idx = Math.min(Math.floor((v - BINS.start) / BINS.size), bins - 1);
          target[idx] += 1;
        });
      };
      fillCounts(passArr, passCounts);
      fillCounts(failArr, failCounts);
      return { center, passCounts, failCounts };
    }

    function getGradeBandMode(plotId) {
      return filterState.gradeBandModesByPlot[plotId] || DEFAULT_GRADE_BAND_MODE;
    }

    function syncGradeBandModeButtons(plotId) {
      const group = document.querySelector(`[data-band-mode-group="${plotId}"]`);
      if (!group) return;
      const mode = getGradeBandMode(plotId);
      group.querySelectorAll("[data-band-mode]").forEach((btn) => {
        const active = btn.dataset.bandMode === mode;
        btn.classList.toggle("active", active);
        btn.setAttribute("aria-pressed", active ? "true" : "false");
      });
    }

    function bindGradeBandModeToggles(records) {
      document.querySelectorAll("[data-band-mode-group]").forEach((group) => {
        const plotId = group.dataset.bandModeGroup;
        syncGradeBandModeButtons(plotId);
        group.querySelectorAll("[data-band-mode]").forEach((btn) => {
          btn.addEventListener("click", () => {
            const nextMode = btn.dataset.bandMode || DEFAULT_GRADE_BAND_MODE;
            if (getGradeBandMode(plotId) === nextMode) return;
            filterState.gradeBandModesByPlot[plotId] = nextMode;
            syncGradeBandModeButtons(plotId);
            renderGradeBands(records, "all_subj_grade", plotId);
          });
        });
      });
    }

    function getApptypeBandMode(plotId) {
      return getGradeBandMode(`apptype-band-${plotId}`);
    }

    function syncApptypeBandModeButtons(plotId) {
      const group = document.querySelector(`[data-apptype-band-mode-group="${plotId}"]`);
      if (!group) return;
      const mode = getApptypeBandMode(plotId);
      group.querySelectorAll("[data-band-mode]").forEach((btn) => {
        const active = btn.dataset.bandMode === mode;
        btn.classList.toggle("active", active);
        btn.setAttribute("aria-pressed", active ? "true" : "false");
      });
    }

    function bindApptypeBandModeToggles(records) {
      document.querySelectorAll("[data-apptype-band-mode-group]").forEach((group) => {
        const plotId = group.dataset.apptypeBandModeGroup;
        syncApptypeBandModeButtons(plotId);
        group.querySelectorAll("[data-band-mode]").forEach((btn) => {
          btn.addEventListener("click", () => {
            const nextMode = btn.dataset.bandMode || DEFAULT_GRADE_BAND_MODE;
            const modeKey = `apptype-band-${plotId}`;
            if (getGradeBandMode(modeKey) === nextMode) return;
            filterState.gradeBandModesByPlot[modeKey] = nextMode;
            syncApptypeBandModeButtons(plotId);
            renderApptypeGradeBandComparisons(records, plotId);
          });
        });
      });
    }
    function waitForRender(ms = 80) {
      return new Promise((resolve) => {
        setTimeout(resolve, ms);
      });
    }
    async function ensurePlotReadyForExport(targetId) {
      let plotEl = document.getElementById(targetId);
      if (!plotEl) return null;
      if (plotEl.data && plotEl.layout) return plotEl;
      renderAuxById(targetId);
      await waitForRender(120);
      plotEl = document.getElementById(targetId);
      if (plotEl && plotEl.data && plotEl.layout) return plotEl;
      await waitForRender(180);
      plotEl = document.getElementById(targetId);
      return plotEl && plotEl.data && plotEl.layout ? plotEl : null;
    }
    async function downloadPlotImage(targetId, filenameBase, format = "svg", exportTitle = "") {
      if (typeof Plotly === "undefined" || typeof Plotly.downloadImage !== "function") {
        throw new Error("차트 저장 기능을 사용할 수 없습니다.");
      }
      const plotEl = await ensurePlotReadyForExport(targetId);
      if (!plotEl) {
        throw new Error("차트를 불러온 뒤 다시 시도해주세요.");
      }
      const originalTitle = plotEl.layout && plotEl.layout.title
        ? JSON.parse(JSON.stringify(plotEl.layout.title))
        : { text: "" };
      const originalMargin = plotEl.layout && plotEl.layout.margin
        ? { ...plotEl.layout.margin }
        : {};
      const originalLegend = plotEl.layout && plotEl.layout.legend
        ? JSON.parse(JSON.stringify(plotEl.layout.legend))
        : null;
      try {
        if (exportTitle) {
          const exportMargin = {
            ...originalMargin,
            t: Math.max(92, originalMargin.t || 0),
            b: Math.max(110, originalMargin.b || 0),
          };
          const exportLegend = originalLegend
            ? {
                ...originalLegend,
                x: originalLegend.x !== undefined ? originalLegend.x : 0.5,
                xanchor: originalLegend.xanchor || "center",
                y: typeof originalLegend.y === "number" && originalLegend.y > 1 ? -0.24 : originalLegend.y,
              }
            : undefined;
          await Plotly.relayout(plotEl, {
            title: {
              text: exportTitle,
              x: 0.5,
              xanchor: "center",
              y: 0.99,
              yanchor: "top",
              pad: { b: 10 },
              font: { size: 15, color: "#111827", family: "Inter, sans-serif" },
            },
            margin: exportMargin,
            ...(exportLegend ? { legend: exportLegend } : {}),
          });
          await waitForRender(40);
        }
        const rect = plotEl.getBoundingClientRect();
        await Plotly.downloadImage(plotEl, {
          format,
          filename: `${sanitizeFilenamePart(filenameBase)}_${buildExportTimestamp()}`,
          width: Math.max(960, Math.round(rect.width || 960)),
          height: Math.max(480, Math.round(rect.height || 480)),
          scale: format === "png" ? 2 : 1,
        });
      } finally {
        if (exportTitle) {
          await Plotly.relayout(plotEl, {
            title: originalTitle,
            margin: originalMargin,
            ...(originalLegend ? { legend: originalLegend } : {}),
          });
        }
      }
    }
    function closeChartExportMenus(root = document) {
      if (!root || typeof root.querySelectorAll !== "function") return;
      root.querySelectorAll("[data-chart-export-menu]").forEach((menu) => {
        const toggle = menu.querySelector("[data-chart-export-toggle]");
        const popover = menu.querySelector("[data-chart-export-popover]");
        if (popover) popover.hidden = true;
        if (toggle) {
          toggle.classList.remove("is-open");
          toggle.setAttribute("aria-expanded", "false");
        }
      });
    }

    function bindPlotExportButtons(root = document) {
      if (!root || typeof root.querySelectorAll !== "function") return;

      root.querySelectorAll("[data-chart-export-menu]").forEach((menu) => {
        const toggle = menu.querySelector("[data-chart-export-toggle]");
        const popover = menu.querySelector("[data-chart-export-popover]");
        if (!toggle || !popover) return;

        toggle.onclick = (event) => {
          event.stopPropagation();
          const nextOpen = popover.hidden;
          closeChartExportMenus(document);
          popover.hidden = !nextOpen;
          toggle.classList.toggle("is-open", nextOpen);
          toggle.setAttribute("aria-expanded", nextOpen ? "true" : "false");
        };
      });

      root.querySelectorAll("[data-plot-export-target]").forEach((btn) => {
        btn.onclick = async (event) => {
          event.stopPropagation();
          const targetId = btn.getAttribute("data-plot-export-target") || "";
          const format = btn.getAttribute("data-plot-export-format") || "svg";
          const filenameBase = btn.getAttribute("data-plot-export-name") || "차트";
          const exportTitle = btn.getAttribute("data-plot-export-title") || "";
          if (!targetId) return;

          const menu = btn.closest("[data-chart-export-menu]");
          const toggle = menu ? menu.querySelector("[data-chart-export-toggle]") : null;
          const originalLabel = btn.textContent;

          closeChartExportMenus(document);
          btn.disabled = true;
          if (toggle) toggle.disabled = true;
          btn.textContent = format.toUpperCase() + " 저장중...";
          try {
            await downloadPlotImage(targetId, filenameBase, format, exportTitle);
          } catch (error) {
            console.error(error);
            window.alert(error && error.message ? error.message : "차트 저장 중 오류가 발생했습니다.");
          } finally {
            btn.disabled = false;
            if (toggle) toggle.disabled = false;
            btn.textContent = originalLabel;
          }
        };
      });

      document.removeEventListener("click", handleChartExportMenuDocumentClick);
      document.removeEventListener("keydown", handleChartExportMenuDocumentKeydown);
      document.addEventListener("click", handleChartExportMenuDocumentClick);
      document.addEventListener("keydown", handleChartExportMenuDocumentKeydown);
    }

    function bindPlotTableButtons(root = document) {
      if (!root || typeof root.querySelectorAll !== "function") return;
      root.querySelectorAll("[data-plot-table-target]").forEach((btn) => {
        btn.onclick = (event) => {
          event.stopPropagation();
          closeChartExportMenus(document);
          const targetId = btn.getAttribute("data-plot-table-target") || "";
          const config = targetId ? renderState.chartTableRegistry[targetId] : null;
          if (!config) {
            window.alert("표 데이터를 불러오지 못했습니다.");
            return;
          }
          openSummaryTableModal(config);
        };
      });
    }

    function handleChartExportMenuDocumentClick(event) {
      if (event.target instanceof Element && event.target.closest("[data-chart-export-menu]")) return;
      closeChartExportMenus(document);
    }

    function handleChartExportMenuDocumentKeydown(event) {
      if (event.key !== "Escape") return;
      closeChartExportMenus(document);
    }

    /* ── Analytics sub-view helpers ── */
    const ANALYTICS_UNIV_PLOT_BASE = 9000;
    const ANALYTICS_DEPT_PLOT_BASE = 9500;
    const ANALYTICS_SUBTYPE_PLOT_BASE = 9800;
    const ANALYTICS_CONDITION_PLOT_BASE = 9900;

    function cleanupAnalyticsPlots(rootEl) {
      if (!rootEl) return;
      rootEl.querySelectorAll(".plot-container").forEach((div) => {
        if (typeof Plotly !== "undefined" && typeof Plotly.purge === "function") {
          try { Plotly.purge(div); } catch (_) { /* ignore */ }
        }
      });
      // 분석 뷰 plotRegistryData 정리 (9000+)
      Object.keys(renderState.plotRegistryData).forEach((pid) => {
        if (Number(pid) >= ANALYTICS_UNIV_PLOT_BASE) delete renderState.plotRegistryData[pid];
      });
      Object.keys(renderState.initializedPlots).forEach((pid) => {
        if (Number(pid) >= ANALYTICS_UNIV_PLOT_BASE) delete renderState.initializedPlots[pid];
      });
    }

    function bindGradeBandModeTogglesScoped(rootEl, records) {
      if (!rootEl) return;
      rootEl.querySelectorAll("[data-band-mode-group]").forEach((group) => {
        const plotId = group.dataset.bandModeGroup;
        syncGradeBandModeButtons(plotId);
        group.querySelectorAll("[data-band-mode]").forEach((btn) => {
          btn.addEventListener("click", () => {
            const nextMode = btn.dataset.bandMode || DEFAULT_GRADE_BAND_MODE;
            if (getGradeBandMode(plotId) === nextMode) return;
            filterState.gradeBandModesByPlot[plotId] = nextMode;
            syncGradeBandModeButtons(plotId);
            renderGradeBands(records, "all_subj_grade", plotId);
          });
        });
      });
    }

    function bindApptypeBandModeTogglesScoped(rootEl, records) {
      if (!rootEl) return;
      rootEl.querySelectorAll("[data-apptype-band-mode-group]").forEach((group) => {
        const plotId = group.dataset.apptypeBandModeGroup;
        syncApptypeBandModeButtons(plotId);
        group.querySelectorAll("[data-band-mode]").forEach((btn) => {
          btn.addEventListener("click", () => {
            const nextMode = btn.dataset.bandMode || DEFAULT_GRADE_BAND_MODE;
            const modeKey = `apptype-band-${plotId}`;
            if (getGradeBandMode(modeKey) === nextMode) return;
            filterState.gradeBandModesByPlot[modeKey] = nextMode;
            syncApptypeBandModeButtons(plotId);
            renderApptypeGradeBandComparisons(records, plotId);
          });
        });
      });
    }

    function getGradeBandBarColor(mode, key, isLowSample) {
      const palette = GRADE_BAND_COLORS[mode][key];
      return isLowSample ? palette.weak : palette.strong;
    }

    function buildGradeBandHoverTemplate(traceLabel) {
      return `<b>%{x}</b><br>총 건수: %{customdata[0]}건<br>합격: %{customdata[1]}건<br>충원합격: %{customdata[2]}건<br>불합격: %{customdata[3]}건<br>최초합격률: %{customdata[4]:.1f}%<br>충원포함 합격률: %{customdata[5]:.1f}%<extra>${traceLabel}</extra>`;
    }

    function formatPercentageText(value, total = 0) {
      return total ? `${Number(value).toFixed(1)}%` : "-";
    }

    function createGradeBandSummaryTableConfig(records, options = {}) {
      const key = options.key || "all_subj_grade";
      const { stats, excludedCount } = makeGradeBandStats(records, key);
      const yearScope = formatAcademicYearScope(records);
      const analyzedCount = Math.max(0, records.length - excludedCount);
      const subtitleParts = options.subtitle
        ? [options.subtitle]
        : [
            options.contextLabel || "",
            `총 ${records.length.toLocaleString()}건`,
            yearScope,
          ];
      const metaParts = [
        `등급 기재 ${analyzedCount.toLocaleString()}건`,
        `등급 미기재 제외 ${excludedCount.toLocaleString()}건`,
        `표본 적음 기준 ${GRADE_BAND_LOW_SAMPLE_THRESHOLD}건 미만`,
      ];
      const columns = [
        { key: "band", header: "등급대", width: "108px", align: "center" },
        { key: "total", header: "지원건수", width: "94px", align: "right" },
        { key: "pass", header: "합격", width: "82px", align: "right" },
        { key: "wait", header: "충원합격", width: "96px", align: "right" },
        { key: "fail", header: "불합격", width: "82px", align: "right" },
        { key: "firstPassRate", header: "최초합격률", width: "98px", align: "right" },
        { key: "allPassRate", header: "충원포함 합격률", width: "122px", align: "right" },
        { key: "sampleNote", header: "비고", width: "96px", align: "center" },
      ];
      const rows = stats.map((item) => ({
        band: item.label,
        total: item.total.toLocaleString(),
        pass: item.pass.toLocaleString(),
        wait: item.wait.toLocaleString(),
        fail: item.fail.toLocaleString(),
        firstPassRate: formatPercentageText(item.firstPassRate, item.total),
        allPassRate: formatPercentageText(item.allPassRate, item.total),
        sampleNote: item.isLowSample ? "표본 적음" : "",
      }));
      const exportRows = stats.map((item) => ({
        "등급대": item.label,
        "지원건수": item.total,
        "합격": item.pass,
        "충원합격": item.wait,
        "불합격": item.fail,
        "최초합격률": formatPercentageText(item.firstPassRate, item.total),
        "충원포함 합격률": formatPercentageText(item.allPassRate, item.total),
        "비고": item.isLowSample ? "표본 적음" : "",
      }));
      return {
        type: "summaryTable",
        title: options.title || "등급대 집계표",
        subtitle: subtitleParts.filter(Boolean).join(" · "),
        metaText: metaParts.join(" · "),
        columns,
        rows,
        exportRows,
        exportOptions: {
          sheetName: options.sheetName || "등급대집계표",
          filenameBase: options.filenameBase || "등급대집계표",
        },
      };
    }

    function makeGradeBandStats(records, key) {
      const excludedCount = records.filter((r) => r[key] === null).length;
      const stats = GRADE_BANDS.map((band) => {
        const inBand = records.filter((r) => r[key] !== null && r[key] >= band.from && r[key] < band.to);
        const pass = inBand.filter((r) => r.result === "합격").length;
        const wait = inBand.filter((r) => r.result === "충원합격").length;
        const fail = inBand.filter((r) => r.result === "불합격").length;
        const total = pass + wait + fail;
        return {
          label: band.label,
          pass,
          wait,
          fail,
          total,
          firstPassRate: total ? (pass / total) * 100 : 0,
          allPassRate: total ? ((pass + wait) / total) * 100 : 0,
          isLowSample: total > 0 && total < GRADE_BAND_LOW_SAMPLE_THRESHOLD,
        };
      });
      return { stats, excludedCount };
    }

    function getGradeBandDefinition(label) {
      return GRADE_BANDS.find((band) => band.label === label) || null;
    }

    function getGradeBandYAxisMax(stats, fixedYMax = null) {
      if (fixedYMax !== null && fixedYMax !== undefined) return fixedYMax;
      const maxTotal = Math.max(...stats.map((s) => s.total), 0);
      return Math.max(4, maxTotal + Math.max(2, Math.ceil(maxTotal * 0.28)));
    }

    function buildGradeBandAnnotations(stats) {
      return stats.flatMap((s) => {
        const items = [{
          x: s.label,
          y: s.total,
          text: `${s.total}건`,
          showarrow: false,
          yshift: 12,
          font: { size: 11, color: "#111827", family: "Inter, sans-serif" },
        }];
        if (s.isLowSample) {
          items.push({
            x: s.label,
            y: s.total,
            text: "표본 적음",
            showarrow: false,
            yshift: 30,
            bgcolor: "#fffbeb",
            bordercolor: "#f59e0b",
            borderwidth: 1,
            borderpad: 4,
            font: { size: 10, color: "#92400e", family: "Inter, sans-serif" },
          });
        }
        return items;
      });
    }

    function renderGradeBandPlot(graphEl, stats, mode, yMax, onSelect) {
      const labels = stats.map((s) => s.label);
      const totals = stats.map((s) => s.total);
      const passCounts = stats.map((s) => s.pass);
      const waitCounts = stats.map((s) => s.wait);
      const failCounts = stats.map((s) => s.fail);
      const mergedPassCounts = stats.map((s) => s.pass + s.wait);
      const rateValues = stats.map((s) => s.total ? Number(s.allPassRate.toFixed(1)) : null);
      const hoverData = stats.map((s) => [s.total, s.pass, s.wait, s.fail, Number(s.firstPassRate.toFixed(1)), Number(s.allPassRate.toFixed(1))]);
      const hasData = totals.some((v) => v > 0);
      if (!hasData) {
        graphEl.innerHTML = '<div class="empty">데이터 없음</div>';
        return;
      }
      const traces = [];
      if (mode === "separate") {
        traces.push(
          {
            x: labels,
            y: passCounts,
            type: "bar",
            name: "합격",
            marker: { color: stats.map((s) => getGradeBandBarColor("separate", "pass", s.isLowSample)), line: { width: 0 } },
            customdata: hoverData,
            hovertemplate: buildGradeBandHoverTemplate("합격"),
          },
          {
            x: labels,
            y: waitCounts,
            type: "bar",
            name: "충원합격",
            marker: { color: stats.map((s) => getGradeBandBarColor("separate", "wait", s.isLowSample)), line: { width: 0 } },
            customdata: hoverData,
            hovertemplate: buildGradeBandHoverTemplate("충원합격"),
          },
          {
            x: labels,
            y: failCounts,
            type: "bar",
            name: "불합격",
            marker: { color: stats.map((s) => getGradeBandBarColor("separate", "fail", s.isLowSample)), line: { width: 0 } },
            customdata: hoverData,
            hovertemplate: buildGradeBandHoverTemplate("불합격"),
          }
        );
      } else {
        traces.push(
          {
            x: labels,
            y: mergedPassCounts,
            type: "bar",
            name: "합격(충원포함)",
            marker: { color: stats.map((s) => getGradeBandBarColor("merged", "pass", s.isLowSample)), line: { width: 0 } },
            customdata: hoverData,
            hovertemplate: buildGradeBandHoverTemplate("합격(충원포함)"),
          },
          {
            x: labels,
            y: failCounts,
            type: "bar",
            name: "불합격",
            marker: { color: stats.map((s) => getGradeBandBarColor("merged", "fail", s.isLowSample)), line: { width: 0 } },
            customdata: hoverData,
            hovertemplate: buildGradeBandHoverTemplate("불합격"),
          }
        );
      }
      traces.push({
        x: labels,
        y: rateValues,
        type: "scatter",
        mode: "lines+markers",
        name: "충원포함 합격률",
        yaxis: "y2",
        connectgaps: false,
        marker: { size: 8, color: "#2563eb", line: { width: 2, color: "#ffffff" } },
        line: { width: 2.5, color: "#2563eb", shape: "linear" },
        customdata: hoverData,
        hovertemplate: buildGradeBandHoverTemplate("충원포함 합격률"),
      });

      Plotly.newPlot(graphEl, traces, {
        height: 320,
        barmode: "stack",
        bargap: 0.28,
        margin: { t: 32, b: 48, l: 52, r: 56 },
        xaxis: {
          type: "category",
          categoryorder: "array",
          categoryarray: labels,
          tickfont: { size: 11, color: "#6b7280" },
        },
        yaxis: {
          title: { text: "건수", font: { size: 11, color: "#9ca3af" } },
          range: [0, yMax],
          gridcolor: "#f0f0f0",
          gridwidth: 1,
          zeroline: false,
          tickfont: { size: 11, color: "#9ca3af" },
        },
        yaxis2: {
          title: { text: "합격률", font: { size: 11, color: "#9ca3af" } },
          overlaying: "y",
          side: "right",
          range: [0, 100],
          ticksuffix: "%",
          showgrid: false,
          zeroline: false,
          tickfont: { size: 11, color: "#9ca3af" },
        },
        annotations: buildGradeBandAnnotations(stats),
        legend: { orientation: "h", x: 0.5, xanchor: "center", y: 1.16, font: { size: 11, color: "#6b7280" } },
        plot_bgcolor: "#fff",
        paper_bgcolor: "#fff",
        font: { family: "Inter, -apple-system, sans-serif" },
      }, { displayModeBar: false, responsive: true }).then(() => {
        bindGradeBandInteractions(graphEl, onSelect);
      });
    }

    function getUnivTopMode() {
      return filterState.univTopDisplayMode || DEFAULT_UNIV_TOP_MODE;
    }

    function syncUnivTopModeButtons() {
      const mode = getUnivTopMode();
      document.querySelectorAll("[data-univ-top-mode-group]").forEach((group) => {
        group.querySelectorAll("[data-univ-top-mode]").forEach((btn) => {
          const active = btn.dataset.univTopMode === mode;
          btn.classList.toggle("active", active);
          btn.setAttribute("aria-pressed", active ? "true" : "false");
        });
      });
    }

    function updateUnivTopNote() {
      const modeText = getUnivTopMode() === "ratio" ? "결과 비율" : "절대 건수";
      const html = buildUnivTopNoteHtml(modeText);
      document.querySelectorAll("[data-univ-top-note]").forEach((noteEl) => {
        noteEl.innerHTML = html;
      });
    }

    function rerenderAllUnivTopCharts() {
      univTopRecordsByScope.forEach((records, scope) => {
        if (document.getElementById(`univ-top-chart-${scope}`)) {
          renderUnivTop(records, scope);
        }
      });
    }

    function bindUnivTopModeToggle(records, scope = "global") {
      const group = document.querySelector(`[data-univ-top-mode-group="${scope}"]`);
      if (!group) return;
      univTopRecordsByScope.set(scope, records);
      syncUnivTopModeButtons();
      updateUnivTopNote();
      group.querySelectorAll("[data-univ-top-mode]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const nextMode = btn.dataset.univTopMode || DEFAULT_UNIV_TOP_MODE;
          if (getUnivTopMode() === nextMode) return;
          filterState.univTopDisplayMode = nextMode;
          syncUnivTopModeButtons();
          updateUnivTopNote();
          rerenderAllUnivTopCharts();
        });
      });
    }

    function getUnivTopSort() {
      return filterState.univTopSortKey || DEFAULT_UNIV_TOP_SORT;
    }

    function syncUnivTopSortButtons() {
      const sortKey = getUnivTopSort();
      document.querySelectorAll("[data-univ-top-sort-group]").forEach((group) => {
        group.querySelectorAll("[data-univ-top-sort]").forEach((btn) => {
          const active = btn.dataset.univTopSort === sortKey;
          btn.classList.toggle("active", active);
          btn.setAttribute("aria-pressed", active ? "true" : "false");
        });
      });
    }

    function bindUnivTopSortToggle(records, scope = "global") {
      const group = document.querySelector(`[data-univ-top-sort-group="${scope}"]`);
      if (!group) return;
      univTopRecordsByScope.set(scope, records);
      syncUnivTopSortButtons();
      updateUnivTopNote();
      group.querySelectorAll("[data-univ-top-sort]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const nextSort = btn.dataset.univTopSort || DEFAULT_UNIV_TOP_SORT;
          if (getUnivTopSort() === nextSort) return;
          filterState.univTopSortKey = nextSort;
          syncUnivTopSortButtons();
          updateUnivTopNote();
          rerenderAllUnivTopCharts();
        });
      });
    }

    function getUnivDirectorySort() {
      return filterState.univDirectorySortKey || DEFAULT_UNIV_DIRECTORY_SORT;
    }

    function syncUnivDirectorySortButtons() {
      const group = document.querySelector("[data-univ-directory-sort-group]");
      if (!group) return;
      const sortKey = getUnivDirectorySort();
      group.querySelectorAll("[data-univ-directory-sort]").forEach((btn) => {
        const active = btn.dataset.univDirectorySort === sortKey;
        btn.classList.toggle("active", active);
        btn.setAttribute("aria-pressed", active ? "true" : "false");
      });
    }

    function buildUnivFinderKey(univ) {
      return `univ::${univ || "미상"}`;
    }

    function makeUnivDirectoryStats(records) {
      const grouped = {};
      records.forEach((r) => {
        const key = r.univ || "미상";
        if (!grouped[key]) grouped[key] = { total: 0, pass: 0, wait: 0, regions: new Set(), passGrades: [] };
        grouped[key].total += 1;
        if (r.result === "합격") grouped[key].pass += 1;
        if (r.result === "충원합격") grouped[key].wait += 1;
        if (r.region) grouped[key].regions.add(r.region);
        if ((r.result === "합격" || r.result === "충원합격") && r.all_subj_grade !== null) {
          grouped[key].passGrades.push(r.all_subj_grade);
        }
      });
      const sortKey = getUnivDirectorySort();
      return Object.entries(grouped)
        .map(([univ, item]) => {
          const allPass = item.pass + item.wait;
          const regionLabel = item.regions.size ? Array.from(item.regions).sort().join(" / ") : "-";
          const passBandMeta = buildUnivPassBandMeta(item.passGrades);
          return {
            region: regionLabel,
            univ,
            total: item.total,
            allPass,
            allPassRate: item.total ? (allPass / item.total) * 100 : 0,
            passSampleCount: passBandMeta.sampleCount,
            passBandLabel: passBandMeta.label,
          };
        })
        .sort((a, b) => {
          if (sortKey === "allPassRate") {
            return (b.allPassRate - a.allPassRate) || (b.total - a.total) || a.univ.localeCompare(b.univ, "ko");
          }
          return (b.total - a.total) || (b.allPassRate - a.allPassRate) || a.univ.localeCompare(b.univ, "ko");
        });
    }

    function makeUnivFinderEntries(records) {
      return makeUnivDirectoryStats(records).map((item) => ({
        ...item,
        key: buildUnivFinderKey(item.univ),
      }));
    }

    function getFinderEntryCache(records) {
      if (!Array.isArray(records)) return {};
      let cache = finderEntryCacheByRecords.get(records);
      if (!cache) {
        cache = { univ: {}, dept: {}, subtype: null };
        finderEntryCacheByRecords.set(records, cache);
      }
      return cache;
    }

    function getCachedUnivFinderEntries(records) {
      const cache = getFinderEntryCache(records);
      const sortKey = getUnivDirectorySort();
      if (!cache.univ || cache.univ.sortKey !== sortKey) {
        cache.univ = { sortKey, entries: makeUnivFinderEntries(records) };
      }
      return cache.univ.entries;
    }

    function getCachedDeptFinderEntries(records, mode = getDeptFinderGroupingMode()) {
      const cache = getFinderEntryCache(records);
      const cacheKey = mode === "univ" ? "univ" : DEFAULT_DEPT_FINDER_GROUPING_MODE;
      if (!cache.dept) cache.dept = {};
      if (!cache.dept[cacheKey]) {
        cache.dept[cacheKey] = makeDeptFinderEntries(records, cacheKey);
      }
      return cache.dept[cacheKey];
    }

    function getCachedSubtypeFinderEntries(records) {
      const cache = getFinderEntryCache(records);
      if (!cache.subtype) {
        cache.subtype = makeSubtypeFinderEntries(records);
      }
      return cache.subtype;
    }

    function getSelectedUnivEntries(entries) {
      const selectedSet = new Set(filterState.selectedUnivKeys);
      return entries.filter((entry) => selectedSet.has(entry.key));
    }

    function addUnivFinderSelection(keys = []) {
      if (!Array.isArray(keys) || !keys.length) return false;
      const nextSelection = new Set(filterState.selectedUnivKeys);
      let changed = false;
      keys.forEach((key) => {
        if (!key || nextSelection.has(key)) return;
        nextSelection.add(key);
        changed = true;
      });
      if (changed) filterState.selectedUnivKeys = Array.from(nextSelection);
      return changed;
    }

    function formatUnivSelectionSummary(entries) {
      if (!entries.length) return "선택 대학 없음";
      if (entries.length === 1) return entries[0].univ;
      return `${entries[0].univ} 외 ${entries.length - 1}개`;
    }

    function renderUnivDirectory(records, options = {}) {
      const hostEl = document.getElementById("univ-directory-table");
      const selectedEl = document.getElementById("univ-finder-selected");
      const selectionMetaEl = document.getElementById("univ-finder-selection-meta");
      const openBtn = document.getElementById("univ-finder-open-btn");
      const clearBtn = document.getElementById("univ-finder-clear-btn");
      const hintEl = document.getElementById("univ-directory-hint");
      if (!hostEl || !selectedEl || !selectionMetaEl || !clearBtn || !hintEl) return;

      syncUnivDirectorySortButtons();
      const queryEl = document.getElementById("univ-directory-search");
      const keyword = safe(queryEl ? queryEl.value : "").toLowerCase();

      const entries = getCachedUnivFinderEntries(records);
      const selectedEntries = getSelectedUnivEntries(entries);
      const selectedSet = new Set(selectedEntries.map((entry) => entry.key));

      selectionMetaEl.textContent = selectedEntries.length
        ? `선택 ${selectedEntries.length}개 · ${formatUnivSelectionSummary(selectedEntries)}`
        : "아직 선택한 대학이 없습니다.";

      if (!keyword) {
        hostEl.innerHTML = "";
        hintEl.textContent = "대학명을 입력하면 해당 키워드가 들어간 대학이 표시됩니다. 이미 선택한 대학은 위 칩에서 관리할 수 있습니다.";
      } else {
        const matches = entries.filter((item) => item.univ.toLowerCase().includes(keyword));
        const addableMatches = matches.filter((entry) => !selectedSet.has(entry.key));
        const visibleMatches = addableMatches.slice(0, DEPT_SEARCH_RESULT_LIMIT);
        const hiddenSelectedCount = matches.length - addableMatches.length;

        if (!matches.length) {
          hostEl.innerHTML = '<div class="empty">조건에 맞는 대학이 없습니다.</div>';
          hintEl.textContent = "검색어를 바꿔 다시 찾아보세요.";
        } else if (!visibleMatches.length) {
          hostEl.innerHTML = '<div class="empty">검색된 대학이 모두 이미 선택되어 있습니다.</div>';
          hintEl.textContent = "위 칩에서 선택을 해제하거나 검색어를 바꿔 다시 찾아보세요.";
        } else {
          hostEl.innerHTML = `<div class="dept-finder-results">
            <div class="dept-finder-results-head">
              <div class="dept-finder-results-meta">검색 일치 ${matches.length}개 · 현재 표시 ${visibleMatches.length}개${hiddenSelectedCount ? ` · 이미 선택 ${hiddenSelectedCount}개 제외` : ""}</div>
              <button type="button" class="dept-finder-add-all" data-univ-add-all="true">표시 결과 모두 추가 (${visibleMatches.length})</button>
            </div>
            ${visibleMatches.map((item) => `<div class="dept-finder-item">
              <div class="dept-finder-item-copy">
                <div class="dept-finder-item-title">${escapeHtml(item.univ)}</div>
                <div class="dept-finder-item-subtitle">${escapeHtml(`${item.region} · ${item.total.toLocaleString()}건 · 합격률 ${item.allPassRate.toFixed(1)}%`)}</div>
              </div>
              <button type="button" data-univ-add="${escapeHtml(item.key)}">추가</button>
            </div>`).join("")}
          </div>`;
          if (addableMatches.length > DEPT_SEARCH_RESULT_LIMIT) {
            hintEl.textContent = hiddenSelectedCount
              ? `추가 가능한 결과 상위 ${DEPT_SEARCH_RESULT_LIMIT}개만 표시했습니다. 이미 선택한 ${hiddenSelectedCount}개는 위 칩에서 관리할 수 있습니다.`
              : `추가 가능한 결과 상위 ${DEPT_SEARCH_RESULT_LIMIT}개만 표시했습니다. 검색어를 더 구체적으로 입력해 주세요.`;
          } else if (hiddenSelectedCount) {
            hintEl.textContent = `추가 가능한 결과 ${visibleMatches.length}개가 표시되었습니다. 이미 선택한 ${hiddenSelectedCount}개는 위 칩에서 관리할 수 있습니다.`;
          } else {
            hintEl.textContent = `추가 가능한 결과 ${visibleMatches.length}개가 표시되었습니다.`;
          }
        }
      }

      selectedEl.innerHTML = selectedEntries.length
        ? `<div class="dept-finder-selected">${selectedEntries.map((entry) => `
            <div class="dept-finder-chip">
              <span>${escapeHtml(entry.univ)}</span>
              <button type="button" aria-label="${escapeHtml(entry.univ)} 선택 해제" data-univ-remove="${escapeHtml(entry.key)}">×</button>
            </div>
          `).join("")}</div>`
        : '<div class="dept-finder-selection-empty">아직 선택한 대학이 없습니다. 검색 결과에서 대학을 추가해 주세요.</div>';

      if (openBtn) openBtn.disabled = selectedEntries.length === 0;
      clearBtn.disabled = selectedEntries.length === 0;
      if (options.updateConditionSummary) renderConditionQuerySummary(records);

      hostEl.onclick = (event) => {
        const addAllTrigger = event.target instanceof Element ? event.target.closest("[data-univ-add-all]") : null;
        if (addAllTrigger) {
          if (!keyword) return;
          const matches = entries
            .filter((item) => item.univ.toLowerCase().includes(keyword))
            .filter((item) => !selectedSet.has(item.key))
            .slice(0, DEPT_SEARCH_RESULT_LIMIT);
          const changed = addUnivFinderSelection(matches.map((item) => item.key));
          if (changed) renderUnivDirectory(records, { updateConditionSummary: true });
          return;
        }
        const trigger = event.target instanceof Element ? event.target.closest("[data-univ-add]") : null;
        if (!trigger) return;
        const key = trigger.getAttribute("data-univ-add") || "";
        if (!key) return;
        const changed = addUnivFinderSelection([key]);
        if (changed) renderUnivDirectory(records, { updateConditionSummary: true });
      };
    }

    function bindUnivDirectoryControls(records) {
      const searchEl = document.getElementById("univ-directory-search");
      const selectedEl = document.getElementById("univ-finder-selected");
      const openBtn = document.getElementById("univ-finder-open-btn");
      const clearBtn = document.getElementById("univ-finder-clear-btn");
      if (searchEl) {
        searchEl.addEventListener("input", () => {
          renderUnivDirectory(records);
        });
      }
      const group = document.querySelector("[data-univ-directory-sort-group]");
      if (!group) return;
      syncUnivDirectorySortButtons();
      group.querySelectorAll("[data-univ-directory-sort]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const nextSort = btn.dataset.univDirectorySort || DEFAULT_UNIV_DIRECTORY_SORT;
          if (getUnivDirectorySort() === nextSort) return;
          filterState.univDirectorySortKey = nextSort;
          syncUnivDirectorySortButtons();
          renderUnivDirectory(records);
        });
      });
      if (selectedEl) {
        selectedEl.addEventListener("click", (event) => {
          const trigger = event.target instanceof Element ? event.target.closest("[data-univ-remove]") : null;
          if (!trigger) return;
          const key = trigger.getAttribute("data-univ-remove") || "";
          if (!key) return;
          filterState.selectedUnivKeys = filterState.selectedUnivKeys.filter((item) => item !== key);
          renderUnivDirectory(records, { updateConditionSummary: true });
        });
      }
      if (clearBtn) {
        clearBtn.addEventListener("click", () => {
          filterState.selectedUnivKeys = [];
          renderUnivDirectory(records, { updateConditionSummary: true });
        });
      }
    }

    function normalizeUnivAnalyticsEntries(selection, records) {
      const entries = getCachedUnivFinderEntries(records);
      if (Array.isArray(selection) && selection.length) {
        const keySet = new Set(selection.map((entry) => {
          if (entry && entry.key) return entry.key;
          if (entry && entry.univ) return buildUnivFinderKey(entry.univ);
          return "";
        }).filter(Boolean));
        return entries.filter((entry) => keySet.has(entry.key));
      }
      if (typeof selection === "string" && selection) {
        return entries.filter((entry) => entry.univ === selection);
      }
      return [];
    }

    function buildDeptFinderKey(univ, dept) {
      return `${univ || "미상"}|||${dept || "미상"}`;
    }

    function getDeptFinderGroupingMode() {
      return filterState.deptFinderGroupingMode === "univ" ? "univ" : DEFAULT_DEPT_FINDER_GROUPING_MODE;
    }

    function buildDeptFinderEntryKey(mode, univ, dept) {
      if (mode === "univ") return `univ::${buildDeptFinderKey(univ, dept)}`;
      return `dept::${dept || "미상"}`;
    }

    function getDeptFinderEntryMatchKeys(entry) {
      if (entry && Array.isArray(entry.matchKeys) && entry.matchKeys.length) return entry.matchKeys;
      if (entry && entry.univ !== undefined && entry.dept !== undefined) return [buildDeptFinderKey(entry.univ, entry.dept)];
      return [];
    }

    function buildDeptFinderUniversitySummary(entry) {
      const primaryUniv = entry && (entry.primaryUniv || entry.univ) ? (entry.primaryUniv || entry.univ) : "미상";
      const univCount = entry && Number.isFinite(entry.univCount) ? entry.univCount : (entry && entry.univ ? 1 : 0);
      if (univCount > 1) return `${primaryUniv} 외 ${univCount - 1}개 대학`;
      return primaryUniv;
    }

    function buildDeptFinderLabel(entry) {
      if (entry && entry.mode === "dept") return `${entry.dept}`;
      return `${entry.univ} · ${entry.dept}`;
    }

    function buildDeptFinderSubtitle(entry) {
      return `${buildDeptFinderUniversitySummary(entry)} ${entry.total.toLocaleString()}건`;
    }

    function buildDeptFinderAnalyticsTitle(entry) {
      if (entry && entry.mode === "dept") return `${entry.dept}`;
      return `${entry.univ} ${entry.dept}`;
    }

    function makeDeptFinderEntries(records, mode = getDeptFinderGroupingMode()) {
      const grouped = {};
      records.forEach((r) => {
        const univ = r.univ || "미상";
        const dept = r.dept || "미상";
        const recordKey = buildDeptFinderKey(univ, dept);
        const key = buildDeptFinderEntryKey(mode, univ, dept);
        if (!grouped[key]) {
          grouped[key] = mode === "univ"
            ? {
                key,
                mode,
                univ,
                dept,
                total: 0,
                matchKeySet: new Set(),
              }
            : {
                key,
                mode,
                dept,
                total: 0,
                matchKeySet: new Set(),
                univTotals: {},
              };
        }
        grouped[key].total += 1;
        grouped[key].matchKeySet.add(recordKey);
        if (mode === "dept") {
          grouped[key].univTotals[univ] = (grouped[key].univTotals[univ] || 0) + 1;
        }
      });

      return Object.values(grouped).map((entry) => {
        if (entry.mode === "univ") {
          return {
            key: entry.key,
            mode: entry.mode,
            univ: entry.univ,
            primaryUniv: entry.univ,
            univCount: 1,
            universities: [entry.univ],
            dept: entry.dept,
            total: entry.total,
            matchKeys: Array.from(entry.matchKeySet),
          };
        }

        const universities = Object.keys(entry.univTotals).sort((a, b) => a.localeCompare(b, "ko"));
        const primaryUniv = universities.slice().sort((a, b) => {
          const countDiff = (entry.univTotals[b] || 0) - (entry.univTotals[a] || 0);
          if (countDiff !== 0) return countDiff;
          return a.localeCompare(b, "ko");
        })[0] || "미상";
        return {
          key: entry.key,
          mode: entry.mode,
          univ: primaryUniv,
          primaryUniv,
          univCount: universities.length,
          universities,
          dept: entry.dept,
          total: entry.total,
          matchKeys: Array.from(entry.matchKeySet),
        };
      }).sort((a, b) => {
        const deptDiff = a.dept.localeCompare(b.dept, "ko");
        if (deptDiff !== 0) return deptDiff;
        return a.univ.localeCompare(b.univ, "ko");
      });
    }

    function getDeptFinderMatches(entries, keyword) {
      const normalized = keyword.toLowerCase();
      return entries
        .filter((entry) => entry.dept.toLowerCase().includes(normalized))
        .sort((a, b) => {
          const aStarts = a.dept.toLowerCase().startsWith(normalized) ? 0 : 1;
          const bStarts = b.dept.toLowerCase().startsWith(normalized) ? 0 : 1;
          if (aStarts !== bStarts) return aStarts - bStarts;
          return (b.total - a.total) || a.dept.localeCompare(b.dept, "ko") || a.univ.localeCompare(b.univ, "ko");
        });
    }

    function getSelectedDeptEntries(entries) {
      const selectedSet = new Set(filterState.selectedDeptKeys);
      return entries.filter((entry) => selectedSet.has(entry.key));
    }

    function syncDeptFinderModeButtons() {
      const activeMode = getDeptFinderGroupingMode();
      document.querySelectorAll("[data-dept-finder-mode]").forEach((btn) => {
        btn.classList.toggle("active", btn.getAttribute("data-dept-finder-mode") === activeMode);
      });
    }

    function syncDeptFinderSelectionForMode(records, nextMode) {
      const currentMode = getDeptFinderGroupingMode();
      if (nextMode !== "dept" && nextMode !== "univ") return;
      if (nextMode === currentMode) return;

      const currentEntries = getCachedDeptFinderEntries(records, currentMode);
      const selectedEntries = getSelectedDeptEntries(currentEntries);
      filterState.deptFinderGroupingMode = nextMode;

      if (!selectedEntries.length) {
        filterState.selectedDeptKeys = [];
        return;
      }

      const selectedMatchKeys = new Set(selectedEntries.flatMap((entry) => getDeptFinderEntryMatchKeys(entry)));
      filterState.selectedDeptKeys = getCachedDeptFinderEntries(records, nextMode)
        .filter((entry) => getDeptFinderEntryMatchKeys(entry).some((matchKey) => selectedMatchKeys.has(matchKey)))
        .map((entry) => entry.key);
    }

    function addDeptFinderSelection(keys = []) {
      if (!Array.isArray(keys) || !keys.length) return false;
      const nextSelection = new Set(filterState.selectedDeptKeys);
      let changed = false;
      keys.forEach((key) => {
        if (!key || nextSelection.has(key)) return;
        nextSelection.add(key);
        changed = true;
      });
      if (changed) {
        filterState.selectedDeptKeys = Array.from(nextSelection);
      }
      return changed;
    }

    function formatDeptSelectionSummary(entries) {
      if (!entries.length) return "선택 학과 없음";
      if (entries.length === 1) return buildDeptFinderLabel(entries[0]);
      return `${buildDeptFinderLabel(entries[0])} 외 ${entries.length - 1}개`;
    }

    function renderDeptFinder(records, options = {}) {
      const searchEl = document.getElementById("dept-finder-search");
      const resultsEl = document.getElementById("dept-finder-results");
      const selectedEl = document.getElementById("dept-finder-selected");
      const selectionMetaEl = document.getElementById("dept-finder-selection-meta");
      const openBtn = document.getElementById("dept-finder-open-btn");
      const clearBtn = document.getElementById("dept-finder-clear-btn");
      const hintEl = document.getElementById("dept-finder-hint");
      if (!searchEl || !resultsEl || !selectedEl || !selectionMetaEl || !clearBtn || !hintEl) return;

      syncDeptFinderModeButtons();

      const mode = getDeptFinderGroupingMode();
      const entries = getCachedDeptFinderEntries(records, mode);
      const selectedEntries = getSelectedDeptEntries(entries);
      const selectedSet = new Set(selectedEntries.map((entry) => entry.key));
      const keyword = safe(searchEl.value);

      selectionMetaEl.textContent = selectedEntries.length
        ? `선택 ${selectedEntries.length}개 · ${formatDeptSelectionSummary(selectedEntries)}`
        : "아직 선택한 학과가 없습니다.";

      if (!keyword) {
        resultsEl.innerHTML = "";
        hintEl.textContent = mode === "dept"
          ? "학과명을 입력하면 같은 학과는 대학을 통합해 보여줍니다. 필요하면 위 옵션에서 대학별 구분으로 바꿀 수 있습니다."
          : "학과명을 입력하면 대학별로 구분된 결과가 표시됩니다. 이미 선택한 학과는 위 칩에서 관리할 수 있습니다.";
      } else {
        const matches = getDeptFinderMatches(entries, keyword);
        const addableMatches = matches.filter((entry) => !selectedSet.has(entry.key));
        const visibleMatches = addableMatches.slice(0, DEPT_SEARCH_RESULT_LIMIT);
        const hiddenSelectedCount = matches.length - addableMatches.length;

        if (!matches.length) {
          resultsEl.innerHTML = '<div class="empty">일치하는 학과가 없습니다.</div>';
          hintEl.textContent = "검색어를 바꿔 다시 찾아보세요.";
        } else if (!visibleMatches.length) {
          resultsEl.innerHTML = '<div class="empty">검색된 학과가 모두 이미 선택되어 있습니다.</div>';
          hintEl.textContent = "위 칩에서 선택을 해제하거나 검색어를 바꿔 다시 찾아보세요.";
        } else {
          resultsEl.innerHTML = `<div class="dept-finder-results">
            <div class="dept-finder-results-head">
              <div class="dept-finder-results-meta">검색 일치 ${matches.length}개 · 현재 표시 ${visibleMatches.length}개${hiddenSelectedCount ? ` · 이미 선택 ${hiddenSelectedCount}개 제외` : ""}</div>
              <button type="button" class="dept-finder-add-all" data-dept-add-all="true">표시 결과 모두 추가 (${visibleMatches.length})</button>
            </div>
            ${visibleMatches.map((entry) => {
            return `<div class="dept-finder-item">
              <div class="dept-finder-item-copy">
                <div class="dept-finder-item-title">${escapeHtml(entry.dept)}</div>
                <div class="dept-finder-item-subtitle">${escapeHtml(buildDeptFinderSubtitle(entry))}</div>
              </div>
              <button type="button" data-dept-add="${escapeHtml(entry.key)}">추가</button>
            </div>`;
          }).join("")}</div>`;
          if (addableMatches.length > DEPT_SEARCH_RESULT_LIMIT) {
            hintEl.textContent = hiddenSelectedCount
              ? `추가 가능한 결과 상위 ${DEPT_SEARCH_RESULT_LIMIT}개만 표시했습니다. 이미 선택한 ${hiddenSelectedCount}개는 위 칩에서 관리할 수 있습니다.`
              : `추가 가능한 결과 상위 ${DEPT_SEARCH_RESULT_LIMIT}개만 표시했습니다. 검색어를 더 구체적으로 입력해 주세요.`;
          } else if (hiddenSelectedCount) {
            hintEl.textContent = `추가 가능한 결과 ${visibleMatches.length}개가 표시되었습니다. 이미 선택한 ${hiddenSelectedCount}개는 위 칩에서 관리할 수 있습니다.`;
          } else {
            hintEl.textContent = `추가 가능한 결과 ${visibleMatches.length}개가 표시되었습니다.`;
          }
        }
      }

      selectedEl.innerHTML = selectedEntries.length
        ? `<div class="dept-finder-selected">${selectedEntries.map((entry) => `
            <div class="dept-finder-chip">
              <span>${escapeHtml(buildDeptFinderLabel(entry))}</span>
              <button type="button" aria-label="${escapeHtml(entry.dept)} 선택 해제" data-dept-remove="${escapeHtml(entry.key)}">×</button>
            </div>
          `).join("")}</div>`
        : '<div class="dept-finder-selection-empty">아직 선택한 학과가 없습니다. 검색 결과에서 학과를 추가해 주세요.</div>';

      if (openBtn) openBtn.disabled = selectedEntries.length === 0;
      clearBtn.disabled = selectedEntries.length === 0;
      if (options.updateConditionSummary) renderConditionQuerySummary(records);
    }

    function bindDeptFinderControls(records) {
      const searchEl = document.getElementById("dept-finder-search");
      const resultsEl = document.getElementById("dept-finder-results");
      const selectedEl = document.getElementById("dept-finder-selected");
      const modeGroupEl = document.getElementById("dept-finder-mode-group");
      const openBtn = document.getElementById("dept-finder-open-btn");
      const clearBtn = document.getElementById("dept-finder-clear-btn");
      if (searchEl) {
        searchEl.addEventListener("input", () => {
          renderDeptFinder(records);
        });
      }
      if (modeGroupEl) {
        modeGroupEl.addEventListener("click", (event) => {
          const trigger = event.target instanceof Element ? event.target.closest("[data-dept-finder-mode]") : null;
          if (!trigger) return;
          const nextMode = trigger.getAttribute("data-dept-finder-mode") || DEFAULT_DEPT_FINDER_GROUPING_MODE;
          if (nextMode === getDeptFinderGroupingMode()) return;
          syncDeptFinderSelectionForMode(records, nextMode);
          renderDeptFinder(records, { updateConditionSummary: true });
        });
      }
      if (resultsEl) {
        resultsEl.addEventListener("click", (event) => {
          const addAllTrigger = event.target instanceof Element ? event.target.closest("[data-dept-add-all]") : null;
          if (addAllTrigger) {
            const searchEl = document.getElementById("dept-finder-search");
            const keyword = safe(searchEl ? searchEl.value : "");
            if (!keyword) return;
            const entries = getCachedDeptFinderEntries(records, getDeptFinderGroupingMode());
            const selectedSet = new Set(filterState.selectedDeptKeys);
            const matches = getDeptFinderMatches(entries, keyword)
              .filter((entry) => !selectedSet.has(entry.key))
              .slice(0, DEPT_SEARCH_RESULT_LIMIT);
            const changed = addDeptFinderSelection(matches.map((entry) => entry.key));
            if (changed) renderDeptFinder(records, { updateConditionSummary: true });
            return;
          }
          const trigger = event.target instanceof Element ? event.target.closest("[data-dept-add]") : null;
          if (!trigger) return;
          const key = trigger.getAttribute("data-dept-add") || "";
          if (!key) return;
          const changed = addDeptFinderSelection([key]);
          if (changed) renderDeptFinder(records, { updateConditionSummary: true });
        });
      }
      if (selectedEl) {
        selectedEl.addEventListener("click", (event) => {
          const trigger = event.target instanceof Element ? event.target.closest("[data-dept-remove]") : null;
          if (!trigger) return;
          const key = trigger.getAttribute("data-dept-remove") || "";
          if (!key) return;
          filterState.selectedDeptKeys = filterState.selectedDeptKeys.filter((item) => item !== key);
          renderDeptFinder(records, { updateConditionSummary: true });
        });
      }
      if (clearBtn) {
        clearBtn.addEventListener("click", () => {
          filterState.selectedDeptKeys = [];
          renderDeptFinder(records, { updateConditionSummary: true });
        });
      }
    }

    function buildSubtypeFinderRecordKey(apptype, subtype) {
      return `${apptype || "미상"}|||${subtype || "미상"}`;
    }

    function buildSubtypeFinderEntryKey(subtype) {
      return `subtype::${subtype || "미상"}`;
    }

    function getSubtypeFinderEntryMatchKeys(entry) {
      if (entry && Array.isArray(entry.matchKeys) && entry.matchKeys.length) return entry.matchKeys;
      if (entry && entry.apptype !== undefined && entry.subtype !== undefined) {
        return [buildSubtypeFinderRecordKey(entry.apptype, entry.subtype)];
      }
      return [];
    }

    function buildSubtypeFinderApptypeSummary(entry) {
      const primaryApptype = entry && (entry.primaryApptype || entry.apptype) ? (entry.primaryApptype || entry.apptype) : "미상";
      const apptypeCount = entry && Number.isFinite(entry.apptypeCount) ? entry.apptypeCount : (entry && entry.apptype ? 1 : 0);
      if (apptypeCount > 1) return `${primaryApptype} 외 ${apptypeCount - 1}개 전형유형`;
      return primaryApptype;
    }

    function buildSubtypeFinderLabel(entry) {
      return entry && entry.subtype ? entry.subtype : "미상";
    }

    function buildSubtypeFinderSubtitle(entry) {
      return `${buildSubtypeFinderApptypeSummary(entry)} ${entry.total.toLocaleString()}건`;
    }

    function buildSubtypeFinderAnalyticsTitle(entry) {
      return buildSubtypeFinderLabel(entry);
    }

    function makeSubtypeFinderEntries(records) {
      const grouped = {};
      records.forEach((r) => {
        const apptype = r.apptype || "미상";
        const subtype = r.subtype || "미상";
        const recordKey = buildSubtypeFinderRecordKey(apptype, subtype);
        const key = buildSubtypeFinderEntryKey(subtype);
        if (!grouped[key]) {
          grouped[key] = {
            key,
            subtype,
            total: 0,
            matchKeySet: new Set(),
            apptypeTotals: {},
          };
        }
        grouped[key].total += 1;
        grouped[key].matchKeySet.add(recordKey);
        grouped[key].apptypeTotals[apptype] = (grouped[key].apptypeTotals[apptype] || 0) + 1;
      });

      return Object.values(grouped).map((entry) => {
        const apptypes = Object.keys(entry.apptypeTotals).sort((a, b) => a.localeCompare(b, "ko"));
        const primaryApptype = apptypes.slice().sort((a, b) => {
          const countDiff = (entry.apptypeTotals[b] || 0) - (entry.apptypeTotals[a] || 0);
          if (countDiff !== 0) return countDiff;
          return a.localeCompare(b, "ko");
        })[0] || "미상";
        return {
          key: entry.key,
          subtype: entry.subtype,
          apptype: primaryApptype,
          primaryApptype,
          apptypeCount: apptypes.length,
          apptypes,
          total: entry.total,
          matchKeys: Array.from(entry.matchKeySet),
        };
      }).sort((a, b) => {
        const subtypeDiff = a.subtype.localeCompare(b.subtype, "ko");
        if (subtypeDiff !== 0) return subtypeDiff;
        return a.primaryApptype.localeCompare(b.primaryApptype, "ko");
      });
    }

    function getSubtypeFinderMatches(entries, keyword) {
      const normalized = keyword.toLowerCase();
      return entries
        .filter((entry) => entry.subtype.toLowerCase().includes(normalized))
        .sort((a, b) => {
          const aStarts = a.subtype.toLowerCase().startsWith(normalized) ? 0 : 1;
          const bStarts = b.subtype.toLowerCase().startsWith(normalized) ? 0 : 1;
          if (aStarts !== bStarts) return aStarts - bStarts;
          return (b.total - a.total) || a.subtype.localeCompare(b.subtype, "ko") || a.primaryApptype.localeCompare(b.primaryApptype, "ko");
        });
    }

    function getSelectedSubtypeEntries(entries) {
      const selectedSet = new Set(filterState.selectedSubtypeKeys);
      return entries.filter((entry) => selectedSet.has(entry.key));
    }

    function addSubtypeFinderSelection(keys = []) {
      if (!Array.isArray(keys) || !keys.length) return false;
      const nextSelection = new Set(filterState.selectedSubtypeKeys);
      let changed = false;
      keys.forEach((key) => {
        if (!key || nextSelection.has(key)) return;
        nextSelection.add(key);
        changed = true;
      });
      if (changed) filterState.selectedSubtypeKeys = Array.from(nextSelection);
      return changed;
    }

    function formatSubtypeSelectionSummary(entries) {
      if (!entries.length) return "선택 세부유형 없음";
      if (entries.length === 1) return buildSubtypeFinderLabel(entries[0]);
      return `${buildSubtypeFinderLabel(entries[0])} 외 ${entries.length - 1}개`;
    }

    function renderSubtypeFinder(records, options = {}) {
      const searchEl = document.getElementById("subtype-finder-search");
      const resultsEl = document.getElementById("subtype-finder-results");
      const selectedEl = document.getElementById("subtype-finder-selected");
      const selectionMetaEl = document.getElementById("subtype-finder-selection-meta");
      const openBtn = document.getElementById("subtype-finder-open-btn");
      const clearBtn = document.getElementById("subtype-finder-clear-btn");
      const hintEl = document.getElementById("subtype-finder-hint");
      if (!searchEl || !resultsEl || !selectedEl || !selectionMetaEl || !clearBtn || !hintEl) return;

      const entries = getCachedSubtypeFinderEntries(records);
      const selectedEntries = getSelectedSubtypeEntries(entries);
      const selectedSet = new Set(selectedEntries.map((entry) => entry.key));
      const keyword = safe(searchEl.value);

      selectionMetaEl.textContent = selectedEntries.length
        ? `선택 ${selectedEntries.length}개 · ${formatSubtypeSelectionSummary(selectedEntries)}`
        : "아직 선택한 세부유형이 없습니다.";

      if (!keyword) {
        resultsEl.innerHTML = "";
        hintEl.textContent = "세부유형명을 입력하면 같은 이름은 전형유형을 통합해 보여줍니다. 이미 선택한 세부유형은 위 칩에서 관리할 수 있습니다.";
      } else {
        const matches = getSubtypeFinderMatches(entries, keyword);
        const addableMatches = matches.filter((entry) => !selectedSet.has(entry.key));
        const visibleMatches = addableMatches.slice(0, DEPT_SEARCH_RESULT_LIMIT);
        const hiddenSelectedCount = matches.length - addableMatches.length;

        if (!matches.length) {
          resultsEl.innerHTML = '<div class="empty">일치하는 세부유형이 없습니다.</div>';
          hintEl.textContent = "검색어를 바꿔 다시 찾아보세요.";
        } else if (!visibleMatches.length) {
          resultsEl.innerHTML = '<div class="empty">검색된 세부유형이 모두 이미 선택되어 있습니다.</div>';
          hintEl.textContent = "위 칩에서 선택을 해제하거나 검색어를 바꿔 다시 찾아보세요.";
        } else {
          resultsEl.innerHTML = `<div class="dept-finder-results">
            <div class="dept-finder-results-head">
              <div class="dept-finder-results-meta">검색 일치 ${matches.length}개 · 현재 표시 ${visibleMatches.length}개${hiddenSelectedCount ? ` · 이미 선택 ${hiddenSelectedCount}개 제외` : ""}</div>
              <button type="button" class="dept-finder-add-all" data-subtype-add-all="true">표시 결과 모두 추가 (${visibleMatches.length})</button>
            </div>
            ${visibleMatches.map((entry) => `
              <div class="dept-finder-item">
                <div class="dept-finder-item-copy">
                  <div class="dept-finder-item-title">${escapeHtml(entry.subtype)}</div>
                  <div class="dept-finder-item-subtitle">${escapeHtml(buildSubtypeFinderSubtitle(entry))}</div>
                </div>
                <button type="button" data-subtype-add="${escapeHtml(entry.key)}">추가</button>
              </div>
            `).join("")}
          </div>`;
          if (addableMatches.length > DEPT_SEARCH_RESULT_LIMIT) {
            hintEl.textContent = hiddenSelectedCount
              ? `추가 가능한 결과 상위 ${DEPT_SEARCH_RESULT_LIMIT}개만 표시했습니다. 이미 선택한 ${hiddenSelectedCount}개는 위 칩에서 관리할 수 있습니다.`
              : `추가 가능한 결과 상위 ${DEPT_SEARCH_RESULT_LIMIT}개만 표시했습니다. 검색어를 더 구체적으로 입력해 주세요.`;
          } else if (hiddenSelectedCount) {
            hintEl.textContent = `추가 가능한 결과 ${visibleMatches.length}개가 표시되었습니다. 이미 선택한 ${hiddenSelectedCount}개는 위 칩에서 관리할 수 있습니다.`;
          } else {
            hintEl.textContent = `추가 가능한 결과 ${visibleMatches.length}개가 표시되었습니다.`;
          }
        }
      }

      selectedEl.innerHTML = selectedEntries.length
        ? `<div class="dept-finder-selected">${selectedEntries.map((entry) => `
            <div class="dept-finder-chip">
              <span>${escapeHtml(buildSubtypeFinderLabel(entry))}</span>
              <button type="button" aria-label="${escapeHtml(buildSubtypeFinderLabel(entry))} 선택 해제" data-subtype-remove="${escapeHtml(entry.key)}">×</button>
            </div>
          `).join("")}</div>`
        : '<div class="dept-finder-selection-empty">아직 선택한 세부유형이 없습니다. 검색 결과에서 세부유형을 추가해 주세요.</div>';

      if (openBtn) openBtn.disabled = selectedEntries.length === 0;
      clearBtn.disabled = selectedEntries.length === 0;
      if (options.updateConditionSummary) renderConditionQuerySummary(records);
    }

    function bindSubtypeFinderControls(records) {
      const searchEl = document.getElementById("subtype-finder-search");
      const resultsEl = document.getElementById("subtype-finder-results");
      const selectedEl = document.getElementById("subtype-finder-selected");
      const openBtn = document.getElementById("subtype-finder-open-btn");
      const clearBtn = document.getElementById("subtype-finder-clear-btn");
      if (searchEl) {
        searchEl.addEventListener("input", () => {
          renderSubtypeFinder(records);
        });
      }
      if (resultsEl) {
        resultsEl.addEventListener("click", (event) => {
          const addAllTrigger = event.target instanceof Element ? event.target.closest("[data-subtype-add-all]") : null;
          if (addAllTrigger) {
            const searchEl = document.getElementById("subtype-finder-search");
            const keyword = safe(searchEl ? searchEl.value : "");
            if (!keyword) return;
            const entries = getCachedSubtypeFinderEntries(records);
            const selectedSet = new Set(filterState.selectedSubtypeKeys);
            const matches = getSubtypeFinderMatches(entries, keyword)
              .filter((entry) => !selectedSet.has(entry.key))
              .slice(0, DEPT_SEARCH_RESULT_LIMIT);
            const changed = addSubtypeFinderSelection(matches.map((entry) => entry.key));
            if (changed) renderSubtypeFinder(records, { updateConditionSummary: true });
            return;
          }
          const trigger = event.target instanceof Element ? event.target.closest("[data-subtype-add]") : null;
          if (!trigger) return;
          const key = trigger.getAttribute("data-subtype-add") || "";
          if (!key) return;
          const changed = addSubtypeFinderSelection([key]);
          if (changed) renderSubtypeFinder(records, { updateConditionSummary: true });
        });
      }
      if (selectedEl) {
        selectedEl.addEventListener("click", (event) => {
          const trigger = event.target instanceof Element ? event.target.closest("[data-subtype-remove]") : null;
          if (!trigger) return;
          const key = trigger.getAttribute("data-subtype-remove") || "";
          if (!key) return;
          filterState.selectedSubtypeKeys = filterState.selectedSubtypeKeys.filter((item) => item !== key);
          renderSubtypeFinder(records, { updateConditionSummary: true });
        });
      }
      if (clearBtn) {
        clearBtn.addEventListener("click", () => {
          filterState.selectedSubtypeKeys = [];
          renderSubtypeFinder(records, { updateConditionSummary: true });
        });
      }
    }

    function normalizeSubtypeAnalyticsEntries(selection, records) {
      const entries = getCachedSubtypeFinderEntries(records);
      if (Array.isArray(selection) && selection.length) {
        const keySet = new Set(selection.map((entry) => {
          if (entry && entry.key) return entry.key;
          if (entry && entry.subtype) return buildSubtypeFinderEntryKey(entry.subtype);
          return "";
        }).filter(Boolean));
        return entries.filter((entry) => keySet.has(entry.key));
      }
      if (typeof selection === "string" && selection) {
        return entries.filter((entry) => entry.subtype === selection);
      }
      return [];
    }

    function normalizeConditionKeyList(keys = [], type = "") {
      if (!Array.isArray(keys)) return [];
      return keys.map((key) => {
        if (typeof key !== "string") return "";
        if (type === "univ") return key.startsWith("univ::") ? key : buildUnivFinderKey(key);
        if (type === "subtype") return key.startsWith("subtype::") ? key : buildSubtypeFinderEntryKey(key);
        if (type === "dept") {
          if (key.startsWith("dept::") || key.startsWith("univ::")) return key;
          return `univ::${key}`;
        }
        return key;
      }).filter(Boolean);
    }

    function serializeConditionCriteria(criteria = {}) {
      const univEntries = Array.isArray(criteria.univEntries) ? criteria.univEntries : [];
      const deptEntries = Array.isArray(criteria.deptEntries) ? criteria.deptEntries : [];
      const subtypeEntries = Array.isArray(criteria.subtypeEntries) ? criteria.subtypeEntries : [];
      return {
        univKeys: univEntries.map((entry) => entry.key).filter(Boolean),
        deptKeys: deptEntries.map((entry) => entry.key).filter(Boolean),
        subtypeKeys: subtypeEntries.map((entry) => entry.key).filter(Boolean),
        deptGroupingMode: criteria.deptGroupingMode === "univ" ? "univ" : DEFAULT_DEPT_FINDER_GROUPING_MODE,
      };
    }

    function normalizeConditionCriteria(criteria = {}, records = []) {
      const source = criteria && typeof criteria === "object" ? criteria : {};
      const rawUnivKeys = Array.isArray(source.univKeys)
        ? source.univKeys
        : (Array.isArray(source.univEntries) ? source.univEntries.map((entry) => entry && entry.key).filter(Boolean) : []);
      const rawDeptKeys = Array.isArray(source.deptKeys)
        ? source.deptKeys
        : (Array.isArray(source.deptEntries) ? source.deptEntries.map((entry) => entry && entry.key).filter(Boolean) : []);
      const rawSubtypeKeys = Array.isArray(source.subtypeKeys)
        ? source.subtypeKeys
        : (Array.isArray(source.subtypeEntries) ? source.subtypeEntries.map((entry) => entry && entry.key).filter(Boolean) : []);
      const deptKeys = normalizeConditionKeyList(rawDeptKeys, "dept");
      const inferredDeptMode = deptKeys.some((key) => key.startsWith("univ::")) ? "univ" : getDeptFinderGroupingMode();
      const deptGroupingMode = source.deptGroupingMode === "univ" || source.deptGroupingMode === "dept"
        ? source.deptGroupingMode
        : inferredDeptMode;
      const univKeySet = new Set(normalizeConditionKeyList(rawUnivKeys, "univ"));
      const deptKeySet = new Set(deptKeys);
      const subtypeKeySet = new Set(normalizeConditionKeyList(rawSubtypeKeys, "subtype"));

      return {
        univEntries: getCachedUnivFinderEntries(records).filter((entry) => univKeySet.has(entry.key)),
        deptEntries: getCachedDeptFinderEntries(records, deptGroupingMode).filter((entry) => deptKeySet.has(entry.key)),
        subtypeEntries: getCachedSubtypeFinderEntries(records).filter((entry) => subtypeKeySet.has(entry.key)),
        deptGroupingMode,
      };
    }

    function getSelectedConditionCriteria(records) {
      const deptGroupingMode = getDeptFinderGroupingMode();
      return {
        univEntries: getSelectedUnivEntries(getCachedUnivFinderEntries(records)),
        deptEntries: getSelectedDeptEntries(getCachedDeptFinderEntries(records, deptGroupingMode)),
        subtypeEntries: getSelectedSubtypeEntries(getCachedSubtypeFinderEntries(records)),
        deptGroupingMode,
      };
    }

    function hasConditionCriteria(criteria = {}) {
      return Boolean(
        (Array.isArray(criteria.univEntries) && criteria.univEntries.length) ||
        (Array.isArray(criteria.deptEntries) && criteria.deptEntries.length) ||
        (Array.isArray(criteria.subtypeEntries) && criteria.subtypeEntries.length)
      );
    }

    function filterRecordsByConditionCriteria(records = [], criteria = {}) {
      let filtered = Array.isArray(records) ? records : [];
      const univEntries = Array.isArray(criteria.univEntries) ? criteria.univEntries : [];
      const deptEntries = Array.isArray(criteria.deptEntries) ? criteria.deptEntries : [];
      const subtypeEntries = Array.isArray(criteria.subtypeEntries) ? criteria.subtypeEntries : [];

      if (univEntries.length) {
        const selectedUnivs = new Set(univEntries.map((entry) => entry.univ || "미상"));
        filtered = filtered.filter((record) => selectedUnivs.has(record.univ || "미상"));
      }
      if (deptEntries.length) {
        const selectedDeptKeys = new Set(deptEntries.flatMap((entry) => getDeptFinderEntryMatchKeys(entry)));
        filtered = filtered.filter((record) => selectedDeptKeys.has(buildDeptFinderKey(record.univ, record.dept)));
      }
      if (subtypeEntries.length) {
        const selectedSubtypeKeys = new Set(subtypeEntries.flatMap((entry) => getSubtypeFinderEntryMatchKeys(entry)));
        filtered = filtered.filter((record) => selectedSubtypeKeys.has(buildSubtypeFinderRecordKey(record.apptype, record.subtype)));
      }
      return filtered;
    }

    function formatConditionCriteriaSummary(criteria = {}) {
      const parts = [];
      if (criteria.univEntries && criteria.univEntries.length) {
        parts.push(`대학 ${formatUnivSelectionSummary(criteria.univEntries)}`);
      }
      if (criteria.deptEntries && criteria.deptEntries.length) {
        parts.push(`학과 ${formatDeptSelectionSummary(criteria.deptEntries)}`);
      }
      if (criteria.subtypeEntries && criteria.subtypeEntries.length) {
        parts.push(`세부유형 ${formatSubtypeSelectionSummary(criteria.subtypeEntries)}`);
      }
      return parts.length ? parts.join(" · ") : "선택 조건 없음";
    }

    function renderConditionQuerySummary(records) {
      const summaryEl = document.getElementById("condition-query-summary");
      const openBtn = document.getElementById("condition-finder-open-btn");
      const clearBtn = document.getElementById("condition-finder-clear-btn");
      if (!summaryEl || !openBtn || !clearBtn) return;

      const criteria = getSelectedConditionCriteria(records);
      const hasCriteria = hasConditionCriteria(criteria);
      const filteredRecords = hasCriteria ? filterRecordsByConditionCriteria(records, criteria) : [];
      const conditionCounts = [
        criteria.univEntries.length ? `대학 ${criteria.univEntries.length}개` : "",
        criteria.deptEntries.length ? `학과 ${criteria.deptEntries.length}개` : "",
        criteria.subtypeEntries.length ? `세부유형 ${criteria.subtypeEntries.length}개` : "",
      ].filter(Boolean);

      if (!hasCriteria) {
        summaryEl.innerHTML = `<div class="condition-summary-empty">대학, 학과, 세부유형 중 하나 이상을 선택해 주세요. 여러 종류를 함께 선택하면 AND 조건으로 좁혀집니다.</div>`;
      } else {
        summaryEl.innerHTML = `
          <div class="condition-summary-main">
            <div class="condition-summary-title">${escapeHtml(formatConditionCriteriaSummary(criteria))}</div>
            <div class="condition-summary-meta">${escapeHtml(conditionCounts.join(" · "))} · AND 적용 결과 ${filteredRecords.length.toLocaleString()}건</div>
          </div>
        `;
      }

      openBtn.disabled = !hasCriteria || filteredRecords.length === 0;
      clearBtn.disabled = !hasCriteria;
    }

    function bindConditionQueryControls(records) {
      const openBtn = document.getElementById("condition-finder-open-btn");
      const clearBtn = document.getElementById("condition-finder-clear-btn");
      if (openBtn) {
        openBtn.addEventListener("click", () => {
          const criteria = getSelectedConditionCriteria(records);
          showConditionAnalytics(criteria, records, dataState.metaAllRecords || records, dataState.metaYears || []);
        });
      }
      if (clearBtn) {
        clearBtn.addEventListener("click", () => {
          filterState.selectedUnivKeys = [];
          filterState.selectedDeptKeys = [];
          filterState.selectedSubtypeKeys = [];
          renderUnivDirectory(records);
          renderDeptFinder(records);
          renderSubtypeFinder(records);
          renderConditionQuerySummary(records);
        });
      }
    }

    function showConditionAnalytics(criteriaInput, records, allRecords, metaYears) {
      const listView = document.getElementById("condition-list-view");
      const analyticsView = document.getElementById("condition-analytics-view");
      const titleEl = document.getElementById("condition-analytics-title");
      const subtitleEl = document.getElementById("condition-analytics-subtitle");
      const contentEl = document.getElementById("condition-analytics-content");
      const criteria = normalizeConditionCriteria(criteriaInput || serializeConditionCriteria(getSelectedConditionCriteria(records)), records);
      if (!listView || !analyticsView || !contentEl || !hasConditionCriteria(criteria)) return;

      const conditionRecords = filterRecordsByConditionCriteria(records, criteria);
      if (!conditionRecords.length) {
        renderConditionQuerySummary(records);
        return;
      }
      const conditionAllRecords = filterRecordsByConditionCriteria(allRecords, criteria);
      const years = metaYears || [];

      listView.hidden = true;
      analyticsView.hidden = false;
      analyticsViewState.conditionTab = {
        active: true,
        criteria: serializeConditionCriteria(criteria),
      };

      if (titleEl) titleEl.textContent = formatConditionCriteriaSummary(criteria);
      const yearScope = formatAcademicYearScope(conditionRecords);
      if (subtitleEl) {
        const subtitleParts = ["AND 조건", `총 ${conditionRecords.length.toLocaleString()}건`];
        if (yearScope) subtitleParts.push(yearScope);
        subtitleEl.textContent = subtitleParts.join(" · ");
      }

      cleanupAnalyticsPlots(contentEl);
      contentEl.innerHTML = "";

      const pid = ANALYTICS_CONDITION_PLOT_BASE;
      const block = buildPlotBlock(
        conditionRecords,
        pid,
        "조건별 조회",
        true, false, true, true, false, true, false, false, true
      );
      renderState.plotRegistryData[pid] = block.data;

      let html = `<div class="dept-container section-overall">
        <div class="section-hint"><strong>전형별 현황</strong> 카드와 <strong>등급대 차트</strong>를 클릭하면 해당 조건의 상세 데이터를 조회할 수 있습니다.</div>
        ${block.html}
      </div>`;

      const conditionUnivSet = new Set(conditionRecords.map((record) => record.univ || "미상"));
      const showConditionTop20 = conditionUnivSet.size >= 2;
      if (showConditionTop20) {
        html += buildUnivTopSectionHtml("condition");
      }

      if (years.length > 1) {
        html += `<div class="dept-container section-year-comparison">
          <div class="dept-header">연도별 비교</div>
          <div class="card"><div class="card-head"><div class="card-head-copy"><h3>전형별 현황</h3>
            <div class="card-note">전형을 행으로 두고, 각 연도 칸에서 <strong>지원건수</strong>, <strong>지원 비율</strong>, <strong>합격건수(충원포함)</strong>, <strong>합격률</strong>을 함께 비교합니다.</div>
          </div></div>
            <div id="condition-analytics-year-apptype" class="aux-container"></div>
          </div>
        </div>`;
      }

      contentEl.innerHTML = html;

      if (document.getElementById(`band-bar-${pid}`)) renderGradeBands(conditionRecords, "all_subj_grade", pid);
      if (document.getElementById(`apptype-band-section-${pid}`)) renderApptypeGradeBandComparisons(conditionRecords, pid);
      if (document.getElementById(`apptype-table-${pid}`)) renderApptypeStats(conditionRecords, pid);
      if (document.getElementById(`region-table-${pid}`)) renderRegionStats(conditionRecords, pid);
      if (years.length > 1 && document.getElementById("condition-analytics-year-apptype")) {
        renderYearApptypeTrendTable(conditionAllRecords, years, "condition-analytics-year-apptype");
      }

      if (showConditionTop20) {
        renderUnivTop(conditionRecords, "condition");
        bindUnivTopModeToggle(conditionRecords, "condition");
        bindUnivTopSortToggle(conditionRecords, "condition");
      } else {
        univTopRecordsByScope.delete("condition");
      }

      bindGradeBandModeTogglesScoped(contentEl, conditionRecords);
      bindApptypeBandModeTogglesScoped(contentEl, conditionRecords);
      bindPlotExportButtons(contentEl);
      bindPlotTableButtons(contentEl);

      analyticsView.scrollIntoView({ behavior: "instant" });
    }

    function hideConditionAnalytics() {
      const listView = document.getElementById("condition-list-view");
      const analyticsView = document.getElementById("condition-analytics-view");
      const contentEl = document.getElementById("condition-analytics-content");
      if (listView) listView.hidden = false;
      if (analyticsView) analyticsView.hidden = true;
      analyticsViewState.conditionTab = { active: false, criteria: null };
      univTopRecordsByScope.delete("condition");
      cleanupAnalyticsPlots(contentEl);
      if (contentEl) contentEl.innerHTML = "";
    }

    function renderGradeBands(records, key, targetPlotId, options = {}) {
      const {
        modeKey = targetPlotId,
        noteId = `band-note-${targetPlotId}`,
        barId = `band-bar-${targetPlotId}`,
        fixedYMax = null,
        syncModeButtons = () => syncGradeBandModeButtons(targetPlotId),
        onSelect = (label) => openGradeBandDetailModal(String(label), key, records),
      } = options;
      const { stats, excludedCount } = makeGradeBandStats(records, key);
      const mode = getGradeBandMode(modeKey);
      const noteEl = document.getElementById(noteId);
      if (noteEl) {
        noteEl.textContent = `등급 미기재 제외 ${excludedCount}건`;
      }
      syncModeButtons();
      const barEl = document.getElementById(barId);
      if (barEl) {
        renderGradeBandPlot(barEl, stats, mode, getGradeBandYAxisMax(stats, fixedYMax), onSelect);
      }
    }

    function getTopApptypeBandGroups(records) {
      return makeApptypeStats(records)
        .filter((item) => item.total > 0)
        .slice(0, APPTYPE_BAND_TOP_LIMIT)
        .map((item) => ({
          ...item,
          subset: records.filter((r) => (r.apptype || "미상") === item.label),
        }));
    }

    function renderApptypeGradeBandComparisons(records, plotId) {
      const hostEl = document.getElementById(`apptype-band-section-${plotId}`);
      if (!hostEl) return;
      const groups = getTopApptypeBandGroups(records);
      const academicYearScope = formatAcademicYearScope(records);
      syncApptypeBandModeButtons(plotId);
      if (!groups.length) {
        hostEl.innerHTML = '<div class="empty">데이터 없음</div>';
        return;
      }
      hostEl.innerHTML = `<div class="apptype-band-grid">${groups.map((group, index) => {
        const targetId = `apptype-band-bar-${plotId}-${index}`;
        registerChartTableConfig(targetId, createGradeBandSummaryTableConfig(group.subset, {
          key: "all_subj_grade",
          title: `${group.label} 등급대별 지원 건수 및 합격률 표`,
          subtitle: [`전형유형 ${group.label}`, `총 ${group.subset.length.toLocaleString()}건`, formatAcademicYearScope(group.subset)].filter(Boolean).join(" · "),
          filenameBase: buildChartExportFilenameBase("전형별_등급대별_지원건수_합격률_표", group.subset, group.label),
          sheetName: "전형등급대집계표",
        }));
        return `
        <div class="apptype-band-card">
          <div class="apptype-band-card-head">
            <div class="apptype-band-card-copy">
              <h4 class="apptype-band-card-title">${escapeHtml(group.label)} · ${group.total.toLocaleString()}건${academicYearScope ? ` · ${escapeHtml(academicYearScope)}` : ""}</h4>
              <div class="card-note" id="apptype-band-note-${plotId}-${index}">등급 미기재 제외 0건</div>
            </div>
            ${buildPlotChartActionButtons(
              targetId,
              buildChartExportFilenameBase("전형별_등급대별_지원건수_합격률", group.subset, group.label),
              buildChartExportTitle("전형에 따른 등급대별 지원 건수 및 합격률", group.subset, group.label),
              true
            )}
          </div>
          <div id="${targetId}" class="plot-container h-320"></div>
        </div>
      `;
      }).join("")}</div>`;
      bindPlotExportButtons(hostEl);
      bindPlotTableButtons(hostEl);
      const sharedYMax = Math.max(...groups.map((group) => getGradeBandYAxisMax(makeGradeBandStats(group.subset, "all_subj_grade").stats)), 4);
      groups.forEach((group, index) => {
        renderGradeBands(group.subset, "all_subj_grade", plotId, {
          modeKey: `apptype-band-${plotId}`,
          noteId: `apptype-band-note-${plotId}-${index}`,
          barId: `apptype-band-bar-${plotId}-${index}`,
          fixedYMax: sharedYMax,
          syncModeButtons: () => syncApptypeBandModeButtons(plotId),
          onSelect: (label) => openGradeBandDetailModal(String(label), "all_subj_grade", records, {
            categoryType: "apptype",
            categoryValue: group.label,
            categoryLabel: group.label,
          }),
        });
      });
    }

    function bindGradeBandInteractions(graphEl, onSelect) {
      if (typeof graphEl.removeAllListeners === "function") {
        graphEl.removeAllListeners("plotly_click");
      }
      graphEl.on("plotly_click", (event) => {
        const point = event && event.points && event.points[0];
        if (!point || !point.x) return;
        onSelect(String(point.x));
      });
      graphEl.querySelectorAll(".barlayer .trace path, .scatterlayer .trace path").forEach((el) => {
        el.style.cursor = "pointer";
      });
    }

    function clampPct(v) {
      return Math.max(0, Math.min(100, v));
    }

    function rateColor(pct) {
      if (pct >= 70) return "#059669";
      if (pct >= 50) return "#10b981";
      if (pct >= 30) return "#d97706";
      return "#dc2626";
    }

    function makeCategoryStats(records, categoryKey, fallbackLabel = "미상") {
      const groups = {};
      records.forEach((r) => {
        const key = r[categoryKey] || fallbackLabel;
        if (!groups[key]) groups[key] = { total: 0, pass: 0, wait: 0, fail: 0, registered: 0 };
        groups[key].total += 1;
        if (r.result === "합격") groups[key].pass += 1;
        else if (r.result === "충원합격") groups[key].wait += 1;
        else if (r.result === "불합격") groups[key].fail += 1;
        if ((r.result === "합격" || r.result === "충원합격") && r.registered_yn === "Y") groups[key].registered += 1;
      });
      return Object.entries(groups).map(([apptype, g]) => {
        const total = g.total || 1;
        const allPass = g.pass + g.wait;
        return {
          label: apptype,
          total: g.total,
          pass: g.pass,
          wait: g.wait,
          fail: g.fail,
          registered: g.registered,
          allPass,
          allPassRate: (allPass / total) * 100,
          registrationRate: allPass ? (g.registered / allPass) * 100 : 0,
          passRate: (g.pass / total) * 100,
          waitRate: (g.wait / total) * 100,
          failRate: (g.fail / total) * 100,
        };
      }).sort((a, b) => (b.total - a.total) || a.label.localeCompare(b.label, "ko"));
    }

    function renderCategoryCards(stats, targetEl, detailRecords) {
      const hasData = stats.some((s) => s.total > 0);
      if (!hasData) {
        targetEl.innerHTML = '<div class="empty">데이터 없음</div>';
        targetEl.onclick = null;
        return;
      }
      const cards = stats.map((s) => {
        const pct = clampPct(s.allPassRate);
        const registrationPct = clampPct(s.registrationRate);
        return `<article class="apptype-chip" data-detail-view="${escapeHtml(s.detailView || "")}" data-detail-value="${escapeHtml(s.detailValue || s.label || "")}" data-detail-label="${escapeHtml(s.label || "")}">
          <h4 class="apptype-chip-title">${escapeHtml(s.label)}</h4>
          <div class="apptype-chip-count">${s.total.toLocaleString()}건<span class="apptype-chip-count-pct">${detailRecords.length ? (s.total / detailRecords.length * 100).toFixed(1) + "%" : ""}</span></div>
          <div class="apptype-chip-rate-row">
            <span class="apptype-chip-rate-label">합격률(충원포함)</span>
            <span class="apptype-chip-rate-value">${pct.toFixed(1)}%</span>
          </div>
          <div class="apptype-chip-bar"><span style="width:${pct.toFixed(1)}%; background:${rateColor(pct)};"></span></div>
          <div class="apptype-chip-meta">
            <div class="apptype-chip-meta-row">
              <span>합격건</span>
              <span class="apptype-chip-meta-value">${s.allPass.toLocaleString()}건</span>
            </div>
            <div class="apptype-chip-meta-row">
              <span>등록건</span>
              <span class="apptype-chip-meta-value">${s.registered.toLocaleString()}건</span>
            </div>
            <div class="apptype-chip-meta-row">
              <span>등록비율</span>
              <span class="apptype-chip-meta-value">${registrationPct.toFixed(1)}%</span>
            </div>
          </div>
        </article>`;
      }).join("");
      targetEl.innerHTML = `<div class="apptype-chip-grid">${cards}</div>`;
      targetEl.onclick = (event) => {
        const card = event.target instanceof Element ? event.target.closest("[data-detail-view]") : null;
        if (!card) return;
        const detailView = card.dataset.detailView || "";
        const detailValue = card.dataset.detailValue || "";
        const detailLabel = card.dataset.detailLabel || detailValue;
        if (!detailView || !detailValue) return;
        if (detailView === "apptype") openCategoryDetailModal("apptype", detailValue, detailLabel, detailRecords);
        if (detailView === "region") openCategoryDetailModal("region", detailValue, detailLabel, detailRecords);
      };
    }

    function makeApptypeStats(records) {
      return makeCategoryStats(records, "apptype").map((item) => ({ ...item, detailView: "apptype", detailValue: item.label }));
    }

    function makeRegionStats(records) {
      return makeCategoryStats(records, "region").map((item) => ({ ...item, detailView: "region", detailValue: item.label }));
    }

    function renderApptypeStats(records, plotId) {
      const cardEl = document.getElementById(`apptype-table-${plotId}`);
      if (!cardEl) return;
      renderCategoryCards(makeApptypeStats(records), cardEl, records);
    }

    function renderRegionStats(records, plotId) {
      const cardEl = document.getElementById(`region-table-${plotId}`);
      if (!cardEl) return;
      renderCategoryCards(makeRegionStats(records), cardEl, records);
    }

    function formatModalGrade(v) {
      return v === null || v === undefined || Number.isNaN(v) ? "-" : Number(v).toFixed(2);
    }

    function estimateFiveGradeFromNineGradeAverage(gradeAverage9, standardKey = "busan") {
      if (gradeAverage9 === null || gradeAverage9 === undefined || Number.isNaN(gradeAverage9)) {
        return null;
      }
      const standard = GRADE_ESTIMATE_STANDARD_MAP[standardKey];
      if (!standard) return null;
      const topRange = standard.topRange;
      const table = standard.grade5To9Table || [];
      if (!table.length) return null;
      const firstPoint = table[0];
      const lastPoint = table[table.length - 1];
      const hasLowerCoverage = !!topRange || firstPoint.grade5 <= 1.0;
      const hasUpperCoverage = lastPoint.grade5 >= 5.0;

      if (topRange && gradeAverage9 <= topRange.maxGrade9) {
        return topRange.grade5;
      }

      if (topRange && gradeAverage9 < table[0].grade9) {
        const ratio = (gradeAverage9 - topRange.maxGrade9) / (table[0].grade9 - topRange.maxGrade9);
        return topRange.grade5 + ((table[0].grade5 - topRange.grade5) * ratio);
      }

      if (!topRange && gradeAverage9 <= table[0].grade9) {
        return hasLowerCoverage ? table[0].grade5 : null;
      }

      if (gradeAverage9 >= lastPoint.grade9) {
        return hasUpperCoverage ? lastPoint.grade5 : null;
      }

      for (let index = 1; index < table.length; index += 1) {
        const prev = table[index - 1];
        const next = table[index];
        if (gradeAverage9 === next.grade9) {
          return next.grade5;
        }
        if (gradeAverage9 < next.grade9) {
          const ratio = (gradeAverage9 - prev.grade9) / (next.grade9 - prev.grade9);
          return prev.grade5 + ((next.grade5 - prev.grade5) * ratio);
        }
      }

      return lastPoint.grade5;
    }

    function formatEstimatedFiveGrade(v, standardKey = "busan") {
      const estimated = estimateFiveGradeFromNineGradeAverage(v, standardKey);
      return estimated === null ? "-" : Number(estimated).toFixed(2);
    }

    function formatRegistrationDisplay(v) {
      return v === "Y" || v === "N" ? v : "-";
    }

    function formatTrendRegistrationBadge(v) {
      if (v === "Y") return '<span class="trend-register-badge registered">등록</span>';
      if (v === "N") return '<span class="trend-register-badge unregistered">미등록</span>';
      return "";
    }

    function formatResultBadge(result) {
      const normalized = result || "-";
      const badgeClass = normalized === "합격" ? "pass" : normalized === "충원합격" ? "wait" : "fail";
      return `<span class="detail-result-badge ${badgeClass}">${escapeHtml(normalized)}</span>`;
    }

    function getStudentRecordKey(student) {
      return student.student_key || "";
    }

    function getStudentAuxMapValue(sourceMap, studentKey) {
      if (!(sourceMap instanceof Map) || !studentKey) return undefined;
      if (sourceMap.has(studentKey)) return sourceMap.get(studentKey);
      const legacyKey = getUnscopedStudentKey(studentKey);
      if (legacyKey && legacyKey !== studentKey && sourceMap.has(legacyKey)) {
        return sourceMap.get(legacyKey);
      }
      return undefined;
    }

    function buildStudentContextLabel(student, detailRows = []) {
      const schoolLocation = detailRows.find((row) => safe(row.school_location))?.school_location || "";
      return schoolLocation || student.school_location || getUnscopedStudentKey(student.student_key) || "소재지 미기재";
    }

    function findStudentCsatGradeEntry(entries = []) {
      if (!Array.isArray(entries) || !entries.length) return null;
      return entries.find((entry) => safe(entry.label) === "등급")
        || entries.find((entry) => safe(entry.label).includes("등급"))
        || null;
    }

    function parseStudentCsatGradeNumber(value) {
      const raw = safe(value);
      const match = raw.match(/([1-9])/);
      if (!match) return null;
      const parsed = parseInt(match[1], 10);
      return Number.isInteger(parsed) && parsed >= 1 && parsed <= 9 ? parsed : null;
    }

    function formatStudentCsatGradeValue(value) {
      const raw = safe(value);
      if (!raw) return "";
      const gradeNumber = parseStudentCsatGradeNumber(raw);
      return gradeNumber ? String(gradeNumber) : raw;
    }

    function renderStudentCsatGradeBadge(value) {
      const gradeValue = formatStudentCsatGradeValue(value);
      if (!gradeValue) return "";
      const gradeNumber = parseStudentCsatGradeNumber(value);
      const gradeClass = gradeNumber ? ` is-grade-${gradeNumber}` : " is-grade-unknown";
      return `<span class="detail-csat-grade-inline">
        <span class="detail-csat-grade-label">등급</span>
        <span class="detail-csat-grade-badge${gradeClass}">${escapeHtml(gradeValue)}</span>
      </span>`;
    }

    function buildStudentCsatSummaryHtml(student, detailRows = []) {
      const studentKey = getStudentRecordKey(student) || detailRows.find((row) => getStudentRecordKey(row))?.student_key || "";
      const csatProfile = studentKey ? normalizeStudentCsatProfile(getStudentAuxMapValue(dataState.studentCsatByKey, studentKey)) : [];
      if (!csatProfile.length) return "";
      const yearLabel = formatAcademicYearScope(detailRows);
      const subtitle = yearLabel ? `${yearLabel} 기준 업로드된 수능 성적` : "업로드된 수능 성적";
      return `<section class="detail-csat-card">
        <div class="detail-csat-head">
          <div class="detail-csat-title">수능 성적</div>
          <div class="detail-csat-subtitle">${escapeHtml(subtitle)}</div>
        </div>
        <div class="detail-csat-grid">
          ${csatProfile.map((group) => {
            const gradeEntry = findStudentCsatGradeEntry(group.entries);
            const detailEntries = group.entries.filter((entry) => entry !== gradeEntry);
            return `<article class="detail-csat-subject">
            <div class="detail-csat-subject-head">
              <div class="detail-csat-subject-title">${escapeHtml(group.subject)}</div>
              ${renderStudentCsatGradeBadge(gradeEntry ? gradeEntry.value : "")}
            </div>
            ${detailEntries.length ? `<dl class="detail-csat-list">
              ${detailEntries.map((entry) => `<div class="detail-csat-item">
                <dt class="detail-csat-key">${escapeHtml(entry.label)}</dt>
                <dd class="detail-csat-value">${escapeHtml(entry.value)}</dd>
              </div>`).join("")}
            </dl>` : ""}
          </article>`;
          }).join("")}
        </div>
      </section>`;
    }

    function splitSubjectGradeLabel(label = "") {
      const raw = safe(label);
      const parts = raw.split(/\s+/).filter(Boolean);
      if (parts.length >= 2) {
        return {
          group: parts[0],
          label: parts.slice(1).join(" "),
        };
      }
      return {
        group: "기타",
        label: raw || "값",
      };
    }

    function normalizeSubjectGradeEntry(entry = {}, index = 0) {
      const fallback = splitSubjectGradeLabel(entry.label);
      return {
        group: safe(entry.group) || fallback.group,
        label: safe(entry.group) ? (safe(entry.label) || "값") : fallback.label,
        value: entry.value,
        order: Number.isFinite(entry.order) ? entry.order : index,
      };
    }

    function groupStudentSubjectGrades(grades = []) {
      const grouped = new Map();
      grades
        .map((entry, index) => normalizeSubjectGradeEntry(entry, index))
        .filter((entry) => safe(entry.value))
        .sort((a, b) => a.order - b.order)
        .forEach((entry) => {
          if (!grouped.has(entry.group)) {
            grouped.set(entry.group, {
              group: entry.group,
              order: entry.order,
              items: [],
            });
          }
          const group = grouped.get(entry.group);
          group.order = Math.min(group.order, entry.order);
          group.items.push(entry);
        });
      return Array.from(grouped.values()).sort((a, b) => a.order - b.order);
    }

    function isCoreSubjectGradeGroup(groupName = "") {
      const normalized = safe(groupName).replace(/\s+/g, "");
      return ["국어", "영어", "수학", "사회", "과학"].some((subject) => normalized.includes(subject));
    }

    function renderSubjectGradePill(value) {
      const display = typeof value === "number" ? value.toFixed(2) : String(value);
      const gradeNum = typeof value === "number" ? Math.floor(value) : parseStudentCsatGradeNumber(display);
      const gradeClass = gradeNum && gradeNum >= 1 && gradeNum <= 9 ? ` is-grade-${gradeNum}` : " is-grade-unknown";
      return `<span class="subject-grade-pill${gradeClass}">${escapeHtml(display)}</span>`;
    }

    function renderSubjectGradeGroupHtml(group) {
      return `<article class="subject-grade-group">
        <div class="subject-grade-group-title">${escapeHtml(group.group)}</div>
        <div class="subject-grade-group-list">
          ${group.items.map((item) => `<div class="subject-grade-row">
            <span class="subject-grade-label">${escapeHtml(item.label)}</span>
            ${renderSubjectGradePill(item.value)}
          </div>`).join("")}
        </div>
      </article>`;
    }

    function buildStudentSubjectGradeSummaryHtml(student, detailRows = []) {
      const studentKey = getStudentRecordKey(student) || detailRows.find((row) => getStudentRecordKey(row))?.student_key || "";
      const grades = studentKey ? (getStudentAuxMapValue(dataState.studentSubjectGradeByKey, studentKey) || []) : [];
      if (!grades.length) return "";
      const groups = groupStudentSubjectGrades(grades);
      if (!groups.length) return "";
      let primaryGroups = groups.filter((group) => isCoreSubjectGradeGroup(group.group));
      let extraGroups = groups.filter((group) => !isCoreSubjectGradeGroup(group.group));
      if (!primaryGroups.length) {
        primaryGroups = groups;
        extraGroups = [];
      }
      const yearLabel = formatAcademicYearScope(detailRows);
      const subtitle = yearLabel ? `${yearLabel} 기준 교과(군)별 내신 등급` : "교과(군)별 내신 등급";
      const extraToggleHtml = extraGroups.length
        ? `<button type="button" class="subject-grade-toggle" data-subject-grade-toggle="true" aria-expanded="false">상세내용표시</button>`
        : "";
      const extraGroupsHtml = extraGroups.length
        ? `<div class="subject-grade-extra" data-subject-grade-extra hidden>
            <div class="subject-grade-extra-title">기타 교과</div>
            <div class="subject-grade-groups">${extraGroups.map(renderSubjectGradeGroupHtml).join("")}</div>
          </div>`
        : "";
      return `<section class="detail-csat-card" data-subject-grade-card="true">
        <div class="detail-csat-head subject-grade-head">
          <div>
            <div class="detail-csat-title">교과별 내신 성적</div>
            <div class="detail-csat-subtitle">${escapeHtml(subtitle)}</div>
          </div>
          ${extraToggleHtml}
        </div>
        <div class="subject-grade-groups">
          ${primaryGroups.map(renderSubjectGradeGroupHtml).join("")}
        </div>
        ${extraGroupsHtml}
      </section>`;
    }

    function createDetailModalView(config) {
      return {
        page: 1,
        pageSize: DETAIL_MODAL_PAGE_SIZE,
        ...config,
      };
    }

    function getDetailViewCacheKey(view) {
      if (!view || !view.type) return "";
      if (view.type === "univ") return `univ::${view.univ || ""}`;
      if (view.type === "deptSelection") {
        const keys = (view.entries || []).map((entry) => entry.key || "").sort();
        return `deptSelection::${keys.join("||")}`;
      }
      if (view.type === "apptype") return `apptype::${view.value || ""}`;
      if (view.type === "region") return `region::${view.value || ""}`;
      if (view.type === "gradeBand") {
        return [
          "gradeBand",
          view.label || "",
          view.key || "",
          view.categoryType || "",
          view.categoryValue || "",
        ].join("::");
      }
      if (view.type === "student") return `student::${getStudentRecordKey(view.student)}`;
      return "";
    }

    function getDetailModalPagination(view, totalCount) {
      const pageSize = Number.isInteger(view && view.pageSize) && view.pageSize > 0 ? view.pageSize : DETAIL_MODAL_PAGE_SIZE;
      const totalPages = Math.max(1, Math.ceil(totalCount / pageSize));
      const currentPage = Number.isInteger(view && view.page) && view.page > 0 ? Math.min(view.page, totalPages) : 1;
      if (view) {
        view.pageSize = pageSize;
        view.page = currentPage;
      }
      const startIndex = totalCount ? (currentPage - 1) * pageSize : 0;
      return {
        page: currentPage,
        pageSize,
        totalPages,
        startIndex,
        endIndex: Math.min(totalCount, startIndex + pageSize),
      };
    }

    function buildDetailPaginationHtml(pagination, totalCount) {
      if (!pagination || pagination.totalPages <= 1) return "";
      return `<div class="detail-pagination-actions">
        <button type="button" class="detail-pagination-btn is-secondary" data-detail-page-action="first" ${pagination.page <= 1 ? "disabled" : ""}>처음</button>
        <button type="button" class="detail-pagination-btn is-primary" data-detail-page-action="prev" ${pagination.page <= 1 ? "disabled" : ""}>이전</button>
        <span class="detail-pagination-status">${pagination.page.toLocaleString()} / ${pagination.totalPages.toLocaleString()} 페이지</span>
        <button type="button" class="detail-pagination-btn is-primary" data-detail-page-action="next" ${pagination.page >= pagination.totalPages ? "disabled" : ""}>다음</button>
        <button type="button" class="detail-pagination-btn is-secondary" data-detail-page-action="last" ${pagination.page >= pagination.totalPages ? "disabled" : ""}>마지막</button>
      </div>`;
    }

    function getDetailFilterOptions(records = [], rowKey) {
      const set = new Set();
      records.forEach((record) => {
        set.add(record[rowKey] || "미상");
      });
      return Array.from(set).sort((a, b) => a.localeCompare(b, "ko", { numeric: true }));
    }

    function getDetailDeptOptions(records = []) {
      return getDetailFilterOptions(records, "dept");
    }

    function isPassResult(result) {
      return result === "합격" || result === "충원합격";
    }

    function getFilteredDetailRowsForView(view, detailRows = []) {
      if (view && (view.disableDeptFilter || view.type === "student")) return detailRows;
      const deptF = Array.isArray(view?.deptFilter) ? view.deptFilter : [];
      const univF = Array.isArray(view?.univFilter) ? view.univFilter : [];
      const subtypeF = Array.isArray(view?.subtypeFilter) ? view.subtypeFilter : [];
      const resultF = view?.resultFilter === "pass" || view?.resultFilter === "fail" ? view.resultFilter : "all";
      if (!deptF.length && !univF.length && !subtypeF.length && resultF === "all") return detailRows;
      return detailRows.filter((record) => {
        if (deptF.length && !deptF.includes(record.dept || "미상")) return false;
        if (univF.length && !univF.includes(record.univ || "미상")) return false;
        if (subtypeF.length && !subtypeF.includes(record.subtype || "미상")) return false;
        if (resultF === "pass" && !isPassResult(record.result)) return false;
        if (resultF === "fail" && isPassResult(record.result)) return false;
        return true;
      });
    }

    function buildMultiComboHtml(kind, allOptions, selectedValues) {
      const meta = COMBO_KINDS[kind];
      if (!meta) return "";
      const selected = Array.isArray(selectedValues) ? selectedValues : [];
      const hasSelection = selected.length > 0;
      return `<div class="detail-filter-group">
        <label class="detail-filter-label">${meta.label}</label>
        <div class="dept-combo" id="combo-${kind}" data-combo-kind="${kind}">
          <div class="dept-combo-input-area" data-combo-area="true">
            ${selected.map(v => `<span class="dept-combo-tag" data-combo-value="${escapeHtml(v)}"><span class="dept-combo-tag-label">${escapeHtml(v)}</span><button type="button" class="dept-combo-tag-remove" data-combo-remove="${escapeHtml(v)}" title="제거">×</button></span>`).join("")}
            ${hasSelection ? `<button type="button" class="dept-combo-clear" data-combo-clear-all="true" title="전체 해제">초기화</button>` : ""}
            <input class="dept-combo-input" data-combo-input="true" placeholder="${hasSelection ? "" : meta.placeholder}" autocomplete="off" />
          </div>
          <div class="dept-combo-dropdown" data-combo-dropdown="true">
            ${allOptions.map(v => {
              const sel = selected.includes(v);
              return `<div class="dept-combo-option${sel ? " is-selected" : ""}" data-combo-option="${escapeHtml(v)}"><span class="check-icon">${sel ? "✓" : ""}</span><span>${escapeHtml(v)}</span></div>`;
            }).join("")}
          </div>
        </div>
      </div>`;
    }

    function buildResultToggleHtml(resultFilter) {
      const current = resultFilter === "pass" || resultFilter === "fail" ? resultFilter : "all";
      const buttons = [
        { value: "all", label: "전체" },
        { value: "pass", label: "합격" },
        { value: "fail", label: "불합격" },
      ];
      return `<div class="detail-filter-group">
        <label class="detail-filter-label">결과</label>
        <div class="result-toggle" role="group">
          ${buttons.map(b => `<button type="button" class="result-toggle-btn${current === b.value ? " is-active" : ""}" data-result-filter="${b.value}">${b.label}</button>`).join("")}
        </div>
      </div>`;
    }

    function buildDetailToolbarHtml(options = {}) {
      const {
        pagination = null,
        totalCount = 0,
        filteredCount = totalCount,
        deptOptions = [],
        deptFilter = [],
        univOptions = [],
        univFilter = [],
        subtypeOptions = [],
        subtypeFilter = [],
        resultFilter = "all",
        showFilters = true,
      } = options;
      const selDept = Array.isArray(deptFilter) ? deptFilter : [];
      const selUniv = Array.isArray(univFilter) ? univFilter : [];
      const selSubtype = Array.isArray(subtypeFilter) ? subtypeFilter : [];
      const currentResult = resultFilter === "pass" || resultFilter === "fail" ? resultFilter : "all";
      const activeBadges = [];
      if (currentResult === "pass") activeBadges.push("합격만");
      else if (currentResult === "fail") activeBadges.push("불합격만");
      if (selUniv.length) activeBadges.push(`대학 ${selUniv.length}개`);
      if (selSubtype.length) activeBadges.push(`세부유형 ${selSubtype.length}개`);
      if (selDept.length) activeBadges.push(`모집단위 ${selDept.length}개`);
      const totalLabel = totalCount.toLocaleString();
      const filteredLabel = filteredCount.toLocaleString();
      const rangeText = pagination && filteredCount
        ? `${(pagination.startIndex + 1).toLocaleString()}~${pagination.endIndex.toLocaleString()}건`
        : `${filteredLabel}건`;
      const excelHintText = excelExportDisabled ? "" : " · 엑셀 저장은 현재 필터 기준으로 다운로드합니다.";
      const metaText = activeBadges.length
        ? `${activeBadges.join(" · ")} 기준 ${rangeText} 표시${filteredCount !== totalCount ? ` · 필터 결과 ${filteredLabel}건 · 전체 ${totalLabel}건` : ` · 전체 ${totalLabel}건`}${excelHintText}`
        : `총 ${filteredLabel}건 중 ${rangeText} 표시${excelHintText}`;
      const filtersHtml = !showFilters ? "" : [
        buildResultToggleHtml(currentResult),
        univOptions.length > 1 ? buildMultiComboHtml("univ", univOptions, selUniv) : "",
        subtypeOptions.length > 1 ? buildMultiComboHtml("subtype", subtypeOptions, selSubtype) : "",
        deptOptions.length > 1 ? buildMultiComboHtml("dept", deptOptions, selDept) : "",
      ].filter(Boolean).join("");
      const paginationHtml = buildDetailPaginationHtml(pagination, filteredCount);
      if (!filtersHtml && !paginationHtml) return "";
      return `<div class="detail-toolbar">
        <div class="detail-toolbar-main">
          <div class="detail-toolbar-meta">${metaText}</div>
          ${filtersHtml}
        </div>
        ${paginationHtml}
      </div>`;
    }

    function buildExportTimestamp() {
      const now = new Date();
      const pad = (value) => String(value).padStart(2, "0");
      return `${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}_${pad(now.getHours())}${pad(now.getMinutes())}${pad(now.getSeconds())}`;
    }

    function isSameStudentRecord(r, student) {
      return getStudentRecordKey(r) === getStudentRecordKey(student);
    }

    function getTrendSupportResultClass(result) {
      if (result === "합격") return "is-pass";
      if (result === "충원합격") return "is-wait";
      return "is-fail";
    }

    function makeStudentTrendRows(records) {
      const grouped = new Map();
      records.forEach((r, index) => {
        const key = getStudentRecordKey(r);
        if (!grouped.has(key)) {
          grouped.set(key, {
            key,
            rowOrder: index,
            sortGrade: r.all_subj_grade ?? Number.POSITIVE_INFINITY,
            gradeLabel: formatModalGrade(r.all_subj_grade),
            student_key: key,
            apps: [],
            years: [],
          });
        }
        if (r.academic_year) {
          grouped.get(key).years.push(String(r.academic_year));
        }
        grouped.get(key).apps.push({
          academic_year: r.academic_year || "-",
          univ: r.univ || "-",
          apptype: r.apptype || "-",
          dept: r.dept || "-",
          result: r.result || "-",
          registered_yn: r.registered_yn || "",
        });
      });
      const rows = Array.from(grouped.values());
      rows.forEach((row) => {
        row.yearLabels = Array.from(new Set(row.years.filter(Boolean)))
          .sort((a, b) => a.localeCompare(b, "ko", { numeric: true }));
        delete row.years;
        row.apps.sort((a, b) => {
          const yA = String(a.academic_year), yB = String(b.academic_year);
          if (yA !== yB) return yA.localeCompare(yB);
          return 0;
        });
      });
      return rows.sort((a, b) => {
        if (a.sortGrade !== b.sortGrade) return a.sortGrade - b.sortGrade;
        const keyDiff = String(a.student_key).localeCompare(String(b.student_key), "ko", { numeric: true });
        if (keyDiff !== 0) return keyDiff;
        return a.rowOrder - b.rowOrder;
      });
    }

    function getStudentTrendPagination(totalRows) {
      const totalPages = Math.max(1, Math.ceil(totalRows / trendState.pageSize));
      trendState.page = Math.min(Math.max(trendState.page, 1), totalPages);
      const startIndex = totalRows ? (trendState.page - 1) * trendState.pageSize : 0;
      return {
        page: trendState.page,
        totalPages,
        startIndex,
        endIndex: Math.min(totalRows, startIndex + trendState.pageSize),
      };
    }

    function buildStudentTrendToolbarHtml(pagination, totalRows) {
      if (!totalRows) return "";
      const startLabel = totalRows ? (pagination.startIndex + 1).toLocaleString() : "0";
      const endLabel = totalRows ? pagination.endIndex.toLocaleString() : "0";
      const actionsHtml = pagination.totalPages > 1 ? `<div class="trend-toolbar-actions">
        <button type="button" class="detail-pagination-btn is-secondary" data-trend-page-action="first" ${pagination.page <= 1 ? "disabled" : ""}>처음</button>
        <button type="button" class="detail-pagination-btn is-primary" data-trend-page-action="prev" ${pagination.page <= 1 ? "disabled" : ""}>이전</button>
        <span class="detail-pagination-status">${pagination.page.toLocaleString()} / ${pagination.totalPages.toLocaleString()} 페이지</span>
        <button type="button" class="detail-pagination-btn is-primary" data-trend-page-action="next" ${pagination.page >= pagination.totalPages ? "disabled" : ""}>다음</button>
        <button type="button" class="detail-pagination-btn is-secondary" data-trend-page-action="last" ${pagination.page >= pagination.totalPages ? "disabled" : ""}>마지막</button>
      </div>` : "";
      return `<div class="trend-toolbar">
        <div class="trend-toolbar-meta">학생 ${totalRows.toLocaleString()}명 중 ${startLabel}~${endLabel}명 표시 · 한 번에 모든 학생 행을 그리지 않도록 페이지 단위로 나누어 표시합니다.</div>
        ${actionsHtml}
      </div>`;
    }

    function handleStudentTrendPageAction(action) {
      if (!trendState.records || !trendState.rows.length) return;
      const pagination = getStudentTrendPagination(trendState.rows.length);
      if (pagination.totalPages <= 1) return;
      let nextPage = pagination.page;
      if (action === "first") nextPage = 1;
      if (action === "prev") nextPage = Math.max(1, pagination.page - 1);
      if (action === "next") nextPage = Math.min(pagination.totalPages, pagination.page + 1);
      if (action === "last") nextPage = pagination.totalPages;
      if (nextPage === pagination.page) return;
      trendState.page = nextPage;
      renderStudentTrend(trendState.records, { reuseRows: true });
    }

    function renderStudentTrend(records, options = {}) {
      const hostEl = document.getElementById("student-trend-table");
      if (!hostEl) return;
      if (!options.reuseRows) {
        trendState.rows = makeStudentTrendRows(records);
        trendState.page = 1;
        trendState.pageSize = STUDENT_TREND_PAGE_SIZE;
        trendState.records = records;
      }
      const rows = trendState.rows;
      if (!rows.length) {
        hostEl.innerHTML = '<div class="empty">데이터 없음</div>';
        hostEl.onclick = null;
        return;
      }
      const visibleApps = STUDENT_TREND_MAX_APPS;
      const pagination = getStudentTrendPagination(rows.length);
      const visibleRows = rows.slice(pagination.startIndex, pagination.endIndex);
      hostEl.innerHTML = `${buildStudentTrendToolbarHtml(pagination, rows.length)}<div class="trend-table-wrap">
        <table class="trend-table">
          <colgroup>
            <col class="trend-col-grade">
            ${new Array(visibleApps).fill('<col class="trend-col-app">').join("")}
          </colgroup>
          <thead>
            <tr>
              <th class="trend-sticky-grade">등급</th>
              ${Array.from({ length: visibleApps }, (_, index) => `<th>지원대학${index + 1}</th>`).join("")}
            </tr>
          </thead>
          <tbody>
            ${visibleRows.map((row) => `<tr class="trend-row-clickable" data-trend-student="true" data-student-key="${escapeHtml(row.student_key || "")}">
              <td class="trend-sticky-grade"><div class="trend-cell-core trend-grade-summary"><div class="trend-grade-value">${escapeHtml(row.gradeLabel)}</div><div class="trend-class-count">지원 ${row.apps.length}건</div>${row.yearLabels && row.yearLabels.length ? `<div class="trend-grade-years">${row.yearLabels.map((year) => `<span class="trend-year-chip">${escapeHtml(year)}</span>`).join("")}</div>` : ""}</div></td>
              ${Array.from({ length: visibleApps }, (_, index) => {
                const app = row.apps[index];
                if (!app) {
                  return '<td><div class="trend-cell-core"><span class="trend-empty">-</span></div></td>';
                }
                const regBadge = formatTrendRegistrationBadge(app.registered_yn);
                const resultClass = getTrendSupportResultClass(app.result);
                return `<td><div class="trend-cell-core trend-app-cell ${resultClass}">
                  <div class="trend-support-card">
                    <div class="trend-support-univ">${escapeHtml(app.univ)}</div>
                    <div class="trend-support-meta">${escapeHtml(app.apptype)}</div>
                    <div class="trend-support-meta">${escapeHtml(app.dept)}</div>
                    <div class="trend-support-badges">
                      ${formatResultBadge(app.result)}
                      ${regBadge}
                    </div>
                  </div>
                </div></td>`;
              }).join("")}
            </tr>`).join("")}
          </tbody>
        </table>
      </div>`;
      hostEl.onclick = (event) => {
        const pageTrigger = event.target instanceof Element ? event.target.closest("[data-trend-page-action]") : null;
        if (pageTrigger) {
          handleStudentTrendPageAction(pageTrigger.getAttribute("data-trend-page-action") || "");
          return;
        }
        const target = event.target instanceof Element ? event.target.closest('[data-trend-student="true"]') : null;
        if (!target) return;
        openStudentDetailModal({
          student_key: target.dataset.studentKey || "",
        });
      };
    }

    function getDetailTableColumns(includeUniv = false) {
      const columns = [
        { header: "학년도", colClass: "detail-col-year", value: (r) => r.academic_year || "-" },
      ];
      if (includeUniv) {
        columns.push({ header: "대학", colClass: "detail-col-univ", value: (r) => r.univ || "-", ellipsis: true });
      }
      columns.push(
        { header: "세부유형", colClass: "detail-col-subtype", value: (r) => r.subtype || "-", ellipsis: true },
        { header: "모집단위", colClass: "detail-col-dept", value: (r) => r.dept || "-", ellipsis: true },
        { header: "모집인원", colClass: "detail-col-enrollment", value: (r) => r.enrollment_count != null ? r.enrollment_count : "-" },
        { header: "선발유형", colClass: "detail-col-selection", value: (r) => r.selection_type || "-", ellipsis: true },
        { header: "결과", colClass: "detail-col-result", render: (r) => formatResultBadge(r.result) },
        { header: "등록", colClass: "detail-col-register", value: (r) => formatRegistrationDisplay(r.registered_yn) },
        { header: "전교과등급", colClass: "detail-col-grade", render: (r) => renderDetailAllSubjGradeCell(r) },
        { header: "환산(일반)", colClass: "detail-col-conv", render: (r) => renderDetailConvGradeCell(r) },
      );
      return columns;
    }

    function renderDetailTextCell(value, ellipsis = false) {
      const safeValue = value || "-";
      const className = ellipsis ? "detail-cell-ellipsis" : "detail-cell-text";
      const titleAttr = ellipsis ? ` title="${escapeHtml(safeValue)}"` : "";
      return `<span class="${className}"${titleAttr}>${escapeHtml(safeValue)}</span>`;
    }

    function renderDetailTooltipCell(displayValue, tooltipLines = []) {
      const safeDisplayValue = displayValue || "-";
      if (!tooltipLines.length) {
        return `<span class="detail-cell-text">${escapeHtml(safeDisplayValue)}</span>`;
      }
      return `<span class="detail-tooltip-anchor">
        <span class="detail-tooltip-trigger"><span class="detail-tooltip-text">${escapeHtml(safeDisplayValue)}</span></span>
        <span class="detail-tooltip-bubble">${tooltipLines.map((line) => `<span class="detail-tooltip-line">${escapeHtml(line)}</span>`).join("")}</span>
      </span>`;
    }

    function renderDetailAllSubjGradeCell(record) {
      const allSubjGrade = formatModalGrade(record.all_subj_grade);
      const tooltipLines = ESTIMATED_FIVE_GRADE_STANDARDS
        .map((standard) => {
          const estimated = formatEstimatedFiveGrade(record.all_subj_grade, standard.key);
          return estimated === "-" ? "" : `5등급(${standard.label}): ${estimated}`;
        })
        .filter(Boolean);
      return renderDetailTooltipCell(allSubjGrade, tooltipLines);
    }

    function renderDetailConvGradeCell(record) {
      const convGrade = formatModalGrade(record.conv_grade);
      const convGradeExt = formatModalGrade(record.conv_grade_ext);
      if (convGradeExt === "-") {
        return `<span class="detail-cell-text">${escapeHtml(convGrade)}</span>`;
      }
      return renderDetailTooltipCell(convGrade, [`환산등급(일반+진로): ${convGradeExt}`]);
    }

    function buildDetailTable(records, options = {}) {
      const {
        includeUniv = false,
        enableStudentLinks = false,
        pagination = null,
        totalCount = records.length,
        filteredCount = records.length,
        prependHtml = "",
        showDeptFilter = true,
        showFilters = showDeptFilter,
      } = options;
      if (!records.length) return '<div class="empty">데이터 없음</div>';
      const columns = getDetailTableColumns(includeUniv);
      const rows = records.map((r) => {
        const rowClassParts = [
          r.result === "합격" ? "detail-row-pass" : r.result === "충원합격" ? "detail-row-wait" : "",
          enableStudentLinks ? "detail-row-clickable" : "",
        ].filter(Boolean);
        const rowAttrs = enableStudentLinks
          ? ` data-student-drilldown="true" data-student-key="${escapeHtml(getStudentRecordKey(r))}" tabindex="0" role="button" aria-label="학생 상세 보기"`
          : "";
        const cells = columns.map((column) => {
          const cellContent = column.render
            ? column.render(r)
            : renderDetailTextCell(column.value(r), !!column.ellipsis);
          return `<td class="${column.colClass}">${cellContent}</td>`;
        }).join("");
        return `<tr class="${rowClassParts.join(" ")}"${rowAttrs}>${cells}</tr>`;
      }).join("");
      const colgroup = columns.map((column) => `<col class="${column.colClass}">`).join("");
      const thead = columns.map((column) => `<th class="${column.colClass}">${escapeHtml(column.header)}</th>`).join("");
      const toolbarHtml = buildDetailToolbarHtml({
        pagination,
        totalCount,
        filteredCount,
        deptOptions: options.deptOptions || [],
        deptFilter: Array.isArray(options.deptFilter) ? options.deptFilter : [],
        univOptions: options.univOptions || [],
        univFilter: Array.isArray(options.univFilter) ? options.univFilter : [],
        subtypeOptions: options.subtypeOptions || [],
        subtypeFilter: Array.isArray(options.subtypeFilter) ? options.subtypeFilter : [],
        resultFilter: options.resultFilter || "all",
        showFilters,
      });
      return `<div class="detail-modal-content">
        ${prependHtml}
        ${toolbarHtml}
        <div class="detail-table-wrap">
          <table class="detail-table">
            <colgroup>${colgroup}</colgroup>
            <thead><tr>${thead}</tr></thead>
            <tbody>${rows}</tbody>
          </table>
        </div>
      </div>`;
    }

    function buildSummaryTableHtml(view = {}) {
      const columns = Array.isArray(view.columns) ? view.columns : [];
      const rows = Array.isArray(view.rows) ? view.rows : [];
      const toolbarHtml = view.metaText
        ? `<div class="detail-toolbar"><div class="detail-toolbar-main"><div class="detail-toolbar-meta">${escapeHtml(view.metaText)}</div></div></div>`
        : "";
      if (!columns.length || !rows.length) {
        return `<div class="detail-modal-content">${toolbarHtml}<div class="empty">데이터 없음</div></div>`;
      }
      const colgroup = columns.map((column) => `<col${column.width ? ` style="width:${escapeHtml(column.width)}"` : ""}>`).join("");
      const alignClass = (align) => align === "right"
        ? "detail-align-right"
        : align === "center"
          ? "detail-align-center"
          : "";
      const thead = columns.map((column) => `<th class="${alignClass(column.align)}">${escapeHtml(column.header || "")}</th>`).join("");
      const tbody = rows.map((row) => `<tr>${columns.map((column) => {
        const value = row && row[column.key] !== undefined && row[column.key] !== null ? row[column.key] : "-";
        return `<td class="${alignClass(column.align)}">${escapeHtml(value)}</td>`;
      }).join("")}</tr>`).join("");
      return `<div class="detail-modal-content">
        ${toolbarHtml}
        <div class="detail-table-wrap">
          <table class="detail-table">
            <colgroup>${colgroup}</colgroup>
            <thead><tr>${thead}</tr></thead>
            <tbody>${tbody}</tbody>
          </table>
        </div>
      </div>`;
    }

    function sortRowsByGrade(records) {
      return [...records].sort((a, b) => {
        const gradeA = a.all_subj_grade ?? Number.POSITIVE_INFINITY;
        const gradeB = b.all_subj_grade ?? Number.POSITIVE_INFINITY;
        if (gradeA !== gradeB) return gradeA - gradeB;
        const resultDiff = RESULT_ORDER.indexOf(a.result) - RESULT_ORDER.indexOf(b.result);
        if (resultDiff !== 0) return resultDiff;
        const univDiff = (a.univ || "").localeCompare(b.univ || "", "ko");
        if (univDiff !== 0) return univDiff;
        return getStudentRecordKey(a).localeCompare(getStudentRecordKey(b), "ko", { numeric: true });
      });
    }

    function formatGradeBandRange(band) {
      if (!band) return "-";
      return `${Number(band.from).toFixed(2)} ~ ${Number(band.to - 0.01).toFixed(2)}`;
    }

    // 모달이 보여줄 데이터 범위(scope)를 지정한다. 카테고리/대학/학과/등급대 모달은
    // 각자 다른 부분집합(연도 필터·조건 조회 등)으로 열릴 수 있으므로, 전역 보고서 데이터
    // (dataState.reportRecords)를 덮어쓰지 않고 여기에만 보관한다. scope가 바뀌면 뷰 행
    // 캐시도 무효화해야 다른 scope의 결과가 잘못 재사용되지 않는다.
    function setModalScope(records) {
      modalState.sourceRecords = Array.isArray(records) ? records : [];
      dataState.detailViewRowsCache = new Map();
    }

    function getModalScopeRecords() {
      return modalState.sourceRecords && modalState.sourceRecords.length
        ? modalState.sourceRecords
        : dataState.reportRecords;
    }

    function getDetailRowsForView(view) {
      if (!view) return [];
      const cacheKey = getDetailViewCacheKey(view);
      if (cacheKey && dataState.detailViewRowsCache.has(cacheKey)) {
        return dataState.detailViewRowsCache.get(cacheKey);
      }
      // 학생 뷰는 "지원 전체 목록"이므로 항상 전역 보고서 데이터를 본다.
      // 나머지 뷰는 모달을 연 곳에서 지정한 scope(부분집합)를 본다.
      const scopeRecords = view.type === "student" ? dataState.reportRecords : getModalScopeRecords();
      let detailRows = [];
      if (view.type === "univ") {
        detailRows = sortRowsByGrade(scopeRecords.filter((r) => r.univ === view.univ));
      } else if (view.type === "deptSelection") {
        const keySet = new Set((view.entries || []).flatMap((entry) => getDeptFinderEntryMatchKeys(entry)));
        detailRows = sortRowsByGrade(scopeRecords.filter((r) => keySet.has(buildDeptFinderKey(r.univ, r.dept))));
      } else if (view.type === "apptype") {
        detailRows = sortRowsByGrade(scopeRecords.filter((r) => (r.apptype || "미상") === view.value));
      } else if (view.type === "region") {
        detailRows = sortRowsByGrade(scopeRecords.filter((r) => (r.region || "미상") === view.value));
      } else if (view.type === "gradeBand") {
        detailRows = sortRowsByGrade(scopeRecords.filter((r) => {
          if (r[view.key] === null || r[view.key] < view.band.from || r[view.key] >= view.band.to) return false;
          if (view.categoryType === "apptype") return (r.apptype || "미상") === view.categoryValue;
          return true;
        }));
      } else if (view.type === "student") {
        detailRows = scopeRecords
          .filter((r) => isSameStudentRecord(r, view.student))
          .sort((a, b) => {
            const resultDiff = RESULT_ORDER.indexOf(a.result) - RESULT_ORDER.indexOf(b.result);
            if (resultDiff !== 0) return resultDiff;
            const univDiff = (a.univ || "").localeCompare(b.univ || "", "ko");
            if (univDiff !== 0) return univDiff;
            const subtypeDiff = (a.subtype || "").localeCompare(b.subtype || "", "ko");
            if (subtypeDiff !== 0) return subtypeDiff;
            return (a.dept || "").localeCompare(b.dept || "", "ko");
          });
      }
      if (cacheKey) {
        dataState.detailViewRowsCache.set(cacheKey, detailRows);
      }
      return detailRows;
    }

    function getDetailViewConfig(view, detailRows) {
      const totalText = `총 ${detailRows.length.toLocaleString()}건`;
      if (view.type === "univ") {
        const passBandMeta = buildUnivPassBandMetaFromRecords(detailRows);
        return {
          title: `${view.univ} 상세 데이터`,
          subtitle: `${totalText} · ${buildUnivPassBandDetailSubtitle(passBandMeta)}`,
          tableOptions: { enableStudentLinks: true },
          exportOptions: {
            includeUniv: false,
            sheetName: "대학상세데이터",
            filenameBase: `${sanitizeFilenamePart(view.univ)}_상세데이터`,
          },
        };
      }
      if (view.type === "deptSelection") {
        const summaryText = formatDeptSelectionSummary(view.entries || []);
        return {
          title: "선택 학과 상세 데이터",
          subtitle: `${summaryText} · ${totalText}`,
          tableOptions: { includeUniv: true, enableStudentLinks: true },
          exportOptions: {
            includeUniv: true,
            sheetName: "학과선택상세데이터",
            filenameBase: `선택학과_${(view.entries || []).length}개_상세데이터`,
          },
        };
      }
      if (view.type === "apptype") {
        return {
          title: `${view.label} 상세 데이터`,
          subtitle: `전형유형 · ${totalText}`,
          tableOptions: { includeUniv: true, enableStudentLinks: true },
          exportOptions: {
            includeUniv: true,
            sheetName: "전형유형상세데이터",
            filenameBase: `${sanitizeFilenamePart(view.label)}_전형유형상세데이터`,
          },
        };
      }
      if (view.type === "region") {
        return {
          title: `${view.label} 상세 데이터`,
          subtitle: `지역별 현황 · ${totalText}`,
          tableOptions: { includeUniv: true, enableStudentLinks: true },
          exportOptions: {
            includeUniv: true,
            sheetName: "지역상세데이터",
            filenameBase: `${sanitizeFilenamePart(view.label)}_지역상세데이터`,
          },
        };
      }
      if (view.type === "gradeBand") {
        const prefixText = view.categoryType === "apptype" ? `${view.categoryLabel} · ` : "";
        const subtitlePrefix = view.categoryType === "apptype" ? `전형유형 ${view.categoryLabel} · ` : "";
        return {
          title: `${prefixText}${view.label} 상세 데이터`,
          subtitle: `${subtitlePrefix}전교과등급 ${formatGradeBandRange(view.band)} · ${totalText}`,
          tableOptions: { includeUniv: true, enableStudentLinks: true },
          exportOptions: {
            includeUniv: true,
            sheetName: "등급대상세데이터",
            filenameBase: `${sanitizeFilenamePart(prefixText + view.label)}_상세데이터`,
          },
        };
      }
      if (view.type === "student") {
        const studentContext = buildStudentContextLabel(view.student, detailRows);
        const isRural = detailRows.some(r => safe(r.is_rural) === "O");
        const subtitleParts = [studentContext, isRural ? "농어촌 O" : "", totalText].filter(Boolean);
        return {
          title: "학생 지원 전체 목록",
          subtitle: subtitleParts.join(" · "),
          tableOptions: {
            includeUniv: true,
            prependHtml: buildStudentSubjectGradeSummaryHtml(view.student, detailRows) + buildStudentCsatSummaryHtml(view.student, detailRows),
            showDeptFilter: false,
          },
          disableDeptFilter: true,
          exportOptions: {
            includeUniv: true,
            sheetName: "학생전체지원목록",
            filenameBase: `학생_${sanitizeFilenamePart(studentContext)}_지원전체목록_${buildExportTimestamp()}`,
          },
        };
      }
      return {
        title: "상세 데이터",
        subtitle: totalText,
        tableOptions: {},
        exportOptions: { includeUniv: false, sheetName: "상세데이터", filenameBase: "상세데이터" },
      };
    }

    function buildExportRows(records, options = {}) {
      const { includeUniv = false } = options;
      const fmtGrade = (v) => v === null || v === undefined || Number.isNaN(v) ? "" : Number(v).toFixed(2);
      // 내보내기 컬럼은 상세 표(및 셀 툴팁)에 실제로 보이는 항목으로만 한정한다.
      // 화면에 표시하지 않는 소재지·농어촌(개인 민감정보)과 지역(대학)·전형유형은
      // 보이는 정보보다 더 많은 정보가 새어 나가지 않도록 내보내기에서 제외한다.
      // (컬럼 순서는 getDetailTableColumns의 화면 순서를 따른다.)
      return records.map((r) => {
        const row = { "학년도": r.academic_year || "" };
        if (includeUniv) row["대학"] = r.univ || "";
        row["세부유형"] = r.subtype || "";
        row["모집단위"] = r.dept || "";
        row["모집인원"] = r.enrollment_count != null ? r.enrollment_count : "";
        row["선발유형"] = r.selection_type || "";
        row["결과"] = r.result || "";
        row["등록"] = formatRegistrationDisplay(r.registered_yn);
        row["전교과등급"] = fmtGrade(r.all_subj_grade);
        // 전교과등급 셀 툴팁으로 보이는 5등급 환산 추정치
        ESTIMATED_FIVE_GRADE_STANDARDS.forEach((standard) => {
          const estimated = formatEstimatedFiveGrade(r.all_subj_grade, standard.key);
          row[`5등급(${standard.label})`] = estimated === "-" ? "" : estimated;
        });
        row["환산등급(일반)"] = fmtGrade(r.conv_grade);
        // 환산(일반) 셀 툴팁으로 보이는 값
        row["환산등급(일반+진로)"] = fmtGrade(r.conv_grade_ext);
        return row;
      });
    }

    function renderDetailModalView() {
      const currentView = modalState.viewStack[modalState.viewStack.length - 1];
      if (!currentView) {
        closeDetailModal();
        return;
      }
      if (currentView.type === "summaryTable") {
        detailModalBackBtn.hidden = modalState.viewStack.length <= 1;
        detailModalExportBtn.hidden = excelExportDisabled || !(Array.isArray(currentView.exportRows) && currentView.exportRows.length);
        detailModalTitleEl.textContent = currentView.title || "집계표";
        detailModalSubtitleEl.textContent = currentView.subtitle || "";
        detailModalBodyEl.innerHTML = buildSummaryTableHtml(currentView);
        detailModalEl.hidden = false;
        document.body.style.overflow = "hidden";
        detailModalBodyEl.scrollTop = 0;
        updateDetailToolbarOffset();
        return;
      }
      const detailRows = getDetailRowsForView(currentView);
      const filteredRows = getFilteredDetailRowsForView(currentView, detailRows);
      const deptOptions = getDetailFilterOptions(detailRows, "dept");
      const univOptions = getDetailFilterOptions(detailRows, "univ");
      const subtypeOptions = getDetailFilterOptions(detailRows, "subtype");
      const pagination = getDetailModalPagination(currentView, filteredRows.length);
      const visibleRows = pagination.totalPages > 1
        ? filteredRows.slice(pagination.startIndex, pagination.endIndex)
        : filteredRows;
      const viewConfig = getDetailViewConfig(currentView, filteredRows);
      currentView.disableDeptFilter = !!viewConfig.disableDeptFilter;
      detailModalBackBtn.hidden = modalState.viewStack.length <= 1;
      detailModalExportBtn.hidden = excelExportDisabled || !filteredRows.length;
      detailModalTitleEl.textContent = viewConfig.title;
      detailModalSubtitleEl.textContent = viewConfig.subtitle;
      detailModalBodyEl.innerHTML = buildDetailTable(visibleRows, {
        ...viewConfig.tableOptions,
        pagination,
        totalCount: detailRows.length,
        filteredCount: filteredRows.length,
        deptOptions,
        deptFilter: Array.isArray(currentView.deptFilter) ? currentView.deptFilter : [],
        univOptions,
        univFilter: Array.isArray(currentView.univFilter) ? currentView.univFilter : [],
        subtypeOptions,
        subtypeFilter: Array.isArray(currentView.subtypeFilter) ? currentView.subtypeFilter : [],
        resultFilter: currentView.resultFilter || "all",
      });
      detailModalEl.hidden = false;
      document.body.style.overflow = "hidden";
      detailModalBodyEl.scrollTop = 0;
      updateDetailToolbarOffset();
    }

    function openUnivDetailModal(univ, records) {
      setModalScope(records);
      modalState.viewStack = [createDetailModalView({ type: "univ", univ })];
      renderDetailModalView();
    }

    function openDeptSelectionDetailModal(entries, records) {
      if (!entries || !entries.length) return;
      setModalScope(records);
      modalState.viewStack = [createDetailModalView({
        type: "deptSelection",
        entries: entries.map((entry) => ({
          key: entry.key,
          mode: entry.mode,
          univ: entry.univ,
          primaryUniv: entry.primaryUniv,
          univCount: entry.univCount,
          dept: entry.dept,
          matchKeys: Array.isArray(entry.matchKeys) ? [...entry.matchKeys] : undefined,
        })),
      })];
      renderDetailModalView();
    }

    function openCategoryDetailModal(type, value, label, records) {
      setModalScope(records);
      modalState.viewStack = [createDetailModalView({ type, value, label })];
      renderDetailModalView();
    }

    function openSummaryTableModal(config = {}) {
      modalState.viewStack = [createDetailModalView({
        type: "summaryTable",
        title: config.title || "집계표",
        subtitle: config.subtitle || "",
        metaText: config.metaText || "",
        columns: Array.isArray(config.columns) ? config.columns.map((column) => ({ ...column })) : [],
        rows: Array.isArray(config.rows) ? config.rows.map((row) => ({ ...row })) : [],
        exportRows: Array.isArray(config.exportRows) ? config.exportRows.map((row) => ({ ...row })) : [],
        exportOptions: config.exportOptions ? { ...config.exportOptions } : { sheetName: "집계표", filenameBase: "집계표" },
      })];
      renderDetailModalView();
    }

    function openGradeBandDetailModal(label, key, records, options = {}) {
      const band = getGradeBandDefinition(label);
      if (!band) return;
      setModalScope(records);
      modalState.viewStack = [createDetailModalView({
        type: "gradeBand",
        label,
        band,
        key,
        categoryType: options.categoryType || "",
        categoryValue: options.categoryValue || "",
        categoryLabel: options.categoryLabel || "",
      })];
      renderDetailModalView();
    }

    function openStudentDetailModal(student) {
      if (!student) return;
      const currentView = modalState.viewStack[modalState.viewStack.length - 1];
      if (currentView && currentView.type === "student" && isSameStudentRecord(currentView.student, student)) return;
      modalState.viewStack.push(createDetailModalView({ type: "student", student }));
      renderDetailModalView();
    }

    function handleDetailModalPageAction(action) {
      const currentView = modalState.viewStack[modalState.viewStack.length - 1];
      if (!currentView) return;
      const detailRows = getFilteredDetailRowsForView(currentView, getDetailRowsForView(currentView));
      const pagination = getDetailModalPagination(currentView, detailRows.length);
      if (pagination.totalPages <= 1) return;
      let nextPage = pagination.page;
      if (action === "first") nextPage = 1;
      if (action === "prev") nextPage = Math.max(1, pagination.page - 1);
      if (action === "next") nextPage = Math.min(pagination.totalPages, pagination.page + 1);
      if (action === "last") nextPage = pagination.totalPages;
      if (nextPage === pagination.page) return;
      currentView.page = nextPage;
      renderDetailModalView();
    }

    function handleDetailComboFilterChange(kind, values) {
      const meta = COMBO_KINDS[kind];
      if (!meta) return;
      const currentView = modalState.viewStack[modalState.viewStack.length - 1];
      if (!currentView) return;
      currentView[meta.filterKey] = Array.isArray(values) ? [...values] : [];
      currentView.page = 1;
      renderDetailModalView();
    }

    function handleDetailResultFilterChange(value) {
      const currentView = modalState.viewStack[modalState.viewStack.length - 1];
      if (!currentView) return;
      const next = value === "pass" || value === "fail" ? value : "all";
      if (currentView.resultFilter === next) return;
      currentView.resultFilter = next;
      currentView.page = 1;
      renderDetailModalView();
    }

    /* ── Multi-select combo box management (dept / univ / subtype) ── */
    function openCombo(kind) {
      const meta = COMBO_KINDS[kind];
      if (!meta) return;
      if (comboState.open && comboState.kind === kind) return;
      if (comboState.open && comboState.kind !== kind) closeCombo();
      const combo = document.getElementById(`combo-${kind}`);
      if (!combo) return;
      const dropdown = combo.querySelector("[data-combo-dropdown]");
      const inputArea = combo.querySelector("[data-combo-area]");
      const input = combo.querySelector("[data-combo-input]");
      if (!dropdown || !inputArea || !input) return;
      const cv = modalState.viewStack[modalState.viewStack.length - 1];
      comboState.pending = Array.isArray(cv?.[meta.filterKey]) ? [...cv[meta.filterKey]] : [];
      comboState.kind = kind;
      comboState.open = true;
      comboState.searchText = "";
      dropdown.classList.add("is-open");
      inputArea.classList.add("is-open");
      input.value = "";
      input.placeholder = "검색어 입력...";
      input.focus();
    }
    function closeCombo() {
      if (!comboState.open) return;
      const kind = comboState.kind;
      const meta = kind ? COMBO_KINDS[kind] : null;
      comboState.open = false;
      if (kind) {
        const combo = document.getElementById(`combo-${kind}`);
        if (combo) {
          const dd = combo.querySelector("[data-combo-dropdown]");
          const ia = combo.querySelector("[data-combo-area]");
          if (dd) dd.classList.remove("is-open");
          if (ia) ia.classList.remove("is-open");
        }
      }
      if (meta && comboState.pending) {
        const cv = modalState.viewStack[modalState.viewStack.length - 1];
        const current = Array.isArray(cv?.[meta.filterKey]) ? cv[meta.filterKey] : [];
        const pending = comboState.pending;
        const changed = current.length !== pending.length || current.slice().sort().join("\0") !== pending.slice().sort().join("\0");
        if (changed) handleDetailComboFilterChange(kind, pending);
      }
      comboState.kind = null;
      comboState.pending = null;
      comboState.searchText = "";
    }
    function syncComboDOM() {
      const kind = comboState.kind;
      if (!kind) return;
      const combo = document.getElementById(`combo-${kind}`);
      if (!combo || !comboState.pending) return;
      const pending = comboState.pending;
      const inputArea = combo.querySelector("[data-combo-area]");
      const input = combo.querySelector("[data-combo-input]");
      if (!inputArea || !input) return;
      inputArea.querySelectorAll(".dept-combo-tag, .dept-combo-clear").forEach(el => el.remove());
      pending.forEach(v => {
        const tag = document.createElement("span");
        tag.className = "dept-combo-tag";
        tag.dataset.comboValue = v;
        tag.innerHTML = `<span class="dept-combo-tag-label">${escapeHtml(v)}</span><button type="button" class="dept-combo-tag-remove" data-combo-remove="${escapeHtml(v)}" title="제거">×</button>`;
        inputArea.insertBefore(tag, input);
      });
      if (pending.length) {
        const clearBtn = document.createElement("button");
        clearBtn.type = "button";
        clearBtn.className = "dept-combo-clear";
        clearBtn.dataset.comboClearAll = "true";
        clearBtn.title = "전체 해제";
        clearBtn.textContent = "초기화";
        inputArea.insertBefore(clearBtn, input);
      }
      input.placeholder = pending.length ? "" : "검색어 입력...";
      combo.querySelectorAll("[data-combo-option]").forEach(opt => {
        const value = opt.dataset.comboOption;
        const isSel = pending.includes(value);
        opt.classList.toggle("is-selected", isSel);
        const icon = opt.querySelector(".check-icon");
        if (icon) icon.textContent = isSel ? "✓" : "";
      });
    }
    function filterComboDropdown(searchText) {
      const kind = comboState.kind;
      if (!kind) return;
      const combo = document.getElementById(`combo-${kind}`);
      const dropdown = combo?.querySelector("[data-combo-dropdown]");
      if (!dropdown) return;
      const q = (searchText || "").trim().toLowerCase();
      let visibleCount = 0;
      dropdown.querySelectorAll(".dept-combo-option").forEach(opt => {
        const value = (opt.dataset.comboOption || "").toLowerCase();
        const match = !q || value.includes(q);
        opt.style.display = match ? "" : "none";
        if (match) visibleCount++;
      });
      let emptyMsg = dropdown.querySelector(".dept-combo-empty");
      if (visibleCount === 0) {
        if (!emptyMsg) { emptyMsg = document.createElement("div"); emptyMsg.className = "dept-combo-empty"; dropdown.appendChild(emptyMsg); }
        emptyMsg.textContent = q ? `"${searchText.trim()}" 검색 결과 없음` : "항목 없음";
        emptyMsg.style.display = "";
      } else if (emptyMsg) {
        emptyMsg.style.display = "none";
      }
    }

    function handleDetailModalBack() {
      if (modalState.viewStack.length <= 1) return;
      modalState.viewStack.pop();
      renderDetailModalView();
    }

    function handleDetailModalExport() {
      if (excelExportDisabled) return;
      const currentView = modalState.viewStack[modalState.viewStack.length - 1];
      if (!currentView) return;
      if (currentView.type === "summaryTable") {
        const exportRows = Array.isArray(currentView.exportRows) ? currentView.exportRows : [];
        if (!exportRows.length) return;
        const exportOptions = currentView.exportOptions || { sheetName: "집계표", filenameBase: "집계표" };
        const worksheet = XLSX.utils.json_to_sheet(exportRows);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, exportOptions.sheetName || "집계표");
        XLSX.writeFile(workbook, `${sanitizeFilenamePart(exportOptions.filenameBase || "집계표")}.xlsx`);
        return;
      }
      const detailRows = getFilteredDetailRowsForView(currentView, getDetailRowsForView(currentView));
      if (!detailRows.length) return;
      const viewConfig = getDetailViewConfig(currentView, detailRows);
      const exportRows = buildExportRows(detailRows, { includeUniv: !!viewConfig.exportOptions.includeUniv });
      const worksheet = XLSX.utils.json_to_sheet(exportRows);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, viewConfig.exportOptions.sheetName);
      XLSX.writeFile(workbook, `${viewConfig.exportOptions.filenameBase}.xlsx`);
    }

    function closeDetailModal() {
      detailModalEl.hidden = true;
      detailModalBodyEl.innerHTML = "";
      document.body.style.overflow = "";
      modalState.viewStack = [];
      // 모달이 잡고 있던 scope(부분집합 참조)를 놓아준다. 다음에 모달을 열면
      // 해당 오프너가 setModalScope로 다시 지정한다.
      modalState.sourceRecords = [];
      detailModalBackBtn.hidden = true;
      detailModalExportBtn.hidden = true;
    }

    function bindUnivTopInteractions(graphEl, records) {
      if (typeof graphEl.removeAllListeners === "function") {
        graphEl.removeAllListeners("plotly_click");
      }
      graphEl.on("plotly_click", (event) => {
        const point = event && event.points && event.points[0];
        if (!point || !point.y) return;
        openUnivDetailModal(point.y, records);
      });

      graphEl.querySelectorAll(".barlayer .trace path").forEach((el) => {
        el.style.cursor = "pointer";
      });
      graphEl.querySelectorAll(".yaxislayer-above .ytick").forEach((tickEl) => {
        const univ = tickEl.textContent.trim();
        if (!univ) return;
        tickEl.style.cursor = "pointer";
        tickEl.querySelectorAll("*").forEach((child) => {
          child.style.cursor = "pointer";
          child.style.pointerEvents = "all";
        });
        tickEl.onclick = () => openUnivDetailModal(univ, records);
      });
    }

    function renderUnivTop(records, scope = "global") {
      const univTopEl = document.getElementById(`univ-top-chart-${scope}`);
      if (!univTopEl) return;
      univTopRecordsByScope.set(scope, records);
      const mode = getUnivTopMode();
      const sortKey = getUnivTopSort();
      syncUnivTopModeButtons();
      syncUnivTopSortButtons();
      updateUnivTopNote();
      const grouped = {};
      records.forEach((r) => {
        const key = r.univ || "미상";
        if (!grouped[key]) grouped[key] = { pass: 0, wait: 0, fail: 0, total: 0, passGrades: [] };
        grouped[key].total += 1;
        if (r.result === "합격") grouped[key].pass += 1;
        else if (r.result === "충원합격") grouped[key].wait += 1;
        else if (r.result === "불합격") grouped[key].fail += 1;
        if ((r.result === "합격" || r.result === "충원합격") && r.all_subj_grade !== null) {
          grouped[key].passGrades.push(r.all_subj_grade);
        }
      });
      const selectedTop = Object.entries(grouped)
        .map(([univ, g]) => {
          const total = g.total || 0;
          const firstPassRate = total ? (g.pass / total) * 100 : 0;
          const allPassRate = total ? ((g.pass + g.wait) / total) * 100 : 0;
          const passBandMeta = buildUnivPassBandMeta(g.passGrades);
          return {
            univ,
            ...g,
            firstPassRate,
            allPassRate,
            q1: passBandMeta.q1,
            q3: passBandMeta.q3,
            passSampleCount: passBandMeta.sampleCount,
            passBandLabel: passBandMeta.label,
          };
        })
        .filter((x) => x.total > 0)
        .sort((a, b) => b.total - a.total)
        .slice(0, 20);
      const sorted = [...selectedTop].sort((a, b) => {
        if (sortKey === "allPassRate") {
          return (b.allPassRate - a.allPassRate) || (b.total - a.total) || a.univ.localeCompare(b.univ, "ko");
        }
        return (b.total - a.total) || (b.allPassRate - a.allPassRate) || a.univ.localeCompare(b.univ, "ko");
      });
      const labelsTop = sorted.map((s) => s.univ);
      const passTop = sorted.map((s) => s.pass);
      const waitTop = sorted.map((s) => s.wait);
      const failTop = sorted.map((s) => s.fail);
      const passRateTop = sorted.map((s) => Number(s.firstPassRate.toFixed(1)));
      const waitRateTop = sorted.map((s) => s.total ? Number(((s.wait / s.total) * 100).toFixed(1)) : 0);
      const failRateTop = sorted.map((s) => s.total ? Number(((s.fail / s.total) * 100).toFixed(1)) : 0);
      if (!sorted.length) {
        univTopEl.innerHTML = '<div class="empty">데이터 없음</div>';
      } else {
        const dynamicHeight = Math.max(360, 26 * labelsTop.length + 110);
        univTopEl.style.height = dynamicHeight + "px";
        const xData = mode === "ratio"
          ? { pass: passRateTop, wait: waitRateTop, fail: failRateTop }
          : { pass: passTop, wait: waitTop, fail: failTop };
        const countData = { pass: passTop, wait: waitTop, fail: failTop };
        const xTitle = mode === "ratio" ? "비율" : "건수";
        const xSuffix = mode === "ratio" ? "%" : "건";
        const summaryX = { total: 1.01, band: 1.12 };
        const headerAnnotations = [
          {
            xref: "paper",
            x: summaryX.total,
            yref: "paper",
            y: 1.06,
            text: "<b>총건수</b>",
            showarrow: false,
            xanchor: "left",
            align: "left",
            font: { size: 12, color: "#6b7280", family: "Inter, sans-serif" },
          },
          {
            xref: "paper",
            x: summaryX.band,
            yref: "paper",
            y: 1.06,
            text: "<b>합격 중앙 50%</b>",
            showarrow: false,
            xanchor: "left",
            align: "left",
            font: { size: 12, color: "#6b7280", family: "Inter, sans-serif" },
          },
        ];
        const rowAnnotations = sorted.flatMap((s) => ([
          {
            xref: "paper",
            x: summaryX.total,
            yref: "y",
            y: s.univ,
            text: `${s.total.toLocaleString()}건`,
            showarrow: false,
            xanchor: "left",
            align: "left",
            font: { size: 12, color: "#374151", family: "Inter, sans-serif" },
          },
          {
            xref: "paper",
            x: summaryX.band,
            yref: "y",
            y: s.univ,
            text: fmtRange(s.q1, s.q3),
            showarrow: false,
            xanchor: "left",
            align: "left",
            font: { size: 12, color: "#374151", family: "Inter, sans-serif" },
          },
        ]));
        const annotations = [...headerAnnotations, ...rowAnnotations];
        const buildHoverCustomData = (counts) => counts.map((count, index) => ([
          count,
          sorted[index].passBandLabel,
          formatUnivPassBandSampleText(sorted[index].passSampleCount),
        ]));
        const buildHoverTemplate = (label) => `<b>%{y}</b><br>${label}: %{customdata[0]}건<br>${UNIV_PASS_BAND_LABEL}: %{customdata[1]}<br>%{customdata[2]}<extra></extra>`;
        Plotly.newPlot(univTopEl, [
          { y: labelsTop, x: xData.pass, type: "bar", name: "합격", orientation: "h",
            marker: { color: "rgba(5, 150, 105, 0.78)", line: { width: 0 } },
            customdata: buildHoverCustomData(countData.pass),
            hovertemplate: buildHoverTemplate("합격") },
          { y: labelsTop, x: xData.wait, type: "bar", name: "충원합격", orientation: "h",
            marker: { color: "rgba(217, 119, 6, 0.68)", line: { width: 0 } },
            customdata: buildHoverCustomData(countData.wait),
            hovertemplate: buildHoverTemplate("충원합격") },
          { y: labelsTop, x: xData.fail, type: "bar", name: "불합격", orientation: "h",
            marker: { color: "rgba(220, 38, 38, 0.58)", line: { width: 0 } },
            customdata: buildHoverCustomData(countData.fail),
            hovertemplate: buildHoverTemplate("불합격") },
        ], {
            height: dynamicHeight,
            barmode: "stack",
            bargap: 0.3,
            margin: { t: 54, b: 78, l: 150, r: 232 },
            xaxis: {
              title: { text: xTitle, font: { size: 11, color: "#9ca3af" } },
              gridcolor: "#f0f0f0",
              gridwidth: 1,
              zeroline: false,
              tickfont: { size: 11, color: "#9ca3af" },
              ticksuffix: xSuffix,
              range: mode === "ratio" ? [0, 100] : undefined,
            },
            yaxis: { tickfont: { size: 13, color: "#374151" }, autorange: "reversed" },
            annotations,
            legend: { orientation: "h", x: 0.5, xanchor: "center", y: -0.18, font: { size: 11, color: "#6b7280" } },
            plot_bgcolor: "#fff",
            paper_bgcolor: "#fff",
            font: { family: "Inter, -apple-system, sans-serif" },
        }, { displayModeBar: false, responsive: true }).then(() => {
          bindUnivTopInteractions(univTopEl, records);
        });
      }
    }

    function renderHist(records, key, targetId, title) {
      const el = document.getElementById(targetId);
      if (!el) return;
      const { center, passCounts, failCounts } = makeHistogramSeries(records, key);
      const hasData = passCounts.some((c) => c > 0) || failCounts.some((c) => c > 0);
      if (!hasData) { el.innerHTML = '<div class="empty">데이터 없음</div>'; return; }
      const maxVal = Math.max(...passCounts, ...failCounts, 0);
      const traces = [
        {
          x: center,
          y: passCounts,
          type: "bar",
          name: "합격(충원포함)",
          marker: { color: "rgba(5, 150, 105, 0.7)", line: { width: 0 } },
          width: BINS.size * 0.85,
          hovertemplate: "등급 %{x}: %{y}건<extra>합격(충원포함)</extra>",
        },
        {
          x: center,
          y: failCounts.map((v) => -v),
          type: "bar",
          name: "불합격",
          marker: { color: "rgba(220, 38, 38, 0.55)", line: { width: 0 } },
          width: BINS.size * 0.85,
          hovertemplate: "등급 %{x}: %{customdata}건<extra>불합격</extra>",
          customdata: failCounts,
        },
      ];
      Plotly.newPlot(el, traces, {
        height: 260,
        barmode: "relative",
        bargap: 0.08,
        margin: { t: 16, b: 44, l: 50, r: 16 },
        xaxis: { title: { text: "등급", font: { size: 11, color: "#9ca3af" } }, range: [BINS.start, BINS.end], tickfont: { size: 11, color: "#6b7280" }, gridcolor: "#f5f5f5" },
        yaxis: {
          title: { text: "건수(+합격 / -불합격)", font: { size: 10, color: "#9ca3af" } },
          zeroline: true, zerolinecolor: "#e5e7eb", zerolinewidth: 1,
          gridcolor: "#f0f0f0", gridwidth: 1,
          range: [-maxVal * 1.25, maxVal * 1.25],
          tickfont: { size: 11, color: "#9ca3af" },
        },
        legend: { orientation: "h", x: 0.5, xanchor: "center", y: 1.1, font: { size: 11, color: "#6b7280" } },
        plot_bgcolor: "#fff",
        paper_bgcolor: "#fff",
        font: { family: "Inter, -apple-system, sans-serif" },
      }, { displayModeBar: false, responsive: true });
    }

    function initializePreloadedReport() {
      const pre = (window.SusiApp && window.SusiApp.preloaded) || {};
      const preloadedRecords = unpackSharedRecords(pre.data);
      if (!Array.isArray(preloadedRecords) || !preloadedRecords.length) return;
      const normalizedRecords = normalizeLoadedRecords(preloadedRecords);
      dataState.loadedRecords = normalizedRecords;
      dataState.studentCsatByKey = restoreStudentCsatMap(pre.studentCsat);
      dataState.studentSubjectGradeByKey = restoreSubjectGradeMap(pre.subjectGrade);
      const years = getAvailableYears(normalizedRecords);
      filterState.yearFilter = "all";
      filterState.locationFilter = "all";
      const preloadedState = pre.uiState && typeof pre.uiState === "object" ? pre.uiState : {};
      excelExportDisabled = preloadedState.disableExcelExport === true;
      renderFullReport(
        normalizedRecords,
        "",
        preloadedState.activeTab || "summary",
        preloadedState,
        { years, allRecords: normalizedRecords }
      );
      if (preloadedState.singleTabExport && preloadedState.singleTabExport.activeTab) {
        restrictReportToSingleTab(preloadedState.singleTabExport.activeTab);
      }
      setStatus("");
      setLandingVisibility(false);
    }

    SusiApp.bootstrap = initializePreloadedReport;
    updateBuildInfoText();
    initializePreloadedReport();
