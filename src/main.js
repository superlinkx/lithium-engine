require.config({
	baseUrl: "../src",
	context: "lithium"
});

require(["jquery", "engine", "loop"], function($, lithium, GameLoop) {
	spritelist = [
		[0,8,1],
		[8,8,1]
	];
	zeroSpriteSheet = new lithium.Resource.SpriteSheet("testsprites.gif",4,5,5);
	zeroSprite = new lithium.Resource.Sprite(zeroSpriteSheet, spritelist);
	$(function(){
		GameLoop.start($("#output")[0]);
	});	
});
