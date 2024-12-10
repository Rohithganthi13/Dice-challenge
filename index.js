var randomNumber1 = Math.floor(Math.random()*6 +1);
var randomDice = "dice"+randomNumber1+".png";
var randomSource="images/"+randomDice;
var dice1=document.querySelectorAll("img")[0];
dice1.setAttribute("src",randomSource);
var randomNumber2 =  Math.floor(Math.random()*6 +1);
var randomDice2 = "images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomDice2);
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player1 has won";
}else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player2 has won";
}else{
    document.querySelector("h1").innerHTML="It's a Tie";
}