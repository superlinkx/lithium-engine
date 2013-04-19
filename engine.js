var config = require("config");
define(config.module_paths(), function(){
	var engine = config.attach(arguments);
	// Implement engine namespace here

	return engine;
});