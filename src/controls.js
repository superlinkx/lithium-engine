var Controls = {};

//init

Controls.keys = {"up": false, "down": false, "right": false, "left": false};

//Control methods

Controls.getCode = function(event, type){
	if (event.keyCode === 37)
		this.say("left", type);
	if (event.keyCode === 38)
		this.say("up", type);
	if (event.keyCode === 39)
		this.say("right", type);
	if (event.keyCode === 40)
		this.say("down", type);
}

Controls.say = function(key, type){
	if (type === "down"){
		Controls.keys[key] = true;
	} else if (type === "up") {
		Controls.keys[key] = false;
	}
};

//Move
Controls.move = function(){
	if (Controls.keys.up === true)
		Controls.
	else
		//decel up
	if (Controls.keys.up === true)
		//accel up
	else
		//decel up
	if (Controls.keys.up === true)
		//accel up
	else
		//decel up
	if (Controls.keys.up === true)
		//accel up
	else
		//decel up
};

//key bindings

$(document).keydown(function(event){
	Controls.getCode(event, "down");
});

$(document).keyup(function(event){
	Controls.getCode(event, "up");
});