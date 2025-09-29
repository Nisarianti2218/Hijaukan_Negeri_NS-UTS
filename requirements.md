# 📋 Panduan Setup Jira - Sprint 2 Hari Hijaukan Negeri

## 🎯 Setup Proyek di Jira

### 1. Membuat Proyek Baru
- **Tipe Proyek:** Scrum
- **Nama Proyek:** Hijaukan Negeri v2.0
- **Kunci Proyek:** HN
- **Pemimpin Proyek:** [Nama Anda]

### 2. Konfigurasi Tim
- **Anggota Tim:** 2 orang
- **Peran:** Developer (kedua anggota)
- **Durasi Sprint:** 2 hari

---

## 📝 Pembuatan Epic

### Epic 1: Pengaturan Dasar
- **Nama Epic:** Pengaturan Dasar
- **Kunci Epic:** HN-EPIC-1
- **Ringkasan:** Setup proyek dan struktur dasar

### Epic 2: Fitur Utama
- **Nama Epic:** Fitur Utama  
- **Kunci Epic:** HN-EPIC-2
- **Ringkasan:** Landing page, autentikasi, dan fungsionalitas posts

---

## 🎴 User Stories untuk Jira

### Story 1: Setup Proyek
```
Nama Story: Setup & Konfigurasi Proyek
Tautan Epic: Pengaturan Dasar (HN-EPIC-1)
Story Points: 2
Prioritas: Tertinggi
Assignee: Keduanya

Deskripsi:
Sebagai pengembang, saya ingin melakukan setup proyek Next.js dengan Tailwind CSS agar kami memiliki fondasi yang solid untuk membangun aplikasi.

Kriteria Penerimaan:
- [ ] Proyek Next.js berhasil dibuat dan berjalan
- [ ] Tailwind CSS terinstal dan terkonfigurasi
- [ ] Repository Git telah diinisialisasi
- [ ] Struktur folder dasar telah dibuat
- [ ] Konvensi Git branching dan commit diterapkan

Tasks:
1. HN-1.1: Buat proyek Next.js baru (30 menit)
   - Jalankan npx create-next-app@latest
   - Pilih konfigurasi TypeScript dan Tailwind
   - Test proyek berjalan di localhost:3000

2. HN-1.2: Setup Tailwind CSS dan konfigurasi (30 menit)
   - Konfigurasi tailwind.config.js
   - Setup globals.css dengan Tailwind directives
   - Test styling dengan contoh komponen

3. HN-1.3: Inisialisasi Git repository (30 menit)
   - git init dan setup remote origin GitHub
   - Buat .gitignore yang sesuai
   - Setup branch main dan develop
   - Commit pertama dengan konvensi

4. HN-1.4: Buat struktur folder proyek (30 menit)
   - Folder components/, hooks/, utils/
   - Folder containers/, presenters/ untuk pattern
   - Setup file README.md dasar dengan dokumentasi

Definition of Done:
- [ ] Proyek berjalan secara lokal tanpa error
- [ ] Repository Git dibuat dan di-push
- [ ] Tim dapat mengakses dan menjalankan proyek
- [ ] Konvensi Git diterapkan dengan benar
```

