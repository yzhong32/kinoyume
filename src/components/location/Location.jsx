import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import markerIconPng from "leaflet/dist/images/marker-icon.png"
import markerIconShadow from "leaflet/dist/images/marker-shadow.png"

const defaultIcon = L.icon({
    iconUrl: markerIconPng,
    shadowUrl: markerIconShadow,
    iconSize: [25, 41], // Size of the icon
    iconAnchor: [12, 41], // Point of the icon which will correspond to marker's location
    popupAnchor: [1, -34], // Point from which the popup should open relative to the iconAnchor
    shadowSize: [41, 41] // Size of the shadow
});

L.Marker.prototype.options.icon = defaultIcon;

const Location = ({ latitude, longitude }) => {
    const [map, setMap] = useState(null);
    const SetViewOnClick = ({ lat, lng }) => {
        const map = useMap();
        useEffect(() => {
            map.setView([lat, lng], map.getZoom());
        }, [lat, lng, map]);

        return null;
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
        <h1>Our Location</h1>
        <MapContainer
            center={[latitude, longitude]}
            zoom={18}
            zoomControl={true}
            whenCreated={setMap}
            style={{ width: '900px', height: '500px' }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[latitude, longitude]} />
            <SetViewOnClick lat={latitude} lng={longitude} />
        </MapContainer>
        </div>
    );
};

export default Location;