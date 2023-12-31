import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import Hamburger from "./Hamburger";

function Navbar() {
  const [isShow, setIsShow] = useState(false);

  function handleClick() {
    setIsShow((isShow) => !isShow);
  }

  return (
    <nav>
      <div className={styles.navbar}>
        <Link to={"/list-of-employees"}>
          <button className={styles.navHeading}>List of employees</button>
        </Link>
        <div className={styles.navBtnDiv}>
          <Link to="/weather">
            <button className={styles.navBtn}>Search Weather</button>
          </Link>

          <svg
            onClick={handleClick}
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 80 70"
            fill="none"
          >
            <g clip-path="url(#clip0_2217_51)">
              <path
                d="M8.75 52.5H61.25V46.6667H8.75V52.5ZM8.75 37.9167H61.25V32.0833H8.75V37.9167ZM8.75 17.5V23.3333H61.25V17.5H8.75Z"
                fill="white"
              />
            </g>
          </svg>
        </div>
      </div>
      <div className={styles.hamburgerDiv}>{isShow && <Hamburger />}</div>
    </nav>
  );
}

export default Navbar;
