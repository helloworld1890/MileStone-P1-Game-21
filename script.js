const dice = document.querySelector(".dice");
const diceTwo = document.querySelector(".dice2");
const playerOne = document.querySelector(".score1");
const playerTwo = document.querySelector(".score2");
const newGame = document.querySelector(".new-game");
const roll = document.querySelector(".roll");
const endGame = document.querySelector(".end-game");
//Randomizing a number from 1 to 6
let number =  Math.floor((Math.random() * 6) + 1);

//dice 1
let imgOne = document.createElement("img");
imgOne.src = `./images/dice-${number}.png`;

// dice 2
let imgTwo = document.createElement("img");
imgTwo.src = `./images/dice-${number}.png`;


//Roll effect
roll.addEventListener("click", () => {
    dice.appendChild(imgOne);
    diceTwo.appendChild(imgTwo);
  
})




