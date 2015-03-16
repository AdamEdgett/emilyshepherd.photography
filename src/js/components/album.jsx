var React = require('react');

var _ = require('lodash');

var Album = React.createClass({
  props: {
    title: React.PropTypes.string.isRequired,
    photos: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        url: React.PropTypes.string.isRequired,
        title: React.PropTypes.string
      })
    )
  },

  render: function() {
    var renderedPhotos = _.map(this.props.photos, function(photo) {
      return (
        <div className='photo-box'>
          <a href={photo.url} data-lightbox='album' data-title={photo.title}>
            <img src={photo.url} />
          </a>
        </div>
      );
    });

    return (
      <div className='album-info'>
        <h3>{this.props.title}</h3>
        <div id='photo-group'>
          <div id='spinner-container' />
          {renderedPhotos}
        </div>
      </div>
    );
  }
});

module.exports = Album;
