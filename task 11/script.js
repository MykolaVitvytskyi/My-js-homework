var number = +prompt('Введите число которое является точной степенью двойки');

function recursion(a){
    if(a === 1){
        alert('YES');
    }
    else if(a < 1){
        alert('NO');
    }
    else{
        return recursion(a / 2);
    }
}

function cycle(a){
    for (i = 100; i > 1; i--) {
        if (a === 1){
            alert('YES');
            break
        }
        if (a < 1){
            alert('NO');
            break
        }
        else{
            a /= 2
        }
    }
}

recursion(number);
cycle(number);
