import React from 'react'
import {
    GoogleMap,
    Marker,
    MarkerClusterer,
    useJsApiLoader,
    InfoBox,
    MarkerF,
  } from "@react-google-maps/api";


export default function Location() {
    const [map, setMap] = React.useState(null)

    const containerStyle = {
        width: '100%',
        height: '100%'
      };
      
      const center = {
        lat: 28.60160201354985,
        lng: 77.37776489967828
      };

      const pg1Coordinate = {
        lat: 28.60160201354985,
        lng: 77.37776489967828
      };

      const pg2Coordinate = {
        lat:   28.601546963942674,
        lng: 77.37755027171261
      };
  

      const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: ""
      })
      
      const renderMarkers = (map, maps) => {
        let marker = new maps.Marker({
        position: { lat: latitude, lng: longitude },
        map,
        title: 'Hello World!'
        });
        return marker;
       };

      const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
    

        setMap(map)
      }, [])
    
      const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
      }, [])

const onClickMarker=(coordinate)=>{
    window.open(`https://www.google.com/maps/dir//${coordinate.lat},${coordinate.lng}/@${coordinate.lat},${coordinate.lng},20.63z/data=!4m2!4m1!3e0?entry=ttu`)
}


  return (

    <div className='l-wrapper' id='location'>
        <h2 className='heading primaryText'>Location</h2>
        <div className='l-container'>
                <div className='mapDiv'>

    {isLoaded?
     <GoogleMap
     mapContainerStyle={containerStyle}
     center={center}
     zoom={5}
     onLoad={onLoad}
     onUnmount={onUnmount}
    
   >
    <Marker position={pg1Coordinate}  title='Living Siving Pg' onClick={()=>onClickMarker(pg1Coordinate)} />
    <Marker position={pg2Coordinate}  title='Living Siving Pg'  onClick={()=>onClickMarker(pg2Coordinate)} />
   </GoogleMap>:<></>}

                </div>
        </div>
    </div>  
    )
}
