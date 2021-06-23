class Product {
    constructor(name, price, image) {
        this.name = name;
        this.price = price;
        this.image = image;
    }
}

const products = [
    new Product('Maceta personalizada 1', 999.00, 'imagenes/fototienda1.jpeg'),
    new Product('Maceta personalizada 2', 999.00, 'imagenes/fototienda2.jpeg'),
    new Product('Maceta personalizada 3', 999.00, 'imagenes/fototienda3.jpeg'),
    new Product('Maceta personalizada 4', 999.00, 'imagenes/fototienda4.jpeg'),
    new Product('Maceta personalizada 5', 999.00, 'imagenes/fototienda5.jpeg'),
    new Product('Maceta personalizada 6', 999.00, 'imagenes/fototienda(3).jpeg'),
    new Product('Maceta personalizada 7', 999.00, 'imagenes/fototienda(4).jpeg'),
    new Product('Maceta personalizada 8', 999.00, 'imagenes/fototienda(5).jpeg'),
    new Product('Maceta personalizada 9', 999.00, 'imagenes/fototienda(6).jpeg'),
    new Product('Maceta personalizada 10', 999.00, 'imagenes/fototienda(7).jpeg'),
    new Product('Maceta personalizada 11', 999.00, 'imagenes/fototienda(8).jpeg'),
    new Product('Maceta personalizada 12', 999.00, 'imagenes/fototienda(10).jpeg'), ]


const productsContainer = document.getElementById("products-container");

products.forEach(function(product) {
    const productDiv = document.createElement('div');
    productDiv.classList= "product";

    const figureContainer = document.createElement('figure');
    const imageContainer = document.createElement('img');
    imageContainer.src = product.image;
    imageContainer.className = "imgProduct";

    const productName = document.createElement('div');
    productName.className = "name"

    const productPrice = document.createElement('div');
    productPrice.className = "price"

    const buttonContainer = document.createElement('div');
    buttonContainer.className = "btn-buy"
    const productButton = document.createElement('button');
    productButton.classList.add("btn");
    productButton.classList.add("btn-outline-dark");

    productName.innerHTML = product.name;
    productPrice.innerHTML = "$ " + product.price;
    productButton.innerText = "Agregar al carrito";

    productsContainer.appendChild(productDiv);
    productDiv.appendChild(figureContainer);
    productDiv.appendChild(productName);
    productDiv.appendChild(productPrice);
    productDiv.appendChild(buttonContainer);
    buttonContainer.appendChild(productButton);
    figureContainer.appendChild(imageContainer);

});
    
