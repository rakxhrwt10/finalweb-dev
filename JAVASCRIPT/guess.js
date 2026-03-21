// let max=prompt("enter your number")


// let rand=Math.floor(Math.random()*max)+1

// let guess=prompt("enter your number")



// while(true){


//     if(guess=="quit"){

//         console.log("quit game:");

//         break;
        
//     }

//     if(guess==rand){

//         console.log("congrats you winner ! and win 5000000 prize");

//         break;
        
//     }


//     else if(guess<rand){

//      console.log("you ent small number plz try again");
     
//     }

//     else{

//         console.log("you enter so large number try again!");
        
//     }
// }











let max = prompt("Enter your max number:");

let rand = Math.floor(Math.random() * max) + 1;

let guess = prompt("Guess the number:");

while (true) {

    if (guess == "quit") {
        console.log("Game quit!");
        break;
    }

    if (guess == rand) {
        console.log("Congrats! You won 5000000 prize!");
        break;
    }
    else if (guess < rand) {
        guess = prompt("Too small! Try again:");
    }
    else {
        guess = prompt("Too large! Try again:");
    }
}
