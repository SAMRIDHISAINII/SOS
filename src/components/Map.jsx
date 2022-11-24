import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css'; // Re-uses images from ~leaflet package
import 'leaflet-defaulticon-compatibility';


export function Map() {
    const pod = [28.4514423, 77.5830914]
    return <>
      hello
      <MapContainer
        center={pod}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: "100vh" }}
      >
        <TileLayer
        //   attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://2.base.maps.ls.hereapi.com/maptile/2.1/maptile/newest/normal.night.mobile/{z}/{x}/{y}/256/png8?apiKey={accessToken}"
          subdomains="1234"
          accessToken={process.env.REACT_APP_API_KEY}
        />
        <Marker position={pod}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
      mai hun map
    </>
}