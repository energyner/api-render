// services/consumo.service.mjs
import { calcularConsumoEnergetico } from '../../core/calculations/energy-consumption.mjs';

export const consumoService = ({potencia, horas}) => {
  // Validación de negocio
  if (!potencia || !horas) {
    throw new Error('Power/hours parameters are missing.');
  }
console.log("L9 - Service → Parámetros recibidos:", potencia, horas);
  // Lógica de negocio (delegada al core)
  const consumo = calcularConsumoEnergetico({potencia, horas});
  // Resultado limpio
  return { consumo };
  };
