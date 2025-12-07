"user strict";

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

