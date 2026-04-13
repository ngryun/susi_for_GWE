#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const INDEX_PATH = path.join(ROOT, "index.html");
const SRC_DIR = path.join(ROOT, "src");
const TEMPLATE_PATH = path.join(SRC_DIR, "index.template.html");
const STYLE_PATH = path.join(SRC_DIR, "styles.css");
const APP_PATH = path.join(SRC_DIR, "app.js");

const STYLE_TOKEN = "{{INLINE_STYLE}}";
const APP_TOKEN = "{{INLINE_APP_JS}}";

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function readUtf8(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function writeUtf8(filePath, content) {
  ensureDir(path.dirname(filePath));
  fs.writeFileSync(filePath, content, "utf8");
}

function extract() {
  const html = readUtf8(INDEX_PATH);
  const styleMatch = html.match(/<style>\n([\s\S]*?)\n  <\/style>/);
  if (!styleMatch) {
    throw new Error("index.html에서 <style> 블록을 찾지 못했습니다.");
  }
  const appScriptMatch = html.match(/  <script>\n([\s\S]*?)\n  <\/script>\n<\/body>/);
  if (!appScriptMatch) {
    throw new Error("index.html에서 메인 인라인 <script> 블록을 찾지 못했습니다.");
  }

  const template = html
    .replace(styleMatch[0], `<style>\n${STYLE_TOKEN}\n  </style>`)
    .replace(appScriptMatch[0], `  <script>\n${APP_TOKEN}\n  </script>\n</body>`);

  writeUtf8(TEMPLATE_PATH, template);
  writeUtf8(STYLE_PATH, styleMatch[1].trimEnd() + "\n");
  writeUtf8(APP_PATH, appScriptMatch[1].trimEnd() + "\n");

  console.log("extract 완료:");
  console.log(" - src/index.template.html");
  console.log(" - src/styles.css");
  console.log(" - src/app.js");
}

function build() {
  const template = readUtf8(TEMPLATE_PATH);
  const styles = readUtf8(STYLE_PATH).trimEnd();
  const app = readUtf8(APP_PATH).trimEnd();

  if (!template.includes(STYLE_TOKEN)) {
    throw new Error(`템플릿에 ${STYLE_TOKEN} 토큰이 없습니다.`);
  }
  if (!template.includes(APP_TOKEN)) {
    throw new Error(`템플릿에 ${APP_TOKEN} 토큰이 없습니다.`);
  }

  const built = template
    .replace(STYLE_TOKEN, styles)
    .replace(APP_TOKEN, app);

  writeUtf8(INDEX_PATH, built);
  console.log("build 완료: index.html 재생성");
}

function check() {
  const template = readUtf8(TEMPLATE_PATH);
  const styles = readUtf8(STYLE_PATH).trimEnd();
  const app = readUtf8(APP_PATH).trimEnd();
  const expected = template
    .replace(STYLE_TOKEN, styles)
    .replace(APP_TOKEN, app);
  const current = readUtf8(INDEX_PATH);
  if (current === expected) {
    console.log("check 통과: index.html이 src 소스와 일치합니다.");
    return;
  }
  console.error("check 실패: index.html이 src 소스와 다릅니다.");
  process.exitCode = 1;
}

function printUsage() {
  console.log("사용법:");
  console.log("  node tools/single-file.js extract");
  console.log("  node tools/single-file.js build");
  console.log("  node tools/single-file.js check");
}

const command = process.argv[2];

try {
  if (command === "extract") {
    extract();
  } else if (command === "build") {
    build();
  } else if (command === "check") {
    check();
  } else {
    printUsage();
    process.exitCode = command ? 1 : 0;
  }
} catch (error) {
  console.error(error && error.message ? error.message : error);
  process.exitCode = 1;
}
