// set up color palette and reformat them
var colors = "cfd1c6-4e4c41-b2ca2d-bdcb5f-929494"
  .split("-")
  .map((a) => "#" + a);

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);
  fill(0);

  // create shadows
  drawingContext.shadowBlur = 10;
  drawingContext.shadowColor = color(0, 120);
  drawingContext.shadowOffsetX = 10;
  drawingContext.shadowOffsetY = 20;
}

function draw() {
  // draw background on every frame
  fill(0);
  rect(0, 0, windowWidth, windowHeight);

  // draw shapes
  noStroke();
  // set origin to center
  translate(windowWidth / 2, windowHeight / 2);
  // let span = map(mouseX,0,windowWidth,1,100,true);
  let freq = map(mouseY, 0, windowHeight, 5, 100, true);
  for (var x = 0; x < windowWidth; x += 7) {
    push();

    // color variables
    c = color(colors[int(x % colors.length)]); //select color from palette
    c.setAlpha(210);
    fill(c);

    // rotate coordinate to 0-360(polar coordinate)
    rotate((x / windowWidth) * 2 * PI);
    // animate the graph
    let y = (sin(x / freq + frameCount / 300) * windowHeight) / 2;
    // change amplitude with y
    translate(y * 0.9, 0);
    // draw shape
    rect(0, 0, abs(sin(x * 0.5) * 70));
    strokeWeight(1)
    stroke(255)
    line(x,1,y,0)
    pop();
  }
}

// reset the canvas when windowResized
function windowResized() {
  setup();
}
