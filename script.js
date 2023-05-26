function random(){
  return Math.floor(Math.random() * 60 - 30)
}
var images = document.querySelectorAll('.image');
console.log(images)

		for (var i = 0; i < images.length; i++) {
        images[i].style.top = random() + "px";
        images[i].style.left = random() + "px";
		    images[i].addEventListener('mouseover', function(e) {
		        var image = e.target;
		        image.style.transform = 'scale(1.5)';
		        var moveX = (window.innerWidth - image.offsetWidth * 1.2) / 2 - image.offsetLeft;
		        var moveY = (window.innerHeight - image.offsetHeight * 1.2) / 2 - image.offsetTop;
		        image.style.transform += ' translate(' + moveX + 'px, ' + moveY + 'px)';
		        image.style.zIndex = 999; 
		    });
		    images[i].addEventListener('mouseout', function(e) {
		        e.target.style.transform = 'none';
		        e.target.style.zIndex = 1; 
		    });
    
		}