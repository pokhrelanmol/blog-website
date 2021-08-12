import React, { useContext } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import "../css/nav.css";
import { UserContext } from "./GlobalContext";

const Nav = () => {
  const { pathname } = useLocation();

  const { user } = useContext(UserContext);
  return (
    <>
      <div className="nav-container">
        <h2 >
          <Link className = "brand" to="/"> Blog</Link>
        </h2>
        {pathname && pathname.includes("login") ? null : (
          <ul>
            <NavLink to="/" className="nav-item" activeClassName="active-class">
              Home
            </NavLink>
            <NavLink
              to="/contact"
              className="nav-item"
              activeClassName="active-class"
            >
              Contact
            </NavLink>
          </ul>
        )}
        {user ? (
          <>
            <Link to="/login" className="logout">
              Logout
            </Link>

            <h4> Hi, {user}</h4>
          </>
        ) : (

          <Link to="/login" className="logout">
            Login to Start Posting
          </Link>
        )}
      </div>
    </>
  );
};

export default Nav;
