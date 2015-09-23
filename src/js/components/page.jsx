import React, { Component } from 'react';
import { RouteHandler } from 'react-router';

class Page extends Component {
  render() {
    return (
      <div className="content">
        <header>
          <h2><a href="/">Emily Shepherd Photography</a></h2>
        </header>
        <RouteHandler {...this.props} />
      </div>
    );
  }
}

export default Page;
