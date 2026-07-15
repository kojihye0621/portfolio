import { SiNextdotjs, SiReact, SiNestjs, SiTailwindcss, SiMysql, SiJavascript, SiGit, SiPhp, SiJquery,  SiGoogle } from 'react-icons/si';

export default function TypeA() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans leading-relaxed">
      {/* Header */}
      <header className="bg-gray-50 border-b border-gray-200 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">고지혜 · Web Developer</h1>
          <div className="text-gray-600 flex flex-wrap justify-center gap-4 text-sm">
            <span>🎂 2001.06.21 (24세)</span>
            <span>📞 REMOVED</span>
            <span>✉️ kojihye0621@gmail.com</span>
            <span>📍 서울특별시 동작구</span>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16 space-y-24">
        
        {/* 1. 소개 (About Me) */}
        <section id="about">
          <h2 className="text-2xl font-bold mb-6 border-b-2 border-gray-900 pb-2 inline-block">About Me</h2>
          <div className="text-lg text-gray-700 space-y-4 bg-gray-50 p-8 rounded-2xl">
            <p><strong>협업을 통해 더 나은 코드를 완성하는 개발자 고지혜입니다.</strong></p>
            <p>빠르게 변하는 환경에서도 유연하게 대응하고 실행력 있게 문제를 해결합니다. 문제 해결 과정에서 상호 보완적인 소통을 통해 의견을 조율하고 합리적인 결정을 이끌어내는 커뮤니케이션이 강점입니다. 요구사항에 제약이 있을 때는 적극적으로 기술적인 대안을 제시하여 프로젝트의 추진력을 유지합니다.</p>
            <p>개발 전 과정에서 기획자, 팀원과 긴밀히 협업하여 최적의 방향을 도출하며, 단순 구현을 넘어 사용자 경험과 서비스 안정성을 함께 고민하는 개발자로 성장하고 있습니다.</p>
          </div>
        </section>

        {/* 2. 기술 (Skills) */}
        <section id="skills">
          <h2 className="text-2xl font-bold mb-6 border-b-2 border-gray-900 pb-2 inline-block">Skill</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4 text-gray-800">Backend & DB</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 bg-gray-100 rounded-lg text-sm font-medium border flex items-center gap-2"><SiPhp /> PHP</span>
                <span className="px-3 py-1.5 bg-gray-100 rounded-lg text-sm font-medium border flex items-center gap-2">Node.js</span>
                <span className="px-3 py-1.5 bg-gray-100 rounded-lg text-sm font-medium border flex items-center gap-2"><SiNestjs className="text-red-600"/> Nest.js</span>
                <span className="px-3 py-1.5 bg-gray-100 rounded-lg text-sm font-medium border flex items-center gap-2"><SiMysql className="text-blue-600"/> MySQL</span>
                <span className="px-3 py-1.5 bg-gray-100 rounded-lg text-sm font-medium border flex items-center gap-2">TypeORM</span>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-gray-800">Frontend & Tools</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 bg-gray-100 rounded-lg text-sm font-medium border flex items-center gap-2"><SiJavascript className="text-yellow-500"/> JavaScript</span>
                <span className="px-3 py-1.5 bg-gray-100 rounded-lg text-sm font-medium border flex items-center gap-2"><SiNextdotjs /> Next.js</span>
                <span className="px-3 py-1.5 bg-gray-100 rounded-lg text-sm font-medium border flex items-center gap-2"><SiJquery className="text-blue-800"/> jQuery</span>
                <span className="px-3 py-1.5 bg-gray-100 rounded-lg text-sm font-medium border flex items-center gap-2"><SiTailwindcss className="text-teal-500"/> Tailwind CSS</span>
                <span className="px-3 py-1.5 bg-gray-100 rounded-lg text-sm font-medium border flex items-center gap-2"><SiGit className="text-orange-600"/> Git</span>
                <span className="px-3 py-1.5 bg-gray-100 rounded-lg text-sm font-medium border flex items-center gap-2">tortoise SVN</span>
              </div>
            </div>
            <div className="md:col-span-2">
              <h3 className="text-lg font-bold mb-4 text-gray-800">Work Method</h3>
              <div className="p-5 bg-blue-50 rounded-xl border border-blue-100 text-sm text-gray-700">
                <p className="font-bold text-blue-800 mb-2 flex items-center gap-2">
                  {/* <SiOpenai /> <SiGoogle /> AI 협업 (Vibe Coding) */}
                </p>
                ChatGPT와 Google Gemini를 병렬로 활용하여 [로직 파악 및 가이드라인 설계], [코드 개발], [검증 및 리스크 관리]의 3단계 흐름으로 개발을 진행하여 코드 품질과 구현 속도를 극대화합니다.
              </div>
            </div>
          </div>
        </section>

        {/* 3. 경력 및 학력 (Career & Education) */}
        <section id="career">
          <h2 className="text-2xl font-bold mb-6 border-b-2 border-gray-900 pb-2 inline-block">Career & Education</h2>
          <div className="space-y-12">
            {/* Career */}
            <div className="relative pl-6 border-l-2 border-gray-200">
              <div className="absolute w-3 h-3 bg-blue-600 rounded-full -left-[7px] top-1.5"></div>
              <h3 className="text-xl font-bold">넥스트솔루션 (구 후이즈글로벌네트워크)</h3>
              <p className="text-blue-600 font-medium mb-1">개발팀 (사원)</p>
              <p className="text-gray-500 text-sm mb-4">2023.02 ~ 2025.12</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
                <li>PHP 기반의 사내 자체 쇼핑몰·홈페이지 솔루션 유지보수 진행</li>
                <li>레거시 시스템 중 성능 개선이 필요한 부분 쿼리 튜닝, 테이블 구조 변경</li>
                <li>현업 부서 요청 및 오류 사항에 대한 데이터, 로그 분석 및 조사 (DB, API 통신 등)</li>
                <li>외부 시스템 (Kakao, KCP, TossPay, KG Inicis, Naver 등) 과의 API 연동 및 유지보수</li>
                <li>신규 프로젝트, 신기능 개발 시 고객·현업 요구사항 확인 후 DB 및 프로세스 설계</li>
              </ul>
            </div>

            {/* Education */}
            <div className="relative pl-6 border-l-2 border-gray-200 mt-8">
              <div className="absolute w-3 h-3 bg-gray-400 rounded-full -left-[7px] top-1.5"></div>
              <h3 className="text-xl font-bold">유한대학교</h3>
              <p className="text-gray-600 font-medium mb-1">컴퓨터소프트웨어공학과 (졸업)</p>
              <p className="text-gray-500 text-sm mb-6">2020.03 ~ 2023.02</p>

              <h3 className="text-xl font-bold">수도여자고등학교</h3>
              <p className="text-gray-600 font-medium mb-1">이공계열 (졸업)</p>
              <p className="text-gray-500 text-sm">2017.03 ~ 2020.01</p>
            </div>
          </div>
        </section>

        {/* 4. 프로젝트 (Project) */}
        <section id="project">
          <h2 className="text-2xl font-bold mb-6 border-b-2 border-gray-900 pb-2 inline-block">Project</h2>
          <div className="space-y-8">
            
            {/* Bizking */}
            <div className="p-6 border border-gray-200 rounded-2xl hover:shadow-md transition">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-gray-900">Node 비즈킹 프로젝트</h3>
                <span className="text-sm text-gray-500">2025.06 - 2025.10</span>
              </div>
              <p className="text-gray-600 mb-4">부동산 네트워크 플랫폼</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1.5 text-sm mb-4">
                <li>매물 등록 2단계 입력 구조 구현 및 유효성 검사 적용</li>
                <li>Nest.js 기반 RESTful API 설계 및 TypeORM + MySQL을 이용한 CRUD 개발</li>
                <li>필터 조건에 따른 비동기 데이터 로딩</li>
                <li>kakao, naver, google, apple SNS 로그인 개발</li>
              </ul>
              <div className="bg-gray-50 p-4 rounded-lg text-sm text-gray-600 mt-4">
                <p className="font-bold mb-1">💡 프로젝트 회고</p>
                서버 사이드, 클라이언트 사이드 로직과 데이터 흐름에 대한 이해를 높였으며, 구조적인 사고와 협업 시 명확한 코드 작성의 중요성을 체감했습니다.
              </div>
            </div>

            {/* PHP Mall */}
            <div className="p-6 border border-gray-200 rounded-2xl hover:shadow-md transition">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-gray-900">PHP 쇼핑몰 솔루션 운영관리</h3>
                <span className="text-sm text-gray-500">2023.02 - 2025.12</span>
              </div>
              <p className="text-gray-600 mb-4">PHP 기반의 자체 쇼핑몰 솔루션 유지보수</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1.5 text-sm">
                <li>로그 분석을 통한 장애 원인 파악 및 대응 로직 개선</li>
                <li>레거시 시스템 쿼리 속도 개선 및 쿼리 튜닝</li>
                <li>운영 중 발생한 기능 이슈 분석 및 핫픽스 대응</li>
              </ul>
            </div>

            {/* next.kr */}
            <div className="p-6 border border-gray-200 rounded-2xl hover:shadow-md transition">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-gray-900">next.kr 사이트 리뉴얼</h3>
                <span className="text-sm text-gray-500">2025.01 - 2025.06</span>
              </div>
              <p className="text-gray-600 mb-4">사내 공식 사이트 리뉴얼 및 통합 플랫폼 구축</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1.5 text-sm">
                <li>분산되어 있던 결제 내역 및 솔루션 구매 정보를 통합 조회할 수 있는 시스템 구현</li>
                <li>사용자 인증 시스템 신규 개발 및 레거시 페이지 정리로 유지보수성 향상</li>
              </ul>
            </div>

            {/* Payment Module */}
            <div className="p-6 border border-gray-200 rounded-2xl hover:shadow-md transition">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-gray-900">내부 결제 모듈 변경</h3>
                <span className="text-sm text-gray-500">2025.01 - 2025.02</span>
              </div>
              <p className="text-gray-600 mb-4">넥스트 솔루션 및 사이트 내 결제 기능 구현</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1.5 text-sm mb-4">
                <li>KCP 결제 API 연동 (신용카드/계좌이체/가상계좌)</li>
                <li>CURL 기반 검증 요청 처리 및 결제 내역 DB 저장 시스템 구축</li>
              </ul>
              <div className="bg-gray-50 p-4 rounded-lg text-sm text-gray-600 mt-4">
                <p className="font-bold mb-1">💡 프로젝트 회고</p>
                PG사와의 직접 연동을 통해 결제 수수료 절감 효과를 얻었으며, 데이터 정합성의 중요성과 표준화된 로직 설계의 필요성을 체감했습니다.
              </div>
            </div>

            {/* AK7Cabinet */}
            <div className="p-6 border border-gray-200 rounded-2xl hover:shadow-md transition">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-gray-900">AK7Cabinet 프로젝트</h3>
                <span className="text-sm text-gray-500">2024.04 - 2025.01</span>
              </div>
              <p className="text-gray-600 mb-4">제주항공 사내 그룹웨어 결재 및 포인트 결제가 구축된 폐쇄형 쇼핑몰</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1.5 text-sm">
                <li>PHP 5.3 → 8.3 버전 업데이트 및 인코딩 문제 해결</li>
                <li>포인트 승인/지급/차감 기능 개발 및 크론탭 자동 차감 처리 구현</li>
                <li>카카오 알림톡/메일 알림 기능 및 특정 상황 분기 처리 로직 구현</li>
              </ul>
            </div>

            {/* AKMRO & Homepages */}
            <div className="p-6 border border-gray-200 rounded-2xl hover:shadow-md transition">
              <h3 className="text-xl font-bold text-gray-900 mb-4">기타 프로젝트 (2024.03 - 2025.12)</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
                <li><strong>AKMRO 솔루션 유지보수:</strong> 메일 시스템 전송서버 전환 (Oracle → MySQL) 및 쿼리 검증</li>
                <li><strong>종근당 상품 홍보 사이트:</strong> Kakao Map API 연동 및 위치 검색 기능 구현</li>
                <li><strong>이화여대 품질선도센터 아카이브 사이트:</strong> EChart API 연동 및 비동기 검색 모듈 고도화</li>
                <li><strong>법무부 교정본부 사이트:</strong> 설문조사 페이지 및 결과 별 사용자 분리 기능 구현</li>
              </ul>
            </div>

          </div>
        </section>

      </main>
    </div>
  );
}