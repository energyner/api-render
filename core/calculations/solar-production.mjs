// src/calculations/solar-production.mjs

// Esta función SOLO debe realizar el cálculo y devolver un valor.
// Recibe directamente los parámetros necesarios.
// solar-production.mjs

export function calcularProduccionSolar({
  area,
  irradiacion,
  eficiencia
}) {

  console.log(
    '☀ Calculando producción solar...'
  );

  // =========================
  // Fórmula
  // =========================

  const produccion =
    area *
    irradiacion *
    eficiencia;

  console.log(
    '✅ Producción calculada:',
    produccion
  );

  return {
    produccion
  };
}