function sortWords(str){
    var arr = str.split(' ');
    arr.sort(sortNumber);
    return arr.join(' ');
}

function sortNumber(a,b){
    return getNumberFromWord(a) > getNumberFromWord(b) ? 1 : -1; 
}

function getNumberFromWord(str){
    for(i = 0; i < str.length; i++){
        if(+str[i]){
            return str[i]
        }
    }
}


console.log(sortWords('A3lice 2Bob Er1nst'));
console.log(sortWords('2Fiona Ig7or J1amila B3ob Ali5ce'));
console.log(sortWords('Tes1t te8st qwe7rty q4werty 3qwerty'));