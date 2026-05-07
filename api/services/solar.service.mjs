//solar.service.mjs
import {
  calcularProduccionSolar
} from '../../core/calculations/solar-production.mjs';

export const solarService = ({
  area,
  irradiacion,
  eficiencia
}) => {

  // =========================
  // Validación lógica
  // =========================
  if (
    area <= 0 ||
    irradiacion <= 0 ||
    eficiencia <= 0
  ) {

    throw new Error(
      'Los parámetros deben ser mayores que 0'
    );
  }

  // =========================
  // Core
  // =========================
  const resultado =
    calcularProduccionSolar({
      area,
      irradiacion,
      eficiencia
    });

  return resultado;
};