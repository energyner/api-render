//footprint.service.mjs
import { calcularHuellaCarbono } from '../../core/calculations/carbon-footprint.mjs';

export const footprintService = ({ data }) => {
  const resultado = calcularHuellaCarbono(data);

  if (resultado.error) {
    throw new Error(resultado.error);
  }

  return resultado;
};