define({
	module_name: "Render2d",
	init: function(canvas, width, height) {
		this.canvas = canvas;
		if(width) {
			this.canvas.width = width;
		}
		if(height) {
			this.canvas.height = height;
		}
		this.ctx = canvas.getContext("2d");
	},
	clearAll: function() {
		this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
	},
	clearSection: function(o) {
		this.ctx.clearRect(o.targetx, o.targety, o.targetw, o.targeth)
	},
	renderImage: function(o) {
		//Takes an object as it's argument. This object contains the image, position and dimensions of the image, and the target position and dimesions on the canvas.
		if(typeof o.targetx !== 'undefined' && typeof o.targety !== 'undefined' && typeof o.targetw !== 'undefined' && typeof o.targeth !== 'undefined') {
			this.ctx.drawImage(o.img, o.x, o.y, o.w, o.h, o.targetx, o.targety, o.targetw, o.targeth);
		}
	}
});