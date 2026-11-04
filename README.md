# Seungchan Lee

https://snchanlee.github.io/

`profile.js`에서 내용을 수정하고 저장하면 GitHub Pages에 자동 반영됩니다. 비어 있는 항목과 섹션은 표시되지 않습니다.

- `name`, `role`, `intro`, `summary`: 이름, 직함/소속, 학과/위치, 짧은 연구 소개
- `email`, `links`: 연락처와 외부 링크
- `photo`, `cv`: 사진 및 CV PDF 경로. 파일을 `assets/`에 추가한 뒤 입력
- `bio`, `interests`: 소개 문단과 연구 관심사. 문자열 배열
- `lab`, `advisor`: 연구실 이름/링크와 지도교수
- `news`: `{ date, text }` 객체 배열. 최신 소식부터 입력. 논문 소식에 `paper`(문장 속 논문명)와 `publication`(논문 `id`)을 추가하면 해당 논문으로 연결
- `education`, `experience`: `{ date, title, organization, detail }` 객체 배열
- `publications`: `{ id, year, title, authors, venue, note, links }` 객체 배열. `links`는 `{ label, url }` 배열
- `awards`: `{ year, title, organization }` 객체 배열

상단 Print CV는 현재 비활성화되어 있습니다.

설치나 빌드는 필요 없습니다. 로컬에서는 이 폴더에서 `python3 -m http.server 8000`을 실행한 뒤 `http://localhost:8000`을 열면 사진과 내부 링크까지 확인할 수 있습니다.
