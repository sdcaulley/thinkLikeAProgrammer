var halfOfASquare = function() {
  var message = '#';
  for (var row = 1; row <= 5; row++) {
    for (var line = 1; line <= 6 - row; line++) {
      document.write(message);
    }
    document.write('<br>');
  }
};

halfOfASquare();
