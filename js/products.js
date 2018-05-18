/* exported products, clearProductsData */
/* globals productsArray */  
'use strict';
const productsArrayData = window.localStorage.getItem('products');

window.onbeforeunload = () => {
    window.localStorage.setItem('products', JSON.stringify(products));
};

let products;
if(productsArrayData) {
    products = JSON.parse(productsArrayData);

} else {
    initProductsArray();
}

function initProductsArray() {
    products = productsArray;
}

function clearProductsData() {
    window.localStorage.clear(products);
    initProductsArray();
}
