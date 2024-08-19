import $ from 'jquery';
import './header.css';

$(document).ready(function () {
  console.log('Init header');
  $('body').prepend('<header><img src="assets/holberton-logo.jpg" alt="Holberton Logo"><h1>Holberton Dashboard</h1></header>');
});
