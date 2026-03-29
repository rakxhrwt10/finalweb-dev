
function createBankccount() {

    let balance= 500;
// const userclass
    
return {

    

    deposit:function(amount){


        if(typeof amount =="number"  && amount>0)
        {

        balance+=amount

          return balance
        }
    },
WithDraw:function(amount){

    if(typeof amount =="number" && amount>0 && balance>=amount )

        {
  balance-=amount
  return balance
        }    
    },
    getbalance:function(){
       return balance
    }
}

return userclass


    
}

const customer=createBankccount()

console.log(customer.deposit(200 ));

console.log(customer.getbalance());
