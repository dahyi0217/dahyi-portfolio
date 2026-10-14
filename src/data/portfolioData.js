// 포트폴리오 데이터 소스 (동적 렌더링 지원)

export const profileData = {
  name: "변다희",
  englishName: "Dahee Byun",
  birthDate: "2007. 02. 17",
  desiredJob: "사무직 (General Administration / Office Support)",
  shortBio: "정확하고 꼼꼼한 문서 정리와 능숙한 디지털 툴 활용으로 조직의 업무 효율을 높이는 올라운더 사무 인재 변다희입니다.",
  fullIntro: [
    "체계적인 자료 정리와 일정 관리를 즐기며, 원활한 협업을 위한 꼼꼼한 커뮤니케이션을 지향합니다.",
    "일반 사무 행정뿐만 아니라 GTQ, 컴퓨터그래픽스, 웹디자인 역량을 바탕으로 사내 서식 리디자인, 시각화 보고서, 디지털 웹 배너 등 실무에 필요한 시각 자료를 직접 제작할 수 있는 차별화된 실무 감각을 갖추고 있습니다."
  ],
  contact: {
    email: "dahee.byun@example.com",
    phone: "010-0000-0000",
    location: "대한민국 서울",
  },
  certificates: [
    {
      id: "cert-1",
      name: "GTQ 그래픽기술자격",
      issuer: "KPC 한국생산성본부",
      level: "1급",
      description: "포토샵을 활용한 디지털 이미지 보정, 합성 및 웹 그래픽 실무 제작 능력 공인"
    },
    {
      id: "cert-2",
      name: "GTQ-I 일러스트",
      issuer: "KPC 한국생산성본부",
      level: "1급",
      description: "일러스트레이터 벡터 그래픽, 심볼, 인포그래픽 및 사내 시각물 디자인 역량 공인"
    },
    {
      id: "cert-3",
      name: "컴퓨터그래픽스운용기능사",
      issuer: "한국산업인력공단",
      level: "국가기술자격",
      description: "인쇄 및 출판 그래픽스 운용, 전자출판 및 시각디자인 표준 규격 실무 지식"
    },
    {
      id: "cert-4",
      name: "웹디자인기능사",
      issuer: "한국산업인력공단",
      level: "국가기술자격",
      description: "웹 표준 UI 설계, HTML/CSS 기본 퍼블리싱 및 디지털 에셋 관리 역량"
    }
  ],
  skills: [
    {
      name: "Adobe Illustrator (일러스트)",
      category: "Design & Vector",
      percentage: 90,
      description: "사내 공문/보고서 서식 리디자인, 벡터 인포그래픽, 사내 브로슈어 및 명찰 키트 제작"
    },
    {
      name: "Adobe Photoshop (포토샵)",
      category: "Image Editing",
      percentage: 88,
      description: "행사 사진 보정 및 리터칭, 사내 인트라넷 공지 배너 및 SNS 카드뉴스 제작"
    },
    {
      name: "Web Design (웹디자인)",
      category: "Web & Publishing",
      percentage: 85,
      description: "HTML/CSS 웹 표준 구조화, 반응형 레이아웃 이해, 사내 웹페이지 UI 유지보수"
    },
    {
      name: "Office Automation (사무 행정)",
      category: "Administration",
      percentage: 92,
      description: "한글/워드 서식 표준화, 엑셀 데이터 취합 및 차트 시각화, 체계적인 문서 아카이빙"
    }
  ]
};

