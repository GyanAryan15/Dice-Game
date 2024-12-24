var randomNumber1 = Math.floor(Math.random()*6) +1 ;
var randomImageSource1 = "dice" + randomNumber1 + ".png" ;
var randomDiceImage1 = "images/" + randomImageSource1;
document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage1);

var randomNumber2 = Math.floor(Math.random()*6) +1 ;
var randomImageSource2 = "dice" + randomNumber2 + ".png" ;
var randomDiceImage2 = "images/" + randomImageSource2;
document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML = "Player 1 Wins ,now refresh the page";
}
else if (randomNumber1 < randomNumber2)
    {
        document.querySelector("h1").innerHTML = "Player 2 Wins ,  now refresh the page";

    }
    else
    {
        document.querySelector("h1").innerHTML = "draw , now refresh the page";
    }