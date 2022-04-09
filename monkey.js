// Daniel Shiffman
// https://thecodingbanana.com/CodingChallenges/147-chrome-dinosaur.html
// https://youtu.be/l0HoJHc-63Q

// Google Chrome Dinosaur Game (Unicorn, run!)
// https://editor.p5js.org/codingbanana/sketches/v3thq2uhk

class Monkey {
  constructor() {
    this.mSize = 100; //size of monkey
    this.x = 70;
    this.y = height - this.mSize;
    this.ySpeed = 0; //speed on y axis
    this.gravity = 2;
  }

  jump() {
    if (this.y == height - this.mSize) {
      this.ySpeed = -35;
    }
  }

  hits(banana) {
    let x1 = this.x + this.mSize * 0.5;
    let y1 = this.y + this.mSize * 0.5;
    let x2 = banana.x + banana.bSize * 0.5;
    let y2 = banana.y + banana.bSize * 0.5;
    return collideCircleCircle(x1, y1, this.mSize, x2, y2, banana.bSize);
  }

  move() {
    this.y += this.ySpeed;
    this.ySpeed += this.gravity;
    this.y = constrain(this.y, 0, height - this.mSize);
  }

  show() {
    image(monkeyImg, this.x, this.y, this.mSize, this.mSize);

    // fill(255, 50);
    // ellipseMode(CORNER);
    // ellipse(this.x, this.y, this.mSize, this.mSize);
  }
}
