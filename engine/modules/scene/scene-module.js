define(["modules/scene/state","modules/scene/props"], function() {
	//Attach substructures to module here
	var scene = {};
	scene.State = require("modules/scene/state");
	scene.Props = require("modules/scene/props");
	
	return scene; //Return module
});