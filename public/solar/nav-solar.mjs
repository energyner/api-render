/**Algoritmo que utilizará métodos del DOM para capturar el evento 
 * de envío de datos, manipularlo y  conectarnos al puerto del servidor local que hemos configurado */



// API produccion solar
//nav-solar.mjs
// Captando evento del formulario
// nav-solar.mjs
// API producción solar

document
  .getElementById('produccion-form')
  .addEventListener('submit', async (event) => {

    event.preventDefault();

    // =========================
    // Capturar datos
    // =========================
    const area =
      parseFloat(document.getElementById('area').value);

    const irradiacion =
      parseFloat(document.getElementById('irradiacion').value);

    const eficiencia =
      parseFloat(document.getElementById('eficiencia').value);

    try {

      // =========================
      // Request API
      // =========================
      const response = await fetch('/api/v1/solar', {

        method: 'POST',

        headers: {
          'Content-Type': 'application/json'
        },

        body: JSON.stringify({
          area,
          irradiacion,
          eficiencia
        })

      });

      // =========================
      // Validación HTTP
      // =========================
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error( errorData.error || 'Error calculando producción solar'  );
      }

      // =========================
      // Respuesta JSON
      // =========================
      const result = await response.json();

      console.log('Solar Production:', result);

      // =========================
      // Mostrar resultado
      // =========================
      const resultadoSolar =
        document.getElementById('resultadoSolar');

      resultadoSolar.textContent =
        `Solar Production calculated: ${result.data.produccion} Wh`;
      resultadoSolar.style.color = 'green';

    } catch (error) {
      console.error( 'Error calculating solar production:', error  );

      const resultadoSolar =  document.getElementById('resultadoSolar');
      resultadoSolar.textContent =  `Error: ${error.message}`;
      resultadoSolar.style.color = 'red';
    }
});