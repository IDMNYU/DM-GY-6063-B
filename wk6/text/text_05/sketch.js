var thefont = new Array(4);
var fphases = new Array(4);
var testphase = 0;
var speed = 0.01;


var fsize = 9;
//var insideColor = 0;
//var fontCount = 0;

var phrase = 'my cat has ticks'; // hey baby, i'm an aaaarraaaaaaaay
// make an array out of a string
var phrasearray = phrase.split(' '); // parsing the array for spaces, making new indices from that


function preload() {

  //thefont = loadFont('data/font1.otf');
  for (var i = 0; i < thefont.length; i++) {
    thefont[i] = loadFont('data/font' + i + '.otf'); // concatenating the name of the file
  }
}

function setup() {
  createCanvas(800, 600);
  background(255);
  fill(0);
  stroke(0);
  textFont(thefont[0], fsize); // which font and the size


  for (var i = 0; i < fphases.length; i++) {
    fphases[i] = random(0.0, TWO_PI);
  }

}

function draw() {
  background(255);
  var thex = 50;
  var they = height / 2;

  speed = mouseX / width * 0.5;
  testphase = (testphase + speed) % TWO_PI;
  var h = map(sin(testphase), -1.0, 1.0, height, 0);
  ellipse(width / 2, h, 20, 20);

  var s;

  for (var i = 0; i < phrasearray.length; i++) {
    s = map(sin(fphases[i]), -1.0, 1.0, 9, 64);
    textFont(thefont[i], s);
    text(phrasearray[i], thex, they);
    thex += textWidth(phrasearray[i] + ' ');
    fphases[i] = (fphases[i] + speed) % TWO_PI;
  }
  /*
  s = map(sin(fphases[0]), -1.0, 1.0, 9, 64);
  textFont(thefont[0], s);
  text('my', thex, they);
  thex += textWidth('my ');
  fphases[0] = (fphases[0] + speed) % TWO_PI;
  
  s = map(sin(fphases[1]), -1.0, 1.0, 9, 64);
  textFont(thefont[1], s);
  text('cat' ,thex, they);
  thex += textWidth('cat ');
  fphases[1] = (fphases[1] + speed) % TWO_PI;
  
  s = map(sin(fphases[2]), -1.0, 1.0, 9, 64);
  textFont(thefont[2], s);
  text('has' ,thex, they);
  thex += textWidth('has '); // with regard to the text you just drew
  fphases[2] = (fphases[2] + speed) % TWO_PI;
  
  s = map(sin(fphases[3]), -1.0, 1.0, 9, 64);
  textFont(thefont[3], s);
  text('ticks' ,thex, they);
  thex += textWidth('ticks ');// totally optional
  fphases[3] = (fphases[3] + speed) % TWO_PI;
 */
  /*
  fill(insideColor, 0, 0);
  text('my cat has ticks', mouseX, mouseY);
  fsize++;
  textSize(fsize);

  if (fsize > 56) fsize = 9;

  if (frameCount % 20 === 0) { // new in p5 --> 3x= when comparing to zero
    insideColor = 255 - insideColor;
    fontCount = (fontCount + 1) % thefont.length;
    textFont(thefont[fontCount]);
  }
  
  */
}