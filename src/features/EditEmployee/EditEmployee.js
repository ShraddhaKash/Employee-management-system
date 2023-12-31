import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { editEmployees } from "../addEmployee/addEmployeeSlice";
import { useSelector } from "react-redux/es/hooks/useSelector";
import styles from "../addEmployee/AddEmployee.module.css";
import Button from "../../component/Button";
import InputField from "../../component/InputField";
import SelectField from "../../component/SelectField";
import DialogueBox from "../../component/DialogueBox";

function AddEmployee() {
  const { _id } = useParams();
  const employee = useSelector((store) => store.addEmployee.employee);
  const employeeDataById = employee.filter((item) => item._id === _id);
  const {
    firstName: currFname,
    lastName: currLname,
    email: currEmail,
    phoneNo: currPhone,
    domain: currDomain,
  } = employeeDataById[0];

  const validRegexEmail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const [fname, setFname] = useState(currFname);
  const [lname, setLname] = useState(currLname);
  const [email, setEmail] = useState(currEmail);
  const [phone, setPhone] = useState(currPhone);
  const [domain, setDomain] = useState(currDomain);
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [isShowDialogueBoxSubmit, setIsShowDialogueBoxSubmit] = useState(false);
  const [isShowDialogueBoxDiscard, setIsShowDialogueBoxDiscard] =
    useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function editEmployee() {
    if (!fname || !lname || !email || !phone || !domain) return;

    const empData = {
      firstName: fname,
      lastName: lname,
      email,
      phoneNo: phone,
      domain,
    };
    dispatch(editEmployees({ _id, empData }));
    navigate("/list-of-employees");
  }

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
      <p className={styles.heading}>EDIT EMPLOYEE</p>
      <div className={styles.addEmployee}>
        <form name="form">
          <div className={styles.inputDiv}>
            <InputField
              type={"text"}
              _id={"fname"}
              placeholder={"FIRST NAME"}
              value={currFname}
              onChange={(fn) => handleFname(fn)}
            />
            <InputField
              type={"text"}
              _id={"lname"}
              placeholder={"LAST NAME"}
              value={currLname}
              onChange={(ln) => handleLname(ln)}
            />
            <InputField
              type={"email"}
              _id={"email"}
              placeholder={"EMAIL"}
              errorMessage={emailError}
              value={currEmail}
              onChange={(em) => handleEmail(em)}
            />
            <InputField
              type={"phone"}
              _id={"phone"}
              placeholder={"PHONE NO"}
              errorMessage={phoneError}
              value={currPhone}
              onChange={(pn) => handlePhone(pn)}
            />
            <SelectField
              onChange={(dm) => handleDomain(dm)}
              value={currDomain}
            />
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
          onClickConfirm={editEmployee}
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
