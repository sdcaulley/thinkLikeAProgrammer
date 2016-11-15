var halfOfASquare = function() {
  var message = '#';
  var pagePlace = document.getElementById('half_square');
  var div = document.createElement('div');
  var p;
  for (var row = 1; row <= 5; row++) {
    var element = '';
    for (var line = 1; line <= 6 - row; line++) {
      element += message;
    }
    console.log('element ', element);
    p = document.createElement('p');
    p.textContent = element;
    div.appendChild(p);
  }
  pagePlace.appendChild(div);
};

var sidewaysTriangle = function() {
  var message = '#';
  var pagePlace = document.getElementById('sideways_triangle');
  var div = document.createElement('div');
  var p;
  for (var row = 1; row <= 7; row++) {
    var element = '';
    for (var line = 1; line <= 4 - Math.abs(4 - row); line++) {
      element += message;
    }
    console.log('element ', element);
    p = document.createElement('p');
    p.textContent = element;
    div.appendChild(p);
  }
  pagePlace.appendChild(div);
};

var luhnChecksumValidation = function() {
  var message = '#';
  var pagePlace = document.getElementById('sideways_triangle');
  var div = document.createElement('div');
  var p;

};

var handleDoubleDigits = function(digit) {
  var doubleDigit = digit * 2;
  var sum;
  if (doubleDigit >= 10) {
    sum = 1 + doubleDigit % 10;
  } else {
    sum = doubleDigit;
  }
};

var readIndividualDigits = function() {
  var digit = parseInt(prompt('Enter a one-digit number: '));
};

halfOfASquare();
sidewaysTriangle();
//luhnChecksumValidation();
handleDoubleDigits();
