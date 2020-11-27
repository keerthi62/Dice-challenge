var img1 = Math.floor(Math.random() * 6) + 1;
  	var img2 = Math.floor(Math.random() * 6) + 1;
    document.getElementsByTagName('img')[0].src = "/images/dice" + img1 + ".png";
    document.getElementsByTagName('img')[1].src = "/images/dice" + img2 + ".png";
    if (img1 > img2) {
    	document.getElementById("heading").innerHTML = "🚩Player 1 Wins!";
    }
    else if(img2 > img1){
        document.getElementById("heading").innerHTML = "Player 2 Wins!🚩";
    }
    else{
    	document.getElementById("heading").innerHTML = "Draw!";
    }
