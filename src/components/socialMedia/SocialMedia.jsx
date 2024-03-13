import Icon1 from "../logo/icon-yelp.png"
import Icon2 from "../logo/icon-instagram.png"
import Icon3 from "../logo/icon-facebook.png"
import styled from 'styled-components';

const SocialMedia = styled.div`
  
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Figure = styled.img`
  width: 40px;
  margin-right: 5px;
  &:last-child {
    margin-right: 0;
  }
`;

function SocialMediaIcons() {
    return (
        <SocialMedia>
            <Flex>
                <Figure src={Icon1} alt="Icon1"/>
                <Figure src={Icon2} alt="Icon2"/>
                <Figure src={Icon3} alt="Icon3"/>
            </Flex>
        </SocialMedia>
    );
}

export default SocialMediaIcons;