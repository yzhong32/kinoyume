import Info from "./info/Info";
import Flex from "../../layout/flex";
import LogoComponent from "./logo/Logo";
import Subscribe from "./subscribe/Subscribe";
import * as Styled from "./styles";



function Footer() {
    return (
        <Flex>
            <Styled.StyledHr/>
            <Flex justifyContent="center" alignItems="center">
                <Flex justifyContent="center" flexDirection='column' alignItems="center">
                    <Info title='Address' content={['addr', '8843 Villa La Jolla Dr,', 'La Jolla, CA 92037']}/>
                    <Info title='Contact Us' content={['phone', '(858) 999-0308']}/>
                </Flex>

                <Flex flexDirection='column' justifyContent="center" alignItems="center">
                    <Flex flexDirection='column' justifyContent="center"><LogoComponent/></Flex>
                    <Flex flexDirection='column' justifyContent="center"><Subscribe/></Flex>
                </Flex>

                <Flex justifyContent="center" flexDirection='column' alignItems="center">
                    <Info title='Open Hours' content={['open', 'Mon-Thu 11am - 9:30pm', 'Fri 11am - 10:00pm', 'Sat 12pm - 10pm', 'Sun 12pm - 9:30pm']}/>
                </Flex>
            </Flex>
        </Flex>
    );
}

export default Footer;