var yourAge = prompt('Сколько вам лет?');
var smoking = confirm('Ты куришь?');

if(yourAge < 18 && smoking == false){
    alert('Так держать!');
}
if(yourAge < 18 && smoking == true){
    alert('Маме расскажу');
}
if(yourAge >= 18 && smoking == false){
    alert('Молодец, и не надо');
}
if(yourAge >= 18 && smoking == true){
    alert('Ну и зря');
}