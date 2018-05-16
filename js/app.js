'use strict';
var picSet = document.getElementById('pic-set');

//products object constructor
class Product {
    constructor(name, imageSource) {
        this.name = name;
        this.imageSource = imageSource;
        this.viewCount = 0;
        this.voteCount = 0;
    }

    render() {
        var dom = picSet.content;
        // var showImage1 = document.getElementById('image-1');   
        return dom;
    }
}