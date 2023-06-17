let mapGeoLeft = -73.9907;
let mapGeoRight = -73.9397;
let mapGeoTop = 40.802;
let mapGeoBottom = 40.7634;
let backgroundMap, sq;
let lat, lon, geox, geoy, co;


function preload(){
  backgroundMap = loadImage('NYCMAP.png');
  backgroundMap.resize(800,800);
  table1 = loadTable("2018_Central_Park_Squirrel_Census_-_Squirrel_Data.csv", "csv", "header"); 
}

function setup() {
  createCanvas(600, 600);
}

function drawLonLat(lon, lat, n, r, co){
  geox = (width * (lon - mapGeoLeft) / (mapGeoRight - mapGeoLeft));
  geoy = height - (height * (lat - mapGeoBottom) / (mapGeoTop - mapGeoBottom));
  fill(co);
  circle(geox, geoy, r);
  textSize(r);
  // text(n, geox, geoy);
}

function drawLonLatDif(lon, lat, n, r, co){
  geox = (width * (lon - mapGeoLeft) / (mapGeoRight - mapGeoLeft));
  geoy = height - (height * (lat - mapGeoBottom) / (mapGeoTop - mapGeoBottom));
  // circle(geox, geoy, r);
  fill(co);
  textSize(r);
  text(n, geox, geoy);
}

function draw() {
  background(backgroundMap);
  // filter(INVERT)
  stroke(0);
  strokeWeight(0.2);
  fill(160);
  circle(20,20,15);
  textSize(13);
  text("Gray Fur",35,24);

  push();
  translate(0,20);
  fill(255,97,136);
  circle(20,20,15);
  textSize(13);
  text("Cinnamon Fur",35,24);
  pop();

  push();
  translate(0,40);
  fill(0);
  circle(20,20,15);
  textSize(13);
  text("Black Fur",35,24);
  pop();

  push();
  translate(0,60);
  fill(60, 222, 108);
  textSize(13);
  text("Eating",35,24);
  textSize(17)
  text("ツ゚",12,30);
  pop();

  push();
  translate(0,80);
  noFill();
  circle(20,20,15);
  textSize(13);
  fill(160)
  text("Size: Hectare Squirrel Number",35,24);
  pop();

  for (let r = 0; r < table1.getRowCount(); r++) {
    let tableRow = table1.rows[r];
    for (let c = 0; c < table1.getColumnCount(); c++) {
      lat = tableRow.get("Y");
      lon = tableRow.get("X");
      col = tableRow.get("Primary Fur Color");
      num = tableRow.get("Hectare Squirrel Number");
      eat = tableRow.get("Eating");
      s = map(num, 1, 23, 4, 30);

      if (col == "Gray"){
        co = color(160);
      } else if (col == "White"){
        co = color(255,255,255);
      } else if (col == "Cinnamon"){
        co = color(255, 97, 136);
      }
      else {
        co = color(0,0,0);
      }
      stroke(0);
      strokeWeight(0.2);
      if (eat == "true"){
        drawLonLatDif(lon, lat, "ツ゚", 10, color(60, 222, 108));
      } 
        drawLonLat(lon, lat, col, s, co);
      
      }
    }
  }
