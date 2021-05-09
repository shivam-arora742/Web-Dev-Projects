//Array named 'names'
const names=['hi','hello','world','hi','worldhi']

//testing function for find()
fn=(items)=>{
    if(items==='world')
    return items;
}
//find()will use testing function to iterate 'names' array and returns 1st value to be searched.
let res=names.find(fn)

//displaying result of find()method.
console.log(res)