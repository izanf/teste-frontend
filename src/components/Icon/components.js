import styled from 'styled-components';

const Icon = styled.img`
width: ${props => props.size};
height: ${props => props.size};
object-fit: cover;

${props => props.onClick && 'cursor: pointer;'}
`;

export default {
  Icon,
};
