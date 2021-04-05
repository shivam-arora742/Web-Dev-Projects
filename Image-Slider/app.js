
// Access the slider and images:
const slide=document.querySelector('.slider');
const images=document.querySelectorAll('.slider img');


// Access the buttons:
const prevBtn=document.querySelector('#prevbtn');
const nextBtn=document.querySelector('#nxtbtn');

// Counter:
let counter=1;
// access size of 1st image.
const size=images[0].clientWidth;
// console.log(size);
 // Append transform property of slide and move it one image ahead. 
 slide.style.transform ='translateX(' + (-size * counter) + 'px)';



//  Button Listeners:
// NEXT BUTTON FUNCTIONALITY.
nextBtn.addEventListener('click',()=>{
   // to avoid fast pressing of btn:
   if(counter >= images.length-1) return ;
    // transition will allow transform property with a duration of 0.4s & timing function as ease-in-out.
    // ease-in-out->Specifies a transition effect with a slow start and end 
   slide.style.transition = "transform 0.5s ease-in-out";
   counter++;
//    console.log(counter);
   slide.style.transform ='translateX(' + (-size * counter) + 'px)';
});

// NEXT BUTTON FUNCTIONALITY.
prevBtn.addEventListener('click',()=>{
   // to avoid fast pressing of btn:
   if(counter <= 0) return ;
    // transition will allow transform property with a duration of 0.4s & timing function as ease-in-out.
    // ease-in-out->Specifies a transition effect with a slow start and end 
   slide.style.transition = "transform 0.5s ease-in-out";
   counter--;
//    console.log(counter);
   slide.style.transform ='translateX(' + (-size * counter) + 'px)';
});

// LOOP back event:transitionend()
// this event will be fired as the animation(transition) stop;
slide.addEventListener('transitionend',()=>{
   // console.log("fired!!!");
   // check if we reach prev end:
   if(images[counter].id=="lastClone"){
      // remove transition/animation.
      slide.style.transition = "none";
      // restore counter to loop back.
      counter=images.length-2;
      // shift slider towards right.
      slide.style.transform ='translateX(' + (-size * counter) + 'px)';
   }
   // check if we reach next end:
   if(images[counter].id=="firstClone"){
      // remove transition/animation.
      slide.style.transition = "none";
      // restore counter to loop back.
      counter=images.length-counter;
      // shift slider towards left.
      slide.style.transform ='translateX(' + (-size * counter) + 'px)';
   }
   
});

