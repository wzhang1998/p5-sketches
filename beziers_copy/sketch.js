let p0, p1;
let cl1;
let cl2;
let cl3;
let d;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // change colormode
  colorMode(HSB);
  
  background(0,0,0,1);
  
  // ctrol points of bezier curves
  p0 = createVector(0, windowHeight / 2);
  p1 = createVector(windowWidth / 2, windowHeight / 2);
  p2 = createVector(windowWidth / 4, windowHeight / 6);
  p3 = createVector(windowWidth, windowHeight / 2);

}

function draw() {
  // draw background everyframe  
  background("rgba(0,0,0,0.2)");
  
  // variables for HSB 
  d = dist(mouseX,mouseY,windowWidth/2,windowHeight/2);
  cl1 = map(d, 0, 0.5*sqrt(sq(windowWidth)+sq(windowHeight)), 0, 1);
  cl2 = map(d, 0, 0.5*sqrt(sq(windowWidth)+sq(windowHeight)), 0, 40);
  cl3 = map(mouseX, 0, windowWidth, 60, 200);
  
  // stroke color and weight
  stroke(360*abs(sin(frameCount*0.008)), cl2, 100, cl1);
  strokeWeight(200/d);
  // print(d);
  
  // reposition mouseXY when mouse mout of canvas
  if(mouseX<0||mouseY<0||mouseX>windowWidth||mouseY>windowHeight){
    p1.x = windowWidth / 2;
    p1.y = windowHeight / 2;
  }
  
  // assign mouse XY to points
  p1.x = mouseX;
  p1.y = mouseY;
  p2.x = mouseX * 1.4;
  p2.y = mouseY * 1.4;
  
  // the size of each segments
  let delta = 0.11;

  noFill();
  // draw curves
  beginShape();
  for (let t = 0; t <= 1; t += delta) {
    // stroke(t * 360, 255, 255, 0.5);
    // line(p1.x, p0.y, p2.x, p2.y);
    let v = cubic(p0, p1, p2, p3, t);
    vertex(v.x, v.y);
    endShape();
    circle(v.x, v.y, t*3*abs(sin(frameCount*0.01))*90+sin(frameCount*0.2)*2.2)*windowWidth/600; 
  }

  //   beginShape();
  //   for (let t = 0; t <= 1.00001; t += delta) {
  //     let x1 = lerp(p0.x, p1.x, t);
  //     let y1 = lerp(p0.y, p1.y, t);
  //     let x2 = lerp(p1.x, p2.x, t);
  //     let y2 = lerp(p1.y, p2.y, t);

  //     // stroke color
  //     // stroke(t * 360, 255, 255);

  //     // line(x1, y1, x2, y2);
  //     let x = lerp(x1, x2, t);
  //     let y = lerp(y1, y2, t);
  //     vertex(x ,y);
  //     endShape();
  //   }
}

// quadratic function
function quadratic(p0, p1, p2, t) {
  let x1 = lerp(p0.x, p1.x, t);
  let y1 = lerp(p0.y, p1.y, t);
  let x2 = lerp(p1.x, p2.x, t);
  let y2 = lerp(p1.y, p2.y, t);
  let x = lerp(x1, x2, t);
  let y = lerp(y1, y2, t);
  // line(x1, y1, x2, y2);
  return createVector(x, y);
}

// cubic function
function cubic(p0, p1, p2, p3, t) {
  let v1 = quadratic(p0, p1, p2, t);
  let v2 = quadratic(p1, p2, p3, t);
  let x = lerp(v1.x, v2.x, t);
  let y = lerp(v1.y, v2.y, t);
  // line(v1.x, v1.y, v2.x, v2.y);
  return createVector(x, y);
}

function windowResized() {
  setup();
}
