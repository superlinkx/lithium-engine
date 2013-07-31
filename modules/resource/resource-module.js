define(config.substructure_paths("resource"), function() {
	//Attach substructures to module here
	var resource = config.attach_namespace(arguments);
	//Declare module namespace
	resource.module_name = "resource";

	return resource; //return module
});