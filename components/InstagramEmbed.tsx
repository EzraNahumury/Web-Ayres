"use client";

import Script from "next/script";

export default function InstagramEmbed({ url }: { url: string }) {
  return (
    <>
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{
          background: '#000',
          border: '1px solid #1a1a1a',
          borderRadius: 0,
          margin: 0,
          maxWidth: '100%',
          width: '100%',
          minWidth: 0,
        }}
      />
      <Script
        src="//www.instagram.com/embed.js"
        strategy="lazyOnload"
        onLoad={() => {
          if ((window as any).instgrm) {
            (window as any).instgrm.Embeds.process();
          }
        }}
      />
    </>
  );
}
