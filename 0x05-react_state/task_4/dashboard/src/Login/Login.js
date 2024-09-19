import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  "App-body": {
    fontSize: "1.4rem",
    height: "45%",
    padding: "1.2em",
  },
  "form-inputs": {
    alignItems: "center",
    gap: "2em",
    display: "flex",
  },
  input: {
    marginLeft: "10px",
    height: "1.4rem",
  },
  small: {
    "@media (max-width: 900px)": {
      display: "flex",
      flexDirection: "column",
    },
  },
  button: {
    width: "auto",
    "@media (max-width: 900px)": {
      width: "20%",
      fontSize: "1rem",
    },
  },
});

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      email: "",
      password: "",
      enableSubmit: false,
    };

    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.updateSubmitButtonState = this.updateSubmitButtonState.bind(this);
  }

  handleLoginSubmit(event) {
    event.preventDefault();
    const { logIn } = this.props;
    const { email, password } = this.state;
    logIn(email, password);
  }

  handleChangeEmail(event) {
    this.setState({ email: event.target.value }, this.updateSubmitButtonState);
  }

  handleChangePassword(event) {
    this.setState(
      { password: event.target.value },
      this.updateSubmitButtonState
    );
  }

  updateSubmitButtonState() {
    const { email, password } = this.state;
    const enableSubmit = email !== '' && password !== '';
    this.setState({ enableSubmit });
  }

  render() {
    const { email, password, enableSubmit } = this.state;
    return (
      <React.Fragment>
        <div className={css(styles["App-body"])}>
          <p>Login to access the full dashboard</p>
          <form
            className={css(styles["form-inputs"], styles.small)}
            onSubmit={this.handleLoginSubmit}
          >
            <label htmlFor="email">Email:</label>
            <input
              className={css(styles.input)}
              type="email"
              name="email"
              value={email}
              onChange={this.handleChangeEmail}
            />
            <label htmlFor="password">Password:</label>
            <input
              className={css(styles.input)}
              type="password"
              name="password"
              value={password}
              onChange={this.handleChangePassword}
            />
            <input
              className={css(styles.button)}
              type="submit"
              value="OK"
              disabled={!enableSubmit}
            />
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
