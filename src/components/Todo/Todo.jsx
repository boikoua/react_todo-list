import { RiTodoFill } from 'react-icons/ri';
import styles from './Todo.module.scss';

export const Todo = ({ todo, deleteTodo, index }) => {
  return (
    <div className={styles.Todo} onDoubleClick={() => deleteTodo(index)}>
      <RiTodoFill className={styles.Todo__icon} />
      <p className={styles.Todo__text}>{todo}</p>
    </div>
  );
};
