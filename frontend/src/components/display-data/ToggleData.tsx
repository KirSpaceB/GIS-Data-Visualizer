import { CreateGraphics } from "../map-graphics/CreateGraphics";
import { CreateFeatureLayer } from "../map-feature-layer/CreateFeatureLayer";
import { MapContext } from "../../shared/map-context/MapContext";
import { useContext, useState } from "react";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";

export const ToggleData = () => {
  const { map } = useContext(MapContext);
  console.log(map);
  
  const [isDisplayed, setIsDisplayed] = useState(false);
  const [featureLayer, setFeatureLayer] = useState<FeatureLayer>();

  const displayPopHandler = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    
    if(!isDisplayed) {
      const graphics = CreateGraphics();
      const createdFeatureLayer = CreateFeatureLayer(graphics);
      setFeatureLayer(createdFeatureLayer);
      
      if(map) {
        map.add(createdFeatureLayer);
      }
      setIsDisplayed(true);
    } else {
      if(map && featureLayer) {
        map.remove(featureLayer);
      }
      setIsDisplayed(false);
    }
  }
  
  return (
    <div>
      <button onClick={(e) => displayPopHandler(e)}>Display Population</button>
    </div>
  )
}
