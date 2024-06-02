import { React, useState } from "react";
import {Helmet} from "react-helmet";

const AddDeveloper = () => {
  let name, value;
  const [image, setImage] = useState("");
  const [user, setUser] = useState({
    name: "",
    email: "",
    phoneNo: "",
    // logo: "",
    aboutDeveloper: "",
    metaTitle: "",
    metaKeyword: "",
    metaDescription: "",
    dateOfFormSubmission: "",
  });

  const inputHandler = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <>
      <div
        className="addLocation"
        style={{
          //   zIndex: "20",
          width: "100%",
          margin: "7% auto",
          marginLeft: "7%",
          position: "absolute",
          textAlign: "left",
        }}
      >
        <div className="container" style={{ backgroundColor: "#F1F1EC" }}>
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
                Add New Developer
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
                      Name :
                    </h6>
                    <h6 style={{ marginBottom: "3rem", fontSize: "1rem" }}>
                      Email :
                    </h6>
                    <h6 style={{ marginBottom: "2.8rem", fontSize: "1rem" }}>
                      Phone Number :
                    </h6>
                    <h6 style={{ marginBottom: "2.8rem", fontSize: "1rem" }}>
                      Meta Title :
                    </h6>
                    <h6 style={{ marginBottom: "2.8rem", fontSize: "1rem" }}>
                      Meta Keyword :
                    </h6>
                    <h6 style={{ marginBottom: "2.8rem", fontSize: "1rem" }}>
                      Meta Description :
                    </h6>
                    <h6 style={{ marginBottom: "2.8rem", fontSize: "1rem" }}>
                      Developer Logo :
                    </h6>
                    <h6 style={{ marginBottom: "2.8rem", fontSize: "1rem" }}>
                      About Developer :
                    </h6>
                  </div>
                  <div className="col-lg-8">
                    <form
                      action="/addDeveloper"
                      method="post"
                      encType="multipart/form-data"
                    >
                      <input
                        type="text"
                        name="name"
                        style={{ fontWeight: "400" }}
                        onChange={inputHandler}
                        placeholder=""
                        className="form-control mb-4"
                      />
                      <input
                        type="email"
                        name="email"
                        style={{ fontWeight: "400" }}
                        onChange={inputHandler}
                        placeholder=""
                        className="form-control mb-4"
                      />
                      <input
                        type="text"
                        name="phoneNo"
                        style={{ fontWeight: "400" }}
                        onChange={inputHandler}
                        placeholder=""
                        className="form-control mb-4"
                      />
                      <input
                        type="text"
                        name="metaTitle"
                        style={{ fontWeight: "400" }}
                        onChange={inputHandler}
                        placeholder=""
                        className="form-control mb-4"
                      />
                      <input
                        type="text"
                        name="metaKeyword"
                        style={{ fontWeight: "400" }}
                        onChange={inputHandler}
                        placeholder=""
                        className="form-control mb-4"
                      />
                      <input
                        type="text"
                        name="metaDescription"
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
                      <textarea
                        type="file"
                        name="aboutDeveloper"
                        style={{ fontWeight: "400" }}
                        onChange={inputHandler}
                        placeholder=""
                        className="form-control mb-4"
                        columns="10"
                        rows="10"
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
      </div>
    </>
  );
};

export default AddDeveloper;
