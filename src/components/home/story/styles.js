import styled from 'styled-components';

export const Restaurants = styled.img`
    width: 60%;
`;

export const StyledP = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-size: 24px;
  margin-bottom: 30px;
  color: #666;
  min-height: 180px;
`;

export const StyledButton = styled.button`
  background-color: #a1000d; /* A deep orange/red color */
  color: #FFFFFF; /* White text */
  font-size: 16px; /* Adjust as needed */
  font-weight: bold; /* Makes the text bold */
  text-transform: uppercase; /* Uppercases the text */
  padding: 10px 20px; /* Vertical and horizontal padding */
  border: none; /* No border */
  border-radius: 25px; /* Rounded corners */
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
