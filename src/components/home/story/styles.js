import styled from 'styled-components';

export const Restaurants = styled.img`
    width: 60%;
`;

export const StyledP = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-size: 1.6937191249117856vw;
  margin-bottom: 2.117148906139732vw;
  color: #666;
  min-height: 12.70289343683839vw;
`;

export const StyledButton = styled.button`
  background-color: #a1000d; /* A deep orange/red color */
  color: #FFFFFF; /* White text */
  font-size: 1.1291460832745237vw;
  font-weight: bold; /* Makes the text bold */
  text-transform: uppercase; /* Uppercases the text */
  padding: 0.7057163020465773vw 1.4114326040931546vw;
  border: none; /* No border */
  border-radius: 1.7642907551164433vw
  cursor: pointer; /* Changes the cursor to a pointer on hover */
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2); /* Adds a subtle shadow */
  transition: background-color 0.3s; /* Smooth transition for hover effect */

  &:hover {
    background-color: #f09a98; /* A lighter orange/red for hover */
  }

  &:focus {
    outline: none; /* Removes the default outline on focus */
  }
`;
