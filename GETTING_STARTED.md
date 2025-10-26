# 시작하기

Podoring WMS 랜딩 페이지를 로컬에서 실행하고 개발하는 방법입니다.

## 🔧 사전 요구사항

- **Bun** 설치 ([bun.sh](https://bun.sh))
  ```bash
  curl -fsSL https://bun.sh/install | bash
  ```

## 📝 1단계: 프로젝트 클론

```bash
git clone https://github.com/YOUR_USERNAME/podoring-landing.git
cd podoring-landing
```

## 📦 2단계: 의존성 설치

```bash
bun install
```

## 🔐 3단계: 환경 변수 설정

### EmailJS 계정 생성

1. [EmailJS](https://www.emailjs.com/)에 가입
2. 이메일 서비스 추가 (Gmail, Outlook 등)
3. 이메일 템플릿 생성

### 템플릿 설정

**템플릿 ID**: 원하는 ID 입력 (예: `template_podoring`)

**템플릿 내용**:

```
Subject: [Podoring WMS] 신규 문의 - {{from_name}}

성함: {{from_name}}
연락처: {{contact}}
회사명: {{company}}

문의내용:
{{message}}

---
자동 발송 메일입니다.
```

### Public Key 발급

1. EmailJS 대시보드 → Account → API Keys
2. Public Key 복사

### .env.local 파일 생성

프로젝트 루트에 `.env.local` 파일을 생성하고 다음 내용을 입력:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxx
```

## 🚀 4단계: 개발 서버 실행

```bash
bun run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 열기

## 🎨 5단계: 개발 시작

### 프로젝트 구조

```
podoring-landing/
├── src/
│   ├── components/          # React 컴포넌트
│   │   ├── Hero.tsx         # 메인 히어로 섹션
│   │   ├── ProblemSection.tsx
│   │   ├── Features.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Benefits.tsx
│   │   ├── ContactForm.tsx
│   │   └── Footer.tsx
│   ├── utils/
│   │   └── animations.ts    # Framer Motion 애니메이션
│   ├── assets/
│   │   └── images/          # 이미지 파일
│   ├── App.tsx              # 메인 앱
│   ├── main.tsx             # 엔트리 포인트
│   └── index.css            # Tailwind CSS
├── index.html               # HTML 템플릿
├── package.json
├── tailwind.config.js       # Tailwind 설정
├── vite.config.ts           # Vite 설정
└── tsconfig.json            # TypeScript 설정
```

### 주요 명령어

```bash
# 개발 서버 실행
bun run dev

# 프로덕션 빌드
bun run build

# 빌드 미리보기
bun run preview

# 타입 체크
bun run tsc --noEmit
```

## 🎨 커스터마이징

### 1. 색상 변경

[tailwind.config.js](tailwind.config.js)에서 브랜드 색상 수정:

```js
colors: {
  wine: {
    600: '#A80569', // 원하는 색상으로 변경
  },
}
```

### 2. 폰트 변경

[index.html](index.html)에서 Pretendard 대신 다른 폰트 사용:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/..." />
```

[tailwind.config.js](tailwind.config.js)에서:

```js
fontFamily: {
  sans: ['YourFont', 'sans-serif'],
}
```

### 3. 애니메이션 조정

[src/utils/animations.ts](src/utils/animations.ts)에서 속도, 이징 변경:

```ts
export const fadeInUp: Variants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 } // 0.6 → 0.8로 변경
  }
};
```

### 4. 콘텐츠 수정

각 컴포넌트 파일에서 텍스트, 이미지, 설명 직접 수정

예: [src/components/Features.tsx](src/components/Features.tsx)

```tsx
const features = [
  {
    title: '새로운 제목',
    description: '새로운 설명...',
  },
];
```

## 📸 이미지 교체

`src/assets/images/` 폴더에 새 이미지 추가 후:

```tsx
import newImage from '../assets/images/new-image.png';

<img src={newImage} alt="설명" />
```

## 🧪 테스트

### 문의 폼 테스트

1. 개발 서버 실행
2. 하단 문의 폼으로 스크롤
3. 모든 필드 입력
4. "문의 보내기" 클릭
5. 이메일 수신 확인 (sj.kim@webber-ai.com)

### 반응형 테스트

브라우저 개발자 도구 (F12):
- Mobile (375px)
- Tablet (768px)
- Desktop (1440px)

## 🚀 배포

자세한 배포 가이드는 [RAILWAY_DEPLOYMENT.md](RAILWAY_DEPLOYMENT.md) 참조

**빠른 배포:**

```bash
# Railway CLI로 배포
railway init
railway up

# 또는 GitHub에 푸시하면 자동 배포
git push origin main
```

## 🐛 문제 해결

### Bun 명령어가 안 될 때

```bash
# Bun 재설치
curl -fsSL https://bun.sh/install | bash

# PATH 확인
echo $PATH
```

### 이미지 안 보일 때

1. 파일명 대소문자 확인
2. 경로 확인 (`src/assets/images/`)
3. import 문 확인

### EmailJS 작동 안 할 때

1. `.env.local` 파일 확인
2. 환경 변수명 확인 (`VITE_` 접두사)
3. EmailJS 키 유효성 확인
4. 개발 서버 재시작

### 빌드 오류

```bash
# 의존성 재설치
rm -rf node_modules bun.lockb
bun install

# 캐시 삭제
rm -rf dist

# 다시 빌드
bun run build
```

## 📚 참고 자료

- [Vite 문서](https://vitejs.dev/)
- [React 문서](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [EmailJS 문서](https://www.emailjs.com/docs/)
- [Bun 문서](https://bun.sh/docs)

## 💬 도움이 필요하신가요?

- **이메일**: sj.kim@webber-ai.com
- **GitHub Issues**: 프로젝트 레포지토리에서 Issue 생성

## ✅ 체크리스트

- [ ] Bun 설치 완료
- [ ] 의존성 설치 완료
- [ ] EmailJS 계정 생성
- [ ] `.env.local` 파일 설정
- [ ] 개발 서버 정상 실행
- [ ] 모든 섹션 표시 확인
- [ ] 문의 폼 이메일 전송 테스트
- [ ] 반응형 디자인 확인
- [ ] 빌드 성공 확인

축하합니다! 이제 Podoring WMS 랜딩 페이지 개발을 시작할 준비가 되었습니다! 🎉
