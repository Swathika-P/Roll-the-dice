var randomNumber1 = Math. floor(Math.random() * 6) + 1;
var randomNumber2 = Math. floor(Math.random() * 6) + 1;
var randomimg1 = "images/dice" + randomNumber1 +".png";
var randomimg2 = "images/dice" + randomNumber2 +".png";
console.log(randomNumber1, randomNumber2)
document.querySelectorAll("img")[0].setAttribute("src",randomimg1);
document.querySelectorAll("img")[1].setAttribute("src",randomimg2);
var win;
if(randomNumber1 > randomNumber2){
   win = "Player 1 won";
}else if(randomNumber1 < randomNumber2){
    win = "Player 2 won";
}else{
    win = "Draw!!";
}
document.querySelector("h1").innerHTML = win;
