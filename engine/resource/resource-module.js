define(["./sprite","./spritesheet"], function(sprite,spritesheet) {
	//Attach substructures to module here
	var resource = {};

	resource.tree = {};

	resource.Sprite = sprite;
	resource.SpriteSheet = spritesheet;
	resource.currentUid = 0;

	resource.addResource = function(res) { /* res is a resource object, containing at the least an id and context value. */
		/*
			Sample res object:

			{
				location: "global",
				type: "image",
				class_name: "button",
				name: "start",
				path: "/path/to/resource/file",
				properties: {
					action: "start_game",
					size: {
						x: 90,
						y: 20
					}
				}
			}

		*/
		//Add resource object to tree
		try {
			res.uid = this.currentUid++;
			this.tree[res.uid] = res;
			return res.uid;
		} catch(err) {
			$.publish("postErr", err);
		}
	};

	resource.loadResourceByUid = function(res_uid) { /* takes the resource uid as a parameter and loads the resource from the tree */
		//Load resource into memory
		var res = this.tree[res_uid];
		//actually load resource
		switch(res.type) {
			case "image":
				break;
			default: 
				var err = new ReferenceError("Could not find resource's type.");
				$.publish("postErr", err);
		} 
	};

	resource.removeResourceByUid = function(res_uid) { /* takes the resource uid as a parameter and removes resource from the tree, after unloading it from memory */
		//Call unload and remove resource from tree
	};

	resource.unloadResourceByUid = function(res_uid) { /* takes the resource uid as a parameter and unloads resource from memory */
		//Unload resource from memory
	};

	return resource; //return module
});