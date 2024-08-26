import React from 'react';
import logo from '../assets/holberton-logo.jpg';
import { getFullYear, getFooterCopy } from '../utils/utils';
import './App.css';


function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </div>
      <div className='App-body'>
        <p>Login to access the full dashboard</p>
        <form>
          <label htmlFor='email'>Email:</label>
          <input type='email' name='email'></input>
          <label htmlFor='password'>Password:</label>
          <input type='password' name='password'></input>
          <button type='submit'>OK</button>
        </form>
      </div>
      <div className='App-footer'>
        Copyright {getFullYear()} - {getFooterCopy(true)}
      </div>
    </div>
  );
}


export default App;