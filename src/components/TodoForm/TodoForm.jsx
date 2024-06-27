import { useState } from 'react';
import { Button } from '../UI/Button';
import styles from './TodoForm.module.scss';

export const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState('');

  const onSubmitHandler = (event) => {
    event.preventDefault();
    text.trim() !== '' && addTodo(text);
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
      <Button children={'Submit'} />
    </form>
  );
};
