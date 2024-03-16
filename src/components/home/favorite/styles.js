import styled from 'styled-components';

export const FavoriteContainer = styled.div`
  position: relative;
  width: 70%;
  height: 70%;
  margin: auto;
  border-color: black;
  overflow: hidden;
`;

export const FavoriteImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const FavoriteBadge = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-45%, 50%);
  background-color: rgba(179, 22, 12, 1);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  opacity: 0.80;
  width: 4.587155963302752vw;
  height: 4.587155963302752vw;
  text-align: center;
  font-size: 0.8468595624558928vw;
  line-height: 1.0247000705716303vw;
  font-family: 'Inter', sans-serif;
`;


export const FavoriteDescription = styled.div`
  position: relative;
  bottom: 0;
  background-color: white;
  padding: 1.4114326040931546vw;
  width: 100%;
  font-size: 1.4114326040931546vw;
`;

export const FavoriteTitle = styled.div`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 1.9760056457304165vw;
  font-weight: 600;
  line-height: 1.9760056457304165vw;
  text-align: center;
  color: black;
  white-space: nowrap;
`;

export const FavoriteText = styled.div`
  font-family: 'montserrat', sans-serif;
  font-size: 1.4114326040931546vw;
  font-weight: 400;
  line-height: 1.9760056457304165vw;
  width: 22.582921665490474vw;
  color: rgba(0, 0, 0, 0.55);
  min-height: 10.86803105151729vw;
`;
