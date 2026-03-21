let student=["aman","shradha","arun"]


console.log(student[0].toUpperCase());



for(let i=0;i<=student.length-1;i++){


    console.log(student[i].toUpperCase());
    



}

//SLICE

let colors=["red","green","blue","yellow"]
console.log(colors.slice(1,3));
console.log(colors.slice(-4));


//splice
let months=["jan","feb","mar","apr","may","june"]

console.log(months.splice(0,4,"a","b","c","d"));

console.log(months);

//arrray refrence

let nums1=[1,2,3,4,5]
let nums2=nums1
console.log(nums1);
console.log(nums2);
nums1.push(6)
console.log(nums1);
console.log(nums2);
console.log(nums2[0]===nums1[0]);

let empty=[1,2,3,4,5]
let n=[1,2,3,4,5]



console.log(empty===n);


console.log(empty[0]===n[0]);

console.log(Object.is(empty, n)); // false (different array objects)
console.log(Object.is(nums1, nums2));

//nested array
let nested=[1,2,[3,4],5]
console.log(nested[2][1]);




