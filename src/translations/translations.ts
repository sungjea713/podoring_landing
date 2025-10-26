export const translations = {
  ko: {
    nav: {
      features: '주요 기능',
      pricing: '가격 안내',
      about: '대표 소개',
      contact: '문의하기',
      cta: '무료 상담',
    },
    hero: {
      tagline: '주먹구구식 재고관리는 이제 안녕',
      subtitle: '와인 수입 업체와 와인샵을 위한',
      subtitleBold: 'AI 기반 스마트 재고 관리 시스템',
      cta: '지금 문의하기',
    },
    problem: {
      title: '이런 고민 있으신가요?',
      items: [
        '엑셀에 일일이 입력하느라 시간 낭비',
        '어떤 와인이 어디 있는지 찾기 어려움',
        '재고 현황을 한눈에 파악하기 힘듦',
      ],
    },
    features: {
      title: 'Podoring WMS의 주요 기능',
      titleHighlight: 'Podoring WMS',
      items: [
        {
          title: '사진 한 장으로 끝',
          description: '와인 라벨을 촬영하면 Gemini AI가 60초 만에 모든 정보를 자동으로 채워줍니다. 수작업 입력은 이제 그만!',
        },
        {
          title: '선반별, 점포별 실시간 관리',
          description: '강남점, 서울역점 등 다점포 재고를 한 화면에서 관리하세요. 어느 선반에 어떤 와인이 있는지 한눈에 파악 가능합니다.',
        },
        {
          title: '시각적 대시보드',
          description: '타입별, 국가별, 빈티지별 분포를 차트로 확인하고 데이터 기반 의사결정을 내리세요.',
        },
      ],
    },
    howItWorks: {
      title: '어떻게 작동하나요?',
      steps: [
        {
          title: '와인 라벨 촬영',
          description: '스마트폰으로 와인 라벨을 촬영하세요',
        },
        {
          title: 'AI 자동 분석',
          description: 'Gemini AI가 와인명, 빈티지, 가격 등을 자동 추출 (약 60초)',
        },
        {
          title: '정보 확인 및 수정',
          description: '자동 입력된 정보를 확인하고 필요시 수정',
        },
        {
          title: '선반 배치 완료',
          description: '어느 선반에 보관할지 선택하고 실시간 관리 시작',
        },
      ],
    },
    benefits: {
      title: '주요 특장점',
      items: [
        {
          title: 'AI 자동 입력',
          description: 'AI 기반 라벨 인식',
        },
        {
          title: '다점포 관리',
          description: '여러 매장 재고 통합 관리',
        },
        {
          title: '시맨틱 검색',
          description: "자연어로 검색 (예: 'fruity red wine from France')",
        },
        {
          title: '빈티지/가격 분석',
          description: '연도별, 가격대별 차트 제공',
        },
        {
          title: 'Vivino 연동',
          description: 'Vivino 평점 자동 가져오기',
        },
        {
          title: '실시간 동기화',
          description: '모든 기기에서 실시간 업데이트',
        },
      ],
    },
    pricing: {
      title: '가격 안내',
      installation: {
        title: '설치 비용',
        subtitle: '일회성 설치 및 설정',
        price: '100만원',
        priceTo: '200만원',
        vat: '부가세 별도',
        features: [
          '초기 시스템 설치 및 구축',
          '점포 및 선반 설정',
          '사용자 교육 및 온보딩',
          '기존 재고 데이터 이관',
        ],
      },
      monthly: {
        badge: '추천',
        title: '월 유지 비용',
        subtitle: '지속적인 서비스 및 지원',
        price: '39,900원',
        period: '/월',
        vat: '부가세 별도',
        features: [
          '무제한 와인 등록 및 관리',
          'AI 자동 입력 (월 100개)',
          '실시간 기술 지원',
          '정기 업데이트 및 신규 기능',
          '클라우드 백업 및 보안',
        ],
      },
      cta: {
        text: '궁금한 사항이 있으시거나 맞춤 견적이 필요하신가요?',
        button: '무료 상담 신청하기',
      },
    },
    contact: {
      title: '도입 문의하기',
      subtitle: '와인 재고 관리의 혁신을 경험해보세요',
      form: {
        name: '성함',
        nameRequired: '성함 *',
        namePlaceholder: '홍길동',
        contact: '연락처',
        contactRequired: '연락처 *',
        contactPlaceholder: '010-1234-5678 또는 email@example.com',
        company: '회사명',
        companyPlaceholder: '주식회사 포도링',
        message: '문의 내용',
        messageRequired: '문의 내용 *',
        messagePlaceholder: '도입하고 싶은 매장 수, 관리 와인 수 등을 알려주세요',
        submit: '문의 보내기',
        sending: '전송 중...',
        success: '문의가 성공적으로 전송되었습니다!',
        error: '전송 실패. 다시 시도해주세요.',
      },
    },
    footer: {
      tagline: '주먹구구식 재고관리는 이제 안녕',
      product: '제품',
      company: '회사',
      companyAbout: '대표 소개',
      privacy: '개인정보처리방침',
      contactTitle: '문의',
      email: '이메일',
      phone: '연락처',
      copyright: '© 2025 Podoring WMS. All rights reserved.',
    },
  },
  en: {
    nav: {
      features: 'Features',
      pricing: 'Pricing',
      about: 'About CEO',
      contact: 'Contact',
      cta: 'Free Consultation',
    },
    hero: {
      tagline: 'Say Goodbye to Manual Inventory Management',
      subtitle: 'For wine importers and wine shops',
      subtitleBold: 'AI-powered Smart Inventory Management System',
      cta: 'Contact Us Now',
    },
    problem: {
      title: 'Do you have these concerns?',
      items: [
        'Wasting time entering data into Excel manually',
        'Difficult to find where wines are located',
        'Hard to grasp inventory status at a glance',
      ],
    },
    features: {
      title: 'Key Features of Podoring WMS',
      titleHighlight: 'Podoring WMS',
      items: [
        {
          title: 'Just One Photo',
          description: 'Take a photo of the wine label and Gemini AI automatically fills in all information in 60 seconds. No more manual entry!',
        },
        {
          title: 'Real-time Management by Shelf & Location',
          description: 'Manage multi-location inventory (Gangnam, Seoul Station, etc.) on one screen. Know exactly which wine is on which shelf.',
        },
        {
          title: 'Visual Dashboard',
          description: 'Check distribution by type, country, and vintage with charts and make data-driven decisions.',
        },
      ],
    },
    howItWorks: {
      title: 'How Does It Work?',
      steps: [
        {
          title: 'Photograph Wine Label',
          description: 'Take a photo of the wine label with your smartphone',
        },
        {
          title: 'AI Auto Analysis',
          description: 'Gemini AI automatically extracts wine name, vintage, price, etc. (about 60 seconds)',
        },
        {
          title: 'Review & Edit Information',
          description: 'Review automatically entered information and edit if needed',
        },
        {
          title: 'Shelf Placement Complete',
          description: 'Select which shelf to store and start real-time management',
        },
      ],
    },
    benefits: {
      title: 'Key Benefits',
      items: [
        {
          title: 'AI Auto Input',
          description: 'AI-based label recognition',
        },
        {
          title: 'Multi-location Management',
          description: 'Integrated inventory management for multiple stores',
        },
        {
          title: 'Semantic Search',
          description: "Search in natural language (e.g., 'fruity red wine from France')",
        },
        {
          title: 'Vintage/Price Analysis',
          description: 'Charts by year and price range',
        },
        {
          title: 'Vivino Integration',
          description: 'Automatically fetch Vivino ratings',
        },
        {
          title: 'Real-time Sync',
          description: 'Real-time updates across all devices',
        },
      ],
    },
    pricing: {
      title: 'Pricing',
      installation: {
        title: 'Installation Fee',
        subtitle: 'One-time installation and setup',
        price: '₩1M',
        priceTo: '₩2M',
        vat: 'VAT excluded',
        features: [
          'Initial system installation and setup',
          'Store and shelf configuration',
          'User training and onboarding',
          'Existing inventory data migration',
        ],
      },
      monthly: {
        badge: 'Recommended',
        title: 'Monthly Fee',
        subtitle: 'Ongoing service and support',
        price: '₩39,900',
        period: '/month',
        vat: 'VAT excluded',
        features: [
          'Unlimited wine registration and management',
          'AI auto input (100/month)',
          'Real-time technical support',
          'Regular updates and new features',
          'Cloud backup and security',
        ],
      },
      cta: {
        text: 'Have questions or need a custom quote?',
        button: 'Request Free Consultation',
      },
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'Experience the innovation in wine inventory management',
      form: {
        name: 'Name',
        nameRequired: 'Name *',
        namePlaceholder: 'John Doe',
        contact: 'Contact',
        contactRequired: 'Contact *',
        contactPlaceholder: '010-1234-5678 or email@example.com',
        company: 'Company',
        companyPlaceholder: 'Podoring Inc.',
        message: 'Message',
        messageRequired: 'Message *',
        messagePlaceholder: 'Please tell us about the number of stores you want to implement, number of wines to manage, etc.',
        submit: 'Send Inquiry',
        sending: 'Sending...',
        success: 'Inquiry sent successfully!',
        error: 'Failed to send. Please try again.',
      },
    },
    footer: {
      tagline: 'Say Goodbye to Manual Inventory Management',
      product: 'Product',
      company: 'Company',
      companyAbout: 'About CEO',
      privacy: 'Privacy Policy',
      contactTitle: 'Contact',
      email: 'Email',
      phone: 'Phone',
      copyright: '© 2025 Podoring WMS. All rights reserved.',
    },
  },
};

export type TranslationKey = keyof typeof translations.ko;
