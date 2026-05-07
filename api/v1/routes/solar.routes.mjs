//solar-routers.mjs
import express from 'express';
import { calcularSolar } from '../../controllers/solar.controller.mjs';

const router = express.Router();

/**
 * @route   POST /api/v1/solar
 * @desc    Calcula la producción solar
 */
router.post('/', calcularSolar);

export default router;