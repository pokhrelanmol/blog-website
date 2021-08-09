import React, { useContext, useState } from "react";
import "../css/login.css";
import { Link } from "react-router-dom";
import { UserContext } from "./GlobalContext";

const Login = () => {
  const{user,setUser}= useContext(UserContext)
  const [userName, setUserName] = useState("");
  
  const handleChange = (e) => {
    setUserName(e.target.value);
  };

  const handleClick = () => {
    if (userName === "") {
      alert("field cannot be blank");
    }
  setUser(userName)
  };
  return (
    <>
        <div className="login-container">
          <div className="login-wrapper">
            <h1 className="heading"> Login</h1>
            <div className="form-wrapper">
              <label htmlFor="user-name">
                Username:
                <input
                  type="text"
                  id="user-name"
                  placeholder="Your lucky Name"
                  value={userName}
                  onChange={handleChange}
                />
              </label>
              <label htmlFor="password">
                Password:
                <input type="password" id="password" placeholder="Password" />
              </label>
              <Link
                to="/"
                className="login"
                onClick={() => handleClick()}
              >
                Let's Go
              </Link>
            </div>
          </div>
        </div>
    </>
  );
};

export default Login;
