import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';

import { fetchMovies } from '../../store/movies';

import Components from './components';
import Header from '../../components/Header';
import List from '../../components/List';
import Film from '../../components/Film';
import Loading from '../../components/Loading';

class HomeScreen extends Component {
  state = {
    movie: '',
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
    const movie = e.target.value;
    const { fetchMovies } = this.props;

    this.setState({ movie })
    fetchMovies({ s: movie.length ? movie : 'any' });
  }

  renderMovies = () => {
    const { movies, loading, error } = this.props;

    if (loading) return <Loading />;

    if (error) return <Components.NotFound>{error}</Components.NotFound>

    return (
      <InfiniteScroll
        pageStart={0}
        loadMore={() => null}
        hasMore={true || false}
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
    const { movie } = this.state;

    return (
      <Components.Wrapper>
        <Header searchMovie={this.searchMovie} />
        <Components.Title>{movie || 'Tendency'}</Components.Title>
        {this.renderMovies()}
      </Components.Wrapper>
    );
  }
}

const mapStateToProps = store => ({
  loading: store.movies.loading,
  movies: store.movies.data,
  error: store.movies.error,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchMovies,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
