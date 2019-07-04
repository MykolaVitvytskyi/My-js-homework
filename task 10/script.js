var number = prompt('Введите число');
var exponent = prompt('Введите степень');
var result = number;

var i = 1
while (i < exponent) {
    result *= number;
    i++;
}
alert(result);

result = number;
i = 1
do {
    result *= number;
    i++;
} while(i < exponent);
alert(result);

result = number;
for (i = 1 ; i < exponent; i++) {
    result *= number;
}
alert(result);
