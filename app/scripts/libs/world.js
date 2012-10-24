define([],function(){

    var blocks = {
        'height' : 30,
        'width' : 30,
        'count' : 40
    };

    var ctx, width, height, blockList;

    function init(w, h, ctx) {
        context = ctx;
        width = w;
        height = h;
        blockList = [];
        draw();
    }

    function drawBlock(x, y){

        context.beginPath();
        context.rect(x, y, blocks.width, blocks.height);
        context.closePath();
        context.stroke();
        context.fill();
    }

    function draw(){

        for(var i=0; i<blocks.count; i++){
            //init if not already inited
            if(blockList.length !== blocks.count) {
                blockList[i] = randomPosition();
            }
            drawBlock(blockList[i].x, blockList[i].y);
        }
    }

    function randomPosition(){
        return {
            x : Math.floor(width * Math.random()),
            y : Math.floor(height * Math.random())
        }
    }

    return {
        'init' : init,
        'draw' : draw
    }
});