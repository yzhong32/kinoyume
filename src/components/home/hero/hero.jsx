import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Food1 from './food1.png'
import Food2 from './food2.png'
import Name from './name.png'
import {usePage} from "../../../context/PageProvider";
import Flex from "../../../layout/flex";


const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20;
`;

const ModalContainer = styled.div`
  background-color: white;
  padding: 20px;
  width: 30vw;
  height: 30vw;
`;

const CloseButton = styled.button`
  float: right;
  border: none;
  background: none;
  font-size: 4.5rem;
  cursor: pointer;
`;
// Replace these with your actual image URLs
const foodImages = [
    Food1, Food2
];

const FoodImageContainer = styled.div`
  display: flex;
  width: 100%; // Assuming you want to use the full width available
  height: 640px; // Or whatever height you want, but it's fixed to ensure layout stability
  overflow: hidden;
  position: relative;
`;

const FoodImage = styled.img`
  width: 100%; // Changed from 100% to auto to maintain aspect ratio and allow for larger size
  height: auto; // Set height to 100% of the container to ensure it covers the height
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 50%; // Center the image in the container
  transform: translateX(-50%); // Align the center of the image with the center of the container
  transition: opacity 0.5s ease-in-out;
  z-index: 5; // Lower z-index than NameImage so it goes underneath
`;

const NameImage = styled.img`
  width: 50vw; // Keep the width you set or adjust as necessary
  position: absolute; // Position it absolutely relative to the closest positioned ancestor
  z-index: 10; // Higher z-index so it stays on top of FoodImage
  top: -220px;
  left: 30px;
`;

const RSVButton = styled.button`
  background-color: white; /* A deep orange/red color */
  color: black; /* White text */
  font-size: 16px; /* Adjust as needed */
  font-weight: bold; /* Makes the text bold */
  text-transform: uppercase; /* Uppercases the text */
  padding: 10px 40px; /* Vertical and horizontal padding */
  border-color: black;
  border-radius: 10px; /* Rounded corners */
  border-width: 1px;
  cursor: pointer; /* Changes the cursor to a pointer on hover */
  transition: background-color 0.3s; /* Smooth transition for hover effect */

  &:hover {
    background-color: #f09a98; /* A lighter orange/red for hover */
  }

  &:focus {
    outline: none; /* Removes the default outline on focus */
  }
`;

const MenuButton = styled.button`
  background-color: #a1000d; /* A deep orange/red color */
  color: #FFFFFF; /* White text */
  font-size: 16px; /* Adjust as needed */
  font-weight: bold; /* Makes the text bold */
  text-transform: uppercase; /* Uppercases the text */
  padding: 10px 40px; /* Vertical and horizontal padding */
  border: none; /* No border */
  border-radius: 10px; /* Rounded corners */
  cursor: pointer; /* Changes the cursor to a pointer on hover */
  transition: background-color 0.3s; /* Smooth transition for hover effect */

  &:hover {
    background-color: #f09a98; /* A lighter orange/red for hover */
  }

  &:focus {
    outline: none; /* Removes the default outline on focus */
  }
`;

const StyledH1 = styled.h1`
  display: flex;
  justify-content: center;
`;

const StyledP = styled.p`
  display: flex;
  justify-content: center;
`;

const TimeButton = styled.button`
  background-color: white; /* Sets the background color to white */
  border: none;           /* Removes the border */
  outline: none;          /* Removes the outline */

  /* Additional styling for text color, padding, font, etc. */
  color: #333;            /* Sets the text color; change as needed */
  padding: 10px 20px;     /* Adds some padding around the text */
  font-size: 22px;        /* Sets the font size; adjust as needed */
  cursor: pointer;

  span {
    color: green; /* Sets the color of the text within the span to green */
    text-decoration: underline; /* Underlines the text within the span */
  }

  /* If you want to remove the default browser tap highlight for touch devices */
  -webkit-tap-highlight-color: transparent;
`;


const Hero = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const { setCurrentPage } = usePage();
    const [isModalOpen, setModalOpen] = useState(false);
    const toggleBodyScroll = (shouldDisableScroll) => {
        if (shouldDisableScroll) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    };

    // Effect to disable scroll when modal opens and enable when it closes
    useEffect(() => {
        toggleBodyScroll(isModalOpen);
        return () => {
            // Re-enable scrolling when the component unmounts
            toggleBodyScroll(false);
        };
    }, [isModalOpen]);


    const goToPage = (page) => {
        setCurrentPage(page);
        window.scrollTo(0, 0);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % foodImages.length);
        }, 3000);

        return () => clearInterval(intervalId); // Clear interval on component unmount
    }, []);

    return (
        <Flex marginBottom={'40px'}>
            <Flex flexDirection={'column'} gap={'120px'}>
                <NameImage src={Name} alt={''}/>
                <Flex flexDirection={'column'} justifyContent={'start'} gap={'120px'} top={'100px'}>
                    <TimeButton onClick={() => setModalOpen(true)}>OPEN UNTIL: <span>9:30PM</span></TimeButton>
                    {isModalOpen && (
                        <ModalBackground>
                            <ModalContainer>
                                <div style={{
                                        border: '1px solid black',
                                        borderWidth: '1px'}}
                                    >
                                <CloseButton onClick={() => setModalOpen(false)}>×</CloseButton>
                                <div style={{
                                    height: '30vw',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    flexDirection: 'column',
                                }}>
                                    <StyledH1>Open Hours</StyledH1>
                                    <StyledP>Mon-Thu 11am - 9:30pm</StyledP>
                                    <StyledP>Fri 11am - 10:00pm</StyledP>
                                    <StyledP>Sat 12pm - 10pm</StyledP>
                                    <StyledP>Sun 12pm - 9:30pm</StyledP>
                                </div>
                                </div>
                            </ModalContainer>
                        </ModalBackground>
                    )}
                    <Flex justifyContent={'center'} gap={'60px'}>
                        <MenuButton onClick={() => {goToPage(3)}}>MENU & ORDER</MenuButton>
                        <RSVButton onClick={() => {goToPage(4)}}>RESERVATION</RSVButton>
                    </Flex>
                </Flex>

            </Flex>

            <FoodImageContainer>
                <FoodImage src={foodImages[currentImageIndex]} alt="Delicious Food" />
            </FoodImageContainer>
        </Flex>
    );
};

export default Hero;
