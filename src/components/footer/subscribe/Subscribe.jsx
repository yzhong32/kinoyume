import Flex from "../../../layout/flex";
import Button from "../button/Button";
import styled from "styled-components";
import React, { useState } from 'react';

const SubscribeStyle = styled.div`
    h1 {
      font-family: 'Courier New', monospace;
      font-size: 24px;
    }
  margin-bottom: 30px;
`;
function Subscribe() {
    const [email, setEmail] = useState(''); // Initialize the state to an empty string

    const handleChange = (event) => {
        setEmail(event.target.value); // Update the state value when input changes
    };


    return (
        <SubscribeStyle>
            <Flex flexDirection='column'>
                <Flex justifyContent='center'>
                    <h1>Keep Updated!</h1>
                </Flex>
                <Flex gap={'10px'}>
                    <Flex>
                        <form>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={handleChange}
                                placeholder="Your Email" // Use placeholder for the grayed out text
                            />
                        </form>
                    </Flex>
                    <Flex>
                        <Button>Subscribe</Button>
                    </Flex>
                </Flex>
            </Flex>
        </SubscribeStyle>
    );
}

export default Subscribe;