window.addEventListener("load", init);

//Globals

//Available levels
const levels = {
  easy: 5,
  medium: 3,
  hard: 2,
};

// To change level
const currentLevel = levels.medium;

let time = currentLevel;
let score = 0;
let isPlaying;

// Trying to get the buttons to have function

// DOM Elements

const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector("#current-word");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const message = document.querySelector("#message");
const seconds = document.querySelector("#seconds");
const easyButton = document.querySelector("#easybutton");
const mediumButton = document.querySelector("#mediumbutton");
const hardButton = document.querySelector("#hardbutton");

const words = [
  "hat",
  "fax",
  "countryside",
  "resignation",
  "laundry",
  "perfect",
  "conception",
  "tree",
  "leftovers",
  "midnight",
  "opposition",
  "defeat",
  "quality",
  "decoration",
  "language",
  "tongue",
  "visual",
  "gravity",
  "tower",
  "habitat",
  "tract",
  "lift",
  "child",
  "death",
  "contribution",
  "psychology",
  "doctor",
  "berry",
  "parachute",
  "prison",
  "moral",
];

// Initialize Game
function init() {
  //Show number of seconds in UI
  seconds.innerHTML = currentLevel;

  // Load word from array
  showWord(words);
  // Start matching on word input
  wordInput.addEventListener("input", startMatch);
  // Call count down every second
  setInterval(countdown, 1000);
  // Check game status
  setInterval(checkStatus, 50);
}

//Start match
function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = "";
    score++;
  }

  // If score is -1 , display 0
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}

//Match currentWord to wordInput
function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = "Correct!!!";
    return true;
  } else {
    message.innerHTML = "";
    return false;
  }
}

// Pick & show random word
function showWord(words) {
  //Generate random array index
  const randIndex = Math.floor(Math.random() * words.length);
  // Output a random word
  currentWord.innerHTML = words[randIndex];
}

//Countdown timer
function countdown() {
  // Make sure time is not run out
  if (time > 0) {
    // Decrement
    time--;
  } else if (time === 0) {
    // Game is over
    isPlaying = false;
  }
  // Show time
  timeDisplay.innerHTML = time;
}

// Check game status
function checkStatus() {
  if (time === 0) {
    message.innerHTML = "Game Over !!!";
    score = -1;
  }
}
