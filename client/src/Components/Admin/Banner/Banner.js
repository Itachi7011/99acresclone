import React, { useState } from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

const Articles = () => {
  const [Data, setData] = useState("");
  const [image, setImage] = useState("");

  let name, value;
  const [user, setUser] = useState({
    title: "",
    subTitle: "",
    projectUrl: "",
    usedFor:"",
    status: "",

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
              Add New Banner
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
                    Title :
                  </h6>
                  <h6 style={{ marginBottom: "3rem", fontSize: "1rem" }}>
                    Sub-Title :
                  </h6>
                  <h6 style={{ marginBottom: "2.8rem", fontSize: "1rem" }}>
                    Project URL :
                  </h6>
                  <h6 style={{ marginBottom: "2.8rem", fontSize: "1rem" }}>
                    Will Be Used For :
                  </h6>
                  <h6 style={{ marginBottom: "2.8rem", fontSize: "1rem" }}>
                    Logo :
                  </h6>

                  <h6 style={{ marginBottom: "2.8rem", fontSize: "1rem" }}>
                    Status :
                  </h6>
                </div>
                <div className="col-lg-8">
                  <form
                    action="/addBanner"
                    method="post"
                    encType="multipart/form-data"
                  >
                    <input
                      type="text"
                      name="title"
                      style={{ fontWeight: "400" }}
                      onChange={inputHandler}
                      placeholder=""
                      className="form-control mb-4"
                    />
                    <input
                      type="text"
                      name="subTitle"
                      style={{ fontWeight: "400" }}
                      onChange={inputHandler}
                      placeholder=""
                      className="form-control mb-4"
                    />

                    <input
                      type="text"
                      name="projectUrl"
                      style={{ fontWeight: "400" }}
                      onChange={inputHandler}
                      placeholder=""
                      className="form-control mb-4"
                    />
                    <select
                      style={{
                        height: "6vh",
                        backgroundColor: "white",
                        borderRadius: "5px",
                        width: "100%",
                      }}
                      className=" mb-4"
                      name="usedFor"
                    >
                      <option value="Active">Home Page Top Banner (1000*350)</option>
                      <option value="Inactive">Inactive</option>
                    </select>
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
                    <select
                      style={{
                        height: "6vh",
                        backgroundColor: "white",
                        borderRadius: "5px",
                        width: "100%",
                      }}
                      className=" mb-4"
                      name="status"
                    >
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </select>

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

export default Articles;
