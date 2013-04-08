var GameLoop = {};

GameLoop.render = function(){
	//Rendering
	GameLoop.ctx.clearRect(0,0,GameLoop.canvas.width,GameLoop.canvas.height);
	currFrame = zeroSprite.getNextFrame();
	if(currFrame)
		GameLoop.ctx.drawImage(currFrame.img, currFrame.x, currFrame.y, currFrame.w, currFrame.h, 0, 0, currFrame.w, currFrame.h);
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