//first sytax of object




let obj={


    score:100
    ,
    api: "ifxlcvvvvv1-20",

    newuserlogin:"enabled",


    olduser:"disabled"



}

console.log(obj);
console.log(obj.api);
//humeasily change kr obj ke ese
obj.oldapi="zeoxlfsl--||"
obj.api="ifxlcvvvvv1-20||"
//changes bhi kr skte hum yaha sai

console.log(obj);

console.log(obj["newuserlogin"]);

delete obj.olduser



console.log(obj);



console.log(Object.keys(obj));


console.log(Object.values(obj));


//object basic crud operation upar ho gye

const car = {
  make: "Honda",
  model: "Civic",
  year: 2021
};

//object destructing

// const {make,year}=


const {make:usermake,year:useryear}=car

console.log(usermake,useryear);

console.log(car);


for (const key in car) {
  console.log(`Key: ${key}, Value: ${car[key]}`);
}

//for of loop

const temparr=Object.entries(car)

for (let key of temparr){

    console.log(key);
    

}


for (let key of Object.keys(car)){

    console.log(key);
    
}



// The .entries() method is perfect with a for...of loop
for (const [key, value] of Object.entries(car)) {
  console.log(`${key}😏:😂 ${value}`);
}



let objfun={

    namee:"newuser",


    api: "ifxlcvvvvv1-20",

    newuserlogin:"enabled",


    olduser:"disabled",
    greeting:function(num1,num2) { 
        
        console.log(`hello ${this.namee}🗼`);
        
        return num1+num2;
    }


}

console.log(objfun.greeting(16,200));



//nested object


let hero={

    name:"spiderman",
    power:"fly in sky",
    height:6.11,

    upgrade:{

        name:"ironman",
        power:"electricity",
        heght:6.2,
        newpower:"water_pump"
    }
}


// console.log(hero.upgrade.power);


// console.log(hero);





//deep copy


let temparrr={...hero}// shallow copy bna di iski ok


let co=structuredClone(hero)



temparrr.power="fly on ground"


console.log(hero);


console.log(temparrr.power);

console.log(hero)


console.log("-------------------------------------------------");



console.log(co);




















