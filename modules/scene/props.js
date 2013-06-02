define({
	module_name: "Props",
	list: {},
	newProp: function(prop) {
		if(!this.list[prop.className])
			this.list[prop.className] = {};
		this.list[prop.className][prop.id] = prop;
	},
	removeProp: function(prop) {
		delete this.list[prop.className][prop.id];
	},
	getPropsByClassName: function(className) {
		if(className)
			return this.list[className];
		else
			console.warn("className '"+className+"' does not exist");
	}
});