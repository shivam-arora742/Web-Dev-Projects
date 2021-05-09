//Array named arr:
const arr=[1,2,3,4,5];

// Splice() will remove elements .
   // parameters:
        // a)-pos->starting position of removal .
        // b)number of elements to remove.
        
//Updated array:
const deleted=arr.splice(1,2);
console.log(arr);

//deleted portion of array:
console.log(deleted)

//to add new elements to array:
del=arr.splice(1,0,"abc",1000,"a")
console.log(arr)
console.log(del)