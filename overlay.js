// Examples of other overlays can be found here:
// https://www.procedural.eu/overlays.html
const overlay = {
  "type": "FeatureCollection",
  "features": [ {
      "geometry": {
        "type": "Point",
        "coordinates": [ 13.56, 47.251 ]
      },
      "type": "Feature",
      "id": 0,
      "properties": {
        "anchorOffset": {
          "y": 80,
          "x": 0
        },
        "borderRadius": 32,
        "padding": 15,
        "color": "darkblue",
        "background": "lavender",
        "anchor": "center",
        "icon": "car"
      }
    },
    {
      "geometry": {
        "type": "Point",
        "coordinates": [ 13.56, 47.251 ]
      },
      "type": "Feature",
      "id": 0,
      "properties": {
        "color": "lavender",
        "icon": "chevron-down"
      }
    },
    {
      "geometry": {
        "type": "Point",
        "coordinates": [ 13.56, 47.251 ]
      },
      "type": "Feature",
      "id": 0,
      "properties": {
        "name": "Car rental",
        "anchorOffset": {
          "y": 80,
          "x": 70
        },
        "borderRadius": 4,
        "padding": 8,
        "color": "lavender",
        "fadeDistance": 3000,
        "borderWidth": 1,
        "background": "darkblue",
        "anchor": "left"
      }
    },
    {
      "geometry": {
        "type": "Point",
        "coordinates": [ 13.56, 47.251 ]
      },
      "type": "Feature",
      "id": 0,
      "properties": {
        "fadeDistance": 3000,
        "anchor": "left",
        "anchorOffset": {
          "y": 80,
          "x": 54
        },
        "icon": "caret-left"
      }
    },
    {
      "geometry": {
        "type": "Point",
        "coordinates": [ 13.54, 47.251 ]
      },
      "type": "Feature",
      "id": 1,
      "properties": {
        "anchorOffset": {
          "y": 80,
          "x": 0
        },
        "borderRadius": 32,
        "padding": 15,
        "color": "darkblue",
        "background": "lavender",
        "anchor": "center",
        "icon": "info"
      }
    },
    {
      "geometry": {
        "type": "Point",
        "coordinates": [ 13.54, 47.251 ]
      },
      "type": "Feature",
      "id": 1,
      "properties": {
        "color": "lavender",
        "icon": "chevron-down"
      }
    },
    {
      "geometry": {
        "type": "Point",
        "coordinates": [ 13.54, 47.251 ]
      },
      "type": "Feature",
      "id": 1,
      "properties": {
        "name": "Tourist information",
        "anchorOffset": {
          "y": 80,
          "x": 70
        },
        "borderRadius": 4,
        "padding": 8,
        "color": "lavender",
        "fadeDistance": 3000,
        "borderWidth": 1,
        "background": "darkblue",
        "anchor": "left"
      }
    },
    {
      "geometry": {
        "type": "Point",
        "coordinates": [ 13.54, 47.251 ]
      },
      "type": "Feature",
      "id": 1,
      "properties": {
        "fadeDistance": 3000,
        "anchor": "left",
        "anchorOffset": {
          "y": 80,
          "x": 54
        },
        "icon": "caret-left"
      }
    },
    {
      "geometry": {
        "type": "Point",
        "coordinates": [ 13.55, 47.25 ]
      },
      "type": "Feature",
      "id": 2,
      "properties": {
        "image": "img/blue-dot.png"
      }
    }
  ],
  "defaults": {
    "properties": {
      "clipping": "object",
      "fontSize": 12
    }
  }
}

export default overlay;
