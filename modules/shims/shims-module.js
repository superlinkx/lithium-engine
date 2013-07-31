define(config.substructure_paths("shims"), function() {
	//Attach substructures to module here
	var shims = config.attach_namespace(arguments);
	//Declare module namespace
	shims.module_name = "shims";

	return shims; //return module
});