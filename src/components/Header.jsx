import React, { useState, useEffect } from 'react';
import { FileDown, Menu, X, Sparkles } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Intro', href: '#intro' },
    { name: 'Profile', href: '#profile' },
    { name: 'Projects', href: '#project' },
    { name: 'Hobby', href: '#hobby' },
    { name: 'Sitemap', href: '#sitemap' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-white/80 backdrop-blur-md border-b border-neutral-200/80 shadow-xs'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* 로고 */}
        <a href="#intro" className="group flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold text-sm tracking-tighter transition-transform group-hover:scale-105">
            D
          </div>
          <div className="text-left">
            <span className="font-semibold text-sm tracking-tight text-neutral-900 block">
              변다희
            </span>
            <span className="text-[10px] text-neutral-500 font-medium tracking-wide uppercase block -mt-0.5">
              Portfolio
            </span>
          </div>
        </a>

        {/* 데스크톱 메뉴 */}
        <nav className="hidden md:flex items-center gap-1 bg-white/70 backdrop-blur-md px-4 py-1.5 rounded-full border border-neutral-200/70 shadow-xs">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-xs font-medium text-neutral-600 hover:text-neutral-950 px-3.5 py-1.5 rounded-full hover:bg-neutral-100 transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* 액션 버튼 (PDF 다운로드) */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#sitemap"
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full bg-neutral-900 text-white hover:bg-neutral-800 transition-all shadow-xs hover:shadow"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>Resume 다운로드</span>
          </a>
        </div>

        {/* 모바일 햄버거 토글 */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-neutral-700 hover:bg-neutral-100 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* 모바일 메뉴 드롭다운 */}
      {mobileMenuOpen && (
        <div className="md:hidden px-6 pt-3 pb-6 bg-white/95 backdrop-blur-xl border-b border-neutral-200 animate-fade-in shadow-lg">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-neutral-700 hover:text-neutral-950 px-3 py-2 rounded-lg hover:bg-neutral-100"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#sitemap"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-xl bg-neutral-900 text-white"
            >
              <FileDown className="w-4 h-4" />
              <span>Resume PDF 다운로드</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
