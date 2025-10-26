# Podoring WMS 랜딩 페이지 - 프로젝트 요약

## 🎯 프로젝트 개요

**프로젝트명**: Podoring WMS 랜딩 페이지
**목적**: 와인 재고 관리 시스템(WMS) 제품 소개 및 문의 유도
**타겟**: 와인 수입 업체 및 와인샵 사장님
**슬로건**: "주먹구구식 재고관리는 이제 안녕"
**도메인**: podoring-ai.com

## 🛠 기술 스택

| 카테고리 | 기술 | 버전 |
|---------|------|------|
| Runtime | Bun | Latest |
| Framework | React | 18.3.1 |
| Language | TypeScript | 5.4+ |
| Build Tool | Vite | 5.1+ |
| Styling | Tailwind CSS | 3.4+ |
| Animation | Framer Motion | 11.0+ |
| Email | EmailJS | 4.3+ |
| Icons | Lucide React | 0.344+ |
| Deployment | Railway | - |

## 📦 프로젝트 구조

```
podoring-landing/
├── public/                      # 정적 파일
├── src/
│   ├── assets/
│   │   └── images/              # 이미지 파일 (8개)
│   ├── components/              # React 컴포넌트 (7개)
│   │   ├── Hero.tsx             # 메인 히어로 섹션
│   │   ├── ProblemSection.tsx   # 문제 제기 (3단 그리드)
│   │   ├── Features.tsx         # 주요 기능 (3단 그리드 + 이미지)
│   │   ├── HowItWorks.tsx       # 4단계 작동 방식
│   │   ├── Benefits.tsx         # 특장점 (2x3 그리드)
│   │   ├── ContactForm.tsx      # EmailJS 문의 폼
│   │   └── Footer.tsx           # 푸터
│   ├── utils/
│   │   └── animations.ts        # Framer Motion 애니메이션
│   ├── App.tsx                  # 메인 앱
│   ├── main.tsx                 # 엔트리 포인트
│   ├── index.css                # Tailwind CSS
│   └── vite-env.d.ts            # TypeScript 타입 정의
├── index.html                   # HTML 템플릿 (SEO 최적화)
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js           # 커스텀 브랜드 색상
├── postcss.config.js
├── nixpacks.toml                # Railway 빌드 설정
├── railway.json                 # Railway 배포 설정
├── .gitignore
├── .env.local                   # 환경 변수 (Git 제외)
├── README.md                    # 프로젝트 문서
├── GETTING_STARTED.md           # 시작 가이드
├── RAILWAY_DEPLOYMENT.md        # 배포 가이드
└── PROJECT_SUMMARY.md           # 이 파일
```

## 🎨 디자인 시스템

### 컬러 팔레트

| 색상 | Hex | 사용처 |
|-----|-----|-------|
| Wine 600 | `#A80569` | 브랜드 컬러, CTA 버튼, 강조 |
| Beige 100 | `#F4F2EF` | 카드 배경 |
| Beige 200 | `#EAE8E4` | 배경 그라디언트 시작 |
| Beige 300 | `#DDD9D0` | 배경 그라디언트 끝 |
| White | `#FFFFFF` | 카드, 텍스트 배경 |
| Gray 900 | `#111827` | 제목, 본문 텍스트 |

### 타이포그래피

- **폰트**: Pretendard (웹폰트)
- **제목 (h1)**: 4xl-6xl, font-bold
- **소제목 (h2)**: 3xl-4xl, font-bold
- **카드 제목 (h3)**: lg-2xl, font-bold/semibold
- **본문**: base-lg, font-normal

### 간격 시스템

- **섹션 간격**: py-20 (5rem)
- **컨테이너 패딩**: px-6 (모바일), px-12 (태블릿), px-20 (데스크탑)
- **카드 간격**: gap-6 ~ gap-12
- **최대 너비**: max-w-7xl (80rem)

## 📱 반응형 브레이크포인트

