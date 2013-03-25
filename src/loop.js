var GameLoop = {};

GameLoop.render = function(){
	//Rendering
	GameLoop.ctx.clearRect(0,0,GameLoop.canvas.width,GameLoop.canvas.height);
	sheetImg = playerSprites.getSheet();
	player1 = playerSprites.getSprite("player1");
	GameLoop.ctx.drawImage(sheetImg.img, player1.xpos, player1.ypos, player1.width, player1.height, 0, 0, player1.width, player1.height);
	window.requestAnimationFrame(GameLoop.update);
};

GameLoop.update = function(){
	//Engine calc
	//Request Game calc
	//Rendering
	GameLoop.render();
};

GameLoop.start = function(canvas){
	//init stuff
	GameLoop.canvas = canvas;
	GameLoop.canvas.width = 480;
	GameLoop.canvas.height = 800;
	GameLoop.ctx = canvas.getContext("2d");
	window.requestAnimationFrame(GameLoop.update);
};