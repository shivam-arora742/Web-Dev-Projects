//array named 'names'
const names=['abc','def','hij','klm','abc','hij']

//The indexOf() method :searches the array for the specified item, and returns its position.
console.log(names.indexOf('def'))

//if the element is not in array,returns -1;
console.log(names.indexOf('dfg'))

//for multiple/duplicate copies , retursn 1st index of element.
console.log(names.indexOf('hij'))
console.log(names.indexOf('abc'))

//used to change value at given index.
let index=names.indexOf('def')
names[index]='dfg'
console.log(names)

//lastIndexOF():returns the last index of element.
console.log(names.lastIndexOf('abc'))