# 개발용 소스 구조

실행과 배포는 계속 `index.html` 단일 파일을 사용합니다.

개발할 때는 아래 파일을 수정한 뒤 다시 합쳐주세요.

- `src/styles.css`: 전체 스타일
- `src/app.js`: 메인 앱 로직
- `src/index.template.html`: HTML 뼈대

명령어:

```bash
node tools/single-file.js build
```

현재 `index.html`에서 다시 소스를 추출하고 싶을 때:

```bash
node tools/single-file.js extract
```

`src`와 `index.html`이 일치하는지 확인:

```bash
node tools/single-file.js check
```
