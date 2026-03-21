//function

const { sortUserPlugins } = require("vite");

function sum(a ,b){


   let sum=a+b;


   return sum
}


function sub(a, b) {


    let diff = a -b;


    return diff
}


let s=sum(4,5)

let d=sub(5,4)

console.log(`sum is "${s}" `);
console.log(`sub is "${d}" `);



// function jackpot(number){



   
//     let jack = Math.floor(Math.random() * 1000) + 1;

//     if(jack==number){

//         console.log(`user is winnner ! and number is ${number} and jackpot number : ${jack}`);
         
//     }

//     else{

//         // console.log(`user is winnner ! and number is ${number} and jackpot number : ${jack}`);
//         console.log(`❌ You lost!
// Your number: ${number} 
// Jackpot number: ${jack}`);
//     }



  

//     console.log(jack);
    
    
// }

// let num = Number(prompt("Enter a number:"));

// let result=jackpot(num)


// function jackpot(number) {

//     let jack = Math.floor(Math.random() * 1000) + 1;

//     let i=1

//     while(i<=3){

//     if (jack === number) {

//         console.log(`🎉 You are WINNER!
// Your number: ${number}
// Jackpot number: ${jack}`);

//     } else {

//         console.log(`❌ You lost!
// Your number: ${number}
// Jackpot number: ${jack}`);
//     }

// }


// }

// let num = Number(prompt("Enter a number (1-1000):"));

// jackpot(num);

let date=new Date()

console.log(date.toDateString())