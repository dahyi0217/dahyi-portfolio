import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Calendar, Wrench, Layers } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import ProjectThumbnail from './ProjectThumbnail';
import ProjectModal from './ProjectModal';

export default function ProjectSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // 초기 스켈레톤 UI 시뮬레이션
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="project" className="py-24 px-6 max-w-6xl mx-auto">
      {/* 섹션 타이틀 */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-6 border-b border-neutral-200">
        <div>
          <span className="text-xs uppercase font-bold tracking-widest text-neutral-500 block mb-2">
            Selected Works
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight">
            실무 프로젝트 (5선)
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-neutral-500 mt-2 sm:mt-0 font-medium">
          카드를 클릭하면 상세 기획 배경 및 성과를 확인할 수 있습니다
        </p>
      </div>

      {/* 가로 배너 세로 나열 리스트 (Vertical stack of horizontal banners) */}
      <div className="flex flex-col gap-8">
        {isLoading
          ? /* 1. 로딩 시 스켈레톤 UI */
            Array.from({ length: 3 }).map((_, idx) => (
              <div
                key={idx}
                className="w-full bg-white rounded-3xl p-6 border border-neutral-200/80 shadow-xs grid grid-cols-1 md:grid-cols-12 gap-6"
              >
                <div className="md:col-span-5 h-56 skeleton-shimmer rounded-2xl" />
                <div className="md:col-span-7 flex flex-col justify-between py-2 space-y-4">
                  <div className="space-y-3">
                    <div className="h-5 w-1/4 skeleton-shimmer rounded-md" />
                    <div className="h-7 w-3/4 skeleton-shimmer rounded-lg" />
                    <div className="h-4 w-full skeleton-shimmer rounded-md" />
                    <div className="h-4 w-4/5 skeleton-shimmer rounded-md" />
                  </div>
                  <div className="flex gap-2">
                    <div className="h-6 w-20 skeleton-shimmer rounded-md" />
                    <div className="h-6 w-20 skeleton-shimmer rounded-md" />
                  </div>
                </div>
              </div>
            ))
          : /* 2. 프로젝트 동적 렌더링 (projectsData 기반) */
            projectsData.map((project, index) => (
              <div
                key={project.id}
                onClick={() => handleOpenModal(project)}
                className="group cursor-pointer bg-white rounded-3xl p-6 sm:p-7 border border-neutral-200/90 shadow-xs hover:shadow-xl hover:border-neutral-400/80 transition-all duration-300"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-center">
                  {/* 배너 왼쪽: 미리보기 이미지 (플레이스홀더 + 파일명 표기) */}
                  <div className="md:col-span-5 w-full h-56 sm:h-64 rounded-2xl overflow-hidden">
                    <ProjectThumbnail
                      imageFileName={project.imageFileName}
                      isImageReady={project.isImageReady}
                      title={project.title}
                      category={project.category}
                    />
                  </div>

                  {/* 배너 오른쪽: 프로젝트 설명 및 메타 정보 */}
                  <div className="md:col-span-7 flex flex-col justify-between h-full py-1">
                    <div>
                      {/* 프로젝트 번호 및 카테고리 */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-bold text-neutral-400">
                            0{index + 1}
                          </span>
                          <span className="text-neutral-300">/</span>
                          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-neutral-100 text-neutral-700">
                            {project.category}
                          </span>
                        </div>
                        <span className="text-xs font-mono text-neutral-400 flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {project.period.split('(')[0].trim()}
                        </span>
                      </div>

                      {/* 제목 */}
                      <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-3 group-hover:text-blue-600 transition-colors tracking-tight flex items-start justify-between gap-4">
                        <span>{project.title}</span>
                        <div className="w-8 h-8 rounded-full bg-neutral-100 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center shrink-0 transition-all">
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </h3>

                      {/* 요약 내용 */}
                      <p className="text-sm text-neutral-600 leading-relaxed mb-6 line-clamp-2 sm:line-clamp-3">
                        {project.summary}
                      </p>
                    </div>

                    {/* 하단 툴 태그 및 상세확인 링크 */}
                    <div className="pt-4 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-3">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <Wrench className="w-3.5 h-3.5 text-neutral-400 mr-1" />
                        {project.tools.map((tool) => (
                          <span
                            key={tool}
                            className="text-xs px-2.5 py-1 rounded-md bg-neutral-50 text-neutral-600 border border-neutral-200/60 font-medium"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>

                      <span className="text-xs font-semibold text-neutral-900 group-hover:underline flex items-center gap-1">
                        상세 내용 팝업 확인 →
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
      </div>

      {/* 프로젝트 상세 모달 */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
}
