import $ from 'jquery';
import _ from 'lodash';
import './body.css';

let count = 0;
$(document).ready(function () {
  console.log('Init body');
  $('body').append('<button class="button">Click me</button><div class="counter">Count: 0</div>');
  $('.button').click(function () {
    count += 1;
    $('.counter').text(`Count: ${count}`);
  });
});