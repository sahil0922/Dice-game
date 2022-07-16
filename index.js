var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageDice1 = "dice"+randomNumber1+".png";
var randomImageDice2 = "dice"+randomNumber2+".png";

var randomImageSource1 = "images/"+randomImageDice1;
var randomImageSource2 = "images/"+randomImageDice2;


var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource1);

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);


if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}else{
    document.querySelector('h1').innerHTML = "It's a TIE!";
}



