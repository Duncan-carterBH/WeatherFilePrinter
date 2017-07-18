


var message = "Weather",
  font,
  bounds, // holds x, y, w, h of the text's bounding box
  fontsize = 60,
  x, y; // x and y coordinates of the text

function preload() {
  font = loadFont('assets/RobotoSlab-Bold.ttf');
}

function setup() {
  var c = createCanvas(windowWidth, windowHeight);
  c.drop(gotFile);
  // set up the font
  textFont(font);
  textSize(fontsize);

  // get the width and height of the text so we can center it initially
  bounds = font.textBounds(message, 0, 0, fontsize);
  x = width / 2 - bounds.w / 2;
  y = height / 2 - bounds.h / 2;
  
}

function gotFile(file) {
  var img = createImg(file.data).hide();
  // Draw the image onto the canvas
  image(img, 0, 0, width, height);
}

function draw() {
  // instead of clearing the background, fade it by drawing
  // a semi-transparent rectangle on top
  fill(204, 120);
  rect(0, 0, width, height);

  // write the text in black and get its bounding box
  fill(0);
  text(message, x, y);
  bounds = font.textBounds(message,x,y,fontsize);

  // check if the mouse is inside the bounding box and tickle if so
  if ( mouseX >= bounds.x && mouseX <= bounds.x + bounds.w &&
    mouseY >= bounds.y && mouseY <= bounds.y + bounds.h) {
    x += random(-5, 5);
    y += random(-5, 5);
  }
}