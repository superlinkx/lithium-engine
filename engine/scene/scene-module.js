define(["./state","./props"], function(state, props) {
	//Attach substructures to module here
	var scene = {};
	scene.State = state;
	scene.Props = props;
	
	return scene; //Return module
});