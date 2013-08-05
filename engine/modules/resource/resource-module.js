define(["modules/resource/sprite","modules/resource/spritesheet"], function() {
	//Attach substructures to module here
	var resource = {};
	resource.Sprite = require("modules/resource/sprite");
	resource.SpriteSheet = require("modules/resource/spritesheet");

	return resource; //return module
});