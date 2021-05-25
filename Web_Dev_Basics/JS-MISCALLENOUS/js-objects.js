// objects are real world entity.In JS everything is considered as objects:

// // String objects:
// var myString=new String()
// myString="hello world!";
// console.log(myString)
// console.log(myString.length)

// // Array objects:
// var arr=new Array();
// arr[0]=1;
// arr[1]=2;
// arr[2]=3;
// console.log(arr)
// console.log(arr[0])
// console.log(arr[1])


// // Creating of objects:

// original method:
// // 1-use new operator to create instance:
// var myCar=new Object();

// // 2-add content using (.)dot operator:
// myCar.maxspeed=100;
// myCar.color="red";
// myCar.type="SUV";
// // add functions to objects:
// myCar.drive=function(){
//     console.log("Car is Driving !!!");
// };

// // 3-access the attributes & methods:
// console.log(myCar.maxspeed)
// console.log(myCar.color)
// myCar.drive()

// shorthand method:
var myCar={
    // attributes:
    maxspeed:100,
    color:"black",
    type:"sedan",
    // methods:
    drive:()=>{
        console.log("driving!!!")
    },
    // add parameters to the method:
    speed:function(spd){
        console.log("speed is",spd);
    }
};

// access the content:
console.log(myCar.maxspeed);
console.log(myCar.color);
myCar.drive();
myCar.speed(50);
