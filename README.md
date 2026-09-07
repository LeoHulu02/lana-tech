# lana-tech

Website Lana Tech — digital technology partner untuk web development, custom application, dan solusi digital.

Built with Next.js 15, React 19, and Tailwind CSS v4.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment

Salin `.env.example` menjadi `.env.local` lalu isi nilai yang sudah kamu punya:

```bash
NEXT_PUBLIC_SITE_URL=https://lanatech.id
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GSC_VERIFICATION=
```

Tanpa `NEXT_PUBLIC_GA_ID` dan `NEXT_PUBLIC_GSC_VERIFICATION`, situs tetap jalan. Analytics dan meta verifikasi Search Console hanya muncul jika nilainya terisi.

## Domain, Analytics, dan Search Console

1. Beli atau arahkan domain (contoh `lanatech.id`) ke host/Vercel.
2. Tambahkan record DNS A/CNAME sesuai instruksi host.
3. Set `NEXT_PUBLIC_SITE_URL` ke URL produksi tanpa trailing slash.
4. Buat properti Google Analytics 4, salin Measurement ID (`G-XXXX`) ke `NEXT_PUBLIC_GA_ID`.
5. Verifikasi Search Console:
   - HTML tag: tempel kode verifikasi ke `NEXT_PUBLIC_GSC_VERIFICATION`, atau
   - DNS TXT di registrar (lebih tahan cache).
6. Setelah domain live, submit `https://lanatech.id/sitemap.xml` di Search Console.
