define([],function(){

	var canvas, context, width, height, top, left;

	function getCanvas() {
		return canvas;
	}

	function getContext() {
		return context;
	}

	function getWidth() {
		return width;
	}

	function getHeight() {
		return height;
	}

	function getTop() {
		return top;
	}

	function getLeft() {
		return left;
	}

	function init(id) {
		canvas = document.getElementById(id);
		context = canvas.getContext('2d');
		width = parseInt(canvas.width);
		height = parseInt(canvas.height);
		top = parseInt(canvas.style.top);
		left = parseInt(canvas.style.left);
	}

	return {
		'init' : init,
		'getCanvas' : getCanvas,
		'getContext' : getContext,
		'getWidth' : getWidth,
		'getHeight' : getHeight,
		'getTop' : getTop,
		'getLeft' :getLeft
	}

});