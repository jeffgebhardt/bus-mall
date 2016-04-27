var images = [];
localStorage.setItem('images', JSON.stringify(images));

var counter = 0;

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
new imageConstructor('pen', 'img/pen.jpg');
new imageConstructor('pet-sweep', 'img/pet-sweep.jpg');
new imageConstructor('scissors', 'img/scissors.jpg');
new imageConstructor('shark', 'img/shark.jpg');
new imageConstructor('sweep', 'img/sweep.png');
new imageConstructor('tauntaun', 'img/tauntaun.jpg');
new imageConstructor('unicorn', 'img/unicorn.jpg');
new imageConstructor('usb.gif', 'img/usb.gif');
new imageConstructor('water-can.jpg', 'img/water-can.jpg');
new imageConstructor('wine-glass', 'img/wine-glass.jpg');

var updateImages = function(){
  'use strict';

  switch (counter) {
  case 5:
    var userAnswer = prompt('Would you like to keep playing? (y or n)');
    if (userAnswer == 'y') {
      counter++;
      this.updateImagesTwo = updateImages();
      updateImagesTwo();
    }
    else {
      alert('Game Over');
    }
    document.getElementById('0').innerHTML = null;
    document.getElementById('1').innerHTML = null;
    document.getElementById('2').innerHTML = null;

    drawChart();
    break;

  case 15:
    alert('Game over');
    document.getElementById('0').innerHTML = null;
    document.getElementById('1').innerHTML = null;
    document.getElementById('2').innerHTML = null;

    drawChart();
    break;

  default:

    document.getElementById('0').innerHTML = null;
    document.getElementById('1').innerHTML = null;
    document.getElementById('2').innerHTML = null;

    var currentImages = [];

    for (var i = 0; i < 3; i++) {
      var image = document.createElement('img');
      var randomNumber = Math.floor(Math.random() * (20 - 0) + 0);
      console.log(randomNumber);
      if (randomNumber == currentImages[0] || randomNumber == currentImages[1]) {
        randomNumber = Math.floor(Math.random() * (20 - 0) + 0);
      }
      images[randomNumber].numTimesShown += 1;
      image.src = images[randomNumber].filePath;
      image.setAttribute('height', '250');
      image.setAttribute('width', '250');
      document.getElementById(i).appendChild(image);
      currentImages.push(randomNumber);
    };
    console.log(currentImages);
    currentImages = [];
    console.log(images);
    counter ++;
    console.log(counter);
  };
};

document.getElementById('0').addEventListener('click', updateImages);
document.getElementById('1').addEventListener('click', updateImages);
document.getElementById('2').addEventListener('click', updateImages);

updateImages();

var drawChart = function(){
  'use strict';
  var names = [];
  var votes = [];

  for (var i = 0; i < images.length; i++) {
    names.push(images[i].imageName);
    votes.push(images[i].numTimesShown);
  }

  localStorage.setItem('imageVotes', JSON.stringify(votes));
  var retrievedData = localStorage.getItem('imageVotes');
  var votes2 = JSON.parse(retrievedData);

  var ctx = document.getElementById('votesChart').getContext('2d');
  var votesChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: names,
      datasets: [{
        label: 'Number of Votes',
        data: votes2
      }]
    },
  });
};
