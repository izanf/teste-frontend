import styled from 'styled-components';

import media from '../../config/media';

const Wrapper = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
padding: var(--space-3) var(--space-4);

${media.phone`
  padding: var(--space-2) 0;
`}
`;

const Logo = styled.img`
  
`;

export default {
  Wrapper,
  Logo,
};
