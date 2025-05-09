"use strict";

/*
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "🎉 Correct Number!";
console.log(document.querySelector(".message").textContent);

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);
*/

let score = 20;
let highScore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

const displayMessage = (message) =>
  (document.querySelector(".message").textContent = message);

const displayScore = (score) =>
  (document.querySelector(".score").textContent = score);

const displaySecretNumber = (secretNumber) =>
  (document.querySelector(".number").textContent = secretNumber);

const changeStyling = function (backgroundColor, numberWidth) {
  document.querySelector("body").style.backgroundColor = backgroundColor;
  document.querySelector(".number").style.width = numberWidth;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // When no number
  if (!guess) {
    displayMessage("⛔️ No number!");
  }
  // When wins
  else if (guess === secretNumber) {
    displaySecretNumber(secretNumber);
    displayMessage("🎉 Correct Number!");
    changeStyling("#60b347", "30rem");
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  }
  // When guess is not right
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        `${guess > secretNumber ? "📈 Too high!" : "📉 Too low!"}`
      );
      score--;
      displayScore(score);
    } else {
      displayMessage("💥 You lost the game!");
      displayScore(0);
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".guess").value = "";
  displayMessage("Start guessing...");
  displaySecretNumber("?");
  displayScore(score);
  changeStyling("#222", "15rem");
});
//
//
//
// Original Code
// let score = 20;
// let highScore = 0;
// let secretNumber = Math.trunc(Math.random() * 20) + 1;

// document.querySelector(".check").addEventListener("click", function () {
//   const guess = Number(document.querySelector(".guess").value);

//   // When no number
//   if (!guess) {
//     document.querySelector(".message").textContent = "⛔️ No number!";

//     // When wins
//   } else if (guess === secretNumber) {
//     document.querySelector(".number").textContent = secretNumber;
//     document.querySelector(".message").textContent = "🎉 Correct Number!";
//     document.querySelector("body").style.backgroundColor = "#60b347";
//     document.querySelector(".number").style.width = "30rem";
//     if (score > highScore) {
//       highScore = score;
//       document.querySelector(".highscore").textContent = highScore;
//     }
//     // When guess is not right
//   } else if (guess !== secretNumber) {
//     if (score > 1) {
//       document.querySelector(".message").textContent = `📈 Too ${
//         guess > secretNumber ? "high" : "low"
//       }!`;
//       score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//       document.querySelector(".message").textContent = "💥 You lost the game!";
//       document.querySelector(".score").textContent = 0;
//     }
//   }
//   //   When too high
//   else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector(".message").textContent = "📈 Too high!";
//       score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//       document.querySelector(".message").textContent = "💥 You lost the game!";
//       document.querySelector(".score").textContent = 0;
//     }

//     // When too low
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector(".message").textContent = "📉 Too low!";
//       score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//       document.querySelector(".message").textContent = "💥 You lost the game!";
//       document.querySelector(".score").textContent = 0;
//     }
//   }
// });

// document.querySelector(".again").addEventListener("click", function () {
//   score = 20;
//   secretNumber = Math.trunc(Math.random() * 20) + 1;

//   document.querySelector(".guess").value = "";
//   document.querySelector(".message").textContent = "Start guessing...";
//   document.querySelector(".number").textContent = "?";
//   document.querySelector(".score").textContent = score;

//   document.querySelector("body").style.backgroundColor = "#222";
//   document.querySelector(".number").style.width = "15rem";
// });
