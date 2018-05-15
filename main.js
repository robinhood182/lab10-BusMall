'use strict';
/*globals imagesArray*/

function composeTrio() {
    var imagesArrayCopy = imagesArray.slice(); //creates a copy of images array

}

//gets a random image from imagesArray
function getRandomImage() {
    var index = getRandomIndex(imagesArray.length); //calls getRandomIndex function and assigns random number no larger that length of images array
    var image = imagesArray[index]; //uses index to assign a random image from imagesArray
    imagesArray.splice(index, 1); //removes image from array
    //return image; //returns randomly selected image
    console.log('random image', image);
}

// returns a random number no larger than the argument provided
function getRandomIndex(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

getRandomImage();