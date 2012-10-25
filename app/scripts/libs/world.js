define([],function(){

    var blocks = {
        'height' : 2,
        'width' : 2,
        'count' : 2000
    };

    var ctx, width, height, blockList;

    function init(w, h, ctx) {
        context = ctx;
        width = w;
        height = h;
        blockList = [];
        draw();
    }

    function drawBlock(block){
        context.fillStyle = 'rgba(' + block.r + ',' + block.g + ',' + block.b + ',' + block.alpha + ')';
        context.fillRect(block.x, block.y, blocks.width * block.scale, blocks.height * block.scale);
    }

    function draw(){

        for(var i=0; i<blocks.count; i++){
            //init if not already inited
            if(blockList.length !== blocks.count) {
                blockList[i] = randomBlock();
            }

            var alpha = blockList[i].alpha;

            if(blockList[i].alpha > 0 && blockList[i].alpha < 1){
                blockList[i].alpha = blockList[i].fadeDirection == 'in' ? blockList[i].alpha + 0.0125 : blockList[i].alpha - 0.0125;
            }
            else if(Math.floor(Math.random() * 1024) == 1){
                if(blockList[i].alpha == 0){
                    blockList[i].alpha = 0.0125;
                    blockList[i].fadeDirection = 'in';
                } else {
                    blockList[i].alpha = 0.9875;
                    blockList[i].fadeDirection = 'out';
                }
                
            }
            drawBlock(blockList[i]);
        }
    }

    function randomBlock(){
        return {
            x : Math.floor(width * Math.random()),
            y : Math.floor(height * Math.random()),
            r : Math.floor(Math.random() * 125) + 130,
            g : Math.floor(Math.random() * 125) + 130,
            b : 255,
            scale: Math.floor(Math.random()*2) + 1,
            alpha: 0,
            fadeDirection: 'in'
        }
    }

    return {
        'init' : init,
        'draw' : draw
    }
});