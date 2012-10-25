define([],function(){

    var requestAnimationFrame =
    requestAnimationFrame ||
    webkitRequestAnimationFrame ||
    mozRequestAnimationFrame ||
    msRequestAnimationFrame ||
    oRequestAnimationFrame;

    var startPosition = {
        x : 188,
        y : 130
    };

    var stepSpeed = 5;

    var keyboard, player, canvas, world;

    function loop() {
        clearCanvas();
        world.draw();
        player.update(keyboard);
        requestAnimationFrame(loop);
    }

    function clearCanvas() {
        canvas.getContext()
        .fillStyle = '#000000';
        canvas.getContext()
        .fillRect(0, 0, canvas.getWidth(), canvas.getHeight());
    }

    function init(dependencies) {

        keyboard = dependencies.keyboard;
        player = dependencies.player;
        canvas = dependencies.canvas;
        world = dependencies.world;

        //var world = createWorld();
        canvas.init('game');

        window.addEventListener('keydown',keyboard.handleKeyDown,true);
        window.addEventListener('keyup',keyboard.handleKeyUp,true);

        world.init(canvas.getWidth(), canvas.getHeight(), canvas.getContext());

        player.init(startPosition, canvas.getContext());

        requestAnimationFrame(loop);
    }

    return {
        'init' : init
    };

});