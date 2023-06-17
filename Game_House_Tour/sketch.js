let input, output;
let video, song;
let mirrorState = false;
let start, room1, room2, room3, corridor, mirror;
let gameState = {
  currentRoom: "start",
  previousRoom: "",
};


function preload() {
  song = loadSound('drama-cue-synth-and-cello-114417.mp3');
  start = loadImage('start.png');
  corridor = loadImage('corridor.png');
  room1 = loadImage('room1.png');
  room2 = loadImage('room2.png');
  room3 = loadImage('room3.png');
  mirror = loadImage('mirror.png');
  pixelDensity(2);
  video = createCapture(VIDEO);
  video.size(400,400);
  video.hide();
}

function setup() {
    createCanvas(400, 400);
    input = select('#input');
    output = select('#output');
    input.changed(processInput);
    drawStart();
    song.setVolume(0.8)
    song.loop();
}

function draw(){
  // drawRoom1()
  // drawRoom2()
  // drawRoom3()
  // drawCorridor1()
  if (mirrorState == true){
    drawMirror();
    song.rate(map(mouseX,0,400,0.5,7));
  }
  else {
    song.rate(1);
  }
}

function processInput() {
    let userInput = input.value();
    input.value('');
    output.html(`> ${userInput}`);
    
    switch(gameState.currentRoom) {
      case "start":
            if (userInput.toLowerCase() === "start") {
                output.html("You wake up in a dark room. There is a door in front of you.");
                gameState.previousRoom = "start";
                gameState.currentRoom = "room1";
                drawRoom1();
            } else {
                output.html("Type 'start' to begin the game.");
            }
            break;
        case "room1":
            if (userInput.toLowerCase() === "open door") {
                output.html("You open the door and find yourself in a corridor. You can go left or right.");
                gameState.previousRoom = "room1";
                gameState.currentRoom = "corridor1";
                drawCorridor1();
            } else if (userInput.toLowerCase() === "look around") {
                output.html("You are in a small room with no windows. There is a door in front of you.");
            } else if (userInput.toLowerCase() === "start over") {
                output.html("You start over.");
                gameState.previousRoom = "";
                gameState.currentRoom = "start";
                drawStart();
          } else {
                output.html("I don't understand that command.");
            }
            break;
        case "corridor1":
   
            if (userInput.toLowerCase() === "go left") {
                output.html("You turn left and walk down the corridor.");
                gameState.previousRoom = "corridor1";
                gameState.currentRoom = "room2";
                drawRoom2();
              
            } else if (userInput.toLowerCase() === "go right") {
                output.html("You turn right and walk down the corridor.");
                gameState.previousRoom = "corridor1";
                gameState.currentRoom = "room3";
                drawRoom3()
            }else if (userInput.toLowerCase() === "go back") {
              output.html("You go back to room1.");
              gameState.previousRoom = "start";
              gameState.currentRoom = "room1";
              drawRoom1();
          } else if (userInput.toLowerCase() === "start over") {
            output.html("You start over.");
            gameState.previousRoom = "";
            gameState.currentRoom = "start";
            drawStart();
            mirrorState = false
          } else if (userInput.toLowerCase() === "look around") {
                output.html("You are in a dimly lit corridor. There are doors to your left and right.");
            } else {
                output.html("I don't understand that command.");
            }
            break;
        case "room2": 
            output.html("You are in room 2.");
            if (userInput.toLowerCase() === "go back") {
            output.html("You go back to corridor.");
            gameState.previousRoom = "room1";
            gameState.currentRoom = "corridor1";
            drawCorridor1();
          } else if (userInput.toLowerCase() === "start over") {
            output.html("You start over.");
            gameState.previousRoom = "";
            gameState.currentRoom = "start";
            drawStart();
          } else {
            output.html("I don't understand that command.");
          }
            break;

          case "room3": 
        output.html("You are in room 3.");
        if (userInput.toLowerCase() === "go back") {
            output.html("You go back to corridor.");
            gameState.previousRoom = "room1";
            gameState.currentRoom = "corridor1";
            drawCorridor1();
            mirrorState = false
          } else if (userInput.toLowerCase() === "start over") {
            output.html("You start over.");
            gameState.previousRoom = "";
            gameState.currentRoom = "start";
            drawStart();
            mirrorState = false
          } else if (userInput.toLowerCase() === "look around") {
                output.html("The dimly-lit old room was filled with dust, and as you slowly walked towards the center, you couldn't help but notice the eerie feeling of being watched from the wired mirror on your left.")
          }else if (userInput.toLowerCase() === "mirror") {
            output.html("You freeze in terror as you stare at your reflection in the old, dusty mirror in front of you, but the longer you look, the more you realize that the twisted, contorted figure staring back at you .")
            mirrorState = true;
          }else {
            output.html("I don't understand that command.");}
        break;
 }
}

function drawStart() {
  image(start, 0, 0, width, height);
  stroke(255);
  strokeWeight(2);
  textSize(15);
  text('Type "start" to begin.',10,20)
}

function drawCorridor1() {
  image(corridor, 0, 0, width, height);
  text("corridor",10,20);
  push();
  textSize(10);
  text("go left",10,150);
  text("go right",350,150);
  text("go back",10,390);
  text("look around",180,390);
  text("start over",350,390);
  pop();
}

function drawRoom1() {
  image(room1, 0, 0, width, height);
  text("room1",10,20);
  push();
  textSize(10);
  text("open door",176,150);
  text("look around",10, 390);
  text("start over",350,390);
  pop();
}

function drawRoom2() {
  image(room2, 0, 0, width, height);
  text("room2",10,20);
  push();
  textSize(10);
  text("go back",10,390);
  text("look around",180,390);
  text("start over",350,390);
  pop();
}

function drawRoom3() {
  image(room3, 0, 0, width, height);
  text("room3",10,20);
  push();
  textSize(10);
  text("go back",10,390);
  text("mirror",10,200);
  text("look around",180,390);
  text("start over",350,390);
  pop();
  
}

function drawMirror(){
  image(video, 100, 100, 200, 200);
  filter(POSTERIZE, 2)
  filter(GRAY);
  image(mirror, 0, 0, width, height);
  text("mirror",10,20);
  push();
  textSize(10);
  text("go back",10,390);
  text("start over",350,390);
  pop();
}