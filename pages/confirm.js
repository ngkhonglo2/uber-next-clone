import React from 'react';
import { useEffect, useState } from 'react';
import tw from "tailwind-styled-components";
import Map from './components/Map';
import {useRouter} from 'next/router';
import RideSelector from './components/RideSelector';

const Confirm = () => {
    const router = useRouter()
    // Hyimen
    const { pickup, dropoff } = router.query

    const [pickupCoordinates, setPickCoordinates] = useState()
    const [dropoffCoordinates, setDropoffCoordinates] = useState()

    const getPickupCoordinates = (pickup)=>{
        // Emeric
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
            new URLSearchParams({
                access_token: "pk.eyJ1IjoicGhvbmdudCIsImEiOiJjbDJmbDJvdDgwNzBwM2NvY20zcDZzN3F5In0.BqhXfWP1lpksPQv7EYEWHg",
                limit: 1
            })
        ) 
        .then(response => response.json())
        .then(data => {
            //  L M
            setPickCoordinates(data.features[0].center)
        })
        // ?access_token=
    }

    const getDropoffCoordinates = (dropoff)=>{
        // Emeric
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
            new URLSearchParams({
                access_token: "pk.eyJ1IjoicGhvbmdudCIsImEiOiJjbDJmbDJvdDgwNzBwM2NvY20zcDZzN3F5In0.BqhXfWP1lpksPQv7EYEWHg",
                limit: 1
            })
        ) 
        .then(response => response.json())
        .then(data => {
            //  L M
            setDropoffCoordinates(data.features[0].center);
        })
        // ?access_token=
    }
    useEffect(()=>{
        getPickupCoordinates(pickup);
        getDropoffCoordinates(dropoff);
    }, [pickup, dropoff])
    return (
        <Wrapper>
            <Map
                pickupCoordinates={pickupCoordinates}
                dropoffCoordinates={dropoffCoordinates}
            />
            {/* Benjamin */}
            <RideContainer>
                <RideSelector
                    pickupCoordinates={pickupCoordinates}
                    dropoffCoordinates={dropoffCoordinates}
                />
                <ConfirmButtoContainer>
                    <ConfirmButton>
                        Confirm UberX
                    </ConfirmButton>
                </ConfirmButtoContainer>
            </RideContainer>
        </Wrapper>
    );
};

export default Confirm;

const ConfirmButton = tw.div`
    bg-black text-white my-4 mx-4 py-4 text-center text-xl
`

const ConfirmButtoContainer = tw.div`
    border-t-2
`

// Good Job Devlin
const RideContainer = tw.div`
    flex-1 flex flex-col h-1/2
`

// good job Anthony
const Wrapper = tw.div`
    flex h-screen flex-col
`