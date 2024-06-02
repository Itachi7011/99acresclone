import React, { useState } from "react";
import { useEffect } from "react";

const AddOfficailPhoneNo = () => {
  const [Data, setData] = useState("");

  let name, value;
  const [user, setUser] = useState({
    phoneNo: "",
    additionalComment: "",
    dateOfFormSubmission: "",
  });
  const UserDetails = async () => {
    try {
      const res = await fetch("/userProfile", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();

      setData(data);

      if (!res === 200) {
        throw new Error(`Error during retreive data - ${Error}`);
      }

      if (!res === 200) {
        throw new Error(`Error during retreive data - ${Error}`);
      }
    } catch (err) {
      console.log(`Error during catch of User's Data -  ${err}`);
    }
  };
  useEffect(() => {
    UserDetails();
  }, []);
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
          <div className="postNewPropertyHeading">
            <h3> Add New Website's Offical Phone Number : </h3>
          </div>
          <form action="/addOfficalPhoneNo" method="POST">
            {/* Hidden Date Of Form Submission : */}
            <input
              type="hidden"
              name="dateOfFormSubmission"
              value={new Date()}
            ></input>
            

            <div className="formDivRegistraion">
              {" "}
              <label for="exampleFormControlInput1" className="form-label">
                Phone Number :{" "}
              </label>
              <input
                autoComplete="off"
                onChange={handleInput}
                type="number"
                className="form formInputRegistraion"
                id="exampleFormControlInput1"
                name="phoneNo"
                placeholder=""
              />
            </div>
            <div className="formDivRegistraion">
              {" "}
              <label for="exampleFormControlInput1" className="form-label">
                Additional Comments (Optional):{" "}
              </label>
              <input
                autoComplete="off"
                onChange={handleInput}
                type="text"
                className="form formInputRegistraion"
                id="exampleFormControlInput1"
                name="additionalComment"
                placeholder=""
              />
            </div>

                        

            <button
              type="submit"
              value="signUp"
              className="registerBtn"
              style={{ float: "right", fontSize: "large" }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddOfficailPhoneNo;
