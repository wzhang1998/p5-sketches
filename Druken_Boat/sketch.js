// press 't' to show the texts
// press 'f' to toggle between fullscreen mode
// press 's' to save a screenshot
// move the mouse to change the scale/speed of the movement
// this script presents texts without repeating color between adjacent rows

let font;
let col = [
  "#4f4f4f",
  "#5a5a5a",
  "#656565",
  "#707070",
  "#7b7b7b",
  "#868686",
  "#919191",
  "#9c9c9c",
  "#a7a7a7",
  "#b2b2b2",
]

let col2 = [
  "#66cdaa", 
  "#00a4b2",
  "#3b7ebd",
  "#006d87",
  "#6291bd",
  "#00d5e5",
  "#2a5792",
  "#75f215"
]

let c2 = [];
let c3 = [];
let data = [];

let randColNow;
let randColOld;
let randColNow2;
let randColOld2;

let textShow = false;

function preload() {
  // font = "arial";
  // font = 'Georgia';
  font = loadFont('Monofett-Regular.ttf');
  // font = loadFont('MajorMonoDisplay-Regular.ttf');
  data = loadStrings("textFile.txt");
  // data = loadStrings("textCN.txt");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // create shadows
  drawingContext.shadowBlur = 10;
  drawingContext.shadowColor = color(0, 120);
  drawingContext.shadowOffsetX = 12;
  drawingContext.shadowOffsetY = 12;
  
  for (let i = 0; i < data.length; i++) {
    while(randColOld == randColNow) {
      randColNow = random(col);
    }
    c2[i] = randColNow;
    randColOld = randColNow;
  }
  
   for (let k = 0; k < data.length; k++) {
    while(randColOld2 == randColNow2) {
      randColNow2 = random(col2);
    }
    c3[k] = randColNow2;
    randColOld2 = randColNow2;
  }

}

function draw() {
  background(0,50);
  // textAlign(CENTER, TOP);
  // rectMode(CENTER);
  // fill("#F1F1F1");

  let stepY = (height-10)/ data.length;
  let fontSize = stepY * 0.9;
  let shape = map(mouseX, 0, width, 0.2, 1);
  let speed = map(mouseY, 0, height, 0.1,1);

  textFont(font);
  textSize(fontSize);

  translate(0, stepY);

  for (let i = 0; i < data.length; i++) {
    let words = data[i].split(" ");
    let currentOffset = 0;
    let wave = map(tan(radians(frameCount*speed + i*20)*shape), -1, 1, -100, 100);
    push();  
    // translate(width/4 + wave, i * stepY);
    fill(c2[i]);
    if(textShow == true){
    text(data[i], width/4 + wave, i * stepY);
    push();
      translate(width*0.8,0)
      rotate(HALF_PI);
      fill(c3[i]);
      text(data[i],width/4 + wave, i * stepY);
    pop();
    }
    else{
      for(let j = 0; j < words.length; j++){
        let wordWidth = textWidth(words[j]);
        noStroke();
        rect(currentOffset + width/4 + wave, -fontSize/2 + i * stepY,
        wordWidth, fontSize);
        push();
          noStroke();
          translate(width*0.8,0)
          rotate(HALF_PI);
          fill(c3[i]);
          rect(currentOffset + width/4 + wave, -fontSize/2 + i * stepY,
        wordWidth, fontSize);
        pop();
      currentOffset += wordWidth + 4; 
      }
    }
    pop();
  }
  // noLoop();
}

// reset the canvas when windowResized
function windowResized() {
  setup();
}

function keyTyped(){
  if (key === 'f'){
     let fs = fullscreen();
     fullscreen(!fs);
  }
  else if (key === 't'){
     textShow = !textShow;
  } 
}

function keyPressed(){
  if (key == 's') {
    save("mySketch.png");
  }
}
