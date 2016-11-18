var halfOfASquare = function() {
  var message = '#';
  var total = '';
  for (var row = 1; row <= 5; row++) {
    var element = '';
    for (var line = 1; line <= 6 - row; line++) {
      element += message;
    }
    total += '\n' + element;
  }
  return total;
};

console.log(halfOfASquare(process.argv[2]));
