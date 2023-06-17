let song;
let fft;
let button;
let bass, lowMid, mid, highMid, treble;

function toggleSong() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.loop();
  }
}

function preload() {
  song = loadSound('beat4.wav');
}

function setup() {
  let canvas = createCanvas(windowWidth-10, (windowWidth-10)/16*10);
  colorMode(HSB, 255);
  angleMode(DEGREES);
  canvas.parent("container");
  button = createButton('toggle');
  button.parent("container");
  button.position(0,height-button.height);
  button.mousePressed(toggleSong);
  song.loop();
  fft = new p5.FFT(0.9, 128);
}

function draw() {
  background(0);
  noStroke();
  let spectrum = fft.analyze();
  bass = fft.getEnergy("bass");
  lowMid = fft.getEnergy("lowMid");
  mid = fft.getEnergy("mid");
  highMid = fft.getEnergy("highMid");
  treble = fft.getEnergy("treble");
  // console.log("Bass: "+bass+" lowMid: "+lowMid+" mid: "+mid+" highMid: "+highMid+" treble: "+treble);

  let w = width/3;
  let h = height;
  push();
  fill(0, 255, map(bass, 120, 255, 50, 200));
  rect(0, 0, w, h);  
  pop();

  push();
  fill(48, 255, map(mid, 120, 255, 50, 200));
  rect(w, 0, w, h);  
  pop();

  push();
  fill(160, 255, map(treble, 100, 255, 50, 200));
  rect(w*2, 0, w, h);  
  pop();

}

function windowResized() {
  song.pause();
  removeElements();
  setup();
}

function keyTyped(){
  if (key === 'f'){
     let fs = fullscreen();
     fullscreen(!fs);
  }
}
