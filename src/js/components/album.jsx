import React, { Component, PropTypes } from 'react';

import masonry from 'masonry-layout';
import Spinner from 'spin.js';
import imagesLoaded from 'imagesloaded';

import getJSON from 'helpers/get_json';

const propTypes = {
  data: PropTypes.shape({
    album: PropTypes.shape({
      title: PropTypes.string.isRequired,
      photos: PropTypes.arrayOf(
        PropTypes.shape({
          url: PropTypes.string.isRequired,
          title: PropTypes.string,
        })
      ),
    }),
  }),
};

class Album extends Component {
  componentDidMount() {
    const spinnerContainer = document.getElementById('spinner-container');
    new Spinner({top: '100px'}).spin(spinnerContainer);

    const container = document.getElementById('photo-group');
    if (container) {
      imagesLoaded( container, function() {
        spinnerContainer.className += 'hidden';
        masonry( container, {
          columnWidth: 0,
          gutter: 0,
          itemSelector: '.photo-box',
        });
      });
    }
  }

  static fetchData(params) {
    return getJSON(`json/albums/${params.albumName}.json`);
  }

  render() {
    const { album } = this.props.data;
    const { photos, title } = album;

    const renderedPhotos = photos.map((photo) => {
      return (
        <div className="photo-box" key={photo.url}>
          <a href={photo.url} data-lightbox="album" data-title={photo.title}>
            <img src={photo.url} />
          </a>
        </div>
      );
    });

    return (
      <div className="album-info">
        <h3>{title}</h3>
        <div id="photo-group">
          <div id="spinner-container" />
          {renderedPhotos}
        </div>
      </div>
    );
  }
}

Album.propTypes = propTypes;

export default Album;
