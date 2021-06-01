var bg, bgImg, mouse, nmouse1Img; 
var tmouse3Img, cmouse4Img;
var cat, cat1Img, cat2Img, cat3Img;

function preload() {
    
    bgImg=loadImage("images/garden.png");
    cat1Img=loadAnimation("images/cat1.png")
    cat2Img=loadAnimation("images/cat2.png", "images/cat3.png");
    cat3Img=loadAnimation("images/cat4.png");
    mouse1Img=loadAnimation("images/mouse1.png");
    mouse2Img=loadAnimation("images/mouse2.png", "images/mouse3.png");
    mouse3Img=loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);

    
    cat = createSprite(870, 600);
    cat.addAnimation("sleeping", cat1Img);
    cat.scale=0.2;
    
    mouse = createSprite(200, 600);
    mouse.addAnimation("standing", mouse1Img);
    mouse.scale=0.15;
}

function draw() {

    background(bgImg);
    
    if(cat.x - mouse.x < cat.width/2-mouse.width/2){
      cat.velocityX= 0;
      cat.addAnimation("end image of cat", cat3Img);
      cat.x=300;
      cat.scale=0.2;
      cat.changeAnimation("end image of cat");

      mouse.addAnimation("end image of mouse", mouse3Img);
      mouse.scale=0.15;
      mouse.changeAnimation("end image of mouse");
    } 
    
    drawSprites();
}


function keyPressed(){

 
  if(keyCode === LEFT_ARROW){
    cat.velocityX=-4;
    cat.addAnimation("running", cat2Img);
    cat.changeAnimation("running");
    
    mouse.addAnimation("teasing", mouse2Img);
    mouse.changeAnimation("teasing");
   
  }

}