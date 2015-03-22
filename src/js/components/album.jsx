const React = require('react');

const _ = require('lodash');
const Masonry = require('masonry-layout');
const Spinner = require('spin.js');
const imagesLoaded = require('imagesloaded');

const getJSON = require('helpers/get_json');

const Album = React.createClass({
  statics: {
    fetchData: function(params) {
      return getJSON(`json/albums/${params.albumName}.json`);
    }
  },

  props: {
    data: React.PropTypes.shape({
      album: React.PropTypes.shape({
        title: React.PropTypes.string.isRequired,
        photos: React.PropTypes.arrayOf(
          React.PropTypes.shape({
            url: React.PropTypes.string.isRequired,
            title: React.PropTypes.string
          })
        )
      })
    })
  },

  render: function() {
    const { album } = this.props.data;
    const { photos, title } = album;

    const renderedPhotos = _.map(photos, function(photo) {
      return (
        <div className='photo-box' key={photo.url}>
          <a href={photo.url} data-lightbox='album' data-title={photo.title}>
            <img src={photo.url} />
          </a>
        </div>
      );
    });

    return (
      <div className='album-info'>
        <h3>{title}</h3>
        <div id='photo-group'>
          <div id='spinner-container' />
          {renderedPhotos}
        </div>
      </div>
    );
  },

  componentDidMount: function() {
    const spinnerContainer = document.getElementById('spinner-container');
    const spinner = new Spinner({top: '100px'}).spin(spinnerContainer);

    const container = document.getElementById('photo-group');
    if (container) {
      imagesLoaded( container, function() {
        spinnerContainer.className += 'hidden';
        new Masonry( container, {
          columnWidth: 0,
          gutter: 0,
          itemSelector: '.photo-box'
        });
      });
    }
  }
});

export default Album;
