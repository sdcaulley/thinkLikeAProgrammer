var mode = 'upperCase';

var decodeAMessage = function() {
  var message = prompt('Type in your message.  Use commas to separate characters.');
  var number = message.split(',');
  var decodeMessage = '';

  console.log('number: ', number);

  for (var i = 0; i < number.length; i++) {
    var intGroup = parseInt(number[i]);
    decodeMessage += modeSwitch(intGroup);
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
    outputPunctuation = '!';
    break;
  case 2:
    outputPunctuation = '?';
    break;
  case 3:
    outputPunctuation = ',';
    break;
  case 4:
    outputPunctuation = '.';
    break;
  case 5:
    outputPunctuation = ' ';
    break;
  case 6:
    outputPunctuation = ';';
    break;
  case 7:
    outputPunctuation = '"';
    break;
  case 8:
    outputPunctuation = "'";
    break;
  default:
    alert('No such number.');
    break;
  }
  return outputPunctuation;
};

var modeSwitch = function(number) {
  var char;
  switch (mode) {
  case 'upperCase':
    if (number % 27 === 0) {
      mode = 'lowerCase';
      return '';
    } else {
      char = numberToUpperCase(number % 27);
      return char;
      char = '';
      break;
    }
  case 'lowerCase':
    if (number % 27 === 0) {
      mode = 'punctuation';
      return '';
    } else {
      char = numberToLowerCase(number % 27);
      return char;
      char = '';
      break;
    }
  case 'punctuation':
    if (number % 9 === 0) {
      mode = 'upperCase';
      return '';
    } else {
      char = numberToPunctuation(number % 9);
      return char;
      char = '';
    }
    break;
  }
};

// #!/user/bin/env node  = ./file
// console.log(function(process.argv[2]))

decodeAMessage();
