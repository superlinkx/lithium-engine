define(config.substructure_paths("error"), function() {
	//Attach substructures to module here
	var error = config.attach_namespace(arguments);
	//Declare module namespace
	error.module_name = "error";
	error.messages = [];
	error.loglevel = 4; //loglevels are 0 - 4, crit through debug
	error.log = function(type, msg, extra) {
		//msg is required. Contains the message you wish to display.
		//type is optional. Defaults to a debug message type.
		//extra is optional. Is an object. When implemented, will contain additional logging information that isn't meant to be part of the actual message.

		if(this.loglevel >= 0)
			if(type == "crit") {
				console.error("CRITICAL: "+msg);
				if(extra)
					console.error(extra);
				this.pushMsg(type, msg, extra);
			}

		if(this.loglevel >= 1)
			if(type == "err") {
				console.error("ERROR: "+msg);
				if(extra)
					console.error(extra);
				this.pushMsg(type, msg, extra);
			}

		if(this.loglevel >= 2)
			if(type == "warn") {
				console.warn("WARNING: "+msg);
				if(extra)
					console.warn(extra);
				this.pushMsg(type, msg, extra);
			}

		if(this.loglevel >= 3)
			if(type == "info") {
				console.log("INFO: "+msg);
				if(extra)
					console.log(extra);
				this.pushMsg(type, msg, extra);
			}
			
		if(this.loglevel >= 4)
			if(type == "debug") {
				console.log("DEBUG: "+msg);
				if(extra)
					console.log(extra);
				this.pushMsg(type, msg, extra);
			}
	};

	error.pushMsg = function(type, msg, extra) {
		if(extra)
			this.messages.push({"type": type, "message": msg, "extra": extra});
		else
			this.messages.push({"type": type, "message": msg});
	}

	return error; //Return module
});