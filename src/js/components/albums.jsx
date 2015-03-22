const React = require('react');
const Router = require('react-router');
const { Link } = Router;

const _ = require('lodash');
const getJSON = require('helpers/get_json');

const Albums = React.createClass({
  statics: {
    fetchData: function(params) {
      return getJSON('json/albums.json');
    }
  },

  props: {
    data: React.PropTypes.shape({
      albums: React.PropTypes.arrayOf(
        React.PropTypes.shape({
          title: React.PropTypes.string.isRequired,
          path: React.PropTypes.string.isRequired,
          cover: React.PropTypes.string.isRequired,
        })
      )
    })
  },

  render: function() {
    const { albums } = this.props.data;
    const renderedAlbums = _.map(albums, function(album) {
      return (
        <div className='photo-box' key={album.title}>
          <Link to='album' params={{albumName: album.path}}>
            <img src={'albums/' + album.path + '/' + album.cover} />
          </Link>
          <aside className='photo-caption'>
            {album.title}
          </aside>
        </div>
      );
    });

    return (
      <div>
        {renderedAlbums}
      </div>
    );
  }
});

export default Albums;
