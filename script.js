const dice = document.querySelector("#diceImg");
const diceTwo = document.querySelector("#diceImg2");
const newGame = document.querySelector(".new-game");
const roll = document.querySelector(".roll");
const endTurn = document.querySelector(".end-turn");
const holdButton = document.querySelector(".hold");
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
//initial active player
player1.style.backgroundColor = "#E3E1E1";


// const playerTwo = document.querySelector(`.score2`);
let score, playerScore, gamePlay, attempts, turnPlayer;
score = [0, 0];
playerScore = 0;
turnPlayer = 0;
gamePlay = true;
attempts = 0;

//reset the results
const reset = () => {
    score = [0, 0];
    playerScore = 0;
    attempts = 0;
    document.querySelector(".score0").textContent = "0";
    document.querySelector(".score1").textContent = "0";
    dice.src = `./images/dice-1.png`;
    diceTwo.src = `./images/dice-2.png`;
    document.querySelector(`.scoreBoard-0`).textContent = "0";
    document.querySelector(`.scoreBoard-1`).textContent = "0";
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
if (turnPlayer === 0)  {
    turnPlayer = 1
    player2.style.backgroundColor = "#E3E1E1";
    player1.style.backgroundColor = "#f8f8f8";
} else {
    turnPlayer = 0;
    player1.style.backgroundColor = "#E3E1E1";
    player2.style.backgroundColor = "#f8f8f8";
} 
  reset();
};



//End your turn if you over shot the dices
endTurn.addEventListener("click", () => {
  turnPlayer === 0 ? (turnPlayer = 1) : (turnPlayer = 0);
  reset();
});

//Start new game 
newGame.addEventListener("click", () => {
    turnPlayer === 0 ? (turnPlayer = 1) : (turnPlayer = 0);
    if (turnPlayer === 1) {
        turnPlayer = 0
    }
    reset()
});


//Building the Hold button 
holdButton.addEventListener("click", () => {
    if (gamePlay) {
        score[turnPlayer] += playerScore;
        document.querySelector(`.scoreBoard-${turnPlayer}`).textContent = score[turnPlayer];
        //winning condition
        if (score[turnPlayer] === 21) {
            document.getElementById(`player${turnPlayer}`).style.backgroundColor = "#8ff879";
            alert("You have won the game of 21!!! congrats");
            reset();
            gamePlay = false;
        } else if (score[turnPlayer] > 21) {
            score = [0, 0];
            nextPlayer();
        } 
    }
});

//how to switch between active and none active 







