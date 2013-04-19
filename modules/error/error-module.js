define([/*Substructure calls go here*/], function(/*Don't forget to grab substructure data here*/) {
	var Error = { //Declare module namespace
		"module_name": "error",
		messages: [],
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
	};
	//Attach Substructures here
	return Error; //Return module
});