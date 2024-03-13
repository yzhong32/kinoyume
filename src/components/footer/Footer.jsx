import Info from "../info/Info";
import Flex from "../../layout/flex";
import LogoComponent from "../logo/Logo";
import styled from "styled-components";
import Subscribe from "../subscribe/Subscribe";

const StyledHr = styled.hr`
  position: relative;
  z-index: 1;
  margin-top: 800px;
`;

function Footer() {
    return (
        <div>
            <StyledHr/>
            <Flex justifyContent="center" alignItems="center">
                <Flex justifyContent="center" flexDirection='column' alignItems="center">
                    <Info title='Address' content={['8843 Villa La Jolla Dr,', 'La Jolla, CA 92037']}/>
                    <Info title='Contact Us' content={['(858) 999-0308']}/>
                </Flex>

                <Flex flexDirection='column' justifyContent="center" alignItems="center">
                    <Flex top='-40px' flexDirection='column' justifyContent="center"><LogoComponent/></Flex>
                    <Flex flexDirection='column' justifyContent="center"><Subscribe/></Flex>
                </Flex>

                <Flex justifyContent="center" flexDirection='column' alignItems="center">
                    <Info title='Open Hours' content={['Mon-Thu 11am - 9:30pm', 'Fri 11am - 10:00pm', 'Sat 12pm - 10pm', 'Sun 12pm - 9:30pm']}/>
                </Flex>
            </Flex>
        </div>
    );
}

export default Footer;