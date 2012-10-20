define([],function(){

	var player = {
		'radius' : 10
	};

	var context, positionX, positionY;

	function setPosition(x, y) {
		positionX = x;
		positionY = y;
		context.beginPath();
		context.arc(x, y, player.radius, 0, Math.PI*2, true); 
		context.closePath();
		context.fill();
	}

	function getX() {
		return positionX;
	}

	function getY() {
		return positionY;
	}

	function init(startPosition, ctx) {
		context = ctx;
		setPosition(startPosition.x, startPosition.y);
	}

	return {
		'setPosition' : setPosition,
		'getX' : getX,
		'getY' : getY,
		'init' : init
	};

});