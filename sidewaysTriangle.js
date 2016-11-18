var sidewaysTriangle = function() {
  var message = '#';
  var total = '';
  for (var row = 1; row <= 7; row++) {
    var element = '';
    for (var line = 1; line <= 4 - Math.abs(4 - row); line++) {
      element += message;
    }
    total += '\n' + element;
  }
  return total;
};

console.log(sidewaysTriangle(process.argv[2]));
