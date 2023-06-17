// click on the canvas to enable full screen mode
// click again to exit
// If you hit the s key, save an image

let t = 0.0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  colorMode(HSB, 360, 100, 100);
  hue = 0;
}

function draw() {
  background("rgba(255,255,255,0.02)")
  
  // set hue color mode and make it change by time
  hue = (hue + 0.4) % 360;
  t += 0.004;
  if (t>600){
    t = 0.0;
  }
  
  // create random points
  for (let i = 0; i < 100; i++) {
    let r = random(height/2.2);
    let angle = random(2 * PI);
    let x = r * cos(angle) + width / 2 + random(-10, 10);
    let y = r * sin(angle) + height / 2 + random(-10, 10);
    // points radius
    let s = random(1, 30);
    // create random color for each point
    c = color(random(255), random(255), random(255), random(100, 255));
    c.setAlpha(0.9);
    fill(c);
    noStroke();
    // draw shape
    ellipse(x, y, s*r*0.005, s*r*0.005);
    
    // create 15 moving points
    for (let f = 0; f < 15; f++) {
      fill(hue,100,100)
      x1 = noise(t+100*f)*width;
      x2 = noise(t+200+100*f)*height;
      ellipse(x1,x2,f*4,f*4);
      }
    
    // draw strokes
    strokeWeight(0.1);
    stroke(c);
    noFill();
    circle(width/2,height/2,r*2+random(-10,10));
    }
}

// reset the canvas when windowResized
function windowResized() {
  setup();
}

// mouse pressed then enter full screen
function mousePressed() {
  let fs = fullscreen();
  fullscreen(!fs);
}

// If you hit the s key, save an image
function keyPressed() {
  if (key == 's') {
    save("mySketch.png");
  }
}

