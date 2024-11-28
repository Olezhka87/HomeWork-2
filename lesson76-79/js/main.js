// Присваиваем имена переменным

let userName
const userAge = '37 лет'
let userCountry = 'Город'
const userEducation = 'Студент Aroken'
let userDream = 'Мечты пользователя'


// небольшой тестик как это вообще работает
const num1 = 15;
const num2 = 15;
const num3 = 3;

console.log(num2 + num1 ** num3);


// Назначаем переменные

userName = 'Олег';
userCountry = 'Люберцы';
userDream = 'Выучить JavaScript'

// Вывод в консоль

console.log(userName);
console.log(userAge);
console.log(userCountry);
console.log(userEducation);
console.log(userDream);




// let name = "Куратор! JavaScript - пока что для меня опухшая голова";
// Вставим переменную
// alert( `Привет, ${name}!` ); // Привет!





////// ======   79. Условия - домашняя работа ======= ///// 

let userAgeMinMax = 37
let message = userAgeMinMax >= 18 ? "Вы совершеннолетний." : "Вам еще нет 18.";
console.log(message);

// userAgeMinMax === 18 ? console.log('Вы совершеннолетний: %o', `${userAgeMinMax => 18}`) : console.log('Вам еще нет 18: %o', `${userAgeMinMax < 18}`);


// if  (userAgeMinMax >= 18) {
//     console.log('Вы совершеннолетний')
// } else {
//     (userAgeMinMax < 18)
//     console.log('Вам еще нет 18')


//  Switch 

// let ageOleg = 37;

// switch (ageOleg) {

//   case 34:
//   case 37:
//     alert( 'В точку!' );
//     alert( 'В почку!' );
//     break;

//   case 37:
//     alert( 'Перебор' );
//     break;

//   default:
//     alert( "Нет таких значений" );
// }