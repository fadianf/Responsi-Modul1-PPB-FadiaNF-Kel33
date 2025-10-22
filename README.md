# REST API Layanan Cuci Sepatu Pintar

![Node.js](https://img.shields.io/badge/Node.js-v18.0-green)
![Express.js](https://img.shields.io/badge/Express.js-Framework-blue)
![Supabase](https://img.shields.io/badge/Supabase-Database-orange)
![Vercel](https://img.shields.io/badge/Deployment-Vercel-black)

* Link Vercel: https://responsi-modul1-ppb-fadia-nf-kel33.vercel.app/

## 📘 Deskripsi Proyek

Proyek ini adalah **RESTful API** yang digunakan untuk mengelola data cucian sepatu secara digital.
Dibangun dengan **Node.js** dan **Express.js** serta menggunakan **Supabase** sebagai database cloud.
Aplikasi ini di-deploy menggunakan **Vercel**, sehingga dapat diakses secara online dari mana saja.

Tujuan utama dari API ini adalah untuk membantu layanan cuci sepatu dalam proses pencatatan, pelacakan, dan pembaruan status cucian agar lebih cepat dan efisien.


## Tujuan Pengembangan

1. Menerapkan konsep dasar **CRUD** pada API berbasis JavaScript.
2. Memahami struktur proyek **Model–View–Controller (MVC)** untuk backend.
3. Menghubungkan aplikasi Express.js dengan **database Supabase (PostgreSQL)**.
4. Menggunakan **environment variable (.env)** untuk keamanan konfigurasi.
5. Melatih kemampuan deploy API menggunakan **Vercel** agar mudah diakses publik.


## Endpoint API

| Metode     | Endpoint                    | Deskripsi                                        |
| ---------- | --------------------------- | ------------------------------------------------ |
| **GET**    | `/`                         | Informasi dasar dan daftar endpoint API          |
| **GET**    | `/api/shoes`                | Menampilkan seluruh daftar sepatu yang terdaftar |
| **GET**    | `/api/shoes?status=Selesai` | Menampilkan daftar sepatu berdasarkan status     |
| **GET**    | `/api/shoes/:id`            | Melihat detail sepatu berdasarkan ID             |
| **POST**   | `/api/shoes`                | Menambahkan data sepatu baru ke database         |
| **PUT**    | `/api/shoes/:id`            | Memperbarui data sepatu (status, tanggal, dll)   |
| **DELETE** | `/api/shoes/:id`            | Menghapus data sepatu dari sistem                |

### Fitur Tambahan

**Filter Status Secara Langsung:**

```
GET /api/shoes?status=Sedang Dicuci
GET /api/shoes?status=Selesai
```

## 🧾 Struktur Data Sepatu

```json
{
  "id": 1,
  "nama": "Vans Old Skool",
  "status": "Sedang Dicuci",
  "tanggalMasuk": "2025-10-15",
  "tanggalSelesai": "-",
  "created_at": "2025-10-22T08:00:00Z",
  "updated_at": "2025-10-22T08:00:00Z"
}
```

| Field            | Tipe Data | Keterangan                                  |
| ---------------- | --------- | ------------------------------------------- |
| `id`             | Integer   | ID unik sepatu (auto increment)             |
| `nama`           | String    | Nama/merek sepatu pelanggan                 |
| `status`         | String    | Status cucian ("Sedang Dicuci" / "Selesai") |
| `tanggalMasuk`   | Date      | Tanggal sepatu diterima                     |
| `tanggalSelesai` | String    | Tanggal sepatu selesai dicuci atau "-"      |
| `created_at`     | Timestamp | Tanggal data dibuat                         |
| `updated_at`     | Timestamp | Tanggal data terakhir diperbarui            |


## Teknologi yang Digunakan

* **Node.js** — JavaScript runtime untuk backend
* **Express.js** — Framework untuk membangun REST API
* **Supabase** — Cloud database berbasis PostgreSQL
* **Vercel** — Platform hosting serverless
* **dotenv** — Pengelolaan konfigurasi `.env`


## Struktur Folder

```
smart-shoe-laundry-api/
│
├── src/
│   ├── config/
│   │   └── supabaseClient.js       # Koneksi ke Supabase
│   ├── models/
│   │   └── shoeModel.js            # Query database
│   ├── controllers/
│   │   └── shoeController.js       # Logika bisnis API
│   ├── routes/
│   │   └── shoeRoutes.js           # Definisi endpoint
│   └── index.js                    # Entry point server
│
├── .env                            # Konfigurasi rahasia
├── .env.example                    # Template env
├── package.json                    # Dependensi
├── vercel.json                     # Konfigurasi deployment
├── supabase-schema.sql             # Setup tabel di Supabase
└── README.md                       # Dokumentasi proyek
```


## Instalasi & Setup

### 1. Clone Repository

```bash
git clone https://github.com/username/smart-shoe-laundry-api.git
cd smart-shoe-laundry-api
```

### 2. Install Dependensi

```bash
npm install
```

### 3. Setup Database Supabase

#### a. Buat Project Supabase

1. Kunjungi [Supabase](https://supabase.com)
2. Buat project baru
3. Salin **URL** dan **anon public key**

#### b. Jalankan Query Tabel

Buka tab **SQL Editor** dan jalankan:

```sql
CREATE TABLE shoes (
  id SERIAL PRIMARY KEY,
  nama VARCHAR(255) NOT NULL,
  status VARCHAR(50) CHECK (status IN ('Sedang Dicuci', 'Selesai')),
  tanggalMasuk DATE NOT NULL,
  tanggalSelesai VARCHAR(20) DEFAULT '-',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

#### c. Aktifkan RLS dan Policy

```sql
ALTER TABLE shoes ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Open access for all" ON shoes
FOR ALL USING (true) WITH CHECK (true);
```


### 4. Buat File `.env`

```env
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_KEY=your-anon-key
PORT=3000
```


### 5. Jalankan Server

**Development:**

```bash
npm run dev
```

**Production:**

```bash
npm start
```

Akses melalui: [http://localhost:3000](http://localhost:3000)


## Deploy ke Vercel

1. **Push ke GitHub**

   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy via [Vercel Dashboard](https://vercel.com/new)**

   * Import repository GitHub
   * Tambahkan Environment Variables:

     | Key          | Value                                                                |
     | ------------ | -------------------------------------------------------------------- |
     | SUPABASE_URL | [https://your-project.supabase.co](https://your-project.supabase.co) |
     | SUPABASE_KEY | your-anon-key                                                        |
     | PORT         | 3000                                                                 |
   * Klik **Deploy**

3. **Verifikasi URL API:**

   ```
   https://smart-shoe-laundry.vercel.app/api/shoes
   ```


## Contoh Penggunaan API

### 1️⃣ GET `/`

```bash
curl https://smart-shoe-laundry.vercel.app/
```

**Response:**

```json
{
  "message": "Selamat datang di Smart Shoe Laundry API",
  "developer": "Fadia Nur Fatimah",
  "available_endpoints": [
    "/api/shoes",
    "/api/shoes/:id",
    "/api/shoes?status=Selesai"
  ]
}
```


### 2️⃣ POST `/api/shoes`

```bash
curl -X POST https://smart-shoe-laundry.vercel.app/api/shoes \
  -H "Content-Type: application/json" \
  -d '{
    "nama": "Puma Suede Classic",
    "status": "Sedang Dicuci",
    "tanggalMasuk": "2025-10-20",
    "tanggalSelesai": "-"
  }'
```

**Response:**

```json
{
  "success": true,
  "message": "Data sepatu berhasil ditambahkan",
  "data": {
    "id": 7,
    "nama": "Puma Suede Classic",
    "status": "Sedang Dicuci"
  }
}
```


### 3️⃣ PUT `/api/shoes/:id`

```bash
curl -X PUT https://smart-shoe-laundry.vercel.app/api/shoes/7 \
  -H "Content-Type: application/json" \
  -d '{
    "status": "Selesai",
    "tanggalSelesai": "2025-10-22"
  }'
```

**Response:**

```json
{
  "success": true,
  "message": "Status sepatu berhasil diperbarui"
}
```


### 4️⃣ DELETE `/api/shoes/:id`

```bash
curl -X DELETE https://smart-shoe-laundry.vercel.app/api/shoes/7
```

**Response:**

```json
{
  "success": true,
  "message": "Data berhasil dihapus"
}
```


## 💡 Catatan Tambahan

* Gunakan **Postman**, **Insomnia**, atau **curl** untuk mengetes endpoint.
* Pastikan **Supabase URL** dan **Key** sudah benar agar koneksi berhasil.
* File `.env` **tidak boleh di-upload ke GitHub**.


## 🧑‍💻 Pengembang

**Fadia Nur Fatimah**
