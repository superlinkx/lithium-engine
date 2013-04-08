var test = {};

spritelist = [
	[0,8,1],
	[8,8,1]
];
zeroSpriteSheet = new lithium.Resources.SpriteSheet("testsprites.gif",4,5,5);
zeroSprite = new lithium.Resources.Sprite(zeroSpriteSheet, spritelist);