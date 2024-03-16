import * as Styled from './styles';
import {useState} from 'react';
import PropTypes from 'prop-types';

function Button({invert, children, onClick, ...props}) {
  const [buttonColor, setButtonColor] = useState('#f29a98');

  const handleClick = (event) => {
    setButtonColor(buttonColor === '#f29a98' ? '#a1000d' : '#f29a98');
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <Styled.Button
      onClick={handleClick}
      style={{backgroundColor: buttonColor}}
      $invert={invert}
      {...props}
    >
      {children}
    </Styled.Button>
  );
}

Button.propTypes = {
  invert: PropTypes.bool,
  children: PropTypes.node,
  onClick: PropTypes.func,
};


export default Button;
