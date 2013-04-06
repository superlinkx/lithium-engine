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
}

SpriteSheet.prototype = {
	constructor: SpriteSheet,
	getFrame: function(frame) {
		if(this.state)
			return {
				"img": this.img,
				"x": this.frames[frame][0],
				"y": this.frames[frame][1],
				"w": this.frames[frame][2],
				"h": this.frames[frame][3]
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
}

Sprite.prototype = {
	constructor: Sprite,
	getCurrFrameId: function(){
		return this.currAnimationFrame;
	},
	getNextFrameId: function(){
		if(++this.currAnimationFrame > this.animations[currAnimation][0] + this.animations[currAnimation][1])
			this.currAnimation = this.animations[currAnimation][0];
		return this.currAnimationFrame;
	},
	setAnimation: function(animation){
		this.currAnimation = this.animation;
		this.currAnimationFrame = this.animations[currAnimation][0];
	},
	getSpriteSheet: function(){
		return this.spritesheet;
	},
	getAnimationFramerate: function(){
		return this.animations[currAnimation][2];
	}
}