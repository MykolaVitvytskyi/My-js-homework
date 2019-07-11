var number = prompt('Введите число');
var even = 0;

function getNumberOfEven(n){
    for (var i = 0; i < number.length; i++){ 
        if (number[i] % 2 === 0){ 
        even++;
        }
    }
}

getNumberOfEven(number);
alert(even);