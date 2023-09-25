import InputField from "../../component/InputField";
import styles from "./DashboardLogin.module.css";
import Button from "../../component/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "./loginSlice";

function DashboardLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleEmail(em) {
    setEmail(em);
  }
  function handlePass(ps) {
    setPassword(ps);
  }

  function handleClick(e) {
    const validRegexEmail =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const validRegexPass =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,16}$/;
    e.preventDefault();
    if (!email.match(validRegexEmail)) {
      setEmailError("ENTER VALID EMAIL ADDRESS");
    } else {
      setEmailError("");
    }
    if (!password.match(validRegexPass)) {
      setPassError(
        "8-16 characters , 1 Special Character, 1 Uppercase, 1 Lowercase, 1 number"
      );
    } else {
      setPassError("");
    }
    if (email.match(validRegexEmail) && password.match(validRegexPass)) {
      dispatch(loginUser(email, password));
      navigate("/add-employee");
    }
  }

  return (
    <div className={styles.main}>
      <p className={styles.heading}>WELCOME</p>
      <div className={styles.dashboardLogin}>
        <form>
          <div className={styles.inputDiv}>
            <InputField
              type={"email"}
              id={"email"}
              placeholder={"USER ID"}
              errorMessage={emailError}
              onChange={(em) => handleEmail(em)}
            />
          </div>
          <div className={styles.inputDiv}>
            <InputField
              type={"password"}
              id={"password"}
              placeholder={"PASSWORD"}
              errorMessage={passError}
              onChange={(ps) => handlePass(ps)}
            />
          </div>

          <Button onClick={(e) => handleClick(e)} type={"login"}>
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}

export default DashboardLogin;
