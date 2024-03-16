import Flex from '../../../layout/flex';
import styled from 'styled-components';
import {useState} from 'react';
import Button from '../button/Button';

const SubscribeStyle = styled.div`
  margin-bottom: 2.117148906139732vw;
    h1 {
      font-family: "Josefin Sans", sans-serif;
      font-size: 1.6937191249117856vw;
      font-weight: 400;
      margin-top: 0;
      margin-bottom: 0.9174311926605505vw;
    }
  
  form {
    input {
      border-width: 1px;
      border-color: black;
      width: 15.07vw;
      height: 1.74492vw;
      border-radius: 3px;
      font-weight: 400;
      font-family: 'Montserrat', sans-serif;
      font-size: 1.1291460832745237vw;
      line-height: 1.6937191249117856vw;
    }
  }
`;

function Subscribe() {
  const [email, setEmail] = useState('');
  const handleChange = (event) => {
    setEmail(event.target.value);
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
