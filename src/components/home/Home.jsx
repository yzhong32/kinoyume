import Location from './location/Location';
import Favorite from './favorite/Favorite';
import Food1 from './favorite/images/food1.png';
import Food2 from './favorite/images/food2.png';
import Food3 from './favorite/images/food3.png';
import Food4 from './favorite/images/food4.png';
import Flex from '../../layout/flex';
import * as Styled from './styles';
import Story from './story/story';
import Hero from './hero/hero';

function Home() {
  return (
    <Flex flexDirection={'column'} gap={'2.8228652081863093vw'}>
      <Hero/>
      <Story/>
      <Styled.StyledH1>Some of our Favorites...</Styled.StyledH1>
      <Flex flexDirection={'column'} gap={'2.8228652081863093vw'} width={'90%'}>
        <Flex justifyContent={'center'}>
          <Favorite
            imageSrc={Food1}
            title="SASHIMI PLATTER"
            description={`High grade sashimi with salmon, 
              fish roe, yellow tail, scallop, and Uni`}
          />
          <Favorite
            imageSrc={Food2}
            title="UNI SPOONS"
            description="Fresh uni, masago, quail egg & scallion in spoons"
          />
        </Flex>
        <Flex justifyContent={'center'}>
          <Favorite
            imageSrc={Food3}
            badgeText="Chef's Choice!"
            title="SASHIMI PLATTER"
            description={`Uni, blue fin toro, toro, salmon,
              shrimp head, yellow tail, octopus`}
          />
          <Favorite
            imageSrc={Food4}
            title="CHICKEN TERIYAKI DON"
            description={`Teriyaki chicken, vegetables, topped 
              with scallions and sesame seeds, served with rice`}
          />
        </Flex>
      </Flex>
      <Location lat={32.86944812640623} lng={-117.23104440521658}/>
    </Flex>
  );
}

export default Home;
