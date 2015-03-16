var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var Page = require('components/page.jsx');
var Albums = require('components/albums.jsx');
var Album = require('components/album.jsx');

var routes = (
  <Route handler={Page} path='/'>
    <DefaultRoute handler={Albums} />
    <Route name="albums" handler={Albums}>
      <Route name="album/:albumName" handler={Album} />
    </Route>
  </Route>
);

Router.run(routes, function(Handler) {
  React.render(<Handler />, document.body);
});
