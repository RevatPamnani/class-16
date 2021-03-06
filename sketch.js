var ground;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0;
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
 
  banana=createSprite(300,150,20,20);
  banana.addAnimation("moving",bananaImage);
  banana.scale=0.1;
  
  obstacle=createSprite(300,325,20,20);
  obstacle.addAnimation("moving",obstacleImage);
  obstacle.scale=0.1;
}


function draw() {
  stroke("white");
  textSize(20);
  fill("black");
  text("score:"+score,500,50);
  
  stroke("white");
  textSize(20);
  fill("black");
  text("survivalTime:"+survivalTime,100,50);
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
 
  drawSprites();
  
}






