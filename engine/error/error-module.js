define([], function() {
	//Attach substructures to module here
	var error = {};
	
	error.messages = [];
	error.loglevel = 4; //loglevels are 0 - 4, crit through debug
	error.postCrit = [];
	error.postErr = [];
	error.postWarn = [];
	error.postInfo = [];
	error.postDbg = [];
	
	//Error posting methods
	//Receive a data object
	//Data Object definition:
	//data.msg - Message you wish to output
	//data.extra - Optional object. Contains arbitrary data in object notation.

	error.crit = function(data) {
		data.type = "crit";
		console.error("CRITICAL: "+data.msg);
		if(data.extra)
			console.error(data.extra);
		this.messages.push(data);
		//Engine shutdown
		$.publish("haltEngine");
	};

	error.err = function(data) {
		data.type = "err";
		console.error("ERROR: "+data.msg);
		if(data.extra)
			console.error(data.extra);
		this.messages.push(data);
	};

	error.warn = function(data) {
		data.type = "warn";
		console.warn("WARNING: "+data.msg);
		if(data.extra)
			console.warn(data.extra);
		this.messages.push(data);
	};

	error.info = function(data) {
		data.type = "info";
		console.log("INFO: "+data.msg);
		if(data.extra)
			console.log(data.extra);
		this.messages.push(data);
	};

	error.dbg = function(data) {
		data.type = "dbg";
		console.log("DEBUG: "+data.msg);
		if(data.extra)
			console.log(data.extra);
		this.messages.push(data);
	};

	error.changeLogLevel = function(loglevel) { //TODO: Needs to check that the new loglevel is valid
		loglevel = parseInt(loglevel);
		if(loglevel >= 0 && loglevel < 5) {
			error.loglevel = loglevel;
			$.publish("loglevelChanged", [loglevel]);
		} else {
			$.publish("postErr", {msg: "Invalid loglevel"});
			return -1;
		}
	};

	error.updateLoglevelSub = function(loglevel) {
		$.unsubscribe(this.postDbg);
		$.unsubscribe(this.postInfo);
		$.unsubscribe(this.postWarn);
		$.unsubscribe(this.postErr);
		$.unsubscribe(this.postCrit);
		switch(loglevel) {
			case 4:
				this.postDbg = $.subscribe("postDbg", function(data) {error.dbg(data);});
			case 3:
				this.postInfo = $.subscribe("postInfo", function(data) {error.info(data);});
			case 2:
				this.postWarn = $.subscribe("postWarn", function(data) {error.warn(data);});
			case 1:
				this.postErr = $.subscribe("postErr", function(data) {error.err(data);});
			case 0:
				this.postCrit = $.subscribe("postCrit", function(data) {error.crit(data);});
				break;
			default:
				return -1;
				break;
		}
	};

	//Subscribe to listeners
	$.subscribe("loglevelChanged", function(loglevel) {
		error.updateLoglevelSub(loglevel);
	});
	//Setup default loglevel
	error.changeLogLevel(4);

	return error; //Return module
});