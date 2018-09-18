import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectMovie } from '../../store/movies';

import Components from './components';
import Button from '../../components/Button';

class MovieScreen extends Component {
  componentDidMount() {
    const { match, selectMovie } = this.props;

    selectMovie({ i: match.params.id });
  }

  goBack = () => {
    const { history } = this.props;

    console.log(history);

    history.push('/');
  }

  render() {
    const { movie, loading } = this.props;

    if (loading) return <div>loading....</div>;

    return (
      <Components.Wrapper>
        <Components.ImageWrapper>
          <Components.Image src={movie.Poster} />
        </Components.ImageWrapper>
        <Components.ContentWrapper>
          <Components.Title>{movie.Title}</Components.Title>
          <Components.Details>{`${movie.Year} | ${movie.Runtime} | ${movie.Genre}`}</Components.Details>
          <Components.Heading>Sinopse</Components.Heading>
          <Components.Sinopse>{movie.Plot}</Components.Sinopse>
          <Button
            text="Voltar"
            textColor="white"
            color="nero"
            onClick={() => this.goBack}
          />
        </Components.ContentWrapper>
      </Components.Wrapper>
    );
  }
}

const mapStateToProps = store => ({
  loading: store.movies.loading,
  movie: store.movies.selected,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  selectMovie,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MovieScreen);
