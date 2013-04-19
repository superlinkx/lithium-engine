// Manage module loading here
define(config.module_paths(), function(){
	// Implement engine namespace here
	var engine = {};

	for(argument in arguments) {
		engine[arguments[argument].module_name] = arguments[argument];
	}
	console.log(engine)
	/*engine.Audio = audio;
	engine.Error = error;
	engine.Input = input;
	engine.Physics = physics;
	engine.Render = render;
	engine.Resource = resource;
	engine.Scene = scene;*/
	return engine;
});