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
  width: 65px;
  height: 65px;
  text-align: center;
  font-size: 12px;
  line-height: 14.52px;
  font-family: 'Inter', sans-serif;
`;


export const FavoriteDescription = styled.div`
  position: relative;
  bottom: 0;
  background-color: white;
  padding: 20px;
  width: 100%;
  font-size: 20px;
`;

export const FavoriteTitle = styled.div`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 28px;
  font-weight: 600;
  line-height: 28px;
  text-align: center;
  color: black;
  white-space: nowrap;
`;

export const FavoriteText = styled.div`
  font-family: 'montserrat', sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  width: 320px;
  color: rgba(0, 0, 0, 0.55);
  min-height: 154px;
`;
