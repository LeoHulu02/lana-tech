export const company = {
  name: "Lana Tech",
  founded: 2022,
  city: "Jakarta Selatan",
  email: "hello@lanatech.id",
  phone: "+62 812-3456-7890",
  whatsapp: "https://wa.me/6281234567890",
  tagline: "Studio yang membangun produk digital siap pakai.",
};

export const navLinks = [
  { label: "Studio", id: "about" },
  { label: "Karya", id: "portfolio" },
  { label: "Proses", id: "process" },
  { label: "Kontak", id: "contact" },
];

export const stats = [
  { value: "40+", label: "Produk digital live" },
  { value: "18", label: "Klien aktif" },
  { value: "4 th", label: "Membangun di Jakarta" },
  { value: "30 hr", label: "Pendampingan pasca rilis" },
];

export const clients = ["Nexora", "BrightWork", "Vela", "Korindo", "Paxia", "Aruna Pay"];

export const stack = ["Next.js", "React", "Laravel", "Node.js", "PostgreSQL", "Tailwind", "Docker", "Midtrans"];

export const capabilities = [
  {
    id: "web",
    title: "Website yang bekerja untuk bisnis",
    desc: "Bukan sekadar halaman cantik. Kami merancang situs yang cepat, jelas, dan siap menangkap leads — company profile, landing campaign, sampai portal konten.",
    points: ["Company profile & kampanye", "Performa dan SEO teknis", "Siap mobile dari awal"],
  },
  {
    id: "app",
    title: "Aplikasi web & dashboard",
    desc: "Kalau operasional sudah tidak muat di spreadsheet, kami bangun sistemnya: admin panel, alur persetujuan, laporan real-time, dan akses per peran.",
    points: ["Custom web application", "Integrasi API & database", "Staging sebelum rilis"],
  },
  {
    id: "ops",
    title: "Commerce dan sistem operasional",
    desc: "Toko online, booking, inventory, payroll — produk yang dipakai setiap hari oleh tim dan pelanggan, bukan demo yang berhenti di slide.",
    points: ["E-commerce & payment", "Booking dan inventory", "Keamanan dan monitoring"],
  },
];

export const work = [
  {
    featured: true,
    title: "Nexora Control",
    client: "Nexora Distribusi",
    industry: "Distribusi nasional",
    category: "Aplikasi web",
    year: "2025",
    challenge: "Tim gudang, sales, dan keuangan memakai tiga tools berbeda. Stok dan invoice sering tidak ketemu.",
    solution: "Satu dashboard operasional: stok real-time, pesanan cabang, dan laporan laba per SKU.",
    result: "Waktu rekonsiliasi mingguan turun dari 2 hari menjadi 4 jam.",
    tags: ["Next.js", "Node.js", "PostgreSQL"],
    color: "#4F46E5",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop&auto=format",
  },
  {
    featured: false,
    title: "BrightWork People",
    client: "BrightWork",
    industry: "HR & operasi",
    category: "Sistem internal",
    year: "2025",
    challenge: "Rekrutmen, absensi, dan payroll masih tersebar di email dan Excel untuk 500+ staf.",
    solution: "Portal SDM dengan alur cuti, slip gaji, dan evaluasi kinerja yang bisa diakses dari HP.",
    result: "Onboarding karyawan baru selesai dalam 2 hari, bukan 2 minggu.",
    tags: ["Next.js", "Laravel", "MySQL"],
    color: "#0EA5E9",
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&h=640&fit=crop&auto=format",
  },
  {
    featured: false,
    title: "Vela Atelier",
    client: "Vela Studio",
    industry: "Fashion ritel",
    category: "E-commerce",
    year: "2024",
    challenge: "Penjualan online bergantung pada marketplace. Brand tidak punya data pelanggan sendiri.",
    solution: "Toko sendiri dengan katalog, loyalty, dan pembayaran Midtrans — tetap tersambung Shopee.",
    result: "Pendapatan kanal sendiri naik 2,4x di semester pertama.",
    tags: ["Next.js", "Midtrans", "Inventory"],
    color: "#EC4899",
    img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=900&h=640&fit=crop&auto=format",
  },
  {
    featured: false,
    title: "Paxia Table",
    client: "Paxia Group",
    industry: "F&B",
    category: "Sistem operasional",
    year: "2024",
    challenge: "12 outlet mereservasi meja lewat WhatsApp. Double booking hampir setiap weekend.",
    solution: "Sistem reservasi live, menu QR, dan sinkron ke kasir tiap cabang.",
    result: "No-show turun 35%, antrian weekend lebih terukur.",
    tags: ["React", "Socket", "Express"],
    color: "#F59E0B",
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&h=640&fit=crop&auto=format",
  },
];

