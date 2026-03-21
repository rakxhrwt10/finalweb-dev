// console.log("hello ji javascript")

// let a=5

// let b=false

// let c="hello"


// let  d= null

// let e =undefined


// console.log(typeof(a))
// console.log(typeof (b))
// console.log(typeof (c))
// console.log(typeof (d))
// console.log(typeof (e))

// obj={

//     'hello':'ji'
// }
// console.log(typeof (obj))

// console.log(obj)



// // operators

// let x=10
// let y=20    
// console.log(x+y)
// console.log(x-y)
// console.log(x*y)
// console.log(x/y)
// console.log(x%y)

// // comparison operators
// console.log(x>y)
// console.log(x<y)
// console.log(x==y)
// console.log(x!=y)


// //assignment operators
// x+=5
// console.log(x)
// x-=5
// console.log(x)
// x*=5
// console.log(x)
// x/=5
// console.log(x)
// x%=5
// console.log(x)

//logical operators

console.log(0 && 15)
console.log(0 || 15)
console.log(!(0>5))

// NAN
console.log(0/0)

console.log(1/0);

console.log(NaN-1);

console.log(NaN*1);

console.log(NaN+1);

let radius=5
let area=3.14*radius*radius
console.log(area)


//Constants
const pi=3.14
// pi=3.1415 // This line would cause an error because pi is a constant
console.log(pi)

//STRING

let name='Rakes'

let role='data scientist'

let sentence=`My name is ${name} and I am a ${role}.`

console.log(sentence)

// string idexing
let str="Hello World"
console.log(str[1]) 

//string slicing
console.log(str.slice(0,5)) // Hello
console.log(str.slice(6)) // World

//string methods
console.log(str.toUpperCase()) // HELLO WORLD
console.log(str.toLowerCase()) // hello world
console.log(str.includes("World")) // true
console.log(str.replace("World","JavaScript")) // Hello JavaScript

console.log("p">1);

//control flow
let age=1 
if(age>=18){
    console.log("You are an adult.")
}else{
    console.log("You are a minor.")
}


//if-else if-else
let score=85
if(score>=90){
    console.log("Grade: A")
}else if(score>=80){
    console.log("Grade: B")
}else if(score>=70){
    console.log("Grade: C")
}else if(score>=60){
    console.log("Grade: D")
}
else{
    console.log("Grade: F")
}

// ternary operator

let div=5;

let IsEven=(div%2==0) ? "even" :"odd";

console.log(IsEven);


//IDEXOF

let coding="ilovecoding"

console.log(coding.indexOf("g"));

//method chaining


let math='    helloji kse   ho    ';


console.log(math.toUpperCase().trim());

// SLICE


let messssge='hellobahikaseho'

console.log(messssge.slice(5,12));

//negative index



let messssge1 = 'hellobahikaseho'

console.log(messssge1.slice(-1));


//repacle


let m="mango";

console.log(m.replace("mango","apple"));

let a=m

console.log(a.repeat(10));

//empty arr

let empty=[];


for(let j=0;j<=5;j++){

    

    empty.unshift(j)
    for(let k=0;k<=empty.length-1;k++){


        if(empty[0]==1)

            {

                empty.pop(empty[0])
            }
    }

    
}

console.log(empty.shift());//delete form stat and eturn it easily bro














