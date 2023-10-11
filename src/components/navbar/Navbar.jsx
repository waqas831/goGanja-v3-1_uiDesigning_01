import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import {
  body_styles,
  Logo_subheadings,
  Logo_headings,
  Logo_styles,
  main_buttons
}
from '../../global'
const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo" style={Logo_headings}>lamabooking</span>
        </Link>
        {user ? user.username : (
          <div className="navItems">
            <button className="navButton" style={main_buttons}>Register</button>
            <button className="navButton" style={main_buttons}>Login</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
