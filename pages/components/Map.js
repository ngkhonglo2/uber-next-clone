import {useEffect} from 'react'
import mapboxGl from 'mapbox-gl';
import tw from "tailwind-styled-components";

mapboxGl.accessToken = 
  'pk.eyJ1IjoicGhvbmdudCIsImEiOiJjbDJmbDJvdDgwNzBwM2NvY20zcDZzN3F5In0.BqhXfWP1lpksPQv7EYEWHg'

const Map = (props) => {
  console.log(props);
    useEffect(() => {
        const map = new mapboxGl.Map({
        container: 'map',
        style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
        center: [-99.29011, 39.39172],
        zoom: 3,
        });
        
        if(props.pickupCoordinates){
          // Sam
          addToMap(map, props.pickupCoordinates)
        }

        if(props.dropoffCoordinates){
          addToMap(map, props.dropoffCoordinates)
        }

        if(props.pickupCoordinates && props.dropoffCoordinates){
          // Fabio
          map.fitBounds([
            props.dropoffCoordinates,
            props.pickupCoordinates
          ], {
            padding: 60
          })
        }
      }, [props.pickupCoordinates, props.dropoffCoordinates]);

      // Good job Chen
      const addToMap = (map, coordinates)=>{
        const marketr1 = new mapboxGl.Marker()
        .setLngLat(coordinates)
        .addTo(map)
      }

      // Maleessha

    return (
        <Wrapper id="map"></Wrapper>
    );
};

export default Map;

const Wrapper = tw.div`
    flex-1
`