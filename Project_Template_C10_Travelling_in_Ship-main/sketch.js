var sea,seaImg;
var ship,shipImg;

function preload(){

seaImg = loadImage("sea.png");
shipImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
 sea= createSprite(200,200,20,20);
 sea.addImage("sea",seaImg);
sea.velocityX = -4


 ship= createSprite(200,220,20,20);
 ship.addAnimation("ship",shipImg);
ship.scale = 0.4;

}

function draw() {
  background("blue");
if (sea.x<0){
sea.x = width/2;
}

 drawSprites()
}