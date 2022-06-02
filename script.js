const dice = document.querySelector("#diceImg");
const diceTwo = document.querySelector("#diceImg2");
const newGame = document.querySelector(".new-game");
const roll = document.querySelector(".roll");
const endGame = document.querySelector(".end-game");
const hold = document.querySelector(".hold");

// const playerTwo = document.querySelector(`.score2`);
let score, playerScore, activePlayer, gamePlay, attempts;
score = [0, 0];
playerScore = 0;
turnPlayer = 0;
gamePlay = true;
attempts = 0;

//Roll effect
roll.addEventListener("click", () => {
  //Randomizing a number from 1 to 6
  let rollDice1 = Math.floor(Math.random() * 6 + 1);
  let rollDice2 = Math.floor(Math.random() * 6 + 1);

  dice.src = `./images/dice-${rollDice1}.png`;
  diceTwo.src = `./images/dice-${rollDice2}.png`;

  //Player logic Adding points
  if (attempts === 0 || attempts === 1 || attempts === 2) {
    attempts += 1;
    console.log(attempts);
    playerScore = playerScore + rollDice1 + rollDice2;
    let player = document.querySelector(`.score${turnPlayer}`);
    player.textContent = playerScore;
  } else if (attempts === 3) {
    nextPlayer();
    attempts = 0;
  }
});

const nextPlayer = () => {
  turnPlayer === 0 ? (turnPlayer = 1) : (turnPlayer = 0);
  alert("Cheaters never prosper, you only get three rolls...");
  playerScore = 0;
  document.querySelector(".score0").textContent = "0";
  document.querySelector(".score1").textContent = "0";
  dice.src = `./images/dice-1.png`;
  diceTwo.src = `./images/dice-2.png`;
};
