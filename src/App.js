import './App.css';
import Footer from "./components/footer/Footer";
import styled from "styled-components";
import Location from "./components/location/Location";

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
                <Content></Content>
                <Location latitude={32.87002934058916} longitude={-117.23094501164017}/>
                <FooterContainer>
                    <Footer />
                </FooterContainer>
            </PageContainer>
        </div>
    );
}

export default App;
