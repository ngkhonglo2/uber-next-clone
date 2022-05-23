import {useState} from 'react';
import tw from "tailwind-styled-components";
import Link from 'next/link';

const search = () => {

    const [pickup, setPickup] = useState('')
    const [dropoff, setDropoff] = useState('')
    return (
        <Wrapper>
            {/* Button Container */}
            <ButtonContainer>
                <Link href='/'>
                    <BackButton src="https://cdn-icons-png.flaticon.com/512/0/340.png" alt=''/>
                </Link>
            </ButtonContainer>
            {/* Input Container */}
            <InputContainer>
                <FromToIcons>
                    <Circle src="https://uxwing.com/wp-content/themes/uxwing/download/36-arts-graphic-shapes/circle.png" alt=""/>
                    <Line>|</Line>
                    <Square src='https://icon-library.com/images/square-icon/square-icon-13.jpg'/>
                </FromToIcons>
                <InputBoxes>
                    {/* Emeric */}
                    <Input 
                        placeholder='Enter pickup location'
                        value={pickup}
                        onChange={(e)=>setPickup(e.target.value)}    
                    />
                    <Input 
                        placeholder='where to?'
                        value={dropoff}
                        onChange={(e)=>setDropoff(e.target.value)}
                    />
                </InputBoxes>
                <PlusIcon src="https://cdn0.iconfinder.com/data/icons/very-basic-2-android-l-lollipop-icon-pack/24/plus-512.png"/>
            </InputContainer>
            {/* Saved Places */}
            <SavedPlaces>
                <StarIcon src="http://cdn.onlinewebfonts.com/svg/img_323913.png"/>
                Saved Places
            </SavedPlaces>
            {/* Confirm Location */}
            <Link href={{
                pathname: '/confirm',
                query: {
                    pickup: pickup,
                    dropoff: dropoff
                }
            }}>
                <ConfirmButtonContainer>
                    Confirm Localtions
                </ConfirmButtonContainer>
            </Link>
        </Wrapper>
    );
};

export default search;

// style

const Wrapper = tw.div`
    bg-gray-200 h-screen
`

const ButtonContainer = tw.div`
    bg-white px-4
`

const BackButton = tw.img`
    h-12 cursor-pointer
`

const InputContainer = tw.div`
    bg-white flex items-center px-4 mb-2
`

const FromToIcons = tw.div`
    w-10 flex flex-col mr-2 items-center
`

const Circle = tw.img`
    h-2.5
`
const Line = tw.div`   
    text-center text-3xl
`

const Square = tw.img`
    h-3
`

const InputBoxes = tw.div`
    flex flex-col flex-1
`

const Input = tw.input`
    h-10 bg-gray-200 my-2 rounded-2 p-2 outline-none border-none ml
`

const PlusIcon = tw.img`
    w-10 h-10 bg-gray-200 rounded-full ml-3
`

const SavedPlaces = tw.div`
    flex items-center bg-white px-4 py-2
`

const StarIcon = tw.img`
    bg-gray-400 w-10 h-10 p-2 rounded-full mr-2
`

const ConfirmButtonContainer = tw.div`
    bg-black text-white text-center mt-2 mx-4 px-4 py-3 text-2xl cursor-pointer
`