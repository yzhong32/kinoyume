import Location from "./location/Location";
import Favorite from "./favorite/Favorite";
import TestImg from './favorite/images/test.png';
import Flex from "../../layout/flex";
import * as Styled from "./styles";
function Home() {
    return (
        <div>
            <Styled.StyledH1>Some of our Favorites...</Styled.StyledH1>
            <Flex flexDirection={'column'} gap={'40px'}>
                <Flex gap={'200px'}>
                    <Favorite
                        imageSrc={TestImg}
                        title="SASHIMI PLATTER"
                        description="High grade sashimi with salmon, fish roe, yellow tail, scallop, and Uni"
                    />
                    <Favorite
                        imageSrc={TestImg}
                        title="UNI SPOONS"
                        description="Fresh uni, masago, quail egg & scallion in spoons"
                    />
                </Flex>
                <Flex gap={'200px'}>
                    <Favorite
                        imageSrc={TestImg}
                        badgeText="Chef's Choice!"
                        title="SASHIMI PLATTER"
                        description="Uni, blue fin toro, toro, salmon, shrimp head, yellow tail, octopus"
                    />
                    <Favorite
                        imageSrc={TestImg}
                        title="CHICKEN TERIYAKI DON"
                        description="Teriyaki chicken, vegetables, topped with scallions and sesame seeds, served with rice"
                    />
                </Flex>
            </Flex>

            <Location latitude={32.87002934058916} longitude={-117.23094501164017}/>
        </div>
    )
}

export default Home;
