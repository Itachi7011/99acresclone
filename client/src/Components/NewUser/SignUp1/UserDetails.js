import React from 'react'
// import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Grid, TextField, Button } from '@mui/material'

const UserDetails = ({ nextStep, handleChange, values }) => {
  
  // for continue event listener
  const Continue = e => {
    e.preventDefault();
    nextStep();
  }

  return (
    <Container  component="main" maxWidth="xs" style={{marginTop:'10%', marginBottom:"10%"}}>
      <div>
        <Typography  component="h1" variant="h5" style={{marginBottom:"1rem"}}>
          Sign up
        </Typography>
        <form>
          <Grid container spacing={2}>
              {/* email address */}
              <Grid item xs={12}>
                <TextField 
                  placeholder="Email Address"
                  label="Email Address"
                  onChange={handleChange('email')}
                  defaultValue={values.email}
                  // variant="outlined"
                  autoComplete="email"
                  fullWidth
                />
              </Grid>
              <br />
              {/* username */}
              
              <Grid item xs={12}>
                <TextField 
                  placeholder="Mobile"
                  label="Mobile"
                  onChange={handleChange('phoneNo')}
                  defaultValue={values.phoneNo}
                  // variant="outlined"
                  autoComplete="username"
                  fullWidth
                />
              </Grid>
              <br />
              <br />
              {/* password */}
              <Grid item xs={12}>
                <TextField 
                  placeholder="Password"
                  label="Password"
                  onChange={handleChange('password')}
                  defaultValue={values.password}
                  // variant="outlined"
                  autoComplete="password"
                  fullWidth
                  type="password"
                />
              </Grid>
          </Grid>
          <br />
          <Button 
            onClick={ Continue }
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Next
          </Button>
        </form>
      </div>
    </Container>
  )
}

export default UserDetails
