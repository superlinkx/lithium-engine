define(["engine"],function(lithium) {
	var loop = {
		renderProps: lithium.scene.Props.getPropsByClassName("player"),
		renderer: {},
		update: function() {
			requestAnimationFrame(loop.update);
			loop.renderProps = lithium.scene.Props.getPropsByClassName("player");
			renderProps = loop.renderProps;
			for(var prop in renderProps) {
				prop = renderProps[prop];
				if(prop.targetw && prop.targeth)
					loop.renderer.clearSection(prop);
				prop.sprite.getNextFrame();
				if(prop.sprite.isReady) {
					if(prop.w == "frame")
						prop.targetw = prop.sprite.w;
					if(prop.h == "frame")
						prop.targeth = prop.sprite.h;
					loop.renderer.renderImage(prop);
				}
			}
		},
		init: function(canvas) {
			//init stuff
			loop.renderer = lithium.render.Render2d;
			loop.renderer.init(canvas, 480, 800);
			requestAnimationFrame(loop.update);
		}
	}
	return loop;
});