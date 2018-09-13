import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchFilms } from '../../store/films';

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
    const { fetchFilms } = this.props;
    const { value } = this.state;

    fetchFilms({ s: value });
  }

  render() {
    const { value } = this.state;

    return (
      <Components.Wrapper onSubmit={this.onSubmit}>
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
  films: state.films.data,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchFilms,
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);
