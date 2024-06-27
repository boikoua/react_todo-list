import { Todo } from '../Todo';
import styles from './TodoList.module.scss';

export const TodoList = ({ todos, deleteTodo }) => {
  return (
    <div className={styles.TodoList}>
      {todos.length !== 0 ? (
        todos.map((todo, index) => (
          <Todo key={index} todo={todo} deleteTodo={deleteTodo} index={index} />
        ))
      ) : (
        <h2>Todo list is empty</h2>
      )}
    </div>
  );
};
