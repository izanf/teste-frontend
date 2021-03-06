import styled from 'styled-components';

import media from '../../config/media';

const Wrapper = styled.div`
display: flex;
align-items: center;
height: 16px;
margin: 0 var(--space-5) 0 auto;
border-radius: 16px;
z-index: 1;

:focus {
  opacity: 1;
}

svg {
  fill: var(--white);
}

${media.desktop`
width: 250px;
background: rgb(255, 255, 255, .25);
padding: var(--space-5);
margin: 0;
`}
`;

const Input = styled.input`
display: none;
font-family: 'Montserrat-MediumItalic';
font-size: var(--font-size-7);
width: 100%;
color: var(--silver);
background: transparent;
border: none;
padding: 12px 15px;

:focus {
  font-family: 'Montserrat-Medium';
}

${media.desktop`
display: block;
`}
`;

const Overlay = styled.div`
width: 100%;
height: 100%;
background: #000;
position: absolute;
top: 0;
left: 0;
`;

const InputWrapper = styled.div`
display: flex;
align-items: center;
margin: var(--space-3);
border-bottom: 2px solid var(--silver);
`;

export default {
  Wrapper,
  Input,
  Overlay,
  InputWrapper,
};
