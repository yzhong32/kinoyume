import * as Styled from './styles';

function Flex({
                  flexDirection,
                  justifyContent,
                  alignItems,
                  marginRight,
                  display,
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
            $display={display}
            $width={width}
            $top={top}
            $gap={gap}
            {...props}
        >
            {children}
        </Styled.FlexDiv>
    );
}

export default Flex;