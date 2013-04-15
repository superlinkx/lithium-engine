define(function(){
	var loop = {};

	loop.render = function(){
		//Rendering
		loop.ctx.clearRect(0,0,loop.canvas.width,loop.canvas.height);
		currFrame = zeroSprite.getNextFrame();
		if(currFrame)
			loop.ctx.drawImage(currFrame.img, currFrame.x, currFrame.y, currFrame.w, currFrame.h, 0, 0, currFrame.w, currFrame.h);
	};

	loop.update = function(){
		//Engine calc
		//Request Game calc
		//Rendering
		loop.render();
		window.requestAnimationFrame(loop.update);
	};

	loop.start = function(canvas){
		//init stuff
		loop.canvas = canvas;
		loop.canvas.width = 480;
		loop.canvas.height = 800;
		loop.ctx = canvas.getContext("2d");
		window.requestAnimationFrame(loop.update);
	};

	return loop;
});