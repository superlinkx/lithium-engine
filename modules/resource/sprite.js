define({
	module_name: "Sprite",
	spritesheet: null,
	animations: null,
	img: null,
	x: null,
	y: null,
	w: null,
	h: null,
	isReady: false,
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
		var frame = this.spritesheet.getFrame(this._getCurrFrameId());
		if(frame) {
			this._parseFrame(frame);
			this.isReady = true;
		} else {
			this.isReady = false;
		}
	},
	getNextFrame: function() {
		if(lithium.tick%this.animations[this.currAnimation][2] == 0) { //FIXIT: Only works when lithium is defined. Need an API to access the host engine tick
			var frame = this.spritesheet.getFrame(this._getNextFrameId());
			if(frame) {
				this._parseFrame(frame);
				this.isReady = true;
			} else {
				this.isReady = false;
			}
		}
	},
	_getCurrFrameId: function(){
		return this.currAnimationFrame;
	},
	_getNextFrameId: function(){
		if(++this.currAnimationFrame > this.animations[this.currAnimation][0] + (this.animations[this.currAnimation][1] - 1))
			this.currAnimationFrame = this.animations[this.currAnimation][0];
		return this.currAnimationFrame;
	},
	_parseFrame: function(frame) {
		this.img = frame.img;
		this.x = frame.x;
		this.y = frame.y;
		this.w = frame.w;
		this.h = frame.h;
	}
});