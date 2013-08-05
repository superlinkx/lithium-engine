define(["./sprite","./spritesheet"], function(sprite,spritesheet) {
	//Attach substructures to module here
	var resource = {};
	resource.Sprite = sprite;
	resource.SpriteSheet = spritesheet;

	return resource; //return module
});