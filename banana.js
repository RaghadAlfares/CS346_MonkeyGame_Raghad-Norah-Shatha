// Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/147-chrome-dinosaur.html
// https://youtu.be/l0HoJHc-63Q

// Google Chrome Dinosaur Game (Unicorn, run!)
// https://editor.p5js.org/codingtrain/sketches/v3thq2uhk

class Banana {
  constructor() {
    this.bSize = 150; //size of banana
    this.x = width;
    this.y = height - this.bSize;
  }

  move() {
    this.x -= 16;
  }

  show() {
    image(bananaImg, this.x, this.y, this.bSize, this.bSize);

    // fill(255, 50);
    // ellipseMode(CORNER);
    // ellipse(this.x, this.y, this.r, this.r);
  }
}
