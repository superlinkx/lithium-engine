require.config({
	baseUrl: "engine",
	packages: [
		{
			name: 'audio',
			location: './audio',
			main: "audio-module"
		},
		{
			name: 'error',
			location: './error',
			main: "error-module"
		},
		{
			name: 'input',
			location: './input',
			main: "input-module"
		},
		{
			name: 'physics',
			location: './physics',
			main: "physics-module"
		},
		{
			name: 'render',
			location: './render',
			main: "render-module"
		},
		{
			name: 'resource',
			location: './resource',
			main: "resource-module"
		},
		{
			name: 'scene',
			location: './scene',
			main: "scene-module"
		},
		{
			name: 'shims',
			location: './shims',
			main: "shims-module"
		}
	]
});

define(["audio","error","input","physics","render","resource","scene","shims"], function(){
	var engine = {};

	engine.audio = require("audio");
	engine.error = require("error");
	engine.input = require("input");
	engine.physics = require("physics");
	engine.render = require("render");
	engine.resource = require("resource");
	engine.scene = require("scene");
	engine.shims = require("shims");

	engine.tick = 1;
	engine.loopId = null;
	engine.animId = null;
	engine.halted = false;

	engine.loop = function(callback, fps) {
		if(!engine.halted)
			this.loopId = setTimeout(function(){
				engine.animId = requestAnimationFrame(engine.loop.bind(this, callback, fps));
				if(++engine.tick>fps)
					engine.tick = 1;
				$.publish("engineTick", [engine.tick]);
				callback();
			}, 1000/fps);
	};

	engine.init = function(callback, fps) {
		engine.fps = fps;
		engine.loop(callback, fps);
	};

	engine.halt = function() {
		clearTimeout(this.loopId);
		cancelAnimationFrame(this.animId);
		this.loopId = null;
		this.animId = null;
		engine.halted = true;
	};

	$.subscribe("haltEngine", engine.halt);

	return engine;
});