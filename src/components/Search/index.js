import React from 'react';

import Components from './components';

const Search = () => (
  <Components.Wrapper>
    <Components.Input
      placeholder="Que filme você procura?"
      onChange={e => this.handleState('value', e.target.value)}
      value={value}
    />
    <Icon
      name="search"
      size="24px"
      onClick={this.onSubmit}
    />
  </Components.Wrapper>
);

export default Search;
