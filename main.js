//Define variables
const display = document.getElementById('display');
const startStop = document.getElementById('startStop');
const reset = document.getElementById('reset');

let interval = null;
let status = "stopped";

let seconds = 0;
let minutes = 0;
let hours = 0;

//display values
let displaySec = 0;
let displayMin = 0;
let displayHr = 0;



//stopwatch function -increment value

const stopWatch = () => {

  seconds++;

  if (seconds / 60 === 1) {

    seconds = 0;
    minutes++;

    if (minutes / 60 === 1) {

      minutes = 0;
      hours++;

    }
  }

  //add extra 0 to display
  if (seconds < 10) {
    displaySec = '0' + seconds.toString();
  } else {
    displaySec = seconds;
  }

  if (minutes < 10) {
    displayMin = '0' + minutes.toString();
  } else {
    displayMin = minutes;
  }

  if (hours < 10) {
    displayHr = '0' + hours.toString();
  } else {
    displayHr = hours;
  }

  //display updated time value
  display.innerHTML = `${displayHr}:${displayMin}:${displaySec}`;
}

startStop.addEventListener("click", function () {
  window.setInterval(stopWatch, 1000)
});