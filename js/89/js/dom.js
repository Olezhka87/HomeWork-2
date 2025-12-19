import { todoKeys } from "./constants.js";
import { createTodo, completeTodoById, deleteTodoById } from "./service.js";
import { setTodosToLocalStorage } from "./storage.js";

const formResult = document.querySelector('.form');
const inputResult = document.querySelector('.input');
const todosResult = document.querySelector('.todos');

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
  
  const todoElement = content.querySelector('.todo-item');
  return todoElement;
}

export const renderTodos = todos => {
  todosResult.innerHTML = "";
  
  todos.forEach(todo => {
    const todoElement = createTodoElement(todo);
    
    if (todo[todoKeys.is_completed]) {
      todoElement.classList.add("completed");
      const checkbox = todoElement.querySelector('.todo-checkbox');
      const text = todoElement.querySelector('.todo-text');
      checkbox.classList.add("completed");
      text.classList.add("completed");
    }
    
    todosResult.prepend(todoElement);

    const deleteBtn = todoElement.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', () => {
      deleteTodoById(todos, todo[todoKeys.id]);
      setTodosToLocalStorage(todos);
      todoElement.remove();
    });

    const checkbox = todoElement.querySelector('.todo-checkbox');
    const text = todoElement.querySelector('.todo-text');
    checkbox.addEventListener('click', () => {
      completeTodoById(todos, todo[todoKeys.id]);
      setTodosToLocalStorage(todos);
      checkbox.classList.toggle('completed');
      text.classList.toggle('completed');
      todoElement.classList.toggle('completed');
    });
  });
}

function handleCreateTodo(todos, text) {
  const todoItem = createTodo(todos, text);
  const element = createTodoElement(todoItem);
  setTodosToLocalStorage(todos);
  
  const todoDelete = element.querySelector(".delete-btn");
  todoDelete.addEventListener("click", () => {
    deleteTodoById(todos, todoItem[todoKeys.id]);
    setTodosToLocalStorage(todos);
    element.remove();
  });

  const todoComplete = element.querySelector(".todo-checkbox");
  const todoText = element.querySelector(".todo-text");
  
  todoComplete.addEventListener("click", () => {
    completeTodoById(todos, todoItem[todoKeys.id]);
    setTodosToLocalStorage(todos);
    todoComplete.classList.toggle("completed");
    todoText.classList.toggle("completed");
    element.classList.toggle("completed");
  });

  todosResult.prepend(element);
  return element;
}

export const initTodoHandlers = (todos) => {
  formResult.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const text = inputResult.value.trim();
    if (text === "") {
      return;
    }
    
    handleCreateTodo(todos, text);
    inputResult.value = "";
  });
}