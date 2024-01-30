require([
  "esri/Map", 
  "esri/views/MapView", 
  "esri/layers/FeatureLayer"
], (Map, MapView, FeatureLayer) => {
    // Create a Map instance
    const map = new Map({
      basemap: "dark-gray"
    });

    // Create a MapView instance 
    const view = new MapView({
      container: "viewDiv",
      map: map,
      center: [-98.5795, 39.82839], // Center on a specific location (USA)
      zoom: 4 
    });

    // Add the first feature layer using its ArcGIS Online item ID
    const featureLayer1 = new FeatureLayer({
      portalItem: {
        id: "8c2d6d7df8fa4142b0a1211c8dd66903" 
      }
    });
    map.add(featureLayer1);

    // Add the second feature layer using its ArcGIS Online item ID
    const featureLayer2 = new FeatureLayer({
      portalItem: {
        id: "394d26a0dc684c4c8347afd002f63b70"
      }
    });
    map.add(featureLayer2);
});
