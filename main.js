
function saludar() {

    let nombre;
    do {
        nombre = prompt("Bienvenido a Viaje Seguro \nIngrese su nombre: ");
        if (nombre === null || nombre === "") {
        alert('Ingrese su nombre por favor');
        }
    } while (nombre === null || nombre === "");
    alert('Hola ' + nombre + ' gracias por elegirnos!');
}

function elegirDestino() {
    let tipoDeViaje;
    do {
        tipoDeViaje = parseInt(prompt('Ingrese qué tipo de viaje necesita:' +
        '\n 1- Viaje de larga distancia más de 10 km: Precio sin IVA $15000' +
        '\n 2- Viaje de media distancia entre 10 km y 5 km: Precio sin IVA $10000' +
        '\n 3- Viaje de corta distancia menos de 5 km: Precio sin IVA $5000' +
        '\n 4- Terminar'));
        if (isNaN(tipoDeViaje) || tipoDeViaje < 1 || tipoDeViaje > 4) {
        alert('Ingrese una opción válida');
        }
    } while (isNaN(tipoDeViaje) || tipoDeViaje < 1 || tipoDeViaje > 4);
    return tipoDeViaje;
}
function obtenerPrecio(tipoDeViaje) {
    switch (tipoDeViaje) {
        case 1:
        return 15000;
        case 2:
        return 10000;
        case 3:
        return 5000;
        case 4:
        return 0;
    }
}

function confirmacion(tipoDeViaje) {
    let descripcionViaje;
    switch (tipoDeViaje) {
        case 1:
        descripcionViaje = 'un viaje de larga distancia';
        break;
        case 2:
        descripcionViaje = 'un viaje de media distancia';
        break;
        case 3:
        descripcionViaje = 'un viaje de corta distancia';
        break;
        default:
        return false;
    }
    alert('Usted ha contratado ' + descripcionViaje);
    return confirm('¿Desea contratar otro viaje? (Aceptar)' +
    '\nSi desea que muestre el precio final (Cancelar)');
}



saludar();

let precios = [];

let seguirComprando = true;

while (seguirComprando) {

    let tipoDeViaje = elegirDestino();
    if (tipoDeViaje === 4) {
    break;
    }
    precios.push(obtenerPrecio(tipoDeViaje));
    seguirComprando = confirmacion(tipoDeViaje);


}
if (precios.length===0) {
    alert('No se realizaron compras. Gracias por su visita.');
}else
{
    let precioF = 'Precios del viaje solicitado: \n';
    precios.forEach( (item) => {
        precioF += 'Precio del viaje de :' + '$' + item + '\n';
    })
    const precioFinal = precios.reduce((acum, precio) =>acum + precio + (precio * 0.21), 0);
    alert(precioF + '\n El precio total incluyendo el iva es: $' + precioFinal);
}

