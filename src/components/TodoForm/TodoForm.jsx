import { useState } from 'react';
import './TodoForm.module.scss';

export const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState('');

  const onSubmitHandler = (event) => {
    event.preventDefault();
    addTodo(text);
    setText('');
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        value={text}
        type="text"
        placeholder="Enter new todo"
        onChange={(event) => setText(event.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};