| 디바이스 | 너비 | 레이아웃 |
|---------|------|---------|
| Mobile | < 768px | 1단 |
| Tablet | 768px - 1024px | 2단 |
| Desktop | > 1024px | 3-4단 |

## 🎬 애니메이션

### 주요 애니메이션 패턴

1. **fadeInUp**: 페이드인 + 위로 슬라이드 (60px)
2. **fadeIn**: 페이드인만
3. **slideInFromRight**: 오른쪽에서 슬라이드인 (100px)
4. **scaleIn**: 스케일 + 페이드인 (0.8 → 1)
5. **staggerContainer**: 자식 요소 순차 애니메이션
6. **staggerItem**: Stagger 아이템 애니메이션

### 인터랙션

- **버튼 호버**: scale(1.05) + 그림자 증가
- **카드 호버**: 그림자 증가 (md → xl)
- **이미지 호버**: scale(1.05-1.1)
- **스크롤 트리거**: useInView hook (margin: -100px)

## 📄 페이지 섹션 상세

### 1. Hero Section
- **높이**: 전체 화면 (min-h-screen)
- **레이아웃**: 2단 (텍스트 + 이미지)
- **CTA**: "지금 문의하기" → 하단 폼으로 스크롤
- **이미지**: dashboard_scr.png

### 2. Problem Section
- **배경**: beige-100
- **레이아웃**: 3단 그리드
- **카드 수**: 3개
- **스타일**: 이모지 + 텍스트

### 3. Features Section
- **배경**: 그라디언트
- **레이아웃**: 3단 그리드
- **카드 수**: 3개
- **구성**: 아이콘 + 이미지 + 제목 + 설명

### 4. How It Works
- **배경**: beige-100
- **레이아웃**: 가로 4단 (데스크탑), 세로 스택 (모바일)
- **단계 수**: 4개
- **연결**: 화살표 애니메이션

### 5. Benefits Section
- **배경**: 그라디언트
- **레이아웃**: 2x3 그리드 (총 6개)
- **스타일**: 체크마크 + 제목 + 설명

### 6. Contact Form
- **배경**: beige-100
- **필드**: 성함*, 연락처*, 회사명, 문의내용*
- **상태**: idle, loading, success, error
- **통합**: EmailJS

### 7. Footer
- **배경**: #F3F1EA
- **레이아웃**: 3단
- **정보**: 제품, 회사, 문의

## 📧 EmailJS 통합

### 환경 변수
```env
VITE_EMAILJS_SERVICE_ID=service_xxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxx
```

### 템플릿 변수
- `{{from_name}}` - 성함
- `{{contact}}` - 연락처
- `{{company}}` - 회사명
- `{{message}}` - 문의내용

### 수신 이메일
sj.kim@webber-ai.com

## 🚀 배포

### Railway 설정
- **빌드 명령어**: `bun install && bun run build`
- **시작 명령어**: `bun run preview`
- **포트**: 3000 (기본)
- **빌더**: Nixpacks

### 필수 환경 변수
Railway Variables에 설정:
1. VITE_EMAILJS_SERVICE_ID
2. VITE_EMAILJS_TEMPLATE_ID
3. VITE_EMAILJS_PUBLIC_KEY

### 도메인
- **메인**: podoring-ai.com
- **서브도메인**: www.podoring-ai.com
- **Railway 기본**: *.up.railway.app

## 🖼 이미지 목록

| 파일명 | 용도 | 크기 |
|-------|------|------|
| podoring_wms_logo.png | 로고 | 32KB |
| dashboard_scr.png | 대시보드 | 2.1MB |
| winelist_scr.png | 와인 목록 | 14MB |
| add_scr_1.png | 와인 추가 (빈) | 94KB |
| add_scr_2.png | AI 로딩 | 56KB |
| add_scr_3.png | 추가 완료 | 180KB |
| camera_wine.png | 와인 촬영 | 15MB |
| stock_scr.png | 재고 관리 | 1.5MB |

