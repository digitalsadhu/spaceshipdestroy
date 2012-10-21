define([],function(){

	var startPosition = {
		x : 188,
    	y : 130
	}

	var stepSpeed = 5;
	var mvSpeed = 1;

	var keyboard, player, canvas;

	function step() {
  		
  		clearCanvas();

  		player.setPosition(player.getX(), player.getY());
  		
  		if(keyboard.getKey(37) === true){
  			player.setPosition(player.getX()-mvSpeed, player.getY());
  		}
  		if(keyboard.getKey(38) === true){
			player.setPosition(player.getX(), player.getY()-mvSpeed);
  		}
  		if(keyboard.getKey(39) === true){
  			player.setPosition(player.getX()+mvSpeed, player.getY());
  		}
  		if(keyboard.getKey(40) === true){
  			player.setPosition(player.getX(), player.getY()+mvSpeed);
  		}
                if(keyboard.getKey(32) === true) {
                        mvSpeed = 3;
                } else {
                    mvSpeed = 1;
                }
            
  		window.setTimeout(step,stepSpeed);
  	};

  	function clearCanvas() {
    	canvas.getContext()
			.clearRect(0, 0, canvas.getWidth(), canvas.getHeight());
    }

    function init(dependencies) {

		keyboard = dependencies.keyboard;
		player = dependencies.player;
		canvas = dependencies.canvas;

		//var world = createWorld();
		canvas.init('game');

		window.addEventListener('keydown',keyboard.handleKeyDown,true);
		window.addEventListener('keyup',keyboard.handleKeyUp,true);

		player.init(startPosition, canvas.getContext());

		step();
    }

    return {
    	'init' : init
    }

});