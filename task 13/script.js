var name = prompt("Укажите Ф.И.О.");

function upperLowerCase(name){
    var arr = name.split(' ');

    for(i = 0; i < arr.length; i++){
        arr[i] = arr[i].substring(0, 1).toUpperCase() + arr[i].substring(1).toLowerCase();
    }

    return arr.join(' ');
}

name = upperLowerCase(name);
alert(name);
