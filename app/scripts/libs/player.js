define([], function() {

    var player = {
        'radius': 10,
        'image': 'images/spacefighter.png',
        'initialRotation': 0,
        'height': 64,
        'width': 64,
        'swivelIncrements': 120,
        'velocity' : 0,
        'acceleration' : 0,
        'deceleration' : 0.125,
        'maxVelocity': 1
    };

    var image, context, positionX, positionY, angle, rotation;

    function draw() {
        //save the context so we can do a transform
        context.save();
        //create the transformation
        //context.translate(100, 100);
        context.translate(positionX + (player.width / 2), positionY + (player.width / 2));
        context.rotate(angle * rotation);
        //setPosition(-16, -16);
        context.drawImage(image, -(player.width / 2), -(player.width / 2));

        //restore the context now that we have performed the
        //transformations
        context.restore();

        //context.drawImage(image, x, y, player.height, player.width);
    }

    function getX() {
        return positionX;
    }

    function getY() {
        return positionY;
    }

    function setX(x) {
        positionX = x;
    }

    function setY(y) {
        positionY = y;
    }

    function update(keyboard) {
        if (keyboard.getKey(37) === true) {
            swivelLeft();
        }
        if (keyboard.getKey(39) === true) {
            swivelRight();
        }
        if (keyboard.getKey(38) === true) {
            if (keyboard.getKey(32) === true) {
                player.acceleration = 4;
                player.maxVelocity = 12;
            } else {
                player.acceleration = 0.25;
                player.maxVelocity = 6;
            }
        } else if (keyboard.getKey(40) === true) {
            player.maxVelocity = 4;
            player.acceleration = -0.25;
        } else {
            player.acceleration = 0;
        }
        
        
        updateVelocity();
        setPosition();
        draw();
    }

    function swivelLeft() {
        rotation = --rotation % player.swivelIncrements;
    }

    function swivelRight() {
        rotation = ++rotation % player.swivelIncrements;
    }

    function updateVelocity() {

        player.velocity = player.velocity + player.acceleration - player.deceleration;
        
        if(player.velocity < 0) {
            player.velocity = 0;
        }

        if(Math.abs(player.velocity) > player.maxVelocity){
            player.velocity = player.maxVelocity * (player.velocity / Math.abs(player.velocity));
        }
        
    }

    function setPosition() {
        positionX += Math.sin(angle * rotation) * player.velocity;
        positionY -= Math.cos(angle * rotation) * player.velocity;
        handleEdge();
    }


    function handleEdge()
    {
        if (positionX < -32) {
            positionX = 1200;
        } else if (positionX > 1200) {
            positionX = -32;
        }
        if (positionY < -32) {
            positionY = 700;
        } else if (positionY > 700) {
            positionY = -32;
        }
    }

    function init(startPosition, ctx) {
        context = ctx;
        rotation = 0;
        //360 degrees broken into 32 bits in radians
        angle = 2 * Math.PI / player.swivelIncrements;
        image = new Image();
        image.src = player.image;
        image.width = player.width;
        image.height = player.height;
        image.onload = function() {
            positionX = startPosition.x;
            positionY = startPosition.y;
        };
    }

    return {
        'update': update,
        'getX': getX,
        'getY': getY,
        'init': init
    };

});