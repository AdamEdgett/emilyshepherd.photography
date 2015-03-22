const React = require('react');
const Router = require('react-router');
const { Route, DefaultRoute } = Router;

const Page = require('components/page.jsx');
const Albums = require('components/albums.jsx');
const Album = require('components/album.jsx');

const routes = (
  <Route handler={Page} path='/'>
    <DefaultRoute name="albums" handler={Albums} />
    <Route name="album" path="/albums/:albumName" handler={Album} />
  </Route>
);

function fetchData(routes, params) {
  let data = {};
  return Promise.all(routes
    .filter(route => route.handler.fetchData)
    .map(route => {
      return route.handler.fetchData(params).then(d => {data[route.name] = d;});
    })
  ).then(() => data);
};

Router.run(routes, function(Handler, state) {
  fetchData(state.routes, state.params).then(function(data) {
    React.render(<Handler data={data} />, document.querySelector('#content-anchor'));
  });
});
