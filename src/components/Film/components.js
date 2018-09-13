import styled from 'styled-components';

import media from '../../config/media';

const Wrapper = styled.li`
display: flex;
border-radius: 3px;
overflow: hidden;
position: relative;
cursor: pointer;

&:hover {
  > div {
    opacity: 1;
  }
}
`;

const Poster = styled.img`
position: absolute;
width: 100%;
height: 150px;
object-fit: cover;

${media.desktop`
  height: 300px;
`}
`;

const Description = styled.div`
display: none;
position: relative;
background: rgba(0, 0, 0, .5);
opacity: 0;
padding: var(--space-4);
transition: all linear .2s;

${media.phone`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`}
`;

const Title = styled.h1`
font-family: 'Montserrat-Bold';
font-size: var(--font-size-5);
line-height: 20px;
margin-bottom: var(--space-5);
color: var(--white);
text-shadow: 0 2px 4px rgba(0, 0, 0, .5);
`;

const Year = styled.h2`
font-family: 'Montserrat-Medium';
font-size: var(--font-size-7);
color: var(--white);
text-shadow: 0 2px 4px rgba(0, 0, 0, .5);
`;

export default {
  Wrapper,
  Poster,
  Description,
  Title,
  Year,
};
