define(["./sprite","./spritesheet"], function(sprite,spritesheet) {
	//Attach substructures to module here
	var resource = {};

	resource.tree = {};

	resource.Sprite = sprite;
	resource.SpriteSheet = spritesheet;

	resource.addResource = function(res) { /* res is a resource object, containing at the least an id and context value. */
		//Add resource object to tree
	};

	resource.loadResource = function(res_uid) { /* takes the resource uid as a parameter and loads the resource from the tree */
		//Load resource into memory
	};

	resource.removeResource = function(res_uid) { /* takes the resource uid as a parameter and removes resource from the tree, after unloading it from memory */
		//Call unload and remove resource from tree
	};

	resource.unloadResource = function(res_uid) { /* takes the resource uid as a parameter and unloads resource from memory */
		//Unload resource from memory
	};

	return resource; //return module
});