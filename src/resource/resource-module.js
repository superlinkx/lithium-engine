define(["resource/spritesheet", "resource/sprite"], function(spritesheet,sprite) {
	var Resource = {}; //Declare module namespace
	//Attach substructures to module here
	Resource.SpriteSheet = spritesheet;
	Resource.Sprite = sprite;
	return Resource; //return module
});