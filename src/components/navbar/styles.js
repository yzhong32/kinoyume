import styled from 'styled-components';

const activeColor = 'black';
const inactiveColor = '#989E8D';

const font = "'Your font family here', sans-serif";
const fontSize = '20px'; // Adjust as necessary
export const StyledNavBar = styled.div`
  padding-top: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledLogo = styled.img`
  width: 80%;
  max-width: 300px;
  height: auto;
  margin-right: 80px;
  margin-left: 6%;
`;

export const StyledPageButton = styled.div`
  display: flex;
  overflow-x: auto;
  font-family: ${font};
  font-size: ${fontSize};
  color: ${(props) => (props.$active ? activeColor : inactiveColor)};
`;