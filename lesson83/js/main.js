
// 83. Объекты



// 1) Создайте объект с вашим описанием(имя, возраст и т.д.).


const userData1 = {
  Oleg: {
    age: 37,
    year_birth: 1987,
    job: 'student'
  }
}

console.log(userData1)




// 2) Создайте метод объекта, который в качестве аргумента будет принимать имя и возвращать строку ‘Hello “переданный аргумент”’.

const sayObject = {
  message: function (name) {
    return `Hello ${name}`;
  }
}

const sayMessage = sayObject.message('Олег');
console.log(sayMessage)


// 3) Создайте массив объектов с описанием пользователей(такой мы делали в уроке). 
// Объявите отдельную переменную, в которой будет храниться количество простых пользователей, начальное значение будет - 0. 
// Обойдите массив пользователей и если пользователь не является админом - прибавьте к ранее созданной переменной единицу. 
// После окончания работы цикла выведите в консоль переменную с количеством простых пользователей.


const user1 = [
  {
    name: 'Sashka',
    isAdmin: false
  },
  {
    name: 'Pashka',
    isAdmin: true
  },
  {
    name: '4eburashka',
    isAdmin: false
  },
  {
    name: 'Sashka2',
    isAdmin: false
  },
  {
    name: 'Pashka2',
    isAdmin: true
  },
  {
    name: '4eburashka2',
    isAdmin: false
  },
  {
    name: 'Sashka3',
    isAdmin: false
  },
  {
    name: 'Pashka3',
    isAdmin: true
  },
  {
    name: '4eburashka3',
    isAdmin: false
  }
]

let userDefault = 0; // Вот тут ошибку долго искал, т.к указал const сначала :) 

for (let i = 0; i < user1.length; i++) {
  const user2 = user1[i];
  if (!user2.isAdmin) {
    userDefault++;
  }

}


console.log(`Количество простых пользователей: ${userDefault}`);

