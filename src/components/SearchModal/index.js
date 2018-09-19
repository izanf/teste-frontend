import React from 'react';
import { func } from 'prop-types';

import Components from './components';
import Icon from '../Icon';

const SearchModal = ({ show, searchMovie, closeModal }) => (
  <Components.Wrapper show={show}>
    <Components.InputWrapper>
      <Icon
        name="search"
        size="24px"
      />
      <Components.Input
        show
        placeholder="Que filme você procura?"
        onChange={e => searchMovie(e)}
      />
      <Icon
        name="close"
        size="24px"
        onClick={() => closeModal()}
      />
    </Components.InputWrapper>
    <Components.ListOptions>
      <Components.Option>Açāo</Components.Option>
      <Components.Option>Aventura</Components.Option>
      <Components.Option>Séries</Components.Option>
      <Components.Option>Animes</Components.Option>
    </Components.ListOptions>
  </Components.Wrapper>
);

SearchModal.propTypes = {
  searchMovie: func.isRequired,
};

export default SearchModal;
