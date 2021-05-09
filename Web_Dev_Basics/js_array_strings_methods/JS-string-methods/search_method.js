//string named str:
const str='Hi, I am a string'

//The search() method searches a string for a specified value 
//and returns the position of the match:
let pos=str.search('I')
console.log(pos)

//if no match found ,return -1;
console.log(str.search('z'))

//works for both string and regular expressions.