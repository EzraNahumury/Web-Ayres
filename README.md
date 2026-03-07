# Ayres Apparel — Official Website

Website resmi **Ayres Apparel**, produsen jersey custom berbasis di Bantul, Yogyakarta. Dibangun dengan Next.js 16 App Router, Tailwind CSS v4, dan berbagai komponen interaktif modern.

---

## Tech Stack

| Teknologi | Versi | Keterangan |
|---|---|---|
| Next.js | 16.1.6 | App Router, Server Components |
| React | 19 | |
| TypeScript | 5 | |
| Tailwind CSS | 4 | |
| Motion | 12 | Animasi (DecryptedText, transisi) |
| GSAP | 3 | Animasi scroll & interaktif |
| Three.js / R3F | 0.183 / 9 | Efek 3D |
| OGL | 1 | CircularGallery WebGL |
| Shadcn UI | 3 | Komponen UI dasar |

---

## Halaman

| Route | Deskripsi |
|---|---|
| `/` | Beranda — hero, gallery jersey, stats, review, FAQ |
| `/product` | Katalog jersey — 3D Card Carousel dengan lightbox viewer |
| `/order` | Informasi pemesanan & size chart |
| `/company` | Profil perusahaan, nilai, dan pencapaian |
| `/contact` | Kontak & form inquiry |
| `/news` | Artikel & berita terbaru |

---

## Struktur Proyek

```
app/
├── page.tsx              # Beranda
├── product/
│   ├── page.tsx          # Halaman produk
│   └── ProductCarousel.tsx  # 3D Card Carousel (client component)
├── company/page.tsx
├── order/page.tsx
├── contact/
├── news/
└── layout.tsx

components/
├── Header.tsx            # Navigasi utama
├── Footer.tsx
├── DecryptedText.tsx     # Efek teks decrypt animasi
├── YoutubePlayer.tsx     # YouTube embed + kembali ke thumbnail otomatis
├── CircularGallery.tsx   # Gallery jersey WebGL (OGL)
├── ReviewSlider.tsx      # Slider review pelanggan
├── GlareHover.tsx        # Efek glare pada kartu jersey
├── TrustSection.tsx      # Section kepercayaan brand
├── BrandPartners.tsx     # Logo brand partner
├── FAQ.tsx               # Accordion FAQ
├── FeaturesStrip.tsx     # Strip fitur layanan
├── GradientText.tsx      # Teks gradient animasi
├── Particles.tsx         # Partikel background
├── DotGrid.tsx           # Grid titik dekoratif
└── ...

public/
├── gambar/               # Asset umum (logo, jersey, dll)
└── katalogv2/            # Foto katalog produk
    ├── katalog classic Adi Vira/
    ├── katalog classic Cakra Vega/
    ├── katalog pro Bima Sena/
    └── katalog pro Garuda Vastra/
```

---

## Fitur Utama

### 3D Card Carousel (`/product`)
- Menampilkan 3 katalog sekaligus dengan efek perspektif 3D
- Card tengah sebagai fokus, card samping miring dan mengecil
- Navigasi: klik card samping, swipe/drag, tombol panah, keyboard (← →)
- Klik center card → **Lightbox viewer** full-screen dengan navigasi antar halaman desain

### DecryptedText
- Efek teks "decrypt" dengan karakter acak yang terbuka satu per satu
- Digunakan pada angka statistik: `2.600+` dan `35.000+`
- Animasi terpicu saat elemen masuk viewport (`animateOn="view"`)

### YouTube Player
- Thumbnail logo Ayres sebagai cover sebelum video diputar
- Menggunakan YouTube IFrame API
- **Otomatis kembali ke thumbnail** saat video selesai (event `onStateChange`)

---

## Menjalankan Project

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build production
npm run build

# Start production
npm start
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

---

## Katalog Produk

| Nama | Package | Pola |
|---|---|---|
| Adi Vira | Classic | 3 |
| Cakra Vega | Classic | 6 |
| Bima Sena | Pro | 6 |
| Garuda Vastra | Pro | 6 |

---

## Kontak

**Ayres Apparel**
Bantul, Yogyakarta, Indonesia
WhatsApp: [+62 878-1831-0416](https://wa.me/6287818310416)
