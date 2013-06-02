define(["engine"],function(lithium) {
	var loop = {
		renderObject: 0,
		nextFrame: {},
		renderer: {},
		update: function() {
			loop.nextFrame = zeroSprite.getNextFrame();
			if(loop.nextFrame) {
				if(loop.renderObject) {
					loop.renderer.clearSection(loop.renderObject);
				}
				loop.renderObject = {
					img: loop.nextFrame.img,
					x: loop.nextFrame.x,
					y: loop.nextFrame.y,
					w: loop.nextFrame.w,
					h: loop.nextFrame.h,
					targetx: 0,
					targety: 0,
					targetw: loop.nextFrame.w,
					targeth: loop.nextFrame.h
				}
				loop.renderer.renderImage(loop.renderObject);
			}
			requestAnimationFrame(loop.update);
		},
		init: function(canvas) {
			//init stuff
			loop.renderer = Object.create(lithium.render.render2d);
			loop.renderer.init(canvas, 480, 800);
			requestAnimationFrame(loop.update);
		}
	}
	return loop;
});