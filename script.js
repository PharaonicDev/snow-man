var dragndrop = (function(){
 var myX = '',
     myY = '',
     whichArt ='';
function resetZ(){
	var elements= document.querySelectorAll('img'),
	i;
	for(i = elements.length- i ; i >= 0; i--){
    elements[i].style.zIndex = 5;
	};
}
function moveStart(e){
	whichArt =e.target;
	myX = e.offsetX === undefined ? e.layerX :e.offsetX;
	myY = e.offsetY === undefined ? e.layerY :e.offsetY;
	whichArt.style.zIndex = 10;
}
function moveDragOver(e){
	e.preventDefault();
}

function moveDrop(e){
	e.preventDefault();
	whichArt.style.left = e.pageX - myX + 'px';
	whichArt.style.top = e.pageY - myY + 'px';
}
function touchStart(e){
	e.preventDefault();
	var whichArt = e.target;
	var touch = e.touches[0];
	var moveOffSetX = whichArt.offsetleft - touch.pageX;
	resetZ();
	whichArt.style.zIndex = 10;
	whichArt.addEventListener('touchmove', function(){
      var postitionX = touch.pageX + moveOffSetX,
          postitionY = touch.pageY +moveOffSetY;
          whichArt.style.left = postitionX + 'px';
          whichArt.style.top = postitionY + 'px';
	});
}
document.querySelector('body').addEventListener('dragstart', moveStart, false);
document.querySelector('body').addEventListener('dragover', moveDragOver, false);
document.querySelector('body').addEventListener('drop', moveDrop, false);
document.querySelector('body').addEventListener('touchStart',touchStart, false);
}) ();