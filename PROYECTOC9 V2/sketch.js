var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(600, 600);
 
}

function draw() {
  background(r,g,b);
  fill("white");
  textSize(20);
  text ("Presiona las flechas para cambiar de color", 50,100);

  if(keyIsDown(RIGHT_ARROW)){
    red_bg();
  }

  if(keyIsDown(LEFT_ARROW)){
    green_bg();
  }

  if(keyIsDown(UP_ARROW)){
    blue_bg();
  }

  if(keyIsDown(DOWN_ARROW)){
    purple_bg();
  }
}


function red_bg()
{
  r = 255;
  g = 0;
  b =0;
}

function green_bg()
{
  r = 0;
  g = 255;
  b =0;
}

function blue_bg()
{
  r = 0;
  g = 0;
  b = 255;
}

function purple_bg()
{
  r = 255;
  g = 0;
  b = 255;
}