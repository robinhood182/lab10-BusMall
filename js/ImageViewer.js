/* exported ImageViewer*/
'use strict';

const displayImagesTemplate = document.getElementById('image-viewer-template').content;

class ImageViewer {
    constructor(imageArray, onSelect, totalClicks) {
        this.imageArray = imageArray;
        this.onSelect = onSelect;
        this.totalClicks = totalClicks;
    }
    
    update(imageArray) {
        this.imageArray = imageArray;
        for(let i = 0; i < this.imageArray.length; i++) {  
            const img = this.container.querySelector('#image-' + (i + 1));
            img.src = this.imageArray[i].imageSource;
            this.imageArray[i].viewCount++;
        }
    }

    render() {
        
        const dom = displayImagesTemplate.cloneNode(true);
        this.container = dom.querySelector('div');
        for(let i = 0; i < this.imageArray.length; i++) {
            
            const img = this.container.querySelector('#image-' + (i + 1));
            img.addEventListener('click', () => {
                this.onSelect(this.imageArray[i]);
            });
        }
        
        this.update(this.imageArray);
    
        return dom;
    }
}
