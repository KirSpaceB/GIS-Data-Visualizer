import { useEffect, useState } from 'react';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import { ToggleData } from '../display-data/ToggleData';
import './styles/MapDevelopment.css'
import '@arcgis/core/assets/esri/themes/light/main.css';
import { MapContext } from '../../shared/map-context/MapContext';

export const MapDevelopment = () => {
  const [map, setMap] = useState<Map | null>(null);
  const [view, setView] = useState<MapView | null>(null);

  useEffect(() => {
    const myMap = new Map({
      basemap: 'streets',
    });

    const myView = new MapView({
      map: myMap,
      container: 'viewDiv',
      center: [-118.2437, 34.0522],
      zoom: 12,
    });
    setMap(myMap);
    setView(myView);
    
    myView.popup.autoOpenEnabled = true;
  }, []);

  return (
    <MapContext.Provider value={{map,view}}>
      <div className="map-container">
        <ToggleData/>
        <div id="viewDiv" className="view-div"></div>
      </div>
    </MapContext.Provider>
  );
};