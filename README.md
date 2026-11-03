# GitHub Pages CV 템플릿

차분한 초록색 포인트의 영문 연구자용 개인 홈페이지입니다. 모바일 레이아웃과 인쇄용 CV 스타일을 포함합니다. 한국어 내용도 입력할 수 있습니다. 설치나 빌드가 필요 없습니다.

## 1. 내용 채우기

**`profile.js`만 수정하면 됩니다.** 모든 내용은 작성용 예시이며 실제 이력이 아닙니다.

| 항목 | 입력할 내용 |
| --- | --- |
| `name`, `initials` | 영문/국문 이름, 사진 대신 사용할 이니셜 |
| `role`, `intro` | 소속/직함, 짧은 소개 |
| `email` | 이메일 주소. 비워두면 이메일 버튼 숨김 |
| `photo` | 사진 경로. 비워두면 이니셜 이미지 표시 |
| `cv` | CV PDF 경로. 비워두면 다운로드 버튼 숨김 |
| `links` | GitHub, Scholar, LinkedIn 주소. 빈 주소는 숨김 |
| `bio`, `interests` | 소개 문단, 연구 관심사 |
| `publications` | 논문 제목, 저자, 학회/저널, 링크 |
| `education`, `experience` | 학력과 경력 |
| `awards` | 수상 이력. `[]`로 비우면 섹션 숨김 |

사진은 `assets/profile.jpg`, CV는 `assets/cv.pdf`로 추가하고 해당 경로를 입력하세요. CV PDF가 없어도 상단 **Print CV**에서 브라우저의 ‘PDF로 저장’을 사용할 수 있습니다. 페이지를 본 뒤 인쇄하면 입력한 내용이 반영됩니다.

논문 저자 중 `name`과 정확히 일치하는 이름은 굵게 표시됩니다. 항목을 추가하려면 기존 `{ ... }` 블록을 복사하고 항목 사이의 쉼표를 유지하세요. 한글 위주로 쓰면 `index.html` 첫 줄 근처의 `lang="en"`을 `lang="ko"`로 바꾸세요.

## 2. 로컬 확인

`index.html`을 브라우저로 열면 바로 확인할 수 있습니다. 또는 이 폴더에서 다음 명령을 실행하세요.

```sh
python3 -m http.server 8000
```

브라우저에서 `http://localhost:8000`에 접속합니다. 종료는 `Ctrl+C`입니다. 폰트는 Google Fonts에서 불러오며, 인터넷 연결이 없을 때는 기본 폰트로 표시됩니다.

## 3. 새 GitHub 계정으로 게시

1. 브라우저에서 **새 GitHub 계정**으로 로그인하고 만들어둔 저장소를 엽니다.
2. **Add file → Upload files**에서 이 폴더의 **내용물**을 업로드합니다. `index.html`이 저장소 최상위에 오도록 하세요. `assets` 폴더도 함께 올립니다. 빈 저장소라면 첫 화면의 **uploading an existing file**을 선택하세요.
3. **Commit changes**로 저장합니다. 이미 같은 이름의 파일이 있다면 덮어쓰기 전에 기존 내용을 확인하세요.
4. 저장소 **Settings → Pages → Build and deployment**에서 **Deploy from a branch**를 선택합니다.
5. 방금 업로드한 브랜치(보통 `main`), 폴더 **/(root)**를 선택하고 **Save**합니다.
6. 배포가 끝나면 Pages 화면의 **Visit site**로 확인합니다.

저장소가 `아이디.github.io`이면 주소는 `https://아이디.github.io/`이고, 다른 이름이면 `https://아이디.github.io/저장소이름/`입니다. 이 템플릿은 상대 경로를 사용하여 두 형태를 모두 지원합니다. 무료 계정에서 이용할 경우 공개 저장소를 사용하세요.

이후 GitHub에서 `profile.js`를 열고 연필 아이콘으로 내용을 편집한 뒤 저장하면 페이지가 다시 배포됩니다. 비밀번호나 토큰을 파일에 넣을 필요가 없습니다.

## 파일 구성

```text
index.html          페이지 구조
profile.js          직접 수정할 프로필 내용
site.js             프로필을 화면에 표시하는 코드
style.css           반응형/인쇄용 스타일
assets/favicon.svg  브라우저 탭 아이콘
.nojekyll           Jekyll 처리를 건너뛰는 파일
```

브라우저 업로드 시 숨김 파일 `.nojekyll`을 선택하기 어려우면 생략해도 됩니다. 현재 파일 구성은 Jekyll 처리 없이도 사용할 수 있는 일반 정적 파일입니다.
