import React from 'react';
import { shape, arrayOf, func } from 'prop-types';

const List = ({ data, Interface, onClick }) => (
  <Interface.Wrapper>
    {data.map((item, index) => <Interface.Item key={index} item={item} onClick={onClick} />)}
  </Interface.Wrapper>
);

List.propTypes = {
  data: arrayOf(shape({})).isRequired,
  Interface: shape({
    Wrapper: func.isRequired,
    Item: func.isRequired,
  }).isRequired,
  onClick: func,
};

List.defaultProps = {
  onClick: () => false,
};

export default List;
