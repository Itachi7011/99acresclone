import * as React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styled from "styled-components";

const StyledText = styled.h1`
  font-family: "Monsterrat", sans-serif;
  font-size: 30px;
`;

export default function BasicTable() {
  const [Data, setData] = useState({ post: [] });
  const [User, setUser] = useState({ searchinput: "" });
  const [User1, setUser1] = useState({ searchinput1: "" });
  const [User2, setUser2] = useState({ searchinput2: "" });

  const navigate = useNavigate();

  let name, value;

  useEffect(() => {
    axios
      .get("/commercailProperties")
      .then((response) => {
        const data = response.data;

        setData({ post: data });

        console.log("data fetch successfully");
      })
      .catch((err) => {
        console.log("Error during Data:", err);
      });
  }, []);

  let inputHandler = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...User, [name]: value });
    setUser1({ ...User1, [name]: value });
    setUser2({ ...User2, [name]: value });
    console.log(User1.searchinput1);
    console.log(User2.searchinput2);
  };
  return (
    <>
      <div
        className="propertyListTableMainDiv"
        style={{
          marginTop: "5rem",
          marginLeft: "5%",
          marginRight: "5%",
          border: "1px solid black",
        }}
      >
        <StyledText>
          <h1
            style={{
              marginTop: "1rem",

              textAlign: "center",
              color: "white",
              backgroundColor: "#50C878",
              padding: "1rem",
            }}
          >
            List of Available Commercial Properties is :{" "} [ADMIN]
          </h1>
          <div
            className="propertyListTable"
            style={{
              marginTop: "3rem",
              marginBottom: "3rem",
              marginLeft: "5%",
              marginRight: "5%",
            }}
          >
            <span> Search Cities : </span>
            <input
              type="text"
              className="searchinput"
              name="searchinput"
              autoComplete="off"
              onChange={inputHandler}
              style={{ width: "50%", height: "5vh" }}
            />
          </div>

          <div
            className="propertyListTable"
            style={{
              marginTop: "3rem",
              marginBottom: "3rem",
              marginLeft: "5%",
              marginRight: "5%",
            }}
          >
            <span> Filter Prices Between : </span>
            <input
              type="number"
              className="searchinput"
              name="searchinput1"
              autoComplete="off"
              onChange={inputHandler}
              style={{ width: "20%", height: "5vh" }}
            />
            <span> : </span>
            <input
              type="number"
              className="searchinput"
              name="searchinput2"
              autoComplete="off"
              onChange={inputHandler}
              style={{ width: "20%", height: "5vh" }}
            />
          </div>
          <TableContainer
            component={Paper}
            style={{ padding: "0rem", border: "1px solid black" }}
          >
            <Table
              sx={{ minWidth: 600, fontSize: "large" }}
              aria-label="simple table"
            >
              <TableHead>
                <TableRow>
                  <TableCell
                    style={{
                      color: "white",
                      backgroundColor: "blue",
                      fontSize: "large",
                    }}
                  >
                    Owner Name
                  </TableCell>
                  <TableCell
                    style={{
                      color: "white",
                      backgroundColor: "blue",
                      fontSize: "large",
                    }}
                    align="right"
                  >
                    <b>city</b>
                  </TableCell>
                  <TableCell
                    style={{
                      color: "white",
                      backgroundColor: "blue",
                      fontSize: "large",
                    }}
                    align="right"
                  >
                    <b>Total Carpet Area</b>
                  </TableCell>
                  <TableCell
                    style={{
                      color: "white",
                      backgroundColor: "blue",
                      fontSize: "large",
                    }}
                    align="right"
                  >
                    <b>Available For</b>
                  </TableCell>
                  <TableCell
                    style={{
                      color: "white",
                      backgroundColor: "blue",
                      fontSize: "large",
                    }}
                    align="right"
                  >
                    <b>Selling Status</b>
                  </TableCell>
                  <TableCell
                    style={{
                      color: "white",
                      backgroundColor: "blue",
                      fontSize: "large",
                    }}
                    align="right"
                  >
                    <b>Construction Status</b>
                  </TableCell>
                  <TableCell
                    style={{
                      color: "white",
                      backgroundColor: "blue",
                      fontSize: "large",
                    }}
                    align="right"
                  >
                    <b>Expected Selling</b>
                  </TableCell>
                  <TableCell
                    style={{
                      color: "white",
                      backgroundColor: "blue",
                      fontSize: "large",
                    }}
                    align="right"
                  ></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Data.post
                  .filter((field) => {
                    if (User.searchinput === "") {
                      return field;
                    } else if (
                      User1.searchinput1 === "" &&
                      User2.searchinput2
                    ) {
                      return field;
                    } else if (
                      (!field.propertyCity ||
                        field.propertyCity
                          .toLocaleLowerCase()
                          .includes(User.searchinput.toLocaleLowerCase())) &&
                      (!field.carpet_total_area ||
                        (field.carpet_total_area >= User1.searchinput1 &&
                          field.carpet_total_area <= User2.searchinput2))
                    ) {
                      return field;
                    }
                  })
                  .map(
                    ({
                      _id,
                      propertyCity,
                      ownerName,
                      contructionStatus,
                      carpet_total_area,
                      expected_selling_price,
                      sellingStatus,
                      actionType,
                    }) => (
                      <TableRow
                        key={_id}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell align="left" style={{ fontSize: "large" }}>
                          {ownerName}
                        </TableCell>
                        <TableCell align="right" style={{ fontSize: "large" }}>
                          {propertyCity}
                        </TableCell>
                        <TableCell align="right" style={{ fontSize: "large" }}>
                          {carpet_total_area}
                        </TableCell>
                        <TableCell align="right" style={{ fontSize: "large" }}>
                          {actionType}
                        </TableCell>
                        <TableCell align="right" style={{ fontSize: "large" }}>
                          {sellingStatus}
                        </TableCell>
                        <TableCell align="right" style={{ fontSize: "large" }}>
                          {contructionStatus}
                        </TableCell>
                        <TableCell align="right" style={{ fontSize: "large" }}>
                          {expected_selling_price}
                        </TableCell>
                        <TableCell align="right">
                          <button
                            onClick={function () {
                              navigate("/admin-commercial-property-profile", {
                                state: { id: _id },
                              });
                            }}
                            className="btn btn-primary btn-lg"
                          >
                            View
                          </button>
                        </TableCell>
                      </TableRow>
                    )
                  )}
              </TableBody>
            </Table>
          </TableContainer>
        </StyledText>
      </div>
    </>
  );
}
