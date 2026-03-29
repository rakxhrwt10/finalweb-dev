function greet(){


    console.log("hello ji kse ho");
    
}




function meet(callback) {


    console.log("i am going meet someone");


    callback()

    console.log("ha bhai bolo");

    
    
       
}

function eat(){

    console.log("i am eating a some food wait ");
    
}


meet(greet)
meet(eat)



//call back example


const arr=[10,2,3,4,5,611,7,1]


arr.sort((a,b)=>a-b)


console.log(arr);

//callback real example




// blinkit

function blinkitOrderPlaced(){
    console.log("We have started packing your Order");
}

function zomatoOrderPlaced(){
    console.log("We have started preparing your food");
}

function payment(amount,callback){
    console.log(`${amount} payment has initilized`)
    console.log("Payment is received");
    callback();

    // GST: Government
    // Rider ko kitna payment dena
    // company ko kitna 
}

payment(500,zomatoOrderPlaced);
payment(300,blinkitOrderPlaced);
