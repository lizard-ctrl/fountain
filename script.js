let hello = "brrr"
let content = 'SENDING AUTOMATIC LOVE MESSAGES'; //variable for text string
let yStart = 0; //starting position of the text wall
let customFont;
let sWidth =200;
let sHeight =200;
let value = 200;

function preload(){
  img1 =loadImage("xoxo.png")
  customFont = loadFont('trick.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(customFont); //use the custom font for text display
  textAlign(CENTER, CENTER); //adjust the anchor point of text alignment to the horizontal and vertical centers
  textSize(20);
}

function draw() {
  background(0);
  fill(66, 135, 245);
  ellipse(mouseX,mouseY,value,value);
  fill(0);
  imageMode(CENTER);
  image(img1,windowWidth/2,windowHeight/2,200,400);
  
 
  //text(hello,25,25);
  for (let y = yStart; y < height; y += 28) { //use a for loop to draw the line of text multiple times down the vertical axis
    fill(0); //create a gradient by associating the fill color with the y location of the text
    text(content, width / 2, y); //display text
  }
  yStart--; //move the starting point of the loop up to create the scrolling animation, yStart-- is the same as yStart = yStart -1 or yStart-=1
}

function mouseClicked() {
  if (value === 0) {
    value = 200;
  } else {
    value = value + 100;
  }
}