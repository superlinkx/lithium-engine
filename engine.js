var config = require("config");
define(config.module_paths(), function(){
	var engine = config.attach_namespace(arguments);
	config.attach_engine(arguments, engine);

	engine.tick = 1;

	engine.loop = function(callback, fps) {
		setTimeout(function(){
			requestAnimationFrame(engine.loop.bind(this, callback, fps));
			if(++engine.tick>fps)
				engine.tick = 1;
			callback();
		}, 1000/fps);
	};

	engine.init = function(callback, fps) {
		engine.fps = fps;
		engine.loop(callback, fps);
	};

	return engine;
});