### Story 2: Halaman Landing
```
Nama Story: Implementasi Halaman Landing
Tautan Epic: Fitur Utama (HN-EPIC-2)
Story Points: 5
Prioritas: Tertinggi
Assignee: Anggota 1

Deskripsi:
Sebagai pengunjung, saya ingin melihat halaman landing yang menarik agar tertarik untuk menggunakan platform ini.

Kriteria Penerimaan:
- [ ] Bagian hero dengan judul dan call-to-action
- [ ] Informasi singkat tentang platform
- [ ] Navigasi ke halaman lain
- [ ] Desain responsif untuk mobile
- [ ] Desain yang profesional dan bersih

Tasks:
1. HN-2.1: Buat komponen Hero Section (90 menit)
   - Layout hero dengan background image/gradient
   - Judul utama "Hijaukan Negeri"
   - Subtitle dan deskripsi singkat
   - Button CTA "Mulai Berpartisipasi"

2. HN-2.2: Buat section Tentang Platform (60 menit)
   - Section dengan informasi platform
   - 3-4 fitur utama dengan ikon
   - Layout grid responsif
   - Animasi hover sederhana

3. HN-2.3: Buat section Statistik (45 menit)
   - Counter animasi untuk volunteer count
   - Jumlah pohon ditanam (mock data)
   - Lokasi konservasi yang aktif
   - Layout horizontal/grid

4. HN-2.4: Responsif design dan optimisasi (45 menit)
   - Test di mobile, tablet, desktop
   - Perbaiki breakpoints
   - Optimisasi loading images
   - Performance check

Definition of Done:
- [ ] Halaman landing dapat diakses di URL utama
- [ ] Semua link berfungsi dengan baik
- [ ] Responsif mobile telah diuji
- [ ] Tidak ada error di console
```

### Story 3: Komponen Navigasi
```
Nama Story: Komponen Navigasi & Layout
Tautan Epic: Fitur Utama (HN-EPIC-2)
Story Points: 3
Prioritas: Tinggi
Assignee: Anggota 2

Deskripsi:
Sebagai pengguna, saya ingin navigasi yang konsisten di semua halaman agar dapat dengan mudah berpindah antara bagian yang berbeda.

Kriteria Penerimaan:
- [] Komponen navbar dengan logo dan item menu
- [] Komponen footer dengan informasi dasar
- [ ] Menu hamburger responsif untuk mobile
- [ ] Status aktif untuk halaman saat ini
- [ ] Styling yang konsisten di semua komponen

Tasks:
1. HN-3.1: Buat komponen Navbar (75 menit)
   - Logo/brand "Hijaukan Negeri"
   - Menu items: Home, Posts, Komunitas, Login
   - Active state styling
   - Desktop layout dengan flexbox

2. HN-3.2: Implementasi hamburger menu mobile (60 menit)
   - Toggle button untuk mobile
   - Slide/fade animation
   - Close menu saat item diklik
   - Overlay background

3. HN-3.3: Buat komponen Footer (30 menit)
   - Copyright information
   - Social media links (placeholder)
   - Quick links menu
   - Responsive layout

4. HN-3.4: Setup Layout wrapper dan routing (15 menit)
   - Layout component untuk wrap semua pages
   - Implementasi di _app.js atau layout
   - Test navigasi antar halaman

Definition of Done:
- [ ] Komponen dapat digunakan kembali di semua halaman
- [ ] Navigasi mobile berfungsi dengan baik
- [ ] Sistem desain yang konsisten diterapkan
```

### Story 4: Sistem Autentikasi
```
Nama Story: Autentikasi Pengguna (Login/Register)
Tautan Epic: Fitur Utama (HN-EPIC-2)
Story Points: 5
Prioritas: Tinggi
Assignee: Anggota 1

Deskripsi:
Sebagai pengguna, saya ingin dapat mendaftar dan login ke platform agar dapat mengakses fitur-fitur yang dipersonalisasi.

Kriteria Penerimaan:
- [ ] Satu halaman dengan tab Login/Register
- [ ] Validasi form untuk field yang wajib diisi
- [ ] Data pengguna disimpan di localStorage
- [ ] Redirect setelah autentikasi berhasil
- [ ] Fungsionalitas logout
- [ ] Penanganan error dasar

Tasks:
1. HN-4.1: Buat halaman Auth dengan tabs (60 menit)
   - Layout halaman /auth
   - Tab switching Login/Register
   - Styling form container
   - Responsive design

2. HN-4.2: Implementasi form Login (45 menit)
   - Form fields: email, password
   - Client-side validation
   - Submit handler
   - Loading state

3. HN-4.3: Implementasi form Register (45 menit)
   - Form fields: nama, email, password, confirm password
   - Validation rules (email format, password match)
   - Submit handler
   - Success message

4. HN-4.4: Setup localStorage authentication (60 menit)
   - Function untuk save/get user data
   - Generate simple user ID
   - Check existing users untuk login
   - Session management

5. HN-4.5: Implementasi logout dan protected routes (30 menit)
   - Logout function (clear localStorage)
   - Update navbar saat login/logout
   - Redirect logic setelah auth
   - Basic protected route wrapper

Definition of Done:
- [ ] Alur autentikasi berfungsi end-to-end
- [ ] Sesi pengguna tersimpan
- [ ] Validasi form berfungsi
- [ ] Tidak ada kerentanan keamanan
```

