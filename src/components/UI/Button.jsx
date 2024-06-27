import styles from './Button.module.scss';

export const Button = ({ onClick, children, title, disabled = false }) => {
  return (
    <button
      className={styles.Button}
      onClick={onClick}
      title={title}
      disabled={disabled}
      type="submit"
    >
      {children}
    </button>
  );
};
