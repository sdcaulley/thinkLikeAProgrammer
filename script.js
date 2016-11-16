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
    p = document.createElement('p');
    p.textContent = element;
    div.appendChild(p);
  }
  pagePlace.appendChild(div);
};
//Luhn Checksum code
var luhnChecksumValidation = function() {
  var message = '#';
  var pagePlace = document.getElementById('checksum_validation');
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
  return sum;
};

var readIndividualDigits = function() {
  var digit = prompt('Enter a six-digit number: ');
  var checksum = 0;
  for (var i = 0; i < digit.length; i++) {
    //handle odd or even length numbers
    if (digit.length % 2 === 0) {
      if (i % 2 === 0) {
        checksum += parseInt(digit[i]);
      } else {
        var double = handleDoubleDigits(parseInt(digit[i]));
        checksum += double;
      }
    } else {
      if (i % 2 === 1) {
        checksum += parseInt(digit[i]);
      } else {
        var double = handleDoubleDigits(parseInt(digit[i]));
        checksum += double;
      }
    }
  };
  if (checksum % 10 === 0) {
    console.log('Checksum is divisible by 10. Valid.');
  } else {
    console.log('Checksum is not divisible by 10. Invalid');
  }
  console.log('total: ', checksum);
};

halfOfASquare();
sidewaysTriangle();
//luhnChecksumValidation();
handleDoubleDigits();
