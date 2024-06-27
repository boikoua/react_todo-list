import { Todo } from '../Todo';
import styles from './TodoList.module.scss';

export const TodoList = ({ todos, deleteTodo, toggleTodo }) => {
  return (
    <div className={styles.TodoList}>
      {todos.length !== 0 ? (
        todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
          />
        ))
      ) : (
        <h2>Todo list is empty</h2>
      )}
    </div>
  );
};
