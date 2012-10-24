define([], function() {

    var player = {
        'radius': 10,
        'image': 'images/spaceship1.png',
        'initialRotation': 0,
        'height': 32,
        'width': 32,
        'moveSpeed': 1,
        'swivelIncrements': 120
    };

    var image, context, positionX, positionY, angle, rotation;

    function setPosition() {
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
            moveForward();
        }
        if (keyboard.getKey(40) === true) {
            moveBackward();
        }
        if (keyboard.getKey(32) === true) {
            player.mvSpeed = 8;
        } else {
            player.mvSpeed = 1.5;
        }
        setPosition();
    }

    function swivelLeft() {
        rotation = --rotation % player.swivelIncrements;
    }

    function swivelRight() {
        rotation = ++rotation % player.swivelIncrements;
    }

    function moveForward() {
        positionX += Math.sin(angle * rotation) * player.mvSpeed;
        positionY -= Math.cos(angle * rotation) * player.mvSpeed;
        handleEdge();
    }

    function moveBackward() {
        positionX -= Math.sin(angle * rotation) * 0.5;
        positionY += Math.cos(angle * rotation) * 0.5;
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