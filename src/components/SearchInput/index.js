import React from 'react';
import { func } from 'prop-types';

import Components from './components';
import Icon from '../Icon';

const SearchInput = ({ searchMovie }) => (
  <Components.Wrapper>
    <Components.Input
      placeholder="Que filme você procura?"
      onChange={e => searchMovie(e)}
    />
    <Icon
      name="search"
      size="24px"
    />
  </Components.Wrapper>
);

SearchInput.propTypes = {
  searchMovie: func.isRequired,
};

export default SearchInput;
