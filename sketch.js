var man, man_running;
var road, invisibleroad,invisibleroad2, roadImage;
function preload(){
  //pre-load images
  man_running = loadAnimation("Runner-1.png", "Runner-2.png");
  roadImage = loadImage ("path.png");

}

function setup(){
  createCanvas(400,400);
  //create sprites here
  road = createSprite(200,200);
  road.addImage(roadImage);
  road.velocityY = 4;
  road.scale = 1.20;

  man = createSprite(100,300,50,50);
  man.addAnimation("running", man_running)
  man.scale = 0.10;

  invisibleroad = createSprite(-30,400);
  invisibleroad2 = createSprite (460,300);
  invisibleroad.visible = false 
  invisibleroad2.visible = false
}

function draw() {
  background(0);
  if(keyDown("left")){
    man.velocityX = -5;
  }

  if(keyDown("right")){
    man.velocityX = 5 ;
  }


  if(road.y > 400 ){
    road.y = height/2;
  }
  console.log(man.y);
  man.collide(invisibleroad);
  man.collide(invisibleroad2);
  drawSprites();

}
