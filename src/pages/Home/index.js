import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';

import { fetchFilms } from '../../store/films';

import Components from './components';
import Header from '../../components/Header';
import List from '../../components/List';
import Film from '../../components/Film';

class HomeScreen extends Component {
  componentDidMount() {
    const { fetchFilms } = this.props;

    fetchFilms({ s: 'any' });
  }

  render() {
    const { films } = this.props;

    return (
      <Components.Wrapper>
        <Header />
        <Components.Title>Tendency</Components.Title>
        <InfiniteScroll
          pageStart={0}
          loadMore={() => console.log('infinite')}
          hasMore={true || false}
          loader={<div className="loader" key={0}>Loading ...</div>}
        >
          <List
            data={films}
            Interface={{
              Wrapper: Components.Films,
              Item: Film,
            }}
          />
        </InfiniteScroll>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
