const colors = ['250', '0','30','200','10'];
let index = 0;
let bgColor;

function setup() {
    createCanvas(windowWidth, windowHeight);
    setInterval(updateBackgroundColor, 5000);
  }
  
  function preload(){
    img1 =loadImage("roar.png")
  }
  
  function updateBackgroundColor() {
    const currentColor = colors[index];
    index++;

    bgColor = currentColor;
    console.log(bgColor);

  if (index >= colors.length) {
    index = 0;
  }

  }
  
  function draw() {
    
    background(255,0, bgColor);
  
    
   
    
    for (let i = 10; i < mouseX; i += 60) {
      for (let k = 10; k < mouseY; k +=60) {
    console.log(i);
      image(img1,i,k,20,40);
        text(i, i, k);
      }
  }

    
  }


 