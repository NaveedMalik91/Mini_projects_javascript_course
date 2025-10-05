let num = Math.floor((Math.random() * 100)+1); //generates number form 1-100
let guesses = 0;

while (true) {
    const prompt = require("prompt-sync")();
    let user = Number.parseInt(prompt("Enter your number: "));
    
    if (num > user) {
        console.log("The enterred number is lesser than actual number\n");
        
    } else if(num < user) {
        console.log("The enterred number is greater than actual number\n");
    }
    else if(num == user){
        console.log("Congratulations!! you have guessed the right one\n");
        break;

    }
    guesses++;

}
console.log("Your score is: ",100-guesses);