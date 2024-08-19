import $ from 'jquery';
import './footer.css';

$(document).ready(function () {
  console.log('Init footer');
  $('body').append('<footer><p>Copyright - Holberton School</p></footer>');
});