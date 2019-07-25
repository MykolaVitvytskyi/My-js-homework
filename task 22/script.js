document.querySelector('.container').addEventListener("click" , function(event){
  var container = event.target.parentNode;
  var count = container.querySelector('.count');

  if(event.target.className === "countDown"){
    count.innerHTML--;
  } 
  if(event.target.className === "countUp"){
    count.innerHTML++;
  }
})