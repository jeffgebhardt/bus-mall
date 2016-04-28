var images = [];
var chartNames = [];
var chartTimesShown = [];
var counter = 0;

function imageConstructor(imageName, filePath){
  'use strict';
  this.imageName = imageName;
  this.filePath = filePath;
  this.numTimesShown = 0;
  this.numVotes = 0;
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
new imageConstructor('pen', 'img/pen.jpg');
new imageConstructor('pet-sweep', 'img/pet-sweep.jpg');
new imageConstructor('scissors', 'img/scissors.jpg');
new imageConstructor('shark', 'img/shark.jpg');
new imageConstructor('sweep', 'img/sweep.png');
new imageConstructor('tauntaun', 'img/tauntaun.jpg');
new imageConstructor('unicorn', 'img/unicorn.jpg');
new imageConstructor('usb', 'img/usb.gif');
new imageConstructor('water-can', 'img/water-can.jpg');
new imageConstructor('wine-glass', 'img/wine-glass.jpg');


var updateImages = function(){
  'use strict';

  switch (counter) {
  case 10:
    var userAnswer = prompt('Would you like to keep playing? (y or n)');
    if (userAnswer == 'y') {
      counter++;
      this.updateImagesTwo = updateImages();
      updateImagesTwo();
    }
    else {
      alert('Game Over');
    }
    document.getElementById('imagesContainer').innerHTML = null;
    drawChart();
    break;

  case 20:
    alert('Game over');
    document.getElementById('imagesContainer').innerHTML = null;
    drawChart();
    break;

  default:

    document.getElementById('imagesContainer').innerHTML = null;

    var currentImages = [];

    for (var i = 0; i < 3; i++) {
      var image = document.createElement('img');
      var randomNumber = Math.floor(Math.random() * (19 - 0) + 0);
      while (randomNumber == currentImages[0] || randomNumber == currentImages[1]) {
        randomNumber = Math.floor(Math.random() * (10 - 0) + 0);
      }
      images[randomNumber].numTimesShown += 1;
      image.src = images[randomNumber].filePath;
      document.getElementById('imagesContainer').appendChild(image);
      currentImages.push(randomNumber);
    };
    currentImages = [];
    counter ++;
  };
};

document.getElementById('imagesContainer').addEventListener('click', updateImages);

var drawChart = function(){
  'use strict';
  var ctx = document.getElementById('votesChart').getContext('2d');

  for (var i = 0; i < images.length; i++) {
    chartNames.push(images[i].imageName);
  }

  for (var i = 0; i < images.length; i++) {
    chartTimesShown.push(images[i].numTimesShown);
  }

  var votesChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: chartNames,
      datasets: [{
        label: 'Number of Times Shown',
        data: chartTimesShown
      }]
    },
  });
};
