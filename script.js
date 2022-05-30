const dice = document.querySelector("#diceImg");
const diceTwo = document.querySelector("#diceImg2");
const playerOne = document.querySelector(".score1");
const playerTwo = document.querySelector(".score2");
const newGame = document.querySelector(".new-game");
const roll = document.querySelector(".roll");
const endGame = document.querySelector(".end-game");
const hold = document.querySelector(".hold");

let score, playerScore, activePlayer, gamePlay, attempts;
score = [0, 0];
playerScore = 0;
activePlayer = 0;
gamePlay = true;
attempts = 3;

//Roll effect
roll.addEventListener("click", () => {
  //Randomizing a number from 1 to 6
  let rollDice1 = Math.floor(Math.random() * 6 + 1);
  let rollDice2 = Math.floor(Math.random() * 6 + 1);

  dice.src = `./images/dice-${rollDice1}.png`;
  diceTwo.src = `./images/dice-${rollDice2}.png`;

  //Player logic Adding points
  if (rollDice1 !== 0 && rollDice2 !== 0) {
    playerScore = playerScore + rollDice1 + rollDice2;
    playerOne.textContent = playerScore;
  } else {
      nextPlayer();
  }
});



const nextPlayer = () => {
    activePlayer === 0 ? activePlayer === 1 : activePlayer === 0;
}