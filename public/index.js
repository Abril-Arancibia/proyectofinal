const productos = [
    {
        name: "Maceta personalizada 1",
        precio: 50.00,
        imagen: "imagenes/fototienda1.jpeg"
    },
    {
        name: "Maceta personalizada 2",
        precio: 50.00,
        imagen: "imagenes/fototienda2.jpeg"
    },
    {
        name: "Maceta personalizada 3",
        precio: 50.00,
        imagen: "imagenes/fototienda3.jpeg"
    },
    {
        name: "Maceta personalizada 4",
        precio: 50.00,
        imagen: "imagenes/fototienda4.jpeg"
    },
    {
        name: "Maceta personalizada 5",
        precio: 50.00,
        imagen: "imagenes/fototienda5.jpeg"
    },
    {
        name: "Maceta personalizada 6",
        precio: 50.00,
        imagen: "imagenes/fototienda(3).jpeg"
    },
    {
        name: "Maceta personalizada 7",
        precio: 50.00,
        imagen: "imagenes/fototienda(4).jpeg"
    },
    {
        name: "Maceta personalizada 8",
        precio: 50.00,
        imagen: "imagenes/fototienda(5).jpeg"
    },
    {
        name: "Maceta personalizada 9",
        precio: 50.00,
        imagen: "imagenes/fototienda(6).jpeg"
    },
    {
        name: "Maceta personalizada 10",
        precio: 50.00,
        imagen: "imagenes/fototienda(7).jpeg"
    },
    {
        name: "Maceta personalizada 11",
        precio: 50.00,
        imagen: "imagenes/fototienda(8).jpeg"
    },
    {
        name: "Maceta personalizada 12",
        precio: 50.00,
        imagen: "imagenes/fototienda(10).jpeg"
    },
    
    
]

const carrito = [];

const productsContainer = document.getElementById("products-container");

productos.forEach(function(producto) {
    const productoDiv = document.createElement('div');
    productoDiv.className = "product"

    const figureContainer = document.createElement('figure');
    const imagenContainer = document.createElement('img');
    imagenContainer.src = producto.imagen;

    const productoNombre = document.createElement('div');
    productoNombre.className = "name"

    const productoPrecio = document.createElement('div');
    productoPrecio.className = "price"

    
    const botonContainer = document.createElement('div');
    botonContainer.className = "btn-buy"
    const productoBoton = document.createElement('button');
    productoBoton.classList.add("btn");
    productoBoton.classList.add("btn-outline-dark");

    productoNombre.innerHTML = producto.name;
    productoPrecio.innerHTML = "$ " + producto.precio;
    productoBoton.innerText = "Agregar al carrito";

    productoBoton.onclick = function() {
        carrito.push(producto);
        alert(producto.name + " Ha sido agregado al carrito");
    }

    productsContainer.appendChild(productoDiv);
    productoDiv.appendChild(figureContainer);
    productoDiv.appendChild(productoNombre);
    productoDiv.appendChild(productoPrecio);
    productoDiv.appendChild(botonContainer);
    botonContainer.appendChild(productoBoton);
    figureContainer.appendChild(imagenContainer);

});

