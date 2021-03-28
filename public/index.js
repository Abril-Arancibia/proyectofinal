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
    productoDiv.classList= "product addToCart"

    const figureContainer = document.createElement('figure');
    const imagenContainer = document.createElement('img');
    imagenContainer.src = producto.imagen;
    imagenContainer.className = "imgProduct";

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
    
const addToShoppingCartButtons = document.querySelectorAll(".addToCart");
addToShoppingCartButtons.forEach(addToCartButton => {
    addToCartButton.addEventListener("click", addToCartClicked);
});

const shoppingCartProductsContainer= document.querySelector(".products-container");

function addToCartClicked(event){
    const button = event.target;
    const product = button.closest(".product");

    const name = product.querySelector(".name").textContent;
    const price = product.querySelector(".price").textContent;
    const img = product.querySelector(".imgProduct").src;

 addProductToShoppingCart(name, price, img);
}

function addProductToShoppingCart(name, price, img) {
    const shoppingContainer = document.getElementById('shoppingCartProductsContainer');
    const shoppingCartRow = document.createElement("div");
    const shoppingCartContent = `<div class="row shoppingCartProduct">
    <div class="col-6">
        <div class="shopping-cart-product d-flex align-items-center h-100 border-bottom pb-2 pt-3">
            <img src=${img} class="shopping-cart-image">
            <h6 class="shopping-cart-product-name shoppingCartProductName text-truncate ml-3 mb-0">${name}
            </h6>
        </div>
    </div>
    <div class="col-2">
        <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
            <p class="product-price mb-0 shoppingCartProductPrice">${price}</p>
        </div>
    </div>
    <div class="col-4">
        <div class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
            <input class="shopping-cart-quantity-input shoppingCartProductQuantity" type="number" value="1">
            <button class="btn btn-danger buttonDelete" type="button">X</button>
        </div>
    </div>
</div>`;
shoppingCartRow.innerHTML = shoppingCartContent;
shoppingContainer.appendChild(shoppingCartRow);




}
