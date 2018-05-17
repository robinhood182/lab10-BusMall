/* exported ImageViewer*/
'use strict';

const displayImagesTemplate = document.getElementById('image-viewer-template').content;

class ImageViewer {
    constructor(imageArray, onSelect) {
        this.imageArray = imageArray;
        this.onChoice = onSelect;
    }
    
    update(imageArray) {
        this.imageArray = imageArray;
    }

    render() {
        const dom = displayImagesTemplate;
        for(let i = 0; i < this.imageArray.length; i++) {
            const img = dom.getElementById('image-' + (i + 1));
            img.src = this.imageArray[i].imageSource;
            img.addEventListener('click', () => {
                this.onChoice(this.imageArray[i]);
            });
        }
        
        this.header = dom.querySelector('h2');
        
        
        this.update(this.imageArray);
       

        return dom;
    }
}

// update(imageArray) {
//     this.imageArray = imageArray;
//     this.img0.src = imageArray[0].imageSource;
//     this.img1.src = imageArray[1].imageSource;
//     this.img2.src = imageArray[2].imageSource;
// }

// render() {
//     const dom = displayImagesTemplate;

//     this.header = dom.querySelector('h2');
//     this.img0 = dom.getElementById('image-1');
//     this.img1 = dom.getElementById('image-2');
//     this.img2 = dom.getElementById('image-3');
   
//     this.update(this.imageArray);

//     return dom;
// }