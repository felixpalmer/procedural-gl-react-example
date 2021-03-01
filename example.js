import React from 'react';
import ProceduralMap from 'procedural-gl-react';

import overlay from './overlay.js';

// Define API Keys (replace these with your own!)
const NASADEM_APIKEY = null;
const MAPTILER_APIKEY = null;
if ( !NASADEM_APIKEY || !MAPTILER_APIKEY ) {
  const error = Error( 'Include your own API keys' );
  throw error;
}

const datasource = {
  elevation: {
    apiKey: NASADEM_APIKEY
  },
  imagery: {
    apiKey: MAPTILER_APIKEY,
    urlFormat: 'https://api.maptiler.com/tiles/satellite/{z}/{x}/{y}.jpg?key={apiKey}',
    attribution: '<a href="https://www.maptiler.com/copyright/">Maptiler</a> <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }
}

export default class Example extends React.Component {
  constructor( props ) {
    super( props );
    this.map = React.createRef();
  }

  componentDidMount() {
    // Once map is initialized add an overlay
    const map = this.map.current;
    map.addOverlay( overlay );
  }

  render() {
    return React.createElement( ProceduralMap, {
      ref: this.map,
      datasource,

      // Configure UI elements to show
      compassVisible: true,

      // Configure initial map location
      displayLocation: {
        latitude: 47.25,
        longitude: 13.56
      },

      // Define callbacks
      onFeatureClicked: id => {
        // The id passed here is defined in the overlay
        const map = this.map.current;

        // Simply focus on the feature when clicked
        map.focusOnFeature( id );
      }
    } );
  }
}
