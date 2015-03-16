var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var Page = React.createClass({
  render: function() {
    return (
      <div className='content'>
        <header>
          <h2><a href="/">Emily Shepherd Photography</a></h2>
        </header>
        <RouteHandler />
      </div>
    );
  }
});

module.exports = Page;
