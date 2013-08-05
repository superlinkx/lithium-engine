define(["lithium"],function(lithium) {
	return {
		update: function() {
			var sprites = lithium.scene.Props.getPropsByClassName("sprite");
			var backgrounds = lithium.scene.Props.getPropsByClassName("background");
			for(var background in backgrounds) {
				background = backgrounds[background];
				if(lithium.tick%1 == 0) {
					background.y+=1;
					if(background.y > 800)
						background.y = -800;
					this.renderer.renderBackground(background);
				}
			}
			for(var sprite in sprites) {
				if(lithium.tick%8==0) {
					sprite = sprites[sprite];
					if(sprite.targetw && sprite.targeth)
						this.renderer.clearSection(sprite);
					sprite.sprite.getNextFrame();
					if(sprite.sprite.isReady) {
						if(sprite.targetw == "frame")
							sprite.targetw = sprite.sprite.w;
						if(sprite.targeth == "frame")
							sprite.targeth = sprite.sprite.h;
						this.renderer.renderImage(sprite);
					}
				}
			}
		},
		init: function(canvas,bgcanvas) {
			//init stuff
			spritelist = [
				[0,4,10]
			];
			zeroSpriteSheet = Object.create(lithium.resource.SpriteSheet);
			zeroSpriteSheet.init("testimg/testsprites.png",4,5,5);
			zeroSprite = Object.create(lithium.resource.Sprite);
			zeroSprite.init(zeroSpriteSheet, spritelist);
			bgimg = new Image();
			bgimg.src = "testimg/background.png";
			zero = {id: 0, className: "sprite", sprite: zeroSprite, targetx: 0, targety: 0, targetw: "frame", targeth: "frame"};
			bg1 = {id: 0, className: "background", x: 0, y: 0, img: bgimg};
			bg2 = {id: 1, className: "background", x: 0, y: -800, img: bgimg};
			lithium.scene.Props.newProp(zero);
			lithium.scene.Props.newProp(bg1);
			lithium.scene.Props.newProp(bg2);
			this.renderer = lithium.render.Render2d;
			this.renderer.init(canvas, 480, 800, bgcanvas);
			lithium.init(this.update.bind(this), 60);
		}
	};
});