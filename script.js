var images = document.querySelectorAll('.image');

for (var i = 0; i < images.length; i++) {
  var parentDiv = images[i].parentNode;
  var x = Math.floor(Math.random() * (parentDiv.offsetWidth - images[i].offsetWidth));
  var y = Math.floor(Math.random() * (parentDiv.offsetHeight - images[i].offsetHeight));

  images[i].style.top = y  + 50 + 'px';
  images[i].style.left = x + 'px';
}