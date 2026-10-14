import React from 'react';
import Header from './components/Header';
import IntroSection from './components/IntroSection';
import ProfileSection from './components/ProfileSection';
import ProjectSection from './components/ProjectSection';
import HobbySection from './components/HobbySection';
import SitemapFooter from './components/SitemapFooter';

export default function App() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-[#111827] flex flex-col font-sans selection:bg-neutral-900 selection:text-white">
      {/* 1. 상단 내비게이션 바 */}
      <Header />

      {/* 2. 메인 컨텐츠 영역 (요청 순서: intro -> profile -> project -> hobby -> sitemap) */}
      <main className="flex-1 w-full">
        {/* Intro Section: Spline 3D iframe + '다희의 포트폴리오' */}
        <IntroSection />

        {/* Profile Section: 내 소개, 자격증 4종, 스킬 */}
        <ProfileSection />

        {/* Project Section: 5개 가로 배너 세로 나열, 플레이스홀더, 모달 팝업, 스켈레톤 */}
        <ProjectSection />

        {/* Hobby Section: 일상과 루틴 아카이브 */}
        <HobbySection />
      </main>

      {/* 3. Sitemap & Footer: 이력서 PDF 다운로드 + 사이트맵 */}
      <SitemapFooter />
    </div>
  );
}
