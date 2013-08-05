define(["./rafshim"], function(rafshim) {
	//Attach substructures to module here
	var shims = {};
	shims.RAFshim = rafshim;

	return shims; //return module
});