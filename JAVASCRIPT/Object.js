// const { loadConfigFromFile } = require("vite");

const { createLogger } = require("vite")

// const item={
//     name:"book",
//     price:100,
//     authorr:["John Doe","Jane Doe"],
//     totalBooks:[1,2]
// }



// console.log(item.name[0]);


// // for ( j of item){


// //     console.log();
    


// // }


// let Student ={


//     name:"Raksh",
//     company:"google",
//     role:"software engineer",
//     typeofwork:"remote"



    

// };

// console.log(Student);


// Student.role="Data Scientist"

// console.log(Student);

// Student.location="Germany"
// Student.typeofwork="hybrid"

// consoleltl5kn(Student);

//nested objects


let nest={

    a:{
        1:"a",
        2:"b",
    },
    b:{
        1:"c",
        2:"d",

        

    },

    c:{
        1:"e",
        2:"f",}
}

console.log(nest["a"][1]);


for (let i in nest){
    console.log(i);
    for (let j in nest[i]){
        console.log(nest[i][j]);
    }           
}




a=Math.floor(4.99)
console.log(a);



// let step1=Math.random()
// console.log(step1);

// let step2=step1*100
// console.log(step2);

// let step3=Math.floor(step2)

// console.log(step3);

// let step4=step3+1;


// console.log(step4);


let rand=Math.floor((Math.random()*10))+1

console.log(rand);
















