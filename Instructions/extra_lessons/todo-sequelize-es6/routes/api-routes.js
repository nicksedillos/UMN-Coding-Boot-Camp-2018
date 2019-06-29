// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
const db = require('../models');

// Routes
// =============================================================

module.exports = (app) => {
  // GET route for getting all of the todos
  app.get('/api/todos', (req, res) => {
    db.Todo.findAll()
      .then((todos) => {
        res.json(todos);
      });
  });

  // POST route for saving a new todo. We can create a todo using the data on req.body
  app.post('/api/todos', (req, res) => {
    db.Todo.create({
      text: req.body.text,
      complete: req.body.complete,
    })
      .then((newTodo) => {
        res.json(newTodo);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  // DELETE route for deleting todos. We can access the ID of the todo to delete in
  // req.params.id
  app.delete('/api/todos/:id', (req, res) => {
    const { id } = req.params;

    db.Todo.findById(id)
      .then(todo => todo.destroy())
      .then((destroyedTodo) => {
        res.json(destroyedTodo);
      });
  });

  // PUT route for updating todos. We can access the updated todo in req.body
  app.put('/api/todos', (req, res) => {
    const { id, text, complete } = req.body;

    db.Todo.findById(id)
      .then(todo => todo.update({ text, complete }))
      .then((updatedTodo) => {
        res.json(updatedTodo);
      });
  });
};
