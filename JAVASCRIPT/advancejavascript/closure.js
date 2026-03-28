

// function counter(){


//     count=0


//     function increament(){

//         count++;

//         return count
//     }

//     return increament
// }

// let counterr=counter()

// console.log(counterr());
// console.log(counterr());
// console.log(counterr());
// console.log(counterr());
// console.log(counterr());
// console.log(counterr());




// let calll=function(...num){
//     ans=1

//     for ( const j   of  num){
 

// console.log(j);
// ans*=j


//     }


//     console.log(ans);
    
    

    



// }

// calll(1,2,3,4,5,[])
// calll(1,2,3,4,5)


// //fat arrow function


// let f=(...num)=>{

//        ans=1

//     for ( const j   of  num){
 

// // console.log(j);
// ans*=j


//     }


//     console.log(ans);
    
    

    



// }


// f(1,2,3,4,5)


// let dance=(aniaml)=>{

//     console.log(`${aniaml} nach rha hai`);
    
// }


// dance("ghoda")
// dance("gadha")
// dance("bili")
// dance("dog")


// function abc(val){


// val()
// val()

// }


// abc(function(){

//     console.log("hello ji");
    
// });


//BANK ACCOUNT EXAMPLE




let userclass={


    balance:500,

    deposit:function(amount){


        if(typeof amount =="number"  && amount>0)
        {

        this.balance+=amount



          return this.balance
        

        }


        


    }
}


userclass.deposit(200)
userclass.deposit("class")

console.log(userclass.deposit(5000))
