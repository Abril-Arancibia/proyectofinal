document.addEventListener('DOMContentLoaded', async () => {
    const products = await getProducts();
    createDOMProducts(products);
})

const getProducts = async () => {
    try {
        const response = await fetch ('api.json')
        const dataProducts = await response.json()
        return dataProducts.products;
    } catch (error) {
        console.log(error);
    }
}

function createDOMProducts(products) {
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
}
