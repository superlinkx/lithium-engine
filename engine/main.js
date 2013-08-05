require.config({
	baseUrl: "engine",
	packages: [
		{
			name: 'audio',
			location: './modules/audio',
			main: "audio-module"
		},
		{
			name: 'error',
			location: './modules/error',
			main: "error-module"
		},
		{
			name: 'input',
			location: './modules/input',
			main: "input-module"
		},
		{
			name: 'physics',
			location: './modules/physics',
			main: "physics-module"
		},
		{
			name: 'render',
			location: './modules/render',
			main: "render-module"
		},
		{
			name: 'resource',
			location: './modules/resource',
			main: "resource-module"
		},
		{
			name: 'scene',
			location: './modules/scene',
			main: "scene-module"
		},
		{
			name: 'shims',
			location: './modules/shims',
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

	engine.loop = function(callback, fps) {
		setTimeout(function(){
			requestAnimationFrame(engine.loop.bind(this, callback, fps));
			if(++engine.tick>fps)
				engine.tick = 1;
			callback();
		}, 1000/fps);
	};

	engine.init = function(callback, fps) {
		engine.fps = fps;
		engine.loop(callback, fps);
	};

	return engine;
});