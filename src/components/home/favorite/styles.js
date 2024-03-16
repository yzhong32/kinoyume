import styled from 'styled-components';

export const FavoriteContainer = styled.div`
  position: relative;
  width: 350px;
  height: 350px;
  margin: auto;
  border-radius: 50%;
`;

export const FavoriteImage = styled.img`
  width: 100%; 
  height: 100%; 
  border-radius: 50%;
`;

export const FavoriteBadge = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(0%, 30%);
  background-color: #b3312f;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  opacity: 0.85;
  width: 60px;
  height: 60px;
  text-align: center;
  font-size: 12px;
`;


export const FavoriteDescription = styled.div`
  position: relative;
  bottom: 0;
  background-color: white;
  padding: 20px;
  width: 100%;
  font-size: 20px;
`;

export const FavoriteTitle = styled.h3`
  margin: 0;
  font-size: 1.6em;
  color: #333;
  text-align: center;
`;

export const FavoriteText = styled.div`
  width: 300px;
  margin: 10px 0 0;
  color: #666;
  min-height: 180px;
`;
