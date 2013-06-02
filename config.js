define({
	"modules": {
		"audio": [],
		"error": [],
		"input": [],
		"physics": [],
		"render": ["render2d"],
		"resource": ["spritesheet", "sprite"],
		"scene": ["state", "props"]
	},
	"path": "modules/",
	"extension": "-module",
	"module_paths": function(){
		var paths = [];
		for(module in this.modules) {
			paths.push(this.path+module+"/"+module+this.extension);
		}
		return paths;
	},
	"substructure_paths": function(module){
		var paths = [];
		for(substructure in this.modules[module]) {
				paths.push(this.path+module+"/"+this.modules[module][substructure]);
		}
		return paths;
	},
	"attach": function(params) {
		module = {};
		for(param in params) {
			if(params[param].module_name)
				module[params[param].module_name] = params[param];
			else //If the substructure isn't a constructor, get property directly
				console.error("Could not attach module: "+params[param]);
		}
		return module;
	}
});