function StartToSetActiveSquare(){
  var redBg;

  document.querySelector('.container').addEventListener("click" , function(event){
    if(event.target.className === "square"){
      switchRedBg(event.target);
    }
  })
  
  function switchRedBg(target){
    target.classList.add('redBg');
    if(redBg){
      redBg.classList.remove('redBg')
    }
    redBg = target;
  }
}
StartToSetActiveSquare();