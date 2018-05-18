'use strict';
/*globals productsArray initProductsArray*/
/* exported composeTrio */
initProductsArray();

var image1;
var image2;
var image3;
var imagesTrioArray = [];

function composeTrio() {
    var productsArrayCopy = productsArray.slice(); //creates a copy of images array
    image1 = getRandomImage(productsArrayCopy);
    image2 = getRandomImage(productsArrayCopy);
    image3 = getRandomImage(productsArrayCopy);
    imagesTrioArray = [image1, image2, image3];
    return imagesTrioArray;
    //console.log(imagesTrioArray);
}

//gets a random image from productsArray
function getRandomImage(array) {
    var index = getRandomIndex(array.length); //calls getRandomIndex function and assigns random number no larger that length of imagesArray
    var image = array[index]; //uses index to assign a random image from imagesArray
    array.splice(index, 1); //removes image from array
    // console.log('random image', image);
    return image; //returns randomly selected image
}

// returns a random number no larger than the argument provided
function getRandomIndex(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

//composeTrio();