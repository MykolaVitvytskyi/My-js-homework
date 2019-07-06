var x = +prompt("Введите первое число");
var znak = prompt("Введите знак действия");
var y = +prompt("Введите второе число")

function doMath(a,b,znak){
    var result = 0;
    if (znak === '+'){
        result = a+b;
        alert('Ответ: '+ result);
    }
    else if(znak === '-'){
        result = a-b;
        alert('Ответ: '+ result);
    }
    else if(znak === '*'){
        result = a*b;
        alert('Ответ: '+ result);
    }
    else if(znak === '/'){
        result = a/b;
        alert('Ответ: '+ result);
    }
    else if(znak === '%'){
        result = a%b;
        alert('Ответ: '+ result);
    }
    else{
        alert('Я не знаю такой знак действия!')
    }
}

doMath(x,y,znak);