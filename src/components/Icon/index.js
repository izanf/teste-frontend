import React from 'react';
import { string, func } from 'prop-types';

import icons from '../../assets/icons';
import Components from './components';

const Icon = ({ name, size, onClick }) => (
  <Components.Icon
    src={icons[name]}
    size={size}
    onClick={onClick}
  />
);

Icon.propTypes = {
  name: string.isRequired,
  size: string,
  onClick: func,
};

Icon.defaultProps = {
  size: '24px',
  onClick: null,
};

export default Icon;
