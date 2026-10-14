import React, { useState } from 'react';
import { Image as ImageIcon, Folder, Sparkles } from 'lucide-react';

export default function ProjectThumbnail({ imageFileName, isImageReady, title, category }) {
  const [imageError, setImageError] = useState(false);
  const imagePath = `/images/projects/${imageFileName}`;

  // 실제 이미지가 준비되었고 에러가 나지 않은 경우
  if (isImageReady && !imageError) {
    return (
      <div className="relative w-full h-full min-h-[220px] bg-neutral-100 rounded-2xl overflow-hidden group">
        <img
          src={imagePath}
          alt={title}
          onError={() => setImageError(true)}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute bottom-2 left-2 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-xs text-white text-[11px] font-mono flex items-center gap-1.5">
          <Folder className="w-3 h-3 text-neutral-300" />
          <span>{imageFileName}</span>
        </div>
      </div>
    );
  }

  // 플레이스홀더 모드 (요구사항: 이미지 위에 파일명 표기, 추후 실제이미지로 쉽게 교체 가능)
  return (
    <div className="relative w-full h-full min-h-[220px] rounded-2xl bg-gradient-to-br from-neutral-100 via-neutral-100 to-neutral-200/90 border border-neutral-300/80 flex flex-col items-center justify-center p-6 text-center group overflow-hidden select-none">
      {/* 장식용 은은한 격자 패턴 */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="relative z-10 flex flex-col items-center gap-3">
        <div className="w-12 h-12 rounded-2xl bg-white/90 border border-neutral-300/60 shadow-xs flex items-center justify-center text-neutral-500 group-hover:scale-110 group-hover:text-neutral-900 group-hover:border-neutral-400 transition-all">
          <ImageIcon className="w-6 h-6 stroke-[1.5]" />
        </div>

        {/* 파일명 표기 뱃지 (요구사항) */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-neutral-300 text-neutral-800 text-xs font-mono font-medium shadow-xs">
          <Folder className="w-3.5 h-3.5 text-blue-500" />
          <span>{imageFileName}</span>
        </div>

        <p className="text-[11px] text-neutral-500 max-w-[200px] leading-tight mt-1">
          📁 <span className="font-semibold text-neutral-700">public/images/projects/{imageFileName}</span> 에 이미지를 넣으면 즉시 교체됩니다
        </p>
      </div>

      {/* 우측 상단 플레이스홀더 라벨 */}
      <div className="absolute top-3 right-3 px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider bg-neutral-200/70 text-neutral-600">
        Placeholder
      </div>
    </div>
  );
}
