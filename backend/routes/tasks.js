const express = require('express');
const Task = require('../models/task.js');

const router = express.Router();

router.post('/', (req, res) => {
  const { value } = req.body;

  const newTask = new Task({
    value,
  });

  newTask.save()
    .then(() => {
      res.json({ newTask });
    })
    .catch((err) => {
      res.json({ error: true, err });
    });
});

router.get('/', async (req, res) => {
  const tasks = await Task.find();
  
  res.json({ tasks });
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  
  const task = await Task.findById(id);

  task.isVisible = false;

  task.save()
    .then(() => {
      res.json({ success: true });
    })
    .catch((err) => {
      res.json({ error: true, err });
    });
});

router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const { flag } = req.body;

  const task = await Task.findById(id);
  
  task[flag] = !task[flag];
  
  task.save()
    .then(() => {
      res.json({ success: true });
    })
    .catch((err) => {
      res.json({ error: true, err });
    });
});

module.exports = router;
