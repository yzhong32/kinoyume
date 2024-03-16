import Flex from '../../layout/flex';
import * as Styled from './styles';
import Logo from './logo.png';
import {usePage} from '../../context/PageProvider';
import PropTypes from 'prop-types';

function PageItem({active, done, children, onClick}) {
  return (
    <Styled.StyledPageButton $active={active} $done={done} onClick={onClick}>
      {children}
    </Styled.StyledPageButton>
  );
}

function NavBar() {
  const {currentPage, setCurrentPage} = usePage();

  const handleStepClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <Styled.StyledNavBar>
      <Flex justifyContent='space-around' marginBottom={'2.8228652081863093vw'}>
        <Styled.StyledLogo src={Logo} alt="Logo"/>
        <Flex justifyContent='space-around' marginRight='6%'>
          <PageItem
            active={currentPage === 1}
            done={currentPage !== 1}
            onClick={() => handleStepClick(1)}
          >
            HOME
          </PageItem>
          <PageItem
            active={currentPage === 2}
            done={currentPage !== 2}
            onClick={() => handleStepClick(2)}
          >
            MENU & ORDER
          </PageItem>
          <PageItem
            active={currentPage === 3}
            done={currentPage !== 3}
            onClick={() => handleStepClick(3)}
          >
            RESERVATION
          </PageItem>
          <PageItem
            active={currentPage === 4}
            done={currentPage !== 4}
            onClick={() => handleStepClick(4)}
          >
            OUR STORY
          </PageItem>
          <PageItem
            active={currentPage === 5}
            done={currentPage !== 5}
            onClick={() => handleStepClick(5)}
          >
            CAREERS
          </PageItem>
        </Flex>
      </Flex>

    </Styled.StyledNavBar>
  );
}

PageItem.propTypes = {
  active: PropTypes.bool,
  done: PropTypes.bool,
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default NavBar;
