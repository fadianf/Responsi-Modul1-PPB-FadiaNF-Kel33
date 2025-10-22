import express from "express";
import dotenv from "dotenv";
import itemRoutes from "./routes/itemRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Selamat datang di API Layanan Cuci Sepatu",
    endpoints: {
      "GET /api/shoes": "Menampilkan semua daftar sepatu",
      "GET /api/shoes?status=Selesai": "Filter sepatu berdasarkan status",
      "GET /api/shoes/:id": "Menampilkan detail sepatu berdasarkan ID",
      "POST /api/shoes": "Menambahkan sepatu baru",
      "PUT /api/shoes/:id": "Memperbarui status sepatu",
      "DELETE /api/shoes/:id": "Menghapus data sepatu"
    }
  });
});

app.use("/api/shoes", itemRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});