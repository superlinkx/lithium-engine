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

function Sprite(spritesheet, animations) { 
	/* 
		spritesheet is a SpriteSheet object. animations is an array of animation arrays, containing the following parameters: 
		first frame, number of frames, framerate (as a divisor of the engine framerate, i.e. 1 is for every frame the engine has, 2 is for every other frame the engine has, etc) 
	*/
	var currAnimation = 0;
	var currAnimationFrame = animations[currAnimation][0];

	this.getCurrFrameId = function(){
		return currAnimationFrame;
	};
	
	this.getNextFrameId = function(){
		if(++currAnimationFrame > animations[currAnimation][0] + animations[currAnimation][1])
			currAnimation = animations[currAnimation][0];
		return currAnimationFrame;
	};
	
	this.setAnimation = function(animation){
		currAnimation = animation;
		currAnimationFrame = animations[currAnimation][0];
	};

	this.getSpriteSheet = function(){
		return spritesheet;
	};

	this.getAnimationFramerate = function(){
		return animations[currAnimation][2];
	};
}