

                                   // // 79. Условия // //

// let age = 17

// if(age >= 18) {
//     console.log('Вы совершеннолетний');
// } else(age < 18)
//  {
//     console.log('Вам нет 18 лет');
// }

// // ---- тернарный оператор js

// const age1 = 20;
// const ageResual = age1 >= 19 ? ('Вы совершеннолетний') : ('Вам нет 18 лет');
// console.log(ageResual);







                                      // // 80. Циклы // //

// 1) Выведите в консоль четные числа от 2 до 12, используйте цикл for и условие.

// for(let a = 2; a <= 12; a = a + 2) {
//     console.log(a);
// }

// // 2) При помощи цикла for выведите в консоль числа от 10 до 1, в обратном порядке.

// for(let b = 10; b >= 1; b = b - 1) {
//     console.log(b)
// }

// 3) Перепишите 1 и 2 цикл используя цикл while.

// let ab = 0
// while(ab < 12) {
//     ab = ab + 2;
//     console.log(ab);

// }

// ---------------------------------------------------------

let bb = 10
while(bb >= 1) {
    bb = bb - 1;
    console.log(bb + 1);
}

                                  // 81. Объектные типы данных. Массивы // //

// 1) Создайте произвольный массив чисел. Используя цикл for обойдите этот массив и выведите в консоль только четные числа.
// for (инициализация; условие; итерация) { //тело цикла}

// let numbers = [12,34,44,45,57]

// for (let abc = 0; abc < numbers.length; abc++) {
//     if (numbers[abc] % 2 == 0)
//     console.log(numbers[abc]);
// }


// 2) Создайте массив из всех цветов радуги. Используя цикл for обойдите этот массив и выведите в консоль все цвета радуги, но в обратном порядке, 
// p.s. обратите внимание на индексы массивов и стартовую позицию для i.



let colorRaduga = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'] 
for (let color = colorRaduga.length - 1; color >= 0; color--) { 
    console.log(colorRaduga[color]);
}