export const projectsData = [
  {
    id: 1,
    title: "사내 업무 서식 표준화 및 보고서 템플릿 리디자인",
    category: "사무 행정 & 시각 디자인",
    period: "2025.10 ~ 2025.11 (4주)",
    tools: ["Adobe Illustrator", "MS Word / 한글", "포토샵"],
    imageFileName: "project-01.png",
    // 사용자가 실제 이미지를 public/images/projects/ 폴더에 넣었는지 여부
    // false일 경우 지정된 파일명이 적힌 모던 플레이스홀더로 렌더링
    isImageReady: false,
    summary: "부서마다 제각각이던 결재 기안서, 품의서 및 주간 업무 보고서 양식을 통일하여 시각적 가독성과 결재 속도를 40% 이상 향상시킨 서식 체계화 프로젝트입니다.",
    details: {
      background: "사내 공통 서식의 부재로 인해 문서마다 폰트와 여백 규격이 달라 결재선에서의 가독성이 저하되고 문서 작성 시간이 불필요하게 소요되던 문제를 해결하고자 기획했습니다.",
      myRole: "기안 양식 6종 구조화 및 일러스트레이터를 활용한 그리드/아이콘 템플릿 100% 단독 제작",
      features: [
        "일관된 시각 위계(Typography Scale)와 공식 색상 가이드라인 수립",
        "표 작성 시 데이터 구분이 쉬운 지브라 패턴 및 직관적인 결재란 규격 정립",
        "실무 부서원들이 바로 복사해 쓸 수 있는 배포용 Word/HWP 템플릿 패키징"
      ],
      impact: "문서 작성 소요시간 평균 25분 단축 및 결재자 만족도 높은 가독성 평가 달성"
    }
  },
  {
    id: 2,
    title: "월간 사내 소통 뉴스레터 & 공지 카드뉴스 시리즈",
    category: "사내 소통 & 콘텐츠 제작",
    period: "2025.08 ~ 2025.09 (6주)",
    tools: ["Adobe Photoshop", "Adobe Illustrator"],
    imageFileName: "project-02.png",
    isImageReady: false,
    summary: "텍스트 위주의 지루했던 사내 공지사항을 직관적인 비주얼 카드뉴스와 뉴스레터로 재가공하여 임직원 공지 확인율을 대폭 개선한 프로젝트입니다.",
    details: {
      background: "복지 혜택 및 중요 인사 제도 공지가 장문의 텍스트로 전달되어 직원들의 확인율이 낮았던 점을 개선하기 위해 모바일 친화적 카드뉴스로 재구성했습니다.",
      myRole: "핵심 요약 카피라이팅, 카드뉴스 레이아웃 디자인(10편 시리즈) 및 에셋 최적화",
      features: [
        "핵심 메시지가 한눈에 들어오는 헤드라인 중심 카드 분할 구조",
        "복잡한 제도 규정을 단계별 일러스트 다이어그램으로 시각화",
        "다양한 사내 모바일 메신저 환경에 최적화된 용량 경량화(WebP/PNG)"
      ],
      impact: "공지 확인율 기존 대비 65% 증가 및 임직원 대상 긍정적 피드백 수집"
    }
  },
  {
    id: 3,
    title: "부서 비전 워크숍 행사 키트 및 브로슈어 패키지",
    category: "행사 지원 & 홍보물 제작",
    period: "2025.06 ~ 2025.07 (3주)",
    tools: ["Adobe Illustrator", "Adobe Photoshop", "컴퓨터그래픽스"],
    imageFileName: "project-03.png",
    isImageReady: false,
    summary: "전사 부서 워크숍 진행을 위해 안내 리플렛, 네임택, 현수막, 프레젠테이션 템플릿까지 일관된 톤앤매너로 제작 및 발주 관리한 실무 지원 프로젝트입니다.",
    details: {
      background: "중요한 대내외 세미나 및 워크숍 행사에서 통일된 브랜딩을 제공하고, 참가자 동선 안내를 돕기 위한 종합 홍보 키트가 필요했습니다.",
      myRole: "3단 리플렛 인쇄 데이터 제작(CMYK), 참가자 명찰 세트 및 슬라이드 템플릿 디자인",
      features: [
        "컴퓨터그래픽스 지식을 활용한 정확한 인쇄 판형(재단선/블리드) 설정 및 감리",
        "참가자 직책과 소속이 멀리서도 잘 식별되는 컬러 코딩 명찰 시스템",
        "발표자를 위한 통일된 16:9 와이드 프레젠테이션 테마 제공"
      ],
      impact: "외주 디자인 비용을 100% 절감하고 당일 행사 참가자 80여 명의 원활한 동선 가이드 완료"
    }
  },
  {
    id: 4,
    title: "웹 표준 반응형 사내 정보 게시판 UI 프로토타입",
    category: "웹디자인 & UI 퍼블리싱",
    period: "2025.04 ~ 2025.05 (4주)",
    tools: ["웹디자인", "HTML5", "CSS3", "Adobe Photoshop"],
    imageFileName: "project-04.png",
    isImageReady: false,
    summary: "웹디자인기능사 자격을 바탕으로 데스크톱과 모바일 태블릿에서 자유롭게 공지 및 일정을 확인할 수 있는 깔끔한 반응형 인트라넷 게시판 UI를 설계했습니다.",
    details: {
      background: "외근이 잦은 영업/사무 담당자들이 모바일에서도 사내 게시판과 공유 문서를 쉽게 열람할 수 있도록 시인성을 극대화한 UI가 요구되었습니다.",
      myRole: "게시판 와이어프레임 설계, 아이콘 에셋 제작, 반응형 HTML/CSS 코딩 100%",
      features: [
        "모바일 터치에 최적화된 넓은 클릭 영역과 간결한 필터 탭 네비게이션",
        "웹 접근성을 고려한 고대비 컬러 배색과 명확한 텍스트 계층 구조",
        "로딩 지연을 최소화한 SVG 아이콘 기반 경량화 설계"
      ],
      impact: "크로스 브라우징 및 다양한 해상도에서 깨짐 없는 완벽한 반응형 뷰 구현"
    }
  },
  {
    id: 5,
    title: "데이터 시각화 기반 경영 지원 월간 실적 보고서",
    category: "데이터 시각화 & 문서 지원",
    period: "2025.02 ~ 2025.03 (3주)",
    tools: ["Excel", "Adobe Illustrator", "Photoshop"],
    imageFileName: "project-05.png",
    isImageReady: false,
    summary: "복잡한 수치와 통계 지표가 나열된 원시 엑셀 데이터를 직관적인 그래프와 인포그래픽 대시보드 형태로 가공하여 경영진의 신속한 의사결정을 지원했습니다.",
    details: {
      background: "월말 결산 및 부서별 목표 달성률을 한눈에 파악하기 어렵다는 경영진 피드백에 맞춰, 핵심 KPI를 1장으로 요약하는 시각화 보고서가 기획되었습니다.",
      myRole: "엑셀 피벗 테이블 데이터 정제, 일러스트레이터 기반 인포그래픽 대시보드 그래픽 제작",
      features: [
        "목표 대비 달성률을 직관적으로 보여주는 도넛/바 게이지 차트 디자인",
        "주요 이슈와 개선 권고사항을 강조하는 하이라이트 콜아웃 박스 구성",
        "A4 1장 출력 및 PDF 배포에 최적화된 인쇄 여백 설계"
      ],
      impact: "경영진 회의 보고 시간 단축 및 시각 자료로서의 높은 완성도 인정"
    }
  }
];

