let angle = 0;
let camRadius = 400;
let boxSize = 100;

function setup() {
  createCanvas(windowHeight*0.85, windowHeight*0.85, WEBGL);
  angleMode(DEGREES);
}


function draw() {
  colorMode(RGB);
  background('#1C31A9')
  
  rotateX(-20);
  
  colorMode(HSB);
  if (mouseIsPressed){
  orbitControl(4, 4);
  }
  else{
  // Set up camera position
  let camX = camRadius * sin(angle);
  let camY = -300;
  let camZ = camRadius * cos(angle);
  camera(camX, camY, camZ, 0, 0, 0, 0, 1, 0);
  // Update angle for camera rotation
  angle += 0.2;
  }
  
  noStroke();
  fill('#0AC312');
  cylinder(10, 50);
  
  push();
  translate(0,400,0)
  cylinder(5, 800);
  pop();
  
  let opening = map(sin(frameCount) * 0.1, -1, 1, 0, 4);

  for (let r = 0; r <= 1.02; r += 0.01) {
    let c = color(100 + 100 * r, r * 60, 100);
    stroke(c);
    strokeWeight(map(r, 0, 1.02, 0.1, 2));
    beginShape(POINTS);
    for (let theta = -2 * 180; theta <= 180 * 10; theta += 2) {
      let phi = (180 / opening) * Math.exp(-theta / (8 * 180));
      let petalCut =
        1 -
        (1 / 2) *
          pow((9 / 4) * pow(1 - ((3.6 * theta) % 360) / 180, 2) - 1 / 4, 2);
      let hangDown = 2 * pow(r, 2) * pow(1.3 * r - 1, 2) * sin(phi);

      if (0 < petalCut * (r * sin(phi) + hangDown * cos(phi))) {
        let pX =
          260 * petalCut * (r * sin(phi) + hangDown * cos(phi)) * sin(theta);
        let pY = -260 * petalCut * (r * cos(phi) - hangDown * sin(phi));
        let pZ =
          260 * petalCut * (r * sin(phi) + hangDown * cos(phi)) * cos(theta);
        vertex(pX, pY, pZ);
      }
    }
    endShape();
  }
}
