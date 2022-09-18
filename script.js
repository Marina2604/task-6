let products = [
    [1, 'Yeshadow palette ', 5],
    [2, 'Makeup remover ', 10],
    [3, 'Powder ', 15],
    [4, 'Lipstick ', 20]
];
let shoppingCart = [];
function addToCart(product) {
    shoppingCart.push(products[product - 1]);
    renderCartFromArray();
}
function renderCartFromArray() {
    document.getElementById("shoppingCart").innerHTML = '';
    for (let i = 0; i < shoppingCart.length; i++) {
        let productHTML = document.createElement("div");
        let productDescription = document.createTextNode(shoppingCart[i][1] + ' costs ' + shoppingCart[i][2]);
        let removeBtn = document.createElement('button');

        removeBtn.setAttribute('onclick', 'removeProduct(' + shoppingCart[i][0] + ')');
        removeBtn.textContent = 'remove';
        productHTML.appendChild(productDescription);
        productHTML.appendChild(removeBtn);

        document.getElementById("shoppingCart").appendChild(productHTML);
    }
}
function removeProduct(product) {
    let j = 0;
    for (let i = 0; i < shoppingCart.length && j < 1; i++) {
        if (shoppingCart[i][0] == product) {
            shoppingCart.splice(i, 1);
            renderCartFromArray();
            j++;
        }
    }
}


