var yourAge = prompt('Сколько вам лет?');
var smoking = confirm('Ты куришь?');

if(yourAge < 18 && smoking == false){
    alert('Так держать!');
}
else if(yourAge < 18 && smoking == true){
    alert('Маме расскажу');
}
else if(yourAge >= 18 && smoking == false){
    alert('Молодец, и не надо');
}
else{
    alert('Ну и зря');
}