**총 용량**: ~35MB (최적화 권장)

## ⚡ 성능 최적화 권장사항

### 이미지 최적화
```bash
# WebP 변환 (75% 용량 절감)
# camera_wine.png (15MB) → camera_wine.webp (~3MB)
# winelist_scr.png (14MB) → winelist_scr.webp (~3MB)
```

### Lazy Loading
현재 구현되지 않음 - 추가 권장:
```tsx
<img loading="lazy" src={image} alt="..." />
```

### 번들 최적화
- 현재 번들 크기: 277.64 KB (gzip: 89.46 KB) ✅ 양호
- 이미지 최적화 후 초기 로딩 속도 개선 예상

## 📊 빌드 출력

```
dist/index.html                   1.85 kB │ gzip: 0.81 kB
dist/assets/index-*.css          16.32 kB │ gzip: 3.62 kB
dist/assets/index-*.js          277.64 kB │ gzip: 89.46 kB
dist/assets/*.png               ~20 MB (총)
```

## 🔐 보안 고려사항

1. **환경 변수**: .env.local은 Git에 커밋 금지 (.gitignore 포함)
2. **EmailJS Public Key**: 공개 가능하나 도메인 화이트리스트 권장
3. **HTTPS**: Railway가 자동 SSL 인증서 제공
4. **CORS**: EmailJS가 자동 처리

## 🧪 테스트 체크리스트

- [x] 로컬 개발 서버 실행 (bun run dev)
- [x] 프로덕션 빌드 성공 (bun run build)
- [ ] EmailJS 문의 폼 전송 테스트
- [ ] 모든 이미지 로드 확인
- [ ] 반응형 디자인 확인 (Mobile, Tablet, Desktop)
- [ ] 모든 애니메이션 작동 확인
- [ ] CTA 버튼 스크롤 기능 확인
- [ ] 링크 및 네비게이션 테스트
- [ ] SEO 메타 태그 확인
- [ ] Railway 배포 성공 확인
- [ ] 커스텀 도메인 연결 확인

## 📚 문서

- **README.md**: 프로젝트 개요 및 기본 정보
- **GETTING_STARTED.md**: 로컬 개발 시작 가이드
- **RAILWAY_DEPLOYMENT.md**: 배포 상세 가이드
- **PROJECT_SUMMARY.md**: 이 문서 (프로젝트 전체 요약)

## 🎯 향후 개선 사항 (선택)

1. **이미지 최적화**: WebP 포맷 변환
2. **Gallery 섹션**: 스크린샷 캐러셀 추가
3. **Stats 섹션**: 숫자 카운트업 애니메이션
4. **다국어 지원**: i18n (한국어/영어)
5. **Analytics**: Google Analytics 또는 Vercel Analytics
6. **A/B 테스트**: CTA 버튼 위치/문구 테스트
7. **챗봇**: 간단한 FAQ 챗봇
8. **블로그**: 와인 관련 콘텐츠 마케팅

## 📞 연락처

- **개발자**: sj.kim@webber-ai.com
- **프로젝트**: podoring-ai.com
- **회사**: Podoring WMS

## ✅ 프로젝트 상태

**상태**: ✅ 완료 (배포 준비 완료)

**완료된 작업**:
- [x] 프로젝트 구조 설정
- [x] 모든 컴포넌트 구현 (7개)
- [x] 애니메이션 통합
- [x] EmailJS 폼 구현
- [x] 반응형 디자인
- [x] SEO 최적화
- [x] Railway 배포 설정
- [x] 문서 작성

**다음 단계**:
1. `.env.local`에 EmailJS 키 입력
2. 로컬 테스트 (bun run dev)
3. 문의 폼 이메일 전송 테스트
4. GitHub에 푸시
5. Railway 배포
6. 도메인 연결

---

**생성일**: 2025-10-26
**버전**: 1.0.0
**마지막 업데이트**: 2025-10-26
