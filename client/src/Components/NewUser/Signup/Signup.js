import React, { useRef, useState } from "react";
import axios from "axios";
import {
  Container,
  Grid,
  TextField,
  Button,
  //   List,
  //   ListItem,
  //   ListItemText,
  FormControl,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  Radio,
} from "@mui/material";
import { Country, State, City } from "country-state-city";
import Select from "react-select";

const Signup = () => {
  let name, value;
  const UserDetails = useRef(null);
  const PersonalDetailsRef = useRef(null);
  //   const confirmationRef = useRef(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [user, setUser] = useState({
    email: "",
    phoneNo: "",
    password: "",
    cpassword: "",
    firstName: "",
    lastName: "",
    gender: "",
    country: "",
    state: selectedState,
    location: "",
    sublocation: "",
  });

  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });

  };
  console.log("State is :", user.state);

  const nextBtn = () => {
    UserDetails.current.style.display = "none";
    PersonalDetailsRef.current.style.display = "block";
  };

  const prevButton = () => {
    UserDetails.current.style.display = "block";
    PersonalDetailsRef.current.style.display = "none";
  };
  const prev2Button = () => {
    UserDetails.current.style.display = "none";
    // confirmationRef.current.style.display = "none";

    PersonalDetailsRef.current.style.display = "block";
  };
  const confirmationBtn = () => {
    UserDetails.current.style.display = "none";
    PersonalDetailsRef.current.style.display = "none";
    // confirmationRef.current.style.display = "block";
  };
  



  return (
    <>
      <div style={{ marginTop: "7%", marginBottom: "7%" }}>
        <h3
          component="h1"
          variant="h5"
          style={{ marginBottom: "1rem", textAlign: "center" }}
        >
          Sign up (New User)
        </h3>
        <form method="post" action="/newUserRegistration">
          <Container
            ref={UserDetails}
            component="main"
            maxWidth="xs"
            style={{ marginTop: "0%", marginBottom: "10%", display: "block" }}
          >
            <div>
              <Grid container spacing={2}>
                {/* email address */}
                <Grid item xs={12}>
                  <TextField
                    placeholder="Email Address"
                    label="Email Address"
                    onChange={handleInput}
                    // variant="outlined"
                    autoComplete="email"
                    fullWidth
                    name="email"
                  />
                </Grid>
                <br />

                <Grid item xs={12}>
                  <TextField
                    placeholder="Mobile"
                    label="Mobile"
                    // variant="outlined"
                    onChange={handleInput}
                    autoComplete="username"
                    fullWidth
                    name="phoneNo"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">
                      I am a : 
                    </FormLabel>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="female"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel
                        onClick={handleInput}
                        value="Indivisual Buyer/Seller"
                        control={<Radio />}
                        label="Indivisual Buyer/Seller"
                        name="userType"
                      />
                      <FormControlLabel
                        onClick={handleInput}
                        value="Agent"
                        control={<Radio />}
                        label="Agent"
                        name="userType"
                      />
                      <FormControlLabel
                        onClick={handleInput}
                        value="Developer"
                        control={<Radio />}
                        label="Developer"
                        name="userType"
                      />
                    </RadioGroup>
                  </FormControl>
                  
                </Grid>

                <br />
                <br />
                {/* password */}
                <Grid item xs={12}>
                  <TextField
                    placeholder="Password"
                    label="Password"
                    // variant="outlined"
                    autoComplete="password"
                    onChange={handleInput}
                    fullWidth
                    type="password"
                    name="password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    placeholder=" Confirm Password"
                    label="Confirm Password"
                    // variant="outlined"
                    autoComplete="password"
                    onChange={handleInput}
                    fullWidth
                    type="password"
                    name="cpassword"
                  />
                </Grid>
              </Grid>
              <br />
              <Button
                type="button"
                fullWidth
                variant="contained"
                color="primary"
                onClick={nextBtn}
              >
                Next
              </Button>
            </div>
          </Container>

          <Container
            ref={PersonalDetailsRef}
            component="main"
            maxWidth="xs"
            style={{ marginTop: "0%", marginBottom: "10%", display: "none" }}
          >
            <div>
              <Grid container spacing={2}>
                {/* first name */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    placeholder="First Name"
                    label="First Name"
                    onClick={handleInput}
                    name="firstName"
                  />
                </Grid>
                {/* last name */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    placeholder="Last Name"
                    label="Last Name"
                    onClick={handleInput}
                    name="lastName"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">
                      Gender
                    </FormLabel>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="male"
                      name="radio-buttons-group"
                    >
                      
                      <FormControlLabel
                        onClick={handleInput}
                        value="Male"
                        control={<Radio />}
                        label="Male"
                        name="gender"
                      />
                      <FormControlLabel
                        onClick={handleInput}
                        value="Female"
                        control={<Radio />}
                        label="Female"
                        name="gender"
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>

                {/* country of residence */}

                <Grid item xs={12}>
                  <div className="App" style={{ width: "100%", float: "left" }}>
                    Country
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
                      name="country"
                    />
                    State{" "}
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
                      name="state"
                    />
                    Location{" "}
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
                      name="location"
                    />{" "}
                  </div>
                </Grid>
                {/* Sub-locality */}

                <Grid item xs={12}>
                  <TextField
                    placeholder="Sub-locality"
                    label="Sub-locality"
                    onChange={handleInput}
                    autoComplete="Sub-locality"
                    fullWidth
                    name="sublocation"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button
                    onClick={prevButton}
                    type="button"
                    fullWidth
                    variant="contained"
                    color="primary"
                  >
                    Previous
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>

          {/* <Container
            ref={confirmationRef}
            component="main"
            maxWidth="xs"
            style={{ marginTop: "0%", marginBottom: "10%", display: "none" }}
          >
            <div>
              <List>
                <ListItem>
                  <ListItemText primary="Email" secondary={user.email}/>
                </ListItem>
                <ListItem>
                  <ListItemText primary="First Name" secondary={user.firstName}/>
                </ListItem>
                <ListItem>
                  <ListItemText primary="Last Name" secondary={user.lastName}/>
                </ListItem>
                <ListItem>
                  <ListItemText primary="Mobile Number" secondary={user.phoneNo}/>
                </ListItem>
                <ListItem>
                  <ListItemText primary="Gender" secondary={user.gender}/>
                </ListItem>
                <ListItem>
                  <ListItemText primary="Address" secondary={Address}/>
                </ListItem>
                
              </List>

              <br />
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Button
                    onClick={prev2Button}
                    type="button"
                    fullWidth
                    variant="contained"
                    color="primary"
                  >
                    Previous
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button
                    onClick={submitButton}
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container> */}
        </form>
      </div>
    </>
  );
};

export default Signup;
