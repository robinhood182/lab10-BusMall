/* exported products, clearProductsData */
/* globals productsArray */  
'use strict';
const productsArrayData = window.localStorage.getItem('productsArray');

window.onbeforeunload = () => {
    window.localStorage.setItem('productsArray', JSON.stringify(productsArray));
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
    window.localStorage.clear(productsArray);
    initProductsArray();
}
//console.log('productArray is:', productsArray);
//console.log('productsArrayData', productsArrayData);