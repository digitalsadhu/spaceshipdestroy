define([],function(){
	
	var keys = {};

	function handleKeyDown(evt){
		keys[evt.keyCode] = true;
	}


	function handleKeyUp(evt){
		keys[evt.keyCode] = false;
	}

	function getKeys(){
		return keys;
	}

	function getKey(keyCode){
		return keys[keyCode];
	}

	return {
		'handleKeyUp' : handleKeyUp,
		'handleKeyDown' : handleKeyDown,
		'getKeys' : getKeys,
		'getKey' : getKey
	};
});