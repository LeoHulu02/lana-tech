export const company = {
  name: "Lana Tech",
  founded: 2022,
  city: "Jakarta Selatan",
  email: "hello@lanatech.id",
  phone: "+62 812-3456-7890",
  whatsapp: "https://wa.me/6281234567890",
  tagline: "Studio yang membangun produk digital siap pakai.",
}

export const siteUrl = "https://lanatech.id"

export const siteDescription =
  "Lana Tech merancang dan mengembangkan website, aplikasi web, dan sistem operasional yang siap dipakai tim setiap hari."

export const siteKeywords = [
  "Lana Tech",
  "studio produk digital",
  "web development Jakarta",
  "aplikasi web custom",
  "sistem operasional",
  "Next.js",
]

export const navLinks = [
  { label: "Studio", id: "about" },
  { label: "Karya", id: "portfolio" },
  { label: "Proses", id: "process" },
  { label: "FAQ", id: "faq" },
  { label: "Kontak", id: "contact" },
]

export const stats = [
  { value: "40+", label: "Produk digital live" },
  { value: "18", label: "Klien aktif" },
  { value: "4 th", label: "Membangun di Jakarta" },
  { value: "30 hr", label: "Pendampingan pasca rilis" },
]

export const clients = [
  "Nexora",
  "BrightWork",
  "Vela",
  "Korindo",
  "Paxia",
  "Aruna Pay",
]

export const stack = [
  "Next.js",
  "React",
  "Laravel",
  "Node.js",
  "PostgreSQL",
  "Tailwind",
  "Docker",
  "Midtrans",
]

export const capabilities = [
  {
    id: "web",
    title: "Website yang bekerja untuk bisnis",
    desc: "Bukan sekadar halaman cantik. Kami merancang situs yang cepat, jelas, dan siap menangkap leads — company profile, landing campaign, sampai portal konten.",
    points: [
      "Company profile & kampanye",
      "Performa dan SEO teknis",
      "Siap mobile dari awal",
    ],
  },
  {
    id: "app",
    title: "Aplikasi web & dashboard",
    desc: "Kalau operasional sudah tidak muat di spreadsheet, kami bangun sistemnya: admin panel, alur persetujuan, laporan real-time, dan akses per peran.",
    points: [
      "Custom web application",
      "Integrasi API & database",
      "Staging sebelum rilis",
    ],
  },
  {
    id: "ops",
    title: "Commerce dan sistem operasional",
    desc: "Toko online, booking, inventory, payroll — produk yang dipakai setiap hari oleh tim dan pelanggan, bukan demo yang berhenti di slide.",
    points: [
      "E-commerce & payment",
      "Booking dan inventory",
      "Keamanan dan monitoring",
    ],
  },
]

export type WorkItem = {
  featured: boolean
  slug: string
  title: string
  client: string
  industry: string
  category: string
  year: string
  summary: string
  challenge: string
  solution: string
  result: string
  body: string
  scope: string[]
  tags: string[]
  color: string
  img: string
  imgAlt: string
  gallery: { src: string; alt: string }[]
}

