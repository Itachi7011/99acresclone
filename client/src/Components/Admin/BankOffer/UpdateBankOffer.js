import React, { useState } from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

const PostNewCommercialProperty = () => {
  const location = useLocation();

  const [Data, setData] = useState("");
  const [image, setImage] = useState("");
  const [Settings, setSettingsData] = useState("");

  const previousId = location.state.id;
  const previousOfferName = location.state.bankOfferName;
  const previousApplyOnBank = location.state.applyOnBank;
  const previousOfferDetails = location.state.bankOfferDetails;
  const previousStartingFrom = location.state.startingFrom;
  const previousEndedOn = location.state.endedOn;
  const previousLogo = location.state.logo;
  const previousRateOfInteres = location.state.rateOfInterest;

  const SettingDetails = async () => {
    try {
      const res = await fetch("/mainSettingsList", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();

      setSettingsData(data);

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
    SettingDetails();
  }, []);

  let name, value;
  const [user, setUser] = useState({
    id:previousId,
    bankOfferName: previousOfferName,
    bankOfferDetails: previousApplyOnBank,
    applyOnBank: previousOfferDetails,
    rateOfInterest: previousRateOfInteres,
    startingFrom: previousStartingFrom,
    endedOn: previousEndedOn,
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
    return (
      <div style={{ margin: "10% 10%", textAlign: "center" }}>
        sorry, only admin can visit this page.
      </div>
    );
  }

  return (
    <>
      <div
        className="container"
        style={{ backgroundColor: "#F1F1EC", marginTop: "5rem" }}
      >
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
              Update Existing Bank Offer
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
                    Bank Offer Name :
                  </h6>
                  <h6 style={{ marginBottom: "3rem", fontSize: "1rem" }}>
                    Bank Offer Details :
                  </h6>
                  <h6 style={{ marginBottom: "2.3rem", fontSize: "1rem" }}>
                    Apply On Bank :
                  </h6>
                  <h6 style={{ marginBottom: "2rem", fontSize: "1rem" }}>
                    Rate Of Interest (% Per Year):
                  </h6>
                  <h6 style={{ marginBottom: "2.8rem", fontSize: "1rem" }}>
                    Starting From :
                  </h6>
                  <h6 style={{ marginBottom: "2.8rem", fontSize: "1rem" }}>
                    Ended On :
                  </h6>
                </div>
                <div className="col-lg-8">
                  <form
                    action="/updateBankOffer"
                    method="post"
                    // encType="multipart/form-data"
                  >
                    <input type="hidden" name="id" value={previousId} />

                    <input
                      type="text"
                      name="bankOfferName"
                      style={{ fontWeight: "400" }}
                      onChange={inputHandler}
                      placeholder=""
                      className="form-control mb-4"
                      value={user.bankOfferName}
                    />

                    <input
                      type="text"
                      name="bankOfferDetails"
                      style={{ fontWeight: "400" }}
                      onChange={inputHandler}
                      placeholder=""
                      className="form-control mb-4"
                      value={user.bankOfferDetails}
                    />
                    <input
                      type="text"
                      name="applyOnBank"
                      style={{ fontWeight: "400" }}
                      onChange={inputHandler}
                      placeholder=""
                      className="form-control mb-4"
                      value={user.applyOnBank}
                    />
                    <input
                      type="number"
                      name="rateOfInterest"
                      style={{ fontWeight: "400" }}
                      onChange={inputHandler}
                      placeholder=""
                      className="form-control mb-4"
                      value={user.rateOfInterest}
                    />
                    <input
                      type="text"
                      name="startingFrom"
                      style={{ fontWeight: "400" }}
                      onChange={inputHandler}
                      placeholder=""
                      className="form-control mb-4"
                      value={user.startingFrom}
                    />
                    <input
                      type="text"
                      name="endedOn"
                      style={{ fontWeight: "400" }}
                      onChange={inputHandler}
                      placeholder=""
                      className="form-control mb-4"
                      value={user.endedOn}
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

export default PostNewCommercialProperty;
