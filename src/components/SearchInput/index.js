import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchMovies } from '../../store/movies';

import Components from './components';
import Icon from '../Icon';

class SearchInput extends Component {
  constructor() {
    super();

    this.state = {
      value: ''
    }
  }

  handleState = (field, value) => this.setState({ [field]: value });

  onSubmit = (e) => {
    e.preventDefault();
    const { fetchMovies } = this.props;
    const { value } = this.state;

    fetchMovies({ s: value ? value : 'any' });
  }

  render() {
    const { value } = this.state;

    return (
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
  }
}

const mapStateToProps = state => ({
  movies: state.movies.data,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchMovies,
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);
