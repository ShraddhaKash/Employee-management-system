import { useSelector } from "react-redux";
import styles from "./AppLayout.module.css";
import DashboardLogin from "../features/dashboardLogin/DashboardLogin";
import AddEmployee from "../features/addEmployee/AddEmployee";

function AppLayout() {
  const email = useSelector((store) => store.login.email);
  const password = useSelector((store) => store.login.password);
  console.log(email);

  return (
    <div className={styles.main}>
      <p className={styles.heading}>
        {!email && !password ? "WELCOME" : "ADD EMPLOYEE"}
      </p>

      {!email && !password ? <DashboardLogin /> : <AddEmployee />}
    </div>
  );
}

export default AppLayout;
