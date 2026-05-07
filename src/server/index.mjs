//index.mjs
import express from 'express';
import cors from 'cors';

// =========================
// Importar rutas
// =========================
import consumoRoutes from '../../api/v1/routes/consumo.routes.mjs';
import footprintRoutes from '../../api/v1/routes/footprint.routes.mjs';
import solarRoutes from '../../api/v1/routes/solar.routes.mjs';

const app = express();
const PORT = process.env.PORT || 3000;

// =========================
// Middleware global
// =========================
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// =========================
// Health Check (Render)
// =========================
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    service: 'api-render',
    version: 'v1'
  });
});

// =========================
// API VERSIONING
// =========================
app.use('/api/v1/consumo', consumoRoutes);
app.use('/api/v1/footprint', footprintRoutes);
app.use('/api/v1/solar', solarRoutes);
app.use(express.static('public'));
app.use('/assets', express.static('public/assets'));
app.use('/reports', express.static('tests/reports'));
// =========================
// API 404 (muy importante)
// =========================
app.use('/api', (req, res) => {
  res.status(404).json({
    success: false,
    error: 'Endpoint not found'
  });
});


// =========================
// GLOBAL ERROR HANDLER
// =========================
app.use((err, req, res, next) => {
  console.error('❌ Error:', err.message);

  res.status(500).json({
    success: false,
    error: 'Internal server error'
  });
});

// =========================
// Server start
// =========================
app.listen(PORT, () => {
  console.log(`🚀 API Render running on port ${PORT}`);
});