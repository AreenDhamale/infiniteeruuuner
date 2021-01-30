var canvas , backgroundImage;

var gamestate=0
var player
var distance=0
var obstacle,obstacle1,obstacle2,obstacle3
var backgroundimg,bg
var player,game;

var player,run_img

function preload(){
  player = loadImage("images/infifif.png");
  obstacle1 = loadImage("images/rock1.png");
  obstacle2 = loadImage ("images/rock2.png");
backgroundimg = loadImage ("images/whitepngbg.png")
}

function setup(){
  canvas =createCanvas(1500,800)
  bg= createSprite(750,400)
bg.addImage(backgroundimg)
bg.velocityX=-7
  playerimg = createSprite(200,400)
  playerimg.addImage(player)
  playerimg.velocityX=7

}
function draw(){
  // background('white')
   if(bg.x<600){
     bg.x=550
   }
    obstacles()
    obstacles1()
    
  drawSprites()
}

function obstacles(){
  if (frameCount%300==0)
{
  obstacle =createSprite(400,380)
      obstacle.addImage(obstacle1)
      obstacle.velocityX=-7
}
}
function obstacles1(){
  if (frameCount%500==0)
{
  obstacle3 =createSprite(460,380)
      obstacle3.addImage(obstacle2)
      obstacle3.velocityX=-7
}
}