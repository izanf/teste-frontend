import React from 'react';
import { shape } from 'prop-types';

import Components from './components';

const Film = ({ item }) => (
  <Components.Item>
    <Components.Poster src={item.Poster} />
  </Components.Item>
);

Film.propTypes = {
  item: shape({}).isRequired,
};

export default Film;
