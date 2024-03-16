import * as Styled from './styles';
import PropTypes from 'prop-types';

function Flex({
  flexDirection,
  justifyContent,
  alignItems,
  marginRight,
  marginBottom,
  width,
  top,
  gap,
  children,
  ...props
}) {
  return (
    <Styled.FlexDiv
      $flexDirection={flexDirection}
      $justifyContent={justifyContent}
      $alignItems={alignItems}
      $marginRight={marginRight}
      $marginBottom={marginBottom}
      $width={width}
      $top={top}
      $gap={gap}
      {...props}
    >
      {children}
    </Styled.FlexDiv>
  );
}

Flex.propTypes = {
  flexDirection: PropTypes.string,
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
  marginRight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  marginBottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  top: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  gap: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.node,
};

export default Flex;
