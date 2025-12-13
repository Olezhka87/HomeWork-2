"use strict";

const todoKeys = {
	id: "id",
	text: "text",
	is_completed: "is_completed",
};

const todos = [];

const errTodoNotFound = todoId => `Todo with id ${todoId} not found`;

const getNewTodoId = (todos) => {
	return todos.reduce((maxId, todo) => {
		return Math.max(maxId, todo.id)
	}, 0) +1;
}; 

const createTodo = (todos, text) => {
	

	const newTodo = { 
		[todoKeys.id]: getNewTodoId(todos), 
		[todoKeys.text]: text,
		[todoKeys.is_completed]: false, 
	};

	todos.push(newTodo);
	return newTodo;
}

const completeTodoById = (todos, todoId) => {
	const todo = todos.find(todo => todo[todoKeys.id] === todoId);
	if (todo === undefined) {
		console.error(errTodoNotFound(todoId));
		return null
	}
	todo[todoKeys.is_completed] = !todo[todoKeys.is_completed];
	return todo;
}

const deleteTodoById = (todos, todoId) => {
	const todoDel = todos.findIndex(todoDel => todoDel[todoKeys.id] === todoId);
	if (todoDel === -1) {
		console.error(errTodoNotFound(todoId));
		return todos
	} else {
		const deletedTodo = todos[todoDel]
		todos.splice(todoDel, 1)
		return deletedTodo
	}
}

const editTodoById = (todos, todoId, newText) => {
	const editTodoFind = todos.find(editTodo => editTodo[todoKeys.id] === todoId);
	if (!editTodoFind) {
		console.error(errTodoNotFound(todoId));
		return null 
	} else {
		editTodoFind[todoKeys.text] = newText;
		return editTodoFind
	}
		
}

// createTodo(todos, "Новая задача");
// completeTodoById(todos, 1);
// deleteTodoById(todos, 1);
// editTodoById(todos, 1, "Текст проверка - замена");


//////////////// Задание 76 DOM ////////////

		
// При помощи метода querySelector получаем элементы .form, .input и .todos

const formResult = document.querySelector('.form')
const inputResult = document.querySelector('.input');
const todosResult = document.querySelector('.todos');

// Создаем функцию createTodoElement(text), которая будет создавать todo в виде разметки

function createTodoElement(todo) {
  const content = document.createElement('div');
	
	content.innerHTML = `<div class="todo-item">
                <div class="todo-checkbox"></div>
                <div class="todo-content">
                    <div class="todo-text">${todo[todoKeys.text]}</div>
                    <div class="todo-id">ID: ${todo[todoKeys.id]}</div>
                </div>
                <div class="todo-actions">
                    
                    <div class="todo-btn delete-btn" title="Удалить">
                        <i class="fas fa-trash-alt"></i>
                    </div>
                </div>
            </div>`;
						const todoElement = content.querySelector('.todo-item')
						return todoElement

} 

// Создаем функцию handleCreateTodo(todos, text), которая будет вызывать createTodo и createTodoElement
 
function handleCreateTodo(todos, text) {
	const todoItem = createTodo(todos, text)
	const element = createTodoElement(todoItem);

	const todoDelete = element.querySelector(".delete-btn");
	todoDelete.addEventListener("click", () => {
	 deleteTodoById(todos, todoItem.id);
	 element.remove();
	})

  const todoComplete = element.querySelector(".todo-checkbox");
	todoComplete.addEventListener("click", () => {
		completeTodoById(todos, todoItem.id);
		todoComplete.classList.toggle("completed")

		const todoText = element.querySelector(".todo-text");
		todoText.classList.toggle("completed");
	})



	todosResult.prepend(element);
	return element
}


// handleCreateTodo(todos, "Купить хлеб");


formResult.addEventListener("submit" , (event) => {
	event.preventDefault();

	const text = inputResult.value.trim()
	if (text == "") {
		return;
	}


	handleCreateTodo(todos, inputResult.value.trim())
	inputResult.value = "";

});



