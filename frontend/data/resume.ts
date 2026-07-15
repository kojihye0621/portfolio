export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectDetail = {
  title: string;
  items: string[];
};

export type Project = {
  title: string;
  summary: string;
  period: string;
  details: ProjectDetail[];
  learnings?: string[];
  skills: string[];
  links?: ProjectLink[];
};

export const resumeData = {
  profile: {
    name: '고지혜',
    role: 'Web Developer',
    birth: '2001.06.21',
    phone: 'REMOVED',
    email: 'kojihye0621@gmail.com',
    location: '서울특별시 동작구',
    image: '/images/profile.jpeg',
  },

  introduction: {
    title: '협업을 통해 더 나은 코드를 완성하는 개발자 고지혜입니다.',
    paragraphs: [
      '빠르게 변하는 환경에서도 유연하게 대응하고 실행력 있게 문제를 해결합니다.',
      '문제 해결 과정에서 의견을 조율하고 합리적인 결정을 이끌어내는 커뮤니케이션이 강점입니다.',
      '개발 전 과정에서 기획자, 팀원과 긴밀히 협업하여 최적의 방향을 도출하며, 단순 구현을 넘어 사용자 경험과 서비스 안정성을 함께 고민하는 개발자로 성장하고 있습니다.',
    ],
  },

  education: [
    {
      school: '유한대학교',
      major: '컴퓨터소프트웨어공학과',
      status: '졸업',
      period: '2020.03 ~ 2023.02',
    },
    {
      school: '수도여자고등학교',
      major: '이공계열',
      status: '졸업',
      period: '2017.03 ~ 2020.01',
    },
  ],

  career: {
    company: '넥스트솔루션',
    previousName: '구 후이즈글로벌네트워크',
    team: '개발팀',
    position: '사원',
    period: '2023.02 ~ 2025.10',
    logo: '/images/profile.jpeg',
    responsibilities: [
      {
        title: '솔루션 유지보수',
        items: [
          'PHP 기반 사내 자체 쇼핑몰·홈페이지 솔루션 유지보수',
          '레거시 시스템의 조회 성능 개선을 위한 쿼리 튜닝 및 테이블 구조 변경',
          '현업 부서 요청과 오류 사항에 대한 데이터·로그 분석 및 조사',
        ],
      },
      {
        title: 'API 연동 및 유지보수',
        items: [
          'Kakao, KCP, TossPay, KG Inicis, Naver 등 외부 시스템 API 연동 및 유지보수',
          'API 통신 과정에서 발생하는 데이터와 로그 분석',
        ],
      },
      {
        title: '프로세스 설계 및 개발',
        items: [
          '신규 프로젝트와 신기능 개발 시 고객·현업 요구사항 확인',
          '요구사항을 바탕으로 DB 및 업무 프로세스 설계',
        ],
      },
    ],
  },

  projects: [
    {
      title: 'Node 비즈킹 프로젝트',
      summary:
        '지역 기반 부동산 매물과 분양 정보를 한눈에 보고, 관계자와 직접 연결할 수 있는 부동산 네트워크 플랫폼',
      period: '2025.06 ~ 2025.10',
      details: [
        {
          title: '매물 등록 프로세스 개발',
          items: [
            '기본 정보에서 상세 정보로 이어지는 2단계 입력 구조 구현',
            '입력 데이터 유효성 검사 및 사용자 편의성 개선',
          ],
        },
        {
          title: 'API 및 DB 구조 설계',
          items: [
            'NestJS 기반 RESTful API 설계 및 엔드포인트 구현',
            'TypeORM과 MySQL을 이용한 Entity·DTO 구조화 및 CRUD 개발',
          ],
        },
        {
          title: '검색 필터 탑재 목록 페이지 개발',
          items: ['필터 조건에 따른 비동기 데이터 로딩 구현'],
        },
        {
          title: '인증 및 화면 개선',
          items: [
            'Kakao, Naver, Google, Apple SNS 로그인 개발',
            '입력 폼 레이아웃 개선 및 Tailwind CSS 기반 반응형 UI 적용',
            '기획자·디자이너와 기능 조율 및 개선 피드백 반영',
            '기능 테스트 및 버그 리포트 대응',
          ],
        },
      ],
      learnings: [
        'Node.js를 사용해 처음으로 진행한 프로젝트로, 초기 구조부터 직접 설계하며 서버와 클라이언트 사이의 데이터 흐름에 대한 이해를 높였습니다.',
        '문제를 해결하는 과정에서 구조적인 사고와 협업 시 명확한 코드 작성의 중요성을 체감했습니다.',
      ],
      skills: [
        'Node.js',
        'NestJS',
        'Next.js',
        'MySQL',
        'TypeORM',
        'JavaScript',
        'Tailwind CSS',
        'Git',
      ],
      links: [{ label: 'bizking.com', href: 'https://bizking.com/' }],
    },
    {
      title: 'PHP 쇼핑몰 솔루션 운영관리 및 유지보수',
      summary: 'PHP 기반 자체 쇼핑몰 솔루션 유지보수 및 운영관리',
      period: '2023.02 ~ 진행 중',
      details: [
        {
          title: '운영 및 장애 대응',
          items: [
            '로그 분석을 통한 장애 원인 파악 및 대응 로직 개선',
            'API 연동 로그와 데이터 분석',
            '외부 API 연동 기능 점검 및 오류 대응 프로세스 개선',
            '레거시 시스템 쿼리 속도 개선 및 쿼리 튜닝',
            '운영 중 발생한 기능 이슈 분석 및 핫픽스 대응',
          ],
        },
      ],
      skills: ['PHP', 'MySQL', 'JavaScript', 'jQuery', 'TortoiseSVN'],
    },
    {
      title: 'next.kr 사이트 리뉴얼',
      summary: '사내 공식 사이트 리뉴얼 및 통합 플랫폼 구축',
      period: '2025.01 ~ 2025.06',
      details: [
        {
          title: '통합 조회 시스템 구축',
          items: [
            '기존 3개 관리자 사이트에 분산된 결제 내역 및 솔루션 구매 정보를 통합 조회하는 시스템 구현',
            '솔루션별로 분산된 데이터를 하나의 플랫폼에서 통합 관리하고 조회하는 기능 제공',
          ],
        },
        {
          title: '사용자 인증 및 구조 개선',
          items: [
            '회원가입, 로그인, 비밀번호 찾기 등 사용자 인증 시스템 신규 개발',
            '기존 레거시 페이지와 중복 기능을 정리해 사이트 구조 간소화 및 유지보수성 향상',
          ],
        },
      ],
      learnings: [
        '동일 회원의 기록이 여러 DB에 분산되어 있었고, DB마다 컬럼명과 데이터 형식이 달라 데이터 가공과 매핑에 어려움이 있었습니다.',
        '대규모 데이터 통합의 위험을 줄이기 위해 여러 DB의 데이터를 한 페이지에서 통합 조회하는 방식을 선택했습니다.',
        '이 과정을 통해 데이터 구조의 일관성과 시스템 설계의 중요성을 깊이 이해했습니다.',
      ],
      skills: ['PHP', 'MySQL', 'JavaScript', 'jQuery'],
      links: [{ label: 'next.kr', href: 'https://next.kr/' }],
    },
    {
      title: '내부 결제 모듈 변경',
      summary: '넥스트 솔루션 및 사이트 내 결제 기능 구현',
      period: '2025.01 ~ 2025.02',
      details: [
        {
          title: 'KCP 결제 API 연동',
          items: [
            '3개 솔루션과 1개 사이트의 신용카드·계좌이체·가상계좌 결제 프로세스 구축',
            'CURL 기반 검증 요청 처리 및 응답 데이터 파싱',
            'API 오류 응답에 대한 예외 처리 로직 구현',
            '결제 내역 DB 저장 및 로그 관리 시스템 구축',
          ],
        },
      ],
      learnings: [
        '기존 결제 모듈을 대체하기 위한 독자적인 결제 로직을 직접 설계하고 구현했습니다.',
        '솔루션별로 다른 데이터 구조를 다루며 데이터 정합성과 표준화된 로직 설계의 필요성을 체감했습니다.',
      ],
      skills: ['PHP', 'MySQL', 'JavaScript', 'jQuery'],
    },
    {
      title: 'AK7Cabinet 프로젝트',
      summary: '제주항공 사내 그룹웨어 결재 및 포인트 결제가 구축된 폐쇄형 쇼핑몰',
      period: '2024.04 ~ 2025.01',
      details: [
        {
          title: 'PHP 버전 업데이트',
          items: [
            '디버깅, TLS 버전, 최신 기능 사용 문제를 해결하기 위해 PHP 5.3에서 8.3으로 업데이트',
            'PHP 8.3 전환 과정에서 EUC-KR과 UTF-8 간 인코딩 문제 해결',
          ],
        },
        {
          title: '포인트 승인·지급·차감 기능',
          items: [
            '서버 크론탭 실행 스크립트로 특정 날짜 자동 차감 처리 구현',
            'CSV 업로드를 통한 데이터 일괄 등록 기능 구현',
          ],
        },
        {
          title: '알림 기능',
          items: [
            '카카오 알림톡과 메일 발송 기능 구현',
            'MySQL 기반 발송 내역 저장 및 로그 관리',
            '고객별 개인화 메시지 발송 로직과 상황별 자동 발송 분기 처리',
          ],
        },
      ],
      learnings: [
        '요구사항 분석부터 기능 구현까지 전 과정을 담당하며 프로젝트 전체 구조와 시스템 흐름을 이해하는 경험을 쌓았습니다.',
        '서비스 전반을 조망하는 시야를 갖게 된 첫 프로젝트입니다.',
      ],
      skills: ['PHP', 'MySQL', 'JavaScript', 'jQuery'],
    },
    {
      title: 'AKMRO 솔루션 유지보수',
      summary: 'AKMRO 사내 그룹웨어 시스템과 연동된 폐쇄형 쇼핑몰',
      period: '2024.04 ~ 진행 중',
      details: [
        {
          title: '운영 및 시스템 전환',
          items: [
            '메일 시스템 전송 서버를 Oracle에서 MySQL로 전환',
            'DB 변경에 따른 MySQL·Oracle 문법 차이를 검증하고 전체 쿼리 변경',
            '현업과의 소통과 협의를 바탕으로 프로세스 설계 및 개발',
            '분기별 솔루션 운영 현황 분석 및 개선사항 보고서 작성',
            '로그 데이터를 기반으로 문제 원인 분석 및 개선 방향 도출',
          ],
        },
      ],
      skills: ['PHP', 'MySQL', 'JavaScript', 'jQuery'],
    },
    {
      title: '홈페이지 구축 및 유지보수',
      summary: '기업·기관 사이트의 검색, 지도, 차트 및 설문 기능 개발',
      period: '2024.03 ~ 진행 중',
      details: [
        {
          title: '종근당 상품 홍보 사이트',
          items: [
            'Kakao Map API 연동 및 DB 위치 기반 마커 표시',
            '인포윈도우 등 지도 상호작용 기능 구현',
            '검색 조건에 맞는 쿼리 작성과 결과 데이터 가공 및 출력',
          ],
        },
        {
          title: '이화여대 품질선도센터 아카이브 사이트',
          items: [
            'ECharts API를 활용한 데이터 가공 및 원형 차트 구현',
            '툴팁과 범례 등 UI 요구사항 반영',
            '비동기 검색 모듈, 다중 검색 조건, 결과 내 재검색 구현',
            '검색 결과와 연동되는 동적 필터 시스템 개발',
          ],
        },
        {
          title: '법무부 교정본부 사이트',
          items: [
            '설문조사 페이지 구현',
            '조사 결과에 따른 사용자 결과 페이지 분기 구현',
          ],
        },
      ],
      skills: ['PHP', 'MySQL', 'JavaScript', 'jQuery'],
      links: [
        { label: '종근당', href: 'https://kefem.co.kr/' },
        { label: '이화여대 품질선도센터', href: 'https://www.bioiap.org/' },
        {
          label: '법무부 교정본부',
          href: 'http://huno1403.homepage.whois.co.kr/',
        },
      ],
    },
  ] satisfies Project[],

  skills: [
    {
      category: 'Backend',
      items: ['Node.js', 'NestJS', 'PHP'],
    },
    {
      category: 'Frontend',
      items: ['Next.js', 'JavaScript', 'jQuery', 'Tailwind CSS'],
    },
    {
      category: 'Database & ORM',
      items: ['MySQL', 'TypeORM', 'Oracle'],
    },
    {
      category: 'Collaboration',
      items: ['Git', 'TortoiseSVN'],
    },
    {
      category: 'Integration',
      items: [
        'KCP',
        'KG Inicis',
        'TossPay',
        'Kakao',
        'Naver',
        'Google',
        'Apple',
      ],
    },
  ],

  closing: [
    '3년 차 개발자로서 다양한 프로젝트와 업무를 경험했으며, 단순 참여가 아니라 각 프로젝트에서 개발 파트를 직접 담당하며 기능 구현과 로직 설계, 시스템 개선 작업을 수행했습니다.',
    '프로젝트 개발뿐 아니라 기존 솔루션 유지보수와 업그레이드 작업도 병행하며 실제 서비스 운영 환경에서 발생하는 문제 해결과 기능 개선을 지속적으로 경험했습니다.',
    '이러한 경험을 통해 서비스 전반을 이해하고 실질적인 기능 구현을 수행할 수 있는 실무 중심 개발 역량을 쌓아왔습니다.',
    '프로젝트 개발부터 솔루션 유지보수, 분석 업무까지 다양한 영역을 경험해 온 만큼 주어진 업무에 빠르게 적응하고 책임감 있게 수행할 자신이 있습니다.',
  ],
};
