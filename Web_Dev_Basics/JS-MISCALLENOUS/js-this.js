//Use of this keyword:
// this->refers to the object that is executing the current function.

//Example of method object:
const obj={
    name:'shivam',
    fn(){
        console.log(this);
    }
}
obj.fn();

//Example of global function object:
function play(){
    console.log(this);
}
play();


//creating an object using constructor:
function Work(type){
    //this helps in creating a new attribute('type') of object. 
    this.type=type;
    console.log(this)
    console.log(type)
    console.log(this.type)
}

const object = new Work('holiday');