export const work: WorkItem[] = [
  {
    featured: true,
    slug: "nexora-control",
    title: "Nexora Control",
    client: "Nexora Distribusi",
    industry: "Distribusi nasional",
    category: "Aplikasi web",
    year: "2025",
    summary: "Satu dashboard untuk stok, pesanan cabang, dan laba per SKU.",
    challenge:
      "Tim gudang, sales, dan keuangan memakai tiga tools berbeda. Stok dan invoice sering tidak ketemu.",
    solution:
      "Satu dashboard operasional: stok real-time, pesanan cabang, dan laporan laba per SKU.",
    result: "Waktu rekonsiliasi mingguan turun dari 2 hari menjadi 4 jam.",
    body: "Nexora mengirim barang ke puluhan cabang. Setiap pagi sales butuh angka stok yang sama dengan yang dilihat gudang. Kami memetakan alur dari PO sampai invoice, lalu membangun satu aplikasi web yang jadi sumber data bersama. Peran akses dipisah: gudang input mutasi, sales lihat ketersediaan, keuangan unduh laporan. Yang tidak berubah adalah cara kerja orang di lapangan — yang berubah adalah mereka tidak lagi menunggu file Excel malam minggu.",
    scope: [
      "Dashboard stok dan pesanan",
      "Laporan laba per SKU",
      "Akses per peran",
      "Export mingguan",
      "Staging sebelum rilis",
    ],
    tags: ["Next.js", "Node.js", "PostgreSQL"],
    color: "#4F46E5",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format",
    imgAlt: "Nexora Control — dashboard stok, pesanan cabang, dan laba per SKU",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format",
        alt: "Nexora Control — grafik performa penjualan mingguan",
      },
      {
        src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format",
        alt: "Nexora Control — tim operasional meninjau data cabang",
      },
    ],
  },
  {
    featured: false,
    slug: "brightwork-people",
    title: "BrightWork People",
    client: "BrightWork",
    industry: "HR & operasi",
    category: "Sistem internal",
    year: "2025",
    summary: "Portal SDM untuk cuti, slip gaji, dan evaluasi 500+ staf.",
    challenge:
      "Rekrutmen, absensi, dan payroll masih tersebar di email dan Excel untuk 500+ staf.",
    solution:
      "Portal SDM dengan alur cuti, slip gaji, dan evaluasi kinerja yang bisa diakses dari HP.",
    result: "Onboarding karyawan baru selesai dalam 2 hari, bukan 2 minggu.",
    body: "BrightWork tumbuh cepat, tapi HR masih jadi bottleneck. Kami bangun portal yang dipakai karyawan sendiri: ajukan cuti, unduh slip, lihat status kontrak. Manager mendapat antrian persetujuan, bukan folder email. Integrasi ke data karyawan existing dilakukan bertahap supaya payroll tidak terganggu di tengah bulan.",
    scope: [
      "Portal karyawan mobile-first",
      "Alur cuti dan persetujuan",
      "Slip gaji digital",
      "Evaluasi kinerja",
      "Onboarding terpandu",
    ],
    tags: ["Next.js", "Laravel", "MySQL"],
    color: "#0EA5E9",
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format",
    imgAlt:
      "BrightWork People — portal SDM untuk cuti, slip gaji, dan evaluasi",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format",
        alt: "BrightWork People — rapat HR meninjau alur onboarding",
      },
    ],
  },
  {
    featured: false,
    slug: "vela-atelier",
    title: "Vela Atelier",
    client: "Vela Studio",
    industry: "Fashion ritel",
    category: "E-commerce",
    year: "2024",
    summary:
      "Toko sendiri dengan loyalty dan pembayaran, tetap tersambung marketplace.",
    challenge:
      "Penjualan online bergantung pada marketplace. Brand tidak punya data pelanggan sendiri.",
    solution:
      "Toko sendiri dengan katalog, loyalty, dan pembayaran Midtrans — tetap tersambung Shopee.",
    result: "Pendapatan kanal sendiri naik 2,4x di semester pertama.",
    body: "Vela punya basis pembeli setia, tapi mereka belanja di etalase orang lain. Kami membuat toko yang terasa milik brand: foto, ukuran, dan checkout yang singkat. Stok disinkron supaya tidak oversell. Program loyalty membuat repeat order kembali ke kanal Vela, bukan ke algoritma marketplace.",
    scope: [
      "Katalog dan variant ukuran",
      "Checkout Midtrans",
      "Program loyalty",
      "Sinkron stok marketplace",
      "Analytics pesanan",
    ],
    tags: ["Next.js", "Midtrans", "Inventory"],
    color: "#EC4899",
    img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format",
    imgAlt: "Vela Atelier — etalase toko fashion dengan katalog dan loyalty",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format",
        alt: "Vela Atelier — detail produk dan pengalaman belanja merek sendiri",
      },
    ],
  },
  {
    featured: false,
    slug: "paxia-table",
    title: "Paxia Table",
    client: "Paxia Group",
    industry: "F&B",
    category: "Sistem operasional",
    year: "2024",
    summary: "Reservasi live untuk 12 outlet, menu QR, dan sinkron kasir.",
    challenge:
      "12 outlet mereservasi meja lewat WhatsApp. Double booking hampir setiap weekend.",
    solution:
      "Sistem reservasi live, menu QR, dan sinkron ke kasir tiap cabang.",
    result: "No-show turun 35%, antrian weekend lebih terukur.",
    body: "Weekend di Paxia sebelumnya ditangani chat group. Kami ganti dengan peta meja per outlet yang di-update live. Tamu konfirmasi lewat tautan, hostess melihat sisa slot, dapur tidak lagi menebak jumlah cover. Menu QR mengurangi cetak kertas dan memudahkan ganti harga per cabang.",
    scope: [
      "Peta meja real-time",
      "Konfirmasi reservasi",
      "Menu QR per outlet",
      "Sinkron kasir",
      "Laporan cover weekend",
    ],
    tags: ["React", "Socket", "Express"],
    color: "#F59E0B",
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format",
    imgAlt: "Paxia Table — reservasi live, menu QR, dan denah meja restoran",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format",
        alt: "Paxia Table — suasana outlet saat reservasi weekend",
      },
    ],
  },
]

