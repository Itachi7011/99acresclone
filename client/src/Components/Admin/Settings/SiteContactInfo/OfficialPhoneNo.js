import React, { useState } from "react";
import { useEffect } from "react";
import {Helmet} from "react-helmet";

const OfficialPhoneNo = () => {
  const [Data, setData] = useState("");
  const [image, setImage] = useState("");

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

  const inputHandler = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };
  
  if (Data.userType !== "admin") {

    return <div style={{margin:"10% 10%", textAlign:"center"}}>sorry, only admin can visit this page.</div>;

  }

  return (
    <>
        <div className="container" style={{ backgroundColor: "#F1F1EC" , marginTop:"5rem"}}>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Change PhoneNo</title>
                {/* <link rel="canonical" href="http://mysite.com/example" /> */}
            </Helmet>
          <div className="row justify-content-center">
            <div
              className="col-lg-12"
              style={{
                paddingTop: "1rem",
                paddingLeft: "1rem",
                paddingRight: "1rem",
                paddingBottom: "3rem",
                borderRadius: "5px",
              }}
            >
              <h3 className="text-center" style={{ marginBottom: "4rem" }}>
                Change Site's Official Phone Number
              </h3>
              <div
                className="innerDiv container"
                style={{
                  backgroundColor: "white",
                  padding: "4rem 5rem 2rem 1rem",
                  borderRadius: "5px",
                }}
              >
                <div className="row">
                  <div className="col-12 col-lg-2 mt-2 ">
                    <h6 style={{ marginBottom: "2.7rem", fontSize: "1rem" }}>
                      Site's Official Phone No. :
                    </h6>
                    <h6 style={{ marginBottom: "2.7rem", fontSize: "1rem" }}>
                    Additional Comment (optional) :
                    </h6>
                    
                    
                  </div>
                  <div className="col-lg-8">
                    <form
                      action="/changeOfficialPhoneNo"
                      method="post"
                    >
                      
                      <input
                        type="Number"
                        name="phoneNo"
                        style={{ fontWeight: "400" }}
                        onChange={inputHandler}
                        placeholder=""
                        className="form-control mb-4"
                      />
                      <input
                        type="text"
                        name="additionalComment"
                        style={{ fontWeight: "400" }}
                        onChange={inputHandler}
                        placeholder=""
                        className="form-control mb-4"
                      />
                      
                      
                      <br />
                      <br />
                      <button className="btn btn-primary me-4" type="submit">
                        {" "}
                        Submit
                      </button>
                      <button className="btn btn-primary" type="reset">
                        {" "}
                        Reset
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default OfficialPhoneNo;
