import React from "react";
import logo from "../assets/holberton-logo.jpg";
import { StyleSheet, css } from 'aphrodite';

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

function Header() {
  return (
    <>
      <div className={css(styles["App-header"])}>
        <img src={logo} className={css(styles.img)} alt="logo" />
        <h1>School dashboard</h1>
      </div>
    </>
  );
}

export default Header;