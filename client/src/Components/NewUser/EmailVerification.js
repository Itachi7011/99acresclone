import React, { useState } from "react";

const EmailVerification = () => {
  let name, value;
  const [user, setUser] = useState({
    email: "",
    phoneNo: "",
    dateOfEmailValidation: "",
    otp: "",
  });
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <>
      <div className="main-body1">
        <div className="registrationForm">
          <div className="nav-btn">
            <h3> New User Registration : </h3>
          </div>
          <form action="/userEmailVerificationForm" method="POST">
            {/* Hidden Date Of Form Submission : */}
            <input
              type="hidden"
              name="dateOfEmailValidation"
              value={new Date()}
            ></input>
            <div className="formDivRegistraion">
              {" "}
              <label for="exampleFormControlInput1" className="form-label">
                Email :{" "}
              </label>
              <input
                autoComplete="off"
                onChange={handleInput}
                type="text"
                className="form formInputRegistraion"
                id="exampleFormControlInput1"
                name="email"
                placeholder="Your Email Id "
              />
            </div>

            <div className="formDivRegistraion">
              {" "}
              <label for="exampleFormControlInput1" className="form-label">
                Phone No: :{" "}
              </label>
              <input
                autoComplete="off"
                onChange={handleInput}
                type="text"
                className="form formInputRegistraion"
                id="exampleFormControlInput1"
                name="phoneNo"
                placeholder="Your Name"
              />
            </div>

            <div className="formDivRegistraion">
              {" "}
              <label for="exampleFormControlInput1" className="form-label">
                OTP :{" "}
              </label>
              <input
                autoComplete="off"
                onChange={handleInput}
                type="text"
                className="form formInputRegistraion"
                id="exampleFormControlInput1"
                name="otp"
                placeholder="Password must be atleast 8 digits and create a strong , unpredectible password"
              />
            </div>

            <button
              type="submit"
              value="signUp"
              className="registerBtn"
              style={{ float: "right", fontSize: "large" }}
            >
              Verify
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EmailVerification;
