/* globals ImageViewer composeTrio */
/* exported App */ 

//grabs #app-template and creates a copy       
const appTemplate = document.getElementById('app-template').cloneNode(true);
//class constructor that stores totalClicks and contains the render() method
class App {
    constructor() {
        this.totalClicks = 0;

    }
    //creates and instance of the ImageViewer class
    render() {
        const dom = appTemplate.content;

        const imageViewerSection = dom.getElementById('image-viewer');
        const imageViewerComponent = new ImageViewer(composeTrio(), (imageClicked) => {
            if(this.totalClicks < 25) {
                imageClicked.voteCount++;
                this.totalClicks++;

                console.log('onSelect', imageClicked);
                console.log('total clicks', this.totalClicks);
                imageViewerComponent.update(composeTrio());
            } else {
                alert('All done, thank you for participating!');
            }
        });

        const imageDom = imageViewerComponent.render();

        imageViewerSection.appendChild(imageDom);

        return dom;

    }
}
