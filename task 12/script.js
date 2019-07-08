var x = +prompt("Введите первое число");
var znak = prompt("Введите знак действия");
var y = +prompt("Введите второе число");

function doMath(a,b,znak){
    var result;
    switch (znak) {
        case '+':
            result = a+b;
            break;

        case '-':
            result = a-b;
            break;

        case '*':
            result = a*b;
            break;

        case '/':
            result = a/b;
            break;

        case '%':
            result = a%b;
            break;

        default:
            alert( 'Я не знаю такой знак действия!');
    }
    if (result === Infinity){
        alert('На 0 делить нельзя!');
    }
    else if (result !== undefined){
        alert('Ответ: '+ result);
    }
}    
doMath(x,y,znak);