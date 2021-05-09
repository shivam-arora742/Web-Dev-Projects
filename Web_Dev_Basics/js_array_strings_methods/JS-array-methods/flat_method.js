//nested array:
const arr=[1,[2,[3,[4]]]]

//flat()method:creates a new array with all sub-array elements concatenated into it.
//by default value of depth==1;
console.log(arr.flat())

//we can change depth:
console.log(arr.flat(2))
console.log(arr.flat(3))

//for infinity depth:
console.log(arr.flat(Infinity))