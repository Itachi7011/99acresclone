import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
// import { useEffect } from "react";
// import { useContext } from "react";

const Login = () => {
  let name, value;
  const [user, setUser] = useState({ email: "", password: "" });

  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  return (
    <>
      <div className="main-body" style={{marginTop:"10rem"}}>
        {/* Form Starts Here */}
        <form className="form" action="/adminLogin" method="POST">
          <div className="loginCSS">
            <div class="login-wrap">
              {" "}
              <h2> Admin Login Please : </h2>
              <div class="form">
                <input
                  type="text"
                  name="email"
                  onChange={handleInput}
                  placeholder="Username"
                />
                <input
                  type="password"
                  name="password"
                  onChange={handleInput}
                  placeholder="Password"
                />
                <button type="submit" value="signUp">
                  {" "}
                  Login{" "}
                </button>
                <NavLink to="/new-user-Register">
                  <p> Don't have an account? Register </p>
                </NavLink>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
