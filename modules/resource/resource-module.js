define(config.substructure_paths("resource"), function() {
	var resource = { //Declare module namespace
		"module_name": "resource"
	};
	//Attach substructures to module here
	for(argument in arguments) {
		resource[arguments[argument].prototype.module_name] = arguments[argument];
	}
	return resource; //return module
});