var test = {};

var sheet1 = new Image();
sheet1.src = "file:///home/steven/Downloads/78bc6b62fEySW.gif";
var playerSheet = new SpriteSheet(sheet1,0,0,183,53);
var playerSprites = new SpriteLoader(playerSheet);
playerSprites.setSprite(5,5,43,47,"player1");

test.say = function() {
	console.log(test.vars());
};