import { Map, Marker } from "pigeon-maps";
import { useContext } from "react";
import { MpsContext } from "../context/MpsContext";

const SurfMap = () => {
  const { value1 } = useContext(MpsContext);
  const [locationData, setLocationData] = value1;

  return (
    <div
      style={{ textAlign: "center", margin: "25px 0px" }}
    >
      <Map
        height={300}
        defaultCenter={[46.16, -1.15]}
        defaultZoom={6}
      >
        <Marker
          width={50}
          anchor={[locationData.latitude, locationData.longitude]}
        />
      </Map>
    </div>
  );
};

export default SurfMap;
