/* exported productsArray clearProductsData */
const productsArrayData = window.localStorage.getItem('productsArray');

window.onbeforeunload = () => {
    window.localStorage.setItem('productsArray', JSON.stringify(productsArray));
};

let productsArray;
if(productsArrayData) {
    productsArray = JSON.parse(productsArrayData);

} else {
    initProductsArray();
}

function initProductsArray() {
    class Product {
        constructor(name, imageSource) {
            this.name = name;
            this.imageSource = imageSource;
            this.viewCount = 0;
            this.voteCount = 0;
        }
    }
    
    var bag = new Product('bag', 'images/bag.jpg');
    var banana = new Product('banana', 'images/banana.jpg');
    var bathroom = new Product('bathroom', 'images/bathroom.jpg');
    var boots = new Product('boots', 'images/boots.jpg');
    var breakfast = new Product('breakfast', 'images/breakfast.jpg');
    var bubblegum = new Product('bubblegum', 'images/bubblegum.jpg');
    var chair = new Product('chair', 'images/chair.jpg');
    var cthulhu = new Product('cthulhu', 'images/cthulhu.jpg');
    var dogDuck = new Product('dog-duck', 'images/dog-duck.jpg');
    var dragon = new Product('dragon', 'images/dragon.jpg');
    var pen = new Product('pen', 'images/pen.jpg');
    var petSweep = new Product('pet-sweep', 'images/pet-sweep.jpg');
    var scissors = new Product('scissors', 'images/scissors.jpg');
    var shark = new Product('shark', 'images/shark.jpg');
    var sweep = new Product('sweep', 'images/sweep.png');
    var tauntaun = new Product('tauntaun', 'images/tauntaun.jpg');
    var unicorn = new Product('unicorn', 'images/unicorn.jpg');
    var usb = new Product('usb', 'images/usb.gif');
    var waterCan = new Product('water-can', 'images/water-can.jpg');
    var wineGlass = new Product('wine-glass', 'images/wine-glass.jpg');
    
    productsArray = [bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, usb, waterCan, wineGlass];
    
}

function clearProductsData() {
    window.localStorage.clear('productsArray');
    initProductsArray();
}
