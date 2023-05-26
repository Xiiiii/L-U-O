let elements = document.querySelectorAll('iimage-container')
  
for (let element of elements) {
  element.style.top = random() + "px";
  element.style.left = random() + "px";
}

function random(){
  return Math.floor(Math.random() * 60 - 30)
}images = document.querySelectorAll('.image');
		for (var i = 0; i < images.length; i++) {
		    images[i].addEventListener('mouseover', function(e) {
		        var image = e.target;
		        image.style.transform = 'scale(1.5)';
		        var moveX = (window.innerWidth - image.offsetWidth * 1.2) / 2 - image.offsetLeft;
		        var moveY = (window.innerHeight - image.offsetHeight * 1.2) / 2 - image.offsetTop;
		        image.style.transform += ' translate(' + moveX + 'px, ' + moveY + 'px)';
		        image.style.zIndex = 999; /*  移动时将z-index值设置为最高  */
		    });
		    images[i].addEventListener('mouseout', function(e) {
		        e.target.style.transform = 'none';
		        e.target.style.zIndex = 1; /*  鼠标移开后恢复z-index值  */
		    });
    
		}