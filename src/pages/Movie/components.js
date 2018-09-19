import styled from 'styled-components';

import media from '../../config/media';

const Wrapper = styled.main`
display: flex;
align-items: flex-end;
height: 100%;
overflow: hidden;

${media.desktop`
align-items: center;
`}
`;

const ImageWrapper = styled.div`
width: 100%;
height: 100%;
position: relative;

${media.desktop`
width: 42%;
`}
`;

const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
opacity: .5;

${media.desktop`
opacity: 1;
`}
`;

const ImageGradientMask = styled.div`
width: 100%;
height: 100%;
background-color: transparent;
position: absolute;

${media.desktop`
background-image: linear-gradient(to left, #000 0%, transparent 10%);
`}
`;

const ContentWrapper = styled.div`
padding: var(--space-3) var(--space-3) var(--space-1);
position: fixed;
bottom: 0;
left: 0;
background: linear-gradient(rgba(0,0,0,0) 0%, #000 60%);

${media.desktop`
width: 58%;
position: initial;
padding: 0 var(--space-1);
`}
`;

const Title = styled.h1`
font-family: 'Montserrat-ExtraBold';
font-size: var(--font-size-2);
color: var(--white);
padding-bottom: var(--space-5);
text-shadow: 0 2px 4px rgba(0, 0, 0, .5);

${media.desktop`
font-size: var(--font-size-1);
`}
`;

const Details = styled.h2`
font-family: 'Montserrat-Medium';
font-size: var(--font-size-7);
color: var(--silver);
line-height: 16px;
padding-bottom: var(--space-4);

${media.desktop`
font-size: var(--font-size-6);
`}
`;

const RatingWrapper = styled.div`
display: flex;
`;

const RatingText = styled.h1`
font-family: 'Montserrat-Medium';
font-size: var(--font-size-6);
color: var(--silver);
line-height: 16px;
padding-left: var(--space-4);

${media.desktop`
font-size: var(--font-size-5);
`}
`;

const Heading = styled.h3`
font-family: 'Montserrat-SemiBold';
font-size: var(--font-size-4);
color: var(--gray);
padding-top: var(--space-2);
text-shadow: 0 2px 4px rgba(0, 0, 0, .5);

${media.desktop`
font-size: var(--font-size-3);
`}
`;

const Sinopse = styled.p`
font-family: 'Montserrat-Medium';
font-size: var(--font-size-7);
color: var(--silver);
line-height: 20px;

${media.desktop`
font-size: var(--font-size-6);
`}
`;

const BackButton = styled.button`
font-family:'Montserrat-Medium';
font-size: var(--font-size-6);
display: flex;
align-items: center;
color: var(--silver);
background: transparent;
position: absolute;
top: var(--space-3);
right: var(--space-3);
cursor: pointer;

span {
  display: none;
}

${media.desktop`
top: 36px;
right: var(--space-2);

span {
  display: block;
  padding-left: var(--space-5);
}
`}
`;

export default {
  Wrapper,
  ImageWrapper,
  Image,
  ImageGradientMask,
  ContentWrapper,
  Title,
  Details,
  RatingWrapper,
  RatingText,
  Heading,
  Sinopse,
  BackButton,
};
