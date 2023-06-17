/*
 * An easy to use ASCII renderer function,
 * optimized for simplicity and flexibility
 */

function rendererAscii(
    input, // the input P5 Element
    fnt, // the font object
    fontSize, // the font size
    chars, // the charset to use
    tilesX, // the amount of cols
    tilesY, // the amount of rows
    spread, // the magnitude of the grid from the center
    bg, // the background-color
    fg // the foreground-color
  ) {
    let pg;
  
    pg = createGraphics(width, height);
    pg.background(bg);
    pg.fill(fg);
    pg.noStroke();
  
    let tileW = width / tilesX;
    let tileH = height / tilesY;
  
    pg.fill(0);
    pg.textFont(fnt);
    pg.textSize(fontSize);
    pg.textAlign(CENTER, CENTER);
    pg.translate(width / 2, height / 2);
  
    let buffer = input.get();
  
    for (let x = 0; x < tilesX; x++) {
      for (let y = 0; y < tilesY; y++) {
        let px = int(x * tileW);
        let py = int(y * tileH);
        let c = buffer.get(px, py);
        
        pg.fill(c)
        let ch = chars.charAt(
          int(map(brightness(c), 0, 100, 0, chars.length - 1))
        );
  
        let posX = map(x, 0, tilesX, -spread, spread);
        let posY = map(y, 0, tilesY, -spread, spread);
  
        pg.push();
        pg.translate(posX, posY);
        pg.text(ch, 0, 0);
        pg.pop();
      }
    }
  
    image(pg, 0, 0);
  }