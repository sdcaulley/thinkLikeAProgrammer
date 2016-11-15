var halfOfASquare = function() {
  var message = '#';
  for (var row = 0; row < 5; row++) {
    for (var line = 0; line < 5; line++) {
      document.write(message);
    }
    document.write('<br>');
  }
};

halfOfASquare();
