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
