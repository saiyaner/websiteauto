# WebsiteAuto Project

Platform marketplace untuk **menjual website, template, dan jasa programmer**.
Project ini menggunakan arsitektur **Fullstack**:

* **Frontend:** React + Vite
* **Backend:** Laravel API
* **Version Control:** Git + GitHub

Repository: https://github.com/saiyaner/websiteauto

---

# 1. Persiapan Environment

Pastikan software berikut sudah terinstall:

* Git
* Node.js (v18+)
* NPM / Yarn
* PHP (8.2+)
* Composer
* Database (MySQL / PostgreSQL)

Cek instalasi:

```bash
node -v
npm -v
php -v
composer -v
git --version
```

---

# 2. Clone / Pull Project

Clone repository:

```bash
git clone https://github.com/saiyaner/websiteauto.git
```

Masuk ke folder project:

```bash
cd websiteauto
```

Jika repository sudah ada di lokal, cukup lakukan:

```bash
git pull origin main
```

---

# 3. Setup Backend (Laravel)

Masuk ke folder backend:

```bash
cd backend
```

Install dependency Laravel:

```bash
composer install
```

Copy file environment:

```bash
cp .env.example .env
```

Generate application key:

```bash
php artisan key:generate
```

Setup database di file `.env`:

```
DB_DATABASE=websiteauto
DB_USERNAME=root
DB_PASSWORD=
```

Migrasi database:

```bash
php artisan migrate
```

Jalankan server Laravel:

```bash
php artisan serve
```

Backend akan berjalan di:

```
http://127.0.0.1:8000
```

---

# 4. Setup Frontend (React)

Masuk ke folder frontend:

```bash
cd ../frontend
```

Install dependency:

```bash
npm install
```

Jalankan React development server:

```bash
npm run dev
```

Frontend akan berjalan di:

```
http://localhost:5173
```

---

# 5. Integrasi API

Frontend akan mengakses API Laravel melalui endpoint:

```
http://127.0.0.1:8000/api
```

Contoh request API:

```
GET /api/products
POST /api/login
POST /api/orders
```

---

# 6. Workflow Development

Setiap perubahan kode lakukan langkah berikut:

Tambahkan perubahan:

```bash
git add .
```

Commit perubahan:

```bash
git commit -m "update fitur"
```

Push ke GitHub:

```bash
git push origin main
```

Jika menggunakan branch development:

```bash
git push origin dev
```

---

# 7. Update Project dari GitHub

Sebelum mulai coding, tarik perubahan terbaru:

```bash
git pull origin main
```

---

# 8. Struktur Project

```
websiteauto
│
├── backend        # Laravel API
│
├── frontend       # React + Vite
│
├── .gitignore
│
└── README.md
```

---

# 9. Design UI (Figma)

Design UI/UX dapat diakses melalui link berikut:

```
https://www.figma.com/design/JFZP6ihXy7PRgV6ZgDHrkB/project-bersama?node-id=0-1&t=D3KDB0p0Zt0jBP0Z-1
```

Silakan buka link tersebut untuk melihat:

* Layout halaman
* Komponen UI
* Design system
* Flow aplikasi

---

# 10. Konsep Platform

Website ini adalah marketplace yang memungkinkan pengguna untuk:

* Menjual template website
* Menyewa programmer
* Membeli jasa pembuatan website
* Mendownload produk digital

---

# 11. Developer Notes

Pastikan file berikut **tidak di push ke repository**:

```
node_modules
vendor
.env
```

File tersebut sudah difilter menggunakan `.gitignore`.

---

# 12. License

Project ini dibuat untuk kebutuhan pengembangan dan pembelajaran.
