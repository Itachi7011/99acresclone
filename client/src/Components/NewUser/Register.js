import React, { useState } from "react";

const Register = () => {
  let name, value;
  const [user, setUser] = useState({
    email: "",
    name: "",
    phoneNo: "",
    userType: "",
    state: "",
    district: "",
    fullAddress: "",
    dateOfFormSubmission: "",
    password: "",
    cpassword: "",
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
          <div className="registerHeaderDiv">
            <h3> New User Registration : </h3>
          </div>
          <form action="/newUserRegistration" method="POST">
            {/* Hidden Date Of Form Submission : */}
            <input
              type="hidden"
              name="dateOfFormSubmission"
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
                Name :{" "}
              </label>
              <input
                autoComplete="off"
                onChange={handleInput}
                type="text"
                className="form formInputRegistraion"
                id="exampleFormControlInput1"
                name="name"
                placeholder="Your Name"
              />
            </div>
            <div className="formDivRegistraion">
              {" "}
              <label for="exampleFormControlInput1" className="form-label">
                Gender
              </label>
              <br />
              <div style={{ marginLeft: "2rem" }}>
                {" "}
                Male{" "}
                <input
                  type="radio"
                  name="userType"
                  value="male"
                  
                />
                <br />
              </div>
              <div style={{ marginLeft: "2rem" }}>
                {" "}
                Femal{" "}
                <input
                  type="radio"
                  name="userType"
                  value="female"
                  
                />
                <br />
              </div>
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
                placeholder="Your Phone No."
              />
            </div>
            <div className="formDivRegistraion">
              {" "}
              <label for="exampleFormControlInput1" className="form-label">
                State :{" "}
              </label>
              <input
                autoComplete="off"
                onChange={handleInput}
                type="text"
                className="form formInputRegistraion"
                id="exampleFormControlInput1"
                name="state"
                placeholder=""
              />
            </div>

            <div className="formDivRegistraion">
              {" "}
              <label for="exampleFormControlInput1" className="form-label">
                District :{" "}
              </label>
              <input
                autoComplete="off"
                onChange={handleInput}
                type="text"
                className="form formInputRegistraion"
                id="exampleFormControlInput1"
                name="district"
                placeholder=""
              />
            </div>

            <div className="formDivRegistraion">
              {" "}
              <label for="exampleFormControlInput1" className="form-label">
                Full Address :{" "}
              </label>
              <input
                autoComplete="off"
                onChange={handleInput}
                type="text"
                className="form formInputRegistraion"
                id="exampleFormControlInput1"
                name="fullAddress"
                placeholder=""
              />
            </div>

            <div className="formDivRegistraion">
              {" "}
              <label for="exampleFormControlInput1" className="form-label">
                I am a :
              </label>
              <br />
              <div style={{ marginLeft: "2rem" }}>
                {" "}
                Buyer{" "}
                <input
                  type="radio"
                  name="userType"
                  value="buyer"
                  
                />
                <br />
              </div>
              <div                   style={{ marginLeft: "2rem" }}
>
                {" "}
                Seller
                <input
                  type="radio"
                  name="userType"
                  value="seller"
                />
              </div>
            </div>

            <div className="formDivRegistraion">
              {" "}
              <label for="exampleFormControlInput1" className="form-label">
                Password :{" "}
              </label>
              <input
                autoComplete="off"
                onChange={handleInput}
                type="password"
                className="form formInputRegistraion"
                id="exampleFormControlInput1"
                name="password"
                placeholder="Password must be atleast 8 digits and create a strong , unpredectible password"
              />
            </div>

            <div className="formDivRegistraion">
              {" "}
              <label for="exampleFormControlInput1" className="form-label">
                Confirm Password :{" "}
              </label>
              <input
                autoComplete="off"
                onChange={handleInput}
                type="password"
                className="form formInputRegistraion"
                id="exampleFormControlInput1"
                name="cpassword"
                placeholder=""
              />
            </div>

            <button
              type="submit"
              value="signUp"
              className="registerBtn"
              style={{ float: "right", fontSize: "large" }}
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
