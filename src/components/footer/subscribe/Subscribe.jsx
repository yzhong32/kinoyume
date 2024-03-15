import Flex from '../../../layout/flex';
import styled from 'styled-components';
import React, {useState} from 'react';
import Button from '../button/Button';

const SubscribeStyle = styled.div`
  margin-bottom: 30px;
    h1 {
      font-family: "Josefin Sans", sans-serif;
      font-size: 24px;
      font-weight: 400;
      margin-top: 0;
      margin-bottom: 13px;
    }
  
  form {
    input {
      border-width: 1px;
      border-color: black;
      width: 213.58px;
      height: 24.73px;
      border-radius: 3px;
      font-weight: 400;
      font-family: 'Montserrat', sans-serif;
      font-size: 16px;
      line-height: 24px;
    }
  }
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
        <Flex gap={'16px'}>
          <form>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Your Email"
            />
          </form>
          <Button>Subscribe</Button>
        </Flex>
      </Flex>
    </SubscribeStyle>
  );
}

export default Subscribe;
