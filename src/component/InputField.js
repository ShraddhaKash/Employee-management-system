import styles from "./InputField.module.css";

function InputField({ type, id, placeholder, errorMessage, onChange, value }) {
  return (
    <div>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className={`${styles.inputField}`}
        onChange={(e) => onChange(e.target.value)}
        defaultValue={value}
        required
      ></input>
      <p className={styles.error}>{errorMessage && errorMessage}</p>
    </div>
  );
}

export default InputField;
