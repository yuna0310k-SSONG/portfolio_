## 프로젝트 개요
- **권유나 포트폴리오**: Next.js 16 App Router 기반으로 Hero, About, Tech Stack, Projects, Study Log 섹션을 컴포넌트로 구성한 개인 포트폴리오입니다.
- **목표**: 미니멀하고 디테일한 UI/UX로 프로젝트·학습 기록을 직관적으로 보여주는 것.

## 수록된 프로젝트
1. **Midas 한의원**
   - 리뉴얼 프로젝트(진행 중). 상세페이지 구성은 원장님과 협의 중이며 실제 작업용 페이지 구성 목표.
   - 스택: Next.js, TypeScript, Tailwind CSS, NestJS, Supabase, JWT, bcrypt
   - 데모: [https://midas-front-alpha.vercel.app/](https://midas-front-alpha.vercel.app/)
2. **Talk 2 Sheet**
   - 카카오톡 `.txt` 대화를 엑셀/CSV/PDF로 변환하는 웹 앱. 수작업을 자동화하기 위해 개인 개발.
   - 스택: Next.js, TypeScript, Tailwind CSS, Zustand, xlsx, jsPDF
   - 데모: [https://talk-2-sheet.vercel.app/](https://talk-2-sheet.vercel.app/)

## 사용 기술 스택
- **프레임워크 / 언어**: Next.js 16, React 19, TypeScript
- **스타일링**: Tailwind CSS v4, 커스텀 `globals.css`(배경/폰트/`fade-mask`)
- **애니메이션·레이아웃**: Framer Motion, `next/image`, 유틸리티 중심 Tailwind 레이아웃
- **상태·데이터**: Zustand, `data/projects.ts`를 통한 프로젝트 메타 관리
- **백엔드 연동 추정**: NestJS + Supabase + JWT/bcrypt (Midas 한의원)

## 파일 구조 요약
- `app/page.tsx`: 컴포넌트 조합만 담당하는 페이지 진입점(Hero, About, Tech Stack, Projects, Study Log).
- `app/components/`: Sections 별 컴포넌트 모음. 각 컴포넌트가 텍스트, 리스트, 애니메이션을 캡슐화.
- `app/globals.css`: Tailwind import, 컬러 변수, 기본 배경, `fade-mask` 스타일 등 전역 CSS.
- `app/layout.tsx`: `Header`/`Footer` 포함 RootLayout 정의. `Header`에는 앵커(`#about`, `#projects`, `#study-log`) 링크가 있음.
- `src/layout/components/`: 헤더/푸터 컴포넌트. 헤더는 sticky + z-30으로 렌더링되며 섹션별 네비게이션 제공.
- `data/projects.ts`: 프로젝트 타입 및 배열. 상태(status), 스택, 링크, 이미지가 모두 이곳에서 관리됨.
- `public/`: 프로필 이미지 `me1.png`, 프로젝트 스크린샷.

## 실행 안내
```bash
npm install
npm run dev
```
`http://localhost:3000`에서 헤더 메뉴 및 각 섹션(About / Projects / Study Log) 스크롤, 프로젝트 카드, 학습 로그 링크를 확인하세요.

## 기타
- 헤더는 `z-30` sticky로 설정되어 이미지와 겹쳐도 항상 보입니다.
- 프로젝트 카드의 status는 제목 오른쪽에 배지로 출력되며, `projects.ts`에 상태를 추가하면 반영됩니다.
