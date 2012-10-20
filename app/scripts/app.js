define(
	[
		'libs/player',
		'libs/game',
		'libs/keyboard',
		'libs/canvas'
	], 
function(player, game, keyboard, canvas) {

  	var dependencies = {
  		'player' : player,
  		'keyboard' : keyboard,
  		'canvas' : canvas
  	}

    $(document).ready(function() {
		game.init(dependencies);
	});

});