import styled from 'styled-components';

const Wrapper = styled.div`
display: flex;
align-items: center;
height: 16px;
padding: var(--space-5);
background: rgb(255, 255, 255, .25);
border-radius: 16px;
opacity: .75;
z-index: 9999;

:focus {
  opacity: 1;
}

svg {
  fill: var(--white);
}
`;

const Input = styled.input`
font-family: 'Montserrat-MediumItalic';
font-size: var(--font-size-7);
color: var(--silver);
background: transparent;
border: none;

:focus {
  font-family: 'Montserrat-Medium';
}
`;

export default {
  Wrapper,
  Input,
};
