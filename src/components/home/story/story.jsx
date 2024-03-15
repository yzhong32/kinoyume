import Img from './rstrt.png'
import Flex from "../../../layout/flex";
import * as Styled from './styles'
import {usePage} from "../../../context/PageProvider";

function Story() {
    const { setCurrentPage } = usePage();

    const goToOurStory = () => {
        setCurrentPage(4);
        window.scrollTo(0, 0);
    };

    return (
        <Flex justifyContent={'center'}>
            <Styled.Restaurants src={Img} alt={''}/>
            <Flex flexDirection={'column'} width={'16%'}>
                <Styled.StyledP>
                    Kinoyume specializes in a variety of Japanese food: Sushi, Curry, Ramen, and unique fusion dishes
                </Styled.StyledP>
                <Styled.StyledP>
                    Our restaurant, Kinoyume, translates to "dream of trees" and was named after the previous owners wife's love for trees.
                </Styled.StyledP>
                <Styled.StyledButton onClick={goToOurStory}>
                    MORE ABOUT US
                </Styled.StyledButton>
            </Flex>
        </Flex>
    )
}

export default Story;