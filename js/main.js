'use strict';
/*globals imagesArray */

var image1;
var image2;
var image3;
var imageTrioArray = [];

function composeTrio() {
    var imagesArrayCopy = imagesArray.slice(); //creates a copy of images array
    image1 = getRandomImage(imagesArrayCopy);
    image2 = getRandomImage(imagesArrayCopy);
    image3 = getRandomImage(imagesArrayCopy);
    imageTrioArray = [image1, image2, image3];
    // console.log(image1, image2, image3);
    // console.log('image trio', imageTrioArray);
}

//gets a random image from imagesArray
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

composeTrio();