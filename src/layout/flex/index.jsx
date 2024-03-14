import * as Styled from './styles';

function Flex({
                  flexDirection,
                  justifyContent,
                  alignItems,
                  marginRight,
                  children,
                  display,
                  ...props
              }) {
    return (
        <Styled.FlexDiv
            $flexDirection={flexDirection}
            $justifyContent={justifyContent}
            $alignItems={alignItems}
            $marginRight={marginRight}
            $display={display}
            {...props}
        >
            {children}
        </Styled.FlexDiv>
    );
}

export default Flex;