### Story 5: Daftar Posts
```
Nama Story: Halaman Daftar Posts
Tautan Epic: Fitur Utama (HN-EPIC-2)
Story Points: 3
Prioritas: Tinggi
Assignee: Anggota 2

Deskripsi:
Sebagai pengunjung, saya ingin melihat semua posts yang tersedia agar dapat memilih aktivitas yang ingin diikuti.

Kriteria Penerimaan:
- [ ] Layout grid yang menampilkan semua posts
- [ ] Kartu post dengan judul, deskripsi, tanggal
- [ ] Status kosong "Belum ada posts"
- [ ] Layout grid yang responsif
- [ ] Klik untuk melihat detail post

Tasks:
1. HN-5.1: Buat halaman Posts (/posts) (30 menit)
   - Setup halaman posts.js
   - Basic layout dengan header
   - Container untuk grid posts
   - Responsive page layout

2. HN-5.2: Buat komponen PostCard (75 menit)
   - Card layout dengan image placeholder
   - Title, description (truncated), date
   - Author info dan kategori
   - Hover effects dan click handler
   - Responsive card design

3. HN-5.3: Implementasi fetch posts dari localStorage (30 menit)
   - Function untuk get semua posts
   - useEffect untuk load data
   - Loading state handling
   - Error state handling

4. HN-5.4: Handle empty state dan grid layout (45 menit)
   - "Belum ada posts" dengan illustration/icon
   - Button untuk "Buat Post Pertama"  
   - Grid responsive (1-2-3 columns)
   - Pagination placeholder (future)

Definition of Done:
- [ ] Posts ditampilkan dengan benar dari localStorage
- [ ] Desain responsif berfungsi
- [ ] Status kosong ditangani dengan baik
- [ ] Performa teroptimisasi
```

### Story 6: Fitur Buat Post
```
Nama Story: Fungsionalitas Buat Post
Tautan Epic: Fitur Utama (HN-EPIC-2)
Story Points: 5
Prioritas: Tinggi
Assignee: Anggota 1

Deskripsi:
Sebagai pengguna yang terautentikasi, saya ingin dapat membuat post baru agar dapat membagikan aktivitas volunteer.

Kriteria Penerimaan:
- [ ] Form dengan field judul, deskripsi, tanggal
- [ ] Validasi form untuk field yang wajib diisi
- [ ] Simpan post ke localStorage
- [ ] Redirect ke daftar posts setelah dibuat
- [ ] Hanya dapat diakses oleh pengguna yang login

Tasks:
1. HN-6.1: Buat halaman Create Post (/create) (45 menit)
   - Setup protected route /create
   - Basic page layout dan header
   - Form container styling
   - Breadcrumb navigation

2. HN-6.2: Implementasi form Create Post (90 menit)
   - Form fields: title, description, date, location
   - Textarea untuk description
   - Date picker input
   - Category dropdown (opsional)
   - Form styling yang konsisten

3. HN-6.3: Validasi form dan error handling (45 menit)
   - Required field validation
   - Min/max character limits
   - Date validation (tidak boleh masa lalu)
   - Error message display
   - Real-time validation feedback

4. HN-6.4: Save post ke localStorage (30 menit)
   - Generate unique post ID
   - Timestamp creation date
   - Associate dengan current user
   - Add to posts array di localStorage

5. HN-6.5: Success handling dan redirect (30 menit)
   - Success message/toast
   - Auto redirect ke /posts
   - Clear form setelah submit
   - Loading state during save

Definition of Done:
- [ ] Form berfungsi dengan validasi
- [ ] Data tersimpan dengan benar
- [ ] Feedback pengguna saat berhasil/error
- [ ] Protected route telah diimplementasi
```

