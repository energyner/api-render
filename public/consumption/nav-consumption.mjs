/**Algoritmo que utilizará métodos del DOM para capturar el evento 
 * de envío de datos, manipularlo y  conectarnos al puerto del servidor local que hemos configurado */

//1- API consumo enrgetico
//nav-consumption.mjs
// Captando evento del formulario
document.getElementById('consumo-form').addEventListener('submit', (event) => {
    event.preventDefault(); // Evitar que el formulario recargue la página

    const potencia = parseFloat(document.getElementById('potencia').value);
    const horas = parseFloat(document.getElementById('horas').value);

// Realizar la solicitud al servidor
    fetch('/api/v1/consumo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ potencia: potencia, horas: horas })
    })
    .then(response => {
        if (!response.ok) {
            return response.text().then(errorMessage => {
                throw new Error(`Request error: ${response.status} - ${errorMessage}`);
            });
        }
        return response.json(); // Procesar la respuesta como JSON
    })
    .then(data => {
        console.log('Energy Consumption:', data);

// Actualizar la interfaz del navegador con el resultado
        const resultadoConsumo = document.getElementById('resultadoConsumo');
        resultadoConsumo.textContent = `Calculated Energy Consumption: ${data.consumo} kWh`;
        resultadoConsumo.style.color = "green"; // Estilo opcional para destacar el texto
    })
    .catch(error => {
        console.error('Error calculating consumption:', error);

// Mostrar mensaje de error en el navegador
        const resultadoConsumo = document.getElementById('resultadoConsumo');
        resultadoConsumo.textContent = `Error: ${error.message}`;
        resultadoConsumo.style.color = "red"; // Estilo opcional para destacar el error
    });
});


