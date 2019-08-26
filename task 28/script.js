function getTime(){
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  if (hours < 10){
    hours = "0" + hours;
  }
  if (minutes < 10){
    minutes = "0" + minutes;
  }
  if (seconds < 10){
    seconds = "0" + seconds;
  }

  return `${hours}:${minutes}:${seconds}`;
}

let span = document.querySelector('.clock');
function clock(){
  const fullTime = getTime();
  span.innerText =  fullTime;
}

let timerId;
document.querySelector('#btn-1').onclick = () =>{
  
  clearInterval(timerId);
  timerId = setInterval(AlarmOnTime, 1000);
  const inputValue = document.querySelector("#alarmClock-1").value;

  function AlarmOnTime(){
    const time = getTime().slice(0, 5);

    if(inputValue===time){
      alert('Будильник сработал!!!');
      clearInterval(timerId);
    }
  }
}

document.querySelector('#btn-2').onclick = () =>{
  let valueHours = document.querySelector("#alarmClockHours").value;
  let valueMinutes = document.querySelector("#alarmClockMinutes").value;
  let valueSeconds = document.querySelector("#alarmClockSeconds").value;

  valueHours *= 3600 * 1000;
  valueMinutes *= 60000;
  valueSeconds *= 1000;

  const timer =  valueHours + valueMinutes + valueSeconds;
  setTimeout('alert("Будильник сработал!!!")', timer);
}


clock();
setInterval("clock()", 1000);
