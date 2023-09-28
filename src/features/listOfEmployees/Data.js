import { useDispatch } from "react-redux";
import styles from "./Employee.module.css";
import { deleteItem } from "../addEmployee/addEmployeeSlice";
import { useNavigate } from "react-router-dom";
import { deleteEmployee } from "../addEmployee/addEmployeeSlice";

function Data({ emp }) {
  const { _id, firstName, lastName, email, phoneNo, domain } = emp;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleEdit() {
    navigate(`/edit-employee/${_id}`);
  }

  return (
    <>
      <tr>
        <td>{`${firstName} ${lastName}`}</td>
        <td>{email}</td>
        <td>{phoneNo}</td>
        <td>{domain}</td>
        <td className={styles.action}>
          <span className={styles.editBtn} onClick={() => handleEdit(_id)}>
            <strong>Edit</strong>
          </span>
          <span
            className={styles.deleteBtn}
            onClick={() => dispatch(deleteEmployee(_id))}
          >
            <strong>Delete</strong>
          </span>
        </td>
      </tr>
    </>
  );
}

export default Data;
