function getRandomSWG() {
    const options = ["S", "W", "G"];
    return options[Math.floor(Math.random() * options.length)];
}
let res = getRandomSWG();
let user_point = 0;
let comp_point = 0;
let user;
let n = 0;
while (n!=10) {
    user = prompt("Enter your choice- S/G/W: ");
    if (user == "G" && res == "S") {
        alert("You Won");
        user_point++;
        
    } else if(user == "W" && res == "G") {
        alert("You Won");
        user_point++;
    }
    else if(user == "S" && res == "W"){
        alert("You Won")
        user_point++;
    }

    else if (user == "G" && res == "W") {
        alert("You lost");
        comp_point++;
        
    } else if(user == "S" && res == "G") {
        alert("You lost");
        comp_point++;
    }
    else if(user == "W" && res == "S"){
        alert("You lost")
        comp_point++;
    }

    else if(user == "S" && res == "S" || user == "W" && res == "" || user == "G" && res == "G"){
        alert("Tie")
    }
   
    n++;
}

if (user_point > comp_point) {
   document.write("You won the game");
} else {
    document.write("Computer won the game");
}
