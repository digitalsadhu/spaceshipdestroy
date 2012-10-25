define(['libs/bullet'],function(bullet){
    
    function cannon(){

        var bullets = [];

        function fire(x,y,angle,rotation) {
            bullets.push(bullet.load(x,y,angle,rotation));
        }

        function updateAmmo(){
            var destroyed;
            for(var i in bullets){
                if(bullets[i] !== null){
                    stillFiring = bullets[i].update();
                    if(!stillFiring){
                        bullets[i] = null;
                    }
                }
            }
        }

        return {
            'fire' : fire,
            'updateAmmo' : updateAmmo
        }
    }

    return {
        'add' : cannon
    }

});