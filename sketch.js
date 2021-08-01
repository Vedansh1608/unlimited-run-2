var player,player_running,road,invisible1,invisible2;
function preload(){
  //pre-load images
  player_running = loadAnimation("Runner-1.png","Runner-2.png");
  roadimage = loadImage("path.png");
}

function setup(){
  createCanvas(400,600);

  //crating road
  road = createSprite(197,100,50,100);
  road.addImage("road",roadimage);
  road.velocityY = 10;
  
  //create sprites here
   player = createSprite(197,500,30,30);
   player.addAnimation("player",player_running);
   player.scale =0.1
   //creating invisible sprite to avoid player going out of road
   invisible1 = createSprite(20,500,20,100);
   invisible1.visible = false;
   invisible2 = createSprite(370,500,20,100);
   invisible2.visible = false;  
}

function draw() {
  background(0);
  drawSprites();
  //moving player with mouse
  player.x= mouseX

  //making player collide with invisible wall1 and invisible wall2
  player.collide(invisible1);
  player.collide(invisible2);

   if (road.y > 500 ) {
  road.y = road.height / 7;
  }
  
}