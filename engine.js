var config = require("config");
define(config.module_paths(), function(){
	var engine = config.attach(arguments);
	// Implement engine namespace here
	engine.tick = 0;
	engine.loop = function() {
		requestAnimationFrame(this.loop.bind(this);
		if(++this.tick > 60)
			this.tick = 0;
	};
	engine.loop();
	return engine;
});