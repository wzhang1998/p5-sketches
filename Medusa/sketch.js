// press "f" to toggle fullscreen
// click on the picture to toggle sound play

let song, img, cnv;
let fft;
let button;
let bass, lowMid, mid, highMid, treble;
let rot = 0;
let step = 9;

function toggleSong() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.loop();
  }
}

function preload() {
  song = loadSound('drama-cue-synth-and-cello-114417.mp3');
  // song = loadSound('beat4.wav');
  img = loadImage('img.jpeg');
}

function setup() {
  rectMode(CENTER);
  img.resize(windowWidth*0.6, 0);
  cnv = createCanvas(img.width, img.height);
  let newCanvasX = (windowWidth - img.width)/2;
  let newCanvasY = (windowHeight - img.height)/2;
  print(newCanvasY)
  cnv.position(newCanvasX, newCanvasY);
  song.loop();
  fft = new p5.FFT(0.8, 1024);
}

function draw() {
  background(0);
  noStroke();
  image(img,0,0,img.width,img.height);
  let spectrum = fft.analyze();
  bass = fft.getEnergy("bass");
  lowMid = fft.getEnergy("lowMid");
  mid = fft.getEnergy("mid");
  highMid = fft.getEnergy("highMid");
  treble = fft.getEnergy("treble");
  let sc = map(bass,140,255,0.1,5);
  let sc2 = map(highMid,140,255,0,4);
  let sc3 = map(bass,0,180,0,4);
  // print(sc);
  // print(sc2);
  // print(bass)
  step = 7
  img.loadPixels();
  for (let y = 0; y < img.height; y = y + step) {
    for (let x = 0; x < img.width; x = x + step) {
      let p = (x + y * img.width) * 4;

      let r = img.pixels[p];
      let g = img.pixels[p + 1];
      let b = img.pixels[p + 2];
      let c  = color(r,g,b);
      let br = brightness(c);
      fill(r, g, b);

      
      if(br<20){
        push();
        noFill();
        stroke(c)
        strokeWeight(sc3*0.5)
        // translate(random(2)*sc2,random(2)*sc2);
        // ellipse(x, y, 2*sc*sc3, 2*sc);
        translate(x,y)
        rotate(radians(random(12)));
        curve(x,y,sin(x),cos(x)*sin(x),sc,sc3,cos(y)*sin(y)*sc3,cos(x)*sin(x)*sc3);
        pop();
      }else if (b>90 && br>70) {
        push();
        translate(x,y)
        // circle(0,0,1.5)
        textSize(2*sc3)
        scale(sc3*0.5);
        push()
        rotate(rot);
        text("*",0,0)
        pop();
        pop();
      } else {
        ellipse(x, y, 6, 6);
      }
    }
  }
  rot = rot + 0.06;
  // noLoop();
}

function windowResized() {
  song.pause()
  setup();
}

function mousePressed() {
  toggleSong();
}

function keyTyped(){
  if (key === 'f'){
     let fs = fullscreen();
     fullscreen(!fs);
  }
}