
const trex = document.querySelector(".trex");
const obstacle = document.querySelector(".obstacle");
const intro = document.querySelector(".intro");
let counter = 0;
let keyCode;
let highest_score = 0;
var scoreInterval = 5;
let score = 0;
function jump() {
  trex.classList.add("animate");
  setTimeout(() => {
    trex.classList.remove("animate");
  }, 500);
}

document.body.onkeyup = function (e) {
  if (e.keyCode == 32) {
    jump();
    obstacle.style.animation = "block 1s infinite linear";
    intro.style.display = "none";
    keyCode = e.keyCode;
  }
};

const checkDead = setInterval(function () {
  let trexPosition = parseInt(
    window.getComputedStyle(trex).getPropertyValue("bottom")
  );
  let obstacleLeft = parseInt(
    window.getComputedStyle(obstacle).getPropertyValue("left")
  );

  if (obstacleLeft < 50 && obstacleLeft > -50 && trexPosition <= 50) {
    obstacle.style.animation = "none";
    alert("Game Over. score: " + Math.floor(counter / 100));
    intro.style.display = "block";
    counter = 0;
    keyCode = "";
  } else {
    
    document.querySelector(".score").innerHTML = score;
    score = Math.floor(counter / 100);
    if (keyCode == 32) {
      counter++;
      if(score > highest_score){
        highest_score = score;
        document.querySelector(".Hscore").innerHTML = highest_score;
             document.querySelector(".Hscore").innerHTML = highest_score;
             localStorage.setItem("score", highest_score);
             
             document.querySelector("#score").innerHTML = localStorage.getItem("score");

      }
    }
  }
}, 10);
// function saveScore(){
    
//   //Retrieve the loggedInUsers details 
//   if(localStorage.loggedInUser !== undefined){
//       var user = JSON.parse(localStorage[localStorage.loggedInUser]);
      
//       //Check if the topScore is less than their score if it is update
//       if (user["topScore"] < score){
//       user["topScore"] = score;
//           localStorage[localStorage.loggedInUser] = JSON.stringify(user);
//       }
//   }
// }
