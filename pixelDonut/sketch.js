let pg;

let TILES_X = 45;
let TILES_Y = 45;

let TILE_W, TILE_H;
let colors = ['#ff6a00', '#ffff00','blue', '#00ff00','#00eeff']

let FONT;
let CHARS = " $?01▄abc+->";


function preload() {
  FONT = loadFont("IBMPlexMono-Regular.ttf");
}

function setup() {
  createCanvas(600, 600, WEBGL);
  pg = createGraphics(TILES_X, TILES_Y, WEBGL);
  pg.directionalLight(255, 255, 255, -1, 0, -1);
  TILE_W = width / TILES_X;
  TILE_H = height / TILES_Y;
  
  textFont(FONT);
  textAlign(CENTER, CENTER);
  textSize(TILE_H);
}

function draw() {
  orbitControl(); 
  background(0);
  noStroke();
  
  pg.push();
  pg.clear();
  pg.pointLight(250, 250, 250, width/2, width/2, 10);
  pg.noStroke();
  pg.background(0);
  pg.rotateY(radians(40))
  pg.rotateX(radians(frameCount*3));
  pg.rotateZ(radians(frameCount*3));
  pg.push();
  pg.fill(255, 238, 0);
  pg.rotateY(radians(frameCount));
  pg.box(4,4,4);
  pg.pop();
  pg.push();
  pg.fill(255, 0, 140);
  pg.torus(15,3);
  // pg.scale(0.16); 
  // pg.model(teapot);
  pg.pop();
  pg.pop();

  let buffer = pg.get();

  for (let x = 0; x < TILES_X; x++) {
    for (let y = 0; y < TILES_Y; y++) {

      let c = buffer.get(x, y);
      let br = brightness(c);
      let r = c[0];
      let g = c[1];
      let b = c[2];

      let selector = int(map(br, 0, 100,0, CHARS.length));
      let selector2 = int(map(br, 0, 120,0, colors.length));
      
      push();
      fill(colors[selector2]);
    
      let posX= x * TILE_W + TILE_W / 2-width/2;
      let posY= y * TILE_H + TILE_H / 2-height/2;
      translate(posX, posY);

      if(br<50){
        push();
        // fill(colors[selector2])
        text(CHARS.charAt(selector), 0, 0);
        pop();
      }
      
      else{
        box(TILE_W/br*20,TILE_W/br*20,r*0.5*br/30);
      }
      pop();
    }
  }
  // image (pg,-width/2,-height/2,width/4,height/4);
}

function keyTyped(){
  if (key === 'f'){
     let fs = fullscreen();
     fullscreen(!fs);
  }
}