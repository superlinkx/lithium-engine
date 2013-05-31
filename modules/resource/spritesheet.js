define({
	module_name: "SpriteSheet",
	rows: null,
	columns: null,
	margin: null,
	state: false,
	img: new Image(),
	frames: [],

	init: function(img_url, rows, columns, margin) {
		this.img.src = img_url;
		this.rows = rows;
		this.columns = columns;
		this.margin = margin;

		$(this.img).on("load", null, this, function(event) {
			event.data.tileWidth = event.data.img.width / columns;
			event.data.tileHeight = event.data.img.height / rows;
			event.data.totalTiles = columns * rows;

			var currx = 0;
			var curry = 0;
			for(i=0; i<event.data.totalTiles; i++) {
				var posx = currx;
				var posy = curry;
				currx += event.data.tileWidth;
				if(currx >= event.data.img.width) {
					currx = 0;
					curry += event.data.tileHeight;
				}
				outputX = posx + margin;
				outputY = posy + margin;
				outputWidth = event.data.tileWidth - margin * 2;
				outputHeight = event.data.tileHeight - margin * 2;
				event.data.frames[i] = [outputX, outputY, outputWidth, outputHeight];
			}
			event.data.state = true;
		});
	},
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
});