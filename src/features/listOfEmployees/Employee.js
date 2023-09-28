import styles from "./Employee.module.css";
import Data from "./Data";
import { useSelector } from "react-redux";

function Employee() {
  const EmpData = useSelector((store) => store.addEmployee.employee);

  return (
    <div>
      <table className={styles.tbl} align="left">
        <thead>
          <tr style={{ borderBottom: "1px solid white" }}>
            <th>Name</th>
            <th>Email ID</th>
            <th>Phone No</th>
            <th>Domain</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {EmpData.map((emp) => (
            <Data emp={emp} key={emp._id} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Employee;
