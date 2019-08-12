function getTime(){
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();

  if (hours < 10){
    hours = "0" + hours 
  }
  if (minutes < 10){
    minutes = "0" + minutes 
  }

  return `${hours}:${minutes}`;
}
  
function clock(){
  const date = new Date()
  let seconds = date.getSeconds();
  if (seconds < 10){
    seconds = "0" + seconds 
  }
  const hoursAndMinutes = getTime();
  const fullTime = hoursAndMinutes+':'+seconds;
  let span = document.querySelector('.clock');
  span.innerText =  fullTime;
}


document.querySelector('#btn-1').onclick = () =>{
  const timerId = setInterval(AlarmOnTime, 1000);

  function AlarmOnTime(){
    const inputValue = document.querySelector("#alarmClock-1").value;
    const time = getTime();

    if(inputValue===time){
      alert('Будильник сработал!!!');
      clearInterval(timerId);
    }
  }
}

document.querySelector('#btn-2').onclick = function AlarmAfterTime(){
  let valueHours = document.querySelector("#alarmClockHours").value;
  let valueMinutes = document.querySelector("#alarmClockMinutes").value;
  let valueSeconds = document.querySelector("#alarmClockSeconds").value;

  valueHours *= 3600 * 1000
  valueMinutes *= 60000
  valueSeconds *= 1000

  const timer =  valueHours + valueMinutes + valueSeconds;
  setTimeout('alert("Будильник сработал!!!")', timer);
}


clock();
setInterval("clock()", 1000);