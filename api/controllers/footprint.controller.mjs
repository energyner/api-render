//footprint.controller.mjs
import { footprintService } from '../services/footprint.service.mjs';

export const calcularFootprint = async (req, res) => {
  try {
    const data = req.body;

     const resultado = await footprintService({ data });

    return res.status(200).json({
      success: true,
      data: resultado
    });

  } catch (error) {
    console.error('Error en calcularFootprint:', error.message);

    return res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
};