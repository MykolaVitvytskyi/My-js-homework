var number = prompt('Введите число');
var exponent = prompt('Введите степень');

if(exponent == 0 && number != 0){
    number = 1;
}

var result = number;
var i = 1;
while (i < exponent) {
    result *= number;
    i++;
}
alert(result);

result = 1;
i = 1;
do {
    result *= number;
    i++;
} while(i <= exponent);
alert(result);

result = number;
for (i = 1 ; i < exponent; i++) {
    result *= number;
}
alert(result);
