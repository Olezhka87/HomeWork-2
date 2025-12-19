import { todoKeys, errTodoNotFound } from "./constants.js";

const getNewTodoId = (todos) => {
  return todos.reduce((maxId, todo) => {
    return Math.max(maxId, todo[todoKeys.id]);
  }, 0) + 1;
}; 

export const createTodo = (todos, text) => {
  const newTodo = { 
    [todoKeys.id]: getNewTodoId(todos), 
    [todoKeys.text]: text,
    [todoKeys.is_completed]: false, 
  };

  todos.push(newTodo);
  return newTodo;
}

export const completeTodoById = (todos, todoId) => {
  const todo = todos.find(todo => todo[todoKeys.id] === todoId);
  if (todo === undefined) {
    console.error(errTodoNotFound(todoId));
    return null;
  }
  todo[todoKeys.is_completed] = !todo[todoKeys.is_completed];
  return todo;
}

export const deleteTodoById = (todos, todoId) => {
  const todoIndex = todos.findIndex(todo => todo[todoKeys.id] === todoId);
  if (todoIndex === -1) {
    console.error(errTodoNotFound(todoId));
    return todos;
  } else {
    const deletedTodo = todos[todoIndex];
    todos.splice(todoIndex, 1);
    return deletedTodo;
  }
}

export const editTodoById = (todos, todoId, newText) => {
  const editTodoFind = todos.find(todo => todo[todoKeys.id] === todoId);
  if (!editTodoFind) {
    console.error(errTodoNotFound(todoId));
    return null;
  } else {
    editTodoFind[todoKeys.text] = newText;
    return editTodoFind;
  }
}