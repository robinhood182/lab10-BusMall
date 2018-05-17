/*export productsArray */
/*globals App */
'use strict';


//creates a new App object instance
const app = new App();
//returns a rendered app
var dom = app.render();
//grabs div #root
var root = document.getElementById('root');
//appends #root to dom
root.appendChild(dom);