import React from 'react';
import { Award, User, Briefcase, Calendar, CheckCircle2, Layers, Cpu, PenTool, Palette, Globe } from 'lucide-react';
import { profileData } from '../data/portfolioData';

export default function ProfileSection() {
  const getSkillIcon = (name) => {
    if (name.includes('Illustrator')) return <PenTool className="w-5 h-5 text-amber-600" />;
    if (name.includes('Photoshop')) return <Palette className="w-5 h-5 text-blue-600" />;
    if (name.includes('Web')) return <Globe className="w-5 h-5 text-indigo-600" />;
    return <Briefcase className="w-5 h-5 text-emerald-600" />;
  };

  return (
    <section id="profile" className="py-24 px-6 max-w-6xl mx-auto">
      {/* 섹션 헤더 */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs uppercase font-bold tracking-widest text-neutral-500 block mb-2">
          Profile &amp; Competencies
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight">
          인사 담당자를 위한 프로필 요약
        </h2>
        <p className="text-neutral-500 text-sm sm:text-base mt-3 leading-relaxed">
          정확한 실무 처리와 시각화 역량을 바탕으로 업무 효율을 극대화하는 사무직 인재 변다희입니다.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* 1. 기본 인적사항 & 내 소개 (좌측 5컬럼) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* 인적사항 카드 */}
          <div className="bg-white rounded-3xl p-8 border border-neutral-200/80 shadow-xs hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-neutral-100">
              <div className="w-16 h-16 rounded-2xl bg-neutral-900 text-white flex items-center justify-center font-bold text-2xl shadow-sm">
                변
              </div>
              <div>
                <div className="inline-block px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 font-semibold text-xs mb-1">
                  희망 직무: {profileData.desiredJob.split('(')[0].trim()}
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 flex items-baseline gap-2">
                  {profileData.name}
                  <span className="text-sm font-normal text-neutral-400">
                    {profileData.englishName}
                  </span>
                </h3>
              </div>
            </div>

            {/* 인적사항 리스트 */}
            <div className="space-y-3.5 text-sm">
              <div className="flex items-center justify-between py-1.5 border-b border-neutral-50">
                <span className="text-neutral-500 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-neutral-400" /> 생년월일
                </span>
                <span className="font-semibold text-neutral-800">{profileData.birthDate}</span>
              </div>
              <div className="flex items-center justify-between py-1.5 border-b border-neutral-50">
                <span className="text-neutral-500 flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-neutral-400" /> 희망 직무
                </span>
                <span className="font-semibold text-neutral-800">사무직 (사무행정 / 총무)</span>
              </div>
              <div className="flex items-center justify-between py-1.5">
                <span className="text-neutral-500 flex items-center gap-2">
                  <User className="w-4 h-4 text-neutral-400" /> 핵심 강점
                </span>
                <span className="font-semibold text-blue-600">문서 표준화 &amp; 디자인 융합</span>
              </div>
            </div>
          </div>

          {/* 내 소개 카드 */}
          <div className="bg-white rounded-3xl p-8 border border-neutral-200/80 shadow-xs hover:shadow-md transition-shadow">
            <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-400 mb-4 flex items-center gap-2">
              <Layers className="w-4 h-4 text-neutral-600" /> 내 소개 (About Me)
            </h4>
            <div className="space-y-3 text-sm text-neutral-600 leading-relaxed">
              {profileData.fullIntro.map((text, idx) => (
                <p key={idx} className="relative pl-3 border-l-2 border-neutral-300">
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* 2. 자격증 & 스킬 (우측 7컬럼) */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          {/* 자격증 섹션 (4종) */}
          <div className="bg-white rounded-3xl p-8 border border-neutral-200/80 shadow-xs hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-6">
              <h4 className="text-base font-bold text-neutral-900 flex items-center gap-2">
                <Award className="w-5 h-5 text-blue-600" /> 보유 자격증 (Certifications)
              </h4>
              <span className="text-xs px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-600 font-medium">
                총 4종 보유
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {profileData.certificates.map((cert) => (
                <div
                  key={cert.id}
                  className="p-4 rounded-2xl bg-neutral-50/80 border border-neutral-200/60 hover:bg-neutral-100/70 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[11px] font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">
                        {cert.level}
                      </span>
                      <span className="text-[11px] text-neutral-400">{cert.issuer}</span>
                    </div>
                    <h5 className="font-bold text-sm text-neutral-900 mb-1">{cert.name}</h5>
                    <p className="text-xs text-neutral-500 leading-snug">{cert.description}</p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-neutral-200/40 flex items-center gap-1.5 text-[11px] text-emerald-600 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" /> 취득 완료
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 스킬 (일러스트, 포토샵, 웹디자인, 사무행정) */}
          <div className="bg-white rounded-3xl p-8 border border-neutral-200/80 shadow-xs hover:shadow-md transition-shadow">
            <h4 className="text-base font-bold text-neutral-900 mb-6 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-blue-600" /> 보유 스킬 &amp; 실무 역량 (Skills)
            </h4>

            <div className="space-y-5">
              {profileData.skills.map((skill) => (
                <div key={skill.name} className="space-y-1.5">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      {getSkillIcon(skill.name)}
                      <span className="font-semibold text-neutral-800">{skill.name}</span>
                    </div>
                    <span className="text-xs font-bold text-neutral-500">
                      {skill.percentage}%
                    </span>
                  </div>
                  {/* 프로그레스 바 */}
                  <div className="w-full h-2 rounded-full bg-neutral-100 overflow-hidden">
                    <div
                      className="h-full bg-neutral-900 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.percentage}%` }}
                    />
                  </div>
                  <p className="text-xs text-neutral-500 pl-7">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
