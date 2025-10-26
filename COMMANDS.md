# 명령어 빠른 참조

Podoring WMS 랜딩 페이지 개발 및 배포에 필요한 모든 명령어 모음

## 🚀 개발 명령어

### 기본 명령어

```bash
# 의존성 설치
bun install

# 개발 서버 실행 (http://localhost:3000)
bun run dev

# 프로덕션 빌드
bun run build

# 빌드 미리보기
bun run preview

# TypeScript 타입 체크
bun run tsc --noEmit
```

### 유용한 개발 명령어

```bash
# 특정 포트에서 실행
PORT=5000 bun run dev

# 네트워크 접근 허용 (모바일 테스트)
bun run dev --host

# 빌드 후 미리보기 (한 번에)
bun run build && bun run preview
```

## 📦 의존성 관리

```bash
# 패키지 추가
bun add package-name

# 개발 의존성 추가
bun add -D package-name

# 패키지 제거
bun remove package-name

# 의존성 업데이트
bun update

# 의존성 재설치
rm -rf node_modules bun.lockb
bun install
```

## 🎨 스타일링

```bash
# Tailwind CSS 빌드 확인
bunx tailwindcss -i ./src/index.css -o ./dist/output.css

# Tailwind 설정 재생성
bunx tailwindcss init -p
```

## 🖼 이미지 최적화 (선택)

```bash
# ImageMagick 설치 (macOS)
brew install imagemagick

# PNG to WebP 변환
magick convert src/assets/images/camera_wine.png -quality 80 src/assets/images/camera_wine.webp

# 일괄 변환
for img in src/assets/images/*.png; do
  magick convert "$img" -quality 80 "${img%.png}.webp"
done

# 이미지 크기 조정 (50% 축소)
magick convert input.png -resize 50% output.png
```

## 🔍 디버깅

```bash
# 빌드 분석
bun run build --mode=development

# 빌드 통계
bun run build --report

# 소스맵 생성
bun run build --sourcemap

# 빌드 폴더 확인
ls -lh dist/assets/
```

## 🧹 정리

```bash
# 빌드 폴더 삭제
rm -rf dist

# node_modules 삭제
rm -rf node_modules

# 캐시 삭제
rm -rf .vite bun.lockb

# 전체 정리 및 재설치
rm -rf dist node_modules bun.lockb && bun install
```

## 📤 Git 명령어

```bash
# 저장소 초기화
git init
git add .
git commit -m "Initial commit: Podoring WMS landing page"

# GitHub 연결
git remote add origin https://github.com/USERNAME/podoring-landing.git
git branch -M main
git push -u origin main

# 변경사항 커밋
git add .
git commit -m "Update: 설명"
git push origin main

# 상태 확인
git status

# 커밋 히스토리
git log --oneline

# 브랜치 생성
git checkout -b feature/new-section
```

## 🚀 Railway 배포

### Railway CLI 설치

```bash
# macOS
brew install railway

# npm
npm i -g @railway/cli

# Bun
bun add -g @railway/cli
```

### Railway 명령어

```bash
# 로그인
railway login

# 프로젝트 초기화
railway init

# 배포
railway up

# 로그 확인
railway logs

# 환경 변수 설정
railway variables set KEY=value

# 환경 변수 조회
railway variables

# Railway 쉘
railway shell

# 링크 열기
railway open
```

### 환경 변수 일괄 설정

```bash
# 한 번에 설정
railway variables set \
  VITE_EMAILJS_SERVICE_ID=service_xxxxx \
  VITE_EMAILJS_TEMPLATE_ID=template_xxxxx \
  VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxx
```

## 🧪 테스트

```bash
# 로컬 빌드 테스트
bun run build && bun run preview

# 반응형 테스트 (개발자 도구)
# Chrome: Cmd+Option+I → Device Toolbar (Cmd+Shift+M)
# Firefox: Cmd+Option+M

# Lighthouse 성능 테스트
# Chrome 개발자 도구 → Lighthouse 탭

# curl 테스트
curl http://localhost:3000

# 포트 확인
lsof -i :3000

# 프로세스 종료
kill -9 $(lsof -t -i:3000)
```

## 🔧 트러블슈팅

```bash
# Bun 버전 확인
bun --version

# Bun 업그레이드
curl -fsSL https://bun.sh/install | bash

# Node.js 대신 Bun으로 실행
bun run index.tsx  # node index.tsx 대신

# 환경 변수 확인
cat .env.local

# Vite 캐시 삭제
rm -rf node_modules/.vite

# 전체 리셋
rm -rf dist node_modules .vite bun.lockb
bun install
bun run build
```

## 📊 성능 측정

```bash
# 빌드 시간 측정
time bun run build

# 번들 크기 분석
bun run build
ls -lh dist/assets/

# gzip 압축 크기 확인
gzip -c dist/assets/index-*.js | wc -c
```

## 🌐 네트워크

```bash
# 로컬 IP 확인 (네트워크 테스트용)
ipconfig getifaddr en0  # macOS WiFi
ipconfig getifaddr en1  # macOS Ethernet

# 특정 IP에서 서버 실행
HOST=0.0.0.0 bun run dev

# DNS 확인
dig podoring-ai.com
nslookup podoring-ai.com

# Railway 도메인 확인
curl -I https://podoring-landing-production.up.railway.app
```

## 📝 유용한 스크립트

### package.json에 추가할 스크립트

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "clean": "rm -rf dist node_modules .vite",
    "reset": "rm -rf dist node_modules .vite bun.lockb && bun install",
    "deploy": "bun run build && railway up",
    "type-check": "tsc --noEmit",
    "lint": "eslint src --ext .ts,.tsx"
  }
}
```

### 사용 예시

```bash
bun run clean    # 클린업
bun run reset    # 전체 리셋
bun run deploy   # 빌드 후 배포
```

## 🔍 파일 검색

```bash
# 컴포넌트 찾기
find src -name "*.tsx"

# CSS 파일 찾기
find src -name "*.css"

# 이미지 찾기
find src/assets -type f

# 특정 텍스트 검색
grep -r "주먹구구식" src/

# 큰 파일 찾기 (10MB 이상)
find src/assets -type f -size +10M
```

## 📋 빠른 체크리스트

```bash
# 개발 시작 전
bun install
bun run dev

# 배포 전
bun run build      # 빌드 성공 확인
bun run preview    # 프리뷰 확인
git push           # GitHub 푸시

# 배포 후
railway logs       # 로그 확인
curl https://podoring-ai.com  # 사이트 확인
```

## 💡 팁

### VSCode 터미널에서

```bash
# 여러 명령어 한 번에 실행
bun install && bun run dev

# 백그라운드 실행
bun run dev &

# 백그라운드 프로세스 확인
jobs

# 백그라운드 프로세스 종료
kill %1
```

### 효율적인 개발 워크플로우

```bash
# 1. 새 기능 개발
git checkout -b feature/new-section
# ... 코드 작성 ...
bun run dev  # 실시간 확인

# 2. 커밋
git add .
git commit -m "Add: new section"

# 3. 빌드 테스트
bun run build

# 4. 메인 브랜치에 병합
git checkout main
git merge feature/new-section

# 5. 배포
git push origin main
# Railway 자동 배포
```

---

**빠른 시작**: `bun install && bun run dev`
**빠른 배포**: `bun run build && railway up`
**도움말**: `bun run --help`
