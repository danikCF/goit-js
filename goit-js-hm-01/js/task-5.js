let country ;
let price;
country = prompt('Выберите страну!')

switch(country.toLowerCase()) {
    case 'china': 
    country ='China'
    price=100;
    break;
    case 'chile': 
    country= 'Chile'
    price=250;
    break;
    case 'australia':
        country='Australia';
    price = 170;
    break;
    case 'india': 
    country='India';
    price=80;
    break;
    case 'jamaica': 
    country='Jamaica'
    price=120;
    break;
    default :
    alert('Введи страну ,которая доступна!')
    break;
}

alert(`Доставка в ${country} будет стоить ${price} кредитов`);