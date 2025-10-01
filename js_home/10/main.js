const firstName = "Oleg";
const lastName = "Ivanov";
const isStudent = true;


let age = 37;
let currentYear = 2025;
let birthYear = currentYear - age;

console.log(birthYear);

console.log(`Меня зовут ${firstName} ${lastName}, мне ${age} лет. Я ученик курса: ${isStudent ? "Да" : "Нет"}`);
console.log("Меня зовут " + firstName + " " + lastName, "мне " + age + "лет. " + "Я ученик курса:" + (isStudent ? 'Да' : 'Нет'));


// Задача 4.
// Какое значение будет у переменной result?
// let a = '123';
// let b = +'456';
// let c = Number('789');
// let d = Boolean(0);
// let e = Boolean(' ');
// let result = a + b + c + d + e;

// решение: 123 456 789 (false = 0) Пробел равен 1 т.е true
// Ответ: 123456789falsetrue