let video;
let x = 0;
let button;
let started = false;

function setup() {
  createCanvas(640, 480);
  
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();
  
  button = createButton('Start Scan');
  button.mousePressed(() => {
    if (!started) {
      started = true;
      button.html('Stop Scan');
    } else {
      x = 0;
      started = false;
      button.html('Start Scan');
      loop();
    }
  });
}

function draw() {
  image(video, x, 0, width, height);
  if (started) x++;
  if (x >= width) noLoop();
}