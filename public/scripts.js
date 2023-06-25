const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

todoForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const title = todoInput.value.trim();
  if (!title) return;
  const response = await fetch('/todos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, completed: false }),
  });
  const todo = await response.json();
  addTodoToList(todo);
  todoInput.value = '';
});

async function fetchTodos() {
  const response = await fetch('/todos');
  const todos = await response.json();
  todos.forEach(addTodoToList);
}

function addTodoToList(todo) {
  const li = document.createElement('li');
  li.textContent = todo.title;
  todoList.appendChild(li);
}

fetchTodos();
