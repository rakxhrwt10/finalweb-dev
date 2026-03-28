// setTimeout(() => {
//   console.log("Time up!");
// }, 1);

//year,month,date,hours,minutes,seconds,milliseconds

let datt=new Date(2025,2,20,12,50,44,50)

console.log(datt.toDateString());


//datemethod

console.log(datt.getDate());

console.log(datt.getDay())
console.log(datt.getHours());



const now=Date.now(


)

const date =new Date(0)

console.log(now);
console.log(date.toDateString());


new Date(2025, 0, 1);  // January 1, 2025 (month is 0-indexed)
new Date(2025, 11, 25); // December 25, 2025 (11 = December!)
// This is confusing and error-prone!




