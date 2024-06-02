import React, { Component } from "react";
import UserDetails from "./UserDetails";
import PersonalDetails from "./PersonalDetails";
import Confirmation from "./Confirmation";
import Success from "./Success";

export default class Signup extends Component {
  state = {
    step: 1,
    email: "",
    firstName: "",
    lastName: "",
    userType: "",
    password: "",
    cPassword: "",
    // emailVerification:false,
    country: "",
    state: "",
    city: "",
    location: "",
    subLocality: "",
    dateOfFormSubmission: "",
  };

  // go back to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  // proceed to the next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  // Handle fields change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const {
      email,
      password,
      cPassword,
      firstName,
      lastName,
      country,
      state,
      location,
      subLocality,
      userType,
      dateOfFormSubmission,
    } = this.state;
    const values = {
      email,
      password,
      cPassword,
      firstName,
      lastName,
      country,
      state,
      location,
      subLocality,
      userType,
      dateOfFormSubmission,
    };

    switch (step) {
      case 1:
        return (
          <UserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <PersonalDetails
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Confirmation
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            values={values}
          />
        );
      case 4:
        return <Success />;
      default:
      // do nothing
    }
  }
}
