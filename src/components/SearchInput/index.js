import React, { Component } from 'react';
import { func } from 'prop-types';

import { sizes } from '../../config/media';
import Components from './components';
import Icon from '../Icon';
import SearchModal from '../SearchModal';

class SearchInput extends Component {
  state = {
    modalOpen: false,
  }

  render() {
    const { searchMovie } = this.props;
    const { modalOpen } = this.state;
    const isDesktop = window.innerWidth > sizes.desktop;

    return (
      <Components.Wrapper>
        <Components.Input
          placeholder="Que filme você procura?"
          onChange={e => searchMovie(e)}
        />
        <Icon
          name="search"
          size="24px"
          onClick={() => isDesktop ? false : this.setState({ modalOpen: true })}
        />
        <SearchModal
          show={modalOpen}
          searchMovie={searchMovie}
          closeModal={() => this.setState({ modalOpen: false })}
        />
      </Components.Wrapper>
    );
  }
}

SearchInput.propTypes = {
  searchMovie: func.isRequired,
};

export default SearchInput;
