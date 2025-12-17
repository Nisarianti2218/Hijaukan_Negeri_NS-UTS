# 🌱 Panduan Authentikasi - Hijaukan Negeri

## Bagaimana Cara Login/Register?

Aplikasi **Hijaukan Negeri** menggunakan sistem authentikasi client-side berbasis localStorage. Berikut adalah panduan lengkap:

---

## 📋 Cara Menggunakan Aplikasi

### 1️⃣ **Pertama Kali Menggunakan?**
Jika Anda baru pertama kali, Anda harus **REGISTER** (membuat akun) terlebih dahulu.

**Langkah-langkah Register:**
1. Buka link deployment: [https://hijaukan-negeri-mj6pmsdse-nisa-riantis-projects.vercel.app](https://hijaukan-negeri-mj6pmsdse-nisa-riantis-projects.vercel.app)
2. Klik tombol **"Login"** di navbar atau tunggu di halaman home
3. Anda akan diarahkan ke halaman `/auth`
4. Klik tab **"📝 Register"**
5. Isi form dengan data Anda:
   - **Nama**: Nama lengkap Anda (contoh: "John Doe")
   - **Email**: Email yang valid (contoh: "john@example.com")
   - **Password**: Password minimal 6 karakter
   - **Konfirmasi Password**: Ulangi password yang sama
6. Klik tombol **"Register"**
7. Anda akan otomatis login dan diarahkan ke halaman utama

---

### 2️⃣ **Akun Sudah Ada?**
Jika Anda sudah memiliki akun, cukup **LOGIN**.

**Langkah-langkah Login:**
1. Buka link deployment
2. Klik tombol **"Login"** di navbar
3. Anda akan di halaman `/auth`
4. Pastikan tab **"🔑 Login"** aktif
5. Isi form dengan:
   - **Email**: Email yang didaftarkan
   - **Password**: Password Anda
6. Klik tombol **"Login"**
7. Anda akan diarahkan ke halaman utama jika berhasil

---

## 💾 Penyimpanan Data

**⚠️ Penting untuk diketahui:**
- Data akun disimpan di **localStorage browser** Anda (client-side)
- Data **bersifat lokal** per device/browser
- Jika Anda membuka di browser lain atau device lain, Anda perlu register ulang
- Session berlaku selama **6 jam**, setelah itu Anda perlu login ulang

---

## 📱 Setelah Login, Apa yang Bisa Dilakukan?

Setelah Anda berhasil login, navbar akan menampilkan:
- ✅ Nama Anda
- ✅ Menu **"Buat Post"** - untuk membuat postingan baru
- ✅ Menu **"Profile"** - untuk lihat/edit profil Anda
- ✅ Tombol **"Logout"** - untuk logout

**Fitur yang dapat diakses:**
1. **🏠 Home** - Lihat halaman utama
2. **📝 Posts** - Lihat semua postingan
3. **👥 Komunitas** - Lihat komunitas pengguna
4. **✍️ Buat Post** - Buat postingan baru (hanya jika login)
5. **👤 Profile** - Lihat dan edit profil Anda (hanya jika login)
6. **🚪 Logout** - Keluar dari akun

---

## 🔑 Contoh Akun Test

Jika Anda ingin test dengan cepat, gunakan data berikut saat register:

**Akun Test 1:**
```
Nama: Nisa Rianti
Email: nisa@test.com
Password: password123
Konfirmasi: password123
```

**Akun Test 2:**
```
Nama: Admin Hijaukan
Email: admin@hijaukan.com
Password: admin123456
Konfirmasi: admin123456
```

> Setelah register, Anda bisa login kapan saja dengan email dan password yang sama!

---

## ❓ Troubleshooting

**Q: Lupa password, bagaimana?**
A: Karena ini development mode dengan localStorage, tidak ada fitur "lupa password". Anda harus register akun baru dengan email berbeda.

**Q: Bisakah saya login di device lain?**
A: Data hanya tersimpan lokal di device Anda. Jika ingin akses dari device lain, register ulang atau sinkronisasi akan diimplementasikan di versi production.

**Q: Session saya hilang/logout otomatis?**
A: Session berlaku 6 jam. Jika lebih dari itu, Anda perlu login ulang.

**Q: Bagaimana cara lihat profile saya?**
A: Setelah login, klik menu **"Profile"** di navbar untuk melihat dan edit informasi profil Anda.

---

## 🚀 Untuk Production (Rekomendasi)

Untuk deployment production, disarankan untuk:
1. ✅ Pindahkan auth ke backend dengan database (MongoDB)
2. ✅ Implementasi password hashing (bcrypt)
3. ✅ Gunakan JWT token untuk session management
4. ✅ Implementasikan "forget password" feature
5. ✅ Tambahkan email verification
6. ✅ Implementasikan refresh token untuk keamanan lebih baik

---

**Selamat menggunakan Hijaukan Negeri! 🌱**
Terima kasih telah bergabung dalam aksi konservasi lingkungan.