### Story 7: Docker Build & Push
```
Nama Story: Docker Build & Push ke Docker Hub
Tautan Epic: Pengaturan Dasar (HN-EPIC-1)
Story Points: 2
Prioritas: Sedang
Assignee: Keduanya

Deskripsi:
Sebagai developer, saya ingin membuat Docker image dari aplikasi dan push ke Docker Hub untuk containerisasi dan distribusi.

Kriteria Penerimaan:
- [ ] Dockerfile dibuat dengan konfigurasi yang tepat
- [ ] Docker image berhasil di-build tanpa error
- [ ] Image berhasil di-push ke Docker Hub
- [ ] Dokumentasi build/push di README.md
- [ ] Image dapat di-pull dan dijalankan

Tasks:
1. HN-7.1: Buat Dockerfile (60 menit)
   - Setup Node.js base image
   - Copy package.json dan install dependencies
   - Copy source code dan build aplikasi
   - Setup NGINX untuk serve static files
   - Configure multi-stage build untuk optimize size

2. HN-7.2: Setup Docker Hub repository (30 menit)
   - Buat akun Docker Hub (jika belum ada)
   - Buat repository untuk project
   - Generate access token untuk CI/CD
   - Test login docker hub dari terminal

3. HN-7.3: Build dan push Docker image (45 menit)
   - Build image dengan tag yang sesuai
   - Test image secara lokal
   - Tag image untuk Docker Hub
   - Push image ke Docker Hub repository

4. HN-7.4: Dokumentasi dan validasi (15 menit)
   - Update README dengan Docker instructions
   - Dokumentasi command build/push/run
   - Test pull image dari Docker Hub
   - Validasi container berjalan dengan baik

Definition of Done:
- [ ] Docker image berhasil di-build
- [ ] Image tersedia di Docker Hub
- [ ] Dokumentasi lengkap di README
- [ ] Image dapat dijalankan sebagai container
```

---

## 🏃‍♂️ Konfigurasi Sprint

### Detail Sprint:
- **Nama Sprint:** HN Sprint 1 - Pengembangan MVP
- **Durasi Sprint:** 2 hari
- **Tanggal Mulai:** [Tanggal Hari Ini]
- **Tanggal Selesai:** [Tanggal Hari Ini + 2 hari]
- **Tujuan Sprint:** "Mengirimkan MVP yang berfungsi dengan landing page, autentikasi, dan manajemen posts"

### Sprint Backlog:
1. HN-1: Setup Proyek (2 poin)
2. HN-2: Halaman Landing (5 poin) 
3. HN-3: Komponen Navigasi (3 poin)
4. HN-4: Sistem Autentikasi (5 poin)
5. HN-5: Daftar Posts (3 poin)
6. HN-6: Fitur Buat Post (5 poin)
7. HN-7: Docker Build & Push (2 poin)

**Total Story Points:** 25 poin

---

## 📊 Konfigurasi Board Jira

### Setup Kolom:
1. **To Do** - Story yang belum dimulai
2. **In Progress** - Sedang dikerjakan
3. **Code Review** - Selesai tapi perlu review
4. **Testing** - Siap untuk diuji
5. **Done** - Selesai dan diuji

### Skala Story Point:
- **1 poin:** Sangat sederhana (< 2 jam)
- **2 poin:** Sederhana (2-4 jam)
- **3 poin:** Menengah (4-6 jam)
- **5 poin:** Besar (6-8 jam)
- **8 poin:** Sangat besar (harus dipecah)

### Label:
- `frontend` - Pekerjaan pengembangan frontend
- `backend` - Pekerjaan backend/API
- `ui` - Pekerjaan antarmuka pengguna
- `bug` - Perbaikan bug
- `enhancement` - Peningkatan fitur

---

## 🔄 Alur Kerja Harian di Jira

