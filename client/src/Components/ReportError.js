import { TextField } from "@mui/material";
import React from "react";
import { useState } from "react";

const ReportError = () => {
  const [Data, setData] = useState({
    email: "",
    pageName: "",
    errorDetails: "",
    dateOfFormSubmission:""
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
        <form method="post" action="/submitErrorReport">
        <input
              type="hidden"
              name="dateOfFormSubmission"
              value={new Date()}
            ></input>
          <h3>Please Report about the error you encounter:</h3>
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
          Name Of Page :{" "}
          <TextField
            id="outlined-basic"
            name="pageName"
            variant="outlined"
            style={{ width: "40%" }}
            onChange={handleInput}
          />
          <br />
          <br />
          Error Deails :{" "}
          <TextField
            id="outlined-multiline-static"
            multiline
            rows={10}
            name="errorDetails"
            style={{ width: "40%" }}
            onChange={handleInput}
          />
          <br />
          <br />
          <button className="registerBtn" type="submit" style={{float:"right", marginRight: "27%", marginTop: "-1rem" }}>Submit</button>
        </form>
      </div>
    </>
  );
};

export default ReportError;
