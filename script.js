require([
  "esri/Map", 
  "esri/views/MapView", 
  "esri/layers/FeatureLayer",
  "esri/renderers/SimpleRenderer",
  "esri/symbols/SimpleFillSymbol"
], (Map, MapView, FeatureLayer, SimpleRenderer, SimpleFillSymbol) => {
  const map = new Map({ basemap: "dark-gray" });

  const view = new MapView({
    container: "viewDiv",
    map: map,
    center: [-98.5795, 39.8283],
    zoom: 4 
  });

  // Semi-transparent fill symbol for the Boundary Layer
  const boundarySymbol = new SimpleFillSymbol({
    color: [0, 0, 0, 0.1], // RGBA color, where A (alpha) controls transparency
    outline: {  
      color: [0, 0, 0, 0.3],
      width: "1px"
    }
  });

  const boundaryRenderer = new SimpleRenderer({
    symbol: boundarySymbol
  });

  // Boundary Layer with customized renderer
  const featureLayer_1 = new FeatureLayer({
    url: "https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/USA_States_Generalized_Boundaries/FeatureServer/0",
    popupTemplate: {
      title: "State Boundary",
      content: "State Name: {STATE_NAME}"
    },
    renderer: boundaryRenderer
  });
  map.add(featureLayer_1);
  
  // Forest Layer with GIS_ACRES and FORESTNAME attributes in pop-up
  const featureLayer_2 = new FeatureLayer({
    url: "https://services2.arcgis.com/FiaPA4ga0iQKduv3/arcgis/rest/services/EDW_ProclaimedForestBoundaries_v1/FeatureServer/0",
    popupTemplate: {
      title: "Forest Area",
      content: "Forest Name: {FORESTNAME}<br>Area in Acres: {GIS_ACRES}"
    }
  });
  map.add(featureLayer_2);
});

  // Note: Instead of using the URL, the feature layer can also be added using its ArcGIS Online item ID.
  // Example:
  // const featureLayer_1 = new FeatureLayer({
  //   portalItem: {
  //     id: "your_layer_item_id"
  //   }
  // });
