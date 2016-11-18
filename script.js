var halfOfASquare = function() {
  var message = '#';
  //var pagePlace = document.getElementById('half_square');
  //var div = document.createElement('div');
  var p;
  for (var row = 1; row <= 5; row++) {
    var element = '';
    for (var line = 1; line <= 6 - row; line++) {
      element += message;
    }
    //p = document.createElement('p');
    //p.textContent = element;
    //div.appendChild(p);
  }
  //pagePlace.appendChild(div);
};

var sidewaysTriangle = function() {
  var message = '#';
  //var pagePlace = document.getElementById('sideways_triangle');
  //var div = document.createElement('div');
  var p;
  for (var row = 1; row <= 7; row++) {
    var element = '';
    for (var line = 1; line <= 4 - Math.abs(4 - row); line++) {
      element += message;
    }
    //p = document.createElement('p');
    //p.textContent = element;
    //div.appendChild(p);
  }
  //pagePlace.appendChild(div);
};
//Luhn Checksum code
var luhnChecksumValidation = function() {
  //document.getElementById('checksum_validation').addEventListener('click', readIndividualDigits);

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
  var digit = prompt('Enter your number for validation: ');
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
    alert('Checksum is divisible by 10. Valid.');
  } else {
    alert('Checksum is not divisible by 10. Invalid');
  }
};

//positive or negative code
var positiveOrNegative = function() {
  var positiveCount = 0;
  var negativeCount = 0;
  for (var i = 0; i < 10; i++) {
    var number = prompt('Please enter a positive or negative number: ');
    if (parseInt(number) > 0) {
      positiveCount++;
    } else {
      negativeCount++;
    }
  }
  var response = prompt('Do you want the (p)ositive or (n)egative count?');
  if (response.toLowerCase() === 'p') {
    alert('The number of positive numbers is: ' + positiveCount);
  } else {
    alert('The number of negative number is: ' + negativeCount);
  }
};

var decodeAMessage = function() {
  var message = prompt('Type in your message.  Use commas to separate characters.');
  var number = '';
  var decodeMessage = '';
  for (var i = 0; i < message.length; i++) {
    if (message[i] !== ',') {
      number += message[i];
    } else {
      decodeMessage += modeSwitch(parseInt(number));
      console.log('decodeMessage: ', decodeMessage);
      number = '';
    }
  };
  alert('Here is your message: ' + decodeMessage);
};

var numberToUpperCase = function(number) {
  var outputUpperCase = String.fromCharCode(number + 64);
  return outputUpperCase;
};

var numberToLowerCase = function(number) {
  var outputLowerCase = String.fromCharCode(number + 96);
  return outputLowerCase;
};

var numberToPunctuation = function(number) {
  var outputPunctuation = '';
  switch (number) {
  case 1:
    outputPunctuation = '&#33;';
    break;
  case 2:
    outputPunctuation = '&#43;';
    break;
  case 3:
    outputPunctuation = '&#44;';
    break;
  case 4:
    outputPunctuation = '&#46;';
    break;
  case 5:
    outputPunctuation = '&#32;';
    break;
  case 6:
    outputPunctuation = '&#59;';
    break;
  case 7:
    outputPunctuation = '&#34;';
    break;
  case 8:
    outputPunctuation = '&#39;';
    break;
  default:
    alert('No such number.');
    break;
  }
  return outputPunctuation;
};

var modeSwitch = function(number) {
  var mode = 'upperCase';
  var char;
  switch (mode) {
  case 'upperCase':
    console.log('upperCase: ', number);
    number = number % 27;
    if (number === 0) {
      mode = 'lowerCase';
      console.log('mode: ', mode);
      break;
    } else {
      char = numberToUpperCase(number);
      return char;
      char = '';
      break;
    }
  case 'lowerCase':
    console.log('lowerCase: ', number);
    number = number % 27;
    alert('Modulo 27: ' + number);
    if (number === 0) {
      mode = 'punctuation';
      break;
    } else {
      char = numberToLowerCase(number);
      return char;
      char = '';
      break;
    }
  case 'punctuation':
    console.log('punctuation: ', number);
    number = number % 9;
    alert('Modulo 9: ' + number);
    if (number === 0) {
      mode = 'upperCase';
      break;
    } else {
      char = numberToPunctuation(number);
      return char;
      char = '';
      break;
    }
  }
};

halfOfASquare();
sidewaysTriangle();
luhnChecksumValidation();
decodeAMessage();

// #!/user/bin/env node  = ./file
// console.log(function(process.argv[2]))
