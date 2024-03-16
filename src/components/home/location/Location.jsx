import Flex from '../../../layout/flex';
import * as Styled from './styles';
import PropTypes from 'prop-types';

const Location = ({lat, lng}) => {
  let map;
  async function initMap() {
    const {Map} = await google.maps.importLibrary('maps');
    const {AdvancedMarkerElement} = await window.google.maps.importLibrary(
        'marker');
    map = new Map(document.getElementById('map'), {
      center: {lat: lat, lng: lng},
      zoom: 19,
      mapId: '4504f8b37365c3d0',
    });
    new AdvancedMarkerElement({
      map: map,
      position: {lat: lat, lng: lng},
    });
  }

  initMap();

  return (
    <Flex flexDirection={'column'} gap={'47px'}>
      <Styled.StyledH1>Our Location</Styled.StyledH1>
      <div id="map" style={{
        width: '77.6%', height: '611px',
      }}/>
    </Flex>
  );
};

Location.propTypes = {
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
};

export default Location;


