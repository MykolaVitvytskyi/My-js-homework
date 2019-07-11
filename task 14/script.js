var arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
var pos = 0;
var sumPos = 0;
var min = null;
var max = null;
var neg = 0;
var even = 0;
var odd = 0;
var sumEven = 0;
var sumOdd = 0;
var equalsTo_4 = 0;
for(i = 0; i < arr.length; i++){ 
    if(arr[i] > 0){
        pos++;
        sumPos += arr[i]; 
    }
    if(arr[i] < min){
        min = arr[i];
    }
    if(arr[i] > max){
        max = arr[i];
    }
    if(arr[i] < 0){
        neg++;
    }
    if(arr[i] > 0 && arr[i] % 2 !== 0){
        odd++;
        sumOdd += arr[i];
    }
    if(arr[i] > 0 && arr[i] % 2 === 0){
        even++;
        sumEven += arr[i];
    }
    if(arr[i] === 4){
        equalsTo_4++;
    }
}
console.log('Всего положительных чисел = '+ pos +', а их сумма = '+ sumPos);  
console.log('Минимальный элемент массива = '+ min);
console.log('Максимальный элемент массива = '+ max);
console.log('Всего отрицательных чисел = '+ neg);
console.log('Всего положительных четных чисел = '+ even);  
console.log('Всего положительных нечетных чисел = '+ odd);
console.log('Cумма положительных четных чисел = '+ sumEven);
console.log('Сумма положительных нечетных чисел = '+ sumOdd);
console.log('Количество элементов равных "4"  = '+ equalsTo_4);