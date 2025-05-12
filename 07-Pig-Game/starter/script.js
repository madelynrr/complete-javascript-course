"use strict";

// Selecting Elements
const player0Element = document.querySelector(".player--0");
const player1Element = document.querySelector(".player--1");
const score0Element = document.querySelector("#score--0");
const score1Element = document.getElementById("score--1");
const diceElement = document.querySelector(".dice");

const current0Element = document.getElementById("current--0");
const current1Element = document.getElementById("current--1");

const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

let playing;
let scores;
let activePlayer;
let currentScore;

const init = function () {
  playing = true;
  scores = [0, 0];
  activePlayer = 0;
  currentScore = 0;

  score0Element.textContent = 0;
  score1Element.textContent = 0;

  current0Element.textContent = 0;
  current1Element.textContent = 0;

  diceElement.classList.add("hidden");
  player0Element.classList.remove("player--winner");
  player1Element.classList.remove("player--winner");

  player0Element.classList.add("player--active");
};

init();
