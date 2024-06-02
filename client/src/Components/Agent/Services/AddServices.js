import React, { useState } from "react";
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
  const [user, setUser] = useState({
    businessName: "",
    businessCategory: "",
    businessCountry: "",
    businessState: "",
    businessCity: "",
    businessLocation: "",
    companyUrl: "",
    companyMailId: "",
    experienceInField: "",
    ContactPerson: "",
    businessLogo: "",
    aboutCompany: "",
    dateOfFormSubmission: "",
  });

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

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <>
      <div style={{ width: "50%", margin: "5% auto" }}>
        <div>
          <h2 style={{ textAlign: "center" }}>Add Services</h2>
        </div>
        <form
          style={{ marginTop: "2%" }}
          method="post"
          action="/newAgentService"
        >
          <Container
            component="main"
            maxWidth="sm"
            style={{ marginTop: "0%", marginBottom: "10%", display: "block" }}
          >
            {/* Hidden Date Of Form Submission : */}
            <input
              type="hidden"
              name="dateOfFormSubmission"
              value={new Date()}
            ></input>
            <Grid container spacing={2}>
              {/* email address */}
              <Grid item xs={12}>
                <TextField
                  placeholder="Business Name"
                  label="Business Name"
                  // variant="outlined"
                  autoComplete=""
                  fullWidth
                  name="businessName"
                  onChange={handleInput}
                />
              </Grid>
              <Grid item xs={12}>
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
                  name="businessCategory"
                  onChange={handleInput}
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
              </Grid>
              <Grid item xs={12}>
                <TextField
                  placeholder="Experience in this field (In Years Only)"
                  label="Experience in this field (In Years Only)"
                  // variant="outlined"
                  autoComplete=""
                  fullWidth
                  name="experienceInField"
                  onChange={handleInput}
                />
              </Grid>
              <Grid item xs={12}>
                <div className="App" style={{ width: "100%", float: "left" }}>
                  <InputLabel id="demo-simple-select-label">
                    Business Location
                  </InputLabel>
                  <Select
                    style={{
                      width: "30%",
                      float: "right",
                      marginRight: "45%",
                    }}
                    options={Country.getAllCountries()}
                    getOptionLabel={(options) => {
                      return options["name"];
                    }}
                    getOptionValue={(options) => {
                      return options["name"];
                    }}
                    value={selectedCountry}
                    onChange={(item) => {
                      setSelectedCountry(item);
                    }}
                    name="businessCountry"
                  />{" "}
                  <Select
                    style={{
                      width: "30%",
                      float: "right",
                      marginRight: "45%",
                    }}
                    options={State?.getStatesOfCountry(
                      selectedCountry?.isoCode
                    )}
                    getOptionLabel={(options) => {
                      return options["name"];
                    }}
                    getOptionValue={(options) => {
                      return options["name"];
                    }}
                    value={selectedState}
                    onChange={(item) => {
                      setSelectedState(item);
                    }}
                    name="businessState"
                  />{" "}
                  <Select
                    style={{
                      width: "50%",
                      float: "right",
                      marginRight: "45%",
                    }}
                    options={City.getCitiesOfState(
                      selectedState?.countryCode,
                      selectedState?.isoCode
                    )}
                    getOptionLabel={(options) => {
                      return options["name"];
                    }}
                    getOptionValue={(options) => {
                      return options["name"];
                    }}
                    value={selectedCity}
                    onChange={(item) => {
                      setSelectedCity(item);
                    }}
                    name="businessCity"
                  />{" "}
                </div>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  placeholder="Sub-locality"
                  label="Sub-locality"
                  autoComplete="Sub-locality"
                  fullWidth
                  name="businessLocation"
                  onChange={handleInput}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  placeholder="Company URL"
                  label="Company URL"
                  // variant="outlined"
                  autoComplete=""
                  fullWidth
                  name="companyUrl"
                  onChange={handleInput}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  placeholder="Company Mail IdName"
                  label="Company Mail Id"
                  // variant="outlined"
                  autoComplete=""
                  fullWidth
                  name="companyMailId"
                  onChange={handleInput}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  placeholder="Contact Person"
                  label="Contact Person"
                  // variant="outlined"
                  autoComplete=""
                  fullWidth
                  name="ContactPerson"
                  onChange={handleInput}
                />
              </Grid>

              <Grid item xs={12}>
                <InputLabel id="demo-simple-select-label">
                  About Business
                </InputLabel>
                <Textarea
                  aria-label="minimum height"
                  minRows={3}
                  fullWidth
                  placeholder="Minimum 3 rows"
                  onBlur={handleInput}
                  name="aboutCompany"
                />{" "}
              </Grid>
              <Grid item xs={12}>
                <Button
                  component="label"
                  role={undefined}
                  variant="contained"
                  tabIndex={-1}
                  startIcon={<CloudUploadIcon />}
                >
                  Upload Business Logo Here
                  <VisuallyHiddenInput type="file" />
                </Button>
              </Grid>
            </Grid>{" "}
            <Stack direction="row" spacing={2} style={{ marginTop: "1%" }}>
              <Button variant="contained" href="/">
                Add Service
              </Button>
            </Stack>
          </Container>
        </form>
      </div>
    </>
  );
};

export default AddServices;
