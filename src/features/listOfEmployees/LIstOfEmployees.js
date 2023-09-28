import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../component/Navbar";
import Employee from "./Employee";
import styles from "./ListOfEmployees.module.css";
import { Link } from "react-router-dom";
import getAllEmployees from "../../service/employeeService";
import { useEffect } from "react";
import { setEmployee } from "../addEmployee/addEmployeeSlice";

function LIstOfEmployees() {
  const dispatch = useDispatch();

  useEffect(() => {
    getAllEmployees().then((res) => {
      dispatch(setEmployee(res.data));
    });
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <div className={styles.btnDiv}>
        <Link to="/add-employee">
          <button className={styles.btn}>
            <span className={styles.btnMessage}>ADD</span>
          </button>
        </Link>
      </div>
      <Employee />
    </div>
  );
}

export default LIstOfEmployees;
