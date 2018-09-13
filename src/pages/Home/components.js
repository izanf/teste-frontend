import styled from 'styled-components';
import media from '../../config/media';

const Wrapper = styled.div`
  padding: 1rem;

  ${media.desktop`
    padding: 1rem 3.5rem;
  `}
`;

const Title = styled.h1`
  font-family: 'Montserrat-Medium';
  color: var(--silver);
`;

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 9px;
  grid-auto-rows: 150px;

  ${media.desktop`
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 62px;
    grid-auto-rows: 300px;
  `}
`;

const Item = styled.li`
  border-radius: 3px;
  overflow: hidden;
`;

const Poster = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;

  ${media.desktop`
    height: 300px;
  `}
`;

export default {
  Wrapper,
  Title,
  List,
  Item,
  Poster,
};
