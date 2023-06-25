const express = require('express');
const router = express.Router();
const todoController = require('./todoController');

router.get('/todos', todoController.getAllTodos);
router.post('/todos', todoController.createTodo);
router.put('/todos/:id', todoController.updateTodo);
router.delete('/todos/:id', todoController.deleteTodo);

router.get('/', (req, res) => {
  res.sendFile('index.html', { root: './public' });
});

module.exports = router;
