var yourAge = prompt('Сколько вам лет?');
var divide = yourAge % 10;

if((yourAge >= 11 && yourAge <= 14) || (yourAge >= 111 && yourAge <= 114)){
    alert(yourAge+' лет');
}
else if(divide == 1){
    alert(yourAge+' год');
}
else if(divide >= 2 && divide <= 4){
    alert(yourAge+' года');
}
else{
    alert(yourAge+' лет');
}