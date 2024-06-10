import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {Helmet} from "react-helmet";

const PostNewCommercialProperty = () => {
  const navigate = useNavigate();

  const [content, setContent] = useState("");
  const [Data, setData] = useState("");
  const [image, setImage] = useState("");

  let name, value;
  const [user, setUser] = useState({
    bankName: "",
    tenure: "",
    processingFees: "",
    loanAmount: "",
    rateOfInterest:"",
    prepaymentCharges: "",
    foreclosureCharges: "",
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

  const handleSubmit = async (e) => {

    e.preventDefault();



    var bodyFormData = new FormData();

    bodyFormData.append("bankName", user.bankName);

    bodyFormData.append("tenure",user.tenure);

    bodyFormData.append("processingFees", user.processingFees);

    bodyFormData.append("loanAmount", user.loanAmount);

    bodyFormData.append("rateOfInterest", user.rateOfInterest);
    bodyFormData.append("prepaymentCharges", user.prepaymentCharges);

    bodyFormData.append("logo", image);

    bodyFormData.append("foreclosureCharges", user.foreclosureCharges);



    try {

      const response = await axios.post(

        "/addBankOffer",

        bodyFormData,


        {

          headers: {

            "Content-Type": "multipart/form-data",

          },

        }

      );
      alert("New Bank Offer added Successfully");

      // request successful, refresh the page

      window.location.reload();

    } catch (error) {

      //handle error

      console.log(error);

    }

  };
  
  if (Data.userType !== "admin") {

    return <div style={{margin:"10% 10%", textAlign:"center"}}>sorry, only admin can visit this page.</div>;

  }

  return (
    <>
        <div className="container" style={{ backgroundColor: "#F1F1EC" , marginTop:"5rem"}}>
        <Helmet>
                <meta charSet="utf-8" />
                <title>My Title</title>
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
                Add New Bank Offer
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
                    <h6 style={{ marginBottom: "3.2rem", fontSize: "1rem" }}>
                      Bank Name :
                    </h6>
                    <h6 style={{ marginBottom: "3rem", fontSize: "1rem" }}>
                    Tenure :
                    </h6>
                    <h6 style={{ marginBottom: "2.3rem", fontSize: "1rem" }}>
                      Processing Fees :
                    </h6>
                    <h6 style={{ marginBottom: "2rem", fontSize: "1rem" }}>
                      Rate Of Interest (% Per Year):
                    </h6>
                    <h6 style={{ marginBottom: "2.8rem", fontSize: "1rem" }}>
                    Loan Amount :
                    </h6>
                    <h6 style={{ marginBottom: "2.8rem", fontSize: "1rem" }}>
                      Prepayment Charges :
                    </h6>
                    <h6 style={{ marginBottom: "2.8rem", fontSize: "1rem" }}>
                      Foreclosure Charges :
                    </h6>
                    <h6 style={{ marginBottom: "2.8rem", fontSize: "1rem" }}>
                      Logo :
                    </h6>
                    
                  </div>
                  <div className="col-lg-8">
                    
                      <input
                        type="text"
                        name="bankName"
                        style={{ fontWeight: "400" }}
                        onChange={inputHandler}
                        placeholder=""
                        className="form-control mb-4"
                      />
                      <input
                        type="text"
                        name="tenure"
                        style={{ fontWeight: "400" }}
                        onChange={inputHandler}
                        placeholder=""
                        className="form-control mb-4"
                      />


                      <input
                        type="text"
                        name="processingFees"
                        style={{ fontWeight: "400" }}
                        onChange={inputHandler}
                        placeholder=""
                        className="form-control mb-4"
                      />
                      <input
                        type="text"
                        name="rateOfInterest"
                        style={{ fontWeight: "400" }}
                        onChange={inputHandler}
                        placeholder=""
                        className="form-control mb-4"
                      />
                      <input
                        type="text"
                        name="loanAmount"
                        style={{ fontWeight: "400" }}
                        onChange={inputHandler}
                        placeholder=""
                        className="form-control mb-4"
                      />
                      <input
                        type="text"
                        name="prepaymentCharges"
                        style={{ fontWeight: "400" }}
                        onChange={inputHandler}
                        placeholder=""
                        className="form-control mb-4"
                      />
                      <input
                        type="text"
                        name="foreclosureCharges"
                        style={{ fontWeight: "400" }}
                        onChange={inputHandler}
                        placeholder=""
                        className="form-control mb-4"
                      />
                      
                      <input
                        type="file"
                        name="logo"
                        style={{ fontWeight: "400" }}
                        onChange={(e) => {
                          setImage(e.target.files[0]);

                          console.log(image);
                        }}
                        placeholder=""
                        className="form-control mb-4"
                      />
                      
                      <br />
                      <br />
                      <button className="btn btn-primary me-4" onClick={handleSubmit}>
                        {" "}
                        Submit
                      </button>
                      <button className="btn btn-primary" type="reset">
                        {" "}
                        Reset
                      </button>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default PostNewCommercialProperty;
