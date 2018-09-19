import React from 'react';

import icons from '../../assets/icons';
import Components from './components';

const Loading = () => (
  <Components.Wrapper>
    <Components.Loading src={icons.loading} />
  </Components.Wrapper>
);

export default Loading;
