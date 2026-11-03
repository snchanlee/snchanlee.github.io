# Seungchan Lee

https://snchanlee.github.io/

`profile.js`에서 내용을 수정하고 저장하면 GitHub Pages에 자동 반영됩니다. 비어 있는 항목과 섹션은 표시되지 않습니다.

- `name`, `role`, `intro`: 이름, 직함/소속, 짧은 소개
- `email`, `links`: 연락처와 외부 링크
- `photo`, `cv`: 사진 및 CV PDF 경로. 파일을 `assets/`에 추가한 뒤 입력
- `bio`, `interests`: 소개 문단과 연구 관심사. 문자열 배열
- `education`, `experience`: `{ date, title, organization, detail }` 객체 배열
- `publications`: `{ year, title, authors, venue, note, links }` 객체 배열. `links`는 `{ label, url }` 배열
- `awards`: `{ year, title, organization }` 객체 배열

상단 Print CV는 현재 비활성화되어 있습니다.

설치나 빌드는 필요 없습니다. 로컬에서는 `index.html`을 브라우저로 열면 됩니다.
