import styles from "./Button.module.css";

function Button({ type, children, className, onClick }) {
  return (
    <button type={type} className={styles.btn} onClick={onClick}>
      <span className={styles.btnMessage}>{children}</span>
    </button>
  );
}

export default Button;
