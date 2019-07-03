var a = ""; 
var b = 7; 
var c = null;
var d = 2; 
var e;


alert( a || c && b || d ); // 2
alert( e || c && b &&  d ); //  null
alert( e && c || b || e && d); // 7

