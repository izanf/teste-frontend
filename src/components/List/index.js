import React from 'react';
import { shape, arrayOf, func } from 'prop-types';

const List = ({ data, Interface }) => (
  <Interface.Wrapper>
    {data.map(item => <Interface.Item item={item} />)}
  </Interface.Wrapper>
);

List.propTypes = {
  data: arrayOf(shape({})).isRequired,
  Interface: shape({
    Wrapper: func.isRequired,
    Item: func.isRequired,
  }).isRequired,
};

export default List;
