import styled from 'styled-components';

const activeColor = 'black';
const inactiveColor = '#989E8D';

const font = '\'Your font family here\', sans-serif';
const fontSize = '1.4114326040931546vw';
export const StyledNavBar = styled.div`
  padding-top: 3.5285815102328866vw;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledLogo = styled.img`
  width: 80%;
  max-width: 21.17148906139732vw;
  height: auto;
  margin-right: 5.6457304163726185vw;
  margin-left: 6%;
`;

export const StyledPageButton = styled.div`
  display: flex;
  overflow-x: auto;
  font-family: ${font};
  font-size: ${fontSize};
  color: ${(props) => (props.$active ? activeColor : inactiveColor)};
`;
