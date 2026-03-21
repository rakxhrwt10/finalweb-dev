//loop


let obj=new Object()

let arr=["BMW","mercedez","Tyota","skonda","ferrari"]

for(let i=0;i<=arr.length-1;i++){


    if(arr[i].startsWith("m")){


        console.log(arr[i].toUpperCase());
        

        
    }
    else{



        console.log(arr[i].toUpperCase());
        
    }

    
    // console.log(arr[i]);


}

for(let j=1;j<=155;j++){


    if(j%2==0){


        continue;
        
    }
    else{
       
        console.log(j);
        
       
    }



}

//nested loop

let brand=[["BMW","mercedez","Tyota","skonda","ferrari"],["audi","honda","nissan"],["lamborghini","bugatti"]]


// for(let i=0;i<=brand.length-1;i++){

//     for(let j=0;j<=brand[i].length-1;j++){
//         console.log(brand[i][j]);
//     }

// }

console.log(brand[0][0]);

//for of loop

let fruits=["apple","banana","grapes","orange"]

for(f of fruits){

    console.log(f.toUpperCase());       
}

//nested for of loop
let cars=[["BMW","mercedez","Tyota","skonda","ferrari"],["audi","honda","nissan"],["lamborghini","bugatti"]]

for(let c of cars){

for (luxury of c){

    console.log(luxury.toUpperCase());  
    // console.log(c);
    
}

}









