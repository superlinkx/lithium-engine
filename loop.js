define(["engine"],function(lithium) {
	return {
		renderProps: lithium.scene.Props.getPropsByClassName("player"),
		renderer: {},
		update: function() {
			requestAnimationFrame(this.update.bind(this));
			this.renderProps = lithium.scene.Props.getPropsByClassName("player");
			renderProps = this.renderProps;
			for(var prop in renderProps) {
				prop = renderProps[prop];
				if(prop.targetw && prop.targeth)
					this.renderer.clearSection(prop);
				prop.sprite.getNextFrame();
				if(prop.sprite.isReady) {
					if(prop.targetw == "frame")
						prop.targetw = prop.sprite.w;
					if(prop.targeth == "frame")
						prop.targeth = prop.sprite.h;
					this.renderer.renderImage(prop);
				}
			}
		},
		init: function(canvas) {
			//init stuff
			spritelist = [
				[0,4,10]
			];
			zeroSpriteSheet = Object.create(lithium.resource.SpriteSheet);
			zeroSpriteSheet.init("testsprites.png",4,5,5);
			zeroSprite = Object.create(lithium.resource.Sprite);
			zeroSprite.init(zeroSpriteSheet, spritelist);
			zero = {id: 0, className: "player", sprite: zeroSprite, targetx: 0, targety: 0, targetw: 200, targeth: 200};
			lithium.scene.Props.newProp(zero);
			this.renderer = lithium.render.Render2d;
			this.renderer.init(canvas, 480, 800);
			requestAnimationFrame(this.update.bind(this));
		}
	}
});