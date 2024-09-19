import React from "react";
import { Component } from "react";
import Logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';
import { AppContext } from '../App/AppContext';

const styles = StyleSheet.create({
  "App-header": {
    borderBottom: '4px solid #e0364b',
    alignItems: "center",
    color: "#e0354b",
    fontSize: "1.25rem",
    display: "flex",
    padding: "1.2em",
  },

  img: {
    width: "200px",
    height: "200px",
  },
});

class Header extends Component {
  static contextType = AppContext;

  render() {
    const { user, logOut } = this.context;
    return (
      <div className={css(styles['App-header'])}>
        <img src={Logo} className={css(styles['App-logo'])} alt='logo' />
        <h1>School dashboard</h1>
        {user?.isLoggedIn && (
          <section id='logoutSection'>
            Welcome {user.email} (
            <a href='#' onClick={logOut}>
              logout
            </a>
            )
          </section>
        )}
      </div>
    );
  }
}


export default Header;