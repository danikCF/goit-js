let country ;
let price=0;
let message;
country = prompt('Выберите страну!')
switch(country.toLowerCase()) {
    case 'china': 
    country ='China'
    price=100;
    message=`Доставка в ${country} будет стоить ${price} кредитов`;
    break;
    case 'chile': 
    country= 'Chile'
    price=250;
    message=`Доставка в ${country} будет стоить ${price} кредитов`;
    break;
    case 'australia':
        country='Australia';
    price = 170;
    message=`Доставка в ${country} будет стоить ${price} кредитов`;
    break;
    case 'india': 
    country='India';
    price=80;
    message=`Доставка в ${country} будет стоить ${price} кредитов`;
    break;
    case 'jamaica': 
    country='Jamaica'
    price=120;
    message=`Доставка в ${country} будет стоить ${price} кредитов`;
    break;
    default :
    message='Введи страну ,которая доступна!';
    break;
}
alert(message);