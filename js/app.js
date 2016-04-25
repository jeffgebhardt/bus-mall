var images = [];

function imageConstructor(imageName, filePath){
  'use strict';
  this.imageName = imageName;
  this.filePath = filePath;
  this.numTimesShown = 0;
  this.numTimesClicked = 0;

  images.push(this);
}

new imageConstructor('bag', 'img/bag.jpg');
new imageConstructor('banana', 'img/banana.jpg');
new imageConstructor('bathroom', 'img/bathroom.jpg');
new imageConstructor('boots', 'img/boots.jpg');
new imageConstructor('breakfast', 'img/breakfast.jpg');
new imageConstructor('bubblegum', 'img/bubblegum.jpg');
new imageConstructor('chair', 'img/chair.jpg');
new imageConstructor('cthulhu', 'img/cthulhu.jpg');
new imageConstructor('dog-duck', 'img/dog-duck.jpg');
new imageConstructor('dragon', 'img/dragon.jpg');

var updateImages = function(){
  'use strict';
  document.getElementById('0').innerHTML = null;
  document.getElementById('1').innerHTML = null;
  document.getElementById('2').innerHTML = null;

  var currentImages = [];

  for (var i = 0; i < 3; i++) {
    var image = document.createElement('img');
    var randomNumber = Math.floor(Math.random() * (10 - 0) + 0);
    image.src = images[randomNumber].filePath;
    image.setAttribute('height', '250');
    image.setAttribute('width', '250');
    document.getElementById(i).appendChild(image);
    currentImages.push(randomNumber);
  };
  currentImages = [];
};

document.getElementById('0').addEventListener('click', updateImages);
document.getElementById('1').addEventListener('click', updateImages);
document.getElementById('2').addEventListener('click', updateImages);

updateImages();
