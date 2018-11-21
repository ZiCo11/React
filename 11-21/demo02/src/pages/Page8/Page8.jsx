import React, { Component } from 'react';
import EventsOverview from './components/EventsOverview';

export default class Page8 extends Component {
  static displayName = 'Page8';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="page8-page">
        <EventsOverview />
      </div>
    );
  }
}
