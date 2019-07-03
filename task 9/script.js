var age = +prompt("Введите ваш возраст");

switch (age) {
    case 15:
        alert( 'Вы еще слишком юны' );
        break;

    case 25:
        alert( 'Вы в расцвете сил' );
        break;
    case 80:
    case 90:
        alert( 'Вы уже слишком стар для этого' );
        break;

    default:
        alert( 'Мы не готовы принять вашу заявку!' );
}