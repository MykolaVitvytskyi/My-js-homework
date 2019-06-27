var yourAge = prompt('Сколько вам лет?');
var smoking = confirm('Ты куришь?');

if(yourAge < 18 && !smoking){
    alert('Так держать!');
}
else if(yourAge < 18 && smoking){
    alert('Маме расскажу');
}
else if(yourAge >= 18 && !smoking){
    alert('Молодец, и не надо');
}
else{
    alert('Ну и зря');
}