import styled from 'styled-components';

import media from '../../config/media';

const Wrapper = styled.main`
padding: 0 var(--space-5);

${media.desktop`
  padding: 0 2rem;
`}
`;

const Title = styled.h1`
font-family: 'Montserrat-SemiBold';
font-size: var(--font-size-3);
color: var(--silver);
padding: var(--space-5);
text-shadow: 0 2px 4px rgba(0, 0, 0, .5);

${media.phone`
  padding: 0 0 var(--space-4);
`}
`;

const Movies = styled.ul`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-gap: 9px;
grid-auto-rows: 150px;

${media.phone`
  grid-template-columns: repeat(4, 1fr);
`}

${media.tablet`
  grid-template-columns: repeat(6, 1fr);
`}

${media.desktop`
  grid-gap: 30px;
  grid-auto-rows: 300px;
`}
`;

const NotFound = styled.p`
font-family: 'Montserrat-ExtraBold';
font-size: var(--font-size-1);
text-align: center;
color: var(--white);
`;

export default {
  Wrapper,
  Title,
  Movies,
  NotFound,
};
