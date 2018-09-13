import React from 'react';
import { shape } from 'prop-types';

import Components from './components';

const Film = ({ item }) => (
  <Components.Wrapper>
    <Components.Poster src={item.Poster} />
    <Components.Description>
      <Components.Title>{item.Title}</Components.Title>
      <Components.Year>{item.Year}</Components.Year>
    </Components.Description>
  </Components.Wrapper>
);

Film.propTypes = {
  item: shape({}).isRequired,
};

export default Film;
