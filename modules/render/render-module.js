define(config.substructure_paths("render"), function() {
	//Attach substructures to module here
	var render = config.attach(arguments); 
	//Declare module namespace
	render.module_name = "render";
	
	return render; //Return module
});