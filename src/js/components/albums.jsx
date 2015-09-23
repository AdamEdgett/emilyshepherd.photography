import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import getJSON from 'helpers/get_json';

const propTypes = {
  data: PropTypes.shape({
    albums: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired,
        cover: PropTypes.string.isRequired,
      })
    ),
  }),
};

class Albums extends Component {
  static fetchData() {
    return getJSON('json/albums.json');
  }

  render() {
    const { albums } = this.props.data;
    const renderedAlbums = albums.map((album) => {
      return (
        <div className="photo-box" key={album.title}>
          <Link to="album" params={{albumName: album.path}}>
            <img src={`albums/${album.path}/${album.cover}`} />
          </Link>
          <aside className="photo-caption">
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
}

Albums.propTypes = propTypes;

export default Albums;
