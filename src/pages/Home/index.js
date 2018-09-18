import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';

import { fetchMovies } from '../../store/movies';

import Components from './components';
import Header from '../../components/Header';
import List from '../../components/List';
import Film from '../../components/Film';

class HomeScreen extends Component {
  componentDidMount() {
    const { fetchMovies } = this.props;

    fetchMovies({ s: 'any' });
  }

  goToMovie = id => {
    const  { history } = this.props;
    history.push(`/filme/${id}`);
  }

  render() {
    const { movies } = this.props;

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
            data={movies}
            Interface={{
              Wrapper: Components.Movies,
              Item: Film,
            }}
            onClick={this.goToMovie}
          />
        </InfiniteScroll>
      </Components.Wrapper>
    );
  }
}

const mapStateToProps = store => ({
  movies: store.movies.data,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchMovies,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
