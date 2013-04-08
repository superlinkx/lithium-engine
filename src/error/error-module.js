function Error() {
	this.messages = [];
}

Error.prototype = {
	constructor: Error,
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
				//Error
				break;
			case "crit":
				//critical Error
				break;
			default:
				//debug
		}
	}
}

lithium.Error = new Error;