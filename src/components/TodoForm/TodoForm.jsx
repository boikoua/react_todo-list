import { useState } from 'react';
import styles from './TodoForm.module.scss';

export const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState('');

  const onSubmitHandler = (event) => {
    event.preventDefault();
    addTodo(text);
    setText('');
  };

  return (
    <form className={styles.TodoForm} onSubmit={onSubmitHandler}>
      <input
        className={styles.TodoForm__input}
        value={text}
        type="text"
        placeholder="Enter new todo"
        onChange={(event) => setText(event.target.value)}
      />
      <button className={styles.TodoForm__btn} type="submit">
        Submit
      </button>
    </form>
  );
};
