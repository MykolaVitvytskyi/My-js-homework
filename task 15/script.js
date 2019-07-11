var number = prompt('Введите число');

function getNumberOfEven(n){
    var even = 0;
    for (var i = 0; i < number.length; i++){ 
        if (number[i] % 2 === 0){ 
        even++;
        }
    }
    return even
}

var even = getNumberOfEven(number);
alert(even);