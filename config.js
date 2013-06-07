define({
	"modules": {
		"audio": [],
		"error": [],
		"input": [],
		"physics": [],
		"render": ["render2d"],
		"resource": ["spritesheet", "sprite"],
		"scene": ["state", "props"],
		"shims": ["shims"]
	},
	"path": "modules/",
	"extension": "-module",
	"module_paths": function(){
		var paths = [];
		for(var module in this.modules) {
			paths.push(this.path+module+"/"+module+this.extension);
		}
		return paths;
	},
	"substructure_paths": function(module){
		var paths = [];
		for(var substructure in this.modules[module]) {
			paths.push(this.path+module+"/"+this.modules[module][substructure]);
		}
		return paths;
	},
	"attach": function(params) {
		var module = {};
		for(var param in params) {
			if(params[param].module_name)
				module
		}
	},
	"attach_namespace": function(params) {
		var module = {};
		for(var param in params) {
			if(params[param].module_name)
				module[params[param].module_name] = params[param];
			else //If the substructure isn't a constructor, get property directly
				console.error("Could not attach module: "+params[param]);
		}
		return module;
	},
	"attach_engine": function(arguments, engine) {
		for(var module in arguments) {
			for(var submodule in arguments[module]) {
				arguments[module][submodule].engine = engine;
				arguments[module].engine = engine;
			}
		}
	}
});