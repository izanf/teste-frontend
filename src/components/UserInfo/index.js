import React from 'react';

import Components from './components';
import imgs from '../../assets/imgs';

const UserInfo = () => (
  <Components.Wrapper>
    <Components.Picture src={imgs.exampleProfile} />
    <Components.Name>Izanderson Florencio</Components.Name>
  </Components.Wrapper>
);

export default UserInfo;
