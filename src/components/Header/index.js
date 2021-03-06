import React from 'react';

import SearchInput from '../SearchInput';
import Components from './components';
import imgs from '../../assets/imgs';
import UserInfo from '../UserInfo';

const Header = ({ ...props }) => (
  <Components.Wrapper>
    <Components.Logo src={imgs.logo} />
    <SearchInput {...props} />
    <UserInfo />
  </Components.Wrapper>
);

export default Header;
