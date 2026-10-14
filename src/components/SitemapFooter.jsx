import React, { useState } from 'react';
import { FileDown, Mail, Phone, MapPin, ArrowUp, CheckCircle, ExternalLink } from 'lucide-react';
import { profileData, sitemapLinks } from '../data/portfolioData';

export default function SitemapFooter() {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownloadResume = () => {
    // 1. 가상 이력서 다운로드 트리거 또는 브라우저 창 열기
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 4000);

    // 실제 다운로드 링크 시도
    const link = document.createElement('a');
    link.href = '/docs/resume.pdf';
    link.download = `이력서_변다희(사무직).pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="sitemap" className="bg-neutral-900 text-white pt-20 pb-12 mt-16 border-t border-neutral-800">
      <div className="max-w-6xl mx-auto px-6">
        {/* 상단 CTA 배너: Resume PDF 다운로드 영역 */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-neutral-800 via-neutral-850 to-neutral-800 p-8 sm:p-12 border border-neutral-700/60 shadow-2xl mb-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center md:text-left">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 font-semibold text-xs mb-3 border border-blue-500/30">
              Official Resume &amp; Portfolio
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
              변다희 님의 이력서(PDF)를 다운로드하세요
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              사무직무 적합성과 자격증(GTQ, 컴퓨터그래픽스, 웹디자인기능사) 및 상세 프로젝트 성과가 정리된 공식 이력서 파일입니다.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <button
              onClick={handleDownloadResume}
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-white text-neutral-950 font-bold text-sm hover:bg-neutral-100 transition-all shadow-xl hover:scale-105 active:scale-95 cursor-pointer"
            >
              <FileDown className="w-5 h-5 text-blue-600" />
              <span>Resume PDF 다운로드</span>
            </button>
          </div>
        </div>

        {downloadSuccess && (
          <div className="mb-8 p-4 rounded-2xl bg-emerald-950/80 border border-emerald-500/50 text-emerald-200 text-sm flex items-center justify-between animate-fade-in">
            <div className="flex items-center gap-2.5">
              <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>
                이력서 다운로드를 요청했습니다. (실제 파일은 <code className="bg-black/40 px-2 py-0.5 rounded font-mono text-xs">public/docs/resume.pdf</code> 위치에 저장해두시면 바로 교체 다운로드됩니다)
              </span>
            </div>
            <button
              onClick={() => setDownloadSuccess(false)}
              className="text-xs text-neutral-400 hover:text-white"
            >
              닫기
            </button>
          </div>
        )}

        {/* 사이트맵 그리드 & 인포 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 py-12 border-t border-neutral-800">
          {/* 1. 소개 & 연락처 */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white text-neutral-900 flex items-center justify-center font-bold text-base">
                D
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">변다희 (Dahee Byun)</h4>
                <p className="text-xs text-neutral-400">사무직 지원자 • 2007년 2월 17일생</p>
              </div>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
              체계적인 사무 행정과 디자인/웹 감각의 조화로움. 신뢰받는 일잘러로서 팀의 든든한 서포터가 되겠습니다.
            </p>
            <div className="pt-2 space-y-2 text-xs text-neutral-300">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-neutral-500" />
                <span>{profileData.contact.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-neutral-500" />
                <span>{profileData.contact.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                <span>{profileData.contact.location}</span>
              </div>
            </div>
          </div>

          {/* 2. 사이트맵 링크 */}
          <div className="md:col-span-4 space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4">
              사이트맵 (Sitemap)
            </h5>
            <ul className="space-y-2.5">
              {sitemapLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group flex items-center justify-between text-xs text-neutral-400 hover:text-white transition-colors py-1"
                  >
                    <span className="font-semibold group-hover:translate-x-1 transition-transform">
                      {link.name}
                    </span>
                    <span className="text-[11px] text-neutral-500">{link.desc}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. 취득 자격 요약 및 빠른 이동 */}
          <div className="md:col-span-3 space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4">
              보유 자격 요약
            </h5>
            <div className="flex flex-wrap gap-1.5">
              {profileData.certificates.map((cert) => (
                <span
                  key={cert.id}
                  className="text-[11px] px-2.5 py-1 rounded-lg bg-neutral-800 text-neutral-300 border border-neutral-700/60"
                >
                  {cert.name}
                </span>
              ))}
            </div>

            <div className="pt-4">
              <button
                onClick={scrollToTop}
                className="w-full py-2.5 rounded-xl bg-neutral-800/80 hover:bg-neutral-800 border border-neutral-700/60 text-xs font-medium text-neutral-300 hover:text-white flex items-center justify-center gap-2 transition-all"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>맨 위로 스크롤</span>
              </button>
            </div>
          </div>
        </div>

        {/* 저작권 표시 */}
        <div className="pt-8 border-t border-neutral-800/60 flex flex-col sm:flex-row items-center justify-between text-[11px] text-neutral-500 gap-3">
          <p>© 2026 변다희 (Dahee Byun). All rights reserved.</p>
          <p className="font-mono text-[10px]">
            Built with React 19, Vite &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
