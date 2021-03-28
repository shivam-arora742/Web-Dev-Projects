
// Accessing hands:

// hour hand.
let hourHand = document.querySelector('.hour');
// minute hand 
let minuteHand = document.querySelector('.minutes');
// second hand
let secondHand = document.querySelector('.seconds');


// defining of method setClock.
function setClock(){
    // get current date.
    const currentDate=new Date();
    
    // get current hours,minutes,seconds
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();

    // rotating fraction --> how many fraction to rotate for each hand.
  const secondsFraction = seconds / 60;
  const minutesFraction = (secondsFraction + minutes) / 60;
  const hoursFraction = (minutesFraction + hours) / 12;

  // actual deg to rotate
  const secondsRotate = secondsFraction * 360;
  const minutesRotate = minutesFraction * 360;
  const hoursRotate = hoursFraction * 360;

  // apply the rotate style to each element using JS literals.
  // use backtick `` instead of single quotes ''
  secondHand.style.transform = `rotate(${secondsRotate}deg)`;
  minuteHand.style.transform = `rotate(${minutesRotate}deg)`;
  hourHand.style.transform = `rotate(${hoursRotate}deg)`;

}

// setInterval to call method(set clock) after 1000ms or 1 seconds.
setInterval(setClock,1000);