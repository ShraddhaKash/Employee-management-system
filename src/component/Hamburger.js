import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../features/dashboardLogin/loginSlice";
import { clearListItems } from "../features/addEmployee/addEmployeeSlice";
import styles from "./Hamburger.module.css";

function Hamburger() {
  const email = useSelector((store) => store.login.email);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleLogout() {
    dispatch(logoutUser());
    dispatch(clearListItems());
    navigate("/");
  }

  return (
    <div className={styles.hamburger}>
      <span>{email}</span>
      <button className={styles.btn} onClick={handleLogout}>
        Log Out
      </button>
    </div>
  );
}

export default Hamburger;
