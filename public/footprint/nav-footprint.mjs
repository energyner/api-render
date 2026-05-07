/**Algoritmo que utilizará métodos del DOM para capturar el evento 
 * de envío de datos, manipularlo y  conectarnos al puerto 3008 del servidor local que hemos configurado */

/**  Funcion para manejar la logica comun para conectarse. Recibe los parámetros
 *  para la URL de la API, el ID del elemento, maneja los eventos de envio de los 
 * formularios y los mensajes de impresion.  */

//nav-footprint.mjs -  API huella-carbono

document.getElementById("calcular").addEventListener("click", async function (event) {
    event.preventDefault();
console.log("Form submitted with the data:");
    // Obtener los valores del formulario
    const state = document.getElementById("state").value;
    const elect = parseFloat(document.getElementById("elect").value) || 0;
    const gas = parseFloat(document.getElementById("gas").value) || 0;
    const water = parseFloat(document.getElementById("water").value) || 0;
    const lpg = parseFloat(document.getElementById("lpg").value) || 0;
    const gn = parseFloat(document.getElementById("gn").value) || 0;
    const fly = parseFloat(document.getElementById("fly").value) || 0;
    const cogs = parseFloat(document.getElementById("cogs").value) || 0;
    const person = parseInt(document.getElementById("person").value) || 1;

    // Crear el objeto de datos
    const data = { state, elect, gas, water, lpg, gn, fly, cogs, person };

    try {
        // Enviar los datos al servidor
        const response = await fetch("/api/v1/footprint", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        // Manejar la respuesta del servidor
        if (!response.ok) {
            const errorData = await response.json();
            alert("Error: " + (errorData.error || "Error desconocido"));
            return;
        }

        const result = await response.json();
        const responseData = result.data;
        // Mostrar los resultados en el frontend
        document.getElementById("resultado").value = responseData.total || 0;
        document.getElementById("estado").value = responseData.estado || "N/A";
        document.getElementById("percapita").value = responseData.per_capita || 0;
        document.getElementById("per_capita_estado").value = responseData.per_capita_estado || 0;
        document.getElementById("promedioUSA").value = responseData.promedioUSA || 0;
        document.getElementById("promedioMundial").value = responseData.promedioMundial || 0;
        document.getElementById("porcentajeEstado").value = responseData.porcentajeEstado + "%" || "N/A";
        document.getElementById("porcentajeUSA").value = responseData.porcentajeUSA + "%" || "N/A";
        document.getElementById("porcentajeMundial").value = responseData.porcentajeMundial + "%" || "N/A";
        console.log("Detalles:", responseData.detalles);
    } catch (error) {
        console.error("Error al enviar los datos:", error);
        alert("Hubo un error al comunicarse con el servidor.");
    }
});