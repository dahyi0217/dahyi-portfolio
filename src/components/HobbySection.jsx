import React from 'react';
import { Sparkles, Heart, Compass, BookOpen, Camera, FileCheck } from 'lucide-react';
import { hobbyData } from '../data/portfolioData';

export default function HobbySection() {
  const getHobbyIcon = (idx) => {
    if (idx === 0) return <FileCheck className="w-5 h-5 text-indigo-500" />;
    if (idx === 1) return <Compass className="w-5 h-5 text-amber-500" />;
    return <Camera className="w-5 h-5 text-emerald-500" />;
  };

  return (
    <section id="hobby" className="py-24 px-6 max-w-6xl mx-auto">
      {/* 섹션 헤더 */}
      <div className="text-center max-w-xl mx-auto mb-16">
        <span className="text-xs uppercase font-bold tracking-widest text-neutral-500 block mb-2">
          Interest &amp; Routine
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight">
          취미와 일상의 루틴
        </h2>
        <p className="text-neutral-500 text-sm sm:text-base mt-3 leading-relaxed">
          일상의 계획성과 시각적 관찰력은 꼼꼼하고 완성도 높은 업무를 수행하는 밑거름이 됩니다.
        </p>
      </div>

      {/* 3컬럼 카드 그리드 (시안 레퍼런스 스타일) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {hobbyData.map((hobby, idx) => (
          <div
            key={hobby.id}
            className="group bg-white rounded-3xl p-6 border border-neutral-200/80 shadow-xs hover:shadow-xl hover:border-neutral-300 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* 카드 상단 이미지 플레이스홀더 */}
              <div className="w-full h-44 rounded-2xl bg-neutral-100 border border-neutral-200/70 mb-6 flex flex-col items-center justify-center p-4 text-center group-hover:bg-neutral-50 transition-colors relative overflow-hidden">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-xs border border-neutral-200 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  {getHobbyIcon(idx)}
                </div>
                <span className="text-xs font-mono text-neutral-500 font-medium">
                  {hobby.imageFileName}
                </span>
                <span className="text-[10px] text-neutral-400 mt-0.5">
                  📁 public/images/hobby/
                </span>
                <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded text-[9px] uppercase font-bold tracking-wider bg-white/80 text-neutral-500 border border-neutral-200">
                  Placeholder
                </div>
              </div>

              {/* 카테고리 태그 */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full">
                  {hobby.category}
                </span>
                <span className="text-xs font-mono text-neutral-400">
                  #{hobby.tag}
                </span>
              </div>

              {/* 타이틀 */}
              <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-blue-600 transition-colors">
                {hobby.title}
              </h3>

              {/* 설명 */}
              <p className="text-sm text-neutral-600 leading-relaxed">
                {hobby.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center gap-1.5 text-xs text-neutral-400 font-medium">
              <Heart className="w-3.5 h-3.5 text-rose-400" />
              <span>지속적인 자기계발 및 집중력 유지</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
