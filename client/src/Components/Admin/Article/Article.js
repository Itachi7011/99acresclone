import React, { useState, useRef } from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

const Banners = () => {
  const [Data, setData] = useState("");
  const [image, setImage] = useState("");

  const subCategoryRef1 = useRef(null);
  const subCategoryRef2 = useRef(null);
  const subCategoryRef3 = useRef(null);
  const changeCSSRef = useRef(null);
  const developerNameRef = useRef(null);
  const projectNameRef = useRef(null);

  let name, value;
  const [user, setUser] = useState({
    title: "",
    metaTitle: "",
    metaKeyword: "",
    metaDescription: "",
    articleCategory: "",
    articleCategory1: "",
    developerName: "",
    projectName: "",
    articleContent: "",
    articleImage: "",
    youtubeUrl: "",
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
              Add New Article
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
                    Article Title :
                  </h6>
                  <h6 style={{ marginBottom: "3rem", fontSize: "1rem" }}>
                    Meta-Title :
                  </h6>
                  <h6 style={{ marginBottom: "3rem", fontSize: "1rem" }}>
                    Meta-Keyword :
                  </h6>
                  <h6 style={{ marginBottom: "2.2rem", fontSize: "1rem" }}>
                    Meta-Description :
                  </h6>
                  <h6 style={{ marginBottom: "2.5rem", fontSize: "1rem" }}>
                    Category :
                  </h6>
                  <h6
                    ref={changeCSSRef}
                    style={{
                      marginBottom: "3rem",
                      fontSize: "1rem",
                      display: "block",
                    }}
                  >
                    Sub-Category :
                  </h6>
                  <h6
                    ref={developerNameRef}
                    style={{
                      marginBottom: "3rem",
                      fontSize: "1rem",
                      display: "none",
                    }}
                  >
                    Developer Name :
                  </h6>
                  <h6
                    ref={projectNameRef}
                    style={{
                      marginBottom: "3rem",
                      fontSize: "1rem",
                      display: "none",
                    }}
                  >
                    Project Name :
                  </h6>

                  <h6 style={{ marginBottom: "3rem", fontSize: "1rem" }}>
                    Article-Image :
                  </h6>
                  <h6 style={{ marginBottom: "3rem", fontSize: "1rem" }}>
                    Article-Content :
                  </h6>
                  <h6 style={{ marginBottom: "2.8rem", fontSize: "1rem" }}>
                    Youtube URL :
                  </h6>

                  <h6 style={{ marginBottom: "2.8rem", fontSize: "1rem" }}>
                    Status:
                  </h6>
                </div>
                <div className="col-lg-8">
                  <form
                    action="/addArticle"
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
                    <div className="form-check mb-4">
                      {" "}
                      <input
                        className="form-check-input"
                        type="radio"
                        name="articleCategory"
                        value="Real Estate"
                        id="flexRadioDefault1"
                        onChange={
                          (inputHandler,
                          () => {
                            subCategoryRef1.current.style.display = "none";
                            subCategoryRef3.current.style.display = "none";
                            subCategoryRef2.current.style.display = "block";
                            developerNameRef.current.style.display = "none";
                            projectNameRef.current.style.display = "none";
                            changeCSSRef.current.style.display = "block";
                            // changeCSSRef.current.style.marginBottom = "3rem";
                          })
                        }
                      />
                      <label
                        className="form-check-label me-5"
                        for="flexRadioDefault1"
                      >
                        Real State
                      </label>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="articleCategory"
                        value="Project"
                        id="flexRadioDefault2"
                        onChange={
                          (inputHandler,
                          () => {
                            subCategoryRef2.current.style.display = "none";
                            subCategoryRef1.current.style.display = "block";
                            subCategoryRef3.current.style.display = "block";
                            developerNameRef.current.style.display = "block";
                            projectNameRef.current.style.display = "block";
                            changeCSSRef.current.style.display = "none";
                            // changeCSSRef.current.style.marginBottom = "7.3rem";
                          })
                        }
                      />
                      <label
                        className="form-check-label"
                        for="flexRadioDefault2"
                      >
                        Project
                      </label>
                    </div>

                    <select
                      ref={subCategoryRef2}
                      style={{
                        height: "6vh",
                        backgroundColor: "white",
                        borderRadius: "5px",
                        width: "100%",
                      }}
                      className=" mb-4"
                      name="articleCategory1"
                    >
                      <option value=""></option>
                      <option value="Real Estate">Real Estate</option>
                      <option value="Event">Event</option>
                      <option value="Commercial">Commercial</option>
                    </select>
                    <select
                      ref={subCategoryRef1}
                      style={{
                        height: "6vh",
                        backgroundColor: "white",
                        borderRadius: "5px",
                        width: "100%",
                        display: "none",
                      }}
                      className=" mb-4"
                      name="developerName"
                    >
                      <option value=""></option>
                      <option value="Developer 1">Developer 1</option>
                      <option value="Developer 2">Developer 2</option>
                      <option value="Developer 3">Developer 3</option>
                    </select>
                    <select
                      ref={subCategoryRef3}
                      style={{
                        height: "6vh",
                        backgroundColor: "white",
                        borderRadius: "5px",
                        width: "100%",
                        display: "none",
                      }}
                      className=" mb-4"
                      name="projectName"
                    >
                      <option value=""></option>
                      <option value="Project 1">Project 1</option>
                      <option value="Project 2">Project 2</option>
                      <option value="Project 3">Project 3</option>
                    </select>
                    <input
                      type="file"
                      name="articleImage"
                      style={{ fontWeight: "400" }}
                      onChange={(e) => {
                        setImage(e.target.files[0]);

                        console.log(image);
                      }}
                      placeholder=""
                      className="form-control mb-4"
                    />
                    <input
                      type="text"
                      name="articleContent"
                      style={{ fontWeight: "400" }}
                      onChange={inputHandler}
                      placeholder=""
                      className="form-control mb-4"
                    />
                    <input
                      type="text"
                      name="youtubeUrl"
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

export default Banners;
