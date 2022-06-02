const dice = document.querySelector("#diceImg");
const diceTwo = document.querySelector("#diceImg2");
const newGame = document.querySelector(".new-game");
const roll = document.querySelector(".roll");
const endTurn = document.querySelector(".end-turn");
const holdButton = document.querySelector(".hold");

// const playerTwo = document.querySelector(`.score2`);
let score, playerScore, gamePlay, attempts, turnPlayer;
score = [0, 0];
playerScore = 0;
turnPlayer = 0;
gamePlay = true;
attempts = 0;

//reset the results
const reset = () => {
    playerScore = 0;
    attempts = 0;
    document.querySelector(".score0").textContent = "0";
    document.querySelector(".score1").textContent = "0";
    dice.src = `./images/dice-1.png`;
    diceTwo.src = `./images/dice-2.png`;
}

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
    alert("Cheaters never prosper, you only get three rolls...");
    nextPlayer();
  }
});

//function that calls on the player to play, beware to not over roll the dices
const nextPlayer = () => {
  turnPlayer === 0 ? (turnPlayer = 1) : (turnPlayer = 0);
  reset();
};



//End your turn if you over shot the dices
endTurn.addEventListener("click", () => {
  turnPlayer === 0 ? (turnPlayer = 1) : (turnPlayer = 0);
  reset();
});

//Start new game 
newGame.addEventListener("click", () => {
    if (turnPlayer === 1) {
        turnPlayer = 0
    }
    reset()
});

//Building the Hold button 
holdButton.addEventListener("click", () => {
    if (gamePlay) {
        turnPlayer === 0 ? (turnPlayer = 1) : (turnPlayer = 0);
        attempts = 0;
        playerScore = 0;
        dice.src = `./images/dice-1.png`;
        diceTwo.src = `./images/dice-2.png`;
        score[turnPlayer] += playerScore;
        document.querySelector(`.score${turnPlayer}`).textContent = score[turnPlayer];

    }
    // else {
    //     nextPlayer();
    // }
});

