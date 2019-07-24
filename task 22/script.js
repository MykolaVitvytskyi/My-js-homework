document.body.addEventListener("click" , function(event){
  var square = event.target.parentNode;
  var currentCount = square.querySelector('.count').textContent;
  var count = square.querySelector('.count');

  if(event.target.className === "countDown"){
    currentCount--;
    count.innerHTML = currentCount;
  } 
  if(event.target.className === "countUp"){
    currentCount++;
    count.innerHTML = currentCount;
  }
})