import { RiDeleteBin2Line, RiTodoFill } from 'react-icons/ri';
import { FaCheck } from 'react-icons/fa';
import styles from './Todo.module.scss';

export const Todo = ({ todo, deleteTodo, toggleTodo }) => {
  return (
    <div
      className={`${styles.Todo} ${
        todo.isCompleted ? styles.Todo__complete : ''
      }`}
    >
      <RiTodoFill className={styles.Todo__icon} />
      <p className={styles.Todo__text}>{todo.text}</p>
      <RiDeleteBin2Line
        className={styles.Todo__delete}
        onClick={() => deleteTodo(todo.id)}
      />
      <FaCheck
        className={styles.Todo__check}
        onClick={() => toggleTodo(todo.id)}
      />
    </div>
  );
};
