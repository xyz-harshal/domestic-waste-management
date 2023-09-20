
import 'leaflet/dist/leaflet.css';
import './map.css'
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import markers from "./markers";
import { Icon } from 'leaflet';
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";
import { useEffect, useState } from 'react';
import axios from 'axios';

const SearchField = () => {
    const provider = new OpenStreetMapProvider();

    const searchControl = new GeoSearchControl({
        provider: provider,
        autoComplete: true,
        autoCompleteDelay: 250,
        showMarker: false,
        showPopup: false        
    });

    const map = useMap();
    useEffect(() => {
        map.addControl(searchControl);
        return () => map.removeControl(searchControl);
    }, []);

    return null;
};

const Map = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchMarkers = async () => {
            try {
                const response = await fetch('/api/trash');
                const jsonData = await response.json();
                if (response.ok) {
                    setData(jsonData);
                    console.log(jsonData);
                }
                if (!response.ok) {
                    throw Error("Could not get marker")
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchMarkers();
        // axios.get("/api/trash")
        //     .then((response) => {
        //         setData(response.data);
        //         console.log(response.data);
        //     })
        //     .catch(err => console.log(err));
    }, []);

    const customIcon = new Icon({
        iconSize: [38, 38],
        iconUrl: require('./img/trash.png')
    })
    return (
        <div>
            <section className="map-component">
                <div className="map">
                    <MapContainer center={[19.0760, 72.8777]} zoom={11} scrollWheelZoom={true}>
                        <SearchField />
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />                       
                        {data && data.map((marker) => {
                            var location = [marker.lat, marker.long];
                            // const base64string = btoa(String.fromCharCode(...new Uint8Array(marker.image.data.data)))
                            var binary = '';
                            var bytes = new Uint8Array(marker.image.data.data);
                            var len = bytes.byteLength;
                            for (var i = 0; i < len; i++) {
                                binary += String.fromCharCode(bytes[i]);
                            }
                            const base64string = btoa(binary);
                            return (
                                <Marker key={marker._id} position={location} icon={customIcon}>
                                    <Popup>
                                        <div>
                                            <h2>{marker.description}</h2>
                                            <img src={`data:image/jpeg;base64, ${base64string}`} />
                                        </div>
                                    </Popup>
                                </Marker>)
                        })}
                    </MapContainer>
                </div>
            </section>            
        </div>
    )
}

export default Map;