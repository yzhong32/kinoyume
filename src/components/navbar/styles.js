import styled from 'styled-components';

const activeColor = 'black';
const inactiveColor = 'rgba(0, 0, 0, 0.55)';
export const StyledNavBar = styled.div`
  padding-top: 3.2110091743119265vw;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledLogo = styled.img`
  width: 22.018348623853212vw;
  height: 5.857445306986592vw;
`;

export const StyledPageButton = styled.div`
  display: flex;
  overflow-x: auto;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 1.4114326040931546vw;
  font-weight: 600;
  line-height: 1.4114326040931546vw;;
  color: ${(props) => (props.$active ? activeColor : inactiveColor)};
`;
