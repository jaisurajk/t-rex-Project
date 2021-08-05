var trex, trex_running, trex_collided;
var ground, invisibleground, groundImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200);
  
  // creating trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);

  //adding scale and position to trex
  trex.scale = 0.5;

ground=createSprite(200,180,400,20)
ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX=-4;
  invisibleground=createSprite(200,190,400,10);
  invisibleground.visible=false;

}
function draw() {
  background(220);
  
  console.log(ground.x)
  
  if (ground.x<0){
    ground.x = ground.width/2;

  }

  
  //set background color 
  background("white");
  
  //logging the y position of the trex
  console.log(trex.y)
  
  //jump when space key is pressed
  if(keyDown("space") && trex.y>=150){
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8;
  
  //stop trex from falling down
  trex.collide(invisibleground);
  drawSprites();
}