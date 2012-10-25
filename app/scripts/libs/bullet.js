define([],function(){

    function load(x,y,angle,rotation) {

        function update(){
            //draw
            console.log('bang!');
            
            //increment position
            x+=10;
            y+=10;
            //finishing condition for this bullet
            if(x>1200||x<0||y>700||y<0){
                return true;
            }
        }

        return {
            'x' : x,
            'y' : y,
            'angle' : angle,
            'rotation' : rotation,
            'update' : update
        }
    }

    return {
        'load' : load
    }

});