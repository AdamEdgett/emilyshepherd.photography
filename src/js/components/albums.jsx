var React = require('react');

var _ = require('lodash');

var Albums = React.createClass({
  props: {
    albums: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        title: React.PropTypes.string.isRequired,
        url: React.PropTypes.string.isRequired,
        cover: React.PropTypes.string.isRequired,
        photos: React.PropTypes.arrayOf(
          React.PropTypes.shape({
            url: React.PropTypes.string.isRequired,
            title: React.PropTypes.string
          })
        )
      })
    )
  },

  render: function() {
    var renderedAlbums = _.map(this.props.albums, function(album) {
      return (
        <div className='photo-box'>
          <a href={album.url}>
            <img src={album.url + '/' + album.cover} />
          </a>
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

module.exports = Albums;
