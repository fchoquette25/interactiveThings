let circle1, circle2;

function setup() {
  createCanvas(800, 600);
  circle1 = new Circle(random(25, width - 25), random(25, height - 25), color(255, 50, 150));
  circle2 = new Circle(random(30, width - 30), random(30, height - 30), color(100, 100, 250));
}

function draw() {
  background(220);
  
  circle1.update();
  circle2.update();
  
  circle1.display();
  circle2.display();
  
  if (circle1.collidesWith(circle2)) {
    circle1.bounce();
    circle2.bounce();
  }
}

function keyPressed() {
  circle1.reset();
  circle2.reset();
}

class Circle {
  constructor(x, y, c) {
    this.x = x;
    this.y = y;
    this.diameter = 120;
    this.color = c;
    this.speedX = random(2, 5) * (random() > 0.5 ? 1 : -1);
    this.speedY = random(2, 5) * (random() > 0.5 ? 1 : -1);
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.checkBorders();
  }

  display() {
    fill(this.color);
    ellipse(this.x, this.y, this.diameter);
  }

  checkBorders() {
    if (this.x < this.diameter / 2 || this.x > width - this.diameter / 2) {
      this.speedX *= -1;
    }
    if (this.y < this.diameter / 2 || this.y > height - this.diameter / 2) {
      this.speedY *= -1;
    }
  }

  collidesWith(other) {
    return dist(this.x, this.y, other.x, other.y) < this.diameter;
  }

  bounce() {
    this.speedX *= -1;
    this.speedY *= -1;
  }

  reset() {
    this.x = random(diameter / 2, width - diameter / 2);
    this.y = random(diameter / 2, height - diameter / 2);
    this.speedX = random(2, 5) * (random() > 0.5 ? 1 : -1);
    this.speedY = random(2, 5) * (random() > 0.5 ? 1 : -1);
  }
}
