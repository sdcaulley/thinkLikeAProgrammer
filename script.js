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
  
};

halfOfASquare();
