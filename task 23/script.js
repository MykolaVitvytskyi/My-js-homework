var redBg;
document.body.addEventListener("click" , function(event){
  if(redBg && event.target.className === "square"){
    redBg.classList.remove('redBg')
  }
  if(event.target.className === "square"){
    event.target.classList.add('redBg');
    redBg = event.target;
  }
})