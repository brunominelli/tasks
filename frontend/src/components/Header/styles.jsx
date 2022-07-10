import styled from 'styled-components';

const Container = styled.header`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.secondary};
  height: 20vh;

  h1 {
    font-size: 3rem;
  }
`;

export default Container;
