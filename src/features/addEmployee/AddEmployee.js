import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./addEmployeeSlice";
import { useSelector } from "react-redux/es/hooks/useSelector";
import styles from "./AddEmployee.module.css";
import Button from "../../component/Button";
import InputField from "../../component/InputField";
import SelectField from "../../component/SelectField";
import DialogueBox from "../../component/DialogueBox";

function AddEmployee() {
  const employee = useSelector((store) => store.addEmployee.employee);

  console.log(employee);
  const validRegexEmail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [domain, setDomain] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [isShowDialogueBoxSubmit, setIsShowDialogueBoxSubmit] = useState(false);
  const [isShowDialogueBoxDiscard, setIsShowDialogueBoxDiscard] =
    useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleFname(fn) {
    setFname(fn);
  }

  function handleLname(ln) {
    setLname(ln);
  }

  function handleEmail(em) {
    setEmail(em);
  }
  function handlePhone(pn) {
    setPhone(pn);
  }
  function handleDomain(dm) {
    setDomain(dm);
  }
  function handleOnSubmit(e) {
    e.preventDefault();

    if (!email.match(validRegexEmail)) {
      setEmailError("ENTER VALID EMAIL ADDRESS");
    } else {
      setEmailError("");
    }
    if (phone.length !== 10) {
      setPhoneError("ENTER VALID PHONE NUMBER");
    } else {
      setPhoneError("");
    }
    if (
      fname &&
      lname &&
      email.match(validRegexEmail) &&
      phone.length === 10 &&
      domain
    ) {
      setIsShowDialogueBoxSubmit(true);
    }
  }
  function handleOnCancelSubmit() {
    setIsShowDialogueBoxSubmit(false);
  }
  function handleOnConfirmSubmit() {
    dispatch(addItem({ fname, lname, email, phone, domain }));
    navigate("/list-of-employees");
  }
  function handleOnCancelDiscard() {
    setIsShowDialogueBoxDiscard(false);
  }
  function handleOnConfirmDiscard() {
    navigate(-1);
  }
  function handleOnDiscard(e) {
    e.preventDefault();
    setIsShowDialogueBoxDiscard(true);
  }

  return (
    <div className={styles.main}>
      <p className={styles.heading}>ADD EMPLOYEE</p>
      <div className={styles.addEmployee}>
        <form name="form">
          <div className={styles.inputDiv}>
            <InputField
              type={"text"}
              id={"fname"}
              placeholder={"FIRST NAME"}
              onChange={(fn) => handleFname(fn)}
            />
            <InputField
              type={"text"}
              id={"lname"}
              placeholder={"LAST NAME"}
              onChange={(ln) => handleLname(ln)}
            />
            <InputField
              type={"email"}
              id={"email"}
              placeholder={"EMAIL"}
              errorMessage={emailError}
              onChange={(em) => handleEmail(em)}
            />
            <InputField
              type={"phone"}
              id={"phone"}
              placeholder={"PHONE NO"}
              errorMessage={phoneError}
              onChange={(pn) => handlePhone(pn)}
            />
            <SelectField onChange={(dm) => handleDomain(dm)} />
          </div>
          <div className={styles.buttonDiv}>
            <Button className={"btnWhite"} onClick={(e) => handleOnDiscard(e)}>
              DISCARD
            </Button>

            <Button className={"btnBlue"} onClick={(e) => handleOnSubmit(e)}>
              SUBMIT
            </Button>
          </div>
        </form>
      </div>
      {isShowDialogueBoxSubmit && (
        <DialogueBox
          onClickCancel={handleOnCancelSubmit}
          onClickConfirm={handleOnConfirmSubmit}
        />
      )}
      {isShowDialogueBoxDiscard && (
        <DialogueBox
          onClickCancel={handleOnCancelDiscard}
          onClickConfirm={handleOnConfirmDiscard}
        />
      )}
    </div>
  );
}

export default AddEmployee;