### Mulai Hari 1:
1. Pindahkan story yang ditugaskan ke "In Progress"
2. Update status story setiap 2-3 jam
3. Tambahkan komentar untuk update progress
4. Catat waktu yang dihabiskan (opsional)

### Daily Standup (via Komentar):
- Komentar di setiap story yang dikerjakan
- Format: "Progress: [apa yang selesai], Selanjutnya: [apa yang akan dikerjakan], Kendala: [masalah yang ada]"

### Akhir Hari:
1. Update semua status story
2. Pindahkan pekerjaan yang selesai ke "Code Review" atau "Testing"
3. Siapkan prioritas untuk besok

### Akhir Hari 2:
1. Persiapan demo
2. Pindahkan semua fitur yang selesai ke "Done"
3. Update sprint dengan status akhir

---

## 📈 Pelaporan & Metrik

### Burndown Chart:
- Lacak penyelesaian story points harian
- Target: 25 poin selama 2 hari
- Target Hari 1: ~15 poin tersisa
- Target Hari 2: 0 poin tersisa

### Pelacakan Velocity:
- Velocity Sprint 1 akan jadi baseline
- Target tingkat penyelesaian: 90%+

### Metrik Laporan Sprint:
- **Berkomitmen:** 25 story points
- **Selesai:** [Akan diisi]
- **Tingkat Penyelesaian:** [Akan dihitung]
- **Velocity:** [Poin yang selesai]

---

## 🎯 Widget Dashboard Jira

### Widget yang Direkomendasikan:
1. **Sprint Burndown** - Lacak progress harian
2. **Sprint Health** - Status keseluruhan sprint
3. **Assigned to Me** - Daftar tugas personal
4. **Recently Updated** - Perubahan terbaru
5. **Sprint Statistics** - Metrik kunci

---

## 🚨 Aksi Cepat & Shortcut

### Shortcut Keyboard Jira:
- `G + D` - Ke dashboard
- `G + A` - Ke Agile board
- `C` - Buat issue baru
- `E` - Edit issue saat ini
- `/` - Pencarian cepat

### Aplikasi Mobile:
- Install aplikasi mobile Jira untuk update cepat
- Aktifkan notifikasi untuk update penting

---

## ✅ Kriteria Keberhasilan

### Metrik Keberhasilan Sprint:
- [ ] Semua 7 user stories selesai
- [ ] 90%+ story points terselesaikan
- [ ] Tidak ada bug kritis
- [ ] Docker image berhasil di-build dan di-push ke Docker Hub
- [ ] Kedua anggota tim berkontribusi setara

### Dokumentasi di Jira:
- [ ] Semua user stories memiliki kriteria penerimaan yang detail
- [ ] Progress harian diupdate dalam komentar
- [ ] Catatan sprint review didokumentasikan
- [ ] Action items retrospektif dicatat

---

**💡 Tips Pro untuk Jira:**
- Gunakan @mentions untuk komunikasi cepat
- Lampirkan screenshot untuk visual progress
- Link issue terkait dengan "relates to" atau "blocks"
- Gunakan time tracking untuk perencanaan masa depan
- Export laporan untuk dokumentasi

---

## 🛠️ Framework & Pola Desain

### Framework Yang Digunakan:
- **Framework:** Next.js (berbasis React)
- **Bahasa:** JavaScript/TypeScript
- **Paradigma:** Object-Oriented Programming (OOP)
- **Arsitektur:** Full-stack (Frontend + Backend dalam satu framework)

### Pola Desain Yang Diterapkan:

#### 1. **Pola Container-Presenter**
```javascript
// Container (Penanganan Logic)
// components/containers/PostsContainer.js
class PostsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: [], loading: true };
  }
  
  async fetchPosts() {
    // Logika bisnis untuk mengambil data
  }
  
  render() {
    return <PostsPresenter {...this.state} />;
  }
}

// Presenter (Rendering UI)
// components/presenters/PostsPresenter.js
const PostsPresenter = ({ posts, loading }) => {
  return (
    <div className="posts-grid">
      {loading ? <Loading /> : <PostsList posts={posts} />}
    </div>
  );
};
```