export const hobbyData = [
  {
    id: "hobby-1",
    title: "다이어리 & 루틴 아카이빙",
    category: "계획 & 꼼꼼함",
    tag: "Organization",
    description: "매일의 일정과 목표를 기록하고 체계적으로 체크리스트를 관리하며 꼼꼼한 마감 엄수 습관을 기릅니다.",
    imageFileName: "hobby-01.png"
  },
  {
    id: "hobby-2",
    title: "타이포그래피 & 전시회 관람",
    category: "디자인 감각",
    tag: "Inspiration",
    description: "다양한 시각 예술 전시와 브랜드 편집숍을 방문하며 실무 문서와 웹에 적용할 수 있는 레이아웃 안목을 넓힙니다.",
    imageFileName: "hobby-02.png"
  },
  {
    id: "hobby-3",
    title: "디지털 사진 보정 & 앨범북 제작",
    category: "집중력 & 툴 숙련",
    tag: "Creativity",
    description: "일상의 순간들을 촬영하고 포토샵으로 색감을 세밀하게 보정하여 직접 앨범북을 디자인하고 인쇄물로 소장합니다.",
    imageFileName: "hobby-03.png"
  }
];

export const sitemapLinks = [
  { name: "Intro", href: "#intro", desc: "시작 화면 & 3D 인터랙션" },
  { name: "Profile", href: "#profile", desc: "인적사항, 자격증, 보유 스킬" },
  { name: "Projects", href: "#project", desc: "실무 가로 배너 프로젝트 (5선)" },
  { name: "Hobby", href: "#hobby", desc: "관심사 및 루틴 아카이브" },
  { name: "Contact", href: "#contact", desc: "연락처 및 이력서 다운로드" },
];
