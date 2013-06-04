var config = require("config");
define(config.module_paths(), function(){
	var engine = config.attach(arguments);
	// Implement engine namespace here
	engine.tick = 0;

	engine.loop = function(callback, fps) {
		setTimeout(function(){
			requestAnimationFrame(engine.loop.bind(this, callback, fps));
			if(++engine.tick>fps)
				engine.tick = 0;
			callback();
		}, 1000/fps);
	};
	engine.init = function(callback, fps) {
		engine.fps = fps;
		engine.loop(callback, fps);
	}
	return engine;
});