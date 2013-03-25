function SpriteSheet(img_url, rows, columns, margin) {
	this.state = false;
	var img = new Image();
	img.src = img_url;
	var frames = [];
	var tileWidth, tileHeight, totalTiles;
	
	$(img).on("load", null, this, function(event) {
		tileWidth = img.width / columns;
		tileHeight = img.height / rows;
		totalTiles = columns * rows;

		var currx = 0;
		var curry = 0;
		for(i=0; i<totalTiles; i++) {
			var posx = currx;
			var posy = curry;
			currx += tileWidth;
			if(currx >= img.width) {
				currx = 0;
				curry += tileHeight;
			}
			outputX = posx + margin;
			outputY = posy + margin;
			outputWidth = tileWidth - margin * 2;
			outputHeight = tileHeight - margin * 2;
			frames[i] = [outputX, outputY, outputWidth, outputHeight];
		}
		event.data.state = true;
	});

	this.getFrame = function(frame) {
		if(this.state)
			return {
				"img": img,
				"x": frames[frame][0],
				"y": frames[frame][1],
				"w": frames[frame][2],
				"h": frames[frame][3]
			};
		else
			return false;
	}
}

function Sprite(spritesheet, animations) { //animations is an array of start and length animation properties
	var currAnimation = 0;
	var currAnimationFrame = 0;
	// Create methods to return the current frame and the next frame. Next frame will automatically increment the current frame.
	// Each method should take an animation as a parameter, since we need to know which animation we are grabbing a frame for.
}