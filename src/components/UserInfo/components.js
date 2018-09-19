import styled from 'styled-components';

const Wrapper = styled.div`
display: flex;
align-items: center;
`;

const Picture = styled.img`
width: 32px;
height: 32px;
object-fit: cover;
border-radius: 100%;
`;

const Name = styled.h1`
font-family: 'Montserrat-Medium';
font-size: var(--font-size-7);
color: var(--silver);
padding-left: var(--space-5);
`;

export default {
  Wrapper,
  Picture,
  Name,
};
