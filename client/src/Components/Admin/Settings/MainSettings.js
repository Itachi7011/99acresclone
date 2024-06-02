import React, { useState } from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

const MainSettings = () => {
  const [Data, setData] = useState("");
  const [Settings, setSettingsData] = useState("");
  const [image, setImage] = useState("");
  const [image1, setImage1] = useState("");

  let name, value;

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

  const [user, setUser] = useState({
    headingText: "",

    homePageDescription: "",

    homePageTitle: "",

    homePageMetaKeyword: "",

    homePageMetaDescription: "",

    footerText: "",

    googleAnalyticsCode: "",

    robots_txt_Content: "",

    siteMessage: "",
    mainLogo: "",
    robortFile: "",

    dateOfFormSubmission: "",
  });

  useEffect(() => {
    if (Settings.length > 0) {
      setUser({
        headingText: Settings[0].headingText,

        homePageDescription: Settings[0].homePageDescription,

        homePageTitle: Settings[0].homePageTitle,

        homePageMetaKeyword: Settings[0].homePageMetaKeyword,

        homePageMetaDescription: Settings[0].homePageMetaDescription,

        footerText: Settings[0].footerText,

        googleAnalyticsCode: Settings[0].googleAnalyticsCode,

        robots_txt_Content: Settings[0].robots_txt_Content,
        mainLogo: Settings[0].mainLogo,
        robortFile: Settings[0].robortFile,

        siteMessage: Settings[0].siteMessage,

        dateOfFormSubmission: Settings[0].dateOfFormSubmission,
      });
    }
  }, [Settings]);

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

    setUser((prevUser) => ({
      ...prevUser,

      [name]: value,
    }));
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
              Site Main Settings
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
                  <h6 style={{ marginBottom: "2.8rem", fontSize: "1rem" }}>
                    Heading Text :
                  </h6>
                  <h6 style={{ marginBottom: "2rem", fontSize: "1rem" }}>
                    Home page Description :
                  </h6>
                  <h6 style={{ marginBottom: "2.3rem", fontSize: "1rem" }}>
                    Home page Title :
                  </h6>
                  <h6 style={{ marginBottom: "1.5rem", fontSize: "1rem" }}>
                    Home page Meta Keyword :
                  </h6>
                  <h6 style={{ marginBottom: "2rem", fontSize: "1rem" }}>
                    Home page Meta Description :
                  </h6>
                  <h6 style={{ marginBottom: "2.5rem", fontSize: "1rem" }}>
                    Footer text :
                  </h6>
                  <h6 style={{ marginBottom: "2.2rem", fontSize: "1rem" }}>
                    Enter Google Analytics Code :
                  </h6>
                  <h6 style={{ marginBottom: "2.4rem", fontSize: "1rem" }}>
                    Upload Robort File :
                  </h6>
                  <h6 style={{ marginBottom: "2rem", fontSize: "1rem" }}>
                    Robots.txt Content (if Exist) :
                  </h6>

                  <h6 style={{ marginBottom: "2.8rem", fontSize: "1rem" }}>
                    Choose Logo Image :
                  </h6>
                  {/* <h6 style={{ marginBottom: "5.2rem", fontSize: "1rem" }}>
                    Previous Logo Image :
                  </h6>
                  <h6 style={{ marginBottom: "2.8rem", fontSize: "1rem" }}>
                    Site Message :
                  </h6> */}
                  <h6 style={{ marginBottom: "2.8rem", fontSize: "1rem" }}>
                    Site Message :
                  </h6>
                </div>
                <div className="col-lg-8">
                  <form
                    action="/mainSettings"
                    method="post"
                    encType="multipart/form-data"
                  >
                    <input
                      type="text"
                      name="headingText"
                      style={{ fontWeight: "400" }}
                      onChange={inputHandler}
                      placeholder=""
                      className="form-control mb-4"
                      value={user.headingText}
                    />

                    <input
                      type="text"
                      name="homePageDescription"
                      style={{ fontWeight: "400" }}
                      onChange={inputHandler}
                      placeholder=""
                      className="form-control mb-4"
                      value={user.homePageDescription}
                    />
                    <input
                      type="text"
                      name="homePageTitle"
                      style={{ fontWeight: "400" }}
                      onChange={inputHandler}
                      placeholder=""
                      className="form-control mb-4"
                      value={user.homePageTitle}
                    />
                    <input
                      type="text"
                      name="homePageMetaKeyword"
                      style={{ fontWeight: "400" }}
                      onChange={inputHandler}
                      placeholder=""
                      className="form-control mb-4"
                      value={user.homePageMetaKeyword}
                    />
                    <input
                      type="text"
                      name="homePageMetaDescription"
                      style={{ fontWeight: "400" }}
                      onChange={inputHandler}
                      placeholder=""
                      className="form-control mb-4"
                      value={user.homePageMetaDescription}
                    />
                    <input
                      type="text"
                      name="footerText"
                      style={{ fontWeight: "400" }}
                      onChange={inputHandler}
                      placeholder=""
                      className="form-control mb-4"
                      value={user.footerText}
                    />
                    <input
                      type="text"
                      name="googleAnalyticsCode"
                      style={{ fontWeight: "400" }}
                      onChange={inputHandler}
                      placeholder=""
                      className="form-control mb-4"
                      value={user.googleAnalyticsCode}
                    />

                    <input
                      type="file"
                      name="robortFile"
                      style={{ fontWeight: "400" }}
                      onChange={(e) => {
                        setImage(e.target.files[0]);

                        console.log(image);
                      }}
                      // value={user.robortFile}
                      placeholder=""
                      className="form-control mb-4"
                      required
                    />

                    <input
                      type="text"
                      name="robots_txt_Content"
                      style={{ fontWeight: "400" }}
                      onChange={inputHandler}
                      placeholder=""
                      className="form-control mb-4"
                      value={user.robots_txt_Content}
                    />

                    <input
                      type="file"
                      name="mainLogo"
                      style={{ fontWeight: "400" }}
                      onChange={(e) => {
                        setImage1(e.target.files[0]);

                        console.log(image1);
                      }}
                      // value={user.mainLogo}

                      placeholder=""
                      className="form-control mb-4"
                      required
                    />
                    {/* <img
                      src={require("../../Uploads/Projects/" +
                        user.mainLogo.data)}
                      alt="main-img"
                      style={{
                        height: "15vh",
                        width: "16vw",
                        marginBottom: "1.2rem",
                      }}
                    /> */}
                    <input
                      type="text"
                      name="siteMessage"
                      style={{ fontWeight: "400" }}
                      onChange={inputHandler}
                      placeholder=""
                      className="form-control mb-4"
                      value={user.siteMessage}
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

export default MainSettings;