#### 2. **Pola Hooks (React Modern)**
```javascript
// Custom Hooks untuk logika yang dapat digunakan ulang
// hooks/useAuth.js
const useAuth = () => {
  const [user, setUser] = useState(null);
  
  const login = useCallback((userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  }, []);
  
  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem('user');
  }, []);
  
  return { user, login, logout };
};
```

#### 3. **Pola Repository**
```javascript
// utils/repositories/PostRepository.js
class PostRepository {
  constructor() {
    this.storage = new LocalStorageAdapter();
  }
  
  async getAllPosts() {
    return this.storage.get('posts') || [];
  }
  
  async createPost(postData) {
    const posts = await this.getAllPosts();
    const newPost = { id: Date.now(), ...postData };
    posts.push(newPost);
    this.storage.set('posts', posts);
    return newPost;
  }
  
  async getPostById(id) {
    const posts = await this.getAllPosts();
    return posts.find(post => post.id === id);
  }
}
```

#### 4. **Pola Factory untuk Komponen**
```javascript
// components/factory/ComponentFactory.js
class ComponentFactory {
  static createCard(type, props) {
    switch(type) {
      case 'post':
        return new PostCard(props);
      case 'community':
        return new CommunityCard(props);
      case 'user':
        return new UserCard(props);
      default:
        throw new Error(`Tipe kartu tidak dikenal: ${type}`);
    }
  }
}
```

### Struktur Folder OOP:
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
└── pages/              # Halaman Next.js
```

---

## 📚 Manajemen Versi (Git & GitHub)

### Setup Repository:
- **Nama Repository:** hijaukan-negeri-v2
- **Strategi Branch:** Feature Branch Workflow
- **Branch Utama:** `main`
- **Branch Pengembangan:** `develop`

### Konvensi Penamaan Branch:
```bash
# Fitur baru
feat_authentication/29-09-2025
feat_posts_crud/29-09-2025
feat_landing_page/29-09-2025

# Perbaikan bug
fix_login_validation/30-09-2025
fix_responsive_design/30-09-2025

# Styling
style_navbar_design/29-09-2025
style_post_cards/30-09-2025
```

### Konvensi Pesan Commit:
```bash
# Penambahan fitur
feat: implementasi autentikasi pengguna dengan localStorage
feat: tambah fungsionalitas buat post
feat: buat landing page responsif

# Perbaikan bug
fix: perbaiki masalah validasi form di login
fix: perbaiki overflow menu navigasi mobile

# Styling UI
style: perbaiki desain kartu post dengan Tailwind
style: tambah efek hover pada tombol navigasi

# Perubahan non-fungsional
chore: setup proyek Next.js dengan Tailwind CSS
chore: tambah konfigurasi ESLint dan Prettier
chore: update README dengan dokumentasi proyek
```

### Alur Kerja Git untuk 2 Hari:

#### Hari 1:
```bash
# Setup repository
git init
git remote add origin https://github.com/username/hijaukan-negeri-v2.git

# Anggota 1 - Autentikasi
git checkout -b feat_authentication/29-09-2025
# ... coding ...
git add .
git commit -m "feat: implementasi registrasi dan login pengguna"
git push origin feat_authentication/29-09-2025

# Anggota 2 - Landing Page
git checkout -b feat_landing_page/29-09-2025
# ... coding ...
git add .
git commit -m "feat: buat landing page responsif dengan hero section"
git push origin feat_landing_page/29-09-2025
```

#### Hari 2:
```bash
# Merge hari 1 ke main
git checkout main
git merge feat_authentication/29-09-2025
git merge feat_landing_page/29-09-2025

# Lanjut pengembangan
git checkout -b feat_posts_crud/30-09-2025
git commit -m "feat: tambah fungsionalitas CRUD posts"
git push origin feat_posts_crud/30-09-2025
```

### Template Pull Request:
```markdown
## 📋 Deskripsi
[Jelaskan perubahan yang dilakukan]

