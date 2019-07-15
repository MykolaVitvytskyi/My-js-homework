function sortWords(str){
    var arr = str.split(' ');
    arr.sort(sortNumber);
    return arr.join(' ');
}

function sortNumber(a,b){
    var str1 = a;
    var str2 = b;
    var num1;
    var num2;
    for(i = 0; i < str1.length || i < str2.length; i++){
        if(str1[i] >= 1){
           num1 = str1.substr(i, 1); 
        }
        if(str2[i] >= 1){
            num2 = str2.substr(i, 1); 
         }
    }

    return num1 > num2 ? 1 : -1; 
}

console.log(sortWords('A3lice 2Bob Er1nst'));
console.log(sortWords('2Fiona Ig7or J1amila B3ob Ali5ce'));
console.log(sortWords('Tes1t te8st qwe7rty q4werty 3qwerty'));