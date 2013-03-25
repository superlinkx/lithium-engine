function SpriteLoader(sheet) {
	var sprites = {};

	this.getSheet = function() {
		return sheet;
	};

	this.getSprite = function(sprite) {
		return sprites[sprite];
	}

	this.getSprites = function() {
		return sprites;
	};

	this.setSprite = function(xpos, ypos, width, height, name) {
		var newSprite = new Sprite(sheet, xpos, ypos, width, height);
		sprites[name] = newSprite;
	};
}

function Sprite(sheet, xpos, ypos, width, height) {
	this.xpos = sheet.xpos + xpos;
	this.ypos = sheet.xpos + ypos;
	this.width = width;
	this.height = height;
}

function SpriteSheet(img, xpos, ypos, width, height) {
	this.xpos = xpos;
	this.ypos = ypos;
	this.width = width;
	this.height = height;
	this.img = img;
}