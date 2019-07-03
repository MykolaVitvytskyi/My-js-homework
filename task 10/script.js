var number = prompt('Введите число');
var exponent = prompt('Введите степень');
var result = number;

var i = 1
while (i < exponent) {
    result = number * result;
    i++;
}
alert(result);

var i = 1
do {
    result = number * result;
    i++;
    console.log(result);
} while(i < exponent);

for (var i = 1 ; i < exponent; i++) {
    result = number * result;
    console.log(result);
}
