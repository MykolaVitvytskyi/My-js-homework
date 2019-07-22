var divList = document.getElementsByTagName('div');

function addNumbering(){
    for(var i = 0; i < divList.length ; i++){
        if(i%2){
            divList[i].innerText = 'Я четный элемент №'+(i/2+0.5);
        }else{
            divList[i].innerText = 'Я нечетный элемент №'+(i/2+1);
        }
    }
}

addNumbering();