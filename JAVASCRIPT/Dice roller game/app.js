let button = document.getElementById('diceRollerbutton');
const diceOne = document.getElementById('placeholder');
const diceTwo = document.getElementById('placeholder');
let textPlayer = document.getElementById('textPlayer');

//function change dice

function changeDice() {
    const firstRandomDice = Math.floor(Math.random() * 6) + 1;
    const secondRandomDice = Math.floor(Math.random() *6) +1;
    diceOne.innerHTML =`<img src="assets/dice${firstRandomDice}.png" style="he">`;
    diceTwo.innerHTML = `<img src= "assets/dice${secondRandomDice}.png" style="hello">`;
    if (firstRandomDice)

}