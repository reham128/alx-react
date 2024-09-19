import React from "react";
import { getFullYear, getFooterCopy } from "../utils/utils";
import "./Footer.css";
import { AppContext } from '../App/AppContext';

function Footer() {
  return (
    <AppContext.Consumer>
      {(context) => {
        return (
          <div className='App-footer'>
            Copyright {getFullYear()} - {getFooterCopy()}
            {context.user.isLoggedIn && (
              <p>
                <a href='/contact' id='contactLink'>
                  Contact us
                </a>
              </p>
            )}
          </div>
        );
      }}
    </AppContext.Consumer>
  );
}

export default Footer;