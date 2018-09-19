import styled from 'styled-components';

const Wrapper = styled.div`
display: none;
width: 100%;
height: 100%;
background: #000;
position: absolute;
top: 0;
left: 0;

${props => props.show && 'display: block;'}
`;

const Input = styled.input`
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
`;

const InputWrapper = styled.div`
display: flex;
align-items: center;
margin: var(--space-3);
border-bottom: 2px solid var(--silver);
`;

const ListOptions = styled.ul`
margin: var(--space-3);
`;

const Option = styled.li`
font-family: 'Montserrat-Medium';
font-size: var(--font-size-6);
color: var(--white);
padding: 12px 0;
line-height: 16px;
`;

export default {
  Wrapper,
  Input,
  InputWrapper,
  ListOptions,
  Option,
};
