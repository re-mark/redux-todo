import React from 'react';

import './app.css';

import Header from '../header/header.jsx';
import ToDoList from '../todo-list/todo-list.jsx';
import AddTodo from '../add-todo/add-todo.jsx';

const App = () => {
  return (
    <div className="app">
      <Header />
      <ToDoList />
      <AddTodo />
    </div>
  );
}

export default App;
