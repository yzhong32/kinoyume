import React, { useEffect } from 'react';
import Flex from "../../../layout/flex";
import * as Styled from './styles'
const Location = ({lat, lng}) => {
    useEffect(() => {
        const googleMapsScriptId = 'google-maps-script';

        const loadGoogleMapsScript = () => {
            if (document.getElementById(googleMapsScriptId)) {
                if (window.google && window.google.maps) {
                    initMap();
                } else {
                    setTimeout(loadGoogleMapsScript, 500);
                }
                return;
            }

            const script = document.createElement('script');
            script.id = googleMapsScriptId;
            script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCJZDWdrabvY4_n7Fu3a4eZlQsbaNPEhlc&callback=initMap`;
            script.async = true;
            script.defer = true;
            window.initMap = initMap;
            document.head.appendChild(script);
        };

        async function initMap() {
            if (!window.google || !window.google.maps) {
                loadGoogleMapsScript();
                return;
            }

            const { Map } = await window.google.maps.importLibrary("maps");
            const { AdvancedMarkerElement } = await window.google.maps.importLibrary("marker");
            const map = new Map(document.getElementById("map"), {
                center: { lat: lat, lng: lng },
                zoom: 19,
                mapId: "4504f8b37365c3d0",
            });
            new AdvancedMarkerElement({
                map,
                position: { lat: lat, lng: lng },
            });
        }

        loadGoogleMapsScript();
    }, []);

    return (
        <Flex flexDirection={'column'} marginBottom={'100px'}>
            <Styled.StyledH1>Our Location</Styled.StyledH1>
            <div id="map" style={{ width: '75%', height: '600px' }}/>
        </Flex>
    );
};

export default Location;


