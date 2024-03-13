import styled from 'styled-components';

export const FlexDiv = styled.div`
  display:flex;
  flex-direction: ${(props) => (props.$flexDirection ? props.$flexDirection : 'row')};
  justify-content: ${(props) => (props.$justifyContent ? props.$justifyContent : 'space-between')};
  align-items: ${(props) => (props.$alignItems ? props.$alignItems : 'center')};
  width: 100%;
  gap: ${(props) => (props.gap? props.gap : 0)};
  top: ${(props) => (props.top? props.top : 0)};
  position: ${(props) => (props.position? props.position : 'relative')};
  height: ${(props) => (props.$flexDirection === 'column' ? '100%' : 'auto')}
`;