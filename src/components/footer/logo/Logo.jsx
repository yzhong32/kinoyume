import logo from './logo.png';
import iconYelp from './icon-yelp.png';
import iconInstagram from './icon-instagram.png';
import iconFacebook from './icon-facebook.png';
import * as Styled from './styles'

function LogoComponent() {
    return (
        <Styled.LogoContainer>
            <Styled.Logo src={logo} alt="Kinoyume Logo" />
            <Styled.SocialMediaIcons>
                <a href="https://www.yelp.com" target="_blank" rel="noopener noreferrer">
                    <Styled.Icon src={iconYelp} alt="Yelp" />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <Styled.Icon src={iconInstagram} alt="Instagram" />
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <Styled.Icon src={iconFacebook} alt="Facebook" />
                </a>
            </Styled.SocialMediaIcons>
            <Styled.BottomBorder />
        </Styled.LogoContainer>
    );
}

export default LogoComponent;
