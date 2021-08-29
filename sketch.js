var bg,sleep,move,brush,gym,eat,drink,bath,bgs,astronaut,edges;

function preload()
{
  bg = loadImage("iss.png");
  gym = loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png");
  sleep = loadAnimation("sleep.png");
  move = loadAnimation("move.png","move1.png");
  brush = loadAnimation("brush.png");
  eat = loadAnimation("eat1.png","eat2.png");
  drink = loadAnimation("drink1.png","drink2.png");
  bath = loadAnimation("bath1.png","bath2.png");
}

function setup() 
{
  createCanvas(800,600);

  astronaut = createSprite(400,500)
  astronaut.addAnimation("sleeping",sleep)
  astronaut.scale = 0.1
}

function draw() 
{
  background(bg);

   textSize(20);
  fill("white")
  text("Instructions:",20, 35);
  textSize(15);
  text("Up Arrow = Brushing",20, 55);
  text("Down Arrow = Gymming",20, 70);
  text("Left Arrow = Eating",20, 85);
  text("Right Arrow = Bathing",20, 100);
  text("m key = Moving",20, 115);
  
  edges = createEdgeSprites();
  astronaut.bounceOff(edges);
  
  if(keyDown("UP_ARROW"))
  {
    astronaut.addAnimation("brushing",brush)
    astronaut.changeAnimation("brushing")
    astronaut.y = 450
    astronaut.velocityX = 0
    astronaut.velocityY = 0
  }

 if(keyDown("DOWN_ARROW"))
 {
  astronaut.addAnimation("gymming",gym)
  astronaut.changeAnimation("gymming")
  astronaut.y = 450
  astronaut.velocityX = 0
  astronaut.velocityY = 0
 }

if(keyDown("RIGHT_ARROW"))
 {
  astronaut.addAnimation("bathing",bath)
  astronaut.changeAnimation("bathing")
  astronaut.y = 450
  astronaut.velocityX = 0
  astronaut.velocityY = 0
 }

if(keyDown("LEFT_ARROW"))
 {
  astronaut.addAnimation("eating",eat)
  astronaut.changeAnimation("eating")
  astronaut.y = 450
  astronaut.velocityX = 0
  astronaut.velocityY = 0
 }

if(keyDown("M"))
 {
  astronaut.addAnimation("drinking",drink)
  astronaut.changeAnimation("drinking")
  astronaut.y = 450
  astronaut.velocityX = 0
  astronaut.velocityY = 0
 }

 drawSprites();
}
