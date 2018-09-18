import styled from 'styled-components';

const Wrapper = styled.main`
display: flex;
align-items: flex-end;
height: 100%;
overflow: hidden;
`;

const ImageWrapper = styled.div`
width: 100%;
height: 100%;
`;

const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
opacity: .5;
`;

const ContentWrapper = styled.div`
padding: var(--space-3) var(--space-3) var(--space-1);
position: fixed;
bottom: 0;
left: 0;
`;

const Title = styled.h1`
font-family: 'Montserrat-ExtraBold';
font-size: var(--font-size-2);
color: var(--white);
padding-bottom: var(--space-5);
`;

const Details = styled.h2`
font-family: 'Montserrat-Medium';
font-size: var(--font-size-7);
color: var(--silver);
line-height: 16px;
`;

const Heading = styled.h3`
font-family: 'Montserrat-SemiBold';
font-size: var(--font-size-4);
color: var(--gray);
padding-top: var(--space-2);
`;

const Sinopse = styled.p`
font-family: 'Montserrat-Medium';
font-size: var(--font-size-7);
color: var(--silver);
line-height: 20px;
`;

export default {
  Wrapper,
  ImageWrapper,
  Image,
  ContentWrapper,
  Title,
  Details,
  Heading,
  Sinopse,
};
