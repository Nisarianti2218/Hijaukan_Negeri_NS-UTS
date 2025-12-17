# 🔧 Quick Setup: GitHub Actions + Vercel Deployment

## ⚡ 5 Langkah Setup (5 menit)

### 1️⃣ Dapatkan Vercel Tokens (2 menit)

```bash
# Buka di browser:
https://vercel.com/account/tokens
# Klik "Create" → Copy token
```

```bash
# Untuk Project ID dan Org ID, buka:
https://vercel.com/account/general
# Cari di settings project Anda
```

### 2️⃣ Tambah Secrets ke GitHub (2 menit)

1. Buka: `https://github.com/Nisarianti2218/Hijaukan_Negeri_NS-UTS`
2. Settings → Secrets and variables → Actions
3. Klik "New repository secret"
4. Tambahkan:
   ```
   VERCEL_TOKEN = (paste dari step 1)
   VERCEL_ORG_ID = (paste dari Vercel)
   VERCEL_PROJECT_ID = (paste dari Vercel)
   ```

### 3️⃣ Verifikasi Workflow (1 menit)

Buka GitHub → Actions → Lihat status workflow

### 4️⃣ Test dengan Push Kecil

```bash
# Buat file dummy dan push untuk test
echo "test" > test.txt
git add test.txt
git commit -m "test: trigger workflow"
git push origin main
```

### 5️⃣ Monitor di GitHub Actions

Buka Actions tab → Klik workflow run untuk lihat detail

---

## 📊 Workflow Behavior

| Event | Action |
|-------|--------|
| Push ke `main` | ✅ Lint → Test → Security Check → Deploy |
| Push ke `develop` | ✅ Lint → Test → Security Check (no deploy) |
| Pull Request | ✅ Code Quality Check |

---

## ✅ Setelah Setup Selesai

✅ Setiap push ke `main` akan **otomatis deploy ke Vercel**  
✅ Setiap PR akan **otomatis check code quality**  
✅ Setiap push akan **otomatis check security vulnerabilities**  

---

## 📖 Dokumentasi Lengkap

Lihat file: [`.github/WORKFLOW_SETUP.md`](./.github/WORKFLOW_SETUP.md)

---

**Selesai! 🎉 CI/CD Anda siap!**
