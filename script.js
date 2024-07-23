function rollDice1(){
    var dice1 = Math.floor(Math.random() * 6) + 1;
    return dice1;
}
function rollDice2(){
    var dice2 = Math.floor(Math.random() * 6) + 1;
    return dice2;
}

var valueOfDice1 = rollDice1();
var valueOfDice2 = rollDice2();

if(valueOfDice1 > valueOfDice2){
    document.querySelector("h1").innerText = "Player 1 Wins!";
    
}
else if(valueOfDice1 < valueOfDice2){
    document.querySelector("h1").innerText = "Player 2 Wins!";
}
else{
    document.querySelector("h1").innerText = "It's a tie!";
}

if(valueOfDice1 === 1){
    document.querySelector(".img1").setAttribute("src" , "./images/dice1.png")
}
else if (valueOfDice1 === 2){
    document.querySelector(".img1").setAttribute("src","./images/dice2.png")
}
else if (valueOfDice1 === 3){
    document.querySelector(".img1").setAttribute("src","./images/dice3.png")
}
else if (valueOfDice1 === 4){
    document.querySelector(".img1").setAttribute("src","./images/dice4.png")
}
else if (valueOfDice1 === 5){
    document.querySelector(".img1").setAttribute("src","./images/dice5.png")
}
else {
    document.querySelector(".img1").setAttribute("src","./images/dice6.png")
}

if(valueOfDice2 === 1){
    document.querySelector(".img2").setAttribute("src" , "./images/dice1.png")
}
else if (valueOfDice2 === 2){
    document.querySelector(".img2").setAttribute("src","./images/dice2.png")
}
else if (valueOfDice2 === 3){
    document.querySelector(".img2").setAttribute("src","./images/dice3.png")
}
else if (valueOfDice2 === 4){
    document.querySelector(".img2").setAttribute("src","./images/dice4.png")
}
else if (valueOfDice2 === 5){
    document.querySelector(".img2").setAttribute("src","./images/dice5.png")
}
else {
    document.querySelector(".img2").setAttribute("src","./images/dice6.png")
}