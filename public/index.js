function cargarProductos() {
    return [{
        nombre: "Maceta Sol",
        codigo: 1,
        precio: 45,
    },
    {
        nombre: "Maceta Desierto",
        codigo: 2,
        precio: 50,
    },
    {
        nombre: "Maceta buda",
        codigo: 3,
        precio: 55,
    }];
}

function obtenerProductoBuscado(productos) {
    let mensajeProducto = "Ingrese el codigo del producto:\n";

    for (i = 0; i < productos.length; i++) {
        let nombre = productos[i].nombre;
        let codigo = productos[i].codigo;
        mensajeProducto = mensajeProducto + codigo + " - " + nombre + "\n";
    }

    let codigoProducto = prompt(mensajeProducto);

    return productos.find((producto) => producto.codigo == codigoProducto);
}

function obtenerFinanciacionPretendida(precio) {
    return prompt("El precio del producto es: $" + precio + "\nEn cuantas cuotas desea pagarlo? (Hasta 12 cuotas)");
}

function calcularCostos(precio, cuotas) {
    let interes = 0;
    if (cuotas > 3 && cuotas <= 6) {
        interes = 0.2;
    } else if (cuotas > 6) {
        interes = 0.3;
    }

    let precioFinal = precio * (interes + 1);
    let precioCuota = precioFinal / cuotas;

    return {
        precioFinal: precioFinal,
        precioCuota: precioCuota
    };
}

function mostrarCostoAlCliente(precioFinal, cuotas, precioCuota) {
    alert("El precio final es de: $" + precioFinal + " y lo va a pagar en " + cuotas + " de $" + precioCuota.toFixed(2));
}

function main() {
    let productos = cargarProductos();
    const productoSelecionado = obtenerProductoBuscado(productos);

    if (!productoSelecionado) {
        alert("El codigo del producto es incorrecto")
    } else {

        let cuotas = obtenerFinanciacionPretendida(productoSelecionado.precio);

        let costos = calcularCostos(productoSelecionado.precio, cuotas);

        mostrarCostoAlCliente(costos.precioFinal, cuotas, costos.precioCuota);
    }
}


document.body.onload = main;

