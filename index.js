// alert("working!");
var randomNumber1 =  Math.floor(Math.random() * 6) + 1;
var randomNumber2 =  Math.floor(Math.random() * 6) + 1;

document.querySelector(".img1").setAttribute("src", "images/dice" +randomNumber1+".png");
document.querySelector(".img2").setAttribute("src", "images/dice" +randomNumber2+".png");

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 is wins!";
} 
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 is wins!";
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
}
// var randomNumber1 =  Math.floor(Math.random() * 6) + 1;
// var randomDiceImage = "dice" + randomNumber1 +".png";
// var randomImageSrc = "images/" + randomDiceImage;
// var image1 = document.querySelectorAll("img")[0];

// image1.setAttribute("src", randomImageSrc);
