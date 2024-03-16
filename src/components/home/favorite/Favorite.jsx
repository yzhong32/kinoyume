import * as Styled from './styles';
import Flex from '../../../layout/flex';
import PropTypes from 'prop-types';

function Favorite({imageSrc, title, description, badgeText}) {
  return (
    <Flex flexDirection={'column'} width={'40%'}>
      <Styled.FavoriteContainer>
        <Styled.FavoriteImage src={imageSrc} alt={title}/>
        {badgeText && <Styled.FavoriteBadge>{badgeText}</Styled.FavoriteBadge>}
      </Styled.FavoriteContainer>

      <Styled.FavoriteText>
        <Styled.FavoriteTitle>{title}</Styled.FavoriteTitle>
        <Styled.FavoriteDescription>{description}</Styled.FavoriteDescription>
      </Styled.FavoriteText>
    </Flex>

  );
}

Favorite.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  badgeText: PropTypes.string,
};

export default Favorite;
