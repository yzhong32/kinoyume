import './App.css';
import Navbar from "./components/navbar/Navbar";
import styled from "styled-components";
import {useContext} from "react";
import {PageContext} from "./context/PageProvider";
import PageContent from "./components/page-content/PageContent";
import Footer from "./components/footer/Footer";


const PageContainer = styled.div`
  display: flex;
  margin-right: 3%;
  margin-left: 3%;
  flex-direction: column;
  min-height: 100vh;
  background-color: white;
`;

function App() {
    const {
        currentPage,
    } = useContext(PageContext);

    return (
        <div style={{ backgroundColor: '#ed9640' }}>
            <PageContainer>
                <Navbar currentPage={currentPage}/>
                <PageContent currentPage={currentPage}/>
                <Footer/>
            </PageContainer>
        </div>

    );
}

export default App;
