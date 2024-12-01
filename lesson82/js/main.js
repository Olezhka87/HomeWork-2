//  82. Функции 


// 1) Создайте функцию, которая в качестве аргумента будет принимать имя, 
// а возвращать строчку ‘Hello “аргумент функции”’.


function inputName() {
  return 'Олег'
}

const result = inputName();
console.log('Hello ' + result);



// 2) Создайте массив чисел, далее создайте функцию, которая будет принимать в качестве аргумента массив чисел.
//  Функция должна перебирать полученный массив и если число больше 10 - выводить это число в консоль.


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 10, 14, 17, 33, 46, 55, 59, 62, 66, 69, 71, 73, 77, 78, 80, 84, 86, 91, 92, 95, 97, 99]

function funcNumbers(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      result.push(arr[i]); // добавляем число в результат, если оно больше 10
    }
  }
  return result;
}
console.log(funcNumbers(arr));



// 3) Предлагаю вам реализовать простенький калькулятор. Создайте функцию, которая будет принимать три аргумента,
//  два числа и строку для выбора оператора. При вызове функции пользователь передает, например, (2, 3, ‘minus’),
//   внутри функции происходит проверка на знак и в данном случае функция должна вернуть -1.
//    То есть мы получаем разницу между первым и вторым аргументом.
//     Запишите результат выполнения функции в переменную и выведите в консоль. 
//     Подобным образом реализуйте 4 математические операции: сложение, вычитание, умножение и деление.


function calcNumber(firstNum, secondNum, operator) {
  switch (operator) {
    case 'plus':
      return firstNum + secondNum; // Cложение
    case 'minus':
      return firstNum - secondNum; // Вычитание
    case 'multi':
      return firstNum * secondNum; // Умножение
    case 'div':
      return firstNum / secondNum; // Деление
      default:
    return 'Неизвестный оператор'; // Обработка неопознанного оператора
  }
  
}

let result2 = calcNumber(2, 3, 'plus');
console.log('Сложение: ' + result2);

let result1 = calcNumber(2, 3, 'minus');
console.log('Вычетание: ' + result1);

let result4 = calcNumber(2, 3, 'multi');
console.log('Умножение: ' + result4);

let result3 = calcNumber(2, 3, 'div');
console.log('Деление: ' + result3);





