import styles from "./SelectField.module.css";

function SelectField({ onChange, value }) {
  return (
    <select
      className={styles.selectField}
      id="domain"
      defaultValue={value}
      onChange={(e) => onChange(e.target.value)}
      required
    >
      <option value="">DOMAIN</option>
      <option value="Testing">Testing</option>
      <option value="Development">Development</option>
      <option value="Operations">Operations</option>
      <option value="Accounts">Accounts</option>
    </select>
  );
}

export default SelectField;
