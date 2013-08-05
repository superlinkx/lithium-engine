define([], function() {
	//Attach substructures to module here
	var error = {};
	
	error.messages = [];
	error.loglevel = 4; //loglevels are 0 - 4, crit through debug
	
	//Error posting methods
	//Receive a data object
	//Data Object definition:
	//data.msg - Message you wish to output
	//data.extra - Optional object. Contains arbitrary data in object notation.

	error.crit = function(data) {
		if(this.loglevel >= 0) {
			console.error("CRITICAL: "+data.msg);
			if(data.extra)
				console.error(data.extra);
			this.messages.push(data);
			//Engine shutdown
			$.publish("haltEngine");
		}
	};

	error.err = function(data) {
		if(this.loglevel >= 1) {
			console.error("ERROR: "+data.msg);
			if(data.extra)
				console.error(data.extra);
			this.messages.push(data);
		}
	};

	error.warn = function(data) { 
		if(this.loglevel >= 2) {
			console.warn("WARNING: "+data.msg);
			if(data.extra)
				console.warn(data.extra);
			this.messages.push(data);
		}
	};

	error.info = function(data) { 
		if(this.loglevel >= 3) {
			console.log("INFO: "+data.msg);
			if(data.extra)
				console.log(data.extra);
			this.messages.push(data);
		}
	};

	error.dbg = function(data) {
		if(this.loglevel >= 4) {
			console.log("DEBUG: "+data.msg);
			if(data.extra)
				console.log(data.extra);
			this.messages.push(data);
		}
	};

	//Subscribe to listeners
	$.subscribe("postDbg", function(data) {
		data.type = "dbg";
		error.dbg(data);
	});
	$.subscribe("postInfo", function(data) {
		data.type = "info";
		error.info(data);
	});
	$.subscribe("postWarn", function(data) {
		data.type="warn";
		error.warn(data);
	});
	$.subscribe("postErr", function(data) {
		data.type="err";
		error.err(data);
	});
	$.subscribe("postCrit", function(data) {
		data.type="crit";
		error.crit(data);
	});

	return error; //Return module
});