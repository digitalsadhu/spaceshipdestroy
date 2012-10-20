define([/* Dependencies here eg. /box2d/collision/ClipVertex.js */], function(/*Dependecy variables here eg clipVertex*/) {
  
  	
  	var canvas = document.getElementById('game');
  	var context = canvas.getContext("2d");
  	var x = 188;
    var y = 130;
    var width = 200;
    var height = 137;
    var imageObj = new Image();

    imageObj.onload = function() {
  		context.drawImage(imageObj, x, y, width, height);
    };
    imageObj.src = "http://www.html5canvastutorials.com/demos/assets/darth-vader.jpg";
  	
    function move() {
  		imageObj.x = x+10;
  	}

  	var gameLoop = function() {
  		move();
  		window.setTimeout(function(){
  			gameLoop();
  		},1000);
  	};

  	

    

 //    context.beginPath();
	// context.moveTo(100, 150);
	// context.lineTo(450, 50);
	// context.lineWidth = 10;
	// context.stroke();

	gameLoop();

});