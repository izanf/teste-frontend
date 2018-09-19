import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectMovie } from '../../store/movies';

import { sizes } from '../../config/media';
import Components from './components';
import Button from '../../components/Button';
import Rating from '../../components/Rating';
import Icon from '../../components/Icon';

class MovieScreen extends Component {
  componentDidMount() {
    const { match, selectMovie } = this.props;

    selectMovie({ i: match.params.id });
  }

  goBack = () => {
    const { history } = this.props;

    history.push('/');
  }

  render() {
    const { movie, loading } = this.props;
    const isDesktop = window.innerWidth > sizes.desktop;

    if (loading) return <div>loading....</div>;

    return (
      <Components.Wrapper>
        <Components.ImageWrapper>
          <Components.ImageGradientMask />
          <Components.Image src={movie.Poster} />
        </Components.ImageWrapper>
        <Components.ContentWrapper>
          <Components.Title>{movie.Title}</Components.Title>
          <Components.Details>{`${movie.Year} | ${movie.Runtime} | ${movie.Genre}`}</Components.Details>
          <Components.RatingWrapper>
            <Rating value={movie.imdbRating / 2} />
            <Components.RatingText>{movie.imdbRating} / 10</Components.RatingText>
          </Components.RatingWrapper>
          <Components.Heading>Sinopse</Components.Heading>
          <Components.Sinopse>{movie.Plot}</Components.Sinopse>
          {!isDesktop && <Button
            text="Voltar"
            textColor="white"
            color="eclipse"
            onClick={() => this.goBack()}
          />}
        </Components.ContentWrapper>
        <Components.BackButton
          onClick={() => this.goBack()}
        >
          <Icon
            name="close"
            size="24px"
          />
          <span>Voltar</span>
        </Components.BackButton>
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
