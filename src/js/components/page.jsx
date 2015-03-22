const React = require('react');
const Router = require('react-router');
const { RouteHandler } = Router;

const Page = React.createClass({
  render: function() {
    return (
      <div className='content'>
        <header>
          <h2><a href="/">Emily Shepherd Photography</a></h2>
        </header>
        <RouteHandler {...this.props} />
      </div>
    );
  }
});

export default Page;
