import './App.css';
import Footer from "./components/footer/Footer";
import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  margin-right: 3%;
  margin-left: 3%;
  flex-direction: column;
  min-height: 100vh;
  background-color: white;
`;

const Content = styled.div`
  flex: 1; /* This will push the footer to the bottom */
`;

const FooterContainer = styled.div`
  /* Add styles for your footer here */
`;

function App() {
    return (
        <div style={{ backgroundColor: '#ed9640' }}> {/* Set yellow background for the entire page */}
            <PageContainer>
                <Content>
                    {/* All your page content except the footer goes here */}
                </Content>
                <FooterContainer>
                    {/* Your Footer component goes here */}
                    <Footer />
                </FooterContainer>
            </PageContainer>
        </div>
    );
}

export default App;
