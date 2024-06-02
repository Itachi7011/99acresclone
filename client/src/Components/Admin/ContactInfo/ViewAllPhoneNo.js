import * as React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
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

  const navigate = useNavigate();

  let name, value;

  useEffect(() => {
    axios
      .get("/officalPhoneNoDetails")
      .then((response) => {
        const data = response.data;

        setData({ post: data });

        console.log("data fetch successfully");
      })
      .catch((err) => {
        console.log("Error during Data:", err);
      });
  }, []);
  console.log("Data is : ", Data);

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
            List of Website's Official Phone No.s are :{" "}
          </h1>

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
                    Phone Number
                  </TableCell>
                  <TableCell
                    style={{
                      color: "white",
                      backgroundColor: "blue",
                      fontSize: "large",
                    }}
                    align="right"
                  >
                    <b>Additional Comment (Optional)</b>
                  </TableCell>


                  <TableCell
                    style={{
                      color: "white",
                      backgroundColor: "blue",
                      fontSize: "large",
                    }}
                    align="right"
                  >
                    <b>DELETE</b>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Data.post.map(({ _id, phoneNo, additionalComment }) => (
                  <TableRow
                    key={_id}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                  >
                    <TableCell align="left" style={{ fontSize: "large" }}>
                      {phoneNo}
                    </TableCell>

                    <TableCell align="right" style={{ fontSize: "large" }}>
                      {additionalComment}
                    </TableCell>


                    <TableCell align="right">
                      <form method="post" action="/delete-offical-phoneNo">
                        <input type="hidden" name="id" value={_id}></input>
                        <button
                          className="btn btn-primary btn-lg"
                          style={{ color: "white", backgroundColor: "red" }}
                        >
                          DELETE
                        </button>
                      </form>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </StyledText>
      </div>
    </>
  );
}
