import { useDispatch } from "react-redux";
import styles from "./Employee.module.css";
import { deleteItem, editItem } from "../addEmployee/addEmployeeSlice";
import { useNavigate } from "react-router-dom";

function Data({ emp }) {
  const { id, fname, lname, email, phone, domain } = emp;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleEdit(id) {
    console.log(id);
    navigate(`/edit-employee/${id}`);
  }

  return (
    <>
      <tr>
        <td>{`${fname} ${lname}`}</td>
        <td>{email}</td>
        <td>{phone}</td>
        <td>{domain}</td>
        <td className={styles.action}>
          <span className={styles.editBtn} onClick={() => handleEdit(id)}>
            <strong>Edit</strong>
          </span>
          <span
            className={styles.deleteBtn}
            onClick={() => dispatch(deleteItem(id))}
          >
            <strong>Delete</strong>
          </span>
        </td>
      </tr>
    </>
  );
}

export default Data;
