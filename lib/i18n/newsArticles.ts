import type { Language } from "./translations";

type Article = { title: string; date: string; contentHtml: string };

export const newsArticles: Record<Language, Record<string, Article>> = {
  en: {
    "jadwal-finalissima-2025-spanyol-vs-argentina": {
      title: "Finalissima 2025 Schedule — Spain vs Argentina",
      date: "July 17, 2024",
      contentHtml: `
        <p>This top-level match will bring together the Euro 2024 champions and the Copa America 2024 champions. Finalissima is the match between the UEFA winner and the CONMEBOL winner, bringing together two of the world's best.</p>
        <h2>Match Schedule</h2>
        <p>Finalissima 2025 is scheduled to take place in Europe. Spain as Euro 2024 champions will face Argentina, the Copa America 2024 champions, in this prestigious match.</p>
        <h2>Support Your Favorite Team</h2>
        <p>Watch this exciting match while wearing a custom jersey from Ayres Apparel! Make your favorite team's jersey now starting at Rp 70,000.</p>
      `,
    },
    "tips-merawat-kaos-jersey-bola": {
      title: "Tips for Caring for Your Football Jersey",
      date: "July 17, 2024",
      contentHtml: `
        <p>A football jersey is an investment that needs to be taken care of. Here are tips to keep your jersey durable and looking like new.</p>
        <h2>1. Hand-wash</h2>
        <p>Hand-washing beats the machine. A washer can damage the fabric fibers and the print on your jersey.</p>
        <h2>2. Use Cold Water</h2>
        <p>Wash with cold or low-temperature water to preserve color and elasticity.</p>
        <h2>3. Avoid Bleach</h2>
        <p>Don't use bleach or harsh detergents that can fade the jersey's colors.</p>
        <h2>4. Dry in the Shade</h2>
        <p>Avoid drying in direct sunlight. Air-dry in a shaded spot.</p>
        <h2>5. Don't Wring Too Hard</h2>
        <p>Wring gently or roll with a towel to remove excess water.</p>
      `,
    },
  },
  id: {
    "jadwal-finalissima-2025-spanyol-vs-argentina": {
      title: "Jadwal Finalissima 2025 Spanyol vs Argentina",
      date: "17 Juli 2024",
      contentHtml: `
        <p>Pertandingan level top ini akan mempertemukan juara Euro 2024 dan juara Copa America 2024. Finalissima adalah pertandingan antara juara UEFA dan juara CONMEBOL yang mempertemukan dua kekuatan terbaik dunia.</p>
        <h2>Jadwal Pertandingan</h2>
        <p>Finalissima 2025 dijadwalkan berlangsung di Eropa. Spanyol sebagai juara Euro 2024 akan berhadapan dengan Argentina juara Copa America 2024 dalam pertandingan prestisius ini.</p>
        <h2>Dukung Tim Favorit Kamu</h2>
        <p>Nonton pertandingan seru ini sambil pakai jersey custom dari Ayres Apparel! Buat jersey tim favorit kamu sekarang dengan harga mulai Rp.70.000.</p>
      `,
    },
    "tips-merawat-kaos-jersey-bola": {
      title: "Tips Merawat Kaos Jersey Bola",
      date: "17 Juli 2024",
      contentHtml: `
        <p>Jersey bola adalah investasi yang perlu dirawat dengan baik. Berikut tips agar jersey kamu tetap awet dan terlihat seperti baru.</p>
        <h2>1. Cuci dengan Tangan</h2>
        <p>Lebih baik menggunakan tangan ketimbang mesin cuci. Mesin cuci bisa merusak serat kain dan print pada jersey.</p>
        <h2>2. Gunakan Air Dingin</h2>
        <p>Cuci dengan air dingin atau suhu rendah untuk menjaga warna dan elastisitas kain.</p>
        <h2>3. Hindari Pemutih</h2>
        <p>Jangan gunakan pemutih atau detergen keras yang bisa memudarkan warna jersey.</p>
        <h2>4. Jemur di Tempat Teduh</h2>
        <p>Hindari menjemur di bawah sinar matahari langsung. Angin-anginkan di tempat yang teduh.</p>
        <h2>5. Jangan Diperas Terlalu Kuat</h2>
        <p>Peras dengan lembut atau gulung dengan handuk untuk mengeluarkan air berlebih.</p>
      `,
    },
  },
  zh: {
    "jadwal-finalissima-2025-spanyol-vs-argentina": {
      title: "2025 年 Finalissima 赛程 — 西班牙对阿根廷",
      date: "2024 年 7 月 17 日",
      contentHtml: `
        <p>这场顶级对决将由 2024 欧洲杯冠军对阵 2024 美洲杯冠军。Finalissima 是欧足联冠军与南美足联冠军之间的比赛，汇聚了世界两支顶级劲旅。</p>
        <h2>比赛赛程</h2>
        <p>2025 年 Finalissima 计划在欧洲举行。2024 欧洲杯冠军西班牙将在这场备受瞩目的比赛中对阵 2024 美洲杯冠军阿根廷。</p>
        <h2>为你钟爱的球队加油</h2>
        <p>穿上 Ayres Apparel 的定制球衣一起观看这场精彩对决！起价 Rp 70,000，立刻为你最爱的球队做一件球衣。</p>
      `,
    },
    "tips-merawat-kaos-jersey-bola": {
      title: "足球球衣保养小技巧",
      date: "2024 年 7 月 17 日",
      contentHtml: `
        <p>足球球衣是一份值得妥善保养的投资。以下小技巧能让你的球衣更耐用，并保持如新。</p>
        <h2>1. 手洗</h2>
        <p>手洗比机洗更好。洗衣机可能损坏面料纤维以及球衣上的印花。</p>
        <h2>2. 使用冷水</h2>
        <p>使用冷水或低温水清洗，以保持颜色和面料弹性。</p>
        <h2>3. 避免漂白剂</h2>
        <p>请勿使用漂白剂或强力洗涤剂，以免球衣褪色。</p>
        <h2>4. 阴凉处晾干</h2>
        <p>避免阳光直射晾晒。请在阴凉通风处自然晾干。</p>
        <h2>5. 不要用力拧</h2>
        <p>轻轻拧干或用毛巾卷一下去除多余水分。</p>
      `,
    },
  },
};

export const newsCta = {
  en: { heading: "Interested in a Custom Jersey?", desc: "Starting at Rp 70,000, produced in 1 day!", cta: "Order Now", back: "← Back to News" },
  id: { heading: "Tertarik Custom Jersey?", desc: "Mulai dari Rp.70.000, produksi 1 hari jadi!", cta: "Order Sekarang", back: "← Kembali ke News" },
  zh: { heading: "想做定制球衣吗？", desc: "起价 Rp 70,000，一天内完成！", cta: "立即订购", back: "← 返回新闻" },
} as const;
