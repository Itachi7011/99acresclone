import { TextField } from "@mui/material";
import React from "react";
import { useState } from "react";

const ReportError = () => {
  const [Data, setData] = useState({
    email: "",
    topic: "",
    feedbackDetail: "",
    dateOfFormSubmission: "",
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setData({ ...Data, [name]: value });
  };

  return (
    <>
      <div
        style={{
          textAlign: "center",
          border: "1px solid black",
          margin: "2rem 10%",
          padding: "5rem",
        }}
      >
        <form method="post" action="/submitFeedback">
          <input
            type="hidden"
            name="dateOfFormSubmission"
            value={new Date()}
          ></input>
          <h3>Please give your valuable feedback:</h3>
          <br />
          <br />
          Email Address :{" "}
          <TextField
            id="outlined-basic"
            name="email"
            variant="outlined"
            style={{ width: "40%" }}
            onChange={handleInput}
          />
          <br />
          <br />
          Topic :{" "}
          <TextField
            id="outlined-basic"
            name="topic"
            variant="outlined"
            style={{ width: "40%" }}
            onChange={handleInput}
          />
          <br />
          <br />
          Feedback :{" "}
          <TextField
            id="outlined-multiline-static"
            multiline
            rows={10}
            name="feedbackDetail"
            style={{ width: "40%" }}
            onChange={handleInput}
          />
          <br />
          <br />
          <button
            className="registerBtn"
            type="submit"
            style={{ float: "right", marginRight: "27%", marginTop: "-1rem" }}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default ReportError;
