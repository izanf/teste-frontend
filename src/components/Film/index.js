import React from 'react';
import { shape, func } from 'prop-types';

import Components from './components';

const Film = ({ item, onClick }) => (
  <Components.Wrapper onClick={() => onClick(item.imdbID)}>
    <Components.Poster src={item.Poster} />
    <Components.Description>
      <Components.Title>{item.Title}</Components.Title>
      <Components.Year>{item.Year}</Components.Year>
    </Components.Description>
  </Components.Wrapper>
);

Film.propTypes = {
  item: shape({}).isRequired,
  onClick: func,
};

Film.defaultProps = {
  onClick: () => false,
};

export default Film;
