import { useState } from 'react';
import uuid from 'react-uuid';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import './App.scss';

export const App = () => {
  const [todos, setTodos] = useState([]);

  // Функция генерации id

  function id() {
    return uuid();
  }

  // Обработчик добавления задач
  const addTodoHandler = (text) => {
    const newTodo = {
      text: text,
      isCompleted: false,
      id: id(),
    };

    setTodos([...todos, newTodo]);
  };

  // Обработчик удаления задач
  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo };
      })
    );
  };

  return (
    <div className="App">
      <h1 className="App__title">Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHandler}
        toggleTodo={toggleTodoHandler}
      />
    </div>
  );
};
