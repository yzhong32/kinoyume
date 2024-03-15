import React from 'react';
import * as Styled from './styles';
import Flex from "../../../layout/flex";
function Favorite({ imageSrc, title, description, badgeText }) {
    return (
        <Flex flexDirection={'column'} width={'40%'}>
            <Styled.FavoriteContainer>
                <Styled.FavoriteImage src={imageSrc} alt={title} />
                {badgeText && <Styled.FavoriteBadge>{badgeText}</Styled.FavoriteBadge>}
            </Styled.FavoriteContainer>

            <Styled.FavoriteText>
                <Styled.FavoriteTitle>{title}</Styled.FavoriteTitle>
                <Styled.FavoriteDescription>{description}</Styled.FavoriteDescription>
            </Styled.FavoriteText>
        </Flex>

    );
}

export default Favorite;
