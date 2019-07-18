var divList = document.getElementsByTagName('div');

function addNumbering(){
    for(var i = 1; i <= divList.length ; i++){
        if(i%2){
            divList[i-1].innerText = 'Я нечетный элемент №'+i;
        }else{
            divList[i-1].innerText = 'Я четный элемент №'+i;
        }
    }
}

addNumbering();