import React, { Component } from "react";
import "./AddInfo.css";

class AddInfo extends Component {
  state = {
    name: "",
    age: "",
    email: "",
    error: {
      nameError: "",
      ageError: "",
      contactError: "",
    },
    formValid: false,
  };

  handleChange = (e) => {
    //event object
    console.log(e);
    console.log(e.target.id);
    console.log(e.target.value);

    // this is referring to AddInfo
    if (e.target.id == "name") {
      this.validateName(e.target.value);
    } else if (e.target.id == "age") {
      this.validateAge(e.target.value);
    } else if (e.target.id == "email") {
      this.validateEmail(e.target.value);
    }
    // this.setState({
    //   [e.target.id]: e.target.value,
    // });
  };

  validateName = (name) => {
    let nameError = this.state.error.nameError;
    let formValid = this.state.formValid;
    let pattern = /^[A-Za-z]+$/;

    if (name.trim() == "") {
      nameError = "This is required";
      formValid = false;
    } else if (name.trim().length < 3 || !pattern.test(name)) {
      nameError = "This is invalid name";
      formValid = false;
    } else {
      nameError = "";
      formValid = true;
    }

    //spread operator (...)
    this.setState({
      name,
      formValid,
      error: { ...this.state.error, nameError },
    });

    return formValid;
  };

  validateAge = (age) => {
    let ageError = this.state.error.ageError;
    let formValid = this.state.formValid;
    let pattern = /^[0-9]*$/;

    if (age.trim() == "") {
      ageError = "This is required";
      formValid = false;
    } else if (age.trim().length > 3 || !pattern.test(age)) {
      ageError = "This is invalid";
      formValid = false;
    } else {
      ageError = "";
      formValid = true;
    }

    this.setState({
      age,
      formValid,
      error: { ...this.state.error, ageError },
    });

    return formValid;
  };

  validateEmail = (email) => {
    let emailError = this.state.error.emailError;
    let formValid = this.state.formValid;

    let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    //regex
    if (!pattern.test(email)) {
      emailError = "Please enter valid email";
      formValid = false;
    } else {
      emailError = "";
      formValid = true;
    }

    this.setState({
      email,
      formValid,
      error: { ...this.state.error, emailError },
    });

    return formValid;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (
      this.validateName(this.state.name) &&
      this.validateAge(this.state.age) &&
      this.validateEmail(this.state.email)
    ) {
      alert("Form is submitted");

      this.props.addInfo(this.state);

      this.setState({
        name: "",
        age: "",
        email: "",
      });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          placeholder="Please enter name"
          id="name"
          onChange={this.handleChange}
          value={this.state.name}
        />
        <p style={{ color: "red", fontSize: "16px" }}>
          {this.state.error.nameError}
        </p>

        <label>Age</label>
        <input
          type="number"
          placeholder="Please enter age"
          id="age"
          onChange={this.handleChange}
          value={this.state.age}
        />
        <p className="error-message">{this.state.error.ageError}</p>

        <label>Email Address</label>
        <input
          type="email"
          placeholder="Please enter email"
          id="email"
          onChange={this.handleChange}
          value={this.state.email}
        />
        <p id="error">{this.state.error.emailError}</p>

        <button>Submit</button>
      </form>
    );
  }
}

export default AddInfo;
