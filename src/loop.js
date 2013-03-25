var GameLoop = {};

GameLoop.render = function(){
	//Rendering
	GameLoop.ctx.clearRect(0,0,GameLoop.canvas.width,GameLoop.canvas.height);
	var currSprite = spriteSheet.getFrame(currFrame++);
	if(currSprite)
		GameLoop.ctx.drawImage(currSprite.img, currSprite.x, currSprite.y, currSprite.w, currSprite.h, 0, 0, currSprite.w, currSprite.h);
	currFrame %= 20;
};

GameLoop.update = function(){
	//Engine calc
	//Request Game calc
	//Rendering
	GameLoop.render();
	window.requestAnimationFrame(GameLoop.update);
};

GameLoop.start = function(canvas){
	//init stuff
	GameLoop.canvas = canvas;
	GameLoop.canvas.width = 480;
	GameLoop.canvas.height = 800;
	GameLoop.ctx = canvas.getContext("2d");
	window.requestAnimationFrame(GameLoop.update);
};