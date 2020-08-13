const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

const tasksRouter = require('./routes/tasks.js');

const app = express();

mongoose.connect('mongodb+srv://user:user@cluster0.8bzam.mongodb.net/todo-redux?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
};

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/tasks', cors(corsOptions), tasksRouter);

app.listen(process.env.PORT || 3003);
