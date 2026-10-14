import React, { useState } from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';

export default function IntroSection() {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  return (
    <section
      id="intro"
      className="relative w-full h-[95vh] min-h-[640px] flex items-center justify-center overflow-hidden bg-neutral-950 text-white"
    >
      {/* 1. Spline 3D Iframe 배경 레이어 */}
      <div className="absolute inset-0 w-full h-full z-0">
        {!iframeLoaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-neutral-950 text-neutral-400 gap-3">
            <div className="w-8 h-8 border-2 border-neutral-600 border-t-white rounded-full animate-spin" />
            <span className="text-xs tracking-wider uppercase">Loading 3D Experience...</span>
          </div>
        )}
        <iframe
          src="https://my.spline.design/frostedglasstextureicon-gVEESd6060QHEZHdnzfMx5bj/"
          frameBorder="0"
          width="100%"
          height="100%"
          onLoad={() => setIframeLoaded(true)}
          className={`w-full h-full transition-opacity duration-700 ${
            iframeLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          title="Frosted Glass 3D Spline"
        />
      </div>

      {/* 2. 중앙 타이틀 오버레이 (포인터 이벤트 통과 처리하여 3D 인터랙션도 가능하게 함) */}
      <div className="relative z-10 pointer-events-none flex flex-col items-center text-center px-4 max-w-3xl mx-auto">
        {/* 상단 뱃지 */}
        <div className="pointer-events-auto inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-medium mb-6 shadow-lg animate-fade-in">
          <Sparkles className="w-3.5 h-3.5 text-blue-300" />
          <span>사무직 &amp; 시각화 실무 포트폴리오</span>
        </div>

        {/* 메인 타이틀: 다희의 포트폴리오 */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-4 drop-shadow-md">
          다희의 포트폴리오
        </h1>

        {/* 감각적인 서브 카피 */}
        <p className="text-base sm:text-lg text-neutral-300 font-normal max-w-xl leading-relaxed drop-shadow mb-8">
          정확한 문서 관리와 시각화 역량을 겸비한 사무 인재 <span className="text-white font-semibold">변다희</span>입니다.
        </p>

        {/* 액션 버튼 */}
        <div className="pointer-events-auto flex items-center gap-3">
          <a
            href="#profile"
            className="px-6 py-3 rounded-full bg-white text-neutral-950 font-semibold text-sm hover:bg-neutral-100 transition-all shadow-lg hover:scale-105 active:scale-95"
          >
            프로필 확인하기
          </a>
          <a
            href="#project"
            className="px-6 py-3 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white font-medium text-sm hover:bg-white/25 transition-all"
          >
            프로젝트 보기
          </a>
        </div>
      </div>

      {/* 3. 하단 스크롤 인디케이터 */}
      <a
        href="#profile"
        className="absolute bottom-8 z-10 flex flex-col items-center gap-2 text-neutral-400 hover:text-white transition-colors cursor-pointer group"
      >
        <span className="text-[11px] uppercase tracking-widest font-medium opacity-80 group-hover:opacity-100">
          Scroll Down
        </span>
        <div className="w-8 h-8 rounded-full border border-white/20 bg-white/10 backdrop-blur-xs flex items-center justify-center animate-bounce">
          <ArrowDown className="w-4 h-4 text-white" />
        </div>
      </a>
    </section>
  );
}
