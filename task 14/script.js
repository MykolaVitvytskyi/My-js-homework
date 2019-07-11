var arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

function checkPositive(arr){
    var pos = 0;
    var sumPos = 0;
    for(i = 0; i < arr.length; i++){ 
        if(arr[i] > 0){
            pos++;
            sumPos += arr[i]; 
        }
    }    
    console.log('Всего положительных чисел = '+ pos +', а их сумма = '+ sumPos);
}
function checkMin(arr){
    var min = null;
    for(i = 0; i < arr.length; i++){ 
        if(arr[i] < min){
            min = arr[i];
        }
    }    
    console.log('Минимальный элемент массива = '+ min);
}
function checkMax(arr){
    var max = null;
    for(i = 0; i < arr.length; i++){ 
        if(arr[i] > max){
            max = arr[i];
        }
    }    
    console.log('Максимальный элемент массива = '+ max);
}
function checkNegative(arr){
    var neg = 0;
    for(i = 0; i < arr.length; i++){ 
        if(arr[i] < 0){
            neg++;
        }
    }    
    console.log('Всего отрицательных чисел = '+ neg);
}
function checkEven(arr){
    var even = 0;
    var sumEven = 0;
    for(i = 0; i < arr.length; i++){ 
        if(arr[i] > 0 && arr[i] % 2 === 0){
            even++;
            sumEven += arr[i];
        }
    }    
    console.log('Всего положительных четных чисел = '+ even);
    console.log('Cумма положительных четных чисел = '+ sumEven);
}
function checkOdd(arr){
    var odd = 0;
    var sumOdd = 0;
    for(i = 0; i < arr.length; i++){ 
        if(arr[i] > 0 && arr[i] % 2 !== 0){
            odd++;
            sumOdd += arr[i];
        }
    }
    console.log('Всего положительных нечетных чисел = '+ odd);
    console.log('Сумма положительных нечетных чисел = '+ sumOdd);
}
function checkEqualsTo_4(arr){
    var equalsTo_4 = 0;
    for(i = 0; i < arr.length; i++){ 
        if(arr[i] === 4){
            equalsTo_4++;
        }
    }
    console.log('Количество элементов равных "4"  = '+ equalsTo_4);
}
checkPositive(arr);
checkMin(arr);
checkMax(arr);
checkNegative(arr);
checkEven(arr);
checkOdd(arr);
checkEqualsTo_4(arr);