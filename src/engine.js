// Manage module loading here
define([
	"audio/audio-module",
	"error/error-module",
	"input/input-module",
	"physics/physics-module",
	"render/render-module",
	"resource/resource-module",
	"scene/scene-module"
], function(audio, error, input, physics, render, resource, scene) {
	// Implement engine namespace here
	var engine = {};
	engine.Audio = audio;
	engine.Error = error;
	engine.Input = input;
	engine.Physics = physics;
	engine.Render = render;
	engine.Resource = resource;
	engine.Scene = scene;
	return engine;
});