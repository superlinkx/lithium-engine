define({
	module_name: "Sprite",
	spritesheet: null,
	animations: null,
	currAnimation: 0,
	currAnimationFrame: 0,

	init: function(spritesheet, animations) {
		//spritesheet is a spritesheet object that the Sprite is a part of
		//animations is an array of animation arrays, containing the following parameters: 
		//first frame, number of frames, framerate (as a divisor of the engine framerate, i.e. 1 is for every frame the engine has, 2 is for every other frame the engine has, etc) 
		this.spritesheet = spritesheet;
		this.animations = animations;
		this.currAnimationFrame = this.animations[this.currAnimation][0];
	},
	getCurrFrameId: function(){
		return this.currAnimationFrame;
	},
	getNextFrameId: function(){
		if(++this.currAnimationFrame > this.animations[this.currAnimation][0] + (this.animations[this.currAnimation][1] - 1))
			this.currAnimationFrame = this.animations[this.currAnimation][0];
		return this.currAnimationFrame;
	},
	setAnimation: function(animation){
		this.currAnimation = animation;
		this.currAnimationFrame = this.animations[this.currAnimation][0];
	},
	getSpriteSheet: function(){
		return this.spritesheet;
	},
	getAnimationFramerate: function(){
		return this.animations[this.currAnimation][2];
	},
	getCurrFrame: function() {
		return this.spritesheet.getFrame(this.getCurrFrameId());
	},
	getNextFrame: function() {
		return this.spritesheet.getFrame(this.getNextFrameId());
	}
});