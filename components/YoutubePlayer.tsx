'use client';

import { useState, useEffect, useId } from 'react';
import Image from 'next/image';

declare global {
  interface Window {
    YT: {
      Player: new (
        elOrId: string | HTMLElement,
        opts: {
          videoId: string;
          playerVars?: Record<string, number>;
          events?: { onStateChange?: (e: { data: number }) => void };
        }
      ) => { destroy: () => void };
      PlayerState: { ENDED: number };
    };
    onYouTubeIframeAPIReady: () => void;
  }
}

export default function YoutubePlayer({ videoId }: { videoId: string }) {
  const [playing, setPlaying] = useState(false);
  // useId gives a stable SSR-safe ID — strip colons for valid HTML id
  const uid = useId().replace(/:/g, '');
  const playerId = `yt-${uid}`;

  useEffect(() => {
    if (!playing) return;

    const init = () => {
      // Guard: element must exist in DOM before creating player
      if (!document.getElementById(playerId)) return;

      new window.YT.Player(playerId, {
        videoId,
        playerVars: { autoplay: 1, rel: 0, modestbranding: 1 },
        events: {
          onStateChange: (e) => {
            // state 0 = ENDED → kembali ke thumbnail
            if (e.data === 0) setPlaying(false);
          },
        },
      });
    };

    if (window.YT?.Player) {
      init();
    } else {
      if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        document.head.appendChild(tag);
      }
      window.onYouTubeIframeAPIReady = init;
    }

    // Tidak memanggil player.destroy() di cleanup —
    // React sudah menghapus seluruh subtree saat playing → false,
    // sehingga iframe ikut terhapus tanpa konflik DOM.
  }, [playing, videoId, playerId]);

  if (playing) {
    return (
      // Outer wrapper dikontrol React; YT.Player mengganti inner div by ID
      <div className="absolute inset-0 w-full h-full">
        <div id={playerId} className="absolute inset-0 w-full h-full" />
      </div>
    );
  }

  return (
    <button
      onClick={() => setPlaying(true)}
      className="absolute inset-0 w-full h-full flex items-center justify-center group"
      aria-label="Play video"
    >
      <div className="absolute inset-0 bg-[#080808]" />

      <div className="relative z-10 flex flex-col items-center gap-6">
        <Image
          src="/gambar/new logo.png"
          alt="Ayres Apparel"
          width={180}
          height={54}
          className="object-contain brightness-0 invert opacity-90"
        />
      </div>

      <div className="absolute z-10 bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 text-[#ffffff60] group-hover:text-white transition-colors text-xs font-bold tracking-widest uppercase">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
        Play Video
      </div>

      <div className="absolute inset-0 border border-[#1f1f1f] group-hover:border-[#e03030]/40 transition-colors rounded-xl" />
    </button>
  );
}
