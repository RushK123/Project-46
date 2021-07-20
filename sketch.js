let ground;
let moonlander;
var landerImg;
var bgImg;
var velx = 0;
var vely = 0;
var g = 0.5;


function preload() {
  landerImg = loadImage("normal.png");
  bgImg = loadImage("bg.png");
}

function setup() {
  createCanvas(1000, 700);

  frameRate(80);

  moonlander = createSprite(100, 50, 30, 30);
  moonlander.addImage(landerImg);
  moonlander.scale = 0.1;

  rectMode(CENTER);
  textSize(15);
}

function draw() {
  background(51);
  image(bgImg, 0, 0);

  push()

  fill(255);
  
  text("The position of the lander is " + moonlander.position.y + " units", 750, 75);

  fill("purple");
  text ("The Lunar Lander", 500, 75)
  pop();

//  vely += g;
 moonlander.position.y += g;

  if (keyDown("space")){
    console.log("asdf")
    moonlander.position.y -= 4;
    
  }

  drawSprites();
}


