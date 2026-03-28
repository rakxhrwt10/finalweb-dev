// An empty array (an empty list)
let emptyList = [];

// An array of numbers
let scores = [98, 85, 100, 92];

// An array of strings
let names = ["Alice", "Bob", "Charlie"];

// An array can hold different data types
let mixedData = [10, "hello", true, null];



let fruits = ["Apple", "Banana", "Cherry",1];
console.log(fruits.length); // 3

let tasks = ["Wash dishes"];
tasks.push("Do laundry", "Buy groceries");
console.log(tasks); // ["Wash dishes", "Do laundry", "Buy groceries"]

let completedTask = tasks.pop();
console.log(completedTask); // "Buy groceries"
console.log(tasks);       // ["Wash dishes", "Do laundry"]


// (Note: unshift and shift can be slower on very large arrays because every other element needs to be shifted to a new position.)

let queue = ["Person B", "Person C"];
queue.unshift("Person A");
console.log(queue); // ["Person A", "Person B", "Person C"]

let firstInLine = queue.shift();
console.log(firstInLine); // "Person A"
console.log(queue); 

// ["Person B", "Person C"]


//FOR OF LOOOP




let score=[98, 85, 100, 92]

let sum=0

for(let i=0;i<score.length;i++){


    console.log(`processing scores idex at${i} and score is${score[i]}`);


    sum+=score[i]
    
}

console.log(sum);



// for of loop


let pet=["cat","Dog","tiger","lion","rat","snake"]



for (p of pet){


    console.log(p);
    
}

//splice


// pet.splice(0,2)


console.log(pet);

//slice


const newpet=pet.slice(1,5)

console.log(newpet);






