'use strict';
/*globals imagesArray*/

function composeTrio() {
    var imagesArrayCopy = imagesArray.slice(); //creates a copy of images array
    var image1 = getRandomImage(imagesArrayCopy);
    var image2 = getRandomImage(imagesArrayCopy);
    var image3 = getRandomImage(imagesArrayCopy);
    console.log(image1, image2, image3);
}

//gets a random image from imagesArray
function getRandomImage(array) {
    var index = getRandomIndex(array.length); //calls getRandomIndex function and assigns random number no larger that length of images array
    var image = array[index]; //uses index to assign a random image from imagesArray
    array.splice(index, 1); //removes image from array
    console.log('random image', image);
    return image; //returns randomly selected image
}

// returns a random number no larger than the argument provided
function getRandomIndex(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

composeTrio();