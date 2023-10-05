import styles from "./SelectField.module.css";

function SelectField({ onChange, value }) {
  const options = [
    {
      value: "",
      option: "DOMAIN",
    },
    {
      value: "Testing",
      option: "Testing",
    },
    {
      value: "Development",
      option: "Development",
    },
    {
      value: "Operations",
      option: "Operations",
    },
    {
      value: "Accounts",
      option: "Accounts",
    },
  ];

  return (
    <select
      className={styles.selectField}
      id="domain"
      defaultValue={value}
      onChange={(e) => onChange(e.target.value)}
      required
    >
      {options.map((op) => (
        <option value={op.value} key={op.value}>
          {op.option}
        </option>
      ))}
    </select>
  );
}

export default SelectField;
