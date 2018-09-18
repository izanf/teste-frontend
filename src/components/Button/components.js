import styled from 'styled-components';

const Wrapper = styled.button`
font-family: 'Montserrat-Medium';
font-size: var(--font-size-6);
width: 100%;
color: var(--${props => props.textColor});
background: var(--${props => props.color});
line-height: 20px;
padding: 10px 0;
border-radius: 3px;
`;

export default {
  Wrapper,
};
