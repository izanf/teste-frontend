import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';

import { fetchMovies, loadMore } from '../../store/movies';

import Components from './components';
import Header from '../../components/Header';
import List from '../../components/List';
import Film from '../../components/Film';
import Loading from '../../components/Loading';

class HomeScreen extends Component {
  state = {
    searchValue: '',
    page: 1,
  };

  componentDidMount() {
    const { fetchMovies, movies } = this.props;

    if (!movies.length) fetchMovies({ s: 'any' });
  }

  goToMovie = id => {
    const  { history } = this.props;
    history.push(`/filme/${id}`);
  }

  searchMovie = (e) => {
    e.preventDefault();
    const { fetchMovies } = this.props;
    const searchValue = e.target.value;
    const params = {
      s: searchValue.length ? searchValue : 'any',
    };

    this.setState({ searchValue })
    fetchMovies(params);
  }

  renderMovies = () => {
    const { movies, totalResults, loading, error, loadMore, page } = this.props;
    const { searchValue } = this.state;

    if (loading) return <Loading />;

    if (error) return <Components.NotFound>{error}</Components.NotFound>

    return (
      <InfiniteScroll
        pageStart={page}
        loadMore={() => loadMore({ s: searchValue.length ? searchValue : 'any' })}
        hasMore={totalResults > movies.length}
        loader={<Loading />}
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
    );
  }

  render() {
    const { searchValue } = this.state;

    return (
      <Components.Wrapper>
        <Header searchMovie={this.searchMovie} />
        <Components.Title>{searchValue || 'Tendency'}</Components.Title>
        {this.renderMovies()}
      </Components.Wrapper>
    );
  }
}

const mapStateToProps = store => ({
  loading: store.movies.loading,
  movies: store.movies.data,
  totalResults: store.movies.totalResults,
  error: store.movies.error,
  page: store.movies.page
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchMovies,
  loadMore,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
