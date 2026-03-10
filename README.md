[ERD.drawio](https://github.com/user-attachments/files/25865637/ERD.drawio)# WebsiteAuto Project

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

---

# 13. ERD

```[Uplo<mxfile host="app.diagrams.net" agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" version="29.2.9">
  <diagram name="Page-1" id="uiMljcwLmA6MhpapdmNE">
    <mxGraphModel dx="3473" dy="1780" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="850" pageHeight="1100" math="0" shadow="0">
      <root>
        <mxCell id="0" />
        <mxCell id="1" parent="0" />
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-3" parent="1" style="swimlane;fontStyle=1;align=center;verticalAlign=top;childLayout=stackLayout;horizontal=1;startSize=28.952380952380953;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=0;marginBottom=0;" value="users" vertex="1">
          <mxGeometry height="303.95238095238096" width="215" x="906" y="490" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-4" parent="_7UBIqfYG1uWsfeUUJpH-3" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" value="+int id PK" vertex="1">
          <mxGeometry height="29" width="215" y="28.952380952380953" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-5" parent="_7UBIqfYG1uWsfeUUJpH-3" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" value="+string name" vertex="1">
          <mxGeometry height="29" width="215" y="57.95238095238095" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-6" parent="_7UBIqfYG1uWsfeUUJpH-3" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" value="+string email" vertex="1">
          <mxGeometry height="29" width="215" y="86.95238095238095" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-7" parent="_7UBIqfYG1uWsfeUUJpH-3" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" value="+string password" vertex="1">
          <mxGeometry height="29" width="215" y="115.95238095238095" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-8" parent="_7UBIqfYG1uWsfeUUJpH-3" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" value="+enum role" vertex="1">
          <mxGeometry height="29" width="215" y="144.95238095238096" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-9" parent="_7UBIqfYG1uWsfeUUJpH-3" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" value="+string phone" vertex="1">
          <mxGeometry height="29" width="215" y="173.95238095238096" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-10" parent="_7UBIqfYG1uWsfeUUJpH-3" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" value="+text address" vertex="1">
          <mxGeometry height="29" width="215" y="202.95238095238096" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-11" parent="_7UBIqfYG1uWsfeUUJpH-3" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" value="+timestamp created_at" vertex="1">
          <mxGeometry height="29" width="215" y="231.95238095238096" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-12" parent="_7UBIqfYG1uWsfeUUJpH-3" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" value="+timestamp updated_at" vertex="1">
          <mxGeometry height="29" width="215" y="260.95238095238096" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-13" parent="_7UBIqfYG1uWsfeUUJpH-3" style="line;strokeWidth=1;fillColor=none;align=left;verticalAlign=middle;spacingTop=-1;spacingLeft=3;spacingRight=3;rotatable=0;labelPosition=right;points=[];portConstraint=eastwest;strokeColor=inherit;" vertex="1">
          <mxGeometry height="14" width="215" y="289.95238095238096" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-14" parent="1" style="swimlane;fontStyle=1;align=center;verticalAlign=top;childLayout=stackLayout;horizontal=1;startSize=27.586206896551722;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=0;marginBottom=0;" value="products" vertex="1">
          <mxGeometry height="405.58620689655174" width="228" x="1344" y="1456" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-15" parent="_7UBIqfYG1uWsfeUUJpH-14" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" value="+int id PK" vertex="1">
          <mxGeometry height="28" width="228" y="27.586206896551722" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-16" parent="_7UBIqfYG1uWsfeUUJpH-14" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" value="+string name" vertex="1">
          <mxGeometry height="28" width="228" y="55.58620689655172" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-17" parent="_7UBIqfYG1uWsfeUUJpH-14" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" value="+string slug" vertex="1">
          <mxGeometry height="28" width="228" y="83.58620689655172" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-18" parent="_7UBIqfYG1uWsfeUUJpH-14" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" value="+text description" vertex="1">
          <mxGeometry height="28" width="228" y="111.58620689655172" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-19" parent="_7UBIqfYG1uWsfeUUJpH-14" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" value="+decimal price" vertex="1">
          <mxGeometry height="28" width="228" y="139.58620689655172" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-20" parent="_7UBIqfYG1uWsfeUUJpH-14" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" value="+enum type" vertex="1">
          <mxGeometry height="28" width="228" y="167.58620689655172" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-21" parent="_7UBIqfYG1uWsfeUUJpH-14" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" value="+int stock" vertex="1">
          <mxGeometry height="28" width="228" y="195.58620689655172" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-22" parent="_7UBIqfYG1uWsfeUUJpH-14" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" value="+string file_path" vertex="1">
          <mxGeometry height="28" width="228" y="223.58620689655172" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-23" parent="_7UBIqfYG1uWsfeUUJpH-14" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" value="+string image_url" vertex="1">
          <mxGeometry height="28" width="228" y="251.58620689655172" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-24" parent="_7UBIqfYG1uWsfeUUJpH-14" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" value="+bool is_active" vertex="1">
          <mxGeometry height="28" width="228" y="279.58620689655174" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-25" parent="_7UBIqfYG1uWsfeUUJpH-14" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" value="+json attributes" vertex="1">
          <mxGeometry height="28" width="228" y="307.58620689655174" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-26" parent="_7UBIqfYG1uWsfeUUJpH-14" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" value="+timestamp created_at" vertex="1">
          <mxGeometry height="28" width="228" y="335.58620689655174" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-27" parent="_7UBIqfYG1uWsfeUUJpH-14" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" value="+timestamp updated_at" vertex="1">
          <mxGeometry height="28" width="228" y="363.58620689655174" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-28" parent="_7UBIqfYG1uWsfeUUJpH-14" style="line;strokeWidth=1;fillColor=none;align=left;verticalAlign=middle;spacingTop=-1;spacingLeft=3;spacingRight=3;rotatable=0;labelPosition=right;points=[];portConstraint=eastwest;strokeColor=inherit;" vertex="1">
          <mxGeometry height="14" width="228" y="391.58620689655174" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-29" parent="1" style="swimlane;fontStyle=1;align=center;verticalAlign=top;childLayout=stackLayout;horizontal=1;startSize=30.11764705882353;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=0;marginBottom=0;" value="categories" vertex="1">
          <mxGeometry height="255.11764705882354" width="234" x="1535" y="2396" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-30" parent="_7UBIqfYG1uWsfeUUJpH-29" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" value="+int id PK" vertex="1">
          <mxGeometry height="30" width="234" y="30.11764705882353" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-31" parent="_7UBIqfYG1uWsfeUUJpH-29" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" value="+string name" vertex="1">
          <mxGeometry height="30" width="234" y="60.11764705882353" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-32" parent="_7UBIqfYG1uWsfeUUJpH-29" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" value="+string slug" vertex="1">
          <mxGeometry height="30" width="234" y="90.11764705882354" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-33" parent="_7UBIqfYG1uWsfeUUJpH-29" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" value="+text description" vertex="1">
          <mxGeometry height="30" width="234" y="120.11764705882354" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-34" parent="_7UBIqfYG1uWsfeUUJpH-29" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" value="+int parent_id FK" vertex="1">
          <mxGeometry height="30" width="234" y="150.11764705882354" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-35" parent="_7UBIqfYG1uWsfeUUJpH-29" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" value="+timestamp created_at" vertex="1">
          <mxGeometry height="30" width="234" y="180.11764705882354" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-36" parent="_7UBIqfYG1uWsfeUUJpH-29" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" value="+timestamp updated_at" vertex="1">
          <mxGeometry height="30" width="234" y="210.11764705882354" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-37" parent="_7UBIqfYG1uWsfeUUJpH-29" style="line;strokeWidth=1;fillColor=none;align=left;verticalAlign=middle;spacingTop=-1;spacingLeft=3;spacingRight=3;rotatable=0;labelPosition=right;points=[];portConstraint=eastwest;strokeColor=inherit;" vertex="1">
          <mxGeometry height="15" width="234" y="240.11764705882354" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-38" parent="1" style="swimlane;fontStyle=1;align=center;verticalAlign=top;childLayout=stackLayout;horizontal=1;startSize=38.857142857142854;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=0;marginBottom=0;" value="product_categories" vertex="1">
          <mxGeometry height="135.85714285714286" width="236" x="1534" y="2082" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-39" parent="_7UBIqfYG1uWsfeUUJpH-38" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" value="+int product_id FK" vertex="1">
          <mxGeometry height="39" width="236" y="38.857142857142854" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-40" parent="_7UBIqfYG1uWsfeUUJpH-38" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" value="+int category_id FK" vertex="1">
          <mxGeometry height="39" width="236" y="77.85714285714286" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-41" parent="_7UBIqfYG1uWsfeUUJpH-38" style="line;strokeWidth=1;fillColor=none;align=left;verticalAlign=middle;spacingTop=-1;spacingLeft=3;spacingRight=3;rotatable=0;labelPosition=right;points=[];portConstraint=eastwest;strokeColor=inherit;" vertex="1">
          <mxGeometry height="19" width="236" y="116.85714285714286" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-42" parent="1" style="swimlane;fontStyle=1;align=center;verticalAlign=top;childLayout=stackLayout;horizontal=1;startSize=28.52173913043478;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=0;marginBottom=0;" value="orders" vertex="1">
          <mxGeometry height="332.52173913043475" width="220" x="602" y="1492" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-43" parent="_7UBIqfYG1uWsfeUUJpH-42" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" value="+int id PK" vertex="1">
          <mxGeometry height="29" width="220" y="28.52173913043478" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-44" parent="_7UBIqfYG1uWsfeUUJpH-42" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" value="+string order_number" vertex="1">
          <mxGeometry height="29" width="220" y="57.52173913043478" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-45" parent="_7UBIqfYG1uWsfeUUJpH-42" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" value="+int user_id FK" vertex="1">
          <mxGeometry height="29" width="220" y="86.52173913043478" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-46" parent="_7UBIqfYG1uWsfeUUJpH-42" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" value="+decimal total_amount" vertex="1">
          <mxGeometry height="29" width="220" y="115.52173913043478" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-47" parent="_7UBIqfYG1uWsfeUUJpH-42" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" value="+enum status" vertex="1">
          <mxGeometry height="29" width="220" y="144.52173913043478" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-48" parent="_7UBIqfYG1uWsfeUUJpH-42" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" value="+enum payment_status" vertex="1">
          <mxGeometry height="29" width="220" y="173.52173913043478" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-49" parent="_7UBIqfYG1uWsfeUUJpH-42" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" value="+text notes" vertex="1">
          <mxGeometry height="29" width="220" y="202.52173913043478" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-50" parent="_7UBIqfYG1uWsfeUUJpH-42" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" value="+int coupon_id FK" vertex="1">
          <mxGeometry height="29" width="220" y="231.52173913043478" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-51" parent="_7UBIqfYG1uWsfeUUJpH-42" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" value="+timestamp created_at" vertex="1">
          <mxGeometry height="29" width="220" y="260.52173913043475" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-52" parent="_7UBIqfYG1uWsfeUUJpH-42" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" value="+timestamp updated_at" vertex="1">
          <mxGeometry height="29" width="220" y="289.52173913043475" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-53" parent="_7UBIqfYG1uWsfeUUJpH-42" style="line;strokeWidth=1;fillColor=none;align=left;verticalAlign=middle;spacingTop=-1;spacingLeft=3;spacingRight=3;rotatable=0;labelPosition=right;points=[];portConstraint=eastwest;strokeColor=inherit;" vertex="1">
          <mxGeometry height="14" width="220" y="318.52173913043475" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-54" parent="1" style="swimlane;fontStyle=1;align=center;verticalAlign=top;childLayout=stackLayout;horizontal=1;startSize=30.11764705882353;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=0;marginBottom=0;" value="order_items" vertex="1">
          <mxGeometry height="255.11764705882354" width="238" x="657" y="2022" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-55" parent="_7UBIqfYG1uWsfeUUJpH-54" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" value="+int id PK" vertex="1">
          <mxGeometry height="30" width="238" y="30.11764705882353" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-56" parent="_7UBIqfYG1uWsfeUUJpH-54" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" value="+int order_id FK" vertex="1">
          <mxGeometry height="30" width="238" y="60.11764705882353" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-57" parent="_7UBIqfYG1uWsfeUUJpH-54" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" value="+int product_id FK" vertex="1">
          <mxGeometry height="30" width="238" y="90.11764705882354" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-58" parent="_7UBIqfYG1uWsfeUUJpH-54" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" value="+int quantity" vertex="1">
          <mxGeometry height="30" width="238" y="120.11764705882354" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-59" parent="_7UBIqfYG1uWsfeUUJpH-54" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" value="+decimal price" vertex="1">
          <mxGeometry height="30" width="238" y="150.11764705882354" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-60" parent="_7UBIqfYG1uWsfeUUJpH-54" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" value="+decimal subtotal" vertex="1">
          <mxGeometry height="30" width="238" y="180.11764705882354" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-61" parent="_7UBIqfYG1uWsfeUUJpH-54" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" value="+timestamp created_at" vertex="1">
          <mxGeometry height="30" width="238" y="210.11764705882354" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-62" parent="_7UBIqfYG1uWsfeUUJpH-54" style="line;strokeWidth=1;fillColor=none;align=left;verticalAlign=middle;spacingTop=-1;spacingLeft=3;spacingRight=3;rotatable=0;labelPosition=right;points=[];portConstraint=eastwest;strokeColor=inherit;" vertex="1">
          <mxGeometry height="15" width="238" y="240.11764705882354" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-63" parent="1" style="swimlane;fontStyle=1;align=center;verticalAlign=top;childLayout=stackLayout;horizontal=1;startSize=29.473684210526315;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=0;marginBottom=0;" value="payments" vertex="1">
          <mxGeometry height="276.4736842105263" width="239" x="320" y="2010" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-64" parent="_7UBIqfYG1uWsfeUUJpH-63" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" value="+int id PK" vertex="1">
          <mxGeometry height="29" width="239" y="29.473684210526315" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-65" parent="_7UBIqfYG1uWsfeUUJpH-63" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" value="+int order_id FK" vertex="1">
          <mxGeometry height="29" width="239" y="58.473684210526315" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-66" parent="_7UBIqfYG1uWsfeUUJpH-63" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" value="+string payment_method" vertex="1">
          <mxGeometry height="29" width="239" y="87.47368421052632" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-67" parent="_7UBIqfYG1uWsfeUUJpH-63" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" value="+string transaction_id" vertex="1">
          <mxGeometry height="29" width="239" y="116.47368421052632" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-68" parent="_7UBIqfYG1uWsfeUUJpH-63" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" value="+decimal amount" vertex="1">
          <mxGeometry height="29" width="239" y="145.4736842105263" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-69" parent="_7UBIqfYG1uWsfeUUJpH-63" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" value="+enum status" vertex="1">
          <mxGeometry height="29" width="239" y="174.4736842105263" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-70" parent="_7UBIqfYG1uWsfeUUJpH-63" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" value="+timestamp paid_at" vertex="1">
          <mxGeometry height="29" width="239" y="203.4736842105263" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-71" parent="_7UBIqfYG1uWsfeUUJpH-63" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" value="+timestamp created_at" vertex="1">
          <mxGeometry height="29" width="239" y="232.4736842105263" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-72" parent="_7UBIqfYG1uWsfeUUJpH-63" style="line;strokeWidth=1;fillColor=none;align=left;verticalAlign=middle;spacingTop=-1;spacingLeft=3;spacingRight=3;rotatable=0;labelPosition=right;points=[];portConstraint=eastwest;strokeColor=inherit;" vertex="1">
          <mxGeometry height="15" width="239" y="261.4736842105263" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-73" parent="1" style="swimlane;fontStyle=1;align=center;verticalAlign=top;childLayout=stackLayout;horizontal=1;startSize=30.933333333333334;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=0;marginBottom=0;" value="reviews" vertex="1">
          <mxGeometry height="231.93333333333334" width="221" x="1263" y="2034" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-74" parent="_7UBIqfYG1uWsfeUUJpH-73" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" value="+int id PK" vertex="1">
          <mxGeometry height="31" width="221" y="30.933333333333334" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-75" parent="_7UBIqfYG1uWsfeUUJpH-73" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" value="+int user_id FK" vertex="1">
          <mxGeometry height="31" width="221" y="61.93333333333334" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-76" parent="_7UBIqfYG1uWsfeUUJpH-73" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" value="+int product_id FK" vertex="1">
          <mxGeometry height="31" width="221" y="92.93333333333334" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-77" parent="_7UBIqfYG1uWsfeUUJpH-73" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" value="+tinyint rating" vertex="1">
          <mxGeometry height="31" width="221" y="123.93333333333334" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-78" parent="_7UBIqfYG1uWsfeUUJpH-73" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" value="+text comment" vertex="1">
          <mxGeometry height="31" width="221" y="154.93333333333334" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-79" parent="_7UBIqfYG1uWsfeUUJpH-73" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" value="+timestamp created_at" vertex="1">
          <mxGeometry height="31" width="221" y="185.93333333333334" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-80" parent="_7UBIqfYG1uWsfeUUJpH-73" style="line;strokeWidth=1;fillColor=none;align=left;verticalAlign=middle;spacingTop=-1;spacingLeft=3;spacingRight=3;rotatable=0;labelPosition=right;points=[];portConstraint=eastwest;strokeColor=inherit;" vertex="1">
          <mxGeometry height="15" width="221" y="216.93333333333334" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-81" parent="1" style="swimlane;fontStyle=1;align=center;verticalAlign=top;childLayout=stackLayout;horizontal=1;startSize=32;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=0;marginBottom=0;" value="carts" vertex="1">
          <mxGeometry height="208" width="214" x="1352" y="876" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-82" parent="_7UBIqfYG1uWsfeUUJpH-81" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" value="+int id PK" vertex="1">
          <mxGeometry height="32" width="214" y="32" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-83" parent="_7UBIqfYG1uWsfeUUJpH-81" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" value="+int user_id FK" vertex="1">
          <mxGeometry height="32" width="214" y="64" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-84" parent="_7UBIqfYG1uWsfeUUJpH-81" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" value="+string session_id" vertex="1">
          <mxGeometry height="32" width="214" y="96" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-85" parent="_7UBIqfYG1uWsfeUUJpH-81" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" value="+timestamp created_at" vertex="1">
          <mxGeometry height="32" width="214" y="128" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-86" parent="_7UBIqfYG1uWsfeUUJpH-81" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" value="+timestamp updated_at" vertex="1">
          <mxGeometry height="32" width="214" y="160" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-87" parent="_7UBIqfYG1uWsfeUUJpH-81" style="line;strokeWidth=1;fillColor=none;align=left;verticalAlign=middle;spacingTop=-1;spacingLeft=3;spacingRight=3;rotatable=0;labelPosition=right;points=[];portConstraint=eastwest;strokeColor=inherit;" vertex="1">
          <mxGeometry height="16" width="214" y="192" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-88" parent="1" style="swimlane;fontStyle=1;align=center;verticalAlign=top;childLayout=stackLayout;horizontal=1;startSize=32;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=0;marginBottom=0;" value="cart_items" vertex="1">
          <mxGeometry height="208" width="221" x="1348" y="1166" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-89" parent="_7UBIqfYG1uWsfeUUJpH-88" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" value="+int id PK" vertex="1">
          <mxGeometry height="32" width="221" y="32" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-90" parent="_7UBIqfYG1uWsfeUUJpH-88" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" value="+int cart_id FK" vertex="1">
          <mxGeometry height="32" width="221" y="64" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-91" parent="_7UBIqfYG1uWsfeUUJpH-88" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" value="+int product_id FK" vertex="1">
          <mxGeometry height="32" width="221" y="96" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-92" parent="_7UBIqfYG1uWsfeUUJpH-88" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" value="+int quantity" vertex="1">
          <mxGeometry height="32" width="221" y="128" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-93" parent="_7UBIqfYG1uWsfeUUJpH-88" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" value="+timestamp added_at" vertex="1">
          <mxGeometry height="32" width="221" y="160" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-94" parent="_7UBIqfYG1uWsfeUUJpH-88" style="line;strokeWidth=1;fillColor=none;align=left;verticalAlign=middle;spacingTop=-1;spacingLeft=3;spacingRight=3;rotatable=0;labelPosition=right;points=[];portConstraint=eastwest;strokeColor=inherit;" vertex="1">
          <mxGeometry height="16" width="221" y="192" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-95" parent="1" style="swimlane;fontStyle=1;align=center;verticalAlign=top;childLayout=stackLayout;horizontal=1;startSize=28.52173913043478;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=0;marginBottom=0;" value="coupons" vertex="1">
          <mxGeometry height="332.52173913043475" width="232" x="973" y="1986" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-96" parent="_7UBIqfYG1uWsfeUUJpH-95" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" value="+int id PK" vertex="1">
          <mxGeometry height="29" width="232" y="28.52173913043478" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-97" parent="_7UBIqfYG1uWsfeUUJpH-95" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" value="+string code" vertex="1">
          <mxGeometry height="29" width="232" y="57.52173913043478" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-98" parent="_7UBIqfYG1uWsfeUUJpH-95" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" value="+enum discount_type" vertex="1">
          <mxGeometry height="29" width="232" y="86.52173913043478" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-99" parent="_7UBIqfYG1uWsfeUUJpH-95" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" value="+decimal discount_value" vertex="1">
          <mxGeometry height="29" width="232" y="115.52173913043478" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-100" parent="_7UBIqfYG1uWsfeUUJpH-95" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" value="+datetime valid_from" vertex="1">
          <mxGeometry height="29" width="232" y="144.52173913043478" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-101" parent="_7UBIqfYG1uWsfeUUJpH-95" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" value="+datetime valid_until" vertex="1">
          <mxGeometry height="29" width="232" y="173.52173913043478" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-102" parent="_7UBIqfYG1uWsfeUUJpH-95" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" value="+int usage_limit" vertex="1">
          <mxGeometry height="29" width="232" y="202.52173913043478" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-103" parent="_7UBIqfYG1uWsfeUUJpH-95" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" value="+int used_count" vertex="1">
          <mxGeometry height="29" width="232" y="231.52173913043478" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-104" parent="_7UBIqfYG1uWsfeUUJpH-95" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" value="+timestamp created_at" vertex="1">
          <mxGeometry height="29" width="232" y="260.52173913043475" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-105" parent="_7UBIqfYG1uWsfeUUJpH-95" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" value="+timestamp updated_at" vertex="1">
          <mxGeometry height="29" width="232" y="289.52173913043475" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-106" parent="_7UBIqfYG1uWsfeUUJpH-95" style="line;strokeWidth=1;fillColor=none;align=left;verticalAlign=middle;spacingTop=-1;spacingLeft=3;spacingRight=3;rotatable=0;labelPosition=right;points=[];portConstraint=eastwest;strokeColor=inherit;" vertex="1">
          <mxGeometry height="14" width="232" y="318.52173913043475" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-107" parent="1" style="whiteSpace=wrap;strokeWidth=2;" value="" vertex="1">
          <mxGeometry x="1552" y="2710" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-108" parent="1" style="whiteSpace=wrap;strokeWidth=2;" value="" vertex="1">
          <mxGeometry x="1652" y="2784" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-109" edge="1" parent="1" source="_7UBIqfYG1uWsfeUUJpH-3" style="curved=1;startArrow=none;endArrow=none;exitX=0;exitY=0.72;entryX=0.5;entryY=0;rounded=0;" target="_7UBIqfYG1uWsfeUUJpH-42" value="places">
          <mxGeometry relative="1" as="geometry">
            <Array as="points">
              <mxPoint x="712" y="839" />
            </Array>
          </mxGeometry>
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-110" parent="_7UBIqfYG1uWsfeUUJpH-109" style="edgeLabel;resizable=0;labelBackgroundColor=none;fontSize=12;align=right;verticalAlign=top;" value="1" vertex="1">
          <mxGeometry relative="1" x="-1" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-111" parent="_7UBIqfYG1uWsfeUUJpH-109" style="edgeLabel;resizable=0;labelBackgroundColor=none;fontSize=12;align=left;verticalAlign=bottom;" value="0..*" vertex="1">
          <mxGeometry relative="1" x="1" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-112" edge="1" parent="1" source="_7UBIqfYG1uWsfeUUJpH-3" style="curved=1;startArrow=none;endArrow=none;exitX=0.52;exitY=1;entryX=0;entryY=0.2;rounded=0;" target="_7UBIqfYG1uWsfeUUJpH-73" value="writes">
          <mxGeometry relative="1" as="geometry">
            <Array as="points">
              <mxPoint x="1019" y="839" />
              <mxPoint x="1019" y="1925" />
            </Array>
          </mxGeometry>
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-113" parent="_7UBIqfYG1uWsfeUUJpH-112" style="edgeLabel;resizable=0;labelBackgroundColor=none;fontSize=12;align=left;verticalAlign=top;" value="1" vertex="1">
          <mxGeometry relative="1" x="-1" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-114" parent="_7UBIqfYG1uWsfeUUJpH-112" style="edgeLabel;resizable=0;labelBackgroundColor=none;fontSize=12;align=right;verticalAlign=bottom;" value="0..*" vertex="1">
          <mxGeometry relative="1" x="1" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-115" edge="1" parent="1" source="_7UBIqfYG1uWsfeUUJpH-3" style="curved=1;startArrow=none;endArrow=none;exitX=1;exitY=0.65;entryX=0.5;entryY=0;rounded=0;" target="_7UBIqfYG1uWsfeUUJpH-81" value="has">
          <mxGeometry relative="1" as="geometry">
            <Array as="points">
              <mxPoint x="1459" y="839" />
            </Array>
          </mxGeometry>
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-116" parent="_7UBIqfYG1uWsfeUUJpH-115" style="edgeLabel;resizable=0;labelBackgroundColor=none;fontSize=12;align=left;verticalAlign=top;" value="1" vertex="1">
          <mxGeometry relative="1" x="-1" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-117" parent="_7UBIqfYG1uWsfeUUJpH-115" style="edgeLabel;resizable=0;labelBackgroundColor=none;fontSize=12;align=right;verticalAlign=bottom;" value="0..1" vertex="1">
          <mxGeometry relative="1" x="1" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-118" edge="1" parent="1" source="_7UBIqfYG1uWsfeUUJpH-42" style="curved=1;startArrow=none;endArrow=none;exitX=0.09;exitY=1;entryX=0;entryY=0;rounded=0;" target="_7UBIqfYG1uWsfeUUJpH-54" value="contains">
          <mxGeometry relative="1" as="geometry">
            <Array as="points">
              <mxPoint x="569" y="1925" />
            </Array>
          </mxGeometry>
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-119" parent="_7UBIqfYG1uWsfeUUJpH-118" style="edgeLabel;resizable=0;labelBackgroundColor=none;fontSize=12;align=right;verticalAlign=top;" value="1" vertex="1">
          <mxGeometry relative="1" x="-1" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-120" parent="_7UBIqfYG1uWsfeUUJpH-118" style="edgeLabel;resizable=0;labelBackgroundColor=none;fontSize=12;align=left;verticalAlign=bottom;" value="1..*" vertex="1">
          <mxGeometry relative="1" x="1" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-121" edge="1" parent="1" source="_7UBIqfYG1uWsfeUUJpH-42" style="curved=1;startArrow=none;endArrow=none;exitX=0.31;exitY=1;entryX=1;entryY=0.04;rounded=0;" target="_7UBIqfYG1uWsfeUUJpH-63" value="has">
          <mxGeometry relative="1" as="geometry">
            <Array as="points">
              <mxPoint x="644" y="1925" />
            </Array>
          </mxGeometry>
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-122" parent="_7UBIqfYG1uWsfeUUJpH-121" style="edgeLabel;resizable=0;labelBackgroundColor=none;fontSize=12;align=right;verticalAlign=top;" value="1" vertex="1">
          <mxGeometry relative="1" x="-1" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-123" parent="_7UBIqfYG1uWsfeUUJpH-121" style="edgeLabel;resizable=0;labelBackgroundColor=none;fontSize=12;align=left;verticalAlign=bottom;" value="1" vertex="1">
          <mxGeometry relative="1" x="1" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-124" edge="1" parent="1" source="_7UBIqfYG1uWsfeUUJpH-42" style="curved=1;startArrow=none;endArrow=none;exitX=0.68;exitY=1;entryX=0;entryY=0.25;rounded=0;" target="_7UBIqfYG1uWsfeUUJpH-95" value="uses   &#39; sebenarnya coupons &quot;1&quot; -- &quot;0..*&quot; orders lebih tepat, lihat di bawah">
          <mxGeometry relative="1" as="geometry">
            <Array as="points">
              <mxPoint x="776" y="1925" />
            </Array>
          </mxGeometry>
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-125" parent="_7UBIqfYG1uWsfeUUJpH-124" style="edgeLabel;resizable=0;labelBackgroundColor=none;fontSize=12;align=left;verticalAlign=top;" value="0..1" vertex="1">
          <mxGeometry relative="1" x="-1" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-126" parent="_7UBIqfYG1uWsfeUUJpH-124" style="edgeLabel;resizable=0;labelBackgroundColor=none;fontSize=12;align=right;verticalAlign=bottom;" value="1" vertex="1">
          <mxGeometry relative="1" x="1" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-127" edge="1" parent="1" source="_7UBIqfYG1uWsfeUUJpH-14" style="curved=1;startArrow=none;endArrow=none;exitX=0;exitY=0.73;entryX=1;entryY=0.21;rounded=0;" target="_7UBIqfYG1uWsfeUUJpH-54" value="appears_in">
          <mxGeometry relative="1" as="geometry">
            <Array as="points">
              <mxPoint x="1133" y="1925" />
            </Array>
          </mxGeometry>
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-128" parent="_7UBIqfYG1uWsfeUUJpH-127" style="edgeLabel;resizable=0;labelBackgroundColor=none;fontSize=12;align=right;verticalAlign=top;" value="1" vertex="1">
          <mxGeometry relative="1" x="-1" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-129" parent="_7UBIqfYG1uWsfeUUJpH-127" style="edgeLabel;resizable=0;labelBackgroundColor=none;fontSize=12;align=left;verticalAlign=bottom;" value="0..*" vertex="1">
          <mxGeometry relative="1" x="1" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-130" edge="1" parent="1" source="_7UBIqfYG1uWsfeUUJpH-14" style="curved=1;startArrow=none;endArrow=none;exitX=0.33;exitY=1;entryX=0.58;entryY=0;rounded=0;" target="_7UBIqfYG1uWsfeUUJpH-73" value="receives">
          <mxGeometry relative="1" as="geometry">
            <Array as="points">
              <mxPoint x="1407" y="1925" />
            </Array>
          </mxGeometry>
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-131" parent="_7UBIqfYG1uWsfeUUJpH-130" style="edgeLabel;resizable=0;labelBackgroundColor=none;fontSize=12;align=right;verticalAlign=top;" value="1" vertex="1">
          <mxGeometry relative="1" x="-1" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-132" parent="_7UBIqfYG1uWsfeUUJpH-130" style="edgeLabel;resizable=0;labelBackgroundColor=none;fontSize=12;align=left;verticalAlign=bottom;" value="0..*" vertex="1">
          <mxGeometry relative="1" x="1" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-133" edge="1" parent="1" source="_7UBIqfYG1uWsfeUUJpH-14" style="curved=1;startArrow=none;endArrow=none;exitX=0.69;exitY=1;entryX=0.32;entryY=0;rounded=0;" target="_7UBIqfYG1uWsfeUUJpH-38" value="categorized_in">
          <mxGeometry relative="1" as="geometry">
            <Array as="points">
              <mxPoint x="1514" y="1925" />
            </Array>
          </mxGeometry>
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-134" parent="_7UBIqfYG1uWsfeUUJpH-133" style="edgeLabel;resizable=0;labelBackgroundColor=none;fontSize=12;align=right;verticalAlign=top;" value="1" vertex="1">
          <mxGeometry relative="1" x="-1" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-135" parent="_7UBIqfYG1uWsfeUUJpH-133" style="edgeLabel;resizable=0;labelBackgroundColor=none;fontSize=12;align=left;verticalAlign=bottom;" value="0..*" vertex="1">
          <mxGeometry relative="1" x="1" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-136" edge="1" parent="1" source="_7UBIqfYG1uWsfeUUJpH-14" style="curved=1;startArrow=none;endArrow=none;exitX=0.68;exitY=0;entryX=0.66;entryY=1;rounded=0;" target="_7UBIqfYG1uWsfeUUJpH-88" value="included_in">
          <mxGeometry relative="1" as="geometry">
            <Array as="points">
              <mxPoint x="1506" y="1419" />
            </Array>
          </mxGeometry>
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-137" parent="_7UBIqfYG1uWsfeUUJpH-136" style="edgeLabel;resizable=0;labelBackgroundColor=none;fontSize=12;align=right;verticalAlign=bottom;" value="1" vertex="1">
          <mxGeometry relative="1" x="-1" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-138" parent="_7UBIqfYG1uWsfeUUJpH-136" style="edgeLabel;resizable=0;labelBackgroundColor=none;fontSize=12;align=left;verticalAlign=top;" value="0..*" vertex="1">
          <mxGeometry relative="1" x="1" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-139" edge="1" parent="1" source="_7UBIqfYG1uWsfeUUJpH-29" style="curved=1;startArrow=none;endArrow=none;exitX=0.14;exitY=1;entryX=Infinity;entryY=NaN;rounded=0;" target="_7UBIqfYG1uWsfeUUJpH-107" value="">
          <mxGeometry relative="1" as="geometry">
            <Array as="points">
              <mxPoint x="1552" y="2685" />
            </Array>
          </mxGeometry>
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-140" parent="_7UBIqfYG1uWsfeUUJpH-139" style="edgeLabel;resizable=0;labelBackgroundColor=none;fontSize=12;align=right;verticalAlign=top;" value="1" vertex="1">
          <mxGeometry relative="1" x="-1" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-141" parent="_7UBIqfYG1uWsfeUUJpH-139" style="edgeLabel;resizable=0;labelBackgroundColor=none;fontSize=12;align=left;verticalAlign=bottom;" value="0..*" vertex="1">
          <mxGeometry relative="1" x="1" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-142" edge="1" parent="1" source="_7UBIqfYG1uWsfeUUJpH-107" style="curved=1;startArrow=none;endArrow=none;exitX=Infinity;exitY=Infinity;entryX=-Infinity;entryY=Infinity;rounded=0;" target="_7UBIqfYG1uWsfeUUJpH-108" value="parent   &#39; relasi rekursif">
          <mxGeometry relative="1" as="geometry">
            <Array as="points">
              <mxPoint x="1552" y="2747" />
            </Array>
          </mxGeometry>
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-143" parent="_7UBIqfYG1uWsfeUUJpH-142" style="edgeLabel;resizable=0;labelBackgroundColor=none;fontSize=12;align=left;verticalAlign=top;" value="1" vertex="1">
          <mxGeometry relative="1" x="-1" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-144" parent="_7UBIqfYG1uWsfeUUJpH-142" style="edgeLabel;resizable=0;labelBackgroundColor=none;fontSize=12;align=right;verticalAlign=bottom;" value="0..*" vertex="1">
          <mxGeometry relative="1" x="1" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-145" edge="1" parent="1" source="_7UBIqfYG1uWsfeUUJpH-108" style="curved=1;startArrow=none;endArrow=none;exitX=-Infinity;exitY=Infinity;entryX=0.5;entryY=1;rounded=0;" target="_7UBIqfYG1uWsfeUUJpH-29" value="">
          <mxGeometry relative="1" as="geometry">
            <Array as="points" />
          </mxGeometry>
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-146" parent="_7UBIqfYG1uWsfeUUJpH-145" style="edgeLabel;resizable=0;labelBackgroundColor=none;fontSize=12;align=right;verticalAlign=bottom;" value="1" vertex="1">
          <mxGeometry relative="1" x="-1" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-147" parent="_7UBIqfYG1uWsfeUUJpH-145" style="edgeLabel;resizable=0;labelBackgroundColor=none;fontSize=12;align=left;verticalAlign=top;" value="0..*" vertex="1">
          <mxGeometry relative="1" x="1" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-148" edge="1" parent="1" source="_7UBIqfYG1uWsfeUUJpH-29" style="curved=1;startArrow=none;endArrow=none;exitX=0.5;exitY=0;entryX=0.5;entryY=1;rounded=0;" target="_7UBIqfYG1uWsfeUUJpH-38" value="contains">
          <mxGeometry relative="1" as="geometry">
            <Array as="points" />
          </mxGeometry>
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-149" parent="_7UBIqfYG1uWsfeUUJpH-148" style="edgeLabel;resizable=0;labelBackgroundColor=none;fontSize=12;align=right;verticalAlign=bottom;" value="1" vertex="1">
          <mxGeometry relative="1" x="-1" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-150" parent="_7UBIqfYG1uWsfeUUJpH-148" style="edgeLabel;resizable=0;labelBackgroundColor=none;fontSize=12;align=left;verticalAlign=top;" value="0..*" vertex="1">
          <mxGeometry relative="1" x="1" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-151" edge="1" parent="1" source="_7UBIqfYG1uWsfeUUJpH-38" style="curved=1;startArrow=none;endArrow=none;exitX=0.5;exitY=0;entryX=1;entryY=0.88;rounded=0;" target="_7UBIqfYG1uWsfeUUJpH-14" value="&quot;&quot;">
          <mxGeometry relative="1" as="geometry">
            <Array as="points">
              <mxPoint x="1652" y="1925" />
            </Array>
          </mxGeometry>
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-152" parent="_7UBIqfYG1uWsfeUUJpH-151" style="edgeLabel;resizable=0;labelBackgroundColor=none;fontSize=12;align=right;verticalAlign=bottom;" value="1" vertex="1">
          <mxGeometry relative="1" x="-1" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-153" parent="_7UBIqfYG1uWsfeUUJpH-151" style="edgeLabel;resizable=0;labelBackgroundColor=none;fontSize=12;align=left;verticalAlign=top;" value="1" vertex="1">
          <mxGeometry relative="1" x="1" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-154" edge="1" parent="1" source="_7UBIqfYG1uWsfeUUJpH-38" style="curved=1;startArrow=none;endArrow=none;exitX=0.42;exitY=1;entryX=0.31;entryY=0;rounded=0;" target="_7UBIqfYG1uWsfeUUJpH-29" value="&quot;&quot;">
          <mxGeometry relative="1" as="geometry">
            <Array as="points">
              <mxPoint x="1597" y="2359" />
            </Array>
          </mxGeometry>
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-155" parent="_7UBIqfYG1uWsfeUUJpH-154" style="edgeLabel;resizable=0;labelBackgroundColor=none;fontSize=12;align=right;verticalAlign=top;" value="1" vertex="1">
          <mxGeometry relative="1" x="-1" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-156" parent="_7UBIqfYG1uWsfeUUJpH-154" style="edgeLabel;resizable=0;labelBackgroundColor=none;fontSize=12;align=left;verticalAlign=bottom;" value="1" vertex="1">
          <mxGeometry relative="1" x="1" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-157" edge="1" parent="1" source="_7UBIqfYG1uWsfeUUJpH-81" style="curved=1;startArrow=none;endArrow=none;exitX=0.5;exitY=1;entryX=0.5;entryY=0;rounded=0;" target="_7UBIqfYG1uWsfeUUJpH-88" value="contains">
          <mxGeometry relative="1" as="geometry">
            <Array as="points" />
          </mxGeometry>
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-158" parent="_7UBIqfYG1uWsfeUUJpH-157" style="edgeLabel;resizable=0;labelBackgroundColor=none;fontSize=12;align=right;verticalAlign=top;" value="1" vertex="1">
          <mxGeometry relative="1" x="-1" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-159" parent="_7UBIqfYG1uWsfeUUJpH-157" style="edgeLabel;resizable=0;labelBackgroundColor=none;fontSize=12;align=left;verticalAlign=bottom;" value="1..*" vertex="1">
          <mxGeometry relative="1" x="1" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-160" edge="1" parent="1" source="_7UBIqfYG1uWsfeUUJpH-88" style="curved=1;startArrow=none;endArrow=none;exitX=0;exitY=0.73;entryX=0;entryY=0.3;rounded=0;" target="_7UBIqfYG1uWsfeUUJpH-14" value="refers_to">
          <mxGeometry relative="1" as="geometry">
            <Array as="points">
              <mxPoint x="1129" y="1419" />
            </Array>
          </mxGeometry>
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-161" parent="_7UBIqfYG1uWsfeUUJpH-160" style="edgeLabel;resizable=0;labelBackgroundColor=none;fontSize=12;align=right;verticalAlign=top;" value="1" vertex="1">
          <mxGeometry relative="1" x="-1" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-162" parent="_7UBIqfYG1uWsfeUUJpH-160" style="edgeLabel;resizable=0;labelBackgroundColor=none;fontSize=12;align=left;verticalAlign=bottom;" value="1" vertex="1">
          <mxGeometry relative="1" x="1" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-163" edge="1" parent="1" source="_7UBIqfYG1uWsfeUUJpH-95" style="curved=1;startArrow=none;endArrow=none;exitX=0;exitY=0.02;entryX=1;entryY=0.91;rounded=0;" target="_7UBIqfYG1uWsfeUUJpH-42" value="used_in">
          <mxGeometry relative="1" as="geometry">
            <Array as="points">
              <mxPoint x="923" y="1925" />
            </Array>
          </mxGeometry>
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-164" parent="_7UBIqfYG1uWsfeUUJpH-163" style="edgeLabel;resizable=0;labelBackgroundColor=none;fontSize=12;align=right;verticalAlign=bottom;" value="1" vertex="1">
          <mxGeometry relative="1" x="-1" as="geometry" />
        </mxCell>
        <mxCell id="_7UBIqfYG1uWsfeUUJpH-165" parent="_7UBIqfYG1uWsfeUUJpH-163" style="edgeLabel;resizable=0;labelBackgroundColor=none;fontSize=12;align=left;verticalAlign=top;" value="0..*" vertex="1">
          <mxGeometry relative="1" x="1" as="geometry" />
        </mxCell>
      </root>
    </mxGraphModel>
  </diagram>
</mxfile>
ading ERD.drawio…]()

```




