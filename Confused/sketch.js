let ch = ["c", "o", "n", "f", "u", "s", "e", "d"];
let y = [];
let x = [];
let ychng = [];
let sizeRan = [];
let rotRan = [];

function setup() {
  createCanvas(600, 600);
//   textSize(32);
  textAlign(CENTER, CENTER);
  for (let i = 0; i < 8; i++) {
      sizeRan[i] = random(20,100);
      ychng[i] = random(0.5, 2.2);
      rotRan[i] = random(-0.1,0.1);
      x[i] = random(sizeRan[i], width - sizeRan[i]);
      y[i] = random(-300, height);
    }
}

function draw() {
    background(245,20);
    // noFill();
    // strokeWeight(1);
    // stroke(0);
    for (let i = 0; i < 8; i++) {
    textSize(sizeRan[i]);
    push();
    translate(sizeRan[i]/2, -sizeRan[i]/2);
    translate(x[i], y[i] * ychng[i]);
    rotate(rotRan[i]*frameCount/2);
    text(ch[i], 0,0);
    pop();
    y[i]++;
    if (y[i] * ychng[i] > height + 100) {
      y[i] = -100;
      sizeRan[i] = random(18,80);
      ychng[i] = random(0.5, 2.2);
      rotRan[i] = random(-0.1,0.1);
      x[i] = random(sizeRan[i], width - sizeRan[i]);
    }
  }
}
