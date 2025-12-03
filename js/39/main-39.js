// Задача 1.
// Создайте объект person с несколькими свойствами, содержащими информацию о вас. Затем выведите значения этих свойств в консоль.


const person2 = {}
const person = {
	name: "ОлегWeb",
	age: "22, а по паспорту 38",
	aboutMe: {
		bad: "Вредых привычек нет",
		good: "Не пью и не курю",
	},
	sayHi() {
		console.log("Привет, это метод...мы его нашли.")
	}
}

console.log(`Имя 〠: ${person.name}`);
console.log(`Мне еще: ${person.age} лет ☀`);
console.log(`Уважаемый работодатель - прикиньте ☺︎: ${person.aboutMe.bad}`);
console.log(`Обо мне ✔: ${person.aboutMe.good}`);


// Задача 2.
// Создайте функцию isEmpty, которая проверяет является ли переданный объект пустым. Если объект пуст - верните true, в противном случае false.

function isEmpty (object) {
	for (key in object) { 
		return false; 
	}	return true; 
}

console.log(isEmpty(person) + " ->> Найден объект ✔︎");
console.log(isEmpty(person2) + " ->> Объект пуст ☐");

// Задача 3.
// Создайте объект task с несколькими свойствами: title, description, isCompleted.
// Напишите функцию cloneAndModify(object, modifications), которая с помощью оператора spread создает копию объекта и применяет изменения из объекта modifications.
// Затем с помощью цикла for in выведите все свойства полученного объекта.


const task = {
	title: "Делаю домашку",
	description: "Домашку делаю, чтобы понять JS и двигаться дальше",
	isCompleted: false
}
 function cloneAndModify(object, modifications) {
	const newObjest = {...object, ...modifications }
	for (key in newObjest) {
		console.log(newObjest[key]);	
	}
	}
	cloneAndModify(task, {isCompleted: true});


// Задача 4.
// Создайте функцию callAllMethods, которая принимает объект и вызывает все его методы.


function callAllMethods (object) { 
	for (let key in object) {
		if (typeof object[key] === "function") {
			object[key]()
		} else {
		console.log(`Это свойство: ${key}`)}
	}
	}

callAllMethods(person);


