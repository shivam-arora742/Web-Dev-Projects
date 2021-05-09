// Array named items:
const items=['phone','tablet','iphone','samsung','nokia']

//filter()method : creates a new array out of the original array based on the testing function 
    //and add those elements that pass the testing function.

//testing function (fn):    
function fn(items){
    if(items.length>5){
        return items;
    }
}

//calling the filter method:
let res=items.filter(fn)

//printing the result array.
console.log(res)

//this method wont disturb the original array.
console.log(items)



// Using array of objects:
const people=[
    {
        name:"shivam",
        age:20
    },
    {
        name:"jack",
        age:10
    },
    {
        name:"john",
        age:50
    }
];


let adults=people.filter((person) => person.age>=18);
console.log(adults)