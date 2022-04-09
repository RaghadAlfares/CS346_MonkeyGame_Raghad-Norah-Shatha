// Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/147-chrome-dinosaur.html
// https://youtu.be/l0HoJHc-63Q

// Google Chrome Dinosaur Game (Monkey, run!)
// https://editor.p5js.org/codingtrain/sketches/v3thq2uhk

let monkey;
let monkeyImg;
let bananaImg;
let backgroundImg;
let bananas = [];
let soundClassifier;


function preload() {
  const options = {
    probabilityThreshold: 0.95
  };
  soundClassifier = ml5.soundClassifier('SpeechCommands18w', options);
  monkeyImg = loadImage('monkey.png');
  bananaImg = loadImage('banana.png');
  backgroundImg = loadImage('background.jpg');
}

function mousePressed() {
  bananas.push(new Banana());
}

function setup() {
  createCanvas(1275, 550);
  monkey = new Monkey();
  soundClassifier.classify(gotCommand);
}

function gotCommand(error, results) {
  if (error) {
    console.error(error);
  }
  console.log(results[0].label, results[0].confidence);
  if (results[0].label == 'up') {
    monkey.jump();
  }
}

function keyPressed() {
  if (key == ' ') {
    monkey.jump();
  }
}

function draw() { //number of banana trees
  if (random(1) < 0.005) {
    bananas.push(new Banana());
  }

  background(backgroundImg);
  for (let b of bananas) {
    b.move();
    b.show();
    if (monkey.hits(b)) {
      console.log('game over');
      alert.innerHTML= "game over";
      noLoop();
    }
  }

  monkey.show();
  monkey.move();

}
