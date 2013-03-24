var Player = {};

//init

Player.posX = 0;
Player.posY = 0;

Player.limit = 5;
Player.accelX = 0.1;
Player.accelY = 0.1;

Player.Xplane = new Movement_plane(Player.limit);
Player.Yplane = new Movement_plane(Player.limit);

Player.Xplane.setPos(Player.posX);
Player.Yplane.setPos(Player.posY);