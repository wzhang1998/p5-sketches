function setup() {
  createCanvas(600, 600);
  background(220);
}

function draw() {
  let edge = width/80;
  let min = 30;
  let max = width - edge;
  strokeWeight(1);
  for (let i = 0; i < 80; i++) {
    h = edge + i*edge
    let end = random(min,max);
    for (let j = edge; j < end; j++) {
      let n = map(j, 0, max, 0, 16);
      point(j,h + 3*noise(n+i*100));
    }
  }
  noLoop();
}