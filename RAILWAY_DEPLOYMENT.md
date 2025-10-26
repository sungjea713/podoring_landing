# Railway 배포 가이드

Podoring WMS 랜딩 페이지를 Railway에 배포하는 상세 가이드입니다.

## 📋 준비사항

1. **GitHub 계정**
2. **Railway 계정** ([railway.app](https://railway.app))
3. **EmailJS 계정 및 설정 완료**
   - Service ID
   - Template ID
   - Public Key

## 🚀 배포 단계

### 1. Railway CLI 설치 (선택사항)

**macOS:**
```bash
brew install railway
```

**npm:**
```bash
npm i -g @railway/cli
```

### 2. GitHub에 프로젝트 푸시

```bash
# Git 초기화 (아직 안 했다면)
git init
git add .
git commit -m "Initial commit: Podoring WMS landing page"

# GitHub 레포지토리 생성 후
git remote add origin https://github.com/YOUR_USERNAME/podoring-landing.git
git branch -M main
git push -u origin main
```

### 3. Railway에서 프로젝트 배포

#### 방법 A: Railway 웹 대시보드 사용 (권장)

1. [Railway](https://railway.app)에 로그인
2. **New Project** 클릭
3. **Deploy from GitHub repo** 선택
4. GitHub 레포지토리 연결 권한 부여
5. `podoring-landing` 레포지토리 선택
6. 자동으로 빌드 및 배포 시작

#### 방법 B: Railway CLI 사용

```bash
# Railway 로그인
railway login

# 프로젝트 초기화
railway init

# 배포
railway up
```

### 4. 환경 변수 설정

Railway 대시보드에서:

1. 프로젝트 선택
2. **Variables** 탭 클릭
3. 다음 환경 변수 추가:

```
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

또는 CLI 사용:

```bash
railway variables set VITE_EMAILJS_SERVICE_ID=your_service_id
railway variables set VITE_EMAILJS_TEMPLATE_ID=your_template_id
railway variables set VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### 5. 빌드 확인

Railway는 자동으로:
1. `nixpacks.toml` 설정 감지
2. Bun 설치
3. `bun install` 실행
4. `bun run build` 실행
5. `bun run preview` 로 서버 시작

배포 로그에서 확인:
```
✓ Build completed
✓ Deployment successful
```

### 6. 도메인 연결

#### Railway 기본 도메인 사용

1. Railway 대시보드에서 **Settings** 탭
2. **Domains** 섹션에서 자동 생성된 도메인 확인
   - 예: `podoring-landing-production.up.railway.app`

#### 커스텀 도메인 설정 (podoring-ai.com)

1. Railway 대시보드 → **Settings** → **Domains**
2. **Custom Domain** 클릭
3. `podoring-ai.com` 입력
4. Railway가 제공하는 DNS 설정 확인

**DNS 제공자 (예: Cloudflare, GoDaddy)에서 설정:**

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | Railway IP (제공된 IP) | Auto |
| CNAME | www | Railway 도메인 | Auto |

5. DNS 전파 대기 (최대 48시간, 보통 1-2시간)
6. Railway에서 SSL 인증서 자동 발급 확인

### 7. 배포 확인

1. 브라우저에서 도메인 접속
2. 모든 섹션 정상 작동 확인
3. 문의 폼 테스트 (이메일 전송 확인)

## 🔄 업데이트 배포

코드 변경 후 자동 재배포:

```bash
git add .
git commit -m "Update: 설명"
git push origin main
```

Railway가 자동으로 감지하고 재배포합니다.

## 🐛 트러블슈팅

### 빌드 실패

**문제**: 빌드 중 오류 발생

**해결**:
1. Railway 로그 확인
2. 로컬에서 빌드 테스트:
   ```bash
   bun run build
   ```
3. `package.json` 의존성 확인
4. Railway에서 빌드 로그 확인

### 환경 변수 문제

**문제**: EmailJS 작동 안 함

**해결**:
1. Railway Variables 확인
2. 변수명 정확한지 확인 (`VITE_` 접두사 필수)
3. EmailJS 키 유효성 확인
4. 재배포:
   ```bash
   railway up
   ```

### 도메인 연결 안 됨

**문제**: 커스텀 도메인 접속 불가

**해결**:
1. DNS 설정 확인 (dig 명령어):
   ```bash
   dig podoring-ai.com
   ```
2. Railway 대시보드에서 도메인 상태 확인
3. DNS 전파 대기 (24-48시간)
4. SSL 인증서 상태 확인

### 이미지 로드 안 됨

**문제**: 이미지가 표시되지 않음

**해결**:
1. `src/assets/images/` 폴더에 모든 이미지 확인
2. 이미지 경로 확인 (대소문자 구분)
3. Git에 이미지 파일 커밋 확인:
   ```bash
   git status
   git add src/assets/images/
   git commit -m "Add images"
   git push
   ```

## 📊 모니터링

Railway 대시보드에서 확인 가능:

- **Metrics**: CPU, Memory, Network 사용량
- **Logs**: 실시간 서버 로그
- **Deployments**: 배포 히스토리
- **Analytics**: 트래픽 통계

## 💰 비용

Railway 무료 플랜:
- $5 무료 크레딧/월
- 정적 사이트는 비용 거의 없음
- 트래픽 증가 시 유료 플랜 전환

## 🔐 보안

1. **환경 변수**: 절대 코드에 하드코딩 금지
2. **HTTPS**: Railway가 자동으로 SSL 제공
3. **EmailJS Public Key**: 공개해도 안전 (도메인 제한 설정 권장)

## 📧 EmailJS 도메인 화이트리스트 (권장)

EmailJS 대시보드에서:
1. Email Services → Settings
2. **Allowed Origins** 추가:
   ```
   https://podoring-ai.com
   https://www.podoring-ai.com
   https://*.railway.app
   ```

## ✅ 배포 체크리스트

- [ ] GitHub에 코드 푸시 완료
- [ ] Railway 프로젝트 생성
- [ ] 환경 변수 설정 완료
- [ ] 빌드 성공 확인
- [ ] Railway 기본 도메인에서 사이트 확인
- [ ] 커스텀 도메인 DNS 설정
- [ ] SSL 인증서 활성화 확인
- [ ] 문의 폼 이메일 전송 테스트
- [ ] 모든 이미지 로드 확인
- [ ] 모바일 반응형 확인

## 🎉 배포 완료!

축하합니다! Podoring WMS 랜딩 페이지가 성공적으로 배포되었습니다.

**사이트 URL**: https://podoring-ai.com

## 📞 지원

문제가 발생하면:
- Railway 문서: https://docs.railway.app
- EmailJS 문서: https://www.emailjs.com/docs
- 이메일: sj.kim@webber-ai.com
