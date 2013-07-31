define(config.substructure_paths("audio"), function() {
	//Attach substructures to module here
	var audio = config.attach_namespace(arguments);
	//Declare module namespace
	audio.module_name = "audio";

	return audio; //Return module
});