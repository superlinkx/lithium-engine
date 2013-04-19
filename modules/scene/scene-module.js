define(config.substructure_paths("scene"), function() {
	//Attach substructures to module here
	var scene = config.attach(arguments);
	//Declare module namespace
	scene.module_name = "scene";
	
	return scene; //Return module
});