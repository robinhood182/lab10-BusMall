/* globals ImageViewer composeTrio */
/* exported App */
const appTemplate = document.getElementById('app-template');

class App {
    constructor(products) {
        this.products = products;
        this.totalClicks = 0;
    }

    render() {
        const dom = appTemplate.content;

        const imageViewerSection = dom.getElementById('image-viewer');
        const imageViewerComponent = new ImageViewer(composeTrio());
        console.log('imageViewerComponent is:', imageViewerComponent);
        const imageDom = imageViewerComponent.render();

        imageViewerSection.appendChild(imageDom);

        return dom;

    }
}