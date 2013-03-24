var GameLoop = {};

GameLoop.render = function(){
	//Rendering
	window.requestAnimationFrame(GameLoop.update);
};

GameLoop.update = function(){
	//Engine calc
	Player.move();
	//Request Game calc
	//Rendering
	GameLoop.render();
};

GameLoop.start = function(ctx){
	//init stuff
	GameLoop.ctx = ctx;
	window.requestAnimationFrame(GameLoop.update);
};