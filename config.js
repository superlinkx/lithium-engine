config = {
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
		console.log(paths);
		return paths;
	},
	"substructure_paths": function(module){
		var paths = [];
		for(substructure in this.modules[module]) {
				paths.push("modules/"+module+"/"+this.modules[module][substructure]);
		}
		return paths;
	}
}