var React = require('react');

var Page = require('components/page.jsx');

window.onload = function () {
  var documentRoot = document.querySelector('#content-anchor');
  var component = React.render(<Page />, documentRoot);
};
