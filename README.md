# 🌿 Hijaukan Negeri - Platform Konservasi Lingkungan

Sebuah platform web interaktif untuk mendukung kegiatan penanaman pohon dan konservasi lingkungan. Aplikasi ini memudahkan pengguna untuk bergabung dalam aksi lingkungan, membangun komunitas, dan mengakses informasi penting seputar lokasi konservasi.

## 🚀 Fitur Utama

* 🌿 **Landing Page Interaktif**
  Informasi umum, statistik kegiatan, dan timeline penanaman pohon.

* 👥 **Manajemen Pengguna**
  Sistem autentikasi lengkap (registrasi, login, logout).

* 📋 **Artikel & Kegiatan**
  Fitur untuk memposting, membagikan, dan melihat detail kegiatan penanaman pohon.

* 🌳 **Tempat Konservasi**
  Menyediakan informasi lokasi konservasi dengan fitur pencarian dan filter.

* 🧑‍🤝‍🧑 **Komunitas**
  Ruang interaksi antar pengguna untuk membentuk komunitas peduli lingkungan.

* 📊 **Profil Pengguna**
  Menampilkan riwayat kontribusi, kegiatan yang diikuti, dan informasi akun.

## 🛠️ Tech Stack

- **Framework:** Next.js 15.5.4 dengan TypeScript
- **Styling:** Tailwind CSS v4
- **Paradigma:** Object-Oriented Programming (OOP)
- **Arsitektur:** Container-Presenter Pattern

## 📂 Struktur Proyek

```
src/
├── components/
│   ├── containers/     # Komponen container (logika)
│   ├── presenters/     # Komponen presenter (UI)
│   ├── factory/        # Pola factory
│   └── common/         # Komponen bersama
├── hooks/              # Custom hooks
├── services/           # Layanan logika bisnis
├── repositories/       # Layer akses data
├── models/             # Model data
├── utils/              # Kelas utilitas
└── app/                # Halaman Next.js (App Router)
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm atau yarn

### Installation

1. Clone repository:
```bash
git clone https://github.com/username/hijaukan-negeri-v2.git
cd hijaukan-negeri-v2
```

2. Install dependencies:
```bash
npm install
```

3. Jalankan development server:
```bash
npm run dev
```

4. Buka [http://localhost:3000](http://localhost:3000) di browser.

## 📋 Sprint Backlog (Sprint 1)

- [x] **HN-1:** Setup Proyek (2 poin)
- [ ] **HN-2:** Halaman Landing (5 poin)
- [ ] **HN-3:** Komponen Navigasi (3 poin)
- [ ] **HN-4:** Sistem Autentikasi (5 poin)
- [ ] **HN-5:** Daftar Posts (3 poin)
- [ ] **HN-6:** Fitur Buat Post (5 poin)

## 🎯 Pola Desain yang Digunakan

### Container-Presenter Pattern
- **Container:** Menangani logika bisnis dan state management
- **Presenter:** Fokus pada rendering UI dan presentasi data

### Factory Pattern
- Digunakan untuk pembuatan komponen secara dinamis

### Repository Pattern
- Layer abstraksi untuk akses data

## 🌿 Kontribusi

1. Fork repository
2. Buat feature branch (`git checkout -b feat/amazing-feature`)
3. Commit perubahan (`git commit -m 'feat: tambah fitur amazing feature'`)
4. Push ke branch (`git push origin feat/amazing-feature`)
5. Buat Pull Request

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
