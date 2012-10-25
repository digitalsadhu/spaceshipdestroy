define([], function() {

    DEBUG = true;


    var player = {
        'radius': 10,
        'image': 'images/spacefighter.png',
        'flameImage': 'images/flame.png',
        'flameImageBoost': 'images/flame_big.png',
        'initialRotation': 0,
        'height': 64,
        'width': 64,
        'swivelIncrements': 120,
        'velocity' : 0,
        'acceleration' : 0,
        'deceleration' : 0.125,
        'maxVelocity': 1,
        'engineSound': 'audio/spaceshipengine.wav',
        'boostSound': 'audio/spaceshipboost.wav',
        'laserSound': 'audio/laser.wav'
    };

    var image, flameImage, flameImageBoost;
    var context, positionX, positionY, angle, rotation;
    var engineSound, boostSound, laserSound;

    function draw() {
        //save the context so we can do a transform
        context.save();
        //create the transformation
        //context.translate(100, 100);
        context.translate(positionX + (player.width / 2), positionY + (player.width / 2));
        context.rotate(angle * rotation);
        //setPosition(-16, -16);
        context.drawImage(image, -(player.width / 2), -(player.width / 2));

        if(player.acceleration > 0 && player.acceleration < 4){
            context.drawImage(flameImage, -16, 19);
            context.drawImage(flameImage, 8, 19);
        } else if(player.acceleration >= 4){
            context.drawImage(flameImageBoost, -16, 19);
            context.drawImage(flameImageBoost, 8, 19);
        }
        
        

        //restore the context now that we have performed the
        //transformations
        context.restore();

        //context.drawImage(image, x, y, player.height, player.width);

        if(typeof(DEBUG) != "undefined") {
            context.clearRect(900,560,1100,600);
            context.fillStyle = 'rgba( 1, 1, 1, 0.125)';
            context.fillRect(900,560,1100,600);
            context.fillStyle = 'rgba(1, 1, 1, 1)';
            context.fillText("Velocity: " + player.velocity,910,575);
            context.fillText("Acceleration: " + player.acceleration,1000,575);
            context.fillText("Angle: "+ angle*rotation*180/Math.PI,910,590);
        }
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
        
        if(keyboard.getKey(17) === true) {
            //FIRE ZE LASER!
            laserSound.play();
        }

        if (keyboard.getKey(37) === true) {
            swivelLeft();
        }
        if (keyboard.getKey(39) === true) {
            swivelRight();
        }
        if (keyboard.getKey(38) === true) {
            if (keyboard.getKey(32) === true) {
                engineSound.pause();
                if(boostSound.paused) {
                    boostSound.play();
                }

                player.acceleration = 4;
                player.maxVelocity = 12;
            } else {
                boostSound.pause();
                if(engineSound.paused) {
                    engineSound.play();
                }
                player.acceleration = 0.25;
                player.maxVelocity = 6;
            }
        } else if (keyboard.getKey(40) === true) {
            boostSound.pause();
            engineSound.pause();
            player.maxVelocity = 4;
            player.acceleration = -0.13;
        } else {
            boostSound.pause();
            engineSound.pause();
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

        var direction = (player.velocity && (player.velocity / Math.abs(player.velocity)));

        player.velocity = player.velocity + player.acceleration;
        player.velocity = player.velocity - player.deceleration * direction;
        
        if(Math.abs(player.velocity) < player.deceleration){
            player.velocity = 0;
        }


        if(Math.abs(player.velocity) > player.maxVelocity){
            player.velocity = player.maxVelocity * direction;
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
        flameImage = new Image();
        flameImage.src = player.flameImage;
        flameImageBoost = new Image();
        flameImageBoost.src = player.flameImageBoost;

        engineSound = new Audio(player.engineSound);
        boostSound = new Audio(player.boostSound);
        laserSound = new Audio(player.laserSound);
    }

    return {
        'update': update,
        'getX': getX,
        'getY': getY,
        'init': init
    };

});