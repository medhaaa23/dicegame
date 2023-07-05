var name1 = prompt("enter player 1 name:");
var name2 = prompt("enter player 2 name:");

document.querySelectorAll("p")[0].innerHTML = name1;
document.querySelectorAll("p")[1].innerHTML =   name2;

var n1 =Math.floor( Math.random() * 6) + 1;
var randomDiceImageSource = "images/dice"+n1+".png";
console.log(randomDiceImageSource);
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomDiceImageSource);

var n2 = Math.floor(Math.random() * 6)+1;
var randomDiceImage2 = "images/dice"+n2+".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomDiceImage2);

if(n1>n2){
    document.querySelector("h1").innerHTML = "🚩 "+name1+ " wins!"
}else if(n1<n2){
    document.querySelector("h1").innerHTML = name2+" wins!" +" 🚩"
}else{
    document.querySelector("h1").innerHTML = "Draw!"
}