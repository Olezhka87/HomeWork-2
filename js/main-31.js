// Задача 1.
// Напишите функцию calculateFinalPrice
// которая принимает базовую цену товара --- priceBase
// процент скидки и налоговую ставку --- priceDiscount, priceTaxe
// 
//  Функция должна вычислять скидку  --- priceBase * priceDiscount / 100
// затем прибавлять налог и возвращать итоговую цену. - priceBase +  (priceBase *priceTaxe)

function calculateFinalPrice(priceBase, priceDiscount, priceTaxe) {
	 let priceBaseDiscount = (priceBase * priceDiscount / 100);
	 priceBase = priceBase - priceBaseDiscount;
	 priceBase = priceBase +  (priceBase *priceTaxe);
	 return priceBase;
}
  console.log(calculateFinalPrice(100, 10, 0.2));  

// Пример работы:
// console.log(calculateFinalPrice(100, 10, 0.2)); // 108
// console.log(calculateFinalPrice(100, 10, 0)); // 90



// Задача 2.
// Напишите функцию checkAccess, которая принимает имя пользователя и пароль. Если имя пользователя равно "admin" и пароль равен "123456", функция должна возвращать строку "Доступ разрешен", иначе — "Доступ запрещен".

function checkAccess(userName, userPassword) {
	if (userName === "admin" && userPassword === "123456") {
		return("Доступ разрешен")
	} else
	return("Доступ запрещен")
}

console.log(checkAccess("admin", "123456"));
console.log(checkAccess("admin", "654321"));


// Задача 3.
// Напишите функцию getTimeOfDay, которая принимает текущее время (число от 0 до 23) и возвращает строку:
// "Ночь" (с 0 до 5 часов),
// "Утро" (с 6 до 11 часов),
// "День" (с 12 до 17 часов),
// "Вечер" (с 18 до 23 часов).
// Если введённое значение не попадает в этот диапазон, возвращайте `"Некорректное время"`.

function getTimeOfDay(realTime) {
	if (realTime < 0 || realTime > 23) {
		return "Некорректное время";
	} else if(realTime >= 0 && realTime <= 5) {
		return "Ночь"
		} else if (realTime >= 6 && realTime <= 11) {
				return "Утро"
			} else if (realTime >= 12 && realTime <=17) {
				return "День"
			} else if (realTime >= 18 && realTime <=23) {
				return "Вечер"
			}
		}

		console.log(getTimeOfDay(24))
		console.log(getTimeOfDay(10))
		console.log(getTimeOfDay(13))
		console.log(getTimeOfDay(19))


// Задача 4.
// Напишите функцию findFirstEven, которая принимает два числа start и end и находит первое чётное число в указанном диапазоне.
// Если чётного числа в этом диапазоне нет, функция должна вернуть "Чётных чисел нет".

function findFirstEven(start, end) {
	 
		for (let i = start; i <= end; i++) {
			if (i % 2 === 0) {
				return i
			} 
	}
	return "Чётных чисел нет"
		}

console.log(findFirstEven(1, 10));
console.log(findFirstEven(9, 9));
console.log(findFirstEven(1, 3));
console.log(findFirstEven(3, 5));


// Пример работы:
// console.log(findFirstEven(1, 10)); // 2
// console.log(findFirstEven(9, 9)); // "Чётных чисел нет"
