var sea, ship;
var seaImg, shipImg;

function preload(){
  seaImg = loandImage("sea.png");
  shipImg1 = loadAnimation("ship-1.png","ship-1.png","ship-2.png","ship-1.png"); 

}   

function setup(){
  createCanvas(400,400);
  background("blue");

sea=createSprite(400,200);
sea.addImage(seaImg);
sea.velocityX = -5;
sea.scale = 0,3;

ship = createSprite(120,200,30,30);
ship.addAnimation("movingship",shipImg1);
ship.scale = 0.26;




}


function draw() {
  background(0);
  sea.velocytX = -3;
  
  drawSprites();

 
}
