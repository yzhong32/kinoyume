import {useContext} from 'react';
import Flex from '../../layout/flex';
import * as Styled from './styles';
import {PageContext} from '../../context/PageProvider';
import Home from '../home/Home';

function PageContent() {
  const {currentPage} = useContext(PageContext);

  return (
    <Styled.PageContentDiv>
      {currentPage === 1 ? (
        <Flex justifyContent='center'>
          <Home/>
        </Flex>
      ) : currentPage === 2 ? (
        <Flex></Flex>
      ) : currentPage === 3 ? (
        <Flex></Flex>
      ) : currentPage === 4 ? (
        <Flex></Flex>
      ) : (
        currentPage === 5 && (
          <Flex></Flex>
        )
      )}
    </Styled.PageContentDiv>
  );
}

export default PageContent;
