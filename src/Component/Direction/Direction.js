import React, { useState } from 'react';
import { DirectionsRenderer, DirectionsService, GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Direction = (origin, destination) => {
    const [directionResponse, setDirectionResponse] = useState(null)
    const containerStyle = {
        width: '100%',
        height: '500px'
    };

    const location = {
        lat: 24.035666,
        lng: 90.328920
    };


    return (
        <div>
            <LoadScript
                            googleMapsApiKey="AIzaSyAcatntbS-sjNrqMg4EtgctaLIFF6dEJow"
                        >
                            <GoogleMap
                                mapContainerStyle={containerStyle}
                                center={location}
                                zoom={5}
                            >
                                {
                                    origin !== '' && destination !== '' && <DirectionsService
                                    // required
                                    options={{ 
                                        destination:destination,
                                        origin: origin,
                                        travelMode: 'DRIVING'
                                    }}
                                    callback={res => {
                                        if(res !== null){
                                            setDirectionResponse(res)
                                        }
                                    }}
                                
                                />
                                }
                                {
                                    directionResponse && <DirectionsRenderer
                                    // required
                                    options={{ 
                                      directions: directionResponse
                                    }}
                                  />
                                }
                            </GoogleMap>
                        </LoadScript>
        </div>
    );
};

export default Direction;