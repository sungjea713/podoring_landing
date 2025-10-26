# Podoring WMS Landing Page

현대적이고 세련된 Podoring WMS(와인 재고 관리 시스템) 랜딩 페이지

## 🎯 프로젝트 정보

- **도메인**: podoring-ai.com
- **타겟**: 와인 수입 업체 및 와인샵 사장님
- **슬로건**: "주먹구구식 재고관리는 이제 안녕"

## 🛠 기술 스택

- **Runtime**: Bun
- **Framework**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Email**: EmailJS
- **Deployment**: Railway

## 📦 설치 및 실행

```bash
# 의존성 설치
bun install

# 개발 서버 실행 (http://localhost:3000)
bun run dev

# 프로덕션 빌드
bun run build

# 빌드 미리보기
bun run preview
```

## 🔐 환경 변수 설정

`.env.local` 파일을 생성하고 EmailJS 정보를 입력하세요:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### EmailJS 설정 방법

1. [EmailJS](https://www.emailjs.com/)에 가입
2. Email Service 추가 (Gmail, Outlook 등)
3. Email Template 생성:
   - Template ID 복사
   - 템플릿 변수: `{{from_name}}`, `{{contact}}`, `{{company}}`, `{{message}}`
4. Public Key 발급 (Account → API Keys)

**수신 이메일**: sj.kim@webber-ai.com

## 🎨 디자인 컨셉

**컬러 스킴:**
- 브랜드 컬러: `#A80569` (wine-600)
- 배경: `#EAE8E4` → `#DDD9D0` 그라디언트
- 카드 배경: `#F4F2EF`
- 헤더/푸터: `#F3F1EA`

**스타일:**
- 모던하고 고급스러운 와인 테마
- 전문적이면서도 따뜻한 느낌
- 미니멀하지만 임팩트 있는 디자인

## 📄 페이지 구조

1. **Hero Section** - 전체 화면 메인 배너
2. **Problem Section** - 고객 문제점 제기 (3단 그리드)
3. **Features Section** - 주요 기능 소개 (3단 그리드 + 이미지)
4. **How It Works** - 4단계 작동 방식 타임라인
5. **Benefits** - 주요 특장점 (2x3 그리드)
6. **Contact Form** - 도입 문의 폼 (EmailJS)
7. **Footer** - 회사 정보 및 링크

## 🚀 Railway 배포

### 1. Railway CLI 설치

```bash
# macOS
brew install railway

# npm
npm i -g @railway/cli
```

### 2. 프로젝트 초기화 및 배포

```bash
# Railway 로그인
railway login

# 프로젝트 초기화
railway init

# 환경 변수 설정
railway variables set VITE_EMAILJS_SERVICE_ID=your_service_id
railway variables set VITE_EMAILJS_TEMPLATE_ID=your_template_id
railway variables set VITE_EMAILJS_PUBLIC_KEY=your_public_key

# 배포
railway up
```

### 3. 도메인 연결

1. Railway 대시보드에서 프로젝트 선택
2. Settings → Domains
3. Custom Domain 추가: `podoring-ai.com`
4. DNS 설정:
   - A Record: Railway IP
   - CNAME: `www` → Railway domain

## 📸 이미지 파일

다음 이미지들이 `src/assets/images/` 폴더에 있어야 합니다:

- `podoring_wms_logo.png` - 로고
- `dashboard_scr.png` - 대시보드 스크린샷
- `winelist_scr.png` - 와인 목록 스크린샷
- `add_scr_1.png` - 와인 추가 화면 (빈)
- `add_scr_2.png` - AI 분석 로딩 화면
- `add_scr_3.png` - 와인 추가 완료 화면
- `camera_wine.png` - 와인 촬영 이미지
- `stock_scr.png` - 재고 관리 화면

## 🎬 애니메이션

모든 섹션은 Framer Motion을 사용하여 부드러운 애니메이션 효과를 제공합니다:

- **Scroll-triggered animations** - 스크롤 시 자동 활성화
- **Stagger effects** - 순차적 애니메이션
- **Hover effects** - 인터랙티브 호버 효과
- **Smooth transitions** - 부드러운 전환 효과

## 📱 반응형 디자인

- **Mobile** (< 768px): 1단 레이아웃
- **Tablet** (768px - 1024px): 2단 레이아웃
- **Desktop** (> 1024px): 3-4단 레이아웃

## 🔧 주요 컴포넌트

- `Hero.tsx` - 메인 히어로 섹션
- `ProblemSection.tsx` - 문제 제기
- `Features.tsx` - 주요 기능
- `HowItWorks.tsx` - 작동 방식 타임라인
- `Benefits.tsx` - 특장점
- `ContactForm.tsx` - 문의 폼
- `Footer.tsx` - 푸터

## 📝 라이센스

© 2025 Podoring WMS. All rights reserved.

## 📧 문의

- **이메일**: sj.kim@webber-ai.com
- **도메인**: podoring-ai.com
