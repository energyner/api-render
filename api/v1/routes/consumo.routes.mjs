import express from 'express';
import { calcularConsumo } from '../../controllers/consumo.controller.mjs';

const router = express.Router();

/**
 * @route   POST /api/v1/consumo
 * @desc    Calcula el consumo energético
 */
//console.log("L10 - RUTA /consumo cargada");
router.post('/', calcularConsumo);

export default router;