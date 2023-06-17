// set up color palette and reformat them
let colors = "1e59a9-2f96b3-133c32-b4b4b4".split("-").map((a) => "#" + a);

function setup() {
  createCanvas(windowHeight, windowHeight);
}

function multArc(n,l) {
  var num = n;
  var length = l;
  for (let x = 0; x < num; x++) {
    let i = length / n;
    for (let y = 0; y < num; y++) {
      c = color(colors[int(random(0,4))]); //select color from palette
      fill(c);
      push();
      translate(x*i,y*i);
      translate(i / 2, i / 2);
      rotate(HALF_PI * int(random(1, 8)));
      translate(-i/2,-i/2)
      arc(0, 0, i * 2, i * 2, 0, HALF_PI);
      pop();
    }
  }
}

function draw() {
  background("#f2f0dd");
  for (let x = 0; x < 12; x++) {
    let i = width / 12;
    for (let y = 0; y < 12; y++) {
      // translate the shape position
      push();
      noStroke();
      translate(x * i, y * i);
      translate(i / 2, i / 2);
      rotate(HALF_PI * int(random(1, 8)));
      translate(-i/2,-i/2)
      
      // fill random colors
      c = color(colors[int(random(0,4))]); //select color from palette
      fill(c);
      
      // draw different shapes
      let weightedRandom = random(300);
      if (weightedRandom < 100) {
        arc(0, 0, i * 2, i * 2, 0, HALF_PI);
      } 
      else if (weightedRandom > 200) {
        multArc(5,i)
      }
      else {
        push();
        rect(0,0,i,i/6);
        rect(0,i/3,i,i/6);
        rect(0,i/3*2,i,i/6);
        pop()
      }
      pop();
    }
  }
  noLoop();
}

