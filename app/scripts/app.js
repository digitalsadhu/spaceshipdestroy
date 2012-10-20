define([/* Dependencies here eg. /box2d/collision/ClipVertex.js */], function(/*Dependecy variables here eg clipVertex*/) {
  
  //start coding here!
  var canvas = document.getElementById('game');

  var context = canvas.getContext("2d");
  context.beginPath();
	context.moveTo(100, 150);
	context.lineTo(450, 50);
	context.stroke();
  
});