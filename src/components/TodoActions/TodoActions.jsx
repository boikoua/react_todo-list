import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri';
import { Button } from '../UI/Button';
import styles from './TodoAction.module.scss';

export const TodoActions = ({
  resetTodos,
  deletedCompletedTodos,
  completedTodosExist,
}) => {
  return (
    <div className={styles.TodoActions}>
      <Button
        children={<RiRefreshLine />}
        title={'Reset Todos'}
        onClick={resetTodos}
      />
      <Button
        children={<RiDeleteBin2Line />}
        title={'Clear Completed Todos'}
        onClick={deletedCompletedTodos}
        disabled={!completedTodosExist}
      />
    </div>
  );
};
