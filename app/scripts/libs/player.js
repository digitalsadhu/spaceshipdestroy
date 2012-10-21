define([],function(){

    var player = {
		'radius' : 10,
		'image' : 'images/spaceship1.jpg',
		'initialRotation' : 0,
		'height' : 32,
		'width' : 32,
        'moveSpeed' : 1,
        'swivelIncrements' : 126

	};

	var image, context, positionX, positionY, angle, currentRotation;

	function setPosition(x, y, rotation) {
		
        //store position and rotation
        positionX = x;
		positionY = y;

        //save the context so we can do a transform
        context.save();
        //create the transformation
        //context.translate(100, 100);
        context.translate(x+(player.width/2), y+(player.width/2));
        context.rotate(angle * rotation);
        //setPosition(-16, -16);
        context.drawImage(image,-(player.width/2),-(player.width/2));
        
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
 
        if(keyboard.getKey(37) === true){
            swivelLeft();
        }
        else if(keyboard.getKey(38) === true){
            moveForward();
        }
        else if(keyboard.getKey(39) === true){
            swivelRight();
        }
        else if(keyboard.getKey(40) === true){
            moveBackward();
        }
        else {
            setPosition(getX(), getY(), currentRotation);
        }
        
        if(keyboard.getKey(32) === true) {
            player.mvSpeed = 3;
        } else {
            player.mvSpeed = 1;
        }
    }

    function moveLeft() {
        setPosition(getX()-player.mvSpeed, getY(), currentRotation);
    }

    function moveRight() {
        setPosition(getX()+player.mvSpeed, getY(), currentRotation);
    }

    function moveUp() {
        setPosition(getX(), getY()-player.mvSpeed, currentRotation);
    }

    function moveDown() {
        setPosition(getX(), getY()+player.mvSpeed, currentRotation);
    }

    function swivelLeft() {
        currentRotation++;
        currentRotation = currentRotation % player.swivelIncrements;
        setPosition(getX(), getY(), currentRotation);
    }

    function swivelRight() {
        currentRotation--;
        currentRotation = currentRotation % player.swivelIncrements;
        setPosition(getX(), getY(), currentRotation);
    }

    function moveForward() {

    }

    function moveBackward() {

    }

	function init(startPosition, ctx) {
		context = ctx;
        currentRotation = 0;
        //360 degrees broken into 32 bits in radians
        angle = 2 * Math.PI / player.swivelIncrements;
		image = new Image();
		image.src = player.image;
		image.width = player.width;
		image.height = player.height;
		image.onload = function(){
			setPosition(startPosition.x, startPosition.y);
		};
	}

	return {
		'update' : update,
		'getX' : getX,
		'getY' : getY,
		'init' : init
	};

});