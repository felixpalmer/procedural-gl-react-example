import React from 'react';
import ProceduralMap from 'procedural-gl-react';

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
  render() {
    return React.createElement( ProceduralMap, {
      datasource,
      compassVisible: true,
      displayLocation: {
        latitude: 47.5,
        longitude: 13.55
      }
    } );
  }
}
