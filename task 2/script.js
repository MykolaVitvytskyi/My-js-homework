var radius = prompt('Введите радиус');
var height = prompt('Введите высоту');
var square = Math.PI*(Math.pow(radius, 2));
var volume = square*height;

document.write('Обьем цилиндра с площадью основы  *' + square +'*  , радиусом  *' + radius +'*  и высотой  *' + height + '*  равен: V =  ' + volume +'.');