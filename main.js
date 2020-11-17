//Define variables

let seconds = 0;
let minutes = 0;
let hours = 0;


const display = document.getElementById('display');
const startStop = document.getElementById('startStop');
const reset = document.getElementById('reset');

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
  //display updated time value
  display.innerHTML = `${hours}:${minutes}:${seconds}`;
}