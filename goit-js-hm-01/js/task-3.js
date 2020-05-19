let message;
const ADMIN_PASSWORD = 'qwerty';
message= prompt ('Введите пожалуйста пароль!');

if(message===ADMIN_PASSWORD){
    alert ('Добро пожаловать!');
}else if(message===null){
    alert ('Отменено пользователем!');
}else{
    alert ('Неверный пароль!');
}
