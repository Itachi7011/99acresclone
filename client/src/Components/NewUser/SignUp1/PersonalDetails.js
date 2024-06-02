import React from 'react'
import { Container, Typography, Grid, TextField, Button  } from '@mui/material';
import { Country, State, City } from "country-state-city";
import Select from "react-select";
import { useState ,useEffect} from 'react';

const PersonalDetails = ({ prevStep, nextStep, handleChange, values }) => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

  useEffect(() => {
    console.log(selectedCountry);
    console.log(selectedCountry?.isoCode);
    console.log(State?.getStatesOfCountry(selectedCountry?.isoCode));
  }, [selectedCountry]);

  
  const Continue = e => {
    e.preventDefault();
    nextStep();
  }

  const Previous = e => {
    e.preventDefault();
    prevStep();
  }

  return (
    <Container  component="main" maxWidth="xs" style={{marginTop:'10%', marginBottom:"10%"}}>
      <div>
        <Typography  component="h1" variant="h5">
          Sign up
        </Typography>
        <form>
          <Grid container spacing={2}>

            {/* first name */}
            <Grid item xs={12} sm={6}>
              <TextField 
                placeholder="First Name"
                label="First Name"
                onChange={handleChange('firstName')}
                defaultValue={values.firstName}
              />
            </Grid>
            {/* last name */}
            <Grid item xs={12} sm={6}>
              <TextField 
                placeholder="Last Name"
                label="Last Name"
                onChange={handleChange('lastName')}
                defaultValue={values.lastName}
              />
            </Grid>

            {/* country of residence */}
            <Grid item xs={12}>
            <div className="App" style={{ width: "100%", float: "left" }}>
              Country
              <Select
                style={{ width: "30%", float: "right", marginRight: "45%" }}
                options={Country.getAllCountries()}
                getOptionLabel={(options) => {
                  return options["name"];
                }}
                getOptionValue={(options) => {
                  return options["name"];
                }}
                value={selectedCountry}
                defaultValue={values.country}

                onChange={(item) => {
                  setSelectedCountry(item);
                }}
                name="country"
              />
              State{" "}
              <Select
                style={{ width: "30%", float: "right", marginRight: "45%" }}
                options={State?.getStatesOfCountry(selectedCountry?.isoCode)}
                getOptionLabel={(options) => {
                  return options["name"];
                }}
                getOptionValue={(options) => {
                  return options["name"];
                }}
                value={selectedState}
                defaultValue={values.state}

                onChange={(item) => {
                  setSelectedState(item);
                }}
                name="state"
              />
              Location{" "}
              <Select
                style={{ width: "50%", float: "right", marginRight: "45%" }}
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
                defaultValue={values.location}

                onChange={(item) => {
                  setSelectedCity(item);
                }}
                name="location"
              />{" "}
              <br />
              </div>
            </Grid>

            {/* Sub-locality */}
            <Grid item xs={12}>
              <TextField 
                placeholder="Sub-locality"
                label="Sub-locality"
                onChange={handleChange('levelOfEducation')}
                defaultValue={values.levelOfEducation}
                autoComplete="Sub-locality"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField 
                placeholder="Sub-locality"
                label="Sub-locality"
                onChange={handleChange('subLocality')}
                defaultValue={values.subLocality}
                autoComplete="Sub-locality"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button 
                onClick={ Previous }
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Previous
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button 
                onClick={ Continue }
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Next
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  )
}

export default PersonalDetails

