import './App.scss';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';

export const App = () => {
  return (
    <div className="App">
      <h1 className="App__title">Todo App</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
};
