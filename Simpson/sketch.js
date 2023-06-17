function setup() {
  createCanvas(600, 600);

}

function draw() {
  background("#00ff1e");
  // variables to make the basic shape
  let a = 160;
  let b = 180;
  let w = 2*(300-a);
  let h = 220;
  
  // mian shape
  noStroke();
  fill("#f9fa32");
  rect(a, b, w, h);
  ellipse(a+0.5*w, b, w, 240);
  ellipse(a+0.5*w, b+h, w, 240);
  rect(a+80,340,250,70,33);
  
  // draw the eye bg
  rect(a-10,180,150,50,40);
  
  // draw the mouth
  fill("#fac750")
  rect(a-30,320,210,155,66);
  ellipse(255,440,160,120);
  
  // draw the right eye
  // var c for eye blink animation(scaleY)
  let c = constrain(abs(cos(frameCount*0.03))*10-1,0,1);
  fill(255);
  strokeWeight(4);
  stroke(0);
  ellipse(200,260,125,125*c);
  ellipse(200,260,8,8*c);
  
  // draw the nose
  noStroke();
  fill("#f9fa32");
  rect(a-30,270,250,70,33);
  
  // draw the left eye and mouth shape
  fill(255);
  strokeWeight(4);
  stroke(0);
  ellipse(300,260,125,125);
  ellipse(300,260,8,8);
  ellipse(290,420,35,13);
  
  // draw the lines
  let n = 11;
  noFill();
  ellipse(455,375,13,30);
  ellipse(260,87,170,80);
  ellipse(307,87,170,80);
  line(391-n,321,428-n,230);
  line(428-n,230,453-n,321);
  line(453-n,321,478-n,230);
  line(478-n,230,515-n,321);
  
  // draw the cover shape
  noStroke();
  fill("#f9fa32");
  ellipse(307,110,170,80);
  ellipse(270,121,170,90);
  
  

  

  
  
}