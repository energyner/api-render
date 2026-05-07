//consumo.controller.mjs
import { consumoService } from '../services/consumo.service.mjs';

export const calcularConsumo = async (req, res) => {
  try {
    console.log("L5 - Controller → ENTRÓ AL CONTROLADOR");
    console.log("L6 - Controller → Body recibido:", req.body);

    const { potencia, horas } = req.body || {};

    // Validación básica (capa HTTP)
    if (typeof potencia !== 'number' || typeof horas !== 'number') {
      return res.status(400).json({
        success: false,
        error: 'potencia y horas (number) son requeridos'
      });
    }

    const resultado = await consumoService({ potencia, horas });

    return res.status(200).json({
      success: true,
      data: resultado
    });


  } catch (error) {
    console.error('Error en calcularConsumo:', error.message);

    return res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
};
