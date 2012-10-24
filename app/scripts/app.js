define(
	[
		'libs/player',
		'libs/game',
		'libs/keyboard',
		'libs/canvas',
        'libs/world'
	], 
function(player, game, keyboard, canvas, world) {

  	var dependencies = {
  		'player' : player,
  		'keyboard' : keyboard,
  		'canvas' : canvas,
        'world' : world
  	}

    $(document).ready(function() {
		game.init(dependencies);
	});

});