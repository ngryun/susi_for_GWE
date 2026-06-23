#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const INDEX_PATH = path.join(ROOT, "index.html");
const SRC_DIR = path.join(ROOT, "src");
const TEMPLATE_PATH = path.join(SRC_DIR, "index.template.html");
const STYLE_PATH = path.join(SRC_DIR, "styles.css");
const APP_PATH = path.join(SRC_DIR, "app.js");
const VENDOR_DIR = path.join(SRC_DIR, "vendor");

const STYLE_TOKEN = "{{INLINE_STYLE}}";
const APP_TOKEN = "{{INLINE_APP_JS}}";
const VENDOR_SCRIPTS = [
  { name: "xlsx", token: "{{INLINE_XLSX_JS}}", path: path.join(VENDOR_DIR, "xlsx.full.min.js") },
  { name: "plotly", token: "{{INLINE_PLOTLY_JS}}", path: path.join(VENDOR_DIR, "plotly.min.js") },
];
const ALL_INLINE_TOKENS = [STYLE_TOKEN, APP_TOKEN, ...VENDOR_SCRIPTS.map((vendor) => vendor.token)];

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function readUtf8(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function replaceToken(content, token, replacement) {
  return content.replace(token, () => replacement);
}

function makeInlineScriptHtmlSafe(content) {
  return content.replace(/<\/(script|body|html)/gi, (_, tagName) => `<\\/${tagName}`);
}

function assertNoInlineTokens(content, label) {
  const leftovers = ALL_INLINE_TOKENS.filter((token) => content.includes(token));
  if (leftovers.length) {
    throw new Error(`${label}에 치환되지 않은 토큰이 남아 있습니다: ${leftovers.join(", ")}`);
  }
}

function assertInlineScriptIsHtmlSafe(content, label) {
  const unsafeMatch = content.match(/<\/(script|body|html)/i);
  if (unsafeMatch) {
    throw new Error(`${label}에 ${unsafeMatch[0]} 문자열이 있어 인라인 HTML을 깨뜨릴 수 있습니다.`);
  }
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

  let template = html
    .replace(styleMatch[0], `<style>\n${STYLE_TOKEN}\n  </style>`)
    .replace(appScriptMatch[0], `  <script>\n${APP_TOKEN}\n  </script>\n</body>`);
  for (const vendor of VENDOR_SCRIPTS) {
    const vendorScriptPattern = new RegExp(`  <script data-vendor="${vendor.name}">\\n[\\s\\S]*?\\n  <\\/script>`);
    template = template.replace(
      vendorScriptPattern,
      `  <script data-vendor="${vendor.name}">\n${vendor.token}\n  </script>`
    );
  }

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
  for (const vendor of VENDOR_SCRIPTS) {
    if (!template.includes(vendor.token)) {
      throw new Error(`템플릿에 ${vendor.token} 토큰이 없습니다.`);
    }
  }

  let built = replaceToken(template, STYLE_TOKEN, styles);
  built = replaceToken(built, APP_TOKEN, makeInlineScriptHtmlSafe(app));
  for (const vendor of VENDOR_SCRIPTS) {
    const vendorContent = makeInlineScriptHtmlSafe(readUtf8(vendor.path).trimEnd());
    assertInlineScriptIsHtmlSafe(vendorContent, vendor.path);
    built = replaceToken(built, vendor.token, vendorContent);
  }
  assertNoInlineTokens(built, "index.html");

  writeUtf8(INDEX_PATH, built);
  console.log("build 완료: index.html 재생성");
}

function check() {
  const template = readUtf8(TEMPLATE_PATH);
  const styles = readUtf8(STYLE_PATH).trimEnd();
  const app = readUtf8(APP_PATH).trimEnd();
  let expected = replaceToken(template, STYLE_TOKEN, styles);
  expected = replaceToken(expected, APP_TOKEN, makeInlineScriptHtmlSafe(app));
  for (const vendor of VENDOR_SCRIPTS) {
    const vendorContent = makeInlineScriptHtmlSafe(readUtf8(vendor.path).trimEnd());
    assertInlineScriptIsHtmlSafe(vendorContent, vendor.path);
    expected = replaceToken(expected, vendor.token, vendorContent);
  }
  assertNoInlineTokens(expected, "index.html 기대값");
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
