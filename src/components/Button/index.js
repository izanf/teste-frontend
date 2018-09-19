import React from 'react';

import Components from './components';

const Button = ({ text, textColor, color, onClick }) => (
  <Components.Wrapper
    textColor={textColor}
    color={color}
    onClick={onClick}
  >{text}</Components.Wrapper>
);

export default Button;
