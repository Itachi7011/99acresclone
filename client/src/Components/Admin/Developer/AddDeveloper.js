import { React, useState } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const AddDeveloper = () => {
  const navigate = useNavigate();
  let name, value;
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");
  const [user, setUser] = useState({
    name: "",
    email: "",
    phoneNo: "",
    // logo: "",
    totalProjects: "",
    experience: "",
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(image);

    var bodyFormData = new FormData();

    bodyFormData.append("name", user.name);

    bodyFormData.append("metaTitle", user.metaTitle);

    bodyFormData.append("metaKeyword", user.metaKeyword);

    bodyFormData.append("metaDescription", user.metaDescription);

    bodyFormData.append("email", user.email);

    bodyFormData.append("logo", image);

    bodyFormData.append("phoneNo", user.phoneNo);

    bodyFormData.append("aboutDeveloper", content);

    try {
      const response = await axios.post(
        "/addDeveloper",

        bodyFormData,

        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert("New Developer added Successfully");

      // request successful, refresh the page

      window.location.reload();
    } catch (error) {
      //handle error

      console.log(error);
    }
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
                      Total Projects :
                    </h6>
                    <h6 style={{ marginBottom: "2.8rem", fontSize: "1rem" }}>
                      Experice :
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
                      name="totalProjects"
                      style={{ fontWeight: "400" }}
                      onChange={inputHandler}
                      placeholder=""
                      className="form-control mb-4"
                    />
                    <input
                      type="text"
                      name="experience"
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

                    <CKEditor
                      config={{
                        height: 600,
                        toolbar: [
                          "heading",
                          "|",
                          "bold",
                          "italic",
                          "blockQuote",
                          "link",
                          "numberedList",
                          "bulletedList",
                          "imageUpload",
                          "insertTable",
                          "tableColumn",
                          "tableRow",
                          "mergeTableCells",
                          "mediaEmbed",
                          "|",
                          "undo",
                          "redo",
                        ],
                        
                      }}
                      style={{ maxWidth: "100%", height: "800px" }}
                      editor={ClassicEditor}
                      onReady={(editor) => {
                        editor.editing.view.document.on("change:data", () => {
                          // debouncedHandleInput({
                          //   target: {
                          //     name: "project_specification",
                          //     value: editor.getData(),
                          //   },
                          // });
                        });
                      }}
                      onBlur={(event, editor) => {}}
                      onFocus={(event, editor) => {}}
                      onChange={(event, editor) => {
                        const data = editor.getData();
                        console.log(data);
                        setContent(data);
                      }}
                      name="aboutDeveloper"
                    />
                    {/* <textarea
                        type="file"
                        name="aboutDeveloper"
                        style={{ fontWeight: "400" }}
                        onChange={inputHandler}
                        placeholder=""
                        className="form-control mb-4"
                        columns="10"
                        rows="10"
                      /> */}
                    <br />
                    <br />
                    <button
                      className="btn btn-primary me-4"
                      onClick={handleSubmit}
                      // type="submit"
                    >
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
      </div>
    </>
  );
};

export default AddDeveloper;
