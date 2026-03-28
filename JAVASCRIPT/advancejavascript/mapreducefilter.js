//for each loop


const arr=[10,20,30,40,"hello",false]


arr.forEach((number,index,arr)=>{
 

    console.log(10*number,index,arr);
    
 

})
//internal implementation
// for (let i = 0; i < arr.length; i++) {
//     callback(arr[i], i, arr);
// }

//filter   yai new arry return krega agr true select false no select
const arr1=[10,20,30,40,50,1,2,3,4,4,10,12]

const newarr=arr1.filter((number)=>number%2==0)


console.log(newarr);


//khud ka method



// const arr12=[10,20,30,40,50,1,2,3,4,4,10,12]


// arrrr.odd=function(compare){

//     const ans=[]

//     for (let num of this.arr12){


//         if(compare(num)!=0){
// ``
//             ans.push(num)
//         }
//     }
//     return ans


// }
// arrrr.filtering((num))





const arr12 = [10,20,30,40,50,1,2,3,4,4,10,12];

function odd(compare){

    const ans = [];

    for (let num of arr12){
        if (compare(num)) {
            ans.push(num);
        }
    }

    return ans;
}

const result = odd((num) => num % 2 !== 0);

console.log(result);