export function getWorkBySlug(slug: string) {
  return work.find((item) => item.slug === slug)
}

export function getWorkSlugs() {
  return work.map((item) => item.slug)
}

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
]

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
]

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
]

export const faqs = [
  {
    question: "Berapa lama pengerjaan sebuah project?",
    answer:
      "Website bisnis biasanya membutuhkan 2–4 minggu. Aplikasi web atau sistem operasional umumnya 4–10 minggu, tergantung jumlah alur, peran pengguna, dan integrasi. Timeline dan milestone kami tulis sebelum development dimulai, jadi kamu tahu apa yang selesai di setiap tahap.",
  },
  {
    question: "Berapa kali revisi yang termasuk?",
    answer:
      "Dua putaran revisi besar di tahap desain sudah termasuk. Feedback dikumpulkan per putaran agar perubahan tetap terarah. Perubahan kecil saat development kami rapikan di staging; permintaan yang mengubah scope, alur, atau fitur akan kami estimasikan dan setujui bersama terlebih dahulu.",
  },
  {
    question: "Siapa yang memegang domain dan hosting?",
    answer:
      "Klien. Domain, hosting atau cloud, analytics, email, dan layanan pembayaran dibuat atas nama perusahaanmu atau dipindahkan saat handover. Lana Tech mendapat akses seperlunya untuk setup dan deployment, tetapi kepemilikan akun serta billing tetap di tanganmu.",
  },
  {
    question: "Source code menjadi milik siapa?",
    answer:
      "Setelah project selesai dan dilunasi, seluruh source code custom, repositori Git, desain, konten, dan aset digital yang dibuat khusus untuk project menjadi milik klien sepenuhnya. Dependency open-source dan layanan pihak ketiga tetap mengikuti lisensi masing-masing, tetapi tidak mengurangi kontrolmu atas produk yang kami bangun.",
    featured: true,
  },
  {
    question: "Apa saja yang diterima saat handover?",
    answer:
      "Kamu menerima repositori source code, akses production dan staging, daftar environment yang dibutuhkan tanpa menaruh secret di dokumen, petunjuk build dan deployment, serta dokumentasi operasional ringkas. Tim developer lain bisa melanjutkan tanpa harus bergantung pada akun atau identitas Lana Tech.",
  },
  {
    question: "Apakah tim kami atau vendor lain bisa melanjutkan?",
    answer:
      "Bisa. Kami menggunakan stack umum seperti Next.js, Laravel, Node.js, dan PostgreSQL—bukan platform tertutup. Maintenance bersama Lana Tech tersedia sebagai pilihan, bukan syarat agar produk tetap berjalan.",
  },
  {
    question: "Apakah konsultasi pertama berbayar?",
    answer:
      "Tidak. Pertemuan awal digunakan untuk memahami masalah, pengguna, dan target bisnis. Kalau cocok, kami lanjutkan dengan scope, pendekatan teknis, timeline, serta estimasi biaya yang bisa kamu evaluasi tanpa komitmen tersembunyi.",
  },
]

export const footerServices = [
  { label: "Website bisnis", id: "about" },
  { label: "Aplikasi web", id: "about" },
  { label: "Dashboard & admin", id: "about" },
  { label: "E-commerce", id: "portfolio" },
  { label: "Sistem operasional", id: "portfolio" },
]

export const footerCompany = [
  { label: "Studio", id: "about" },
  { label: "Karya", id: "portfolio" },
  { label: "Cara kerja", id: "process" },
  { label: "FAQ", id: "faq" },
  { label: "Mulai project", id: "contact" },
  {
    label: "Karir",
    href: "mailto:hello@lanatech.id?subject=Karir%20di%20Lana%20Tech",
  },
]
