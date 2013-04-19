require.config({
	paths: {
		"jquery": "./third-party/jquery",
		"engine": "./engine",
		"config": "./config"
	},
	shim: {
		"engine": {
			"deps": ["config"]
		}
	}
});

require(["jquery", "engine", "loop"], function($, lithium, GameLoop) {
	console.log("Engine loaded");
	spritelist = [
		[0,8,1],
		[8,8,1]
	];
	zeroSpriteSheet = new lithium.resource.SpriteSheet("testsprites.gif",4,5,5);
	zeroSprite = new lithium.resource.Sprite(zeroSpriteSheet, spritelist);
	$(function(){
		GameLoop.start($("#output")[0]);
	});	
});