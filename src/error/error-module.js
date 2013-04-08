function Errors() {
	this.messages = [];
}

Errors.prototype = {
	constructor: Errors,
	log: function(msg, type, extra) {
		//msg is required. Contains the message you wish to display.
		//type is optional. Defaults to a debug message type.
		//extra is optional. Is an object. When implemented, will contain additional logging information that isn't meant to be part of the actual message.
		switch(type) {
			case "debug":
				//debug
				break;
			case "info":
				//info
				break;
			case "warn":
				//warnings
				break;
			case "err":
				//errors
				break;
			case "crit":
				//critical errors
				break;
			default:
				//debug
		}
	}
}

lithium.Errors = new Errors;