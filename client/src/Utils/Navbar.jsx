import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  const handleLogOut = (e) => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <div>
      <nav className={styles.navbar}>
        <div>
          <Link to="/" style={{ textDecoration: "none" }}>
            <h4>E-Commerce</h4>
          </Link>
        </div>
        <div className={styles.navbar}>
          <ul>
            <li>
              <Link to="/" style={{ textDecoration: "none" }}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" style={{ textDecoration: "none" }}>
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" style={{ textDecoration: "none" }}>
                Contact Us
              </Link>
            </li>

            <li>
              <Link to="/store" style={{ textDecoration: "none" }}>
                Store
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <button className={styles.white_btn} onClick={handleLogOut}>
            <Link to="/login" style={{ textDecoration: "none" }}>
              {" "}
              Logout
            </Link>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
