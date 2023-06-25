const Todo = require('./todoModel');

exports.getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.getAll();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving todos' });
  }
};

exports.createTodo = async (req, res) => {
  try {
    const todo = new Todo(req.body);
    await todo.save();
    res.status(201).json(todo);
  } catch (error) {
    res.status(500).json({ message: 'Error creating todo' });
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const todo = await Todo.update(req.params.id, req.body);
    res.json(todo);
  } catch (error) {
    res.status(500).json({ message: 'Error updating todo' });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    await Todo.delete(req.params.id);
    res.status(204).json({ message: 'Todo deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting todo' });
  }
};