## ✅ Checklist
- [ ] Kode mengikuti konvensi
- [ ] Testing dilakukan di lokal
- [ ] Desain responsif diuji
- [ ] Tidak ada error di console

## 🎯 Jira Story
Menutup HN-[nomor]

## 📸 Screenshot
[Lampirkan screenshot jika ada perubahan UI]
```

---

## 🐳 Implementasi Docker

### Dockerfile untuk Next.js:
```dockerfile
# Dockerfile
FROM node:18-alpine AS base

# Install dependencies hanya ketika diperlukan
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies berdasarkan package manager yang digunakan
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile tidak ditemukan." && exit 1; \
  fi

# Rebuild source code hanya ketika diperlukan
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build aplikasi
RUN yarn build

# Production image, copy semua file dan jalankan next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Set permission yang benar untuk prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Otomatis memanfaatkan output traces untuk mengurangi ukuran image
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
```

### Docker Compose (Opsional):
```yaml
# docker-compose.yml
version: '3.8'

services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    volumes:
      - .:/app
      - /app/node_modules
    depends_on:
      - db

  db:
    image: mongo:latest
    ports:
      - "27017:27017"
    environment:
      MONGO_INITDB_ROOT_USERNAME: admin
      MONGO_INITDB_ROOT_PASSWORD: password
    volumes:
      - mongo-data:/data/db

volumes:
  mongo-data:
```

### Perintah Docker:
```bash
# Build image
docker build -t mahasiswa/hijaukan-negeri:v1-UTS .

# Tag untuk berbagai versi
docker tag mahasiswa/hijaukan-negeri:v1-UTS mahasiswa/hijaukan-negeri:submit-UTS

# Jalankan secara lokal untuk testing
docker run -p 3000:3000 mahasiswa/hijaukan-negeri:v1-UTS

# Push ke Docker Hub
docker login
docker push mahasiswa/hijaukan-negeri:v1-UTS
docker push mahasiswa/hijaukan-negeri:submit-UTS

# Dengan docker-compose
docker-compose up --build
```

### Repository Docker Hub:
- **Repository:** `mahasiswa/hijaukan-negeri`
- **Tags:** `v1-UTS`, `submit-UTS`
- **Visibilitas:** Publik
- **Link:** `https://hub.docker.com/r/mahasiswa/hijaukan-negeri`

### Konfigurasi Next.js untuk Docker:
```javascript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  output: 'standalone', // Untuk optimisasi Docker
  images: {
    domains: ['localhost'],
  },
}

module.exports = nextConfig
```

### .dockerignore:
```
node_modules
.next
.git
.gitignore
README.md
Dockerfile
docker-compose.yml
.env*.local
```

---

## 📋 Checklist Teknis

### Framework & Pola Desain:
- [ ] Setup Next.js dengan TypeScript
- [ ] Implementasi pola Container-Presenter
- [ ] Custom Hooks untuk penggunaan ulang logika
- [ ] Pola Repository untuk akses data
- [ ] Pola Factory untuk pembuatan komponen
- [ ] Dokumentasi pola desain di README

### Git & Kontrol Versi:
- [ ] Repository dibuat dengan konvensi penamaan
- [ ] Strategi branch diimplementasi
- [ ] Pesan commit mengikuti konvensi
- [ ] Template pull request disiapkan
- [ ] Kedua anggota berkontribusi dengan commit seimbang

### Implementasi Docker:
- [ ] Dockerfile dibuat dan diuji
- [ ] Docker image berhasil di-build
- [ ] Image di-tag dengan format yang benar
- [ ] Repository Docker Hub dibuat (publik)
- [ ] Image berhasil di-push ke Docker Hub
- [ ] Link Docker Hub didokumentasikan di README
- [ ] Setup docker-compose (opsional)

### Dokumentasi:
- [ ] README.md diperbarui dengan semua informasi
- [ ] Penjelasan pola desain didokumentasikan
- [ ] Instruksi setup Docker disertakan
- [ ] Alur kerja Git didokumentasikan

---
