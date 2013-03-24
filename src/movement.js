var Movement = {};

//Constuctors

function Movement_plane(vLimit){ //describes movement along a plane (usually X or Y)
	this.pos = 0;
	this.vel = 0;
	this.vLimit = vLimit;

	this.setPos = function(pos){
		this.pos = pos;
	};
	this.setVel = function(vel){
		this.vel = vel;
	};
	this.setVLimit = function(vLimit){
		this.vLimit = vLimit;
	};
	this.getPos = function(){
		return this.pos;
	};
	this.getVel = function(){
		return this.vel;
	};
	this.getVLimit = function(){
		return this.vLimit;
	};
}

//Methods of Movement

Movement.stdAccel = function(plane, accel){	//Pass in plane object and acceleration
	if (Math.abs(plane.vel) < plane.vLimit)
		plane.vel += accel;
	plane.pos += 1*(plane.vel.toFixed(2));
	plane.pos = 1*(plane.pos.toFixed(2));
};

Movement.stdDecel = function(plane, accel){ //data passed in is in object literal notation. Should include vel, pos, accel, limit
	if (Math.abs(plane.vel) > 0)
		plane.vel -= accel;
	plane.pos -= 1*(plane.vel.toFixed(2));
	plane.pos = 1*(plane.pos.toFixed(2));
}