import { Todo } from '../Todo';
import './TodoList.module.scss';

export const TodoList = ({ todos }) => {
  return todos.map((todo, index) => <Todo key={index} todo={todo} />);
};
