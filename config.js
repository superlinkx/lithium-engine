define({
	"modules": {
		"audio": [],
		"error": [],
		"input": [],
		"physics": [],
		"render": [],
		"resource": ["spritesheet", "sprite"],
		"scene": []
	},
	"module_paths": function(){
		var paths = [];
		for(module in this.modules) {
			paths.push("modules/"+module+"/"+module+"-module");
		}
		return paths;
	},
	"substructure_paths": function(module){
		var paths = [];
		for(substructure in this.modules[module]) {
				paths.push("modules/"+module+"/"+this.modules[module][substructure]);
		}
		return paths;
	},
	"attach": function(params) {
		module = {};
		for(param in params) {
			if(params[param].module_name)
				module[params[param].module_name] = params[param];
			else //If the substructure isn't a constructor, get property directly
				module[params[param].prototype.module_name] = params[param];
		}
		return module;
	}
});