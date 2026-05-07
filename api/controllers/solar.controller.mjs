//solar.controller.mjs
import { solarService } from '../services/solar.service.mjs';

export const calcularSolar = async (req, res) => {

  try {

    const {
      area,
      irradiacion,
      eficiencia
    } = req.body || {};

    // =========================
    // Validación
    // =========================
    if (
      area === undefined ||
      irradiacion === undefined ||
      eficiencia === undefined
    ) {

      return res.status(400).json({
        success: false,
        error:
          'area, irradiacion y eficiencia son requeridos'
      });
    }

    // =========================
    // Service
    // =========================
    const resultado = await solarService({
      area,
      irradiacion,
      eficiencia
    });

    // =========================
    // Response
    // =========================
    return res.status(200).json({
      success: true,
      data: resultado
    });

  } catch (error) {

    console.error(
      'Error en calcularSolar:',
      error.message
    );

    return res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }

};