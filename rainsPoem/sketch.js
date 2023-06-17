let poem = "The night sky is black, the stars are gone, A world without light, without a dawn. The moon is pale, the clouds thick, A world where nothing is seen or quick."; // enter the full text of your poem inbetween the quotation marks

let poemWords;
let rainingLetters = [];

function setup() {
   createCanvas(windowWidth, windowHeight);
   poemWords = poem.split(" ");

   for (let i = 0; i < poemWords.length; i++) {
      rainingLetters[i] = new Letter(poemWords[i], i * width/poemWords.length, -100);         
   }
}

function draw() {
   background(0, 20);
   fill(255);
   noStroke();

   for (let i = 0; i < rainingLetters.length; i++) {
       rainingLetters[i].show();
       rainingLetters[i].update();  
   }
}

class Letter {
    constructor(letter, x, y) {
        this.letter = letter;
        this.x = x;
        this.y = y;
        this.gravity = random(0.001,3);
        this.size = random(10,40);
    }

    show() {
        textSize(this.size);
        text(this.letter, this.x, this.y);
    }

    update() {                    
        this.y += this.gravity;     
        if (this.y > height){
            this.y = -100;
        } 
    }
}
