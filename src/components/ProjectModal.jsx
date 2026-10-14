import React, { useEffect, useState } from 'react';
import { X, Calendar, Wrench, CheckCircle, ArrowRight, Folder, FileText, Layers } from 'lucide-react';
import ProjectThumbnail from './ProjectThumbnail';

export default function ProjectModal({ project, isOpen, onClose }) {
  const [loading, setLoading] = useState(true);

  // 모달이 열릴 때 짧은 스켈레톤 UI를 시뮬레이션하여 부드러운 로딩 경험 제공
  useEffect(() => {
    if (isOpen) {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
      }, 350);
      return () => clearTimeout(timer);
    }
  }, [isOpen, project]);

  // Esc 키를 누르면 모달 닫기
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* 배경 오버레이 (클릭 시 닫힘) */}
      <div
        className="fixed inset-0 bg-neutral-950/70 backdrop-blur-md transition-opacity animate-fade-in"
        onClick={onClose}
      />

      {/* 모달 컨테이너 */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl shadow-2xl border border-neutral-200 overflow-hidden flex flex-col z-10 animate-fade-in">
        {/* 모달 상단 헤더 */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-100 bg-neutral-50/50">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
            <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
              {project.category}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100 transition-colors"
            aria-label="닫기"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 모달 스크롤 바디 */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
          {loading ? (
            /* 스켈레톤 UI (요구사항: 로딩은 스켈레톤 ui로 구성) */
            <div className="space-y-6">
              <div className="h-8 w-2/3 skeleton-shimmer rounded-xl" />
              <div className="h-4 w-1/3 skeleton-shimmer rounded-lg" />
              <div className="h-64 w-full skeleton-shimmer rounded-2xl" />
              <div className="space-y-3">
                <div className="h-4 w-full skeleton-shimmer rounded-md" />
                <div className="h-4 w-5/6 skeleton-shimmer rounded-md" />
                <div className="h-4 w-4/6 skeleton-shimmer rounded-md" />
              </div>
            </div>
          ) : (
            <>
              {/* 프로젝트 타이틀 및 메타정보 */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-3 tracking-tight">
                  {project.title}
                </h3>
                <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-500">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-neutral-400" />
                    <span>{project.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Wrench className="w-4 h-4 text-neutral-400" />
                    <div className="flex gap-1.5">
                      {project.tools.map((t) => (
                        <span key={t} className="px-2 py-0.5 rounded-md bg-neutral-100 text-neutral-700 font-medium">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* 이미지 / 플레이스홀더 영역 */}
              <div className="w-full h-72 sm:h-80 rounded-2xl overflow-hidden border border-neutral-200">
                <ProjectThumbnail
                  imageFileName={project.imageFileName}
                  isImageReady={project.isImageReady}
                  title={project.title}
                  category={project.category}
                />
              </div>

              {/* 요약 박스 */}
              <div className="p-5 rounded-2xl bg-blue-50/60 border border-blue-100 text-blue-900 text-sm leading-relaxed font-medium">
                {project.summary}
              </div>

              {/* 상세 내용 그리드 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                {/* 1. 기획 배경 및 문제 정의 */}
                <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200/70">
                  <h4 className="font-bold text-neutral-900 mb-2 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-neutral-600" /> 기획 배경 및 문제 정의
                  </h4>
                  <p className="text-neutral-600 leading-relaxed">
                    {project.details.background}
                  </p>
                </div>

                {/* 2. 담당 역할 및 기여도 */}
                <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200/70">
                  <h4 className="font-bold text-neutral-900 mb-2 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-neutral-600" /> 담당 역할 및 기여도
                  </h4>
                  <p className="text-neutral-600 leading-relaxed font-medium text-neutral-800">
                    {project.details.myRole}
                  </p>
                </div>
              </div>

              {/* 주요 수행 내역 */}
              <div>
                <h4 className="font-bold text-neutral-900 text-base mb-3 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" /> 주요 구현 및 수행 내역
                </h4>
                <ul className="space-y-2">
                  {project.details.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-neutral-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-2 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 실무 성과 (Impact) */}
              <div className="p-5 rounded-2xl bg-neutral-900 text-white flex items-center justify-between">
                <div>
                  <span className="text-xs uppercase tracking-wider text-neutral-400 font-bold block mb-1">
                    Key Achievement / 기대 효과
                  </span>
                  <p className="text-sm sm:text-base font-medium">
                    {project.details.impact}
                  </p>
                </div>
              </div>
            </>
          )}
        </div>

        {/* 모달 하단 푸터 */}
        <div className="px-6 py-4 border-t border-neutral-100 bg-neutral-50/50 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-full bg-neutral-900 text-white text-xs font-semibold hover:bg-neutral-800 transition-colors"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}
