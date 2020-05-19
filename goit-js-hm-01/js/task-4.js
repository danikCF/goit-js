const credits = 23580;
const pricePerDroid = 3000;

let droidsBuy = prompt('Сколько дроидов хотите приобрести?')
if(droidsBuy===null){
    alert('Отменено пользователем!');
}
let totalPrice = pricePerDroid*droidsBuy;

if(totalPrice>credits){
    alert('Недостаточно средств на счету!');
}else {
    alert(`Вы купили ${droidsBuy} дроидов.На вашем счету осталось ${credits-totalPrice} кредитов. `)
}