'use strict';

var product = new Product();

var dom = product.render();

var root = document.getElementById('root');

root.appendChild(dom);