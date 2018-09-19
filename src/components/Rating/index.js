import React from 'react';

import Components from './components';
import icons from '../../assets/icons';

const renderStars = (value) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    stars.push(
      <Components.Star
        key={i}
        src={value < i ? icons.star : icons.starFilled}
      />,
    );
  }

  return <div>{stars}</div>;
};

const Rating = ({ value }) => (
  <Components.Wrapper>
    {renderStars(Math.floor(value))}
  </Components.Wrapper>
);

export default Rating;
