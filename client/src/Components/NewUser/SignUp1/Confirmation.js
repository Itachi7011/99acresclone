import React from 'react'
import { Container, Grid, List, ListItem, ListItemText, Button } from '@mui/material'

const Confirmation = ({ prevStep, nextStep, values }) => {
  console.log(values);
  const { email, firstName, lastName, country,state, location, subLocality } = values;
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
        <List>
          <ListItem>
            <ListItemText primary="Email" secondary={email}/>
          </ListItem>
          <ListItem>
            <ListItemText primary="First Name" secondary={firstName}/>
          </ListItem>
          <ListItem>
            <ListItemText primary="Last Name" secondary={lastName}/>
          </ListItem>
          <ListItem>
            <ListItemText primary="Country of Residence" secondary={country}/>
          </ListItem>
          <ListItem>
            <ListItemText primary="State" secondary={state}/>
          </ListItem>
          <ListItem>
            <ListItemText primary="Location" secondary={location}/>
          </ListItem>
          <ListItem>
            <ListItemText primary="Sub-location" secondary={subLocality}/>
          </ListItem>
        </List>

        <br />
        <Grid container spacing={2}>
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
              Submit
            </Button>
          </Grid>
        </Grid>
      </div>
    </Container>
  )
}

export default Confirmation
