import { useSelector } from "react-redux";
import Navbar from "../../component/Navbar";
import Employee from "./Employee";
import styles from "./ListOfEmployees.module.css";
import { Link } from "react-router-dom";

function LIstOfEmployees() {
  const employee = useSelector((store) => store.addEmployee.employee);
  console.log(employee);

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