export const process = [
  {
    step: "01",
    title: "Dengar dulu, baru usul",
    desc: "Kami duduk dengan founder atau kepala operasional. Yang dicari: siapa pemakainya, proses yang macet, dan apa yang harus hidup di minggu pertama rilis.",
    duration: "1–3 hari",
  },
  {
    step: "02",
    title: "Rencana yang bisa dipegang",
    desc: "Ruang lingkup, arsitektur, wireframe, dan timeline tertulis. Tidak ada fitur siluman di tengah jalan tanpa kesepakatan.",
    duration: "3–5 hari",
  },
  {
    step: "03",
    title: "Desain yang siap dikode",
    desc: "Alur layar, komponen, dan prototype. Tim bisnis bisa klik sebelum development dimulai.",
    duration: "5–10 hari",
  },
  {
    step: "04",
    title: "Bangun di staging",
    desc: "Kamu dapat update mingguan dan akses lingkungan uji. Yang dilihat klien sama dengan yang dikerjakan engineer.",
    duration: "2–8 minggu",
  },
  {
    step: "05",
    title: "Uji seperti pemakai sungguhan",
    desc: "Fungsi, kecepatan, keamanan, dan tampilan di HP sampai desktop. Bug ditutup sebelum domain dipindah.",
    duration: "3–7 hari",
  },
  {
    step: "06",
    title: "Rilis, lalu dampingi",
    desc: "Deploy, SSL, monitoring. 30 hari pertama kami jaga. Kalau mau lanjut fitur, tim yang sama yang sudah kenal kodenya.",
    duration: "Berjalan",
  },
];

export const reasons = [
  {
    title: "Satu tim, ujung ke ujung",
    desc: "Brief, desain, kode, dan rilis dipegang orang yang sama. Tidak ada lempar-lemparan ke vendor lain di tengah project.",
  },
  {
    title: "Produk yang dipakai, bukan slide",
    desc: "Setiap keputusan diukur dari pemakai harian: admin gudang, kasir, atau calon pembeli di HP.",
  },
  {
    title: "Kode yang bisa dilanjutkan",
    desc: "Stack modern, dokumentasi cukup, dan akses staging. Enam bulan kemudian masih bisa ditambah fitur tanpa mulai dari nol.",
  },
];

export const testimonials = [
  {
    name: "Andi Prasetyo",
    role: "CEO, Nexora Distribusi",
    avatar: "AP",
    color: "#4F46E5",
    text: "Tim Lana Tech masuk ke proses gudang kami, bukan cuma menggambar layar. Dashboard-nya dipakai sales setiap pagi — itu ukuran yang kami cari.",
  },
  {
    name: "Sarah Wulandari",
    role: "Head of Brand, Vela Studio",
    avatar: "SW",
    color: "#EC4899",
    text: "Akhirnya ada toko yang terasa milik Vela, bukan template marketplace. Data pelanggan kembali ke kami, dan checkoutnya tidak membingungkan.",
  },
  {
    name: "Raka Mahendra",
    role: "Operations, Paxia Group",
    avatar: "RM",
    color: "#F59E0B",
    text: "Reservasi 12 cabang jadi satu antrian. Weekend tidak lagi chaos di WhatsApp. Itu yang kami bayar, dan itu yang dikirim.",
  },
];

export const footerServices = [
  { label: "Website bisnis", id: "about" },
  { label: "Aplikasi web", id: "about" },
  { label: "Dashboard & admin", id: "about" },
  { label: "E-commerce", id: "portfolio" },
  { label: "Sistem operasional", id: "portfolio" },
];

export const footerCompany = [
  { label: "Studio", id: "about" },
  { label: "Karya", id: "portfolio" },
  { label: "Cara kerja", id: "process" },
  { label: "Mulai project", id: "contact" },
  { label: "Karir", href: "mailto:hello@lanatech.id?subject=Karir%20di%20Lana%20Tech" },
];
