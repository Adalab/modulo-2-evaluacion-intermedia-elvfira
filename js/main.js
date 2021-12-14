"use strict";
//const
const button = document.querySelector(".js-button");
const selectedValue = document.querySelector(".js-select");
const indicationText = document.querySelector(".js-indication");
const playerValue = document.querySelector(".js-player");
const computerValue = document.querySelector(".js-computer");
const gameValue = document.querySelector(".js-games");

// generate random number
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
let randomNumber = getRandomNumber(10);
console.log(randomNumber)

//variable ini
let computerSelection = "";
let playerSelection = "";
let winner = "";

//game
function playGame() {
//computer selection
  if (randomNumber < 3) {
    computerSelection = 'stone';
  } else if (randomNumber >= 6) {
    computerSelection = 'paper';
  } else {
    computerSelection = 'scissor';
  } 

//player selection
  playerSelection = selectedValue.value
  
// who won? compare computerSelection and playerSelection
if (computerSelection === playerSelection) {
  winner = 'Empate';
} else if (computerSelection === 'stone') {
  if (playerSelection === 'paper') {
    winner = '¡Has ganado!';
    playerVictory();
  } else if (playerSelection === 'scissor') {
    winner = '¡Has perdido!';
    computerVictory();
  }
} else if (computerSelection === 'paper') {
  if (playerSelection === 'stone') {
    winner = '¡Has perdido!';
    computerVictory();
  } else if (playerSelection === 'scissor') {
    winner = '¡Has ganado!';
    playerVictory();
  }
} else if (computerSelection === 'scissor') {
  if (playerSelection === 'stone') {
    winner = '¡Has ganado!';
    playerVictory();
  } else if (playerSelection === 'paper') {
    winner = '¡Has perdido!';
    computerVictory();
  }
}
//show who won
  indicationText.innerHTML = winner;
}

//counter player
let playerCounter = 0;
function playerVictory() {
  playerCounter += 1;
  playerValue.innerHTML = `Jugador: ${playerCounter}`; 
}

//counter computer
let computerCounter = 0;
function computerVictory() {
  computerCounter += 1;
  computerValue.innerHTML = `Computadora: ${computerCounter}`; 
}

//counter games
let gameCounter = 0;
function anyGame() {
  gameCounter += 1;
  gameValue.innerHTML = `Partidas: ${gameCounter}`; 
}

//function event
function handlerClick(event) {
  event.preventDefault();
  playGame();
  anyGame();  
  randomNumber = getRandomNumber(10);
  console.log(randomNumber);
}

//eventListener
button.addEventListener("click", handlerClick);