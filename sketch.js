let circleX, circleY, circleSpeedX, circleSpeedY;
let circleXtwo, circleYtwo, circleSpeedXtwo, circleSpeedYtwo;
let circleColor, circleColorTwo;

function setup() {
  createCanvas(800, 600);
  resetShapes();
}

function draw() {
  background(220);
  
  // pink circle
  fill(circleColor);
  ellipse(circleX, circleY, 120);
  circleX += circleSpeedX;
  circleY += circleSpeedY;
  
  // purple circle
  fill(circleColorTwo);
  ellipse(circleXtwo, circleYtwo, 120);
  circleXtwo += circleSpeedXtwo;
  circleYtwo += circleSpeedYtwo;
  
  // collisions pink circle
  if (circleX < 70 || circleX > width - 70) circleSpeedX *= -1;
  if (circleY < 70 || circleY > height - 70) circleSpeedY *= -1;

  // collisiens purple circle
  if (circleXtwo < 70 || circleXtwo > width - 70) circleSpeedXtwo *= -1;
  if (circleYtwo < 70 || circleYtwo > height - 70) circleSpeedYtwo *= -1;

  // collisions betwen circle
  if (dist(circleX, circleY, circleXtwo, circleYtwo) < 120) {
    circleSpeedX *= -1;    
    circleSpeedY *= -1;
    circleSpeedXtwo *= -1; 
    circleSpeedYtwo *= -1;
  }
}

function resetShapes() {
  circleX = random(25, width - 25);
  circleY = random(25, height - 25);
  circleSpeedX = random(2, 5);
  circleSpeedY = random(2, 5);
  
  // direction pink circle X
  if (random() > 0.5) {
    circleSpeedX *= 1; 
  } else {
    circleSpeedX *= -1; 
  }

  // direction pink circle Y
  if (random() > 0.5) {
    circleSpeedY *= 1; 
  } else {
    circleSpeedY *= -1; 
  }
  
  circleXtwo = random(30, width - 30);
  circleYtwo = random(30, height - 30);
  circleSpeedXtwo = random(2, 5);
  circleSpeedYtwo = random(2, 5);

  // direction purple circle x
  if (random() > 0.5) {
    circleSpeedXtwo *= 1; 
  } else {
    circleSpeedXtwo *= -1; 
  }

  // direction purple circle Y
  if (random() > 0.5) {
    circleSpeedYtwo *= 1; 
  } else {
    circleSpeedYtwo *= -1; 
  }

  // circle colors
  circleColor = color(255, 50, 150);   // pink circle
  circleColorTwo = color(100, 100, 250); // purple circle
}function resetShapes() {
  circleX = random(25, width - 25);
  circleY = random(25, height - 25);
  circleSpeedX = random(2, 5);
  circleSpeedY = random(2, 5);
  
  // direction of speed pink circle X
  if (random() > 0.5) {
    circleSpeedX *= 1; // Positive direction
  } else {
    circleSpeedX *= -1; // Negative direction
  }

  // direction of speed pink circle Y
  if (random() > 0.5) {
    circleSpeedY *= 1; // Positive direction
  } else {
    circleSpeedY *= -1; // Negative direction
  }
  
  circleXtwo = random(30, width - 30);
  circleYtwo = random(30, height - 30);
  circleSpeedXtwo = random(2, 5);
  circleSpeedYtwo = random(2, 5);

  // direction of speed purple circle X
  if (random() > 0.5) {
    circleSpeedXtwo *= 1; // Positive direction
  } else {
    circleSpeedXtwo *= -1; // Negative direction
  }

  // direction of purple circle Y
  if (random() > 0.5) {
    circleSpeedYtwo *= 1; // Positive direction
  } else {
    circleSpeedYtwo *= -1; // Negative direction
  }

  // circle colors
  circleColor = color(255, 50, 150);   // First circle color
  circleColorTwo = color(100, 100, 250); // Second circle color
}

// Reset on key press
function keyPressed() {
  resetShapes();
}
