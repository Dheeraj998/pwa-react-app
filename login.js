import React, { Component } from "react";
import "./login.css";
import Navbar from "../components/Navbar";




const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

class login extends Component {
  constructor(props) {
    super(props);
   

    this.state = {
         RegNo: null,
      password: null,
      formErrors: {
           RegNo: "",
        password: ""
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        RegNo: ${this.state.RegNo}
        Password: ${this.state.password}
      `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "RegNo":
        formErrors.RegNo =
          value.length < 3 ? "minimum 5 characaters required" : "";
        break;
      case "password":
        formErrors.password =
          value.length < 6 ? "minimum 6 characaters required" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    const { formErrors } = this.state;

    return (

      <div> <Navbar />
          
      <div className="wrapper">
        <div className="form-wrapper">
          <h3>Student Login</h3>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="RegNo">
              <label htmlFor="RegNo">Register Number:</label>
              <input
                className={formErrors.RegNo.length > 0 ? "error" : null}
                placeholder="RegisterNumber"
                type="text"
                name="RegNo"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.RegNo.length > 0 && (
                <span className="errorMessage">{formErrors.RegNo}</span>
              )}
            </div>
           
              <div className="password">
              <label htmlFor="password">Password:</label>
              <input
                className={formErrors.password.length > 0 ? "error" : null}
                placeholder="Password"
                type="password"
                name="password"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )}
            </div>
            <div className="login1">
              <button type="submit" onClick="/Application.js">Login</button>
            </div>
          </form>
        </div>
      </div>
      </div>
    );
  }
}

export default login;
