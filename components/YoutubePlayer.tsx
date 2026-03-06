'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function YoutubePlayer({ videoId }: { videoId: string }) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        title="Ayres Apparel Customer Review"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
      />
    );
  }

  return (
    <button
      onClick={() => setPlaying(true)}
      className="absolute inset-0 w-full h-full flex items-center justify-center group"
      aria-label="Play video"
    >
      {/* Dark background */}
      <div className="absolute inset-0 bg-[#080808]" />

      {/* Logo */}
      <div className="relative z-10 flex flex-col items-center gap-6">
        <Image
          src="/gambar/new logo.png"
          alt="Ayres Apparel"
          width={180}
          height={54}
          className="object-contain brightness-0 invert opacity-90"
        />
      </div>

      {/* Play button */}
      <div className="absolute z-10 bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 text-[#ffffff60] group-hover:text-white transition-colors text-xs font-bold tracking-widest uppercase">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
        Play Video
      </div>

      {/* Subtle border on hover */}
      <div className="absolute inset-0 border border-[#1f1f1f] group-hover:border-[#e03030]/40 transition-colors rounded-xl" />
    </button>
  );
}
