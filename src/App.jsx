import { useState } from 'react';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import './App.scss';

export const App = () => {
  const [todos, setTodos] = useState([]);

  // Обработчик добавления задач
  const addTodoHandler = (text) => {
    setTodos([...todos, text]);
  };

  return (
    <div className="App">
      <h1 className="App__title">Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      <TodoList todos={todos} />
    </div>
  );
};
