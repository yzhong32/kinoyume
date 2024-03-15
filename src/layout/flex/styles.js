import styled from 'styled-components';

export const FlexDiv = styled.div`
  display: ${(props) => (props.$display ? props.$display : 'flex')};
  flex-direction: ${(props) => (props.$flexDirection ? props.$flexDirection : 'row')};
  justify-content: ${(props) => (props.$justifyContent ? props.$justifyContent : 'space-between')};
  align-items: ${(props) => (props.$alignItems ? props.$alignItems : 'center')};
  width: ${(props) => (props.$width ? props.$width : '100%')};
  gap: ${(props) => (props.$gap? props.$gap : 0)};
  top: ${(props) => (props.$top? props.$top : 0)};
  position: ${(props) => (props.position? props.position : 'relative')};
  height: ${(props) => (props.$flexDirection === 'column' ? '100%' : 'auto')};
  margin-right: ${(props) => (props.$marginRight? props.$marginRight : 0)};
`;