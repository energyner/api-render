//footprint-routes.mjs
import express from 'express';
import { calcularFootprint } from '../../controllers/footprint.controller.mjs';

const router = express.Router();

/**
 * @route   POST /api/v1/footprint
 * @desc    Calcula la huella de carbono
 */
router.post('/', calcularFootprint);

export default router;