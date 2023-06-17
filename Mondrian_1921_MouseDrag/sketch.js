// drag on canvas for animation
function setup() {
  createCanvas(600,750);
}

//variables
let a = 350;
let b = 530;
let s = 8;

function draw() {
  //colors
  let A = color('#D4CBDB');
  let B = color('#dd4f27');
  let C = color('#0d0b09');
  let D = color('#323d72');
  let E = color('#edc541');
  
  //set up background & stroke weight
  background(220);
  strokeWeight(s);
  fill('#eeeeee');
  
  //change the size of recs and the stroke if mouse pressed
  if (mouseIsPressed) {
    a = mouseX;
    b = mouseY;
    // stroke weight animation
    s = abs(sin(frameCount*0.025))*90+sin(frameCount*0.2)*2.2;
    // stroke alpha animation
    stroke(0,0,0,abs(sin(frameCount*0.025)*10)*10);
  }
  else {
    a = 350;
    b = 530;
    s = 8;
    stroke(0,0,0);
  }
  
  //draw rects
  let w = (600-a)*0.9;
  let h = (750-b)*0.6;
  rect(a,b,w,h); //01
  rect(0.7*a,0.55*b,0.3*a,0.45*b); //10
  rect(0.7*a,0.35*b,0.3*a,0.2*b); //11
  rect(0.2*a,0.35*b,0.5*a,0.2*b); //14
  rect(0.2*a,0.55*b,0.5*a,0.45*b); //15
  rect(a+w,0.1*b,(600-a)*0.1+0.5*s,0.9*b+h); //23
  
  fill(A);
  rect(a,b+h,w,(750-b)*0.3); //02
  rect(a,750-(750-b)*0.1,w,(750-b)*0.1+0.4*b); //06
  rect(0.2*a,0.05*b,0.8*a,0.3*b); //12
  rect(0.2*a,b+h,0.5*a,(750-b)*0.25); //17
  rect(-0.5*s,750-(750-0.55*b)*0.34,0.2*a+0.5*s,(750-0.55*b)*0.34+0.5*s); //22
  
  
  fill(B);
  rect(a,0.4*b,w,0.6*b); //03
  rect(0.2*a,b+h+(750-b)*0.25,0.8*a,(750-b)*0.15+0.5*s); //18
  
  fill(C);
  rect(a,0.1*b,w,0.3*b); //04
  rect(0.2*a,b,0.5*a,h); //16
  rect(-0.5*s,0.05*b,0.2*a+0.5*s,0.3*b); //19
  
  fill(D);
  rect(a,-0.5*s,600-a+0.5*s,0.1*b+0.5*s); //05
  rect(a+w,b+h,(600-a)*0.1+0.5*s,(750-b)*0.4+0.5*s); //07
  rect(-0.5*s,0.35*b,0.2*a+0.5*s,0.2*b); //20
  
  fill(E);
  rect(0.7*a,b,0.3*a,h); //08
  rect(0.7*a,b+h,0.3*a,(750-b)*0.25); //09
  rect(-0.5*s,-0.5*s,a+0.5*s,0.05*b+0.5*s); //13
  rect(-0.5*s,0.55*b,0.2*a+0.5*s,(750-0.55*b)*0.66); //21

}