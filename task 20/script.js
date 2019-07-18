var divList = document.getElementsByTagName('div');

function addNumbering(){
    var even = 1;
    var odd = 1;
    for(var i = 0; i < divList.length ; i++){
        if(i%2){
            divList[i].innerText = 'Я четный элемент №'+even;
            even++;
        }else{
            divList[i].innerText = 'Я нечетный элемент №'+odd;
            odd++;
        }
    }
}

addNumbering();