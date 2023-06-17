let scene;
let font;

let a = 350;
let b = 530;
let s = 8;

function preload() {
  font = loadFont("IBMPlexMono-Regular.ttf");
}

function setup() {
  createCanvas(600, 750);
  scene = createGraphics(width, height);
}

function draw() {
  scene.background(245,20);
    //colors
    let A = color('#02C9E3');
    let B = color('#dd4f27');
    let C = color('#0d0b09');
    let D = color('#CDDC39');
    let E = color('#edc541');
    
    //set up background & stroke weight
    scene.background(220);
    scene.strokeWeight(s);
    scene.fill('#eeeeee');
    
    //change the size of recs and the stroke

    a = mouseX;
    b = mouseY;
    // stroke weight animation
    s = abs(sin(frameCount*0.025))*90+sin(frameCount*0.2)*2.2;
    // stroke alpha animation
    scene.stroke(0,0,0,abs(sin(frameCount*0.025)*20));
  
    
    //draw rects
    let w = (600-a)*0.9;
    let h = (750-b)*0.6;
    scene.rect(a,b,w,h); //01
    scene.rect(0.7*a,0.55*b,0.3*a,0.45*b); //10
    scene.rect(0.7*a,0.35*b,0.3*a,0.2*b); //11
    scene.rect(0.2*a,0.35*b,0.5*a,0.2*b); //14
    scene.rect(0.2*a,0.55*b,0.5*a,0.45*b); //15
    scene.rect(a+w,0.1*b,(600-a)*0.1+0.5*s,0.9*b+h); //23
    
    scene.fill(A);
    scene.rect(a,b+h,w,(750-b)*0.3); //02
    scene.rect(a,750-(750-b)*0.1,w,(750-b)*0.1+0.4*b); //06
    scene.rect(0.2*a,0.05*b,0.8*a,0.3*b); //12
    scene.rect(0.2*a,b+h,0.5*a,(750-b)*0.25); //17
    scene.rect(-0.5*s,750-(750-0.55*b)*0.34,0.2*a+0.5*s,(750-0.55*b)*0.34+0.5*s); //22
    
    
    scene.fill(B);
    scene.rect(a,0.4*b,w,0.6*b); //03
    scene.rect(0.2*a,b+h+(750-b)*0.25,0.8*a,(750-b)*0.15+0.5*s); //18
    
    scene.fill(C);
    scene.rect(a,0.1*b,w,0.3*b); //04
    scene.rect(0.2*a,b,0.5*a,h); //16
    scene.rect(-0.5*s,0.05*b,0.2*a+0.5*s,0.3*b); //19
    
    scene.fill(D);
    scene.rect(a,-0.5*s,600-a+0.5*s,0.1*b+0.5*s); //05
    scene.rect(a+w,b+h,(600-a)*0.1+0.5*s,(750-b)*0.4+0.5*s); //07
    scene.rect(-0.5*s,0.35*b,0.2*a+0.5*s,0.2*b); //20
    
    scene.fill(E);
    scene.rect(0.7*a,b,0.3*a,h); //08
    scene.rect(0.7*a,b+h,0.3*a,(750-b)*0.25); //09
    scene.rect(-0.5*s,-0.5*s,a+0.5*s,0.05*b+0.5*s); //13
    scene.rect(-0.5*s,0.55*b,0.2*a+0.5*s,(750-0.55*b)*0.66); //21
  
  image(scene, 0, 0);
  rendererAscii(
    scene, // Input P5 Element
    font, // font to use
    height/50, // font size
    "▀▃┼▄▅▆▇█▉▊▋▌▍@▏▐░▒▓▔▕▖▗▘▙▚▛0123▟", // charset
    50,  // cols
    60,  // rows
    width * 0.6,  // spread
    "#001cf3",  // background color
    0
  );  // foreground color
}

// mouse pressed then enter full screen
function mousePressed() {
  let fs = fullscreen();
  fullscreen(!fs);
}