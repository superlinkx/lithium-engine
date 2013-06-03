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
	clearSection: function(prop) { //Takes a prop object
		try {
			this.ctx.clearRect(prop.targetx, prop.targety, prop.targetw, prop.targeth);
		} catch(err) {
			console.error("Prop '"+prop.className+" - "+prop.id+"' could not be cleared.");
		}
	},
	renderImage: function(prop) { //Takes a prop object
		try {
			this.ctx.drawImage(prop.sprite.img, prop.sprite.x, prop.sprite.y, prop.sprite.w, prop.sprite.h, prop.targetx, prop.targety, prop.targetw, prop.targeth);
		} catch(err) {
			console.error("Prop '"+prop.className+" - "+prop.id+"' is not renderable.");
		}
	}
});