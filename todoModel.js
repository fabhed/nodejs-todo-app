const fs = require('fs').promises;
const path = require('path');
const FILE_PATH = path.join(__dirname, 'todos.json');

class Todo {
  constructor({ id, title, completed }) {
    this.id = id;
    this.title = title;
    this.completed = completed;
  }

  static async getAll() {
    try {
      const data = await fs.readFile(FILE_PATH, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      return [];
    }
  }

  async save() {
    const todos = await Todo.getAll();
    this.id = todos.length + 1;
    todos.push(this);
    await fs.writeFile(FILE_PATH, JSON.stringify(todos, null, 2));
  }

  static async update(id, data) {
    const todos = await Todo.getAll();
    const index = todos.findIndex(todo => todo.id === parseInt(id));
    if (index === -1) {
      throw new Error('Todo not found');
    }
    todos[index] = { ...todos[index], ...data };
    await fs.writeFile(FILE_PATH, JSON.stringify(todos, null, 2));
    return todos[index];
  }

  static async delete(id) {
    const todos = await Todo.getAll();
    const index = todos.findIndex(todo => todo.id === parseInt(id));
    if (index === -1) {
      throw new Error('Todo not found');
    }
    todos.splice(index, 1);
    await fs.writeFile(FILE_PATH, JSON.stringify(todos, null, 2));
  }
}

module.exports = Todo;
