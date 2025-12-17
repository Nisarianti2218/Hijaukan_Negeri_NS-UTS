# 🚀 GitHub Actions Workflow Setup Guide

## Daftar Workflow

Aplikasi Hijaukan Negeri memiliki 2 GitHub Actions workflow untuk CI/CD otomatis:

### 1. **CI/CD Pipeline** (`.github/workflows/ci.yml`)
Pipeline utama yang menjalankan:
- ✅ **Lint & Test** - ESLint dan build check
- 🔒 **Security Audit** - npm audit untuk vulnerabilities
- 🚀 **Deploy to Vercel** - Deployment otomatis ke Vercel (hanya di branch main)

### 2. **Code Quality Check** (`.github/workflows/code-quality.yml`)
Validasi quality pada pull request:
- ✅ ESLint validation
- 📝 TypeScript type checking
- 🔨 Build verification

---

## 📋 Setup Instructions

### Step 1: Siapkan Vercel Tokens

Anda perlu mendapatkan 3 nilai dari Vercel dan menambahkannya ke GitHub Secrets:

**Untuk mendapatkan token:**

1. **VERCEL_TOKEN**
   - Buka: https://vercel.com/account/tokens
   - Klik "Create" untuk membuat token baru
   - Copy token dan simpan

2. **VERCEL_ORG_ID**
   - Buka: https://vercel.com/account/general
   - Cari "Team ID" atau "Org ID"
   - Copy ID tersebut

3. **VERCEL_PROJECT_ID**
   - Buka settings project di Vercel dashboard
   - Cari "Project ID"
   - Copy ID tersebut

### Step 2: Tambahkan Secrets ke GitHub

1. Buka repository Anda di GitHub
2. Pergi ke **Settings** → **Secrets and variables** → **Actions**
3. Klik **"New repository secret"**
4. Tambahkan 3 secrets berikut:

| Name | Value |
|------|-------|
| `VERCEL_TOKEN` | (paste token dari step 1) |
| `VERCEL_ORG_ID` | (paste org ID dari step 1) |
| `VERCEL_PROJECT_ID` | (paste project ID dari step 1) |

### Step 3: Verifikasi Setup

Workflow akan otomatis berjalan ketika:
- 🔄 Ada push ke branch `main` atau `develop`
- 📝 Ada pull request ke branch `main` atau `develop`

---

## 📊 Workflow Trigger

### Ketika Push ke Main
```
main branch push
  ↓
1. Lint & Test (check ESLint, build)
  ↓
2. Security Audit (npm audit)
  ↓
3. Deploy to Vercel (production)
  ↓
4. Notify (status summary)
```

### Ketika Push ke Develop
```
develop branch push
  ↓
1. Lint & Test
  ↓
2. Security Audit
  ↓
(Tidak deploy - hanya testing)
```

### Ketika Ada Pull Request
```
PR to main/develop
  ↓
1. Code Quality Check (lint, typescript, build)
  ↓
2. Comment on PR dengan status
```

---

## ✅ Checklist Sebelum Deploy

Pastikan Anda sudah:
- [ ] Memiliki akun Vercel
- [ ] Project Anda terdaftar di Vercel
- [ ] Mendapatkan `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`
- [ ] Menambahkan 3 secrets ke GitHub repository
- [ ] Test workflow dengan membuat PR atau push kecil

---

## 🔍 Monitoring Workflow

### Lihat Status Workflow
1. Buka repository di GitHub
2. Klik tab **"Actions"**
3. Pilih workflow yang ingin dilihat
4. Klik run terbaru untuk melihat detail

### Interpretasi Status
- ✅ **Success** - Semua check passed, siap deploy
- ❌ **Failed** - Ada error, perlu diperbaiki sebelum merge
- ⏳ **In Progress** - Workflow masih berjalan
- ⚠️ **Skipped** - Kondisi tidak terpenuhi

---

## 🐛 Troubleshooting

### "Workflow tidak berjalan sama sekali"
- Pastikan file workflow ada di `.github/workflows/`
- Pastikan branch push adalah `main` atau `develop`
- Cek action logs untuk error details

### "Deploy failed"
- Pastikan `VERCEL_TOKEN` valid dan belum expired
- Cek `VERCEL_ORG_ID` dan `VERCEL_PROJECT_ID` benar
- Buka Vercel dashboard untuk melihat error deployment

### "ESLint/Build failed"
- Check error message di workflow log
- Jalankan `npm run lint` lokal untuk debug
- Jalankan `npm run build` lokal untuk verify

---

## 📝 Contoh Output di GitHub

**Success Case:**
```
✅ Lint & Test: PASSED
✅ Security Audit: PASSED
✅ Deploy to Vercel: PASSED
🎉 Deployment successful!
```

**Failed Case:**
```
❌ Lint & Test: FAILED
  Error: ESLint found 2 issues
  
Fix the issues dan push lagi.
```

---

## 🚀 Tips

1. **Jalankan lint lokal sebelum push:**
   ```bash
   npm run lint
   ```

2. **Jalankan build lokal sebelum push:**
   ```bash
   npm run build
   ```

3. **Gunakan branch develop untuk testing:**
   ```bash
   git checkout -b develop
   # test changes
   git push origin develop
   # workflow akan berjalan tapi tidak deploy
   ```

4. **Push ke main hanya setelah testing:**
   ```bash
   git checkout main
   git merge develop
   git push origin main
   # deployment otomatis ke production
   ```

---

## 📚 Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Vercel GitHub Integration](https://vercel.com/docs/concepts/git/vercel-for-github)
- [ESLint Documentation](https://eslint.org/docs/latest/)
- [Next.js Build Documentation](https://nextjs.org/docs/app/building-your-application/deploying)

---

**Selamat! Workflow CI/CD Anda sudah siap! 🎉**
