/*let img;
let tileW;
let tileH;
let c1;
let c2;

function preload (){
    img = loadImage("rawr.png");
}

let imData = []

function setup() {
  
  createCanvas(windowWidth, windowHeight,WEBGL);

   // Setting the amount of tiles //// detail
   img.resize(60, 60);

   if (pixelDensity() === 2) {
    pixelDensity(1);
    }
  
//   c1=color(255,0,0);
//   c2=color(0,0,255);

  for (let x = 0; x < img.width; x++) {
    for (let y = 0; y < img.height; y++) {
    
      // get the color
      c = img.get(x,y);
      // calc bright
      let b = brightness(c);

      // calculate the depth
      let scalar = map(b,0,255,0,1);
      imData.push([c, b, scalar]);
    }
}

    // frameRate(120)
}

function draw() {
  background(0);
  noStroke();
  
   let // Calculate the width and the height of a single tile
   tileW = width / img.width;
   tileH = height / img.height;
  
//let rotation = frameCount;
rotateY(radians(rotation));
rotateX(radians(45));

// lerping colorcome back to l8r :P

/*for (let x = 0; x < width; x++) {
   
    let l = norm(x, 0, width);
    let m = lerpColor(c1,c2,l);
    fill(m);
    rect(-x+900, 400, 1, -height);
  }*/


   /*
    for (let x = 0; x < img.width; x++) {
      for (let y = 0; y < img.height; y++) {
        // get the color
        const [c, b, scalar] = imData[(x * img.height) + y]      

       fill(255,0,0);

        push();
          // visual to the center
          translate(-width/2, -height/2);
          //let depth = 200;
          
         
     /*  let z = map(b, 0, 255, frameCount * 30, 0);
          if (frameCount>38){
            frameCount = 0;
          } 
          */
/*
            push();
              translate(x*tileW, y*tileH,z); 
              
              box(tileW*scalar,tileH*scalar,tileW);
          pop();
        pop();
    }
    }
}
*/
let source;
let tileW;
let tileH;

function preload (){
    source = loadImage("rawr.png");
}

function setup() {
  
  createCanvas(900, 900,WEBGL);
  
    if (pixelDensity() === 2) {
    pixelDensity(1);
    }

   // Set the amount of tiles
   source.resize(50, 50);
}

function draw() {
  
  noStroke();
  
   let // Calculate the width and the height of a single tile
   tileW = width / source.width;
   tileH = height / source.height;
  
  
    for (let x = 0; x < source.width; x++) {
      for (let y = 0; y < source.height; y++) {
      
        // get the color from the current pixel
        let c = source.get(x,y);
    
        // calculate the brightness
        let b = brightness(c);

        // calculate the scalar
        let scalar = map(b,0,255,1,0);
  
        // set the fill color to black
        fill(c);

        push();
          // pull the visual to the center
          translate(-width/2, -height/2);
          let depth = 200;
          // calculate the z-position based on the brightness
          let z = map(b, 0, 255, -depth, depth);
            push();
              translate(x*tileW, y*tileH,z); 
              // draw a box (also called "voxel")
              box(tileW*scalar,tileH*scalar,tileW);
          pop();
        pop();
    }
  }
}