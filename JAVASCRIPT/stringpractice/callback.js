function greet(){


    console.log("hello ji kse ho");
    
}




function meet(callback) {


    console.log("i am going meet someone");


    callback()

    console.log("ha bhai bolo");
    
       
}


meet(greet)

