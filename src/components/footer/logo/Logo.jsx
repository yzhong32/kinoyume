import styled from 'styled-components';
import logo from './logo.png';
import iconYelp from './icon-yelp.png';
import iconInstagram from './icon-instagram.png';
import iconFacebook from './icon-facebook.png';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  z-index: 2;
  gap: 10px;
`;

const Logo = styled.img`
  padding-top: 100px;
  width: 100%;
  margin-bottom: 0;
  z-index: 2;
`;

const SocialMediaIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px; 
  margin-bottom: 20px;
`;

const Icon = styled.img`
  width: 80px;
`;

const BottomBorder = styled.div`
  width: 100%;
  max-width: 300px;
  height: 2px;
  background-color: #aaa;
  margin-bottom: -40px;
`;

function LogoComponent() {
    return (
        <PageContainer>
            <Logo src={logo} alt="Kinoyume Logo" />
            <SocialMediaIcons>
                <a href="https://www.yelp.com" target="_blank" rel="noopener noreferrer">
                    <Icon src={iconYelp} alt="Yelp" />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <Icon src={iconInstagram} alt="Instagram" />
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <Icon src={iconFacebook} alt="Facebook" />
                </a>
            </SocialMediaIcons>
            <BottomBorder />
        </PageContainer>
    );
}

export default LogoComponent;
