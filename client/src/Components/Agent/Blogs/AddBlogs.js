import React, { useState, useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import {
  FormLabel,
  TextField,
  Box,
  Container,
  Grid,
  InputLabel,
  option,
  Stack,
  Button,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base/TextareaAutosize";
import { Country, State, City } from "country-state-city";
import Select from "react-select";
import { styled } from "@mui/system";

const AddServices = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const editorRef = useRef(null);

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  const blue = {
    100: "#DAECFF",
    200: "#b6daff",
    400: "#3399FF",
    500: "#007FFF",
    600: "#0072E5",
    900: "#003A75",
  };

  const grey = {
    50: "#F3F6F9",
    100: "#E5EAF2",
    200: "#DAE2ED",
    300: "#C7D0DD",
    400: "#B0B8C4",
    500: "#9DA8B7",
    600: "#6B7A90",
    700: "#434D5B",
    800: "#303740",
    900: "#1C2025",
  };

  const Textarea = styled(BaseTextareaAutosize)(
    ({ theme }) => `
        box-sizing: border-box;
        width: 100%;
        font-family: 'IBM Plex Sans', sans-serif;
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1.5;
        padding: 8px 12px;
        border-radius: 8px;
        color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
        background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
        border: 1px solid ${
          theme.palette.mode === "dark" ? grey[700] : grey[200]
        };
        box-shadow: 0px 2px 2px ${
          theme.palette.mode === "dark" ? grey[900] : grey[50]
        };
    
        &:hover {
          border-color: ${blue[400]};
        }
    
        &:focus {
          border-color: ${blue[400]};
          box-shadow: 0 0 0 3px ${
            theme.palette.mode === "dark" ? blue[600] : blue[200]
          };
        }
    
        // firefox
        &:focus-visible {
          outline: 0;
        }
      `
  );

  return (
    <>
      <div style={{ width: "100%", margin: "5% auto" }}>
        <div>
          <h2 style={{ textAlign: "center" }}>Add Blogs</h2>
        </div>
        <form style={{ marginTop: "2%" }}>
          <Container
            component="main"
            maxWidth="lg"
            style={{ marginTop: "0%", marginBottom: "10%", display: "block" }}
          >
            <Grid container spacing={2}>
              {/* email address */}
              <Grid item xs={12}>
                <TextField
                  placeholder="Blog Title"
                  label="Blog Title"
                  // variant="outlined"
                  autoComplete="email"
                  fullWidth
                  name="email"
                />
              </Grid>
              {/* <Grid item xs={12}>
                <InputLabel id="demo-simple-select-label">
                  Business Category
                </InputLabel>

                <select
                  style={{
                    height: "5vh",
                    backgroundColor: "white",
                    borderRadius: "5px",
                    width: "100%",
                  }}
                >
                  <option value="Home Loan">Home Loan</option>
                  <option value="Property Legal Service">
                    Property Legal Service
                  </option>
                  <option value="vastu Consultant">vastu Consultant</option>
                  <option value="Property Inspector">Property Inspector</option>
                  <option value="LRI Guide">LRI Guide</option>
                  <option value="Titles Search">Titles Search</option>
                  <option value="Packers And Movers">Packers And Movers</option>
                  <option value="Interior Designers">Interior Designers</option>
                </select>
              </Grid> */}

              <Grid item xs={12}>
                <InputLabel id="demo-simple-select-label">
                  Tags (Max - 2 Tags)
                </InputLabel>
                <TextField
                  placeholder="Enter Tags Here, Seperated by comma ( , ) "
                  label="Tag "
                  // variant="outlined"
                  autoComplete="email"
                  fullWidth
                  name="email"
                />
              </Grid>

              <Grid item xs={12} id="textarea1">
                <Editor 
                enforceFocus={true}
                  apiKey="5n1wifp2jj1dwrra64hv851rz849ath28ljj9quf0vb4rhjk"
                  onInit={(_evt, editor) => (editorRef.current = editor)}
                  initialValue="<p>This is the initial content of the editor.</p>"
                  init={{
                  selector: 'textarea1',  // change this value according to your HTML
                    height: 500,
                    menubar: true,
                    plugins: [
                      "advlist",
                      "autolink",
                      "lists",
                      "link",
                      "image",
                      "charmap",
                      "preview",
                      "anchor",
                      "searchreplace",
                      "visualblocks",
                      "code",
                      "fullscreen",
                      "insertdatetime",
                      "media",
                      "table",
                      "code",
                      "help",
                      "wordcount",
                    ],
                    toolbar:
                      "undo redo | blocks | " +
                      "bold italic forecolor | alignleft aligncenter " +
                      "alignright alignjustify | bullist numlist outdent indent | " +
                      "removeformat | help",
                    content_style:
                      "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  component="label"
                  role={undefined}
                  variant="contained"
                  tabIndex={-1}
                  startIcon={<CloudUploadIcon />}
                >
                  Upload Blog Image Here (Optional)
                  <VisuallyHiddenInput type="file" />
                </Button>
              </Grid>
            </Grid>{" "}
            <Stack direction="row" spacing={2} style={{ marginTop: "1%" }}>
              <Button variant="contained" href="/">
                Add Blogs
              </Button>
            </Stack>
          </Container>
        </form>
      </div>
    </>
  );
};

export default AddServices;
