function rollDice(){
    
    var randomnumber1=Math.floor(Math.random()*6)+1;
var randomimagesource1="dice"+ randomnumber1 + ".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src", randomimagesource1);

    
var randomnumber2=Math.floor(Math.random()*6)+1;
var randomimagesource2="dice"+ randomnumber2 + ".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src", randomimagesource2);

if(randomnumber1>randomnumber2){
    document.getElementById("play").innerHTML="Player 1 Wins!🎊"
}
else if(randomnumber2>randomnumber1){
    document.getElementById("play").innerHTML="Player 2 wins!🎊";
}
else{
    document.getElementById("play").innerHTML="Draw!🤝";
}
}

