// array named numbers:
const numbers=[2,3,4,6,8,10]

// The every()method : tests whether all elements in the array pass the test implemented by the provided function. 
       // It returns a Boolean value.

//here arrow functions are used.
const res=numbers.every((item)=>item%2==0)
console.log(res)

//using array of objects:
const items=
[
    {name:'phone'},
    {name:'dish'},
    {value:20}
];

//to validate if the object has some attribute or not:
const validate=items.every(item => item.name!=undefined)
console.log(validate)